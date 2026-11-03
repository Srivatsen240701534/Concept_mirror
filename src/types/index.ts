export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type ExplanationStyle = 'Simple' | 'Detailed' | 'Example-based';
export type QuestionType = 'Conceptual' | 'Application-based' | 'Mixed';
export type QuestionFormat = 'multiple_choice' | 'short_answer' | 'explain_reasoning' | 'scenario';
export type EvaluationVerdict = 'correct' | 'partially_correct' | 'incorrect' | 'misconception_detected';
export type MasteryLevel = 'Mastered' | 'Developing' | 'Needs Revision' | 'Not Yet Tested';

export interface Concept {
  id: string;
  name: string;
  description: string;
  prerequisites?: string[];
  masteryLevel: MasteryLevel;
  masteryScore: number; // 0 to 100
  timesTested: number;
  lastTestedDate?: string;
  notes?: string;
}

export interface LearningTopic {
  id: string;
  title: string;
  subject: string;
  difficulty: DifficultyLevel;
  style: ExplanationStyle;
  prerequisites: string[];
  summary: string;
  concepts: {
    id: string;
    title: string;
    explanation: string;
    practicalExample: string;
    relationships: string[];
  }[];
  analogies: string[];
  createdAt: string;
  isDemo?: boolean;
}

export interface ExamQuestion {
  id: string;
  questionNumber?: number;
  conceptTargeted: string;
  questionType?: QuestionFormat;
  difficulty: DifficultyLevel;
  questionText?: string;
  question?: string;
  topic?: string;
  subject?: string;
  contextScenario?: string;
  options?: string[]; // for multiple choice
  correctAnswerSummary?: string; // used for evaluation on server
  idealAnswer?: string;
  evaluationCriteria?: string[];
  adaptiveReason?: string; // why this question was selected
  hints?: string[];
  rubric?: {
    accuracy: number;
    depth: number;
    clarity: number;
  };
  // Sample demonstration evaluation responses for offline demo mode
  demoSampleAnswerCorrect?: string;
  demoSampleAnswerPartial?: string;
  demoSampleAnswerMisconception?: string;
  demoFeedbackCorrect?: string;
  demoFeedbackPartial?: string;
  demoFeedbackMisconception?: string;
}

export interface AnswerEvaluation {
  verdict: EvaluationVerdict;
  score: number; // 0 to 100
  reasoningAnalysis: {
    soundReasoning: string[];
    gapsOrFlaws: string[];
  };
  detectedMisconception?: {
    conceptName: string;
    studentMentalModel: string;
    scientificCorrection: string;
    concreteAnalogy: string;
    followUpPrompt: string;
  };
  confidenceScore: number; // 0 to 100
  constructiveFeedback: string;
  correctExplanation: string;
  practicalExample: string;
  adaptiveNextStep: string;
}

export interface StudentAnswer {
  questionId: string;
  studentResponse: string;
  reasoningText?: string;
  submittedAt: string;
  evaluation: AnswerEvaluation;
}

export interface ExamSession {
  id: string;
  topicTitle: string;
  subject: string;
  difficulty: DifficultyLevel;
  questionTypeCategory: QuestionType;
  totalQuestionsPlanned: number;
  currentQuestionIndex: number;
  questions: ExamQuestion[];
  answers: StudentAnswer[];
  startedAt: string;
  completedAt?: string;
  isCompleted: boolean;
  isDemo?: boolean;
  mode?: 'live' | 'demo';
  sessionSummary?: {
    overallScore: number;
    masteredConcepts: string[];
    developingConcepts: string[];
    revisionNeededConcepts: string[];
    misconceptionsIdentified: number;
    strengths: string[];
    keyRecommendations: string[];
  };
}

export interface Misconception {
  id: string;
  topicTitle: string;
  conceptName: string;
  subject: string;
  detectedDate: string;
  studentReasoning: string;
  whyIncorrect: string;
  correctExplanation: string;
  simpleAnalogy: string;
  verificationChallenge: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  isResolved: boolean;
  resolvedDate?: string;
  sessionId?: string;
  isDemo?: boolean;
}

export interface MasteryRecord {
  conceptId: string;
  conceptName: string;
  subject: string;
  topicTitle: string;
  level: MasteryLevel;
  score: number; // 0-100
  lastTested: string;
  answersCount: number;
  correctCount: number;
  isDemo?: boolean;
}

export interface RevisionTask {
  id: string;
  topicTitle: string;
  conceptName: string;
  subject: string;
  reasonForRevision: string;
  recommendedActivity: string;
  estimatedMinutes: number;
  priority: 'High' | 'Medium' | 'Low';
  scheduledDate: string;
  isCompleted: boolean;
  completedAt?: string;
  isDemo?: boolean;
}

export interface UserPreferences {
  aiMode: 'live' | 'demo';
  defaultSubject: string;
  defaultDifficulty: DifficultyLevel;
  defaultQuestionCount: number;
  defaultExplanationStyle: ExplanationStyle;
  soundEnabled: boolean;
}

export interface LearningHistory {
  sessions: ExamSession[];
  topicsStudied: LearningTopic[];
  misconceptions: Misconception[];
  masteryMap: Record<string, MasteryRecord>;
  revisionTasks: RevisionTask[];
  preferences: UserPreferences;
}

export interface DemoDataset {
  id: string;
  subject: string;
  topic?: string;
  title?: string;
  category?: string;
  domain?: string;
  difficulty: DifficultyLevel;
  description?: string;
  summary?: string;
  tags?: string[];
  learningObjectives?: string[];
  structuredExplanation?: LearningTopic;
  explanation?: {
    topic: string;
    subject: string;
    summary: string;
    keyConcepts: {
      name: string;
      explanation: string;
      importance: string;
    }[];
    prerequisites: string[];
    misconceptions: string[];
    learningObjectives: string[];
  };
  questions: ExamQuestion[];
  sampleAnswers?: {
    questionId: string;
    studentAnswer: string;
    verdict: EvaluationVerdict;
    score: number;
    confidenceScore?: number;
    feedback: string;
  }[];
  misconceptions?: (Misconception | string)[];
  conceptMastery?: {
    conceptName: string;
    level: MasteryLevel;
    score: number;
  }[];
  suggestedRevisionTasks?: RevisionTask[];
  sampleResult?: {
    overallScore: number;
    masteredConcepts: string[];
    developingConcepts: string[];
    revisionNeededConcepts: string[];
    misconceptionsIdentified: number;
    strengths: string[];
    keyRecommendations: string[];
  };
}
