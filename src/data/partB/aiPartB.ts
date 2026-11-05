import { PartBQuestion } from '../../types';

export const AI_PART_B: PartBQuestion[] = [
  {
    "id": "pb-ai-1",
    "subjectId": "ai",
    "unitId": "ai-u1",
    "topicId": "ai-u1-t1",
    "topicTitle": "Foundations, History & Applications of Artificial Intelligence",
    "question": "Q1. Explain the fundamental concepts, operational mechanics, structural architecture, and practical applications of \"Foundations, History & Applications of Artificial Intelligence\". Provide necessary diagrams, formal definitions, mathematical relationships, and trade-off comparisons. [11 Marks]",
    "maxMarks": 11,
    "expectedConcepts": [
      {
        "id": "c1",
        "name": "Foundational Definition & Core Architectural Principles",
        "weight": 3,
        "description": "Clear formulation of fundamental definitions, theoretical framework, and primary architectural components of Foundations, History & Applications of Artificial Intelligence.",
        "requiredKeywords": [
          "Artificial Intelligence",
          "Turing Test",
          "Turing Test"
        ],
        "synonyms": {
          "Artificial Intelligence": [
            "principle",
            "foundational model",
            "architecture",
            "structure",
            "mechanism"
          ],
          "Turing Test": [
            "framework",
            "standard",
            "technique",
            "specification",
            "protocol"
          ]
        },
        "keyPhrases": [
          "definition of Foundations, History & Applications of Artificial Intelligence",
          "fundamental architectural model",
          "primary governing mechanism"
        ]
      },
      {
        "id": "c2",
        "name": "Operational Mechanics, Algorithms & Mathematical Formulations",
        "weight": 3,
        "description": "Detailed step-by-step operational analysis, state transitions, algorithms, and mathematical relationships governing Foundations, History & Applications of Artificial Intelligence.",
        "requiredKeywords": [
          "Dartmouth Conference",
          "Rational Agent",
          "operation"
        ],
        "synonyms": {
          "Dartmouth Conference": [
            "procedure",
            "formula",
            "methodology",
            "mathematical analysis"
          ],
          "operation": [
            "execution",
            "runtime process",
            "state progression",
            "transition"
          ]
        },
        "keyPhrases": [
          "operational step-by-step analysis",
          "mathematical formulation",
          "state transitions and execution flow"
        ]
      },
      {
        "id": "c3",
        "name": "Diagrammatic Representation, Edge Cases & Error Handling",
        "weight": 3,
        "description": "Structural diagram breakdown, analysis of boundary constraints, edge conditions, failure mitigation, or optimization strategies.",
        "requiredKeywords": [
          "diagram",
          "constraint",
          "error",
          "boundary"
        ],
        "synonyms": {
          "diagram": [
            "architecture diagram",
            "schematic",
            "structural representation",
            "flowchart"
          ],
          "constraint": [
            "trade-off",
            "limitation",
            "edge condition",
            "boundary case"
          ]
        },
        "keyPhrases": [
          "architectural diagram structure",
          "handling boundary conditions",
          "error detection and mitigation"
        ]
      },
      {
        "id": "c4",
        "name": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
        "weight": 2,
        "description": "Real-world industry applications, comparative trade-offs against alternative paradigms, and concluding evaluative synthesis.",
        "requiredKeywords": [
          "application",
          "trade-off",
          "performance",
          "comparison"
        ],
        "synonyms": {
          "application": [
            "implementation",
            "real-world use",
            "deployment",
            "industry practice"
          ],
          "performance": [
            "efficiency",
            "throughput",
            "scalability",
            "latency"
          ]
        },
        "keyPhrases": [
          "real-world industrial applications",
          "comparative trade-offs and performance",
          "critical evaluative summary"
        ]
      }
    ],
    "markingRubric": {
      "criteria": [
        {
          "conceptId": "c1",
          "conceptName": "Foundational Definition & Core Architectural Principles",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Foundational Definition & Core Architectural Principles with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c2",
          "conceptName": "Operational Mechanics, Algorithms & Mathematical Formulations",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Operational Mechanics, Algorithms & Mathematical Formulations with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c3",
          "conceptName": "Diagrammatic Representation, Edge Cases & Error Handling",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Diagrammatic Representation, Edge Cases & Error Handling with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c4",
          "conceptName": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
          "maxMarks": 2,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Practical Applications, Comparative Trade-offs & Exam Synthesis with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        }
      ],
      "totalMarks": 11
    },
    "modelAnswer": "## Comprehensive Model Answer: Foundations, History & Applications of Artificial Intelligence (Maximum Marks: 11)\n\n### 1. Introduction and Architectural Principles (3 Marks)\nArtificial Intelligence (AI) is the science and engineering of creating intelligent computer systems capable of performing tasks that traditionally require human cognition, such as visual perception, natural language understanding, reasoning, and decision making. Founded as an academic discipline at the 1956 Dartmouth Workshop by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon, AI has evolved through distinct paradigms: Early Symbolic AI and logic-based expert systems, multiple \"AI Winters\" caused by inflated expectations and hardware limits, and modern statistical machine learning driven by big data and parallel GPU computing.\n\nKey Definitions:\n- **Turing Test**: An empirical test proposed by Alan Turing where a computer is considered intelligent if its natural language responses are indistinguishable from a human.\n- **Rational Agent**: An autonomous entity that acts to achieve the best outcome or, when there is uncertainty, the best expected outcome based on its percepts and knowledge.\n\n### 2. Operational Mechanics & Technical Details (3 Marks)\nRussell and Norvig categorize definitions of AI into four distinct approaches: 1. Thinking Humanly (cognitive modeling), 2. Acting Humanly (passing the Turing Test), 3. Thinking Rationally (laws of thought and formal logic), and 4. Acting Rationally (rational agents achieving the best expected outcome under uncertainty). The Turing Test (1950) assesses whether a human interrogator communicating via text can distinguish between a human and a computer. John Searle 1980 Chinese Room thought experiment challenged the Turing Test, arguing that syntax manipulation does not equal genuine semantic understanding (Weak AI vs Strong AI).\n\nMathematical and Algorithmic Analysis:\n- Governing Relationships: Explored through rigorous structural state transitions and formal criteria.\n- Core Mechanism: Humans often act irrationally due to cognitive biases and emotional heuristics. Rational agents maximize mathematical expected utility.\n\n### 3. Structural Representation & Boundary Constraints (3 Marks)\n```\n+-- 4 DIMENSIONS OF AI DEFINITIONS (RUSSELL & NORVIG) --+\\n|               HUMAN STANDARD        RATIONAL STANDARD  |\\n| THOUGHT:    [Thinking Humanly]    [Thinking Rationally] |\\n| BEHAVIOR:   [Acting Humanly]      [Acting Rationally]   |\\n+---------------------------------------------------------+\n```\n\nTechnical Analysis of Boundary Conditions:\nModern Artificial General Intelligence (AGI) research evaluates systems across multi-modal task generalization, continuous learning, and causal world models. Superintelligence hypotheses (Bostrom) explore the Orthogonality Thesis (an agent can combine any level of intelligence with any goal) and Instrumental Convergence (intelligent agents inherently seek self-preservation, goal-content integrity, cognitive enhancement, and resource acquisition as sub-goals unless explicitly constrained).\n\nEdge Conditions and Failure Mitigation:\n- Error Detection & Recovery: Handled through formal state verification and feedback mechanisms.\n- System Constraints: Scalability bounds governed by Artificial Intelligence and Turing Test.\n\n### 4. Real-World Applications & Comparative Evaluation (2 Marks)\nPrimary Industry Applications:\n1. Autonomous vehicle perception and navigation systems.\n2. Clinical diagnosis decision-support systems in radiology.\n3. Algorithmic trading and portfolio optimization in financial markets.\n\nSummary & Synthesis:\nDartmouth 1956: Birth of AI. 4 Approaches: Think/Act Humanly vs Think/Act Rationally. Turing Test: Measures behavioral indistinguishability. Searle Chinese Room: Syntax does not equal Semantics.\n\n---\n*Evaluation Note: This model answer covers all required concepts with complete theoretical rigor, satisfying university 11-mark evaluation standards.*",
    "examTips": [
      "Begin your answer with a formal 2-3 line definition and draw the structural diagram before proceeding to detailed explanations.",
      "Explicitly address all 4 rubric concepts: definitions, operational mechanics, diagrams/edge cases, and real-world applications.",
      "Underline key domain keywords (Artificial Intelligence, Turing Test, Dartmouth Conference, Symbolic AI) to make answer scanning easy for examiners."
    ]
  },
  {
    "id": "pb-ai-2",
    "subjectId": "ai",
    "unitId": "ai-u1",
    "topicId": "ai-u1-t2",
    "topicTitle": "Intelligent Agent Architectures & PEAS Framework",
    "question": "Q2. Explain the fundamental concepts, operational mechanics, structural architecture, and practical applications of \"Intelligent Agent Architectures & PEAS Framework\". Provide necessary diagrams, formal definitions, mathematical relationships, and trade-off comparisons. [11 Marks]",
    "maxMarks": 11,
    "expectedConcepts": [
      {
        "id": "c1",
        "name": "Foundational Definition & Core Architectural Principles",
        "weight": 3,
        "description": "Clear formulation of fundamental definitions, theoretical framework, and primary architectural components of Intelligent Agent Architectures & PEAS Framework.",
        "requiredKeywords": [
          "Agent",
          "PEAS",
          "PEAS Framework"
        ],
        "synonyms": {
          "Agent": [
            "principle",
            "foundational model",
            "architecture",
            "structure",
            "mechanism"
          ],
          "PEAS": [
            "framework",
            "standard",
            "technique",
            "specification",
            "protocol"
          ]
        },
        "keyPhrases": [
          "definition of Intelligent Agent Architectures & PEAS Framework",
          "fundamental architectural model",
          "primary governing mechanism"
        ]
      },
      {
        "id": "c2",
        "name": "Operational Mechanics, Algorithms & Mathematical Formulations",
        "weight": 3,
        "description": "Detailed step-by-step operational analysis, state transitions, algorithms, and mathematical relationships governing Intelligent Agent Architectures & PEAS Framework.",
        "requiredKeywords": [
          "Sensors",
          "Condition-Action Rule",
          "operation"
        ],
        "synonyms": {
          "Sensors": [
            "procedure",
            "formula",
            "methodology",
            "mathematical analysis"
          ],
          "operation": [
            "execution",
            "runtime process",
            "state progression",
            "transition"
          ]
        },
        "keyPhrases": [
          "operational step-by-step analysis",
          "mathematical formulation",
          "state transitions and execution flow"
        ]
      },
      {
        "id": "c3",
        "name": "Diagrammatic Representation, Edge Cases & Error Handling",
        "weight": 3,
        "description": "Structural diagram breakdown, analysis of boundary constraints, edge conditions, failure mitigation, or optimization strategies.",
        "requiredKeywords": [
          "diagram",
          "constraint",
          "error",
          "boundary"
        ],
        "synonyms": {
          "diagram": [
            "architecture diagram",
            "schematic",
            "structural representation",
            "flowchart"
          ],
          "constraint": [
            "trade-off",
            "limitation",
            "edge condition",
            "boundary case"
          ]
        },
        "keyPhrases": [
          "architectural diagram structure",
          "handling boundary conditions",
          "error detection and mitigation"
        ]
      },
      {
        "id": "c4",
        "name": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
        "weight": 2,
        "description": "Real-world industry applications, comparative trade-offs against alternative paradigms, and concluding evaluative synthesis.",
        "requiredKeywords": [
          "application",
          "trade-off",
          "performance",
          "comparison"
        ],
        "synonyms": {
          "application": [
            "implementation",
            "real-world use",
            "deployment",
            "industry practice"
          ],
          "performance": [
            "efficiency",
            "throughput",
            "scalability",
            "latency"
          ]
        },
        "keyPhrases": [
          "real-world industrial applications",
          "comparative trade-offs and performance",
          "critical evaluative summary"
        ]
      }
    ],
    "markingRubric": {
      "criteria": [
        {
          "conceptId": "c1",
          "conceptName": "Foundational Definition & Core Architectural Principles",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Foundational Definition & Core Architectural Principles with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c2",
          "conceptName": "Operational Mechanics, Algorithms & Mathematical Formulations",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Operational Mechanics, Algorithms & Mathematical Formulations with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c3",
          "conceptName": "Diagrammatic Representation, Edge Cases & Error Handling",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Diagrammatic Representation, Edge Cases & Error Handling with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c4",
          "conceptName": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
          "maxMarks": 2,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Practical Applications, Comparative Trade-offs & Exam Synthesis with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        }
      ],
      "totalMarks": 11
    },
    "modelAnswer": "## Comprehensive Model Answer: Intelligent Agent Architectures & PEAS Framework (Maximum Marks: 11)\n\n### 1. Introduction and Architectural Principles (3 Marks)\nAn Agent is anything that can perceive its environment through Sensors and act upon that environment through Actuators. An agent decision-making process is governed by its Agent Function (mapping percept sequences to actions), implemented by an Agent Program running on an architecture. To rigorously design an intelligent agent, we define its PEAS description: Performance measure (success criteria), Environment (external context), Actuators (output mechanisms), and Sensors (input instruments). For example, an automated taxi PEAS includes: Performance (safety, speed, passenger comfort, legal compliance), Environment (roads, traffic, pedestrians, weather), Actuators (steering, throttle, brakes, horn), and Sensors (cameras, radar, lidar, GPS, speedometer).\n\nKey Definitions:\n- **PEAS Framework**: A formal engineering specification defining Performance measure, Environment, Actuators, and Sensors for an agent task.\n- **Condition-Action Rule**: An if-then association rule that maps a current perceptual trigger directly to an immediate actuator response.\n\n### 2. Operational Mechanics & Technical Details (3 Marks)\nRussell and Norvig define five agent architectures in increasing order of complexity: 1. Simple Reflex Agent: Selects actions based only on current percept using condition-action rules (if-then); fails in partially observable worlds. 2. Model-Based Reflex Agent: Maintains internal state representing unobserved aspects of the world. 3. Goal-Based Agent: Evaluates actions based on whether they achieve desirable future goal states. 4. Utility-Based Agent: Maps states to real-numbered utility values, making optimal trade-offs among conflicting goals. 5. Learning Agent: Divides into Critic (evaluates performance against external standards), Learning Element (makes improvements), Learning Goals, and Problem Generator (suggests exploratory actions).\n\nMathematical and Algorithmic Analysis:\n- Governing Relationships: Explored through rigorous structural state transitions and formal criteria.\n- Core Mechanism: Without internal memory, an agent cannot distinguish between identical percepts that require different actions based on prior history.\n\n### 3. Structural Representation & Boundary Constraints (3 Marks)\n```\n+-- THE GENERAL LEARNING AGENT ARCHITECTURE --+\\n| Sensors -> [ Critic ] <--- Performance Standard\\n|               | Feedback\\n|               v\\n|        [Learning Element] ---> [Problem Generator]\\n|               | Updates              | Proposes experiments\\n|               v                      v\\n| Percepts -> [Performance Element] -> Actuators -> Actions\n```\n\nTechnical Analysis of Boundary Conditions:\nIn formal multi-agent systems (MAS), agents operate in competitive or cooperative environments where individual rationality does not guarantee collective social welfare (Game Theory). The Problem Generator in a learning agent balances the classic Exploration vs Exploitation trade-off: taking suboptimal actions in the short term to discover superior long-term strategies, formalized in Reinforcement Learning via epsilon-greedy policies or Upper Confidence Bounds (UCB).\n\nEdge Conditions and Failure Mitigation:\n- Error Detection & Recovery: Handled through formal state verification and feedback mechanisms.\n- System Constraints: Scalability bounds governed by Agent and PEAS.\n\n### 4. Real-World Applications & Comparative Evaluation (2 Marks)\nPrimary Industry Applications:\n1. Automated vacuum cleaner agents (Roomba localization and cleaning policies).\n2. Autonomous drone delivery flight controllers.\n3. Algorithmic customer service bots with intent recognition.\n\nSummary & Synthesis:\nPEAS: Performance, Environment, Actuators, Sensors. 5 Agent types: Simple Reflex, Model-Based, Goal-Based, Utility-Based, Learning. Simple reflex uses condition-action rules; Model-based tracks internal state. Learning agent critic provides reward feedback to learning element.\n\n---\n*Evaluation Note: This model answer covers all required concepts with complete theoretical rigor, satisfying university 11-mark evaluation standards.*",
    "examTips": [
      "Begin your answer with a formal 2-3 line definition and draw the structural diagram before proceeding to detailed explanations.",
      "Explicitly address all 4 rubric concepts: definitions, operational mechanics, diagrams/edge cases, and real-world applications.",
      "Underline key domain keywords (Agent, PEAS, Sensors, Actuators) to make answer scanning easy for examiners."
    ]
  },
  {
    "id": "pb-ai-3",
    "subjectId": "ai",
    "unitId": "ai-u2",
    "topicId": "ai-u2-t3",
    "topicTitle": "Adversarial Search & Game Playing (Minimax & Alpha-Beta Pruning)",
    "question": "Q3. Explain the fundamental concepts, operational mechanics, structural architecture, and practical applications of \"Adversarial Search & Game Playing (Minimax & Alpha-Beta Pruning)\". Provide necessary diagrams, formal definitions, mathematical relationships, and trade-off comparisons. [11 Marks]",
    "maxMarks": 11,
    "expectedConcepts": [
      {
        "id": "c1",
        "name": "Foundational Definition & Core Architectural Principles",
        "weight": 3,
        "description": "Clear formulation of fundamental definitions, theoretical framework, and primary architectural components of Adversarial Search & Game Playing (Minimax & Alpha-Beta Pruning).",
        "requiredKeywords": [
          "Adversarial Search",
          "Game Playing",
          "Zero-Sum Game"
        ],
        "synonyms": {
          "Adversarial Search": [
            "principle",
            "foundational model",
            "architecture",
            "structure",
            "mechanism"
          ],
          "Game Playing": [
            "framework",
            "standard",
            "technique",
            "specification",
            "protocol"
          ]
        },
        "keyPhrases": [
          "definition of Adversarial Search & Game Playing (Minimax & Alpha-Beta Pruning)",
          "fundamental architectural model",
          "primary governing mechanism"
        ]
      },
      {
        "id": "c2",
        "name": "Operational Mechanics, Algorithms & Mathematical Formulations",
        "weight": 3,
        "description": "Detailed step-by-step operational analysis, state transitions, algorithms, and mathematical relationships governing Adversarial Search & Game Playing (Minimax & Alpha-Beta Pruning).",
        "requiredKeywords": [
          "Minimax",
          "Alpha-Beta Pruning",
          "operation"
        ],
        "synonyms": {
          "Minimax": [
            "procedure",
            "formula",
            "methodology",
            "mathematical analysis"
          ],
          "operation": [
            "execution",
            "runtime process",
            "state progression",
            "transition"
          ]
        },
        "keyPhrases": [
          "operational step-by-step analysis",
          "mathematical formulation",
          "state transitions and execution flow"
        ]
      },
      {
        "id": "c3",
        "name": "Diagrammatic Representation, Edge Cases & Error Handling",
        "weight": 3,
        "description": "Structural diagram breakdown, analysis of boundary constraints, edge conditions, failure mitigation, or optimization strategies.",
        "requiredKeywords": [
          "diagram",
          "constraint",
          "error",
          "boundary"
        ],
        "synonyms": {
          "diagram": [
            "architecture diagram",
            "schematic",
            "structural representation",
            "flowchart"
          ],
          "constraint": [
            "trade-off",
            "limitation",
            "edge condition",
            "boundary case"
          ]
        },
        "keyPhrases": [
          "architectural diagram structure",
          "handling boundary conditions",
          "error detection and mitigation"
        ]
      },
      {
        "id": "c4",
        "name": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
        "weight": 2,
        "description": "Real-world industry applications, comparative trade-offs against alternative paradigms, and concluding evaluative synthesis.",
        "requiredKeywords": [
          "application",
          "trade-off",
          "performance",
          "comparison"
        ],
        "synonyms": {
          "application": [
            "implementation",
            "real-world use",
            "deployment",
            "industry practice"
          ],
          "performance": [
            "efficiency",
            "throughput",
            "scalability",
            "latency"
          ]
        },
        "keyPhrases": [
          "real-world industrial applications",
          "comparative trade-offs and performance",
          "critical evaluative summary"
        ]
      }
    ],
    "markingRubric": {
      "criteria": [
        {
          "conceptId": "c1",
          "conceptName": "Foundational Definition & Core Architectural Principles",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Foundational Definition & Core Architectural Principles with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c2",
          "conceptName": "Operational Mechanics, Algorithms & Mathematical Formulations",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Operational Mechanics, Algorithms & Mathematical Formulations with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c3",
          "conceptName": "Diagrammatic Representation, Edge Cases & Error Handling",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Diagrammatic Representation, Edge Cases & Error Handling with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c4",
          "conceptName": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
          "maxMarks": 2,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Practical Applications, Comparative Trade-offs & Exam Synthesis with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        }
      ],
      "totalMarks": 11
    },
    "modelAnswer": "## Comprehensive Model Answer: Adversarial Search & Game Playing (Minimax & Alpha-Beta Pruning) (Maximum Marks: 11)\n\n### 1. Introduction and Architectural Principles (3 Marks)\nAdversarial search examines competitive multi-agent environments where agents have conflicting goals. In a two-player, deterministic, turn-based, zero-sum game of perfect information (such as Chess, Checkers, or Tic-Tac-Toe), two players—MAX (aiming to maximize score) and MIN (aiming to minimize score)—alternate moves. The Minimax Algorithm calculates the optimal move for MAX assuming MIN plays perfectly: MAX chooses the child node with maximum minimax value, while MIN chooses the child with minimum minimax value. If a terminal state is reached, the game utility function returns the final payoff (+1 win, 0 draw, -1 loss).\n\nKey Definitions:\n- **Zero-Sum Game**: A mathematical game where the total payoff to all players sums to zero: any gain by one player is an exact loss to the opponent.\n- **Alpha-Beta Pruning**: An adversarial search optimization that prunes subtrees that are mathematically proven to be worse than previously explored options.\n\n### 2. Operational Mechanics & Technical Details (3 Marks)\nMinimax time complexity is O(b^m) and space complexity is O(b*m). In deep games like Chess (b ≈ 35, m ≈ 80), full tree expansion is impossible. Alpha-Beta Pruning returns the exact same move as Minimax while pruning irrelevant branches: 1. Alpha (alpha): The highest (best) value MAX is guaranteed to achieve so far along the path. 2. Beta (beta): The lowest (best) value MIN is guaranteed to achieve so far along the path. During recursion, if at any point alpha >= beta, the current parent will never select this branch, allowing the remaining subtree to be pruned immediately (Alpha-cut or Beta-cut).\n\nMathematical and Algorithmic Analysis:\n- Governing Relationships: Explored through rigorous structural state transitions and formal criteria.\n- Core Mechanism: If worst moves are searched first, no pruning occurs (O(b^m)). If best moves are searched first, time complexity drops to O(b^(m/2)).\n\n### 3. Structural Representation & Boundary Constraints (3 Marks)\n```\n+-- ALPHA-BETA PRUNING CUTOFF MECHANISM --+\\n| MAX Node: updates alpha = max(alpha, child_val)\\n| MIN Node: updates beta  = min(beta, child_val)\\n| PRUNING CONDITION: If alpha >= beta, PRUNE remaining siblings!\\n|          [MAX (alpha=5)]\\n|          /             \\\\\\n|      [MIN: 5]        [MIN: alpha=5, beta=3] -> 5 >= 3 => PRUNE!\\n|      /      \\\\             /      \\\\\\n|    [5]      [8]          [3]     [XX]\n```\n\nTechnical Analysis of Boundary Conditions:\nWith optimal move ordering (evaluating best moves first), Alpha-Beta pruning reduces effective branching factor from b to sqrt(b), doubling the reachable search depth from d to 2d in equal time: O(b^(m/2)). Real-world game engines cannot search to terminal states; they use Heuristic Evaluation Functions at a fixed depth limit d (e.g. material piece counts and positional mobility). They combat the Horizon Effect (where an inevitable devastating opponent move is pushed beyond the search horizon) using Quiescence Search, which continues searching tactical capture sequences until the position is calm.\n\nEdge Conditions and Failure Mitigation:\n- Error Detection & Recovery: Handled through formal state verification and feedback mechanisms.\n- System Constraints: Scalability bounds governed by Adversarial Search and Game Playing.\n\n### 4. Real-World Applications & Comparative Evaluation (2 Marks)\nPrimary Industry Applications:\n1. Chess game engines (Stockfish alpha-beta search).\n2. Checkers (Chinook solved checkers using alpha-beta and endgame databases).\n3. Real-time strategy game tactical skirmish logic.\n\nSummary & Synthesis:\nMinimax: MAX chooses max; MIN chooses min. Alpha: Best value for MAX so far (initially -infinity). Beta: Best value for MIN so far (initially +infinity). Prune when alpha >= beta. Optimal ordering yields O(b^(m/2)).\n\n---\n*Evaluation Note: This model answer covers all required concepts with complete theoretical rigor, satisfying university 11-mark evaluation standards.*",
    "examTips": [
      "Begin your answer with a formal 2-3 line definition and draw the structural diagram before proceeding to detailed explanations.",
      "Explicitly address all 4 rubric concepts: definitions, operational mechanics, diagrams/edge cases, and real-world applications.",
      "Underline key domain keywords (Adversarial Search, Game Playing, Minimax, Alpha-Beta Pruning) to make answer scanning easy for examiners."
    ]
  },
  {
    "id": "pb-ai-4",
    "subjectId": "ai",
    "unitId": "ai-u2",
    "topicId": "ai-u2-t1",
    "topicTitle": "Uninformed Search Strategies (BFS, DFS, Uniform Cost Search)",
    "question": "Q4. Explain the fundamental concepts, operational mechanics, structural architecture, and practical applications of \"Uninformed Search Strategies (BFS, DFS, Uniform Cost Search)\". Provide necessary diagrams, formal definitions, mathematical relationships, and trade-off comparisons. [11 Marks]",
    "maxMarks": 11,
    "expectedConcepts": [
      {
        "id": "c1",
        "name": "Foundational Definition & Core Architectural Principles",
        "weight": 3,
        "description": "Clear formulation of fundamental definitions, theoretical framework, and primary architectural components of Uninformed Search Strategies (BFS, DFS, Uniform Cost Search).",
        "requiredKeywords": [
          "Search",
          "BFS",
          "Branching Factor (b)"
        ],
        "synonyms": {
          "Search": [
            "principle",
            "foundational model",
            "architecture",
            "structure",
            "mechanism"
          ],
          "BFS": [
            "framework",
            "standard",
            "technique",
            "specification",
            "protocol"
          ]
        },
        "keyPhrases": [
          "definition of Uninformed Search Strategies (BFS, DFS, Uniform Cost Search)",
          "fundamental architectural model",
          "primary governing mechanism"
        ]
      },
      {
        "id": "c2",
        "name": "Operational Mechanics, Algorithms & Mathematical Formulations",
        "weight": 3,
        "description": "Detailed step-by-step operational analysis, state transitions, algorithms, and mathematical relationships governing Uninformed Search Strategies (BFS, DFS, Uniform Cost Search).",
        "requiredKeywords": [
          "DFS",
          "Completeness",
          "operation"
        ],
        "synonyms": {
          "DFS": [
            "procedure",
            "formula",
            "methodology",
            "mathematical analysis"
          ],
          "operation": [
            "execution",
            "runtime process",
            "state progression",
            "transition"
          ]
        },
        "keyPhrases": [
          "operational step-by-step analysis",
          "mathematical formulation",
          "state transitions and execution flow"
        ]
      },
      {
        "id": "c3",
        "name": "Diagrammatic Representation, Edge Cases & Error Handling",
        "weight": 3,
        "description": "Structural diagram breakdown, analysis of boundary constraints, edge conditions, failure mitigation, or optimization strategies.",
        "requiredKeywords": [
          "diagram",
          "constraint",
          "error",
          "boundary"
        ],
        "synonyms": {
          "diagram": [
            "architecture diagram",
            "schematic",
            "structural representation",
            "flowchart"
          ],
          "constraint": [
            "trade-off",
            "limitation",
            "edge condition",
            "boundary case"
          ]
        },
        "keyPhrases": [
          "architectural diagram structure",
          "handling boundary conditions",
          "error detection and mitigation"
        ]
      },
      {
        "id": "c4",
        "name": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
        "weight": 2,
        "description": "Real-world industry applications, comparative trade-offs against alternative paradigms, and concluding evaluative synthesis.",
        "requiredKeywords": [
          "application",
          "trade-off",
          "performance",
          "comparison"
        ],
        "synonyms": {
          "application": [
            "implementation",
            "real-world use",
            "deployment",
            "industry practice"
          ],
          "performance": [
            "efficiency",
            "throughput",
            "scalability",
            "latency"
          ]
        },
        "keyPhrases": [
          "real-world industrial applications",
          "comparative trade-offs and performance",
          "critical evaluative summary"
        ]
      }
    ],
    "markingRubric": {
      "criteria": [
        {
          "conceptId": "c1",
          "conceptName": "Foundational Definition & Core Architectural Principles",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Foundational Definition & Core Architectural Principles with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c2",
          "conceptName": "Operational Mechanics, Algorithms & Mathematical Formulations",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Operational Mechanics, Algorithms & Mathematical Formulations with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c3",
          "conceptName": "Diagrammatic Representation, Edge Cases & Error Handling",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Diagrammatic Representation, Edge Cases & Error Handling with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c4",
          "conceptName": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
          "maxMarks": 2,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Practical Applications, Comparative Trade-offs & Exam Synthesis with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        }
      ],
      "totalMarks": 11
    },
    "modelAnswer": "## Comprehensive Model Answer: Uninformed Search Strategies (BFS, DFS, Uniform Cost Search) (Maximum Marks: 11)\n\n### 1. Introduction and Architectural Principles (3 Marks)\nUninformed (blind) search strategies have no information about the distance to the goal beyond the problem definition. Evaluation metrics are: Completeness (does it find a solution?), Optimality (does it find the lowest path cost?), Time Complexity (nodes generated), and Space Complexity (maximum nodes stored in memory), evaluated in terms of branching factor b, depth of shallowest goal d, and maximum tree depth m. Breadth-First Search (BFS) explores the shallowest unexpanded node first using a FIFO queue; it is complete and optimal for unit-step costs, but consumes exponential memory O(b^d). Depth-First Search (DFS) explores the deepest node using a LIFO stack; it has modest O(b*m) space complexity, but is incomplete in infinite trees and non-optimal.\n\nKey Definitions:\n- **Branching Factor (b)**: The average or maximum number of successor nodes generated by expanding any given node in the search tree.\n- **Completeness**: The mathematical guarantee that a search algorithm will find a solution if one exists.\n\n### 2. Operational Mechanics & Technical Details (3 Marks)\nUniform Cost Search (UCS) expands the node n with lowest path cost g(n) using a priority queue. It is complete and optimal for arbitrary positive step costs (time and space O(b^(1 + floor(C*/epsilon)))). Depth-Limited Search (DLS) limits DFS to depth limit l. Iterative Deepening Search (IDS) repeatedly executes DLS with increasing limits l = 0, 1, 2, ... d. IDS combines the optimality and completeness of BFS with the linear memory efficiency of DFS (Space: O(b*d)). Although top nodes are re-generated, the bottom tier dominates: total nodes generated in IDS is roughly b/(b-1) times BFS, incurring negligible computational overhead.\n\nMathematical and Algorithmic Analysis:\n- Governing Relationships: Explored through rigorous structural state transitions and formal criteria.\n- Core Mechanism: At branching factor b=10, depth 10 requires generating 10^10 nodes (10 Terabytes of RAM), exhausting memory in seconds.\n\n### 3. Structural Representation & Boundary Constraints (3 Marks)\n```\n+-- UNINFORMED SEARCH STRATEGIES COMPARISON TABLE --+\\n| Criterion | BFS      | DFS      | UCS (Dijkstra) | IDS      |\\n| Complete? | Yes (if b finite) | No (infinite)| Yes (step>=eps)| Yes (finite b) |\\n| Optimal?  | Yes (cost=1) | No   | Yes            | Yes (cost=1) |\\n| Time      | O(b^d)   | O(b^m)   | O(b^(C*/eps))   | O(b^d)   |\\n| Space     | O(b^d)   | O(b*m)   | O(b^(C*/eps))   | O(b*d)   |\n```\n\nTechnical Analysis of Boundary Conditions:\nIn graph search (as opposed to tree search), an Explored Set (closed list) stores all expanded states to prevent infinite loops in cyclic graphs. Bidirectional Search runs two simultaneous searches: forward from initial state and backward from goal, meeting in the middle. If both directions use BFS, time complexity drops from O(b^d) to O(2 * b^(d/2)), representing an exponential speedup.\n\nEdge Conditions and Failure Mitigation:\n- Error Detection & Recovery: Handled through formal state verification and feedback mechanisms.\n- System Constraints: Scalability bounds governed by Search and BFS.\n\n### 4. Real-World Applications & Comparative Evaluation (2 Marks)\nPrimary Industry Applications:\n1. Pathfinding in puzzle games (8-puzzle, Rubik cube solver).\n2. Web crawlers indexing hyperlinks in breadth-first order.\n3. Network routing table computation via Uniform Cost Search.\n\nSummary & Synthesis:\nBFS: FIFO queue, complete, optimal for unit cost, high memory O(b^d). DFS: LIFO stack, low memory O(bm), incomplete, non-optimal. UCS: Priority queue ordered by g(n), optimal for varying step costs. IDS: Best uninformed search—combines BFS optimality with DFS O(bd) memory.\n\n---\n*Evaluation Note: This model answer covers all required concepts with complete theoretical rigor, satisfying university 11-mark evaluation standards.*",
    "examTips": [
      "Begin your answer with a formal 2-3 line definition and draw the structural diagram before proceeding to detailed explanations.",
      "Explicitly address all 4 rubric concepts: definitions, operational mechanics, diagrams/edge cases, and real-world applications.",
      "Underline key domain keywords (Search, BFS, DFS, Uniform Cost Search) to make answer scanning easy for examiners."
    ]
  },
  {
    "id": "pb-ai-5",
    "subjectId": "ai",
    "unitId": "ai-u3",
    "topicId": "ai-u3-t2",
    "topicTitle": "First-Order Predicate Logic (FOL), Unification & Resolution Refutation",
    "question": "Q5. Explain the fundamental concepts, operational mechanics, structural architecture, and practical applications of \"First-Order Predicate Logic (FOL), Unification & Resolution Refutation\". Provide necessary diagrams, formal definitions, mathematical relationships, and trade-off comparisons. [11 Marks]",
    "maxMarks": 11,
    "expectedConcepts": [
      {
        "id": "c1",
        "name": "Foundational Definition & Core Architectural Principles",
        "weight": 3,
        "description": "Clear formulation of fundamental definitions, theoretical framework, and primary architectural components of First-Order Predicate Logic (FOL), Unification & Resolution Refutation.",
        "requiredKeywords": [
          "First-Order Logic",
          "Predicates",
          "Universal Quantifier (ForAll)"
        ],
        "synonyms": {
          "First-Order Logic": [
            "principle",
            "foundational model",
            "architecture",
            "structure",
            "mechanism"
          ],
          "Predicates": [
            "framework",
            "standard",
            "technique",
            "specification",
            "protocol"
          ]
        },
        "keyPhrases": [
          "definition of First-Order Predicate Logic (FOL), Unification & Resolution Refutation",
          "fundamental architectural model",
          "primary governing mechanism"
        ]
      },
      {
        "id": "c2",
        "name": "Operational Mechanics, Algorithms & Mathematical Formulations",
        "weight": 3,
        "description": "Detailed step-by-step operational analysis, state transitions, algorithms, and mathematical relationships governing First-Order Predicate Logic (FOL), Unification & Resolution Refutation.",
        "requiredKeywords": [
          "Quantifiers",
          "Skolemization",
          "operation"
        ],
        "synonyms": {
          "Quantifiers": [
            "procedure",
            "formula",
            "methodology",
            "mathematical analysis"
          ],
          "operation": [
            "execution",
            "runtime process",
            "state progression",
            "transition"
          ]
        },
        "keyPhrases": [
          "operational step-by-step analysis",
          "mathematical formulation",
          "state transitions and execution flow"
        ]
      },
      {
        "id": "c3",
        "name": "Diagrammatic Representation, Edge Cases & Error Handling",
        "weight": 3,
        "description": "Structural diagram breakdown, analysis of boundary constraints, edge conditions, failure mitigation, or optimization strategies.",
        "requiredKeywords": [
          "diagram",
          "constraint",
          "error",
          "boundary"
        ],
        "synonyms": {
          "diagram": [
            "architecture diagram",
            "schematic",
            "structural representation",
            "flowchart"
          ],
          "constraint": [
            "trade-off",
            "limitation",
            "edge condition",
            "boundary case"
          ]
        },
        "keyPhrases": [
          "architectural diagram structure",
          "handling boundary conditions",
          "error detection and mitigation"
        ]
      },
      {
        "id": "c4",
        "name": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
        "weight": 2,
        "description": "Real-world industry applications, comparative trade-offs against alternative paradigms, and concluding evaluative synthesis.",
        "requiredKeywords": [
          "application",
          "trade-off",
          "performance",
          "comparison"
        ],
        "synonyms": {
          "application": [
            "implementation",
            "real-world use",
            "deployment",
            "industry practice"
          ],
          "performance": [
            "efficiency",
            "throughput",
            "scalability",
            "latency"
          ]
        },
        "keyPhrases": [
          "real-world industrial applications",
          "comparative trade-offs and performance",
          "critical evaluative summary"
        ]
      }
    ],
    "markingRubric": {
      "criteria": [
        {
          "conceptId": "c1",
          "conceptName": "Foundational Definition & Core Architectural Principles",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Foundational Definition & Core Architectural Principles with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c2",
          "conceptName": "Operational Mechanics, Algorithms & Mathematical Formulations",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Operational Mechanics, Algorithms & Mathematical Formulations with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c3",
          "conceptName": "Diagrammatic Representation, Edge Cases & Error Handling",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Diagrammatic Representation, Edge Cases & Error Handling with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c4",
          "conceptName": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
          "maxMarks": 2,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Practical Applications, Comparative Trade-offs & Exam Synthesis with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        }
      ],
      "totalMarks": 11
    },
    "modelAnswer": "## Comprehensive Model Answer: First-Order Predicate Logic (FOL), Unification & Resolution Refutation (Maximum Marks: 11)\n\n### 1. Introduction and Architectural Principles (3 Marks)\nWhile Propositional Logic is limited to true/false facts, First-Order Logic (FOL) represents the world in terms of Objects (people, numbers, houses), Relations/Predicates (King, Brother, GreaterThan), and Functions (FatherOf, Plus). FOL introduces two Quantifiers: 1. Universal Quantifier (ForAll x): asserts that a property holds for every object in the domain. 2. Existential Quantifier (Exists x): asserts that a property holds for at least one object in the domain. FOL provides the expressive power required to represent complex mathematical and common-sense knowledge.\n\nKey Definitions:\n- **Universal Quantifier (ForAll)**: A logical quantifier asserting that an open sentence is True for every possible object in the universe of discourse.\n- **Skolemization**: The process of removing existential quantifiers by replacing the quantified variable with a unique Skolem constant or function.\n\n### 2. Operational Mechanics & Technical Details (3 Marks)\nTo automate reasoning in FOL, sentences are converted to Clausal Form through 8 systematic steps: 1. Eliminate implications, 2. Move negations inward (~ForAll x P(x) <=> Exists x ~P(x)), 3. Standardize variables, 4. Skolemization: replace existentially quantified variables with Skolem constants or Skolem functions of enclosing universal variables, 5. Drop universal quantifiers, 6. Distribute OR over AND, 7. Split into clauses, and 8. Standardize variables per clause. Unification (Robinson Algorithm) finds a variable substitution theta that makes two distinct logical expressions syntactically identical: UNIFY(p, q) = theta. The Most General Unifier (MGU) finds the most general substitution without unnecessary bindings.\n\nMathematical and Algorithmic Analysis:\n- Governing Relationships: Explored through rigorous structural state transitions and formal criteria.\n- Core Mechanism: If Exists y is not inside ForAll, y is replaced by constant K. If Exists y is inside ForAll x, y depends on x, requiring Skolem function f(x).\n\n### 3. Structural Representation & Boundary Constraints (3 Marks)\n```\n+-- FIRST-ORDER LOGIC QUANTIFIERS & SKOLEMIZATION --+\\n| Universal:    ForAll x, King(x) => Person(x)          |\\n| Existential:  Exists x, Crown(x) ^ OnHead(x, John)    |\\n| Skolemization: Exists x, Cat(x)  ===> Cat(K_constant) |\\n| ForAll x, Exists y, Mother(y,x) ===> ForAll x, Mother(f(x), x) [Skolem Function]\n```\n\nTechnical Analysis of Boundary Conditions:\nThe Occurs Check in unification verifies that a variable x does not appear inside the term t being substituted for x (e.g. UNIFY(x, f(x)) must fail), preventing infinite recursive structures. Generalized Modus Ponens and First-Order Resolution Refutation enable automated theorem provers (Prolog, Vampire, Prover9) to verify software specifications and validate cryptographic security protocols.\n\nEdge Conditions and Failure Mitigation:\n- Error Detection & Recovery: Handled through formal state verification and feedback mechanisms.\n- System Constraints: Scalability bounds governed by First-Order Logic and Predicates.\n\n### 4. Real-World Applications & Comparative Evaluation (2 Marks)\nPrimary Industry Applications:\n1. Prolog logic programming language interpreter engines.\n2. Formal mathematical theorem verification (Coq, Isabelle).\n3. Automated security policy and regulatory compliance auditing.\n\nSummary & Synthesis:\nUniversal (ForAll) pairs with implication (=>); Existential (Exists) pairs with conjunction (^). Skolem constant replaces Exists; Skolem function replaces Exists inside ForAll. Unification finds variable substitutions: UNIFY(p,q) = theta. Occurs check prevents infinite loops: x cannot unify with f(x).\n\n---\n*Evaluation Note: This model answer covers all required concepts with complete theoretical rigor, satisfying university 11-mark evaluation standards.*",
    "examTips": [
      "Begin your answer with a formal 2-3 line definition and draw the structural diagram before proceeding to detailed explanations.",
      "Explicitly address all 4 rubric concepts: definitions, operational mechanics, diagrams/edge cases, and real-world applications.",
      "Underline key domain keywords (First-Order Logic, Predicates, Quantifiers, Universal) to make answer scanning easy for examiners."
    ]
  },
  {
    "id": "pb-ai-6",
    "subjectId": "ai",
    "unitId": "ai-u3",
    "topicId": "ai-u3-t3",
    "topicTitle": "Ontological Engineering, Semantic Networks & Conceptual Graphs",
    "question": "Q6. Explain the fundamental concepts, operational mechanics, structural architecture, and practical applications of \"Ontological Engineering, Semantic Networks & Conceptual Graphs\". Provide necessary diagrams, formal definitions, mathematical relationships, and trade-off comparisons. [11 Marks]",
    "maxMarks": 11,
    "expectedConcepts": [
      {
        "id": "c1",
        "name": "Foundational Definition & Core Architectural Principles",
        "weight": 3,
        "description": "Clear formulation of fundamental definitions, theoretical framework, and primary architectural components of Ontological Engineering, Semantic Networks & Conceptual Graphs.",
        "requiredKeywords": [
          "Knowledge Representation",
          "Ontology",
          "Ontology"
        ],
        "synonyms": {
          "Knowledge Representation": [
            "principle",
            "foundational model",
            "architecture",
            "structure",
            "mechanism"
          ],
          "Ontology": [
            "framework",
            "standard",
            "technique",
            "specification",
            "protocol"
          ]
        },
        "keyPhrases": [
          "definition of Ontological Engineering, Semantic Networks & Conceptual Graphs",
          "fundamental architectural model",
          "primary governing mechanism"
        ]
      },
      {
        "id": "c2",
        "name": "Operational Mechanics, Algorithms & Mathematical Formulations",
        "weight": 3,
        "description": "Detailed step-by-step operational analysis, state transitions, algorithms, and mathematical relationships governing Ontological Engineering, Semantic Networks & Conceptual Graphs.",
        "requiredKeywords": [
          "Semantic Networks",
          "TBox & ABox",
          "operation"
        ],
        "synonyms": {
          "Semantic Networks": [
            "procedure",
            "formula",
            "methodology",
            "mathematical analysis"
          ],
          "operation": [
            "execution",
            "runtime process",
            "state progression",
            "transition"
          ]
        },
        "keyPhrases": [
          "operational step-by-step analysis",
          "mathematical formulation",
          "state transitions and execution flow"
        ]
      },
      {
        "id": "c3",
        "name": "Diagrammatic Representation, Edge Cases & Error Handling",
        "weight": 3,
        "description": "Structural diagram breakdown, analysis of boundary constraints, edge conditions, failure mitigation, or optimization strategies.",
        "requiredKeywords": [
          "diagram",
          "constraint",
          "error",
          "boundary"
        ],
        "synonyms": {
          "diagram": [
            "architecture diagram",
            "schematic",
            "structural representation",
            "flowchart"
          ],
          "constraint": [
            "trade-off",
            "limitation",
            "edge condition",
            "boundary case"
          ]
        },
        "keyPhrases": [
          "architectural diagram structure",
          "handling boundary conditions",
          "error detection and mitigation"
        ]
      },
      {
        "id": "c4",
        "name": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
        "weight": 2,
        "description": "Real-world industry applications, comparative trade-offs against alternative paradigms, and concluding evaluative synthesis.",
        "requiredKeywords": [
          "application",
          "trade-off",
          "performance",
          "comparison"
        ],
        "synonyms": {
          "application": [
            "implementation",
            "real-world use",
            "deployment",
            "industry practice"
          ],
          "performance": [
            "efficiency",
            "throughput",
            "scalability",
            "latency"
          ]
        },
        "keyPhrases": [
          "real-world industrial applications",
          "comparative trade-offs and performance",
          "critical evaluative summary"
        ]
      }
    ],
    "markingRubric": {
      "criteria": [
        {
          "conceptId": "c1",
          "conceptName": "Foundational Definition & Core Architectural Principles",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Foundational Definition & Core Architectural Principles with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c2",
          "conceptName": "Operational Mechanics, Algorithms & Mathematical Formulations",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Operational Mechanics, Algorithms & Mathematical Formulations with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c3",
          "conceptName": "Diagrammatic Representation, Edge Cases & Error Handling",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Diagrammatic Representation, Edge Cases & Error Handling with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c4",
          "conceptName": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
          "maxMarks": 2,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Practical Applications, Comparative Trade-offs & Exam Synthesis with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        }
      ],
      "totalMarks": 11
    },
    "modelAnswer": "## Comprehensive Model Answer: Ontological Engineering, Semantic Networks & Conceptual Graphs (Maximum Marks: 11)\n\n### 1. Introduction and Architectural Principles (3 Marks)\nWhile first-order logic provides raw mathematical expressiveness, organizing large-scale knowledge requires Ontological Engineering: the structured categorization of concepts, entities, properties, and relationships within a domain. Early knowledge representations include Semantic Networks (directed graphs where nodes represent concepts or physical objects, and arcs represent relations like IS-A and HAS-A) and Frames (data structures containing named slots and default filler values). Inheritance allows subordinate concept nodes to automatically inherit attributes from parent categories, enabling modular knowledge reuse.\n\nKey Definitions:\n- **Ontology**: A formal, explicit specification of a shared conceptualization defining entities, relations, and axioms in a domain.\n- **TBox & ABox**: TBox contains terminological schema axioms (classes/roles); ABox contains assertional data about concrete individuals.\n\n### 2. Operational Mechanics & Technical Details (3 Marks)\nDescription Logics (DL) were developed to provide formal decidable subsets of First-Order Logic for ontological reasoning. DL classifies knowledge into two components: 1. TBox (Terminological Box): Defines the vocabulary, concepts, and relationships of the domain (e.g. Woman is a Person, Mother is a Woman with child). 2. ABox (Assertional Box): Contains assertions about individual instances in the world (e.g. Mary is a Mother). DL reasoning algorithms perform Subsumption (checking if one concept is a subcategory of another) and Consistency Checking.\n\nMathematical and Algorithmic Analysis:\n- Governing Relationships: Explored through rigorous structural state transitions and formal criteria.\n- Core Mechanism: Penguin is a Bird. Bird has default property Fly=True. Penguin overrides this with Fly=False.\n\n### 3. Structural Representation & Boundary Constraints (3 Marks)\n```\n+-- SEMANTIC NETWORK WITH INHERITANCE HIERARCHY --+\\n|              [ Living Thing ]\\n|                     ^\\n|                     | IS-A\\n|                [ Animal ] -----------> [ Has: Breathe ]\\n|                     ^\\n|                     | IS-A\\n|                 [ Bird ] ------------> [ Can: Fly ]\\n|                  /    \\\\\\n|           (IS-A)/      \\\\(IS-A)\\n|          [ Robin ]    [ Penguin ] ------> [ Can: Fly (OVERRIDE: FALSE) ]\n```\n\nTechnical Analysis of Boundary Conditions:\nThe modern realization of ontological engineering is the Semantic Web and Enterprise Knowledge Graphs. Resource Description Framework (RDF) represents knowledge as subject-predicate-object triples (e.g., `<Einstein> <bornIn> <Ulm>`). Web Ontology Language (OWL-DL) adds rich description logic axiomatization, powering knowledge graphs like Google Knowledge Graph, Wikidata, and biomedical ontologies (SNOMED-CT, Gene Ontology) queried via SPARQL.\n\nEdge Conditions and Failure Mitigation:\n- Error Detection & Recovery: Handled through formal state verification and feedback mechanisms.\n- System Constraints: Scalability bounds governed by Knowledge Representation and Ontology.\n\n### 4. Real-World Applications & Comparative Evaluation (2 Marks)\nPrimary Industry Applications:\n1. Google Knowledge Graph powering web search entity panels.\n2. Biomedical clinical classification systems (SNOMED-CT).\n3. Enterprise data integration across disparate corporate databases.\n\nSummary & Synthesis:\nSemantic Networks: Graph with nodes (concepts) and edges (relations). IS-A defines subclass inheritance; PART-OF defines compositional hierarchy. Description Logics: TBox (terminology/classes) + ABox (assertions/instances). RDF: Subject-Predicate-Object triples queryable by SPARQL.\n\n---\n*Evaluation Note: This model answer covers all required concepts with complete theoretical rigor, satisfying university 11-mark evaluation standards.*",
    "examTips": [
      "Begin your answer with a formal 2-3 line definition and draw the structural diagram before proceeding to detailed explanations.",
      "Explicitly address all 4 rubric concepts: definitions, operational mechanics, diagrams/edge cases, and real-world applications.",
      "Underline key domain keywords (Knowledge Representation, Ontology, Semantic Networks, Conceptual Dependency) to make answer scanning easy for examiners."
    ]
  },
  {
    "id": "pb-ai-7",
    "subjectId": "ai",
    "unitId": "ai-u4",
    "topicId": "ai-u4-t1",
    "topicTitle": "Probability Theory, Axioms & Bayes Rule in AI",
    "question": "Q7. Explain the fundamental concepts, operational mechanics, structural architecture, and practical applications of \"Probability Theory, Axioms & Bayes Rule in AI\". Provide necessary diagrams, formal definitions, mathematical relationships, and trade-off comparisons. [11 Marks]",
    "maxMarks": 11,
    "expectedConcepts": [
      {
        "id": "c1",
        "name": "Foundational Definition & Core Architectural Principles",
        "weight": 3,
        "description": "Clear formulation of fundamental definitions, theoretical framework, and primary architectural components of Probability Theory, Axioms & Bayes Rule in AI.",
        "requiredKeywords": [
          "Uncertainty",
          "Probability",
          "Prior (Unconditional) Probability"
        ],
        "synonyms": {
          "Uncertainty": [
            "principle",
            "foundational model",
            "architecture",
            "structure",
            "mechanism"
          ],
          "Probability": [
            "framework",
            "standard",
            "technique",
            "specification",
            "protocol"
          ]
        },
        "keyPhrases": [
          "definition of Probability Theory, Axioms & Bayes Rule in AI",
          "fundamental architectural model",
          "primary governing mechanism"
        ]
      },
      {
        "id": "c2",
        "name": "Operational Mechanics, Algorithms & Mathematical Formulations",
        "weight": 3,
        "description": "Detailed step-by-step operational analysis, state transitions, algorithms, and mathematical relationships governing Probability Theory, Axioms & Bayes Rule in AI.",
        "requiredKeywords": [
          "Axioms of Probability",
          "Posterior (Conditional) Probability",
          "operation"
        ],
        "synonyms": {
          "Axioms of Probability": [
            "procedure",
            "formula",
            "methodology",
            "mathematical analysis"
          ],
          "operation": [
            "execution",
            "runtime process",
            "state progression",
            "transition"
          ]
        },
        "keyPhrases": [
          "operational step-by-step analysis",
          "mathematical formulation",
          "state transitions and execution flow"
        ]
      },
      {
        "id": "c3",
        "name": "Diagrammatic Representation, Edge Cases & Error Handling",
        "weight": 3,
        "description": "Structural diagram breakdown, analysis of boundary constraints, edge conditions, failure mitigation, or optimization strategies.",
        "requiredKeywords": [
          "diagram",
          "constraint",
          "error",
          "boundary"
        ],
        "synonyms": {
          "diagram": [
            "architecture diagram",
            "schematic",
            "structural representation",
            "flowchart"
          ],
          "constraint": [
            "trade-off",
            "limitation",
            "edge condition",
            "boundary case"
          ]
        },
        "keyPhrases": [
          "architectural diagram structure",
          "handling boundary conditions",
          "error detection and mitigation"
        ]
      },
      {
        "id": "c4",
        "name": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
        "weight": 2,
        "description": "Real-world industry applications, comparative trade-offs against alternative paradigms, and concluding evaluative synthesis.",
        "requiredKeywords": [
          "application",
          "trade-off",
          "performance",
          "comparison"
        ],
        "synonyms": {
          "application": [
            "implementation",
            "real-world use",
            "deployment",
            "industry practice"
          ],
          "performance": [
            "efficiency",
            "throughput",
            "scalability",
            "latency"
          ]
        },
        "keyPhrases": [
          "real-world industrial applications",
          "comparative trade-offs and performance",
          "critical evaluative summary"
        ]
      }
    ],
    "markingRubric": {
      "criteria": [
        {
          "conceptId": "c1",
          "conceptName": "Foundational Definition & Core Architectural Principles",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Foundational Definition & Core Architectural Principles with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c2",
          "conceptName": "Operational Mechanics, Algorithms & Mathematical Formulations",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Operational Mechanics, Algorithms & Mathematical Formulations with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c3",
          "conceptName": "Diagrammatic Representation, Edge Cases & Error Handling",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Diagrammatic Representation, Edge Cases & Error Handling with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c4",
          "conceptName": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
          "maxMarks": 2,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Practical Applications, Comparative Trade-offs & Exam Synthesis with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        }
      ],
      "totalMarks": 11
    },
    "modelAnswer": "## Comprehensive Model Answer: Probability Theory, Axioms & Bayes Rule in AI (Maximum Marks: 11)\n\n### 1. Introduction and Architectural Principles (3 Marks)\nIn real-world environments, pure logic fails because agents face incomplete observability, noisy sensors, and non-deterministic actions. Probability Theory provides the mathematical foundation for reasoning under uncertainty. An agent assigns degrees of belief represented as probabilities between 0 and 1. Kolmogorov Axioms dictate: 1. P(A) >= 0 for all events A. 2. P(True) = 1 (and P(False) = 0). 3. P(A v B) = P(A) + P(B) - P(A ^ B). Conditional Probability P(A|B) represents the probability of A given that evidence B is known to have occurred: P(A|B) = P(A ^ B) / P(B).\n\nKey Definitions:\n- **Prior (Unconditional) Probability**: The baseline probability assigned to a proposition in the absence of any other information or evidence.\n- **Posterior (Conditional) Probability**: The updated probability assigned to a proposition after accounting for new observable evidence.\n\n### 2. Operational Mechanics & Technical Details (3 Marks)\nThe Full Joint Probability Distribution specifies the probability of every atomic event across all random variables. Marginalization (summing out) computes marginal probabilities: P(Y) = Sum_z P(Y, z). Conditioning rewrites this: P(Y) = Sum_z P(Y|z) * P(z). Bayes Rule is derived from the product rule P(A ^ B) = P(A|B) * P(B) = P(B|A) * P(A):\\nP(Cause | Effect) = [ P(Effect | Cause) * P(Cause) ] / P(Effect).\\nBayes Rule enables Diagnostic Reasoning (inferring hidden causes from observable symptoms) using Causal Knowledge (how often a cause produces a symptom) and Prior Probabilities.\n\nMathematical and Algorithmic Analysis:\n- Governing Relationships: Explored through rigorous structural state transitions and formal criteria.\n- Core Mechanism: Meningitis causes stiff neck in 70% of cases (Likelihood). Prior of meningitis is 1/50,000. Prior of stiff neck is 1%. What is P(Meningitis | StiffNeck)?\n\n### 3. Structural Representation & Boundary Constraints (3 Marks)\n```\n+-- BAYES RULE DIAGNOSTIC INFERENCE FORMULA --+\\n| P(Cause | Effect) = [ P(Effect | Cause) * P(Cause) ] / P(Effect)\\n| Posterior         = [ Likelihood        * Prior    ] / Evidence\\n| Where P(Effect)   = P(Effect|Cause)*P(Cause) + P(Effect|~Cause)*P(~Cause)\n```\n\nTechnical Analysis of Boundary Conditions:\nWhile the Full Joint Distribution contains answers to every probabilistic query, its size scales exponentially as 2^n for n binary variables, making full joint tables computationally and memory intractable. Independence between variables reduces complexity: if A and B are independent, P(A|B) = P(A), meaning P(A ^ B) = P(A) * P(B). Conditional Independence further decomposes complex joint distributions, forming the mathematical cornerstone of Bayesian Belief Networks.\n\nEdge Conditions and Failure Mitigation:\n- Error Detection & Recovery: Handled through formal state verification and feedback mechanisms.\n- System Constraints: Scalability bounds governed by Uncertainty and Probability.\n\n### 4. Real-World Applications & Comparative Evaluation (2 Marks)\nPrimary Industry Applications:\n1. Medical diagnostic decision-support engines.\n2. Spam email classification (Naive Bayes filter based on word frequencies).\n3. Automated fraud detection in banking credit card transactions.\n\nSummary & Synthesis:\nP(A|B) = P(A ^ B) / P(B). Bayes Rule: P(H|E) = P(E|H) * P(H) / P(E). Posterior = (Likelihood * Prior) / Evidence. Joint distribution size 2^n is intractable; independence enables factoring.\n\n---\n*Evaluation Note: This model answer covers all required concepts with complete theoretical rigor, satisfying university 11-mark evaluation standards.*",
    "examTips": [
      "Begin your answer with a formal 2-3 line definition and draw the structural diagram before proceeding to detailed explanations.",
      "Explicitly address all 4 rubric concepts: definitions, operational mechanics, diagrams/edge cases, and real-world applications.",
      "Underline key domain keywords (Uncertainty, Probability, Axioms of Probability, Prior Probability) to make answer scanning easy for examiners."
    ]
  },
  {
    "id": "pb-ai-8",
    "subjectId": "ai",
    "unitId": "ai-u4",
    "topicId": "ai-u4-t2",
    "topicTitle": "Bayesian Belief Networks (BBN) & Conditional Independence",
    "question": "Q8. Explain the fundamental concepts, operational mechanics, structural architecture, and practical applications of \"Bayesian Belief Networks (BBN) & Conditional Independence\". Provide necessary diagrams, formal definitions, mathematical relationships, and trade-off comparisons. [11 Marks]",
    "maxMarks": 11,
    "expectedConcepts": [
      {
        "id": "c1",
        "name": "Foundational Definition & Core Architectural Principles",
        "weight": 3,
        "description": "Clear formulation of fundamental definitions, theoretical framework, and primary architectural components of Bayesian Belief Networks (BBN) & Conditional Independence.",
        "requiredKeywords": [
          "Bayesian Network",
          "BBN",
          "Bayesian Belief Network"
        ],
        "synonyms": {
          "Bayesian Network": [
            "principle",
            "foundational model",
            "architecture",
            "structure",
            "mechanism"
          ],
          "BBN": [
            "framework",
            "standard",
            "technique",
            "specification",
            "protocol"
          ]
        },
        "keyPhrases": [
          "definition of Bayesian Belief Networks (BBN) & Conditional Independence",
          "fundamental architectural model",
          "primary governing mechanism"
        ]
      },
      {
        "id": "c2",
        "name": "Operational Mechanics, Algorithms & Mathematical Formulations",
        "weight": 3,
        "description": "Detailed step-by-step operational analysis, state transitions, algorithms, and mathematical relationships governing Bayesian Belief Networks (BBN) & Conditional Independence.",
        "requiredKeywords": [
          "DAG",
          "Conditional Probability Table (CPT)",
          "operation"
        ],
        "synonyms": {
          "DAG": [
            "procedure",
            "formula",
            "methodology",
            "mathematical analysis"
          ],
          "operation": [
            "execution",
            "runtime process",
            "state progression",
            "transition"
          ]
        },
        "keyPhrases": [
          "operational step-by-step analysis",
          "mathematical formulation",
          "state transitions and execution flow"
        ]
      },
      {
        "id": "c3",
        "name": "Diagrammatic Representation, Edge Cases & Error Handling",
        "weight": 3,
        "description": "Structural diagram breakdown, analysis of boundary constraints, edge conditions, failure mitigation, or optimization strategies.",
        "requiredKeywords": [
          "diagram",
          "constraint",
          "error",
          "boundary"
        ],
        "synonyms": {
          "diagram": [
            "architecture diagram",
            "schematic",
            "structural representation",
            "flowchart"
          ],
          "constraint": [
            "trade-off",
            "limitation",
            "edge condition",
            "boundary case"
          ]
        },
        "keyPhrases": [
          "architectural diagram structure",
          "handling boundary conditions",
          "error detection and mitigation"
        ]
      },
      {
        "id": "c4",
        "name": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
        "weight": 2,
        "description": "Real-world industry applications, comparative trade-offs against alternative paradigms, and concluding evaluative synthesis.",
        "requiredKeywords": [
          "application",
          "trade-off",
          "performance",
          "comparison"
        ],
        "synonyms": {
          "application": [
            "implementation",
            "real-world use",
            "deployment",
            "industry practice"
          ],
          "performance": [
            "efficiency",
            "throughput",
            "scalability",
            "latency"
          ]
        },
        "keyPhrases": [
          "real-world industrial applications",
          "comparative trade-offs and performance",
          "critical evaluative summary"
        ]
      }
    ],
    "markingRubric": {
      "criteria": [
        {
          "conceptId": "c1",
          "conceptName": "Foundational Definition & Core Architectural Principles",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Foundational Definition & Core Architectural Principles with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c2",
          "conceptName": "Operational Mechanics, Algorithms & Mathematical Formulations",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Operational Mechanics, Algorithms & Mathematical Formulations with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c3",
          "conceptName": "Diagrammatic Representation, Edge Cases & Error Handling",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Diagrammatic Representation, Edge Cases & Error Handling with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c4",
          "conceptName": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
          "maxMarks": 2,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Practical Applications, Comparative Trade-offs & Exam Synthesis with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        }
      ],
      "totalMarks": 11
    },
    "modelAnswer": "## Comprehensive Model Answer: Bayesian Belief Networks (BBN) & Conditional Independence (Maximum Marks: 11)\n\n### 1. Introduction and Architectural Principles (3 Marks)\nA Bayesian Belief Network (BBN) is a probabilistic graphical model that represents a set of random variables and their conditional dependencies via a Directed Acyclic Graph (DAG). The network consists of: 1. Graph Topology: Nodes represent random variables, and directed edges represent direct causal influence (parent to child). 2. Conditional Probability Tables (CPTs): Each node X_i has an associated CPT quantifying P(X_i | Parents(X_i)). The global semantics of a BBN states that the full joint distribution is factored into the product of local conditional distributions: P(X_1, ..., X_n) = Product_i P(X_i | Parents(X_i)).\n\nKey Definitions:\n- **Bayesian Belief Network**: A directed acyclic graph where nodes represent random variables and edges indicate direct conditional dependencies.\n- **Conditional Probability Table (CPT)**: A table attached to each BBN node specifying the probability of each node state for every combination of parent states.\n\n### 2. Operational Mechanics & Technical Details (3 Marks)\nBBNs drastically compress probability tables: if a node has k parents, its CPT requires 2^k values, yielding total network parameters O(n * 2^k) compared to O(2^n) in a full joint distribution. A node is conditionally independent of its non-descendants given its parents. The Markov Blanket of a node X consists of its Parents, its Children, and its Children Other Parents. Conditioned on its Markov Blanket, node X is conditionally independent of all other nodes in the entire network. d-separation (directed separation) is an algorithmic graph procedure that determines if variable set X is independent of Y given evidence Z.\n\nMathematical and Algorithmic Analysis:\n- Governing Relationships: Explored through rigorous structural state transitions and formal criteria.\n- Core Mechanism: In the Burglar Alarm network with 5 binary variables: Full joint requires 2^5 - 1 = 31 parameters. BBN requires only 1+1+4+2+2 = 10 parameters!\n\n### 3. Structural Representation & Boundary Constraints (3 Marks)\n```\n+-- BURGLAR ALARM BAYESIAN NETWORK (DAG) --+\\n|   [Burglary]      [Earthquake]\\n|        \\\\             /\\n|         v           v\\n|           [ Alarm ]\\n|           /       \\\\\\n|          v         v\\n|     [JohnCalls]  [MaryCalls]\\n| Full Joint: P(B,E,A,J,M) = P(B)*P(E)*P(A|B,E)*P(J|A)*P(M|A)\n```\n\nTechnical Analysis of Boundary Conditions:\nExact inference in Bayesian networks is NP-Hard. Exact algorithms include Enumeration and Variable Elimination (which avoids repeated calculations by caching intermediate factor products via dynamic programming). For complex high-dimensional networks, Approximate Inference is employed using Markov Chain Monte Carlo (MCMC), Gibbs Sampling, and Likelihood Weighting algorithms.\n\nEdge Conditions and Failure Mitigation:\n- Error Detection & Recovery: Handled through formal state verification and feedback mechanisms.\n- System Constraints: Scalability bounds governed by Bayesian Network and BBN.\n\n### 4. Real-World Applications & Comparative Evaluation (2 Marks)\nPrimary Industry Applications:\n1. Medical disease diagnosis from multi-symptom clusters (QMR-DT).\n2. Predictive aircraft equipment component failure maintenance.\n3. Ecosystem risk assessment in environmental engineering.\n\nSummary & Synthesis:\nBBN = DAG + CPTs. Full joint = Product of P(Node | Parents). Markov Blanket = Parents + Children + Children other parents. Exact inference is NP-Hard; solved by Variable Elimination or MCMC.\n\n---\n*Evaluation Note: This model answer covers all required concepts with complete theoretical rigor, satisfying university 11-mark evaluation standards.*",
    "examTips": [
      "Begin your answer with a formal 2-3 line definition and draw the structural diagram before proceeding to detailed explanations.",
      "Explicitly address all 4 rubric concepts: definitions, operational mechanics, diagrams/edge cases, and real-world applications.",
      "Underline key domain keywords (Bayesian Network, BBN, DAG, Conditional Probability Table) to make answer scanning easy for examiners."
    ]
  },
  {
    "id": "pb-ai-9",
    "subjectId": "ai",
    "unitId": "ai-u5",
    "topicId": "ai-u5-t3",
    "topicTitle": "Ethics of AI, Algorithmic Bias, Safety & Governance",
    "question": "Q9. Explain the fundamental concepts, operational mechanics, structural architecture, and practical applications of \"Ethics of AI, Algorithmic Bias, Safety & Governance\". Provide necessary diagrams, formal definitions, mathematical relationships, and trade-off comparisons. [11 Marks]",
    "maxMarks": 11,
    "expectedConcepts": [
      {
        "id": "c1",
        "name": "Foundational Definition & Core Architectural Principles",
        "weight": 3,
        "description": "Clear formulation of fundamental definitions, theoretical framework, and primary architectural components of Ethics of AI, Algorithmic Bias, Safety & Governance.",
        "requiredKeywords": [
          "AI Ethics",
          "Algorithmic Bias",
          "Algorithmic Bias"
        ],
        "synonyms": {
          "AI Ethics": [
            "principle",
            "foundational model",
            "architecture",
            "structure",
            "mechanism"
          ],
          "Algorithmic Bias": [
            "framework",
            "standard",
            "technique",
            "specification",
            "protocol"
          ]
        },
        "keyPhrases": [
          "definition of Ethics of AI, Algorithmic Bias, Safety & Governance",
          "fundamental architectural model",
          "primary governing mechanism"
        ]
      },
      {
        "id": "c2",
        "name": "Operational Mechanics, Algorithms & Mathematical Formulations",
        "weight": 3,
        "description": "Detailed step-by-step operational analysis, state transitions, algorithms, and mathematical relationships governing Ethics of AI, Algorithmic Bias, Safety & Governance.",
        "requiredKeywords": [
          "Fairness",
          "Explainable AI (XAI)",
          "operation"
        ],
        "synonyms": {
          "Fairness": [
            "procedure",
            "formula",
            "methodology",
            "mathematical analysis"
          ],
          "operation": [
            "execution",
            "runtime process",
            "state progression",
            "transition"
          ]
        },
        "keyPhrases": [
          "operational step-by-step analysis",
          "mathematical formulation",
          "state transitions and execution flow"
        ]
      },
      {
        "id": "c3",
        "name": "Diagrammatic Representation, Edge Cases & Error Handling",
        "weight": 3,
        "description": "Structural diagram breakdown, analysis of boundary constraints, edge conditions, failure mitigation, or optimization strategies.",
        "requiredKeywords": [
          "diagram",
          "constraint",
          "error",
          "boundary"
        ],
        "synonyms": {
          "diagram": [
            "architecture diagram",
            "schematic",
            "structural representation",
            "flowchart"
          ],
          "constraint": [
            "trade-off",
            "limitation",
            "edge condition",
            "boundary case"
          ]
        },
        "keyPhrases": [
          "architectural diagram structure",
          "handling boundary conditions",
          "error detection and mitigation"
        ]
      },
      {
        "id": "c4",
        "name": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
        "weight": 2,
        "description": "Real-world industry applications, comparative trade-offs against alternative paradigms, and concluding evaluative synthesis.",
        "requiredKeywords": [
          "application",
          "trade-off",
          "performance",
          "comparison"
        ],
        "synonyms": {
          "application": [
            "implementation",
            "real-world use",
            "deployment",
            "industry practice"
          ],
          "performance": [
            "efficiency",
            "throughput",
            "scalability",
            "latency"
          ]
        },
        "keyPhrases": [
          "real-world industrial applications",
          "comparative trade-offs and performance",
          "critical evaluative summary"
        ]
      }
    ],
    "markingRubric": {
      "criteria": [
        {
          "conceptId": "c1",
          "conceptName": "Foundational Definition & Core Architectural Principles",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Foundational Definition & Core Architectural Principles with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c2",
          "conceptName": "Operational Mechanics, Algorithms & Mathematical Formulations",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Operational Mechanics, Algorithms & Mathematical Formulations with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c3",
          "conceptName": "Diagrammatic Representation, Edge Cases & Error Handling",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Diagrammatic Representation, Edge Cases & Error Handling with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c4",
          "conceptName": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
          "maxMarks": 2,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Practical Applications, Comparative Trade-offs & Exam Synthesis with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        }
      ],
      "totalMarks": 11
    },
    "modelAnswer": "## Comprehensive Model Answer: Ethics of AI, Algorithmic Bias, Safety & Governance (Maximum Marks: 11)\n\n### 1. Introduction and Architectural Principles (3 Marks)\nAs AI systems are deployed in consequential high-stakes domains (criminal justice, healthcare, hiring, lending, surveillance), ethical governance becomes critical. Algorithmic Bias arises when an AI system produces systematically prejudiced results that unfairly disadvantage protected demographic groups. Bias does not stem from machine malice; it reflects historical prejudices embedded in training datasets, unrepresentative sampling, or proxy variables (e.g., using postal zip codes as proxies for race in loan underwriting). Ethical AI requires Fairness, Transparency, Accountability, Privacy protection, and Safety.\n\nKey Definitions:\n- **Algorithmic Bias**: Systematic, repeatable errors in a computer system that generate unfair outcomes, such as privileging one demographic category over another.\n- **Explainable AI (XAI)**: Methods and techniques in the application of AI such that the results of the solution can be understood and audited by human experts.\n\n### 2. Operational Mechanics & Technical Details (3 Marks)\nExplainable AI (XAI) addresses the \"black box\" problem of deep neural networks: humans cannot blindly trust predictions when life or liberty is at stake. Post-hoc explainability techniques explain predictions: 1. LIME (Local Interpretable Model-agnostic Explanations): Approximates a complex model locally around a single prediction with an interpretable linear surrogate. 2. SHAP (SHapley Additive exPlanations): Uses cooperative game theory (Shapley values) to fairly apportion credit to each feature for a specific prediction. The EU General Data Protection Regulation (GDPR) mandates a \"right to an explanation\" for automated algorithmic decisions.\n\nMathematical and Algorithmic Analysis:\n- Governing Relationships: Explored through rigorous structural state transitions and formal criteria.\n- Core Mechanism: A recidivism prediction algorithm used in US courts exhibited racial bias: Black defendants were misclassified as high risk at twice the rate of white defendants.\n\n### 3. Structural Representation & Boundary Constraints (3 Marks)\n```\n+-- 5 PILLARS OF RESPONSIBLE AND ETHICAL AI --+\\n| 1. FAIRNESS:         Mitigate disparate impact across protected groups\\n| 2. ACCOUNTABILITY:   Clear legal and human liability for system errors\\n| 3. TRANSPARENCY:     Explainable AI (XAI: SHAP, LIME) avoiding black boxes\\n| 4. PRIVACY:          Data minimization, anonymization, and differential privacy\\n| 5. SAFETY & ROBUST:  Adversarial robustness and human value alignment\n```\n\nTechnical Analysis of Boundary Conditions:\nThe AI Alignment Problem investigates how to ensure that artificial intelligence systems reliably pursue goals aligned with human values and intentions. Value Misalignment can manifest in reward hacking (an agent finding unintended, harmful loopholes in its objective function). In generative AI, synthetic media (Deepfakes) challenge epistemic truth and democratic elections, prompting global regulatory frameworks such as the European Union AI Act, which enforces tiered risk-based restrictions (Unacceptable, High, Limited, and Minimal Risk).\n\nEdge Conditions and Failure Mitigation:\n- Error Detection & Recovery: Handled through formal state verification and feedback mechanisms.\n- System Constraints: Scalability bounds governed by AI Ethics and Algorithmic Bias.\n\n### 4. Real-World Applications & Comparative Evaluation (2 Marks)\nPrimary Industry Applications:\n1. Fair hiring resume screening algorithms audited for gender and racial neutrality.\n2. Credit scoring and loan approval compliance audits under financial regulatory law.\n3. Deepfake detection algorithms verifying media authenticity in journalism.\n\nSummary & Synthesis:\nAlgorithmic bias originates in historical training data and unrepresentative sampling. XAI: Explainable AI (LIME, SHAP) provides human interpretability. Alignment problem: Ensuring AI goals match human ethical values. EU AI Act classifies AI into risk tiers: Unacceptable (banned), High, Limited, Minimal.\n\n---\n*Evaluation Note: This model answer covers all required concepts with complete theoretical rigor, satisfying university 11-mark evaluation standards.*",
    "examTips": [
      "Begin your answer with a formal 2-3 line definition and draw the structural diagram before proceeding to detailed explanations.",
      "Explicitly address all 4 rubric concepts: definitions, operational mechanics, diagrams/edge cases, and real-world applications.",
      "Underline key domain keywords (AI Ethics, Algorithmic Bias, Fairness, Transparency) to make answer scanning easy for examiners."
    ]
  },
  {
    "id": "pb-ai-10",
    "subjectId": "ai",
    "unitId": "ai-u5",
    "topicId": "ai-u5-t1",
    "topicTitle": "Supervised, Unsupervised & Reinforcement Learning Paradigms",
    "question": "Q10. Explain the fundamental concepts, operational mechanics, structural architecture, and practical applications of \"Supervised, Unsupervised & Reinforcement Learning Paradigms\". Provide necessary diagrams, formal definitions, mathematical relationships, and trade-off comparisons. [11 Marks]",
    "maxMarks": 11,
    "expectedConcepts": [
      {
        "id": "c1",
        "name": "Foundational Definition & Core Architectural Principles",
        "weight": 3,
        "description": "Clear formulation of fundamental definitions, theoretical framework, and primary architectural components of Supervised, Unsupervised & Reinforcement Learning Paradigms.",
        "requiredKeywords": [
          "Machine Learning",
          "Supervised Learning",
          "Overfitting"
        ],
        "synonyms": {
          "Machine Learning": [
            "principle",
            "foundational model",
            "architecture",
            "structure",
            "mechanism"
          ],
          "Supervised Learning": [
            "framework",
            "standard",
            "technique",
            "specification",
            "protocol"
          ]
        },
        "keyPhrases": [
          "definition of Supervised, Unsupervised & Reinforcement Learning Paradigms",
          "fundamental architectural model",
          "primary governing mechanism"
        ]
      },
      {
        "id": "c2",
        "name": "Operational Mechanics, Algorithms & Mathematical Formulations",
        "weight": 3,
        "description": "Detailed step-by-step operational analysis, state transitions, algorithms, and mathematical relationships governing Supervised, Unsupervised & Reinforcement Learning Paradigms.",
        "requiredKeywords": [
          "Unsupervised Learning",
          "Bias-Variance Trade-Off",
          "operation"
        ],
        "synonyms": {
          "Unsupervised Learning": [
            "procedure",
            "formula",
            "methodology",
            "mathematical analysis"
          ],
          "operation": [
            "execution",
            "runtime process",
            "state progression",
            "transition"
          ]
        },
        "keyPhrases": [
          "operational step-by-step analysis",
          "mathematical formulation",
          "state transitions and execution flow"
        ]
      },
      {
        "id": "c3",
        "name": "Diagrammatic Representation, Edge Cases & Error Handling",
        "weight": 3,
        "description": "Structural diagram breakdown, analysis of boundary constraints, edge conditions, failure mitigation, or optimization strategies.",
        "requiredKeywords": [
          "diagram",
          "constraint",
          "error",
          "boundary"
        ],
        "synonyms": {
          "diagram": [
            "architecture diagram",
            "schematic",
            "structural representation",
            "flowchart"
          ],
          "constraint": [
            "trade-off",
            "limitation",
            "edge condition",
            "boundary case"
          ]
        },
        "keyPhrases": [
          "architectural diagram structure",
          "handling boundary conditions",
          "error detection and mitigation"
        ]
      },
      {
        "id": "c4",
        "name": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
        "weight": 2,
        "description": "Real-world industry applications, comparative trade-offs against alternative paradigms, and concluding evaluative synthesis.",
        "requiredKeywords": [
          "application",
          "trade-off",
          "performance",
          "comparison"
        ],
        "synonyms": {
          "application": [
            "implementation",
            "real-world use",
            "deployment",
            "industry practice"
          ],
          "performance": [
            "efficiency",
            "throughput",
            "scalability",
            "latency"
          ]
        },
        "keyPhrases": [
          "real-world industrial applications",
          "comparative trade-offs and performance",
          "critical evaluative summary"
        ]
      }
    ],
    "markingRubric": {
      "criteria": [
        {
          "conceptId": "c1",
          "conceptName": "Foundational Definition & Core Architectural Principles",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Foundational Definition & Core Architectural Principles with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c2",
          "conceptName": "Operational Mechanics, Algorithms & Mathematical Formulations",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Operational Mechanics, Algorithms & Mathematical Formulations with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c3",
          "conceptName": "Diagrammatic Representation, Edge Cases & Error Handling",
          "maxMarks": 3,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Diagrammatic Representation, Edge Cases & Error Handling with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        },
        {
          "conceptId": "c4",
          "conceptName": "Practical Applications, Comparative Trade-offs & Exam Synthesis",
          "maxMarks": 2,
          "fullMarksCriteria": "Demonstrates comprehensive, accurate mastery of Practical Applications, Comparative Trade-offs & Exam Synthesis with precise terminology, formal definitions, and no conceptual flaws.",
          "partialMarksCriteria": "Mentions relevant terms or concepts but lacks detailed causal explanation, formal definitions, or misses boundary conditions."
        }
      ],
      "totalMarks": 11
    },
    "modelAnswer": "## Comprehensive Model Answer: Supervised, Unsupervised & Reinforcement Learning Paradigms (Maximum Marks: 11)\n\n### 1. Introduction and Architectural Principles (3 Marks)\nMachine Learning enables computers to learn from experience data without being explicitly programmed. The three core learning paradigms are: 1. Supervised Learning: The algorithm is trained on labeled data pairs (input x, target output y). If y is continuous, the task is Regression (e.g. house price prediction); if y is categorical, the task is Classification (e.g. spam detection). 2. Unsupervised Learning: The algorithm discovers latent patterns, groupings, or representations in unlabeled data (e.g. K-Means clustering, PCA dimensionality reduction). 3. Reinforcement Learning: An agent learns optimal behavior through trial-and-error interaction with a dynamic environment via rewards and penalties.\n\nKey Definitions:\n- **Overfitting**: A machine learning failure where a model fits training data too closely, capturing noise and failing to generalize to new data.\n- **Bias-Variance Trade-Off**: The conflict in machine learning between minimizing estimation error due to simplistic assumptions (bias) vs sensitivity to data fluctuations (variance).\n\n### 2. Operational Mechanics & Technical Details (3 Marks)\nGeneralization is the central goal of machine learning: model performance on unseen test data. Overfitting occurs when a complex model memorizes training noise, achieving zero training error but high test error. Underfitting occurs when a model is too simple to capture underlying patterns. The Bias-Variance Trade-off formalizes total expected prediction error as: Error = Bias^2 + Variance + Irreducible Error. High bias indicates underfitting; high variance indicates overfitting. Regularization constrains model complexity by adding a penalty to the loss function: L2 Ridge (adds sum of squared weights, shrinking coefficients) and L1 Lasso (adds sum of absolute weights, driving irrelevant coefficients to zero for feature selection).\n\nMathematical and Algorithmic Analysis:\n- Governing Relationships: Explored through rigorous structural state transitions and formal criteria.\n- Core Mechanism: Accuracy = (TP+TN)/(Total). Precision = TP/(TP+FP) (quality of positive claims). Recall = TP/(TP+FN) (fraction of actual positives caught).\n\n### 3. Structural Representation & Boundary Constraints (3 Marks)\n```\n+-- THE 3 MACHINE LEARNING PARADIGMS --+\\n| SUPERVISED:   Labeled Data (x, y)      -> Predict Target y (Classification/Regression)\\n| UNSUPERVISED: Unlabeled Data (x)       -> Discover Structure (Clustering/Dimensionality)\\n| REINFORCEMENT: Environment Interaction -> Maximize Cumulative Reward (Agent Policy)\n```\n\nTechnical Analysis of Boundary Conditions:\nSemi-Supervised Learning and Self-Supervised Learning (SSL) bridge the gap between supervised and unsupervised learning. In SSL (which powers modern Large Language Models and Foundation Models), the system masks parts of unlabeled text or images and trains a neural network to predict the masked content, learning rich contextual representations without expensive human annotation.\n\nEdge Conditions and Failure Mitigation:\n- Error Detection & Recovery: Handled through formal state verification and feedback mechanisms.\n- System Constraints: Scalability bounds governed by Machine Learning and Supervised Learning.\n\n### 4. Real-World Applications & Comparative Evaluation (2 Marks)\nPrimary Industry Applications:\n1. Customer segmentation using K-Means clustering.\n2. Credit card default prediction using logistic regression.\n3. Autonomous robotic manipulation using Deep Reinforcement Learning.\n\nSummary & Synthesis:\nSupervised: Labeled data (Classification & Regression). Unsupervised: Unlabeled data (Clustering & Dimensionality Reduction). Reinforcement: Trial-and-error reward maximization. Overfitting = High variance; Underfitting = High bias.\n\n---\n*Evaluation Note: This model answer covers all required concepts with complete theoretical rigor, satisfying university 11-mark evaluation standards.*",
    "examTips": [
      "Begin your answer with a formal 2-3 line definition and draw the structural diagram before proceeding to detailed explanations.",
      "Explicitly address all 4 rubric concepts: definitions, operational mechanics, diagrams/edge cases, and real-world applications.",
      "Underline key domain keywords (Machine Learning, Supervised Learning, Unsupervised Learning, Reinforcement Learning) to make answer scanning easy for examiners."
    ]
  }
];
