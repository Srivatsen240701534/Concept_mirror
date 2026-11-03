import {
  ExamQuestion,
  ExamSession,
  LearningTopic,
  MasteryRecord,
  Misconception,
  RevisionTask,
  UserPreferences,
} from '../types';

export const DEMO_PREFERENCES: UserPreferences = {
  aiMode: 'demo',
  defaultSubject: 'Computer Networks',
  defaultDifficulty: 'Intermediate',
  defaultQuestionCount: 5,
  defaultExplanationStyle: 'Detailed',
  soundEnabled: true,
};

export const DEMO_TCP_TOPIC: LearningTopic = {
  id: 'demo-topic-tcp-congestion',
  title: 'TCP Congestion Control',
  subject: 'Computer Networks',
  difficulty: 'Intermediate',
  style: 'Detailed',
  isDemo: true,
  createdAt: '2026-11-01T10:00:00Z',
  prerequisites: [
    'TCP Three-Way Handshake',
    'Sliding Window Protocol',
    'Round Trip Time (RTT) & Queuing Delays',
    'Packet Loss Detection (Timeouts vs 3 Duplicate ACKs)',
  ],
  summary:
    'TCP Congestion Control prevents network collapse by dynamically throttling packet transmission rate based on inferred network buffering and packet drops, using phases like Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery.',
  analogies: [
    'Like a driver speeding up cautiously on a foggy highway: accelerating exponentially until a speed limit warning, then inching forward linearly kilometer by kilometer.',
    'Water pipe flow: if you pour too quickly into a funnel with a narrow spigot, it overflows onto the floor (packet drop); TCP modulates the spigot inflow to match bottleneck pipe capacity.',
  ],
  concepts: [
    {
      id: 'c-slow-start',
      title: 'Slow Start Phase & ssthresh',
      explanation:
        'Despite the name "Slow Start", the congestion window (cwnd) actually grows exponentially, doubling every Round Trip Time (cwnd = cwnd * 2) starting from 1 MSS until reaching the slow start threshold (ssthresh).',
      practicalExample:
        'Sender starts with cwnd = 1 MSS (e.g. 1460 bytes). Receiving ACK 1 causes cwnd = 2. Receiving ACKs 1 & 2 causes cwnd = 4, then 8, 16. If ssthresh is 16, it switches immediately to Congestion Avoidance.',
      relationships: ['c-congestion-avoidance', 'c-packet-loss'],
    },
    {
      id: 'c-congestion-avoidance',
      title: 'Congestion Avoidance (Additive Increase)',
      explanation:
        'Once cwnd reaches ssthresh, TCP switches from exponential growth to linear growth (AIMD: Additive Increase Multiplicative Decrease). In each RTT where all packets are acknowledged, cwnd increases by only 1 MSS.',
      practicalExample:
        'If cwnd is 16 MSS, the sender sends 16 segments. Only after all 16 are acknowledged does cwnd grow to 17 MSS, probing bottleneck link capacity prudently.',
      relationships: ['c-slow-start', 'c-fast-retransmit'],
    },
    {
      id: 'c-packet-loss',
      title: 'Packet Loss Signals: Timeout vs 3 Duplicate ACKs',
      explanation:
        'A retransmission timeout indicates catastrophic network blockage or severe loss, causing cwnd to reset all the way to 1 MSS. In contrast, 3 Duplicate ACKs imply packets are still flowing through out of order, triggering Fast Retransmit.',
      practicalExample:
        'A router queue completely fills and drops 10 consecutive packets -> Sender timer expires -> Hard reset: ssthresh = cwnd / 2, cwnd = 1 MSS.',
      relationships: ['c-fast-retransmit', 'c-fast-recovery'],
    },
    {
      id: 'c-fast-retransmit',
      title: 'Fast Retransmit & Fast Recovery',
      explanation:
        'When the receiver encounters a missing sequence number, it sends duplicate ACKs. Upon receiving 3 Duplicate ACKs, the sender retransmits the missing segment immediately without waiting for a retransmission timer, cutting ssthresh to half and setting cwnd = ssthresh + 3 MSS.',
      practicalExample:
        'Packets 1, 3, 4, 5 arrive. Receiver ACKs 1 three times. Sender notices ACK 1 x 3 and immediately resends packet 2.',
      relationships: ['c-congestion-avoidance', 'c-packet-loss'],
    },
    {
      id: 'c-aimd-fairness',
      title: 'AIMD Dynamics & Flow Fairness',
      explanation:
        'Additive Increase / Multiplicative Decrease guarantees that multiple competing TCP connections sharing a bottleneck link naturally converge toward optimal bandwidth allocation and Pareto efficiency.',
      practicalExample:
        'Two flows sharing a 100 Mbps link: Flow 1 with 80 Mbps and Flow 2 with 20 Mbps will both cut in half (40 and 10), then linearly climb (+1, +1), mathematically converging to 50 Mbps each.',
      relationships: ['c-congestion-avoidance'],
    },
  ],
};

