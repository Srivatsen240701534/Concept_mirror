// src/services/evaluator.ts
// Local, rule-based Part B 11-Mark Answer Analyser Engine
// Offline semantic evaluation matching keywords, phrases, synonyms, abbreviations,
// functional definitions, and sentence context without external APIs.

import {
  ConceptEvaluation,
  ExpectedConcept,
  PartBQuestion,
  PartBEvaluationResult,
} from '../types';
import {
  ABBREVIATIONS,
  DOMAIN_SYNONYMS,
  FUNCTIONAL_DEFINITIONS,
  TECHNICAL_MISCONCEPTIONS,
  expandAbbreviationsInText,
} from './conceptDictionary';

interface CleanedTextData {
  raw: string;
  normalized: string;
  words: string[];
  wordCount: number;
  sentences: string[];
  isKeywordStuffing: boolean;
  connectorRatio: number;
}

// Normalize dotted abbreviations (e.g. "T.C.P." -> "TCP", "U.D.P." -> "UDP", "D.F.A." -> "DFA")
function normalizeDottedAbbreviations(text: string): string {
  return text.replace(/\b([a-zA-Z])\.([a-zA-Z])\.([a-zA-Z])?\.?([a-zA-Z])?\.?\b/g, (match) => {
    return match.replace(/\./g, '').toUpperCase();
  });
}

// Detect keyword stuffing: comma-separated word lists devoid of grammatical connectors/predicates
function checkKeywordStuffing(rawText: string, words: string[]): { isStuffing: boolean; connectorRatio: number } {
  if (words.length < 5) return { isStuffing: false, connectorRatio: 0.5 };

  const connectors = new Set([
    'the', 'a', 'an', 'is', 'are', 'was', 'were', 'of', 'in', 'to', 'for', 'with',
    'by', 'and', 'or', 'that', 'this', 'as', 'from', 'which', 'when', 'where', 'how',
    'it', 'its', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
    'can', 'could', 'will', 'would', 'should', 'between', 'into', 'through', 'across',
    'defines', 'means', 'provides', 'requires', 'uses', 'consists', 'includes', 'operates'
  ]);

  let connectorCount = 0;
  for (const w of words) {
    if (connectors.has(w)) connectorCount++;
  }

  const connectorRatio = connectorCount / words.length;
  const commaCount = (rawText.match(/,/g) || []).length;
  const isHighCommaList = commaCount >= 6 && commaCount >= words.length * 0.2;

  const isStuffing = connectorRatio < 0.08 || (isHighCommaList && connectorRatio < 0.15);
  return { isStuffing, connectorRatio };
}

// Preprocess and analyze student text with multi-pass normalization
function preprocessText(text: string): CleanedTextData {
  const raw = text.trim();
  const dottedNormalized = normalizeDottedAbbreviations(raw);

  // Normalize spaces and lowercase
  const normalized = dottedNormalized
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = normalized ? normalized.split(' ').filter(Boolean) : [];

  const sentences = dottedNormalized
    .split(/[.!?\n;]+/)
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s.length > 2);

  const { isStuffing, connectorRatio } = checkKeywordStuffing(raw, words);

  return {
    raw,
    normalized,
    words,
    wordCount: words.length,
    sentences,
    isKeywordStuffing: isStuffing,
    connectorRatio,
  };
}

// Generate root and technical morphological variants of a term
function getMorphologicalVariants(word: string): string[] {
  const w = word.toLowerCase().trim().replace(/[-_]/g, '');
  const variants = new Set<string>([word.toLowerCase().trim(), w]);

  // Strip plural endings
  if (w.endsWith('ies') && w.length > 4) variants.add(w.slice(0, -3) + 'y');
  if (w.endsWith('es') && w.length > 3) variants.add(w.slice(0, -2));
  if (w.endsWith('s') && !w.endsWith('ss') && w.length > 2) variants.add(w.slice(0, -1));

  // Common technical suffix derivations
  // e.g. operational -> opera, operation -> opera, comparative -> compar, comparison -> compar
  const suffixRegex = /(tional|tion|ive|ison|ing|ed|ment|ance|ence|ability|ibility|ic|ical)$/;
  const root = w.replace(suffixRegex, '');
  if (root.length >= 4) {
    variants.add(root);
  }

  // Common specific technical pairs
  if (w.includes('operat')) variants.add('operation');
  if (w.includes('compar')) variants.add('comparison');
  if (w.includes('tradeoff') || w.includes('trade-off')) {
    variants.add('trade-off');
    variants.add('tradeoff');
    variants.add('tradeoffs');
  }

  return Array.from(variants);
}

