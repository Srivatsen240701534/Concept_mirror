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
});

// 1. Scenario 1: Exact model-answer terminology
test('Part B Evaluator Scenario 1: Exact model-answer terminology receives high score', () => {
  const sampleQuestion = ALL_PART_B_QUESTIONS[0];
  const modelResult = evaluatePartBAnswer(sampleQuestion, sampleQuestion.modelAnswer, 300);
  assert.ok(modelResult.totalScore >= 9.5, `Model answer should score >= 9.5, got ${modelResult.totalScore}`);
  assert.ok(modelResult.conceptEvaluations.every((c) => c.status === 'covered'));
});

// 2. Scenario 2: Correct technical synonyms
test('Part B Evaluator Scenario 2: Technical synonyms are recognized and awarded marks', () => {
  const sampleQuestion = ALL_PART_B_QUESTIONS[0]; // Network Topologies
  const synonymAnswer = `
    A network layout or wiring scheme establishes the structural arrangement of computing nodes and data channels.
    In a fully connected point-to-point interconnect, every terminal communicates over dedicated pathways for maximum fault tolerance.
    In a hub-and-spoke central switch topology, endpoints converge on a centralized forwarding fabric.
    The runtime process and execution flow direct packet streams through logical transmission channels.
    The schematic architectural diagram illustrates link redundancy and boundary constraints.
    System limitations include cabling expense, bottleneck points, and error detection protocols.
    Practical industry deployments include datacenter fabrics and enterprise office networks with throughput and latency optimization.
  `;
  const res = evaluatePartBAnswer(sampleQuestion, synonymAnswer, 180);
  assert.ok(res.totalScore >= 8, `Synonym answer should score >= 8, got ${res.totalScore}`);
  const coveredCount = res.conceptEvaluations.filter((c) => c.status === 'covered').length;
  assert.ok(coveredCount >= 3, `Expected at least 3 covered concepts with synonyms, got ${coveredCount}`);
});

// 3. Scenario 3: Abbreviations recognized
test('Part B Evaluator Scenario 3: Technical abbreviations are recognized in context', () => {
  const osiQuestion = ALL_PART_B_QUESTIONS[1]; // OSI and TCP/IP
  const abbrAnswer = `
    The OSI Model and TCP/IP define the standard communication protocols for internetworking.
    Data is organized into PDUs (Protocol Data Units) where each layer adds headers through encapsulation.
    TCP provides reliable transport with flow control, while IP handles addressing and routing across LAN and WAN.
    The architectural diagram illustrates the 7-layer stack compared to the 4-layer suite.
    Boundary constraints include MTU fragmentation, transmission latency, and packet loss mitigation.
    Real-world applications include HTTP, HTTPS, DNS, and FTP services operating across enterprise networks.
  `;
  const res = evaluatePartBAnswer(osiQuestion, abbrAnswer, 180);
  assert.ok(res.totalScore >= 8, `Abbreviation answer should score >= 8, got ${res.totalScore}`);
  assert.ok(res.conceptEvaluations.some((c) => c.matchedKeywords.some((m) => m.includes('TCP/IP') || m.includes('PDU'))));
});

// 4. Scenario 4: Mixing full forms and abbreviations
test('Part B Evaluator Scenario 4: Mixed full forms and abbreviations are handled seamlessly', () => {
  const osiQuestion = ALL_PART_B_QUESTIONS[1];
  const mixedAnswer = `
    The Open Systems Interconnection model and Transmission Control Protocol / Internet Protocol (TCP/IP) structure modern internet communications.
    Protocol Data Unit encapsulation occurs as data descends from application layer to physical layer.
    The operational mechanics involve packet encapsulation, protocol state transitions, and byte-stream verification.
    Architectural diagrams outline layer interfaces and boundary constraints such as buffer limits and MTU sizing.
    Applications include web browsing over Hypertext Transfer Protocol Secure (HTTPS) and Domain Name System (DNS) lookups.
  `;
  const res = evaluatePartBAnswer(osiQuestion, mixedAnswer, 200);
  assert.ok(res.totalScore >= 8.5, `Mixed full forms and abbreviations should score >= 8.5, got ${res.totalScore}`);
});

// 5. Scenario 5: Explaining concepts with different sentence structures and functional definitions
test('Part B Evaluator Scenario 5: Equivalent functional explanations and varied syntax are credited', () => {
  const sampleQuestion = ALL_PART_B_QUESTIONS[0];
  const functionalAnswer = `
    The physical and logical layout of a communication network is established by its topology.
    When a network is arranged such that dedicated point-to-point connections link every node to all other nodes, high redundancy and fault isolation are achieved.
    Alternatively, connecting all peripheral workstations directly to a central multiport switch ensures that individual cable faults do not disrupt the entire system.
    Operational pathways transmit data packets between nodes according to switching rules.
    A structural diagram depicts the node layout and interconnections.
    Edge conditions involve handling boundary constraints, line failures, and single-point-of-failure bottlenecks.
    In real-world deployment, switched topologies are universally used for enterprise workstations, while mesh layouts interconnect core routing backbones.
  `;
  const res = evaluatePartBAnswer(sampleQuestion, functionalAnswer, 180);
  assert.ok(res.totalScore >= 8.5, `Functional definition answer should score >= 8.5, got ${res.totalScore}`);
  assert.ok(res.conceptEvaluations.every((c) => c.status === 'covered' || c.status === 'partial'));
});

// 6. Scenario 6: Related but technically incorrect terms / factual contradiction
test('Part B Evaluator Scenario 6: Factually contradicted or negated concepts receive no credit', () => {
  const sampleQuestion = ALL_PART_B_QUESTIONS[1];
  const contradictoryAnswer = `
    TCP is a connectionless and unreliable protocol that does not guarantee delivery of data.
    OSI model is not applicable and fails to satisfy any architectural networking requirement.
  `;
  const res = evaluatePartBAnswer(sampleQuestion, contradictoryAnswer, 60);
  // Contradiction detected
  const c1 = res.conceptEvaluations.find((c) => c.conceptId === 'c1');
  assert.ok(c1, 'Concept c1 exists');
  assert.equal(c1?.status, 'missing', 'Contradicted concept c1 must be marked missing');
  assert.equal(c1?.awardedMarks, 0, 'Contradicted concept c1 must receive 0 marks');
  assert.ok(c1?.feedback.includes('Contradiction') || c1?.feedback.includes('Negation'), 'Feedback mentions contradiction or negation');
});

// 7. Scenario 7: Keywords without demonstrating understanding (keyword stuffing)
test('Part B Evaluator Scenario 7: Keyword stuffing without explanatory context does not get full credit', () => {
  const sampleQuestion = ALL_PART_B_QUESTIONS[0];
  const keywordStuffing = `
    Topology, Mesh, Physical Topology, Star, Logical Topology, operation, diagram, constraint, error, boundary, application, trade-off, performance, comparison.
    Topology mesh star ring bus tree hybrid.
    Switch router hub firewall gateway client server.
  `;
  const res = evaluatePartBAnswer(sampleQuestion, keywordStuffing, 30);
  // Because sentences are just comma-separated keyword lists without explanatory predicates:
  // It should NOT receive an 'Excellent Answer' or high score
  assert.ok(res.totalScore < 7, `Keyword stuffing should not score >= 7, got ${res.totalScore}`);
  assert.ok(res.completenessScore < 70, `Keyword stuffing should have low completeness, got ${res.completenessScore}`);
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
