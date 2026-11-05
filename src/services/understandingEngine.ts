// src/services/understandingEngine.ts
// Student Understanding Analysis Engine (Section 6)
// Calculates transparent composite understanding scores using:
// - MCQ accuracy: 30%
// - Part B concept coverage: 30%
// - Part B marks: 25%
// - Consistency: 10%
// - Response fluency: 5%

import {
  MCQTestAttempt,
  PartBEvaluationResult,
  SubjectId,
  SubjectUnderstandingSummary,
  Topic,
  TopicUnderstandingMetric,
  UnderstandingCategory,
} from '../types';
import { ALL_TOPICS } from '../data/curriculum/topics';
import { ALL_SUBJECTS } from '../data/curriculum/subjects';

export function calculateTopicUnderstanding(
  topic: Topic,
  mcqAttempts: MCQTestAttempt[],
  partBSubmissions: PartBEvaluationResult[]
): TopicUnderstandingMetric {
  // 1. Gather all MCQ attempts touching this topic
  const relevantMcqAnswers: Array<{ isCorrect: boolean; timeSeconds: number }> = [];
  mcqAttempts.forEach((attempt) => {
    attempt.userAnswers.forEach((ans) => {
      if (ans.topicId === topic.id) {
        // approximate average time per question in this attempt
        const avgTime = attempt.totalQuestions > 0 ? attempt.timeSpentSeconds / attempt.totalQuestions : 30;
        relevantMcqAnswers.push({ isCorrect: ans.isCorrect, timeSeconds: avgTime });
      }
    });
  });

  // 2. Gather all Part B submissions for this topic
  const relevantPartB = partBSubmissions.filter((pb) => pb.topicId === topic.id);

  const hasMcq = relevantMcqAnswers.length > 0;
  const hasPartB = relevantPartB.length > 0;
  const isEvaluated = hasMcq || hasPartB;

  if (!isEvaluated) {
    return {
      topicId: topic.id,
      topicTitle: topic.title,
      subjectId: topic.subjectId,
      unitId: topic.unitId,
      mcqAttemptsCount: 0,
      mcqAverageAccuracy: 0,
      partBSubmissionsCount: 0,
      partBAverageMarks: 0,
      partBConceptCoverage: 0,
      consistencyScore: 0,
      responseFluencyScore: 0,
      compositeScore: 0,
      isProvisional: true,
      category: 'Not Yet Evaluated',
      recommendation: `Complete MCQ practice or a Part B question to evaluate your understanding of ${topic.title}.`,
    };
  }

  // Component 1: MCQ Accuracy (Weight: 30%)
  const mcqAccuracy = hasMcq
    ? (relevantMcqAnswers.filter((a) => a.isCorrect).length / relevantMcqAnswers.length) * 100
    : 0;

  // Component 2: Part B Concept Coverage (Weight: 30%)
  const partBCoverage = hasPartB
    ? relevantPartB.reduce((acc, curr) => acc + curr.completenessScore, 0) / relevantPartB.length
    : 0;

  // Component 3: Part B Marks (Weight: 25%) - Scaled to percentage out of 11
  const avgPartBMarks = hasPartB
    ? relevantPartB.reduce((acc, curr) => acc + curr.totalScore, 0) / relevantPartB.length
    : 0;
  const partBMarksPercentage = (avgPartBMarks / 11) * 100;

  // Component 4: Consistency (Weight: 10%)
  // Consistency measures stability across multiple attempts (default 75% for single attempts)
  let consistencyScore = 75;
  if (relevantMcqAnswers.length >= 4) {
    // calculate variance in correctness
    const scores = [];
    for (let i = 0; i < relevantMcqAnswers.length; i += 2) {
      const slice = relevantMcqAnswers.slice(i, i + 2);
      const acc = (slice.filter((s) => s.isCorrect).length / slice.length) * 100;
      scores.push(acc);
    }
    const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
    const variance = scores.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / scores.length;
    consistencyScore = Math.max(30, Math.min(100, Math.round(100 - Math.sqrt(variance))));
  }

  // Component 5: Response Fluency (Weight: 5%)
  // Healthy pace without rushing or excessive stalling
  let fluencyScore = 80;
  if (hasMcq) {
    const avgSeconds = relevantMcqAnswers.reduce((a, b) => a + b.timeSeconds, 0) / relevantMcqAnswers.length;
    // Optimal MCQ time is 25 - 65 seconds
    if (avgSeconds >= 20 && avgSeconds <= 70) {
      fluencyScore = 95;
    } else if (avgSeconds < 10) {
      fluencyScore = 60; // likely guessing/rushing
    } else {
      fluencyScore = 70; // hesitant
    }
  }

  // Calculate composite understanding score
  let compositeScore = 0;
  let isProvisional = false;

  if (hasMcq && hasPartB) {
    // Full data exists: apply strict 30/30/25/10/5 formula
    compositeScore =
      mcqAccuracy * 0.30 +
      partBCoverage * 0.30 +
      partBMarksPercentage * 0.25 +
      consistencyScore * 0.10 +
      fluencyScore * 0.05;
    isProvisional = relevantMcqAnswers.length < 5;
  } else if (hasMcq && !hasPartB) {
    // Only MCQ: re-weight to MCQ 65%, Consistency 20%, Fluency 15% (Provisional)
    compositeScore = mcqAccuracy * 0.65 + consistencyScore * 0.20 + fluencyScore * 0.15;
    isProvisional = true;
  } else {
    // Only Part B: re-weight to Coverage 50%, Marks 40%, Fluency 10% (Provisional)
    compositeScore = partBCoverage * 0.50 + partBMarksPercentage * 0.40 + fluencyScore * 0.10;
    isProvisional = true;
  }

  compositeScore = Math.max(0, Math.min(100, Math.round(compositeScore)));

  // Categorize based on transparent thresholds
  let category: UnderstandingCategory = 'Not Yet Evaluated';
  if (compositeScore >= 80) {
    category = 'Strong Understanding';
  } else if (compositeScore >= 65) {
    category = 'Good Understanding';
  } else if (compositeScore >= 50) {
    category = 'Developing Understanding';
  } else {
    category = 'Needs Improvement';
  }

  // Generate targeted recommendations
  let recommendation = '';
  if (category === 'Strong Understanding') {
    recommendation = `High mastery demonstrated. Practice advanced timed problem-solving to sustain long-term retention.`;
  } else if (category === 'Good Understanding') {
    if (!hasPartB) {
      recommendation = `Good objective accuracy. Attempt an 11-mark Part B question to solidify conceptual explanations.`;
    } else {
      recommendation = `Solid foundation. Review rubric feedback on partially covered concepts to reach full mastery.`;
    }
  } else if (category === 'Developing Understanding') {
    if (mcqAccuracy < 55) {
      recommendation = `Review foundational theory notes and re-attempt untimed MCQ practice to address core misconceptions.`;
    } else {
      recommendation = `Practice writing structured Part B answers focusing on architectural diagrams and key definitions.`;
    }
  } else {
    recommendation = `High-priority revision required. Read Intermediate study notes, review flashcard definitions, and re-attempt practice.`;
  }

  const lastAttemptAt =
    relevantPartB[0]?.submittedAt ||
    mcqAttempts.find((a) => a.userAnswers.some((ans) => ans.topicId === topic.id))?.timestamp;

  return {
    topicId: topic.id,
    topicTitle: topic.title,
    subjectId: topic.subjectId,
    unitId: topic.unitId,
    mcqAttemptsCount: relevantMcqAnswers.length,
    mcqAverageAccuracy: Math.round(mcqAccuracy),
    partBSubmissionsCount: relevantPartB.length,
    partBAverageMarks: Math.round(avgPartBMarks * 10) / 10,
    partBConceptCoverage: Math.round(partBCoverage),
    consistencyScore,
    responseFluencyScore: fluencyScore,
    compositeScore,
    isProvisional,
    category,
    lastEvaluatedAt: lastAttemptAt,
    recommendation,
  };
}

