import { DemoDataset, ExamQuestion, LearningTopic } from '../../types';
import { csDatasets } from './csDatasets';
import { mathDatasets } from './mathDatasets';
import { physicsDatasets } from './physicsDatasets';
import { CHEMISTRY_DATASETS } from './chemistryDatasets';
import { BIOLOGY_DATASETS } from './biologyDatasets';
import { BUSINESS_DATASETS } from './businessDatasets';
import { HUMANITIES_DATASETS } from './humanitiesDatasets';
import { LANGUAGE_DATASETS } from './languageDatasets';

export {
  csDatasets,
  mathDatasets,
  physicsDatasets,
  CHEMISTRY_DATASETS,
  BIOLOGY_DATASETS,
  BUSINESS_DATASETS,
  HUMANITIES_DATASETS,
  LANGUAGE_DATASETS
};

export interface NormalizedDemoDataset {
  id: string;
  title: string;
  subject: string;
  domain: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  tags: string[];
  explanation: {
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
    verdict: any;
    score: number;
    confidenceScore?: number;
    feedback: string;
  }[];
  raw: DemoDataset;
}

function normalizeDataset(d: DemoDataset): NormalizedDemoDataset {
  const title = d.title || d.topic || (d.structuredExplanation?.title) || 'Untitled Module';
  const domain = d.domain || d.category || d.subject;
  const summary = d.summary || d.description || d.structuredExplanation?.summary || '';
  const tags = d.tags || [d.subject, d.difficulty, ...(d.learningObjectives ? d.learningObjectives.slice(0, 2) : [])];

  const keyConcepts = d.explanation?.keyConcepts || (d.structuredExplanation?.concepts || []).map(c => ({
    name: c.title,
    explanation: c.explanation,
    importance: c.practicalExample,
  }));

  const misconceptions = d.explanation?.misconceptions || (d.misconceptions || []).map(m => typeof m === 'string' ? m : m.whyIncorrect);
  const prerequisites = d.explanation?.prerequisites || d.structuredExplanation?.prerequisites || [];
  const learningObjectives = d.explanation?.learningObjectives || d.learningObjectives || [];

  const questions: ExamQuestion[] = (d.questions || []).map((q, idx) => ({
    ...q,
    id: q.id || `q-${d.id}-${idx + 1}`,
    questionNumber: q.questionNumber || idx + 1,
    questionText: q.questionText || q.question || 'Describe the key mechanics of this concept.',
    question: q.question || q.questionText || 'Describe the key mechanics of this concept.',
    conceptTargeted: q.conceptTargeted || 'Core Concept',
    difficulty: q.difficulty || d.difficulty,
    idealAnswer: q.idealAnswer || q.correctAnswerSummary || '',
    correctAnswerSummary: q.correctAnswerSummary || q.idealAnswer || '',
  }));

  return {
    id: d.id,
    title,
    subject: d.subject,
    domain,
    difficulty: d.difficulty,
    summary,
    tags,
    explanation: {
      topic: title,
      subject: d.subject,
      summary,
      keyConcepts,
      prerequisites,
      misconceptions,
      learningObjectives,
    },
    questions,
    sampleAnswers: d.sampleAnswers,
    raw: d,
  };
}

const RAW_DATASETS: DemoDataset[] = [
  ...csDatasets,
  ...mathDatasets,
  ...physicsDatasets,
  ...CHEMISTRY_DATASETS,
  ...BIOLOGY_DATASETS,
  ...BUSINESS_DATASETS,
  ...HUMANITIES_DATASETS,
  ...LANGUAGE_DATASETS
];

export const ALL_DEMO_DATASETS: NormalizedDemoDataset[] = RAW_DATASETS.map(normalizeDataset);

export const DEMO_SUBJECTS = [
  'All Subjects',
  'Computer Science',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Business',
  'Humanities',
  'Language'
] as const;

export function getDemoDatasetById(id: string): NormalizedDemoDataset | undefined {
  return ALL_DEMO_DATASETS.find(d => d.id === id);
}

export function findDemoDataset(topicOrQuery: string): NormalizedDemoDataset | undefined {
  if (!topicOrQuery) return undefined;
  const q = topicOrQuery.toLowerCase().trim();

  // Exact ID match
  const byId = ALL_DEMO_DATASETS.find(d => d.id.toLowerCase() === q);
  if (byId) return byId;

  // Exact title or explanation topic match
  const exactTitle = ALL_DEMO_DATASETS.find(
    d => d.title.toLowerCase() === q || d.explanation.topic.toLowerCase() === q
  );
  if (exactTitle) return exactTitle;

  // Partial title or tag match
  const partial = ALL_DEMO_DATASETS.find(
    d =>
      d.title.toLowerCase().includes(q) ||
      d.explanation.topic.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase() === q || q.includes(t.toLowerCase())) ||
      d.subject.toLowerCase() === q
  );
  if (partial) return partial;

  // Keyword match in tags or summary
  return ALL_DEMO_DATASETS.find(
    d =>
      d.summary.toLowerCase().includes(q) ||
      d.tags.some(t => d.summary.toLowerCase().includes(t.toLowerCase()))
  );
}

export function filterDemoDatasets(
  subject?: string,
  searchQuery?: string,
  difficulty?: string
): NormalizedDemoDataset[] {
  return ALL_DEMO_DATASETS.filter(item => {
    if (subject && subject !== 'All Subjects' && item.subject.toLowerCase() !== subject.toLowerCase()) {
      return false;
    }
    if (difficulty && difficulty !== 'All' && item.difficulty.toLowerCase() !== difficulty.toLowerCase()) {
      return false;
    }
    if (searchQuery && searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      const matchesTitle = item.title.toLowerCase().includes(q);
      const matchesSubject = item.subject.toLowerCase().includes(q);
      const matchesDomain = item.domain.toLowerCase().includes(q);
      const matchesSummary = item.summary.toLowerCase().includes(q);
      const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
      if (!matchesTitle && !matchesSubject && !matchesDomain && !matchesSummary && !matchesTags) {
        return false;
      }
    }
    return true;
  });
}