export const DEMO_QUESTIONS: ExamQuestion[] = [
  {
    id: 'demo-q1',
    questionNumber: 1,
    conceptTargeted: 'Slow Start Phase & ssthresh',
    questionType: 'multiple_choice',
    difficulty: 'Intermediate',
    questionText:
      'In TCP Reno, what is the rate of congestion window (cwnd) growth during the "Slow Start" phase, and why is this name considered a misnomer?',
    options: [
      'It grows by 1 MSS per RTT; it is called slow because it increases at the slowest possible rate.',
      'It grows exponentially (doubling each RTT); it is named "slow" only in contrast to immediately injecting the full receiver advertised window into an untested network.',
      'It increases logarithmically to avoid sudden buffer overflow in middleboxes.',
      'It stays constant until 3 Duplicate ACKs are received, then triples.',
    ],
    correctAnswerSummary:
      'Slow Start grows exponentially (doubles each RTT). It was named "slow" relative to historic implementations that dumped the entire receiver window immediately upon connection start.',
    evaluationCriteria: [
      'Identifies exponential growth rate',
      'Explains historical origin of "slow" vs abrupt full-window burst',
    ],
    adaptiveReason:
      'Diagnostic starter question to test conceptual clarity regarding the growth curves of Slow Start vs Congestion Avoidance.',
  },
  {
    id: 'demo-q2',
    questionNumber: 2,
    conceptTargeted: 'Congestion Avoidance (Additive Increase)',
    questionType: 'explain_reasoning',
    difficulty: 'Intermediate',
    questionText:
      'A TCP sender has an ssthresh of 16 MSS and an initial cwnd of 1 MSS. Assuming no packet loss occurs, explain in detail what happens to cwnd over the first 6 RTTs, specifically explaining the transition between phases.',
    correctAnswerSummary:
      'RTT 1: 1 MSS; RTT 2: 2 MSS; RTT 3: 4 MSS; RTT 4: 8 MSS; RTT 5: 16 MSS (hits ssthresh); RTT 6: 17 MSS (Congestion Avoidance additive increase +1).',
    evaluationCriteria: [
      'Correctly traces doubling from 1 to 2, 4, 8, 16',
      'Identifies threshold hit at 16 MSS',
      'Correctly switches to +1 MSS linear increment for RTT 6 (17 MSS)',
    ],
    adaptiveReason:
      'Tests computational understanding of the ssthresh boundary and phase transition.',
  },
  {
    id: 'demo-q3',
    questionNumber: 3,
    conceptTargeted: 'Packet Loss Signals: Timeout vs 3 Duplicate ACKs',
    questionType: 'scenario',
    difficulty: 'Advanced',
    contextScenario:
      'A server is streaming video data with cwnd = 32 MSS. Suddenly, a transient burst of noise corrupts a single segment (Segment 45), while segments 46, 47, and 48 arrive intact at the client.',
    questionText:
      'Contrast how TCP Reno responds to this specific single-packet drop versus an alternate scenario where an upstream fiber cut causes a complete Retransmission Timeout (RTO). State the new cwnd and ssthresh in both cases.',
    correctAnswerSummary:
      'For 3 Duplicate ACKs: Fast Retransmit triggers. ssthresh = cwnd/2 = 16 MSS, cwnd set to ssthresh + 3 (19 MSS in fast recovery, then 16 MSS in congestion avoidance). For RTO: catastrophic failure assumed; ssthresh = cwnd/2 = 16 MSS, but cwnd collapses to 1 MSS (Slow Start restarted).',
    evaluationCriteria: [
      'Recognizes 3 Dup ACKs vs RTO distinction',
      'Calculates ssthresh = 16 MSS for both',
      'Correctly contrasts cwnd = 1 MSS (RTO) vs cwnd ≈ 16-19 MSS (Fast Retransmit/Recovery)',
    ],
    adaptiveReason:
      'Deep diagnostic to detect if the student conflates severe network congestion (RTO) with isolated packet drop (Dup ACKs).',
  },
  {
    id: 'demo-q4',
    questionNumber: 4,
    conceptTargeted: 'Fast Retransmit & Fast Recovery',
    questionType: 'short_answer',
    difficulty: 'Intermediate',
    questionText:
      'Why does the TCP sender wait specifically for 3 duplicate ACKs before triggering Fast Retransmit, rather than reacting immediately on the 1st or 2nd duplicate ACK?',
    correctAnswerSummary:
      'IP networks frequently reorder packets in flight. Receiving 1 or 2 duplicate ACKs is very commonly due to benign packet reordering. Waiting for 3 duplicate ACKs provides high statistical confidence that a packet was actually dropped rather than just delayed or reordered.',
    evaluationCriteria: [
      'Mentions IP packet reordering / out-of-order delivery',
      'Explains why 1 or 2 duplicates are often false alarms',
    ],
    adaptiveReason:
      'Evaluates understanding of real-world internet packet routing behavior.',
  },
  {
    id: 'demo-q5',
    questionNumber: 5,
    conceptTargeted: 'AIMD Dynamics & Flow Fairness',
    questionType: 'explain_reasoning',
    difficulty: 'Advanced',
    questionText:
      'Why does TCP use Additive Increase Multiplicative Decrease (AIMD) instead of Multiplicative Increase Multiplicative Decrease (MIMD) or Additive Increase Additive Decrease (AIAD) to achieve bandwidth fairness?',
    correctAnswerSummary:
      'Additive increase gently shares freed bandwidth equally among competing connections regardless of current window size, while multiplicative decrease cuts larger flows by a larger absolute amount when congestion occurs. Geometrically, on a phase plot, AIMD trajectories converge toward the fairness line (x = y) and link efficiency, whereas AIAD and MIMD oscillate or drift away from fairness.',
    evaluationCriteria: [
      'Explains that linear growth adds equal share to both small and large flows',
      'Explains that multiplicative decrease penalizes large flows more heavily in absolute terms',
      'Mentions convergence toward fairness line',
    ],
    adaptiveReason:
      'Cap-stone conceptual question testing holistic system dynamics.',
  },
];

