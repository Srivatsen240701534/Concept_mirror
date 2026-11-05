// src/services/evaluator.ts
// Local, rule-based Part B 11-Mark Answer Analyser Engine
// Offline evaluation matching keywords, phrases, synonyms, and concept groups without external APIs.

import {
  ConceptEvaluation,
  ExpectedConcept,
  PartBQuestion,
  PartBEvaluationResult,
} from '../types';

interface CleanedTextData {
  raw: string;
  normalized: string;
  words: string[];
  wordCount: number;
  sentences: string[];
  stemmedWords: Set<string>;
}

// Simple English stemming/root helper
function simpleStem(word: string): string {
  const w = word.toLowerCase().trim();
  if (w.length <= 3) return w;
  if (w.endsWith('ing') && w.length > 5) return w.slice(0, -3);
  if (w.endsWith('tion') && w.length > 6) return w.slice(0, -4);
  if (w.endsWith('tions') && w.length > 7) return w.slice(0, -5);
  if (w.endsWith('ment') && w.length > 6) return w.slice(0, -4);
  if (w.endsWith('ness') && w.length > 6) return w.slice(0, -4);
  if (w.endsWith('able') && w.length > 6) return w.slice(0, -4);
  if (w.endsWith('ible') && w.length > 6) return w.slice(0, -4);
  if (w.endsWith('ies') && w.length > 5) return w.slice(0, -3) + 'y';
  if (w.endsWith('es') && w.length > 4) return w.slice(0, -2);
  if (w.endsWith('ed') && w.length > 4) return w.slice(0, -2);
  if (w.endsWith('s') && !w.endsWith('ss') && w.length > 3) return w.slice(0, -1);
  return w;
}

// Preprocess and normalize student text
function preprocessText(text: string): CleanedTextData {
  const raw = text.trim();
  const normalized = raw
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = normalized ? normalized.split(' ').filter(Boolean) : [];
  const sentences = raw
    .split(/[.!?\n]+/)
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s.length > 3);

  const stemmedWords = new Set<string>();
  words.forEach((w) => {
    stemmedWords.add(w);
    stemmedWords.add(simpleStem(w));
  });

  return {
    raw,
    normalized,
    words,
    wordCount: words.length,
    sentences,
    stemmedWords,
  };
}

// Check if a keyword or its synonyms are present in the text
function matchKeywordOrSynonyms(
  keyword: string,
  synonymsMap: Record<string, string[]> | undefined,
  data: CleanedTextData
): { matched: boolean; matchedTerm: string } {
  const kwLower = keyword.toLowerCase().trim();
  const kwStem = simpleStem(kwLower);

  // 1. Direct multi-word phrase match in normalized text
  if (data.normalized.includes(kwLower)) {
    return { matched: true, matchedTerm: keyword };
  }

  // 2. Direct stem match
  if (data.stemmedWords.has(kwLower) || data.stemmedWords.has(kwStem)) {
    return { matched: true, matchedTerm: keyword };
  }

  // 3. Synonym matches
  const syns = synonymsMap?.[keyword] || [];
  for (const syn of syns) {
    const synLower = syn.toLowerCase().trim();
    const synStem = simpleStem(synLower);
    if (data.normalized.includes(synLower) || data.stemmedWords.has(synLower) || data.stemmedWords.has(synStem)) {
      return { matched: true, matchedTerm: `${keyword} (as "${syn}")` };
    }
  }

  return { matched: false, matchedTerm: '' };
}

// Check for negation around matched terms
function isConceptNegated(concept: ExpectedConcept, data: CleanedTextData): boolean {
  const negations = ['not', 'no', 'never', 'without', 'neither', 'nor', 'lacks', 'fails to', 'incorrect'];
  for (const sentence of data.sentences) {
    const hasNegation = negations.some((neg) => sentence.includes(neg));
    if (hasNegation) {
      const mentionsConcept = concept.requiredKeywords.some((kw) =>
        sentence.includes(kw.toLowerCase())
      );
      if (mentionsConcept && (sentence.includes('is not') || sentence.includes('does not') || sentence.includes('not applicable'))) {
        return true;
      }
    }
  }
  return false;
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

    // Check required keywords & synonyms
    concept.requiredKeywords.forEach((kw) => {
      const res = matchKeywordOrSynonyms(kw, concept.synonyms, data);
      if (res.matched) {
        matchedKeywords.push(res.matchedTerm);
      } else {
        missingKeywords.push(kw);
      }
    });

    // Check key phrases
    let phraseMatches = 0;
    concept.keyPhrases.forEach((phrase) => {
      if (data.normalized.includes(phrase.toLowerCase())) {
        phraseMatches++;
      }
    });

    const isNegated = isConceptNegated(concept, data);
    const keywordCoverageRatio = concept.requiredKeywords.length > 0
      ? matchedKeywords.length / concept.requiredKeywords.length
      : 0;

    let status: 'covered' | 'partial' | 'missing' = 'missing';
    let awardedMarks = 0;
    let feedback = '';

    if (isNegated) {
      status = 'missing';
      awardedMarks = 0;
      feedback = `Negation detected: The answer suggests this concept is absent or incorrect.`;
    } else if (keywordCoverageRatio >= 0.65 || (keywordCoverageRatio >= 0.5 && phraseMatches > 0)) {
      status = 'covered';
      awardedMarks = concept.weight;
      coveredConceptsCount++;
      feedback = `Thorough coverage! Successfully incorporated key principles: ${matchedKeywords.slice(0, 3).join(', ')}.`;
    } else if (keywordCoverageRatio > 0.2 || phraseMatches > 0 || matchedKeywords.length >= 1) {
      status = 'partial';
      // Partial award: 50% of weight, rounded to 1 decimal place
      awardedMarks = Math.round((concept.weight * 0.5) * 2) / 2;
      partialConceptsCount++;
      feedback = `Partially addressed. Key terms matched: ${matchedKeywords.join(', ') || 'Partial phrase'}. Missing essential depth on: ${missingKeywords.slice(0, 2).join(', ')}.`;
    } else {
      status = 'missing';
      awardedMarks = 0;
      feedback = `Missing concept. Expected core principles such as ${missingKeywords.slice(0, 3).join(', ')}.`;
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
  const rawCompleteness = totalConcepts > 0
    ? ((coveredConceptsCount * 1.0 + partialConceptsCount * 0.5) / totalConcepts) * 100
    : 0;

  // Elaborative length penalty/bonus (university 11-mark answers require structured elaboration)
  // An adequate 11-mark answer is typically 120 - 400 words
  let lengthFactor = 1.0;
  if (data.wordCount < 40) {
    lengthFactor = 0.6; // Severe brevity penalty: too short for an 11-mark answer
  } else if (data.wordCount < 80) {
    lengthFactor = 0.8;
  } else if (data.wordCount >= 100 && data.wordCount <= 450) {
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

  if (data.wordCount < 80) {
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

  if (!data.normalized.includes('diagram') && !data.normalized.includes('architecture') && !data.normalized.includes('structure')) {
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