/**
 * Check if a concept keyword matches via:
 * 1. Direct word or phrase
 * 2. Parenthesized acronym / full form (e.g. "PDU (Protocol Data Unit)")
 * 3. Bidirectional abbreviation expansion (e.g. TCP <-> Transmission Control Protocol)
 * 4. Technical morphological variants / roots (e.g. operational <-> operation, compared <-> comparison)
 * 5. Domain-specific technical synonyms (e.g. router <-> packet forwarder, latency <-> delay)
 */
function matchKeywordOrSynonyms(
  keyword: string,
  localSynonyms: Record<string, string[]> | undefined,
  data: CleanedTextData
): { matched: boolean; matchedTerm: string } {
  const kwLower = keyword.toLowerCase().trim();
  const kwNorm = kwLower.replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();

  // 1. Direct multi-word phrase match
  if (data.normalized.includes(kwNorm) || data.raw.toLowerCase().includes(kwLower)) {
    return { matched: true, matchedTerm: keyword };
  }

  // 2. Parenthesized or slash breakdown
  // e.g., "PDU (Protocol Data Unit)" -> checks "PDU", "PDUs", "Protocol Data Unit"
  // e.g., "CSMA/CD" -> checks "CSMA/CD", "CSMA-CD", "CSMACD", "CSMA", "CD"
  const subComponents = keyword
    .split(/[\(\)\/]/)
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s.length >= 2);

  if (subComponents.length > 1) {
    for (const comp of subComponents) {
      const compNorm = comp.replace(/[^\w\s]/g, ' ').trim();
      if (data.normalized.includes(compNorm)) {
        return { matched: true, matchedTerm: `${keyword} (as "${comp}")` };
      }
      // Check plural / singular
      if (compNorm.endsWith('s') && data.normalized.includes(compNorm.slice(0, -1))) {
        return { matched: true, matchedTerm: `${keyword} (as "${comp}")` };
      }
      if (!compNorm.endsWith('s') && data.normalized.includes(compNorm + 's')) {
        return { matched: true, matchedTerm: `${keyword} (as "${comp}s")` };
      }
    }
  }

  // 3. Bidirectional Abbreviation Dictionary Match
  // If keyword is an abbreviation (e.g. "TCP"), accept full form ("Transmission Control Protocol")
  // If keyword is full form, accept abbreviation
  for (const abbr of ABBREVIATIONS) {
    const shortLower = abbr.shortForm.toLowerCase();
    const fullLower = abbr.fullForm.toLowerCase();

    // Concept requires short form, student wrote full form
    if ((kwLower === shortLower || kwNorm === shortLower) && data.normalized.includes(fullLower)) {
      return { matched: true, matchedTerm: `${keyword} (as "${abbr.fullForm}")` };
    }

    // Concept requires full form, student wrote short form
    if (kwLower === fullLower || kwNorm === fullLower) {
      if (data.normalized.includes(shortLower) || data.raw.toLowerCase().includes(shortLower)) {
        return { matched: true, matchedTerm: `${keyword} (as "${abbr.shortForm}")` };
      }
      if (abbr.aliases) {
        for (const alias of abbr.aliases) {
          if (data.normalized.includes(alias.toLowerCase())) {
            return { matched: true, matchedTerm: `${keyword} (as "${alias}")` };
          }
        }
      }
    }

    // Keyword contains abbreviation, e.g. "TCP/IP"
    if (kwLower.includes(shortLower) && data.normalized.includes(fullLower)) {
      return { matched: true, matchedTerm: `${keyword} (as "${abbr.fullForm}")` };
    }
  }

  // 4. Morphological root & variant matching
  // Matches "operational" <-> "operation", "compared" <-> "comparison", "boundaries" <-> "boundary"
  const variants = getMorphologicalVariants(kwNorm);
  for (const variant of variants) {
    if (variant.length >= 3 && data.normalized.includes(variant)) {
      return { matched: true, matchedTerm: `${keyword} (as "${variant}")` };
    }
  }

  // 5. Local Concept Synonyms
  const localSyns = localSynonyms?.[keyword] || [];
  for (const syn of localSyns) {
    const synLower = syn.toLowerCase().trim();
    if (data.normalized.includes(synLower)) {
      return { matched: true, matchedTerm: `${keyword} (as "${syn}")` };
    }
    const synVariants = getMorphologicalVariants(synLower);
    for (const sv of synVariants) {
      if (sv.length >= 3 && data.normalized.includes(sv)) {
        return { matched: true, matchedTerm: `${keyword} (as "${syn}")` };
      }
    }
  }

  // 6. Global Domain-Specific Synonyms
  for (const [canonical, synList] of Object.entries(DOMAIN_SYNONYMS)) {
    const matchesCanonical = kwLower.includes(canonical) || canonical.includes(kwLower);
    if (matchesCanonical) {
      for (const syn of synList) {
        const synLower = syn.toLowerCase().trim();
        if (data.normalized.includes(synLower)) {
          return { matched: true, matchedTerm: `${keyword} (as "${syn}")` };
        }
      }
    }
  }

  return { matched: false, matchedTerm: '' };
}

