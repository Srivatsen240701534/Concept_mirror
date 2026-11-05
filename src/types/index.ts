// ConceptMirror AI - Complete Offline Educational Platform Type Definitions

export type SubjectId = 'cn' | 'ai' | 'toc' | 'mc' | 'gk';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface SubjectMetadata {
  id: SubjectId;
  code: string;
  name: string;
  shortName: string;
  tagline: string;
  iconName: string;
  accentColor: string;
  unitsCount: 5;
  topicsCount: 15;
  mcqCount: 150;
  partBCount: 10;
}

export interface UnitMetadata {
  id: string; // e.g. "cn-u1"
  subjectId: SubjectId;
  unitNumber: number; // 1 to 5
  title: string;
  description: string;
  topicIds: string[];
}

export interface TopicContent {
  summary: string;
  theory: string;
  definitions: Array<{ term: string; definition: string }>;
  keyConcepts: Array<{ title: string; explanation: string; example: string }>;
  diagram?: string; // Text / ASCII architecture diagram
  applications: string[];
  examImportantPoints: string[];
  quickRevisionNotes: string[];
}

export interface Topic {
  id: string; // e.g. "cn-u1-t1"
  subjectId: SubjectId;
  unitId: string;
  unitNumber: number;
  unitTitle: string;
  topicNumber: number; // 1 to 3
  title: string;
  objectives: string[];
  keywords: string[];
  content: Record<DifficultyLevel, TopicContent>;
}

// MCQ Types
export interface MCQuestion {
  id: string; // e.g. "mcq-cn-u1-t1-1"
  subjectId: SubjectId;
  unitId: string;
  topicId: string;
  topicTitle: string;
  difficulty: DifficultyLevel;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  referenceExamPoint?: string;
}

export interface MCQTestAttempt {
  id: string;
  timestamp: string;
  title: string;
  mode: 'topic' | 'unit' | 'subject' | 'random';
  subjectId?: SubjectId;
  unitId?: string;
  topicId?: string;
  totalQuestions: number;
  score: number;
  accuracy: number;
  timeSpentSeconds: number;
  userAnswers: Array<{
    questionId: string;
    topicId: string;
    topicTitle: string;
    selectedOption: number;
    correctOption: number;
    isCorrect: boolean;
  }>;
  topicsNeedingRevision: string[];
}

// Part B — 11-Mark Question Types
export interface RubricCriterion {
  conceptId: string;
  conceptName: string;
  maxMarks: number;
  fullMarksCriteria: string;
  partialMarksCriteria: string;
}

export interface ExpectedConcept {
  id: string;
  name: string;
  weight: number; // Must sum up to 11 across the question
  description: string;
  requiredKeywords: string[];
  synonyms: Record<string, string[]>;
  keyPhrases: string[];
}

export interface PartBQuestion {
  id: string; // e.g. "pb-cn-1"
  subjectId: SubjectId;
  unitId: string;
  topicId: string;
  topicTitle: string;
  question: string;
  maxMarks: 11;
  expectedConcepts: ExpectedConcept[];
  markingRubric: {
    criteria: RubricCriterion[];
    totalMarks: 11;
  };
  modelAnswer: string;
  examTips: string[];
}

export interface ConceptEvaluation {
  conceptId: string;
  conceptName: string;
  weight: number;
  awardedMarks: number;
  status: 'covered' | 'partial' | 'missing';
  matchedKeywords: string[];
  missingKeywords: string[];
  feedback: string;
}

export interface PartBEvaluationResult {
  id: string;
  questionId: string;
  subjectId: SubjectId;
  topicId: string;
  topicTitle: string;
  questionText: string;
  studentAnswer: string;
  wordCount: number;
  timeTakenSeconds: number;
  submittedAt: string;
  totalScore: number; // out of 11
  percentage: number;
  completenessScore: number; // 0 - 100%
  conceptEvaluations: ConceptEvaluation[];
  overallFeedback: string;
  improvementSuggestions: string[];
  modelAnswer: string;
  disclaimer: string;
}

// Understanding Analysis Types
export type UnderstandingCategory =
  | 'Strong Understanding'
  | 'Good Understanding'
  | 'Developing Understanding'
  | 'Needs Improvement'
  | 'Not Yet Evaluated';

export interface TopicUnderstandingMetric {
  topicId: string;
  topicTitle: string;
  subjectId: SubjectId;
  unitId: string;
  mcqAttemptsCount: number;
  mcqAverageAccuracy: number; // 0 to 100
  partBSubmissionsCount: number;
  partBAverageMarks: number; // out of 11
  partBConceptCoverage: number; // 0 to 100
  consistencyScore: number; // 0 to 100
  responseFluencyScore: number; // 0 to 100
  compositeScore: number; // 0 to 100
  isProvisional: boolean;
  category: UnderstandingCategory;
  lastEvaluatedAt?: string;
  recommendation: string;
}

export interface SubjectUnderstandingSummary {
  subjectId: SubjectId;
  subjectName: string;
  evaluatedTopicsCount: number;
  totalTopicsCount: number;
  overallScore: number;
  category: UnderstandingCategory;
  strongTopicsCount: number;
  goodTopicsCount: number;
  developingTopicsCount: number;
  needsImprovementCount: number;
  revisionRecommendedTopicIds: string[];
}

// Storage State
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  rollNumber: string;
  department: string;
  institution: string;
  semester: string;
  avatarColor: string;
  isLoggedIn: boolean;
}

export interface UserStudyState {
  completedTopics: Record<string, { completedAt: string; difficulty: DifficultyLevel }>;
  bookmarkedTopics: string[];
  mcqAttempts: MCQTestAttempt[];
  partBSubmissions: PartBEvaluationResult[];
  topicStudyTimeSeconds: Record<string, number>;
  totalStudyTimeSeconds: number;
  lastActiveTopic: { subjectId: SubjectId; unitId: string; topicId: string } | null;
}
