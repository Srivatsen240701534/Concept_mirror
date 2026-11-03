import {
  ALL_DEMO_DATASETS,
  findDemoDataset,
  getDemoDatasetById,
  NormalizedDemoDataset,
} from '../data/demoDatasets';
import {
  AnswerEvaluation,
  DemoDataset,
  ExamQuestion,
  ExamSession,
  LearningTopic,
} from '../types';

export interface HealthCheckResponse {
  status: string;
  hasGeminiKey: boolean;
  model: string;
}

export async function checkServerHealth(): Promise<HealthCheckResponse> {
  try {
    const res = await fetch('/api/health');
    if (!res.ok) {
      return { status: 'offline', hasGeminiKey: false, model: 'none' };
    }
    return await res.json();
  } catch {
    return { status: 'offline', hasGeminiKey: false, model: 'none' };
  }
}

/**
 * Converts a DemoDataset into a full LearningTopic
 */
export function demoDatasetToLearningTopic(
  dataset: NormalizedDemoDataset | DemoDataset | any,
  customDifficulty?: string,
  customStyle?: string
): LearningTopic {
  const title = dataset.title || dataset.topic || 'Untitled Topic';
  const summary = dataset.explanation?.summary || dataset.summary || dataset.description || '';
  const keyConcepts = dataset.explanation?.keyConcepts || [];

  return {
    id: `topic-${dataset.id}-${Date.now()}`,
    title,
    subject: dataset.subject,
    difficulty: (customDifficulty as any) || dataset.difficulty,
    style: (customStyle as any) || 'Detailed',
    prerequisites: dataset.explanation?.prerequisites || [],
    summary,
    analogies: [
      `A clear mental model for understanding ${title} in real-world application.`,
      `Core structural behavior reflecting the foundational principles of ${dataset.subject}.`
    ],
    concepts: keyConcepts.map((kc: any, idx: number) => ({
      id: `concept-${dataset.id}-${idx + 1}`,
      title: kc.name,
      explanation: kc.explanation,
      practicalExample: kc.importance,
      relationships: keyConcepts
        .filter((_: any, i: number) => i !== idx)
        .slice(0, 2)
        .map((c: any) => c.name),
    })),
    createdAt: new Date().toISOString(),
    isDemo: true,
  };
}

/**
 * Generate comprehensive topic explanation.
 * Live AI mode calls Gemini server API; Demo mode picks from 50+ curated datasets.
 */
export async function generateTopicExplanationApi(
  topicName: string,
  subject: string,
  difficulty: string,
  style: string,
  isDemoMode: boolean,
  datasetId?: string
): Promise<{ ok: boolean; topic?: LearningTopic; isDemo: boolean; error?: string }> {
  // If demo mode is active
  if (isDemoMode) {
    let dataset: DemoDataset | undefined;
    if (datasetId) {
      dataset = getDemoDatasetById(datasetId);
    }
    if (!dataset) {
      dataset = findDemoDataset(topicName) || findDemoDataset(subject) || ALL_DEMO_DATASETS[0];
    }

    const topic = demoDatasetToLearningTopic(dataset, difficulty, style);
    return {
      ok: true,
      isDemo: true,
      topic,
    };
  }

  // Live AI mode: pass user's exact topicName and subject to Gemini server route
  try {
    const res = await fetch('/api/learn/explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topicName, subject, difficulty, style }),
    });

    const json = await res.json();
    if (json.ok && json.data) {
      const topic: LearningTopic = {
        id: `topic-${Date.now()}`,
        title: topicName,
        subject: json.data.subject || subject,
        difficulty: (difficulty as any) || 'Intermediate',
        style: (style as any) || 'Detailed',
        prerequisites: json.data.prerequisites || [],
        summary: json.data.summary || '',
        analogies: json.data.analogies || [],
        concepts: json.data.concepts || [],
        createdAt: new Date().toISOString(),
        isDemo: false,
      };
      return { ok: true, topic, isDemo: false };
    }

    // Honest error reporting: never silently substitute a random fallback
    return {
      ok: false,
      isDemo: false,
      error: json.error || 'Live AI failed to generate topic explanation. Please check your network or try switching to Demo Mode.',
    };
  } catch (err: any) {
    return {
      ok: false,
      isDemo: false,
      error: err?.message || 'Network error communicating with ConceptMirror Live AI engine.',
    };
  }
}

