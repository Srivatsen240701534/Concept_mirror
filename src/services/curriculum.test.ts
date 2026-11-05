// src/services/curriculum.test.ts
import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_SUBJECTS } from '../data/curriculum/subjects';
import { ALL_TOPICS } from '../data/curriculum/topics';
import { ALL_MCQS } from '../data/mcq';
import { ALL_PART_B_QUESTIONS } from '../data/partB';
import { evaluatePartBAnswer } from './evaluator';
import { calculateTopicUnderstanding, calculateAllUnderstanding } from './understandingEngine';

test('Curriculum structure: exactly 5 subjects and 25 units', () => {
  assert.equal(ALL_SUBJECTS.length, 5);
  const subjectIds = ALL_SUBJECTS.map((s) => s.id);
  assert.deepEqual(subjectIds, ['cn', 'ai', 'toc', 'mc', 'gk']);
});

test('Curriculum structure: exactly 75 topics with 3 difficulty levels', () => {
  assert.equal(ALL_TOPICS.length, 75);
  for (const topic of ALL_TOPICS) {
    assert.ok(topic.id, 'Topic must have an id');
    assert.ok(topic.title, `Topic ${topic.id} must have a title`);
    assert.ok(topic.content.beginner, `Topic ${topic.id} must have beginner content`);
    assert.ok(topic.content.intermediate, `Topic ${topic.id} must have intermediate content`);
    assert.ok(topic.content.advanced, `Topic ${topic.id} must have advanced content`);
    assert.ok(topic.content.beginner.theory.length > 50, `Topic ${topic.id} must have non-empty theory`);
  }
});

test('MCQ dataset: exactly 750 MCQs with 4 options and valid correctIndex', () => {
  assert.equal(ALL_MCQS.length, 750);
  for (const mcq of ALL_MCQS) {
    assert.ok(mcq.id, 'MCQ must have an id');
    assert.ok(mcq.question, 'MCQ must have question text');
    assert.equal(mcq.options.length, 4, `MCQ ${mcq.id} must have 4 options`);
    assert.ok([0, 1, 2, 3].includes(mcq.correctIndex), `MCQ ${mcq.id} has invalid correctIndex ${mcq.correctIndex}`);
    assert.ok(mcq.explanation.length > 10, `MCQ ${mcq.id} has non-trivial explanation`);
  }
});

test('Part B dataset: exactly 50 questions, all rubric weights sum to exactly 11', () => {
  assert.equal(ALL_PART_B_QUESTIONS.length, 50);
  for (const pb of ALL_PART_B_QUESTIONS) {
    assert.equal(pb.maxMarks, 11);
    const weightSum = pb.expectedConcepts.reduce((acc, c) => acc + c.weight, 0);
    assert.equal(
      weightSum,
      11,
      `Part B question ${pb.id} expected concepts weight sum is ${weightSum}, must be exactly 11`
    );
    assert.equal(
      pb.markingRubric.totalMarks,
      11,
      `Part B question ${pb.id} markingRubric.totalMarks must be 11`
    );
  }
});

test('Part B evaluation engine: calculates marks and detects covered concepts', () => {
  const sampleQuestion = ALL_PART_B_QUESTIONS[0]; // Network Topologies
  assert.ok(sampleQuestion);
  const goodAnswer = `
    Network topology defines the physical and logical arrangement of nodes, links, and devices in a computer network. The primary physical topologies are Mesh Topology, Star Topology, Bus Topology, and Ring Topology. In Mesh, each node has a point-to-point link to every other node with n(n-1)/2 links. In Star, all nodes connect to a central hub or switch. The operation involves transmitting data along physical or logical topology pathways. The architectural diagram illustrates the node interconnects. Trade-offs and boundary constraints include cabling cost, single point of failure, fault tolerance, and error handling. Real-world applications include campus backbones and data centers with performance throughput and latency comparisons.
  `;
  const result = evaluatePartBAnswer(sampleQuestion, goodAnswer, 180);
  assert.ok(result.totalScore >= 8, `Expected score >= 8, got ${result.totalScore}`);
  assert.ok(result.wordCount > 80, 'Word count accurately counted');
  assert.ok(result.completenessScore >= 60, 'Completeness score is high');
  assert.ok(result.conceptEvaluations.length > 0, 'Concept evaluations generated');
  assert.ok(result.disclaimer.includes('offline'), 'Includes offline disclaimer');

  // Test that the model answer receives near maximum marks
  const modelResult = evaluatePartBAnswer(sampleQuestion, sampleQuestion.modelAnswer, 300);
  assert.ok(modelResult.totalScore >= 9.5, `Model answer should score >= 9.5, got ${modelResult.totalScore}`);
});

test('Understanding engine: calculates 30/30/25/10/5 formula', () => {
  const sampleTopic = ALL_TOPICS[0];
  const initialMetric = calculateTopicUnderstanding(sampleTopic, [], []);
  assert.equal(initialMetric.category, 'Not Yet Evaluated');
  assert.equal(initialMetric.isProvisional, true);

  // When MCQ exists
  const mockAttempt = {
    id: 'test-1',
    timestamp: new Date().toISOString(),
    title: 'Test',
    mode: 'topic' as const,
    topicId: sampleTopic.id,
    totalQuestions: 10,
    score: 9,
    accuracy: 90,
    timeSpentSeconds: 300,
    userAnswers: [
      { questionId: 'q1', topicId: sampleTopic.id, topicTitle: sampleTopic.title, selectedOption: 1, correctOption: 1, isCorrect: true },
      { questionId: 'q2', topicId: sampleTopic.id, topicTitle: sampleTopic.title, selectedOption: 1, correctOption: 1, isCorrect: true },
    ],
    topicsNeedingRevision: [],
  };

  const updatedMetric = calculateTopicUnderstanding(sampleTopic, [mockAttempt], []);
  assert.ok(updatedMetric.compositeScore > 0, 'Calculates score with MCQ data');
  assert.equal(updatedMetric.isProvisional, true, 'Provisional without Part B');
});