/**
 * Check if student expressed equivalent functional definition / explanation
 * e.g. "device that forwards packets between networks" for Router
 * e.g. "converts domain names into IP addresses" for DNS
 */
function matchFunctionalDefinitions(
  concept: ExpectedConcept,
  subjectId: 'cn' | 'ai' | 'toc' | 'mc' | 'gk',
  data: CleanedTextData
): { matched: boolean; matchedExplanation: string } {
  const conceptNameLower = concept.name.toLowerCase();
  const conceptKeywords = concept.requiredKeywords.map((k) => k.toLowerCase());

  for (const def of FUNCTIONAL_DEFINITIONS) {
    if (def.subjectId !== subjectId) continue;

    // Check if this functional definition is relevant to the current concept
    const isRelevantToConcept =
      conceptNameLower.includes(def.conceptKey) ||
      conceptKeywords.some((k) => k.includes(def.conceptKey) || def.conceptKey.includes(k)) ||
      concept.description.toLowerCase().includes(def.conceptKey);

    if (isRelevantToConcept) {
      for (const pattern of def.patterns) {
        if (pattern.test(data.raw) || pattern.test(data.normalized)) {
          return {
            matched: true,
            matchedExplanation: def.canonicalTerm,
          };
        }
      }
    }
  }

  return { matched: false, matchedExplanation: '' };
}

/**
 * Check for negation or technical contradiction around concepts
 */
function checkNegationAndContradiction(
  concept: ExpectedConcept,
  data: CleanedTextData
): { isNegated: boolean; reason: string } {
  // 1. Direct negations around required keywords
  const negations = ['not', 'no', 'never', 'without', 'neither', 'nor', 'lacks', 'fails to', 'incorrect'];
  for (const sent of data.sentences) {
    const hasNegation = negations.some(
      (neg) => sent.includes(` ${neg} `) || sent.startsWith(`${neg} `)
    );
    if (hasNegation) {
      const mentionsConcept = concept.requiredKeywords.some((kw) =>
        sent.includes(kw.toLowerCase())
      );
      if (
        mentionsConcept &&
        (sent.includes('is not') ||
          sent.includes('does not') ||
          sent.includes('cannot') ||
          sent.includes('not applicable') ||
          sent.includes('fails to satisfy'))
      ) {
        return {
          isNegated: true,
          reason: `Negation detected: The student explicitly stated this concept is absent, not applicable, or not satisfied.`,
        };
      }
    }
  }

  // 2. Factually inverted technical misconceptions
  for (const rule of TECHNICAL_MISCONCEPTIONS) {
    for (const pattern of rule.contradictionPatterns) {
      if (pattern.test(data.raw) || pattern.test(data.normalized)) {
        return {
          isNegated: true,
          reason: `Contradiction detected: ${rule.explanation}`,
        };
      }
    }
  }

  return { isNegated: false, reason: '' };
}

/**
 * Main Evaluation Engine for Part B (11 Marks)
 */