/**
 * Generate adaptive exam question.
 * Live AI mode uses real-time adaptive generation; Demo mode uses the chosen dataset's questions.
 */
export async function generateAdaptiveQuestionApi(
  topicTitle: string,
  subject: string,
  difficulty: string,
  questionNumber: number,
  questionTypeCategory: string,
  previousAnswers: any[],
  misconceptionsDetected: string[],
  isDemoMode: boolean,
  datasetId?: string
): Promise<{ ok: boolean; question?: ExamQuestion; isDemo: boolean; error?: string }> {
  if (isDemoMode) {
    const dataset = (datasetId ? getDemoDatasetById(datasetId) : undefined) ||
      findDemoDataset(topicTitle) ||
      findDemoDataset(subject) ||
      ALL_DEMO_DATASETS[0];

    const qList = dataset.questions;
    const qIndex = (questionNumber - 1) % qList.length;
    const rawQ = qList[qIndex];

    const q: ExamQuestion = {
      id: `demo-q-${dataset.id}-${questionNumber}`,
      questionNumber,
      conceptTargeted: rawQ.conceptTargeted,
      questionType: 'short_answer',
      difficulty: rawQ.difficulty || difficulty || 'Intermediate',
      questionText: rawQ.questionText || rawQ.question || 'Explain the core mechanics.',
      contextScenario: `Context: Exploring foundational and edge conditions in ${dataset.title} (${dataset.subject}).`,
      correctAnswerSummary: rawQ.correctAnswerSummary || rawQ.idealAnswer || 'Canonical explanation.',
      evaluationCriteria: [
        `Identify core principles of ${rawQ.conceptTargeted}`,
        `Explain causal mechanisms and functional significance`,
        `Avoid common misconceptions in ${dataset.domain}`,
      ],
      adaptiveReason: questionNumber === 1
        ? `Baseline assessment question targeting foundational comprehension of ${rawQ.conceptTargeted}.`
        : `Adaptive progression targeting concept depth following Question #${questionNumber - 1}.`,
    };

    return { ok: true, question: q, isDemo: true };
  }

  // Live AI mode
  try {
    const res = await fetch('/api/exam/generate-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topicTitle,
        subject,
        difficulty,
        questionNumber,
        questionTypeCategory,
        previousAnswers,
        misconceptionsDetected,
      }),
    });

    const json = await res.json();
    if (json.ok && json.data) {
      const q: ExamQuestion = {
        id: `q-${Date.now()}`,
        questionNumber,
        conceptTargeted: json.data.conceptTargeted || 'Core Concept',
        questionType: json.data.questionType || 'short_answer',
        difficulty: json.data.difficulty || difficulty || 'Intermediate',
        questionText: json.data.questionText,
        contextScenario: json.data.contextScenario,
        options: json.data.options,
        correctAnswerSummary: json.data.correctAnswerSummary,
        evaluationCriteria: json.data.evaluationCriteria,
        adaptiveReason: json.data.adaptiveReason,
      };
      return { ok: true, question: q, isDemo: false };
    }

    return {
      ok: false,
      isDemo: false,
      error: json.error || 'Live AI question generation encountered an issue.',
    };
  } catch (err: any) {
    return {
      ok: false,
      isDemo: false,
      error: err?.message || 'Network error connecting to AI question generator.',
    };
  }
}

/**
 * Evaluate student answer and reasoning.
 * Live AI mode evaluates via Gemini server route; Demo mode checks dataset sample answers or dynamic rubric.
 */