export const DEMO_SAMPLE_MISCONCEPTION: Misconception = {
  id: 'demo-misc-1',
  topicTitle: 'TCP Congestion Control',
  conceptName: 'Slow Start vs Congestion Avoidance',
  subject: 'Computer Networks',
  detectedDate: '2026-11-01T10:15:00Z',
  studentReasoning:
    '"Slow start increases the window slowly by 1 packet per round trip because the network is congested, whereas Congestion Avoidance is when it speeds up exponentially."',
  whyIncorrect:
    'Inverted mental model: The student swapped the growth dynamics of the two phases. "Slow Start" is actually the aggressive exponential doubling phase (1 -> 2 -> 4 -> 8 -> 16), while "Congestion Avoidance" is the conservative linear phase (+1 per RTT) intended to prevent overrunning buffer capacity.',
  correctExplanation:
    'Slow Start starts with a small window (1 MSS) to avoid overwhelming the bottleneck router on connection startup, but doubles cwnd every RTT. Congestion Avoidance takes over once ssthresh is hit, slowing down to linear growth (+1 MSS per RTT) to probe the link safely.',
  simpleAnalogy:
    'Think of launching a drone into the sky: Slow start is the initial rocket boost (exponential climb) to get near cruising altitude (ssthresh). Congestion avoidance is engaging precision thrusters (gentle linear nudge) so you do not hit the ceiling.',
  verificationChallenge: {
    question:
      'If cwnd is currently 20 MSS and ssthresh is 16 MSS, how will cwnd change after one full RTT where all packets are successfully acknowledged?',
    options: [
      'It will double to 40 MSS because it is accelerating.',
      'It will increase by 1 MSS to 21 MSS because cwnd > ssthresh (Congestion Avoidance).',
      'It will drop to 16 MSS to match ssthresh.',
      'It will reset to 1 MSS because of an overflow.',
    ],
    correctIndex: 1,
    explanation:
      'Since cwnd (20) has surpassed ssthresh (16), the connection is in Congestion Avoidance mode, where cwnd increases linearly by only 1 MSS per RTT.',
  },
  isResolved: false,
  sessionId: 'demo-session-tcp',
};