export function calculateAllUnderstanding(
  mcqAttempts: MCQTestAttempt[],
  partBSubmissions: PartBEvaluationResult[]
): {
  topicMetrics: Record<string, TopicUnderstandingMetric>;
  subjectSummaries: Record<SubjectId, SubjectUnderstandingSummary>;
  overallScore: number;
  overallCategory: UnderstandingCategory;
  evaluatedTopicsCount: number;
  strongTopicsCount: number;
  revisionRecommendedTopicIds: string[];
} {
  const topicMetrics: Record<string, TopicUnderstandingMetric> = {};
  const revisionRecommendedTopicIds: string[] = [];

  ALL_TOPICS.forEach((topic) => {
    const metric = calculateTopicUnderstanding(topic, mcqAttempts, partBSubmissions);
    topicMetrics[topic.id] = metric;
    if (metric.category === 'Needs Improvement' || (metric.category === 'Developing Understanding' && metric.compositeScore < 60)) {
      revisionRecommendedTopicIds.push(topic.id);
    }
  });

  const subjectSummaries = {} as Record<SubjectId, SubjectUnderstandingSummary>;

  ALL_SUBJECTS.forEach((sub) => {
    const subTopics = ALL_TOPICS.filter((t) => t.subjectId === sub.id);
    const subMetrics = subTopics.map((t) => topicMetrics[t.id]);
    const evaluated = subMetrics.filter((m) => m.category !== 'Not Yet Evaluated');

    let subAvg = 0;
    if (evaluated.length > 0) {
      subAvg = Math.round(evaluated.reduce((acc, m) => acc + m.compositeScore, 0) / evaluated.length);
    }

    let subCat: UnderstandingCategory = 'Not Yet Evaluated';
    if (evaluated.length > 0) {
      if (subAvg >= 80) subCat = 'Strong Understanding';
      else if (subAvg >= 65) subCat = 'Good Understanding';
      else if (subAvg >= 50) subCat = 'Developing Understanding';
      else subCat = 'Needs Improvement';
    }

    subjectSummaries[sub.id] = {
      subjectId: sub.id,
      subjectName: sub.name,
      evaluatedTopicsCount: evaluated.length,
      totalTopicsCount: subTopics.length,
      overallScore: subAvg,
      category: subCat,
      strongTopicsCount: subMetrics.filter((m) => m.category === 'Strong Understanding').length,
      goodTopicsCount: subMetrics.filter((m) => m.category === 'Good Understanding').length,
      developingTopicsCount: subMetrics.filter((m) => m.category === 'Developing Understanding').length,
      needsImprovementCount: subMetrics.filter((m) => m.category === 'Needs Improvement').length,
      revisionRecommendedTopicIds: subMetrics
        .filter((m) => m.category === 'Needs Improvement' || (m.category === 'Developing Understanding' && m.compositeScore < 60))
        .map((m) => m.topicId),
    };
  });

  const allMetricsList = Object.values(topicMetrics);
  const totalEvaluated = allMetricsList.filter((m) => m.category !== 'Not Yet Evaluated');
  const overallAvg = totalEvaluated.length > 0
    ? Math.round(totalEvaluated.reduce((acc, m) => acc + m.compositeScore, 0) / totalEvaluated.length)
    : 0;

  let overallCategory: UnderstandingCategory = 'Not Yet Evaluated';
  if (totalEvaluated.length > 0) {
    if (overallAvg >= 80) overallCategory = 'Strong Understanding';
    else if (overallAvg >= 65) overallCategory = 'Good Understanding';
    else if (overallAvg >= 50) overallCategory = 'Developing Understanding';
    else overallCategory = 'Needs Improvement';
  }

  return {
    topicMetrics,
    subjectSummaries,
    overallScore: overallAvg,
    overallCategory,
    evaluatedTopicsCount: totalEvaluated.length,
    strongTopicsCount: allMetricsList.filter((m) => m.category === 'Strong Understanding').length,
    revisionRecommendedTopicIds,
  };
}