export async function evaluateStudentAnswerApi(
  topicTitle: string,
  subject: string,
  question: ExamQuestion,
  studentResponse: string,
  reasoningText: string,
  isDemoMode: boolean,
  datasetId?: string
): Promise<{ ok: boolean; evaluation?: AnswerEvaluation; isDemo: boolean; error?: string }> {
  if (isDemoMode) {
    const dataset = (datasetId ? getDemoDatasetById(datasetId) : undefined) ||
      findDemoDataset(topicTitle) ||
      findDemoDataset(subject) ||
      ALL_DEMO_DATASETS[0];

    const combinedText = `${studentResponse} ${reasoningText || ''}`.toLowerCase().trim();

    // Check if the dataset has curated sample answers for this question
    const matchedSample = dataset.sampleAnswers?.find(
      (sa: any) => sa.questionId === question.id || combinedText.includes(sa.studentAnswer.toLowerCase().slice(0, 20))
    );

    if (matchedSample) {
      const evaluation: AnswerEvaluation = {
        verdict: matchedSample.verdict,
        score: matchedSample.score,
        reasoningAnalysis: {
          soundReasoning: [
            `Demonstrated direct alignment with canonical principles of ${question.conceptTargeted}`,
            `Addressed the core mechanism requested in the prompt`,
          ],
          gapsOrFlaws: matchedSample.verdict === 'correct' ? [] : [
            'Student response reflected an incomplete or inaccurate mental model of the underlying process.',
          ],
        },
        confidenceScore: matchedSample.confidenceScore || 90,
        constructiveFeedback: matchedSample.feedback,
        correctExplanation: question.correctAnswerSummary || 'Canonical scientific explanation according to domain standards.',
        practicalExample: `Standard real-world application in ${dataset.title}.`,
        adaptiveNextStep: matchedSample.verdict === 'correct'
          ? 'Next question will test advanced application or boundary constraints.'
          : 'Next question will provide a scaffolding scenario to strengthen foundational understanding.',
      };

      if (matchedSample.verdict === 'misconception_detected' || matchedSample.verdict === 'incorrect') {
        evaluation.detectedMisconception = {
          conceptName: question.conceptTargeted,
          studentMentalModel: `Assumed a simplified or intuitive rule rather than the governing domain law.`,
          scientificCorrection: question.correctAnswerSummary || 'Canonical explanation.',
          concreteAnalogy: `Think of this like an interconnected dynamic balance where altering one component impacts the equilibrium state.`,
          followUpPrompt: `Consider what happens under extreme or inverted conditions.`,
        };
      }

      return { ok: true, evaluation, isDemo: true };
    }

    // Dynamic heuristic evaluation for demo mode based on response length and content
    const isDetailed = combinedText.length > 50;
    const mentionsCoreConcept = combinedText.includes(question.conceptTargeted.toLowerCase().split(' ')[0]);

    if (isDetailed && (mentionsCoreConcept || combinedText.length > 120)) {
      return {
        ok: true,
        isDemo: true,
        evaluation: {
          verdict: 'correct',
          score: 92,
          reasoningAnalysis: {
            soundReasoning: [
              `Effectively identified core governing mechanisms in ${question.conceptTargeted}`,
              `Demonstrated logical explanation linking causes to observable outcomes`,
            ],
            gapsOrFlaws: [],
          },
          confidenceScore: 92,
          constructiveFeedback: `Solid answer! You demonstrated a clear, coherent grasp of ${question.conceptTargeted} in ${dataset.title}.`,
          correctExplanation: question.correctAnswerSummary || 'Canonical domain explanation.',
          practicalExample: `Essential concept utilized across modern ${dataset.subject} practice.`,
          adaptiveNextStep: 'Escalating difficulty to test edge-case scenario and system boundary behavior.',
        },
      };
    } else if (combinedText.length > 25) {
      return {
        ok: true,
        isDemo: true,
        evaluation: {
          verdict: 'partially_correct',
          score: 72,
          reasoningAnalysis: {
            soundReasoning: [`Acknowledged the primary premise of the question`],
            gapsOrFlaws: [`Could provide deeper causal mechanics or formal definitions of ${question.conceptTargeted}`],
          },
          confidenceScore: 85,
          constructiveFeedback: `Good start! You touched on key concepts, but expanding on the exact mechanism would elevate this to full mastery.`,
          correctExplanation: question.correctAnswerSummary || 'Canonical domain explanation.',
          practicalExample: `Notice how ${question.conceptTargeted} interacts with adjacent system boundaries.`,
          adaptiveNextStep: 'Offering follow-up question to probe the underlying mechanism.',
        },
      };
    } else {
      return {
        ok: true,
        isDemo: true,
        evaluation: {
          verdict: 'incorrect',
          score: 40,
          reasoningAnalysis: {
            soundReasoning: [],
            gapsOrFlaws: [`Response is too brief or lacks the necessary causal mechanism for ${question.conceptTargeted}`],
          },
          confidenceScore: 80,
          constructiveFeedback: `Your response was incomplete. Let us review the primary definition and work through the foundational steps.`,
          correctExplanation: question.correctAnswerSummary || 'Canonical domain explanation.',
          practicalExample: `In ${dataset.title}, this principle ensures predictable outcomes and system stability.`,
          adaptiveNextStep: 'Adapting: Providing a clarifying question with hints.',
        },
      };
    }
  }

  // Live AI mode: pass user's exact inputs to server endpoint
  try {
    const res = await fetch('/api/exam/evaluate-answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question,
        studentResponse,
        reasoningText,
        topicTitle,
        subject,
      }),
    });

    const json = await res.json();
    if (json.ok && json.data) {
      return { ok: true, evaluation: json.data, isDemo: false };
    }

    return {
      ok: false,
      isDemo: false,
      error: json.error || 'Live AI evaluation failed to process the response.',
    };
  } catch (err: any) {
    return {
      ok: false,
      isDemo: false,
      error: err?.message || 'Network error communicating with AI evaluation service.',
    };
  }
}