export function evaluatePartBAnswer(
  question: PartBQuestion,
  studentAnswer: string,
  timeTakenSeconds: number
): PartBEvaluationResult {
  const data = preprocessText(studentAnswer);
  const conceptEvaluations: ConceptEvaluation[] = [];

  let totalAwardedMarks = 0;
  let totalPossibleWeight = 0;
  let coveredConceptsCount = 0;
  let partialConceptsCount = 0;

  question.expectedConcepts.forEach((concept) => {
    totalPossibleWeight += concept.weight;
    const matchedKeywords: string[] = [];
    const missingKeywords: string[] = [];

    // 1. Check required keywords & synonyms & abbreviations
    concept.requiredKeywords.forEach((kw) => {
      const res = matchKeywordOrSynonyms(kw, concept.synonyms, data);
      if (res.matched) {
        matchedKeywords.push(res.matchedTerm);
      } else {
        missingKeywords.push(kw);
      }
    });

    // 2. Check key phrases
    let phraseMatches = 0;
    concept.keyPhrases.forEach((phrase) => {
      if (data.normalized.includes(phrase.toLowerCase())) {
        phraseMatches++;
        matchedKeywords.push(`Key phrase: "${phrase}"`);
      }
    });

    // 3. Check functional definitions / equivalent semantic explanations
    const functionalRes = matchFunctionalDefinitions(concept, question.subjectId, data);
    if (functionalRes.matched) {
      matchedKeywords.push(`Functional explanation: "${functionalRes.matchedExplanation}"`);
    }

    // 4. Check for negation or technical contradiction
    const { isNegated, reason } = checkNegationAndContradiction(concept, data);

    const keywordCoverageRatio =
      concept.requiredKeywords.length > 0
        ? matchedKeywords.length / concept.requiredKeywords.length
        : 0;

    let status: 'covered' | 'partial' | 'missing' = 'missing';
    let awardedMarks = 0;
    let feedback = '';

    if (isNegated) {
      status = 'missing';
      awardedMarks = 0;
      feedback = reason;
    } else if (data.isKeywordStuffing) {
      // Keyword stuffing detected: student dumped comma-separated terms without connective prose
      if (matchedKeywords.length >= 1) {
        status = 'partial';
        // Cap marks at 30% for keyword list dumping
        awardedMarks = Math.round((concept.weight * 0.3) * 2) / 2;
        partialConceptsCount++;
        feedback = `Partial mention only. Terms appeared in a raw keyword list without explanatory sentences or causal analysis.`;
      } else {
        status = 'missing';
        awardedMarks = 0;
        feedback = `Missing concept. Expected core principles such as ${missingKeywords.slice(0, 3).join(', ')}.`;
      }
    } else if (
      // Legitimate student answer: full coverage
      functionalRes.matched ||
      keywordCoverageRatio >= 0.5 ||
      (keywordCoverageRatio >= 0.33 && phraseMatches > 0) ||
      (concept.requiredKeywords.length === 1 && matchedKeywords.length >= 1) ||
      matchedKeywords.length >= 3
    ) {
      status = 'covered';
      awardedMarks = concept.weight;
      coveredConceptsCount++;
      feedback = `Thorough coverage! Successfully incorporated key principles: ${matchedKeywords.slice(0, 3).join(', ')}.`;
    } else if (
      // Partial coverage
      keywordCoverageRatio >= 0.2 ||
      phraseMatches > 0 ||
      matchedKeywords.length >= 1
    ) {
      status = 'partial';
      // Partial award: 50% of weight, rounded to 0.5 decimal place
      awardedMarks = Math.round((concept.weight * 0.5) * 2) / 2;
      partialConceptsCount++;
      feedback = `Partially addressed. Key principles matched: ${matchedKeywords.join(', ') || 'Partial phrase'}. Deepen technical depth on: ${missingKeywords.slice(0, 2).join(', ') || 'boundary constraints'}.`;
    } else {
      status = 'missing';
      awardedMarks = 0;
      feedback = `Missing concept. Expected core principles such as ${missingKeywords.slice(0, 3).join(', ') || concept.name}.`;
    }

    totalAwardedMarks += awardedMarks;

    conceptEvaluations.push({
      conceptId: concept.id,
      conceptName: concept.name,
      weight: concept.weight,
      awardedMarks,
      status,
      matchedKeywords,
      missingKeywords,
      feedback,
    });
  });

  // Calculate completeness score (0 to 100%)
  const totalConcepts = question.expectedConcepts.length;
  const rawCompleteness =
    totalConcepts > 0
      ? ((coveredConceptsCount * 1.0 + partialConceptsCount * 0.5) / totalConcepts) * 100
      : 0;

  // Elaborative length penalty/bonus (university 11-mark answers require structured elaboration)
  // An adequate 11-mark answer is typically 100 - 450 words
  let lengthFactor = 1.0;
  if (data.wordCount < 35) {
    lengthFactor = 0.6; // Brevity penalty: too short for an 11-mark university response
  } else if (data.wordCount < 70) {
    lengthFactor = 0.85;
  } else if (data.wordCount >= 70 && data.wordCount <= 450) {
    lengthFactor = 1.0; // Optimal length range
  } else if (data.wordCount > 550) {
    lengthFactor = 0.95; // Slight verbosity penalty
  }

  // Final adjusted marks capped at 11
  let adjustedScore = Math.round(totalAwardedMarks * lengthFactor * 2) / 2;
  if (adjustedScore > 11) adjustedScore = 11;
  if (adjustedScore < 0) adjustedScore = 0;

  const percentage = Math.round((adjustedScore / 11) * 100);

  // Generate actionable improvement suggestions
  const improvementSuggestions: string[] = [];
  const missingItems = conceptEvaluations.filter((c) => c.status === 'missing');
  const partialItems = conceptEvaluations.filter((c) => c.status === 'partial');

  if (data.wordCount < 70) {
    improvementSuggestions.push(
      `Elaborate further: An 11-mark university response typically requires at least 150-250 words with structured headings and diagrams (your submission was ${data.wordCount} words).`
    );
  }

  if (missingItems.length > 0) {
    improvementSuggestions.push(
      `Integrate missing concepts: Focus on explaining "${missingItems.map((m) => m.conceptName).join('", "')}".`
    );
  }

  if (partialItems.length > 0) {
    improvementSuggestions.push(
      `Deepen partial topics: Provide formal definitions and causal mechanisms for "${partialItems.map((p) => p.conceptName).join('", "')}".`
    );
  }

  if (
    !data.normalized.includes('diagram') &&
    !data.normalized.includes('architecture') &&
    !data.normalized.includes('structure') &&
    !data.normalized.includes('schematic')
  ) {
    improvementSuggestions.push(
      `Include visual/text diagrams: University examiners award up to 2-3 marks for clear structural schematics and state diagrams.`
    );
  }

  if (improvementSuggestions.length === 0) {
    improvementSuggestions.push(
      `Outstanding response! Maintain this structured format with definitions, operational mechanics, and real-world examples.`
    );
  }

  let overallFeedback = '';
  if (adjustedScore >= 9) {
    overallFeedback = `Excellent Answer! Your response demonstrates comprehensive mastery of ${question.topicTitle}, covering all required rubric dimensions with technical precision.`;
  } else if (adjustedScore >= 7) {
    overallFeedback = `Good Effort. You demonstrated sound conceptual knowledge of the core principles, but missed specific technical definitions or boundary conditions.`;
  } else if (adjustedScore >= 4.5) {
    overallFeedback = `Developing Answer. You touched upon basic terminology, but the response lacks detailed operational mechanics and diagrams needed for full 11-mark credit.`;
  } else {
    overallFeedback = `Needs Significant Revision. The submission was incomplete or missed the primary expected concepts of ${question.topicTitle}. Please review the reference model answer below.`;
  }

  return {
    id: `eval-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    questionId: question.id,
    subjectId: question.subjectId,
    topicId: question.topicId,
    topicTitle: question.topicTitle,
    questionText: question.question,
    studentAnswer: rawTextSafe(studentAnswer),
    wordCount: data.wordCount,
    timeTakenSeconds,
    submittedAt: new Date().toISOString(),
    totalScore: adjustedScore,
    percentage,
    completenessScore: Math.round(rawCompleteness),
    conceptEvaluations,
    overallFeedback,
    improvementSuggestions,
    modelAnswer: question.modelAnswer,
    disclaimer:
      'Note: This score is generated by an offline heuristic evaluation engine for formative practice and self-assessment. It does not constitute official university examination marking.',
  };
}

function rawTextSafe(text: string): string {
  return text || '';
}