export const DEMO_MASTERY_MAP: Record<string, MasteryRecord> = {
  'Slow Start Phase & ssthresh': {
    conceptId: 'c-slow-start',
    conceptName: 'Slow Start Phase & ssthresh',
    subject: 'Computer Networks',
    topicTitle: 'TCP Congestion Control',
    level: 'Developing',
    score: 65,
    lastTested: '2026-11-01T10:20:00Z',
    answersCount: 3,
    correctCount: 2,
  },
  'Congestion Avoidance (Additive Increase)': {
    conceptId: 'c-congestion-avoidance',
    conceptName: 'Congestion Avoidance (Additive Increase)',
    subject: 'Computer Networks',
    topicTitle: 'TCP Congestion Control',
    level: 'Needs Revision',
    score: 42,
    lastTested: '2026-11-01T10:25:00Z',
    answersCount: 2,
    correctCount: 0,
  },
  'Packet Loss Signals: Timeout vs 3 Duplicate ACKs': {
    conceptId: 'c-packet-loss',
    conceptName: 'Packet Loss Signals: Timeout vs 3 Duplicate ACKs',
    subject: 'Computer Networks',
    topicTitle: 'TCP Congestion Control',
    level: 'Mastered',
    score: 92,
    lastTested: '2026-11-01T10:30:00Z',
    answersCount: 3,
    correctCount: 3,
  },
  'Fast Retransmit & Fast Recovery': {
    conceptId: 'c-fast-retransmit',
    conceptName: 'Fast Retransmit & Fast Recovery',
    subject: 'Computer Networks',
    topicTitle: 'TCP Congestion Control',
    level: 'Mastered',
    score: 88,
    lastTested: '2026-11-01T10:35:00Z',
    answersCount: 2,
    correctCount: 2,
  },
  'AIMD Dynamics & Flow Fairness': {
    conceptId: 'c-aimd-fairness',
    conceptName: 'AIMD Dynamics & Flow Fairness',
    subject: 'Computer Networks',
    topicTitle: 'TCP Congestion Control',
    level: 'Developing',
    score: 70,
    lastTested: '2026-11-01T10:40:00Z',
    answersCount: 1,
    correctCount: 1,
  },
};

export const DEMO_REVISION_TASKS: RevisionTask[] = [
  {
    id: 'demo-rev-1',
    topicTitle: 'TCP Congestion Control',
    conceptName: 'Slow Start vs Congestion Avoidance',
    subject: 'Computer Networks',
    reasonForRevision:
      'Misconception detected: confused exponential slow-start doubling with linear congestion avoidance increments.',
    recommendedActivity:
      'Solve 3 tracing problems tracking cwnd step-by-step from 1 to 24 MSS with ssthresh = 16 MSS.',
    estimatedMinutes: 8,
    priority: 'High',
    scheduledDate: '2026-11-03',
    isCompleted: false,
  },
  {
    id: 'demo-rev-2',
    topicTitle: 'TCP Congestion Control',
    conceptName: 'Congestion Avoidance (Additive Increase)',
    subject: 'Computer Networks',
    reasonForRevision:
      'Mastery score currently 42%. Partial-credit answers on numerical window progression.',
    recommendedActivity:
      'Interactive visual simulation: observe window size graphs during packet drops.',
    estimatedMinutes: 12,
    priority: 'High',
    scheduledDate: '2026-11-04',
    isCompleted: false,
  },
  {
    id: 'demo-rev-3',
    topicTitle: 'TCP Congestion Control',
    conceptName: 'AIMD Dynamics & Flow Fairness',
    subject: 'Computer Networks',
    reasonForRevision:
      'Reinforce conceptual retention of phase-plot vector convergence.',
    recommendedActivity:
      'Review fairness trajectory diagram contrasting AIAD vs AIMD.',
    estimatedMinutes: 6,
    priority: 'Medium',
    scheduledDate: '2026-11-05',
    isCompleted: true,
    completedAt: '2026-11-02T09:15:00Z',
  },
];