/**
 * Generate final session synthesis summary.
 */
export async function generateSessionSummaryApi(
  session: ExamSession,
  isDemoMode: boolean
): Promise<{ ok: boolean; summary?: any; isDemo: boolean; error?: string }> {
  // Compute deterministic metrics directly from real session answers
  const total = session.answers.length;
  const correctCount = session.answers.filter(a => a.evaluation.score >= 75).length;
  const avgScore = total > 0 ? Math.round(session.answers.reduce((acc, a) => acc + a.evaluation.score, 0) / total) : 0;
  const misconceptions = session.answers
    .filter(a => a.evaluation.detectedMisconception)
    .map(a => a.evaluation.detectedMisconception!.conceptName);

  if (isDemoMode) {
    const calculatedSummary = {
      overallVerdict: avgScore >= 80 ? 'Mastery Demonstrated' : avgScore >= 60 ? 'Developing Proficiency' : 'Requires Concept Reinforcement',
      masteryScore: avgScore,
      conceptsMastered: session.questions
        .filter(q => {
          const ans = session.answers.find(a => a.questionId === q.id);
          return ans && ans.evaluation.score >= 80;
        })
        .map(q => q.conceptTargeted),
      misconceptionsIdentified: misconceptions,
      recommendedNextTopics: [
        `Advanced applications in ${session.topicTitle}`,
        `Cross-domain synthesis in ${session.subject}`,
      ],
      strengthsSummary: `Consistently applied principles of ${session.topicTitle} with ${correctCount}/${total} successful responses.`,
      areasForImprovement: misconceptions.length > 0
        ? `Focus revision on ${misconceptions.join(', ')} to eliminate conceptual ambiguity.`
        : `Deepen precision on edge-case scenarios and quantitative boundary conditions.`,
      retentionForecast: avgScore >= 80 ? 'High (85% expected 30-day retention)' : 'Moderate (spaced revision scheduled)',
    };

    return {
      ok: true,
      isDemo: true,
      summary: calculatedSummary,
    };
  }

  // Live AI mode
  try {
    const res = await fetch('/api/summary/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session }),
    });

    const json = await res.json();
    if (json.ok && json.data) {
      return { ok: true, summary: json.data, isDemo: false };
    }

    // If server summary fails, compute fallback from actual session questions/answers
    return {
      ok: true,
      isDemo: false,
      summary: {
        overallVerdict: avgScore >= 80 ? 'Mastery Demonstrated' : 'Developing Understanding',
        masteryScore: avgScore,
        conceptsMastered: session.questions.map(q => q.conceptTargeted),
        misconceptionsIdentified: misconceptions,
        recommendedNextTopics: [`Next level of ${session.topicTitle}`],
        strengthsSummary: `Completed ${total} adaptive questions on ${session.topicTitle}.`,
        areasForImprovement: `Review flagged concepts in your revision planner.`,
        retentionForecast: 'Scheduled for spaced repetition.',
      },
    };
  } catch {
    return {
      ok: true,
      isDemo: false,
      summary: {
        overallVerdict: avgScore >= 80 ? 'Mastery Demonstrated' : 'Developing Understanding',
        masteryScore: avgScore,
        conceptsMastered: session.questions.map(q => q.conceptTargeted),
        misconceptionsIdentified: misconceptions,
        recommendedNextTopics: [`Next level of ${session.topicTitle}`],
        strengthsSummary: `Completed ${total} adaptive questions on ${session.topicTitle}.`,
        areasForImprovement: `Review flagged concepts in your revision planner.`,
        retentionForecast: 'Scheduled for spaced repetition.',
      },
    };
  }
}