export const DEMO_COMPLETED_SESSION: ExamSession = {
  id: 'demo-session-tcp',
  topicTitle: 'TCP Congestion Control',
  subject: 'Computer Networks',
  difficulty: 'Intermediate',
  questionTypeCategory: 'Mixed',
  totalQuestionsPlanned: 5,
  currentQuestionIndex: 5,
  isCompleted: true,
  isDemo: true,
  startedAt: '2026-11-01T10:05:00Z',
  completedAt: '2026-11-01T10:35:00Z',
  questions: DEMO_QUESTIONS,
  answers: [
    {
      questionId: 'demo-q1',
      studentResponse:
        'It grows exponentially (doubling each RTT); it is named "slow" only in contrast to immediately injecting the full receiver advertised window into an untested network.',
      reasoningText:
        'I remembered that slow start starts at 1 packet, but doubles with every round trip time until reaching the threshold.',
      submittedAt: '2026-11-01T10:10:00Z',
      evaluation: {
        verdict: 'correct',
        score: 100,
        reasoningAnalysis: {
          soundReasoning: [
            'Accurately identified exponential doubling per RTT',
            'Correctly understood historical contrast against immediate burst transmission',
          ],
          gapsOrFlaws: [],
        },
        confidenceScore: 98,
        constructiveFeedback:
          'Flawless conceptual distinction. You clearly recognize the paradoxical terminology of Slow Start.',
        correctExplanation:
          'Slow Start doubles cwnd every RTT (1 -> 2 -> 4 -> 8...) until reaching ssthresh.',
        practicalExample:
          'If RTT is 50ms, cwnd escalates from 1 segment to 32 segments in just 250 milliseconds.',
        adaptiveNextStep:
          'Advance to multi-round quantitative state tracing to test ssthresh transition.',
      },
    },
    {
      questionId: 'demo-q2',
      studentResponse:
        'It goes 1, 2, 4, 8, 16. Then at RTT 6 it jumps to 32 because it keeps doubling.',
      reasoningText:
        'I assumed that without packet loss, the window keeps doubling without upper boundary.',
      submittedAt: '2026-11-01T10:16:00Z',
      evaluation: {
        verdict: 'misconception_detected',
        score: 45,
        reasoningAnalysis: {
          soundReasoning: [
            'Correct initial trace of exponential progression up to 16 MSS',
          ],
          gapsOrFlaws: [
            'Ignored the boundary condition of ssthresh = 16 MSS',
            'Failed to transition from exponential to additive linear growth at RTT 6',
          ],
        },
        detectedMisconception: {
          conceptName: 'Slow Start vs Congestion Avoidance',
          studentMentalModel:
            'Assumed exponential doubling continues indefinitely until an actual packet drop occurs.',
          scientificCorrection:
            'ssthresh acts as an automatic brake. Once cwnd equals ssthresh (16 MSS), the protocol switches to Congestion Avoidance (additive increase: +1 MSS per RTT). RTT 6 is 17 MSS, not 32 MSS.',
          concreteAnalogy:
            'Like cruise control switching on when your car hits the speed limit, preventing inadvertent crash into traffic.',
          followUpPrompt:
            'What is the purpose of ssthresh if the window were to double anyway?',
        },
        confidenceScore: 95,
        constructiveFeedback:
          'You correctly calculated the first 5 RTTs, but missed that reaching ssthresh immediately throttles growth to linear (+1 MSS).',
        correctExplanation:
          'At cwnd >= ssthresh, Congestion Avoidance governs window size, increasing by 1 MSS per RTT.',
        practicalExample:
          'Progression: RTT 1: 1 -> RTT 2: 2 -> RTT 3: 4 -> RTT 4: 8 -> RTT 5: 16 -> RTT 6: 17 MSS.',
        adaptiveNextStep:
          'Adapt down to diagnostic scenario focusing on loss signals and recovery to test boundary handling.',
      },
    },
    {
      questionId: 'demo-q3',
      studentResponse:
        'For 3 duplicate ACKs, the sender triggers Fast Retransmit. cwnd is cut in half and it continues without restarting. For timeout, everything is dead so cwnd resets to 1.',
      reasoningText:
        '3 dup ACKs means some packets made it through, whereas timeout means total silence.',
      submittedAt: '2026-11-01T10:22:00Z',
      evaluation: {
        verdict: 'partially_correct',
        score: 85,
        reasoningAnalysis: {
          soundReasoning: [
            'Understands that 3 Dup ACKs triggers Fast Retransmit',
            'Accurately explains that RTO resets cwnd to 1 MSS due to severe congestion',
            'Good physical intuition that Dup ACKs indicate surviving packet flow',
          ],
          gapsOrFlaws: [
            'Omitted the explicit numerical values for ssthresh (ssthresh = 32 / 2 = 16 MSS)',
            'Did not mention the temporary window inflation during Fast Recovery (ssthresh + 3)',
          ],
        },
        confidenceScore: 92,
        constructiveFeedback:
          'Excellent physical reasoning about network feedback signals! To achieve full mastery marks, include the specific numerical equations (ssthresh = cwnd/2 = 16 MSS).',
        correctExplanation:
          '3 Dup ACKs: ssthresh = 16 MSS, cwnd = ssthresh + 3 during recovery. RTO: ssthresh = 16 MSS, cwnd = 1 MSS.',
        practicalExample:
          'With cwnd=32: Fast Retransmit keeps sending from ~16 MSS; RTO drops all the way down to 1 MSS.',
        adaptiveNextStep:
          'Test why specifically 3 duplicate ACKs are required by the receiver/sender.',
      },
    },
    {
      questionId: 'demo-q4',
      studentResponse:
        'Because routers can deliver packets out of order. 1 or 2 duplicate ACKs could just be packet reordering, but 3 gives high confidence it was actually dropped.',
      reasoningText:
        'The internet does not guarantee in-order delivery on multiple paths.',
      submittedAt: '2026-11-01T10:28:00Z',
      evaluation: {
        verdict: 'correct',
        score: 100,
        reasoningAnalysis: {
          soundReasoning: [
            'Identified IP out-of-order reordering as the primary source of benign duplicate ACKs',
            'Correctly stated that 3 is the statistical threshold to distinguish loss from reordering',
          ],
          gapsOrFlaws: [],
        },
        confidenceScore: 96,
        constructiveFeedback:
          'Spot-on! This is a classic RFC 5681 networking design decision that avoids unnecessary window slashing due to multi-path route flapping.',
        correctExplanation:
          'Packets can take slightly different latency paths; 3 Dup ACKs acts as a noise filter.',
        practicalExample:
          'If segment 2 is delayed by 5ms, segments 3 and 4 arrive first causing 2 duplicate ACKs. When segment 2 arrives right after, no retransmission was needed!',
        adaptiveNextStep:
          'Proceed to advanced AIMD fairness question to test systemic reasoning.',
      },
    },
    {
      questionId: 'demo-q5',
      studentResponse:
        'AIMD increases equally by 1 for all flows so small flows get a chance to grow, and it cuts in half so big flows lose more absolute bandwidth, which brings them to equal share.',
      reasoningText:
        'If a big flow has 100 and drops to 50, it lost 50. If small has 20 and drops to 10, it lost 10. Then both add +1.',
      submittedAt: '2026-11-01T10:34:00Z',
      evaluation: {
        verdict: 'correct',
        score: 95,
        reasoningAnalysis: {
          soundReasoning: [
            'Correctly contrasted additive increase (equal linear gains) with multiplicative decrease (proportional reduction)',
            'Provided clear numeric example demonstrating why high-volume flows surrender more bandwidth',
          ],
          gapsOrFlaws: [
            'Did not explicitly cite the Chiu-Jain vector convergence phase plot, but demonstrated complete intuitive mastery',
          ],
        },
        confidenceScore: 94,
        constructiveFeedback:
          'Outstanding explanation of Chiu-Jain fairness dynamics. Your numeric illustration is crystal clear.',
        correctExplanation:
          'AIMD mathematically ensures trajectories on the efficiency/fairness plane converge to the fairness line (y=x).',
        practicalExample:
          'Flows at 80 & 20 cut to 40 & 10 (ratio 4:1). After both gain +10, they are at 50 & 20 (ratio 2.5:1). Over successive congestion events, ratio approaches 1:1.',
        adaptiveNextStep:
          'Examination complete. Generate targeted revision plan for ssthresh boundary conditions.',
      },
    },
  ],
  sessionSummary: {
    overallScore: 85,
    masteredConcepts: [
      'Packet Loss Signals: Timeout vs 3 Duplicate ACKs',
      'Fast Retransmit & Fast Recovery',
      'AIMD Dynamics & Flow Fairness',
    ],
    developingConcepts: ['Slow Start Phase & ssthresh'],
    revisionNeededConcepts: ['Congestion Avoidance (Additive Increase)'],
    misconceptionsIdentified: 1,
    strengths: [
      'Strong physical intuition for network signaling and duplicate ACKs',
      'Clear grasp of AIMD fairness mathematics and multi-flow convergence',
      'Solid understanding of Fast Retransmit vs RTO consequences',
    ],
    keyRecommendations: [
      'Review the ssthresh hand-off transition: remember cwnd does not double past ssthresh',
      'Practice drawing the sawtooth cwnd graph over 10 consecutive RTTs with loss events',
      'Complete the quick verification challenge on Congestion Avoidance to resolve active misconception',
    ],
  },
};
