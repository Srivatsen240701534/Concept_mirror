import { Topic } from '../../../types';

export const AI_TOPICS: Topic[] = [
  {
    "id": "ai-u1-t1",
    "subjectId": "ai",
    "unitId": "ai-u1",
    "unitNumber": 1,
    "unitTitle": "Introduction to AI & Intelligent Agents",
    "topicNumber": 1,
    "title": "Foundations, History & Applications of Artificial Intelligence",
    "objectives": [
      "Trace the historical foundations and major evolutionary milestones of Artificial Intelligence.",
      "Evaluate Alan Turing 1950 Imitation Game (Turing Test) and the Chinese Room Argument.",
      "Differentiate Strong (General) AI, Weak (Narrow) AI, and human vs rational agent definitions."
    ],
    "keywords": [
      "Artificial Intelligence",
      "Turing Test",
      "Dartmouth Conference",
      "Symbolic AI",
      "Connectionism",
      "Strong AI",
      "Weak AI",
      "Rationality",
      "Expert Systems"
    ],
    "content": {
      "beginner": {
        "summary": "Artificial Intelligence (AI) is the science and engineering of creating intelligent computer systems capable of performing tasks that traditionally re...",
        "theory": "Artificial Intelligence (AI) is the science and engineering of creating intelligent computer systems capable of performing tasks that traditionally require human cognition, such as visual perception, natural language understanding, reasoning, and decision making. Founded as an academic discipline at the 1956 Dartmouth Workshop by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon, AI has evolved through distinct paradigms: Early Symbolic AI and logic-based expert systems, multiple \"AI Winters\" caused by inflated expectations and hardware limits, and modern statistical machine learning driven by big data and parallel GPU computing.",
        "definitions": [
          {
            "term": "Turing Test",
            "definition": "An empirical test proposed by Alan Turing where a computer is considered intelligent if its natural language responses are indistinguishable from a human."
          },
          {
            "term": "Rational Agent",
            "definition": "An autonomous entity that acts to achieve the best outcome or, when there is uncertainty, the best expected outcome based on its percepts and knowledge."
          },
          {
            "term": "Chinese Room Argument",
            "definition": "A philosophical thought experiment by John Searle demonstrating that syntactic rule-following does not produce semantic comprehension."
          }
        ],
        "keyConcepts": [
          {
            "title": "Acting Rationally vs Acting Humanly",
            "explanation": "Humans often act irrationally due to cognitive biases and emotional heuristics. Rational agents maximize mathematical expected utility.",
            "example": "An autonomous medical diagnosis system calculates optimal Bayesian treatment plans regardless of emotional bias."
          },
          {
            "title": "Historical AI Paradigms",
            "explanation": "Symbolic AI (GOFAI) used explicit if-then rules but failed in noisy perceptual domains. Connectionism (Neural Networks) learns representations from data.",
            "example": "Computer vision shifted from hand-engineered edge filters to deep convolutional neural representations."
          }
        ],
        "diagram": "+-- 4 DIMENSIONS OF AI DEFINITIONS (RUSSELL & NORVIG) --+\\n|               HUMAN STANDARD        RATIONAL STANDARD  |\\n| THOUGHT:    [Thinking Humanly]    [Thinking Rationally] |\\n| BEHAVIOR:   [Acting Humanly]      [Acting Rationally]   |\\n+---------------------------------------------------------+",
        "applications": [
          "Autonomous vehicle perception and navigation systems.",
          "Clinical diagnosis decision-support systems in radiology.",
          "Algorithmic trading and portfolio optimization in financial markets."
        ],
        "examImportantPoints": [
          "Explain the 4 approaches to defining AI (Human vs Rational, Thought vs Action).",
          "Describe the Turing Test setup and explain John Searle Chinese Room rebuttal.",
          "Differentiate Strong AI (AGI) from Weak AI (Narrow AI) with real-world examples."
        ],
        "quickRevisionNotes": [
          "Dartmouth 1956: Birth of AI.",
          "4 Approaches: Think/Act Humanly vs Think/Act Rationally.",
          "Turing Test: Measures behavioral indistinguishability.",
          "Searle Chinese Room: Syntax does not equal Semantics."
        ]
      },
      "intermediate": {
        "summary": "Russell and Norvig categorize definitions of AI into four distinct approaches: 1. Thinking Humanly (cognitive modeling), 2. Acting Humanly (passing th...",
        "theory": "Russell and Norvig categorize definitions of AI into four distinct approaches: 1. Thinking Humanly (cognitive modeling), 2. Acting Humanly (passing the Turing Test), 3. Thinking Rationally (laws of thought and formal logic), and 4. Acting Rationally (rational agents achieving the best expected outcome under uncertainty). The Turing Test (1950) assesses whether a human interrogator communicating via text can distinguish between a human and a computer. John Searle 1980 Chinese Room thought experiment challenged the Turing Test, arguing that syntax manipulation does not equal genuine semantic understanding (Weak AI vs Strong AI).",
        "definitions": [
          {
            "term": "Turing Test",
            "definition": "An empirical test proposed by Alan Turing where a computer is considered intelligent if its natural language responses are indistinguishable from a human."
          },
          {
            "term": "Rational Agent",
            "definition": "An autonomous entity that acts to achieve the best outcome or, when there is uncertainty, the best expected outcome based on its percepts and knowledge."
          },
          {
            "term": "Chinese Room Argument",
            "definition": "A philosophical thought experiment by John Searle demonstrating that syntactic rule-following does not produce semantic comprehension."
          }
        ],
        "keyConcepts": [
          {
            "title": "Acting Rationally vs Acting Humanly",
            "explanation": "Humans often act irrationally due to cognitive biases and emotional heuristics. Rational agents maximize mathematical expected utility.",
            "example": "An autonomous medical diagnosis system calculates optimal Bayesian treatment plans regardless of emotional bias."
          },
          {
            "title": "Historical AI Paradigms",
            "explanation": "Symbolic AI (GOFAI) used explicit if-then rules but failed in noisy perceptual domains. Connectionism (Neural Networks) learns representations from data.",
            "example": "Computer vision shifted from hand-engineered edge filters to deep convolutional neural representations."
          }
        ],
        "diagram": "+-- 4 DIMENSIONS OF AI DEFINITIONS (RUSSELL & NORVIG) --+\\n|               HUMAN STANDARD        RATIONAL STANDARD  |\\n| THOUGHT:    [Thinking Humanly]    [Thinking Rationally] |\\n| BEHAVIOR:   [Acting Humanly]      [Acting Rationally]   |\\n+---------------------------------------------------------+",
        "applications": [
          "Autonomous vehicle perception and navigation systems.",
          "Clinical diagnosis decision-support systems in radiology.",
          "Algorithmic trading and portfolio optimization in financial markets."
        ],
        "examImportantPoints": [
          "Explain the 4 approaches to defining AI (Human vs Rational, Thought vs Action).",
          "Describe the Turing Test setup and explain John Searle Chinese Room rebuttal.",
          "Differentiate Strong AI (AGI) from Weak AI (Narrow AI) with real-world examples."
        ],
        "quickRevisionNotes": [
          "Dartmouth 1956: Birth of AI.",
          "4 Approaches: Think/Act Humanly vs Think/Act Rationally.",
          "Turing Test: Measures behavioral indistinguishability."
        ]
      },
      "advanced": {
        "summary": "Modern Artificial General Intelligence (AGI) research evaluates systems across multi-modal task generalization, continuous learning, and causal world ...",
        "theory": "Modern Artificial General Intelligence (AGI) research evaluates systems across multi-modal task generalization, continuous learning, and causal world models. Superintelligence hypotheses (Bostrom) explore the Orthogonality Thesis (an agent can combine any level of intelligence with any goal) and Instrumental Convergence (intelligent agents inherently seek self-preservation, goal-content integrity, cognitive enhancement, and resource acquisition as sub-goals unless explicitly constrained).",
        "definitions": [
          {
            "term": "Turing Test",
            "definition": "An empirical test proposed by Alan Turing where a computer is considered intelligent if its natural language responses are indistinguishable from a human."
          },
          {
            "term": "Rational Agent",
            "definition": "An autonomous entity that acts to achieve the best outcome or, when there is uncertainty, the best expected outcome based on its percepts and knowledge."
          },
          {
            "term": "Chinese Room Argument",
            "definition": "A philosophical thought experiment by John Searle demonstrating that syntactic rule-following does not produce semantic comprehension."
          }
        ],
        "keyConcepts": [
          {
            "title": "Acting Rationally vs Acting Humanly",
            "explanation": "Humans often act irrationally due to cognitive biases and emotional heuristics. Rational agents maximize mathematical expected utility.",
            "example": "An autonomous medical diagnosis system calculates optimal Bayesian treatment plans regardless of emotional bias."
          },
          {
            "title": "Historical AI Paradigms",
            "explanation": "Symbolic AI (GOFAI) used explicit if-then rules but failed in noisy perceptual domains. Connectionism (Neural Networks) learns representations from data.",
            "example": "Computer vision shifted from hand-engineered edge filters to deep convolutional neural representations."
          }
        ],
        "diagram": "+-- 4 DIMENSIONS OF AI DEFINITIONS (RUSSELL & NORVIG) --+\\n|               HUMAN STANDARD        RATIONAL STANDARD  |\\n| THOUGHT:    [Thinking Humanly]    [Thinking Rationally] |\\n| BEHAVIOR:   [Acting Humanly]      [Acting Rationally]   |\\n+---------------------------------------------------------+",
        "applications": [
          "Autonomous vehicle perception and navigation systems.",
          "Clinical diagnosis decision-support systems in radiology.",
          "Algorithmic trading and portfolio optimization in financial markets."
        ],
        "examImportantPoints": [
          "Explain the 4 approaches to defining AI (Human vs Rational, Thought vs Action).",
          "Describe the Turing Test setup and explain John Searle Chinese Room rebuttal.",
          "Differentiate Strong AI (AGI) from Weak AI (Narrow AI) with real-world examples."
        ],
        "quickRevisionNotes": [
          "4 Approaches: Think/Act Humanly vs Think/Act Rationally.",
          "Turing Test: Measures behavioral indistinguishability.",
          "Searle Chinese Room: Syntax does not equal Semantics."
        ]
      }
    }
  },
  {
    "id": "ai-u1-t2",
    "subjectId": "ai",
    "unitId": "ai-u1",
    "unitNumber": 1,
    "unitTitle": "Introduction to AI & Intelligent Agents",
    "topicNumber": 2,
    "title": "Intelligent Agent Architectures & PEAS Framework",
    "objectives": [
      "Formulate problem specifications using the PEAS framework (Performance, Environment, Actuators, Sensors).",
      "Compare the structural architectures of the five standard agent types.",
      "Design learning agent models incorporating Critic, Learning Element, and Problem Generator components."
    ],
    "keywords": [
      "Agent",
      "PEAS",
      "Sensors",
      "Actuators",
      "Simple Reflex",
      "Model-Based",
      "Goal-Based",
      "Utility-Based",
      "Learning Agent"
    ],
    "content": {
      "beginner": {
        "summary": "An Agent is anything that can perceive its environment through Sensors and act upon that environment through Actuators. An agent decision-making proce...",
        "theory": "An Agent is anything that can perceive its environment through Sensors and act upon that environment through Actuators. An agent decision-making process is governed by its Agent Function (mapping percept sequences to actions), implemented by an Agent Program running on an architecture. To rigorously design an intelligent agent, we define its PEAS description: Performance measure (success criteria), Environment (external context), Actuators (output mechanisms), and Sensors (input instruments). For example, an automated taxi PEAS includes: Performance (safety, speed, passenger comfort, legal compliance), Environment (roads, traffic, pedestrians, weather), Actuators (steering, throttle, brakes, horn), and Sensors (cameras, radar, lidar, GPS, speedometer).",
        "definitions": [
          {
            "term": "PEAS Framework",
            "definition": "A formal engineering specification defining Performance measure, Environment, Actuators, and Sensors for an agent task."
          },
          {
            "term": "Condition-Action Rule",
            "definition": "An if-then association rule that maps a current perceptual trigger directly to an immediate actuator response."
          },
          {
            "term": "Utility Function",
            "definition": "An internalization of the performance measure that assigns a scalar value to state transitions, quantifying agent happiness or preference."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Simple Reflex Agents Fail in Partial Observability",
            "explanation": "Without internal memory, an agent cannot distinguish between identical percepts that require different actions based on prior history.",
            "example": "An automated vacuum without a map bounces infinitely in an unobservable corner."
          },
          {
            "title": "Role of the Problem Generator",
            "explanation": "The Performance Element acts to maximize current score; the Problem Generator intentionally takes novel actions to explore unknown state spaces.",
            "example": "AlphaGo playing non-standard opening moves during self-play to discover superior strategies."
          }
        ],
        "diagram": "+-- THE GENERAL LEARNING AGENT ARCHITECTURE --+\\n| Sensors -> [ Critic ] <--- Performance Standard\\n|               | Feedback\\n|               v\\n|        [Learning Element] ---> [Problem Generator]\\n|               | Updates              | Proposes experiments\\n|               v                      v\\n| Percepts -> [Performance Element] -> Actuators -> Actions",
        "applications": [
          "Automated vacuum cleaner agents (Roomba localization and cleaning policies).",
          "Autonomous drone delivery flight controllers.",
          "Algorithmic customer service bots with intent recognition."
        ],
        "examImportantPoints": [
          "Write complete PEAS descriptions for an Automated Taxi, Medical Diagnosis System, and Part-Picking Robot.",
          "Draw and explain the internal architecture of a Model-Based Reflex Agent vs a Utility-Based Agent.",
          "Explain the four components of a Learning Agent: Critic, Learning Element, Performance Element, and Problem Generator."
        ],
        "quickRevisionNotes": [
          "PEAS: Performance, Environment, Actuators, Sensors.",
          "5 Agent types: Simple Reflex, Model-Based, Goal-Based, Utility-Based, Learning.",
          "Simple reflex uses condition-action rules; Model-based tracks internal state.",
          "Learning agent critic provides reward feedback to learning element."
        ]
      },
      "intermediate": {
        "summary": "Russell and Norvig define five agent architectures in increasing order of complexity: 1. Simple Reflex Agent: Selects actions based only on current pe...",
        "theory": "Russell and Norvig define five agent architectures in increasing order of complexity: 1. Simple Reflex Agent: Selects actions based only on current percept using condition-action rules (if-then); fails in partially observable worlds. 2. Model-Based Reflex Agent: Maintains internal state representing unobserved aspects of the world. 3. Goal-Based Agent: Evaluates actions based on whether they achieve desirable future goal states. 4. Utility-Based Agent: Maps states to real-numbered utility values, making optimal trade-offs among conflicting goals. 5. Learning Agent: Divides into Critic (evaluates performance against external standards), Learning Element (makes improvements), Learning Goals, and Problem Generator (suggests exploratory actions).",
        "definitions": [
          {
            "term": "PEAS Framework",
            "definition": "A formal engineering specification defining Performance measure, Environment, Actuators, and Sensors for an agent task."
          },
          {
            "term": "Condition-Action Rule",
            "definition": "An if-then association rule that maps a current perceptual trigger directly to an immediate actuator response."
          },
          {
            "term": "Utility Function",
            "definition": "An internalization of the performance measure that assigns a scalar value to state transitions, quantifying agent happiness or preference."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Simple Reflex Agents Fail in Partial Observability",
            "explanation": "Without internal memory, an agent cannot distinguish between identical percepts that require different actions based on prior history.",
            "example": "An automated vacuum without a map bounces infinitely in an unobservable corner."
          },
          {
            "title": "Role of the Problem Generator",
            "explanation": "The Performance Element acts to maximize current score; the Problem Generator intentionally takes novel actions to explore unknown state spaces.",
            "example": "AlphaGo playing non-standard opening moves during self-play to discover superior strategies."
          }
        ],
        "diagram": "+-- THE GENERAL LEARNING AGENT ARCHITECTURE --+\\n| Sensors -> [ Critic ] <--- Performance Standard\\n|               | Feedback\\n|               v\\n|        [Learning Element] ---> [Problem Generator]\\n|               | Updates              | Proposes experiments\\n|               v                      v\\n| Percepts -> [Performance Element] -> Actuators -> Actions",
        "applications": [
          "Automated vacuum cleaner agents (Roomba localization and cleaning policies).",
          "Autonomous drone delivery flight controllers.",
          "Algorithmic customer service bots with intent recognition."
        ],
        "examImportantPoints": [
          "Write complete PEAS descriptions for an Automated Taxi, Medical Diagnosis System, and Part-Picking Robot.",
          "Draw and explain the internal architecture of a Model-Based Reflex Agent vs a Utility-Based Agent.",
          "Explain the four components of a Learning Agent: Critic, Learning Element, Performance Element, and Problem Generator."
        ],
        "quickRevisionNotes": [
          "PEAS: Performance, Environment, Actuators, Sensors.",
          "5 Agent types: Simple Reflex, Model-Based, Goal-Based, Utility-Based, Learning.",
          "Simple reflex uses condition-action rules; Model-based tracks internal state."
        ]
      },
      "advanced": {
        "summary": "In formal multi-agent systems (MAS), agents operate in competitive or cooperative environments where individual rationality does not guarantee collect...",
        "theory": "In formal multi-agent systems (MAS), agents operate in competitive or cooperative environments where individual rationality does not guarantee collective social welfare (Game Theory). The Problem Generator in a learning agent balances the classic Exploration vs Exploitation trade-off: taking suboptimal actions in the short term to discover superior long-term strategies, formalized in Reinforcement Learning via epsilon-greedy policies or Upper Confidence Bounds (UCB).",
        "definitions": [
          {
            "term": "PEAS Framework",
            "definition": "A formal engineering specification defining Performance measure, Environment, Actuators, and Sensors for an agent task."
          },
          {
            "term": "Condition-Action Rule",
            "definition": "An if-then association rule that maps a current perceptual trigger directly to an immediate actuator response."
          },
          {
            "term": "Utility Function",
            "definition": "An internalization of the performance measure that assigns a scalar value to state transitions, quantifying agent happiness or preference."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Simple Reflex Agents Fail in Partial Observability",
            "explanation": "Without internal memory, an agent cannot distinguish between identical percepts that require different actions based on prior history.",
            "example": "An automated vacuum without a map bounces infinitely in an unobservable corner."
          },
          {
            "title": "Role of the Problem Generator",
            "explanation": "The Performance Element acts to maximize current score; the Problem Generator intentionally takes novel actions to explore unknown state spaces.",
            "example": "AlphaGo playing non-standard opening moves during self-play to discover superior strategies."
          }
        ],
        "diagram": "+-- THE GENERAL LEARNING AGENT ARCHITECTURE --+\\n| Sensors -> [ Critic ] <--- Performance Standard\\n|               | Feedback\\n|               v\\n|        [Learning Element] ---> [Problem Generator]\\n|               | Updates              | Proposes experiments\\n|               v                      v\\n| Percepts -> [Performance Element] -> Actuators -> Actions",
        "applications": [
          "Automated vacuum cleaner agents (Roomba localization and cleaning policies).",
          "Autonomous drone delivery flight controllers.",
          "Algorithmic customer service bots with intent recognition."
        ],
        "examImportantPoints": [
          "Write complete PEAS descriptions for an Automated Taxi, Medical Diagnosis System, and Part-Picking Robot.",
          "Draw and explain the internal architecture of a Model-Based Reflex Agent vs a Utility-Based Agent.",
          "Explain the four components of a Learning Agent: Critic, Learning Element, Performance Element, and Problem Generator."
        ],
        "quickRevisionNotes": [
          "5 Agent types: Simple Reflex, Model-Based, Goal-Based, Utility-Based, Learning.",
          "Simple reflex uses condition-action rules; Model-based tracks internal state.",
          "Learning agent critic provides reward feedback to learning element."
        ]
      }
    }
  },
  {
    "id": "ai-u1-t3",
    "subjectId": "ai",
    "unitId": "ai-u1",
    "unitNumber": 1,
    "unitTitle": "Introduction to AI & Intelligent Agents",
    "topicNumber": 3,
    "title": "Environment Classifications & State Space Problem Formulation",
    "objectives": [
      "Classify agent environments across the 7 fundamental dimensions.",
      "Formulate real-world problems as formal state space graphs with initial states, actions, transition models, and path costs.",
      "Analyze toy problems (Vacuum World, 8-Puzzle, Missionaries & Cannibals) and real-world routing problems."
    ],
    "keywords": [
      "Environment",
      "Deterministic",
      "Stochastic",
      "Fully Observable",
      "Partially Observable",
      "Static",
      "Dynamic",
      "Discrete",
      "Continuous",
      "Episodic",
      "Sequential",
      "State Space"
    ],
    "content": {
      "beginner": {
        "summary": "The nature of the environment fundamentally determines agent design and complexity. Environments are classified across standard dichotomies: 1. Fully ...",
        "theory": "The nature of the environment fundamentally determines agent design and complexity. Environments are classified across standard dichotomies: 1. Fully Observable vs Partially Observable (whether sensors provide complete state information). 2. Single-Agent vs Multi-Agent (competitive or cooperative). 3. Deterministic vs Stochastic (whether the next state is completely determined by current state and action). 4. Episodic vs Sequential (whether current actions affect future decisions). 5. Static vs Dynamic (whether the environment changes while the agent is deliberating). 6. Discrete vs Continuous (whether states, time, and actions are finite or continuous real values). 7. Known vs Unknown (whether the rules of the physics/environment are known).",
        "definitions": [
          {
            "term": "State Space",
            "definition": "The set of all possible states reachable from the initial state by any sequence of actions."
          },
          {
            "term": "Belief State",
            "definition": "The agent current knowledge about which actual physical states it might be in, represented as a probability distribution."
          },
          {
            "term": "Path Cost (g)",
            "definition": "The numerical function that assigns a cost to a path, usually the sum of costs of the individual step actions."
          }
        ],
        "keyConcepts": [
          {
            "title": "8-Puzzle Problem Formulation",
            "explanation": "States: 3x3 grid with tiles 1-8 and empty blank. Actions: Move blank Left, Right, Up, Down. Goal: Sorted tiles. Path cost: 1 per move.",
            "example": "State space contains 9! / 2 = 181,440 reachable states."
          },
          {
            "title": "Episodic vs Sequential Criticality",
            "explanation": "In episodic environments (image classification), current choice does not alter future inputs. In sequential environments (chess, driving), early actions dictate long-term survivability.",
            "example": "Sequential environments require lookahead search and forward planning."
          }
        ],
        "diagram": "+-- 7 ENVIRONMENT DIMENSIONS MATRIX --+\\n| Chess:     Fully Observable | Deterministic | Sequential | Static  | Discrete   | Multi-Agent |\\n| Poker:     Partially Obs    | Stochastic    | Sequential | Static  | Discrete   | Multi-Agent |\\n| Taxi Cab:  Partially Obs    | Stochastic    | Sequential | Dynamic | Continuous | Multi-Agent |",
        "applications": [
          "GPS navigation turn-by-turn routing (A* over road network state spaces).",
          "Automated warehouse inventory shelf-sorting robots.",
          "Game AI engine decision loops in strategy and card games."
        ],
        "examImportantPoints": [
          "Classify the environments for Chess with a clock, Internet shopping agent, and Autonomous Taxi across all 7 dimensions.",
          "Define the 5 formal components of a search problem.",
          "Formulate the Missionaries and Cannibals problem: states, valid actions, constraints, and goal test."
        ],
        "quickRevisionNotes": [
          "Most difficult environment: Partially observable, Stochastic, Sequential, Dynamic, Continuous, Multi-agent.",
          "5 problem components: Initial State, Actions, Transition Model, Goal Test, Path Cost.",
          "Episodic = independent steps; Sequential = actions have long-term consequences."
        ]
      },
      "intermediate": {
        "summary": "Formal Problem Formulation requires five core mathematical components: 1. Initial State: The starting condition of the agent (e.g. In(Arad)). 2. Actio...",
        "theory": "Formal Problem Formulation requires five core mathematical components: 1. Initial State: The starting condition of the agent (e.g. In(Arad)). 2. Actions: Available actions given state s: ACTIONS(s). 3. Transition Model: The outcome of taking action a in state s: RESULT(s, a). 4. Goal Test: A boolean function determining if state s is a goal state. 5. Path Cost: A numeric function c(s, a, s`) that assigns a step cost, summed to compute total path cost g(n). A Solution is a sequence of actions leading from the initial state to a goal state; an Optimal Solution achieves this with minimal path cost.",
        "definitions": [
          {
            "term": "State Space",
            "definition": "The set of all possible states reachable from the initial state by any sequence of actions."
          },
          {
            "term": "Belief State",
            "definition": "The agent current knowledge about which actual physical states it might be in, represented as a probability distribution."
          },
          {
            "term": "Path Cost (g)",
            "definition": "The numerical function that assigns a cost to a path, usually the sum of costs of the individual step actions."
          }
        ],
        "keyConcepts": [
          {
            "title": "8-Puzzle Problem Formulation",
            "explanation": "States: 3x3 grid with tiles 1-8 and empty blank. Actions: Move blank Left, Right, Up, Down. Goal: Sorted tiles. Path cost: 1 per move.",
            "example": "State space contains 9! / 2 = 181,440 reachable states."
          },
          {
            "title": "Episodic vs Sequential Criticality",
            "explanation": "In episodic environments (image classification), current choice does not alter future inputs. In sequential environments (chess, driving), early actions dictate long-term survivability.",
            "example": "Sequential environments require lookahead search and forward planning."
          }
        ],
        "diagram": "+-- 7 ENVIRONMENT DIMENSIONS MATRIX --+\\n| Chess:     Fully Observable | Deterministic | Sequential | Static  | Discrete   | Multi-Agent |\\n| Poker:     Partially Obs    | Stochastic    | Sequential | Static  | Discrete   | Multi-Agent |\\n| Taxi Cab:  Partially Obs    | Stochastic    | Sequential | Dynamic | Continuous | Multi-Agent |",
        "applications": [
          "GPS navigation turn-by-turn routing (A* over road network state spaces).",
          "Automated warehouse inventory shelf-sorting robots.",
          "Game AI engine decision loops in strategy and card games."
        ],
        "examImportantPoints": [
          "Classify the environments for Chess with a clock, Internet shopping agent, and Autonomous Taxi across all 7 dimensions.",
          "Define the 5 formal components of a search problem.",
          "Formulate the Missionaries and Cannibals problem: states, valid actions, constraints, and goal test."
        ],
        "quickRevisionNotes": [
          "Most difficult environment: Partially observable, Stochastic, Sequential, Dynamic, Continuous, Multi-agent.",
          "5 problem components: Initial State, Actions, Transition Model, Goal Test, Path Cost.",
          "Episodic = independent steps; Sequential = actions have long-term consequences."
        ]
      },
      "advanced": {
        "summary": "The State Space can be represented as a directed graph where nodes are states and directed edges are actions. In continuous environments (like robotic...",
        "theory": "The State Space can be represented as a directed graph where nodes are states and directed edges are actions. In continuous environments (like robotic arm kinematics), the state space is infinite and continuous, requiring discretization or configuration space (C-space) sampling methods (Rapidly-exploring Random Trees - RRT). Real-world complexities arise in partially observable, stochastic environments, where the agent must plan over Belief States (probability distributions over physical states) using Partially Observable Markov Decision Processes (POMDPs).",
        "definitions": [
          {
            "term": "State Space",
            "definition": "The set of all possible states reachable from the initial state by any sequence of actions."
          },
          {
            "term": "Belief State",
            "definition": "The agent current knowledge about which actual physical states it might be in, represented as a probability distribution."
          },
          {
            "term": "Path Cost (g)",
            "definition": "The numerical function that assigns a cost to a path, usually the sum of costs of the individual step actions."
          }
        ],
        "keyConcepts": [
          {
            "title": "8-Puzzle Problem Formulation",
            "explanation": "States: 3x3 grid with tiles 1-8 and empty blank. Actions: Move blank Left, Right, Up, Down. Goal: Sorted tiles. Path cost: 1 per move.",
            "example": "State space contains 9! / 2 = 181,440 reachable states."
          },
          {
            "title": "Episodic vs Sequential Criticality",
            "explanation": "In episodic environments (image classification), current choice does not alter future inputs. In sequential environments (chess, driving), early actions dictate long-term survivability.",
            "example": "Sequential environments require lookahead search and forward planning."
          }
        ],
        "diagram": "+-- 7 ENVIRONMENT DIMENSIONS MATRIX --+\\n| Chess:     Fully Observable | Deterministic | Sequential | Static  | Discrete   | Multi-Agent |\\n| Poker:     Partially Obs    | Stochastic    | Sequential | Static  | Discrete   | Multi-Agent |\\n| Taxi Cab:  Partially Obs    | Stochastic    | Sequential | Dynamic | Continuous | Multi-Agent |",
        "applications": [
          "GPS navigation turn-by-turn routing (A* over road network state spaces).",
          "Automated warehouse inventory shelf-sorting robots.",
          "Game AI engine decision loops in strategy and card games."
        ],
        "examImportantPoints": [
          "Classify the environments for Chess with a clock, Internet shopping agent, and Autonomous Taxi across all 7 dimensions.",
          "Define the 5 formal components of a search problem.",
          "Formulate the Missionaries and Cannibals problem: states, valid actions, constraints, and goal test."
        ],
        "quickRevisionNotes": [
          "5 problem components: Initial State, Actions, Transition Model, Goal Test, Path Cost.",
          "Episodic = independent steps; Sequential = actions have long-term consequences."
        ]
      }
    }
  },
  {
    "id": "ai-u2-t1",
    "subjectId": "ai",
    "unitId": "ai-u2",
    "unitNumber": 2,
    "unitTitle": "Search Strategies & Problem Solving",
    "topicNumber": 1,
    "title": "Uninformed Search Strategies (BFS, DFS, Uniform Cost Search)",
    "objectives": [
      "Evaluate uninformed (blind) search strategies across completeness, optimality, time complexity, and space complexity.",
      "Implement Breadth-First Search (FIFO queue) and Depth-First Search (LIFO stack) state exploration.",
      "Analyze Uniform Cost Search (Dijkstra) and Iterative Deepening Search (IDS) memory efficiency."
    ],
    "keywords": [
      "Search",
      "BFS",
      "DFS",
      "Uniform Cost Search",
      "Depth-Limited",
      "Iterative Deepening",
      "Completeness",
      "Optimality",
      "Time Complexity",
      "Space Complexity"
    ],
    "content": {
      "beginner": {
        "summary": "Uninformed (blind) search strategies have no information about the distance to the goal beyond the problem definition. Evaluation metrics are: Complet...",
        "theory": "Uninformed (blind) search strategies have no information about the distance to the goal beyond the problem definition. Evaluation metrics are: Completeness (does it find a solution?), Optimality (does it find the lowest path cost?), Time Complexity (nodes generated), and Space Complexity (maximum nodes stored in memory), evaluated in terms of branching factor b, depth of shallowest goal d, and maximum tree depth m. Breadth-First Search (BFS) explores the shallowest unexpanded node first using a FIFO queue; it is complete and optimal for unit-step costs, but consumes exponential memory O(b^d). Depth-First Search (DFS) explores the deepest node using a LIFO stack; it has modest O(b*m) space complexity, but is incomplete in infinite trees and non-optimal.",
        "definitions": [
          {
            "term": "Branching Factor (b)",
            "definition": "The average or maximum number of successor nodes generated by expanding any given node in the search tree."
          },
          {
            "term": "Completeness",
            "definition": "The mathematical guarantee that a search algorithm will find a solution if one exists."
          },
          {
            "term": "Iterative Deepening Search (IDS)",
            "definition": "A search strategy that systematically runs depth-limited searches with incrementally increasing depth limits until the goal is found."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Space is the Real Barrier in BFS",
            "explanation": "At branching factor b=10, depth 10 requires generating 10^10 nodes (10 Terabytes of RAM), exhausting memory in seconds.",
            "example": "IDS solves this by storing only the active path in memory: 10 * 10 nodes (less than 1 Kilobyte)."
          },
          {
            "title": "UCS Priority Queue Ordering",
            "explanation": "UCS pops the frontier node with minimum cumulative cost g(n). Goal test is applied when node is selected for expansion, NOT when generated.",
            "example": "Applying goal test on generation causes sub-optimal path selection in UCS."
          }
        ],
        "diagram": "+-- UNINFORMED SEARCH STRATEGIES COMPARISON TABLE --+\\n| Criterion | BFS      | DFS      | UCS (Dijkstra) | IDS      |\\n| Complete? | Yes (if b finite) | No (infinite)| Yes (step>=eps)| Yes (finite b) |\\n| Optimal?  | Yes (cost=1) | No   | Yes            | Yes (cost=1) |\\n| Time      | O(b^d)   | O(b^m)   | O(b^(C*/eps))   | O(b^d)   |\\n| Space     | O(b^d)   | O(b*m)   | O(b^(C*/eps))   | O(b*d)   |",
        "applications": [
          "Pathfinding in puzzle games (8-puzzle, Rubik cube solver).",
          "Web crawlers indexing hyperlinks in breadth-first order.",
          "Network routing table computation via Uniform Cost Search."
        ],
        "examImportantPoints": [
          "Compare BFS, DFS, UCS, and IDS in a complete 4x4 comparison table across Completeness, Optimality, Time, and Space.",
          "Explain why the goal test in Uniform Cost Search must be applied when a node is removed from the priority queue rather than when generated.",
          "Calculate total nodes generated by BFS vs IDS for b=10 and d=5 to prove overhead is under 11%."
        ],
        "quickRevisionNotes": [
          "BFS: FIFO queue, complete, optimal for unit cost, high memory O(b^d).",
          "DFS: LIFO stack, low memory O(bm), incomplete, non-optimal.",
          "UCS: Priority queue ordered by g(n), optimal for varying step costs.",
          "IDS: Best uninformed search—combines BFS optimality with DFS O(bd) memory."
        ]
      },
      "intermediate": {
        "summary": "Uniform Cost Search (UCS) expands the node n with lowest path cost g(n) using a priority queue. It is complete and optimal for arbitrary positive step...",
        "theory": "Uniform Cost Search (UCS) expands the node n with lowest path cost g(n) using a priority queue. It is complete and optimal for arbitrary positive step costs (time and space O(b^(1 + floor(C*/epsilon)))). Depth-Limited Search (DLS) limits DFS to depth limit l. Iterative Deepening Search (IDS) repeatedly executes DLS with increasing limits l = 0, 1, 2, ... d. IDS combines the optimality and completeness of BFS with the linear memory efficiency of DFS (Space: O(b*d)). Although top nodes are re-generated, the bottom tier dominates: total nodes generated in IDS is roughly b/(b-1) times BFS, incurring negligible computational overhead.",
        "definitions": [
          {
            "term": "Branching Factor (b)",
            "definition": "The average or maximum number of successor nodes generated by expanding any given node in the search tree."
          },
          {
            "term": "Completeness",
            "definition": "The mathematical guarantee that a search algorithm will find a solution if one exists."
          },
          {
            "term": "Iterative Deepening Search (IDS)",
            "definition": "A search strategy that systematically runs depth-limited searches with incrementally increasing depth limits until the goal is found."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Space is the Real Barrier in BFS",
            "explanation": "At branching factor b=10, depth 10 requires generating 10^10 nodes (10 Terabytes of RAM), exhausting memory in seconds.",
            "example": "IDS solves this by storing only the active path in memory: 10 * 10 nodes (less than 1 Kilobyte)."
          },
          {
            "title": "UCS Priority Queue Ordering",
            "explanation": "UCS pops the frontier node with minimum cumulative cost g(n). Goal test is applied when node is selected for expansion, NOT when generated.",
            "example": "Applying goal test on generation causes sub-optimal path selection in UCS."
          }
        ],
        "diagram": "+-- UNINFORMED SEARCH STRATEGIES COMPARISON TABLE --+\\n| Criterion | BFS      | DFS      | UCS (Dijkstra) | IDS      |\\n| Complete? | Yes (if b finite) | No (infinite)| Yes (step>=eps)| Yes (finite b) |\\n| Optimal?  | Yes (cost=1) | No   | Yes            | Yes (cost=1) |\\n| Time      | O(b^d)   | O(b^m)   | O(b^(C*/eps))   | O(b^d)   |\\n| Space     | O(b^d)   | O(b*m)   | O(b^(C*/eps))   | O(b*d)   |",
        "applications": [
          "Pathfinding in puzzle games (8-puzzle, Rubik cube solver).",
          "Web crawlers indexing hyperlinks in breadth-first order.",
          "Network routing table computation via Uniform Cost Search."
        ],
        "examImportantPoints": [
          "Compare BFS, DFS, UCS, and IDS in a complete 4x4 comparison table across Completeness, Optimality, Time, and Space.",
          "Explain why the goal test in Uniform Cost Search must be applied when a node is removed from the priority queue rather than when generated.",
          "Calculate total nodes generated by BFS vs IDS for b=10 and d=5 to prove overhead is under 11%."
        ],
        "quickRevisionNotes": [
          "BFS: FIFO queue, complete, optimal for unit cost, high memory O(b^d).",
          "DFS: LIFO stack, low memory O(bm), incomplete, non-optimal.",
          "UCS: Priority queue ordered by g(n), optimal for varying step costs."
        ]
      },
      "advanced": {
        "summary": "In graph search (as opposed to tree search), an Explored Set (closed list) stores all expanded states to prevent infinite loops in cyclic graphs. Bidi...",
        "theory": "In graph search (as opposed to tree search), an Explored Set (closed list) stores all expanded states to prevent infinite loops in cyclic graphs. Bidirectional Search runs two simultaneous searches: forward from initial state and backward from goal, meeting in the middle. If both directions use BFS, time complexity drops from O(b^d) to O(2 * b^(d/2)), representing an exponential speedup.",
        "definitions": [
          {
            "term": "Branching Factor (b)",
            "definition": "The average or maximum number of successor nodes generated by expanding any given node in the search tree."
          },
          {
            "term": "Completeness",
            "definition": "The mathematical guarantee that a search algorithm will find a solution if one exists."
          },
          {
            "term": "Iterative Deepening Search (IDS)",
            "definition": "A search strategy that systematically runs depth-limited searches with incrementally increasing depth limits until the goal is found."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Space is the Real Barrier in BFS",
            "explanation": "At branching factor b=10, depth 10 requires generating 10^10 nodes (10 Terabytes of RAM), exhausting memory in seconds.",
            "example": "IDS solves this by storing only the active path in memory: 10 * 10 nodes (less than 1 Kilobyte)."
          },
          {
            "title": "UCS Priority Queue Ordering",
            "explanation": "UCS pops the frontier node with minimum cumulative cost g(n). Goal test is applied when node is selected for expansion, NOT when generated.",
            "example": "Applying goal test on generation causes sub-optimal path selection in UCS."
          }
        ],
        "diagram": "+-- UNINFORMED SEARCH STRATEGIES COMPARISON TABLE --+\\n| Criterion | BFS      | DFS      | UCS (Dijkstra) | IDS      |\\n| Complete? | Yes (if b finite) | No (infinite)| Yes (step>=eps)| Yes (finite b) |\\n| Optimal?  | Yes (cost=1) | No   | Yes            | Yes (cost=1) |\\n| Time      | O(b^d)   | O(b^m)   | O(b^(C*/eps))   | O(b^d)   |\\n| Space     | O(b^d)   | O(b*m)   | O(b^(C*/eps))   | O(b*d)   |",
        "applications": [
          "Pathfinding in puzzle games (8-puzzle, Rubik cube solver).",
          "Web crawlers indexing hyperlinks in breadth-first order.",
          "Network routing table computation via Uniform Cost Search."
        ],
        "examImportantPoints": [
          "Compare BFS, DFS, UCS, and IDS in a complete 4x4 comparison table across Completeness, Optimality, Time, and Space.",
          "Explain why the goal test in Uniform Cost Search must be applied when a node is removed from the priority queue rather than when generated.",
          "Calculate total nodes generated by BFS vs IDS for b=10 and d=5 to prove overhead is under 11%."
        ],
        "quickRevisionNotes": [
          "DFS: LIFO stack, low memory O(bm), incomplete, non-optimal.",
          "UCS: Priority queue ordered by g(n), optimal for varying step costs.",
          "IDS: Best uninformed search—combines BFS optimality with DFS O(bd) memory."
        ]
      }
    }
  },
  {
    "id": "ai-u2-t2",
    "subjectId": "ai",
    "unitId": "ai-u2",
    "unitNumber": 2,
    "unitTitle": "Search Strategies & Problem Solving",
    "topicNumber": 2,
    "title": "Informed Heuristic Search (Greedy Best-First & A* Algorithm)",
    "objectives": [
      "Formulate evaluation functions f(n) = g(n) + h(n) for heuristic search.",
      "Prove the mathematical conditions for A* optimality: Admissibility (tree search) and Consistency/Monotonicity (graph search).",
      "Design dominant admissible heuristics for the 8-puzzle (Misplaced Tiles vs Manhattan Distance)."
    ],
    "keywords": [
      "Heuristic",
      "A* Algorithm",
      "Greedy Search",
      "Admissibility",
      "Consistency",
      "Evaluation Function",
      "f(n)",
      "g(n)",
      "h(n)",
      "Manhattan Distance",
      "Euclidean Distance"
    ],
    "content": {
      "beginner": {
        "summary": "Informed (heuristic) search strategies use problem-specific domain knowledge through a Heuristic Function h(n): an estimate of the cheapest path cost ...",
        "theory": "Informed (heuristic) search strategies use problem-specific domain knowledge through a Heuristic Function h(n): an estimate of the cheapest path cost from node n to a goal state. (By definition, h(Goal) = 0). Greedy Best-First Search evaluates nodes using f(n) = h(n), expanding the node that appears closest to the goal. While fast, Greedy search is incomplete and non-optimal because it can be led down expensive false trails. The A* Algorithm combines the actual cost accumulated so far g(n) with the heuristic estimate to the goal h(n): f(n) = g(n) + h(n). Here, f(n) represents the estimated total cost of the cheapest solution path through node n.",
        "definitions": [
          {
            "term": "Heuristic Function h(n)",
            "definition": "An informed estimation function calculating the projected cost of the cheapest path from node n to a goal state."
          },
          {
            "term": "Admissible Heuristic",
            "definition": "A heuristic function that never overestimates the true cost to reach the goal (always optimistic)."
          },
          {
            "term": "Consistency (Monotonicity)",
            "definition": "A condition where the estimated cost of reaching the goal from n is no greater than the step cost to n` plus the estimated cost from n`."
          }
        ],
        "keyConcepts": [
          {
            "title": "Proof of A* Tree Search Optimality",
            "explanation": "Assume sub-optimal goal G2 is popped from frontier before optimal goal G1: f(G2) = g(G2) > g(G1). Since h is admissible, an ancestor n of G1 on the frontier has f(n) <= g(G1) < f(G2). Thus n is popped before G2, contradiction!",
            "example": "A* will never select a sub-optimal goal for expansion."
          },
          {
            "title": "Manhattan vs Euclidean Distance",
            "explanation": "In grid navigation with 4-directional moves (N,S,E,W), Manhattan Distance |x1 - x2| + |y1 - y2| is admissible. Euclidean straight-line distance is also admissible but weaker (dominated).",
            "example": "Using Manhattan distance prunes more search branches."
          }
        ],
        "diagram": "+-- A* EVALUATION FUNCTION BREAKDOWN --+\\n| f(n) = g(n) + h(n)\\n| g(n) = Exact historical cost from start to node n (known)\\n| h(n) = Estimated heuristic cost from node n to goal (admissible)\\n| f(n) = Estimated total solution cost traversing node n",
        "applications": [
          "GPS mapping applications (Google Maps, OpenStreetMap) calculating shortest road routes.",
          "Video game non-player character (NPC) pathfinding over navigation meshes.",
          "Robotic arm inverse kinematics trajectory planning."
        ],
        "examImportantPoints": [
          "State the mathematical definitions of Admissibility and Consistency and prove why Consistency implies Admissibility.",
          "Demonstrate that Manhattan Distance dominates Misplaced Tiles in the 8-Puzzle.",
          "Trace A* execution step-by-step on a given graph showing g, h, and f values at each expansion."
        ],
        "quickRevisionNotes": [
          "Greedy Best-First: f(n) = h(n), fast but non-optimal.",
          "A* Search: f(n) = g(n) + h(n), complete and optimal.",
          "Admissible: h(n) <= h*(n) (never overestimates).",
          "Consistent: h(n) <= c(n,a,n`) + h(n`) (triangle inequality)."
        ]
      },
      "intermediate": {
        "summary": "A* is guaranteed to be Complete and Optimal under specific mathematical conditions: 1. Admissibility: A heuristic h(n) is admissible if it never overe...",
        "theory": "A* is guaranteed to be Complete and Optimal under specific mathematical conditions: 1. Admissibility: A heuristic h(n) is admissible if it never overestimates the true cost to reach the goal: 0 <= h(n) <= h*(n), where h*(n) is the true optimal cost. Admissibility guarantees A* optimality in Tree Search. 2. Consistency (Monotonicity): A heuristic is consistent if for every node n and successor n` generated by action a: h(n) <= c(n, a, n`) + h(n`). Consistency satisfies the triangle inequality and guarantees that f(n) is non-decreasing along any path, ensuring A* optimality in Graph Search without reopening closed nodes.",
        "definitions": [
          {
            "term": "Heuristic Function h(n)",
            "definition": "An informed estimation function calculating the projected cost of the cheapest path from node n to a goal state."
          },
          {
            "term": "Admissible Heuristic",
            "definition": "A heuristic function that never overestimates the true cost to reach the goal (always optimistic)."
          },
          {
            "term": "Consistency (Monotonicity)",
            "definition": "A condition where the estimated cost of reaching the goal from n is no greater than the step cost to n` plus the estimated cost from n`."
          }
        ],
        "keyConcepts": [
          {
            "title": "Proof of A* Tree Search Optimality",
            "explanation": "Assume sub-optimal goal G2 is popped from frontier before optimal goal G1: f(G2) = g(G2) > g(G1). Since h is admissible, an ancestor n of G1 on the frontier has f(n) <= g(G1) < f(G2). Thus n is popped before G2, contradiction!",
            "example": "A* will never select a sub-optimal goal for expansion."
          },
          {
            "title": "Manhattan vs Euclidean Distance",
            "explanation": "In grid navigation with 4-directional moves (N,S,E,W), Manhattan Distance |x1 - x2| + |y1 - y2| is admissible. Euclidean straight-line distance is also admissible but weaker (dominated).",
            "example": "Using Manhattan distance prunes more search branches."
          }
        ],
        "diagram": "+-- A* EVALUATION FUNCTION BREAKDOWN --+\\n| f(n) = g(n) + h(n)\\n| g(n) = Exact historical cost from start to node n (known)\\n| h(n) = Estimated heuristic cost from node n to goal (admissible)\\n| f(n) = Estimated total solution cost traversing node n",
        "applications": [
          "GPS mapping applications (Google Maps, OpenStreetMap) calculating shortest road routes.",
          "Video game non-player character (NPC) pathfinding over navigation meshes.",
          "Robotic arm inverse kinematics trajectory planning."
        ],
        "examImportantPoints": [
          "State the mathematical definitions of Admissibility and Consistency and prove why Consistency implies Admissibility.",
          "Demonstrate that Manhattan Distance dominates Misplaced Tiles in the 8-Puzzle.",
          "Trace A* execution step-by-step on a given graph showing g, h, and f values at each expansion."
        ],
        "quickRevisionNotes": [
          "Greedy Best-First: f(n) = h(n), fast but non-optimal.",
          "A* Search: f(n) = g(n) + h(n), complete and optimal.",
          "Admissible: h(n) <= h*(n) (never overestimates)."
        ]
      },
      "advanced": {
        "summary": "When comparing two admissible heuristics h1 and h2, if h2(n) >= h1(n) for all nodes n, we say h2 Dominates h1. A dominant heuristic is closer to the t...",
        "theory": "When comparing two admissible heuristics h1 and h2, if h2(n) >= h1(n) for all nodes n, we say h2 Dominates h1. A dominant heuristic is closer to the true cost h*(n), meaning A* with h2 will expand strictly fewer or equal nodes than A* with h1. In the 8-Puzzle, Manhattan Distance (sum of horizontal and vertical distances of tiles from goal positions) strictly dominates Misplaced Tiles, pruning orders of magnitude more nodes from the search space.",
        "definitions": [
          {
            "term": "Heuristic Function h(n)",
            "definition": "An informed estimation function calculating the projected cost of the cheapest path from node n to a goal state."
          },
          {
            "term": "Admissible Heuristic",
            "definition": "A heuristic function that never overestimates the true cost to reach the goal (always optimistic)."
          },
          {
            "term": "Consistency (Monotonicity)",
            "definition": "A condition where the estimated cost of reaching the goal from n is no greater than the step cost to n` plus the estimated cost from n`."
          }
        ],
        "keyConcepts": [
          {
            "title": "Proof of A* Tree Search Optimality",
            "explanation": "Assume sub-optimal goal G2 is popped from frontier before optimal goal G1: f(G2) = g(G2) > g(G1). Since h is admissible, an ancestor n of G1 on the frontier has f(n) <= g(G1) < f(G2). Thus n is popped before G2, contradiction!",
            "example": "A* will never select a sub-optimal goal for expansion."
          },
          {
            "title": "Manhattan vs Euclidean Distance",
            "explanation": "In grid navigation with 4-directional moves (N,S,E,W), Manhattan Distance |x1 - x2| + |y1 - y2| is admissible. Euclidean straight-line distance is also admissible but weaker (dominated).",
            "example": "Using Manhattan distance prunes more search branches."
          }
        ],
        "diagram": "+-- A* EVALUATION FUNCTION BREAKDOWN --+\\n| f(n) = g(n) + h(n)\\n| g(n) = Exact historical cost from start to node n (known)\\n| h(n) = Estimated heuristic cost from node n to goal (admissible)\\n| f(n) = Estimated total solution cost traversing node n",
        "applications": [
          "GPS mapping applications (Google Maps, OpenStreetMap) calculating shortest road routes.",
          "Video game non-player character (NPC) pathfinding over navigation meshes.",
          "Robotic arm inverse kinematics trajectory planning."
        ],
        "examImportantPoints": [
          "State the mathematical definitions of Admissibility and Consistency and prove why Consistency implies Admissibility.",
          "Demonstrate that Manhattan Distance dominates Misplaced Tiles in the 8-Puzzle.",
          "Trace A* execution step-by-step on a given graph showing g, h, and f values at each expansion."
        ],
        "quickRevisionNotes": [
          "A* Search: f(n) = g(n) + h(n), complete and optimal.",
          "Admissible: h(n) <= h*(n) (never overestimates).",
          "Consistent: h(n) <= c(n,a,n`) + h(n`) (triangle inequality)."
        ]
      }
    }
  },
  {
    "id": "ai-u2-t3",
    "subjectId": "ai",
    "unitId": "ai-u2",
    "unitNumber": 2,
    "unitTitle": "Search Strategies & Problem Solving",
    "topicNumber": 3,
    "title": "Adversarial Search & Game Playing (Minimax & Alpha-Beta Pruning)",
    "objectives": [
      "Formulate two-player deterministic zero-sum perfect information games as adversarial search trees.",
      "Implement the Minimax algorithm computing optimal minimax decision values recursively.",
      "Apply Alpha-Beta pruning to eliminate provably suboptimal game branches without affecting decision quality."
    ],
    "keywords": [
      "Adversarial Search",
      "Game Playing",
      "Minimax",
      "Alpha-Beta Pruning",
      "Zero-Sum",
      "Terminal State",
      "Utility",
      "Evaluation Function",
      "Horizon Effect"
    ],
    "content": {
      "beginner": {
        "summary": "Adversarial search examines competitive multi-agent environments where agents have conflicting goals. In a two-player, deterministic, turn-based, zero...",
        "theory": "Adversarial search examines competitive multi-agent environments where agents have conflicting goals. In a two-player, deterministic, turn-based, zero-sum game of perfect information (such as Chess, Checkers, or Tic-Tac-Toe), two players—MAX (aiming to maximize score) and MIN (aiming to minimize score)—alternate moves. The Minimax Algorithm calculates the optimal move for MAX assuming MIN plays perfectly: MAX chooses the child node with maximum minimax value, while MIN chooses the child with minimum minimax value. If a terminal state is reached, the game utility function returns the final payoff (+1 win, 0 draw, -1 loss).",
        "definitions": [
          {
            "term": "Zero-Sum Game",
            "definition": "A mathematical game where the total payoff to all players sums to zero: any gain by one player is an exact loss to the opponent."
          },
          {
            "term": "Alpha-Beta Pruning",
            "definition": "An adversarial search optimization that prunes subtrees that are mathematically proven to be worse than previously explored options."
          },
          {
            "term": "Quiescence Search",
            "definition": "Extending search depth beyond the nominal horizon limit for volatile, non-quiescent tactical states (such as active piece trades)."
          }
        ],
        "keyConcepts": [
          {
            "title": "Alpha-Beta Move Ordering Sensitivity",
            "explanation": "If worst moves are searched first, no pruning occurs (O(b^m)). If best moves are searched first, time complexity drops to O(b^(m/2)).",
            "example": "Chess engines use transposition tables and iterative deepening to sort moves optimally."
          },
          {
            "title": "The Horizon Effect Hazard",
            "explanation": "A search engine sees a queen trapped in 4 moves, but plays delaying pawn sacrifices to push the queen capture past its 5-ply search horizon.",
            "example": "Quiescence search prevents the engine from blinding itself with delay tactics."
          }
        ],
        "diagram": "+-- ALPHA-BETA PRUNING CUTOFF MECHANISM --+\\n| MAX Node: updates alpha = max(alpha, child_val)\\n| MIN Node: updates beta  = min(beta, child_val)\\n| PRUNING CONDITION: If alpha >= beta, PRUNE remaining siblings!\\n|          [MAX (alpha=5)]\\n|          /             \\\\\\n|      [MIN: 5]        [MIN: alpha=5, beta=3] -> 5 >= 3 => PRUNE!\\n|      /      \\\\             /      \\\\\\n|    [5]      [8]          [3]     [XX]",
        "applications": [
          "Chess game engines (Stockfish alpha-beta search).",
          "Checkers (Chinook solved checkers using alpha-beta and endgame databases).",
          "Real-time strategy game tactical skirmish logic."
        ],
        "examImportantPoints": [
          "Trace the Minimax algorithm on a given game tree and calculate the root minimax value.",
          "Apply Alpha-Beta pruning on a 3-tier game tree: identify which branches are pruned and state whether it is an alpha-cut or beta-cut.",
          "Derive the time complexity of Minimax vs optimal Alpha-Beta pruning (O(b^m) vs O(b^(m/2)))."
        ],
        "quickRevisionNotes": [
          "Minimax: MAX chooses max; MIN chooses min.",
          "Alpha: Best value for MAX so far (initially -infinity).",
          "Beta: Best value for MIN so far (initially +infinity).",
          "Prune when alpha >= beta. Optimal ordering yields O(b^(m/2))."
        ]
      },
      "intermediate": {
        "summary": "Minimax time complexity is O(b^m) and space complexity is O(b*m). In deep games like Chess (b ≈ 35, m ≈ 80), full tree expansion is impossible. Alpha-...",
        "theory": "Minimax time complexity is O(b^m) and space complexity is O(b*m). In deep games like Chess (b ≈ 35, m ≈ 80), full tree expansion is impossible. Alpha-Beta Pruning returns the exact same move as Minimax while pruning irrelevant branches: 1. Alpha (alpha): The highest (best) value MAX is guaranteed to achieve so far along the path. 2. Beta (beta): The lowest (best) value MIN is guaranteed to achieve so far along the path. During recursion, if at any point alpha >= beta, the current parent will never select this branch, allowing the remaining subtree to be pruned immediately (Alpha-cut or Beta-cut).",
        "definitions": [
          {
            "term": "Zero-Sum Game",
            "definition": "A mathematical game where the total payoff to all players sums to zero: any gain by one player is an exact loss to the opponent."
          },
          {
            "term": "Alpha-Beta Pruning",
            "definition": "An adversarial search optimization that prunes subtrees that are mathematically proven to be worse than previously explored options."
          },
          {
            "term": "Quiescence Search",
            "definition": "Extending search depth beyond the nominal horizon limit for volatile, non-quiescent tactical states (such as active piece trades)."
          }
        ],
        "keyConcepts": [
          {
            "title": "Alpha-Beta Move Ordering Sensitivity",
            "explanation": "If worst moves are searched first, no pruning occurs (O(b^m)). If best moves are searched first, time complexity drops to O(b^(m/2)).",
            "example": "Chess engines use transposition tables and iterative deepening to sort moves optimally."
          },
          {
            "title": "The Horizon Effect Hazard",
            "explanation": "A search engine sees a queen trapped in 4 moves, but plays delaying pawn sacrifices to push the queen capture past its 5-ply search horizon.",
            "example": "Quiescence search prevents the engine from blinding itself with delay tactics."
          }
        ],
        "diagram": "+-- ALPHA-BETA PRUNING CUTOFF MECHANISM --+\\n| MAX Node: updates alpha = max(alpha, child_val)\\n| MIN Node: updates beta  = min(beta, child_val)\\n| PRUNING CONDITION: If alpha >= beta, PRUNE remaining siblings!\\n|          [MAX (alpha=5)]\\n|          /             \\\\\\n|      [MIN: 5]        [MIN: alpha=5, beta=3] -> 5 >= 3 => PRUNE!\\n|      /      \\\\             /      \\\\\\n|    [5]      [8]          [3]     [XX]",
        "applications": [
          "Chess game engines (Stockfish alpha-beta search).",
          "Checkers (Chinook solved checkers using alpha-beta and endgame databases).",
          "Real-time strategy game tactical skirmish logic."
        ],
        "examImportantPoints": [
          "Trace the Minimax algorithm on a given game tree and calculate the root minimax value.",
          "Apply Alpha-Beta pruning on a 3-tier game tree: identify which branches are pruned and state whether it is an alpha-cut or beta-cut.",
          "Derive the time complexity of Minimax vs optimal Alpha-Beta pruning (O(b^m) vs O(b^(m/2)))."
        ],
        "quickRevisionNotes": [
          "Minimax: MAX chooses max; MIN chooses min.",
          "Alpha: Best value for MAX so far (initially -infinity).",
          "Beta: Best value for MIN so far (initially +infinity)."
        ]
      },
      "advanced": {
        "summary": "With optimal move ordering (evaluating best moves first), Alpha-Beta pruning reduces effective branching factor from b to sqrt(b), doubling the reacha...",
        "theory": "With optimal move ordering (evaluating best moves first), Alpha-Beta pruning reduces effective branching factor from b to sqrt(b), doubling the reachable search depth from d to 2d in equal time: O(b^(m/2)). Real-world game engines cannot search to terminal states; they use Heuristic Evaluation Functions at a fixed depth limit d (e.g. material piece counts and positional mobility). They combat the Horizon Effect (where an inevitable devastating opponent move is pushed beyond the search horizon) using Quiescence Search, which continues searching tactical capture sequences until the position is calm.",
        "definitions": [
          {
            "term": "Zero-Sum Game",
            "definition": "A mathematical game where the total payoff to all players sums to zero: any gain by one player is an exact loss to the opponent."
          },
          {
            "term": "Alpha-Beta Pruning",
            "definition": "An adversarial search optimization that prunes subtrees that are mathematically proven to be worse than previously explored options."
          },
          {
            "term": "Quiescence Search",
            "definition": "Extending search depth beyond the nominal horizon limit for volatile, non-quiescent tactical states (such as active piece trades)."
          }
        ],
        "keyConcepts": [
          {
            "title": "Alpha-Beta Move Ordering Sensitivity",
            "explanation": "If worst moves are searched first, no pruning occurs (O(b^m)). If best moves are searched first, time complexity drops to O(b^(m/2)).",
            "example": "Chess engines use transposition tables and iterative deepening to sort moves optimally."
          },
          {
            "title": "The Horizon Effect Hazard",
            "explanation": "A search engine sees a queen trapped in 4 moves, but plays delaying pawn sacrifices to push the queen capture past its 5-ply search horizon.",
            "example": "Quiescence search prevents the engine from blinding itself with delay tactics."
          }
        ],
        "diagram": "+-- ALPHA-BETA PRUNING CUTOFF MECHANISM --+\\n| MAX Node: updates alpha = max(alpha, child_val)\\n| MIN Node: updates beta  = min(beta, child_val)\\n| PRUNING CONDITION: If alpha >= beta, PRUNE remaining siblings!\\n|          [MAX (alpha=5)]\\n|          /             \\\\\\n|      [MIN: 5]        [MIN: alpha=5, beta=3] -> 5 >= 3 => PRUNE!\\n|      /      \\\\             /      \\\\\\n|    [5]      [8]          [3]     [XX]",
        "applications": [
          "Chess game engines (Stockfish alpha-beta search).",
          "Checkers (Chinook solved checkers using alpha-beta and endgame databases).",
          "Real-time strategy game tactical skirmish logic."
        ],
        "examImportantPoints": [
          "Trace the Minimax algorithm on a given game tree and calculate the root minimax value.",
          "Apply Alpha-Beta pruning on a 3-tier game tree: identify which branches are pruned and state whether it is an alpha-cut or beta-cut.",
          "Derive the time complexity of Minimax vs optimal Alpha-Beta pruning (O(b^m) vs O(b^(m/2)))."
        ],
        "quickRevisionNotes": [
          "Alpha: Best value for MAX so far (initially -infinity).",
          "Beta: Best value for MIN so far (initially +infinity).",
          "Prune when alpha >= beta. Optimal ordering yields O(b^(m/2))."
        ]
      }
    }
  },
  {
    "id": "ai-u3-t1",
    "subjectId": "ai",
    "unitId": "ai-u3",
    "unitNumber": 3,
    "unitTitle": "Knowledge Representation & Logic",
    "topicNumber": 1,
    "title": "Propositional Logic, Syntax, Semantics & Inference Rules",
    "objectives": [
      "Analyze Propositional Logic syntax, operators (conjunction, disjunction, implication, biconditional), and truth tables.",
      "Differentiate Entailment (alpha |= beta), Validity (tautology), and Satisfiability (SAT).",
      "Apply formal inference rules: Modus Ponens, Resolution, and conversion to Conjunctive Normal Form (CNF)."
    ],
    "keywords": [
      "Propositional Logic",
      "Truth Tables",
      "Entailment",
      "Inference Rules",
      "Modus Ponens",
      "Resolution",
      "CNF",
      "Satisfiability",
      "Validity"
    ],
    "content": {
      "beginner": {
        "summary": "Knowledge-based agents represent world state using formal Knowledge Bases (KB) expressed in a Knowledge Representation Language. Propositional Logic i...",
        "theory": "Knowledge-based agents represent world state using formal Knowledge Bases (KB) expressed in a Knowledge Representation Language. Propositional Logic is the foundational declarative logic where propositions represent assertions that are either True or False. Logical connectives include: Negation (~A), Conjunction (A ^ B), Disjunction (A v B), Implication (A => B, equivalent to ~A v B), and Biconditional (A <=> B). The Semantics of a sentence defines its truth value in any given Model (possible world). A Knowledge Base KB entails sentence alpha (KB |= alpha) if and only if alpha is True in all models where KB is True.",
        "definitions": [
          {
            "term": "Entailment (KB |= alpha)",
            "definition": "The semantic relationship where sentence alpha is True in every possible model where the knowledge base KB is True."
          },
          {
            "term": "Conjunctive Normal Form (CNF)",
            "definition": "A canonical logical sentence structure formatted as a conjunction (AND) of one or more clauses (OR of literals)."
          },
          {
            "term": "Validity (Tautology)",
            "definition": "A sentence that evaluates to True in all possible models regardless of truth assignments."
          }
        ],
        "keyConcepts": [
          {
            "title": "Conversion to CNF Steps",
            "explanation": "1. Eliminate <=>: (A=>B)^(B=>A). 2. Eliminate =>: ~A v B. 3. Push ~ inward via De Morgan: ~(A^B) = ~A v ~B. 4. Distribute v over ^: (A v (B ^ C)) = (A v B) ^ (A v C).",
            "example": "All first-order and propositional logic knowledge can be transformed into CNF."
          },
          {
            "title": "Resolution Refutation Principle",
            "explanation": "To prove KB |= alpha, assert KB ^ ~alpha and repeatedly apply resolution until the empty clause (Contradiction) is derived.",
            "example": "If contradiction is reached, ~alpha is unsatisfiable, hence alpha is proven True."
          }
        ],
        "diagram": "+-- PROPOSITIONAL INFERENCE RULES --+\\n| Modus Ponens:       A,  A => B           |------ B\\n| Resolution Rule:    (A v B), (~B v C)    |------ (A v C)\\n| Implication Equiv:  A => B               <=====> ~A v B\\n| De Morgan Laws:     ~(A ^ B)             <=====> ~A v ~B",
        "applications": [
          "Microprocessor hardware circuit equivalence verification.",
          "Automated software dependency package resolution (apt, npm solver).",
          "Robotic mission rule consistency checking."
        ],
        "examImportantPoints": [
          "Prove whether a given proposition is a Tautology, Contradiction, or Contingency using a truth table.",
          "Convert a complex propositional logic sentence into Conjunctive Normal Form (CNF) step-by-step.",
          "Demonstrate Proof by Resolution Refutation: prove KB entails target query by deriving empty clause."
        ],
        "quickRevisionNotes": [
          "Entailment: KB |= alpha means alpha is true whenever KB is true.",
          "A => B is logically equivalent to ~A v B.",
          "CNF: Conjunction of Disjunctions (AND of ORs).",
          "Resolution: (A v B) and (~B v C) -> (A v C). Refutation derives empty clause."
        ]
      },
      "intermediate": {
        "summary": "Inference algorithms derive new sentences from a KB: 1. Model Checking: Enumerates all 2^n possible truth assignments; complete but exponential O(2^n)...",
        "theory": "Inference algorithms derive new sentences from a KB: 1. Model Checking: Enumerates all 2^n possible truth assignments; complete but exponential O(2^n). 2. Inference Rules: Modus Ponens (given A and A => B, infer B). 3. Resolution Rule: For complementary literals: (A v B) and (~B v C) yields Resolvent (A v C). Resolution is complete for refutation proofs. To perform resolution refutation, all sentences must be converted to Conjunctive Normal Form (CNF), a conjunction of clauses where each clause is a disjunction of literals.",
        "definitions": [
          {
            "term": "Entailment (KB |= alpha)",
            "definition": "The semantic relationship where sentence alpha is True in every possible model where the knowledge base KB is True."
          },
          {
            "term": "Conjunctive Normal Form (CNF)",
            "definition": "A canonical logical sentence structure formatted as a conjunction (AND) of one or more clauses (OR of literals)."
          },
          {
            "term": "Validity (Tautology)",
            "definition": "A sentence that evaluates to True in all possible models regardless of truth assignments."
          }
        ],
        "keyConcepts": [
          {
            "title": "Conversion to CNF Steps",
            "explanation": "1. Eliminate <=>: (A=>B)^(B=>A). 2. Eliminate =>: ~A v B. 3. Push ~ inward via De Morgan: ~(A^B) = ~A v ~B. 4. Distribute v over ^: (A v (B ^ C)) = (A v B) ^ (A v C).",
            "example": "All first-order and propositional logic knowledge can be transformed into CNF."
          },
          {
            "title": "Resolution Refutation Principle",
            "explanation": "To prove KB |= alpha, assert KB ^ ~alpha and repeatedly apply resolution until the empty clause (Contradiction) is derived.",
            "example": "If contradiction is reached, ~alpha is unsatisfiable, hence alpha is proven True."
          }
        ],
        "diagram": "+-- PROPOSITIONAL INFERENCE RULES --+\\n| Modus Ponens:       A,  A => B           |------ B\\n| Resolution Rule:    (A v B), (~B v C)    |------ (A v C)\\n| Implication Equiv:  A => B               <=====> ~A v B\\n| De Morgan Laws:     ~(A ^ B)             <=====> ~A v ~B",
        "applications": [
          "Microprocessor hardware circuit equivalence verification.",
          "Automated software dependency package resolution (apt, npm solver).",
          "Robotic mission rule consistency checking."
        ],
        "examImportantPoints": [
          "Prove whether a given proposition is a Tautology, Contradiction, or Contingency using a truth table.",
          "Convert a complex propositional logic sentence into Conjunctive Normal Form (CNF) step-by-step.",
          "Demonstrate Proof by Resolution Refutation: prove KB entails target query by deriving empty clause."
        ],
        "quickRevisionNotes": [
          "Entailment: KB |= alpha means alpha is true whenever KB is true.",
          "A => B is logically equivalent to ~A v B.",
          "CNF: Conjunction of Disjunctions (AND of ORs)."
        ]
      },
      "advanced": {
        "summary": "The Propositional Satisfiability Problem (SAT) was the first problem proven to be NP-Complete (Cook-Levin Theorem). Modern SAT solvers use the DPLL (D...",
        "theory": "The Propositional Satisfiability Problem (SAT) was the first problem proven to be NP-Complete (Cook-Levin Theorem). Modern SAT solvers use the DPLL (Davis-Putnam-Logemann-Loveland) algorithm combining backtracking with three heuristics: 1. Early Termination, 2. Pure Symbol Elimination, and 3. Unit Clause Propagation. Conflict-Driven Clause Learning (CDCL) modern solvers can resolve industrial SAT instances with millions of variables, powering modern microprocessor hardware verification.",
        "definitions": [
          {
            "term": "Entailment (KB |= alpha)",
            "definition": "The semantic relationship where sentence alpha is True in every possible model where the knowledge base KB is True."
          },
          {
            "term": "Conjunctive Normal Form (CNF)",
            "definition": "A canonical logical sentence structure formatted as a conjunction (AND) of one or more clauses (OR of literals)."
          },
          {
            "term": "Validity (Tautology)",
            "definition": "A sentence that evaluates to True in all possible models regardless of truth assignments."
          }
        ],
        "keyConcepts": [
          {
            "title": "Conversion to CNF Steps",
            "explanation": "1. Eliminate <=>: (A=>B)^(B=>A). 2. Eliminate =>: ~A v B. 3. Push ~ inward via De Morgan: ~(A^B) = ~A v ~B. 4. Distribute v over ^: (A v (B ^ C)) = (A v B) ^ (A v C).",
            "example": "All first-order and propositional logic knowledge can be transformed into CNF."
          },
          {
            "title": "Resolution Refutation Principle",
            "explanation": "To prove KB |= alpha, assert KB ^ ~alpha and repeatedly apply resolution until the empty clause (Contradiction) is derived.",
            "example": "If contradiction is reached, ~alpha is unsatisfiable, hence alpha is proven True."
          }
        ],
        "diagram": "+-- PROPOSITIONAL INFERENCE RULES --+\\n| Modus Ponens:       A,  A => B           |------ B\\n| Resolution Rule:    (A v B), (~B v C)    |------ (A v C)\\n| Implication Equiv:  A => B               <=====> ~A v B\\n| De Morgan Laws:     ~(A ^ B)             <=====> ~A v ~B",
        "applications": [
          "Microprocessor hardware circuit equivalence verification.",
          "Automated software dependency package resolution (apt, npm solver).",
          "Robotic mission rule consistency checking."
        ],
        "examImportantPoints": [
          "Prove whether a given proposition is a Tautology, Contradiction, or Contingency using a truth table.",
          "Convert a complex propositional logic sentence into Conjunctive Normal Form (CNF) step-by-step.",
          "Demonstrate Proof by Resolution Refutation: prove KB entails target query by deriving empty clause."
        ],
        "quickRevisionNotes": [
          "A => B is logically equivalent to ~A v B.",
          "CNF: Conjunction of Disjunctions (AND of ORs).",
          "Resolution: (A v B) and (~B v C) -> (A v C). Refutation derives empty clause."
        ]
      }
    }
  },
  {
    "id": "ai-u3-t2",
    "subjectId": "ai",
    "unitId": "ai-u3",
    "unitNumber": 3,
    "unitTitle": "Knowledge Representation & Logic",
    "topicNumber": 2,
    "title": "First-Order Predicate Logic (FOL), Unification & Resolution Refutation",
    "objectives": [
      "Formulate natural language domains using First-Order Logic (FOL) predicates, functions, and quantifiers.",
      "Apply Skolemization and conversion pipelines from FOL to clausal normal form.",
      "Execute Robinson Unification Algorithm computing the Most General Unifier (MGU)."
    ],
    "keywords": [
      "First-Order Logic",
      "Predicates",
      "Quantifiers",
      "Universal",
      "Existential",
      "Unification",
      "Skolemization",
      "Resolution Refutation",
      "MGU"
    ],
    "content": {
      "beginner": {
        "summary": "While Propositional Logic is limited to true/false facts, First-Order Logic (FOL) represents the world in terms of Objects (people, numbers, houses), ...",
        "theory": "While Propositional Logic is limited to true/false facts, First-Order Logic (FOL) represents the world in terms of Objects (people, numbers, houses), Relations/Predicates (King, Brother, GreaterThan), and Functions (FatherOf, Plus). FOL introduces two Quantifiers: 1. Universal Quantifier (ForAll x): asserts that a property holds for every object in the domain. 2. Existential Quantifier (Exists x): asserts that a property holds for at least one object in the domain. FOL provides the expressive power required to represent complex mathematical and common-sense knowledge.",
        "definitions": [
          {
            "term": "Universal Quantifier (ForAll)",
            "definition": "A logical quantifier asserting that an open sentence is True for every possible object in the universe of discourse."
          },
          {
            "term": "Skolemization",
            "definition": "The process of removing existential quantifiers by replacing the quantified variable with a unique Skolem constant or function."
          },
          {
            "term": "Most General Unifier (MGU)",
            "definition": "A variable substitution theta that unifies two expressions such that any other unifier can be obtained by further substitution."
          }
        ],
        "keyConcepts": [
          {
            "title": "Skolem Function vs Skolem Constant",
            "explanation": "If Exists y is not inside ForAll, y is replaced by constant K. If Exists y is inside ForAll x, y depends on x, requiring Skolem function f(x).",
            "example": "Every person has a mother: ForAll x Exists y Mother(y,x) becomes Mother(m(x), x)."
          },
          {
            "title": "First-Order Resolution Step",
            "explanation": "Given clauses Likes(x, IceCream) and ~Likes(Bob, y) v Happy(Bob). Unify with theta={x/Bob, y/IceCream}. Resolvent: Happy(Bob).",
            "example": "Resolution unifies complementary literals and cascades logical deductions."
          }
        ],
        "diagram": "+-- FIRST-ORDER LOGIC QUANTIFIERS & SKOLEMIZATION --+\\n| Universal:    ForAll x, King(x) => Person(x)          |\\n| Existential:  Exists x, Crown(x) ^ OnHead(x, John)    |\\n| Skolemization: Exists x, Cat(x)  ===> Cat(K_constant) |\\n| ForAll x, Exists y, Mother(y,x) ===> ForAll x, Mother(f(x), x) [Skolem Function]",
        "applications": [
          "Prolog logic programming language interpreter engines.",
          "Formal mathematical theorem verification (Coq, Isabelle).",
          "Automated security policy and regulatory compliance auditing."
        ],
        "examImportantPoints": [
          "Translate English statements with quantifiers into First-Order Predicate Logic formulas.",
          "Demonstrate the step-by-step conversion of an FOL sentence into Clausal Normal Form (including Skolemization).",
          "Compute the Most General Unifier (MGU) for given predicate pairs or explain why unification fails (e.g. occurs check)."
        ],
        "quickRevisionNotes": [
          "Universal (ForAll) pairs with implication (=>); Existential (Exists) pairs with conjunction (^).",
          "Skolem constant replaces Exists; Skolem function replaces Exists inside ForAll.",
          "Unification finds variable substitutions: UNIFY(p,q) = theta.",
          "Occurs check prevents infinite loops: x cannot unify with f(x)."
        ]
      },
      "intermediate": {
        "summary": "To automate reasoning in FOL, sentences are converted to Clausal Form through 8 systematic steps: 1. Eliminate implications, 2. Move negations inward ...",
        "theory": "To automate reasoning in FOL, sentences are converted to Clausal Form through 8 systematic steps: 1. Eliminate implications, 2. Move negations inward (~ForAll x P(x) <=> Exists x ~P(x)), 3. Standardize variables, 4. Skolemization: replace existentially quantified variables with Skolem constants or Skolem functions of enclosing universal variables, 5. Drop universal quantifiers, 6. Distribute OR over AND, 7. Split into clauses, and 8. Standardize variables per clause. Unification (Robinson Algorithm) finds a variable substitution theta that makes two distinct logical expressions syntactically identical: UNIFY(p, q) = theta. The Most General Unifier (MGU) finds the most general substitution without unnecessary bindings.",
        "definitions": [
          {
            "term": "Universal Quantifier (ForAll)",
            "definition": "A logical quantifier asserting that an open sentence is True for every possible object in the universe of discourse."
          },
          {
            "term": "Skolemization",
            "definition": "The process of removing existential quantifiers by replacing the quantified variable with a unique Skolem constant or function."
          },
          {
            "term": "Most General Unifier (MGU)",
            "definition": "A variable substitution theta that unifies two expressions such that any other unifier can be obtained by further substitution."
          }
        ],
        "keyConcepts": [
          {
            "title": "Skolem Function vs Skolem Constant",
            "explanation": "If Exists y is not inside ForAll, y is replaced by constant K. If Exists y is inside ForAll x, y depends on x, requiring Skolem function f(x).",
            "example": "Every person has a mother: ForAll x Exists y Mother(y,x) becomes Mother(m(x), x)."
          },
          {
            "title": "First-Order Resolution Step",
            "explanation": "Given clauses Likes(x, IceCream) and ~Likes(Bob, y) v Happy(Bob). Unify with theta={x/Bob, y/IceCream}. Resolvent: Happy(Bob).",
            "example": "Resolution unifies complementary literals and cascades logical deductions."
          }
        ],
        "diagram": "+-- FIRST-ORDER LOGIC QUANTIFIERS & SKOLEMIZATION --+\\n| Universal:    ForAll x, King(x) => Person(x)          |\\n| Existential:  Exists x, Crown(x) ^ OnHead(x, John)    |\\n| Skolemization: Exists x, Cat(x)  ===> Cat(K_constant) |\\n| ForAll x, Exists y, Mother(y,x) ===> ForAll x, Mother(f(x), x) [Skolem Function]",
        "applications": [
          "Prolog logic programming language interpreter engines.",
          "Formal mathematical theorem verification (Coq, Isabelle).",
          "Automated security policy and regulatory compliance auditing."
        ],
        "examImportantPoints": [
          "Translate English statements with quantifiers into First-Order Predicate Logic formulas.",
          "Demonstrate the step-by-step conversion of an FOL sentence into Clausal Normal Form (including Skolemization).",
          "Compute the Most General Unifier (MGU) for given predicate pairs or explain why unification fails (e.g. occurs check)."
        ],
        "quickRevisionNotes": [
          "Universal (ForAll) pairs with implication (=>); Existential (Exists) pairs with conjunction (^).",
          "Skolem constant replaces Exists; Skolem function replaces Exists inside ForAll.",
          "Unification finds variable substitutions: UNIFY(p,q) = theta."
        ]
      },
      "advanced": {
        "summary": "The Occurs Check in unification verifies that a variable x does not appear inside the term t being substituted for x (e.g. UNIFY(x, f(x)) must fail), ...",
        "theory": "The Occurs Check in unification verifies that a variable x does not appear inside the term t being substituted for x (e.g. UNIFY(x, f(x)) must fail), preventing infinite recursive structures. Generalized Modus Ponens and First-Order Resolution Refutation enable automated theorem provers (Prolog, Vampire, Prover9) to verify software specifications and validate cryptographic security protocols.",
        "definitions": [
          {
            "term": "Universal Quantifier (ForAll)",
            "definition": "A logical quantifier asserting that an open sentence is True for every possible object in the universe of discourse."
          },
          {
            "term": "Skolemization",
            "definition": "The process of removing existential quantifiers by replacing the quantified variable with a unique Skolem constant or function."
          },
          {
            "term": "Most General Unifier (MGU)",
            "definition": "A variable substitution theta that unifies two expressions such that any other unifier can be obtained by further substitution."
          }
        ],
        "keyConcepts": [
          {
            "title": "Skolem Function vs Skolem Constant",
            "explanation": "If Exists y is not inside ForAll, y is replaced by constant K. If Exists y is inside ForAll x, y depends on x, requiring Skolem function f(x).",
            "example": "Every person has a mother: ForAll x Exists y Mother(y,x) becomes Mother(m(x), x)."
          },
          {
            "title": "First-Order Resolution Step",
            "explanation": "Given clauses Likes(x, IceCream) and ~Likes(Bob, y) v Happy(Bob). Unify with theta={x/Bob, y/IceCream}. Resolvent: Happy(Bob).",
            "example": "Resolution unifies complementary literals and cascades logical deductions."
          }
        ],
        "diagram": "+-- FIRST-ORDER LOGIC QUANTIFIERS & SKOLEMIZATION --+\\n| Universal:    ForAll x, King(x) => Person(x)          |\\n| Existential:  Exists x, Crown(x) ^ OnHead(x, John)    |\\n| Skolemization: Exists x, Cat(x)  ===> Cat(K_constant) |\\n| ForAll x, Exists y, Mother(y,x) ===> ForAll x, Mother(f(x), x) [Skolem Function]",
        "applications": [
          "Prolog logic programming language interpreter engines.",
          "Formal mathematical theorem verification (Coq, Isabelle).",
          "Automated security policy and regulatory compliance auditing."
        ],
        "examImportantPoints": [
          "Translate English statements with quantifiers into First-Order Predicate Logic formulas.",
          "Demonstrate the step-by-step conversion of an FOL sentence into Clausal Normal Form (including Skolemization).",
          "Compute the Most General Unifier (MGU) for given predicate pairs or explain why unification fails (e.g. occurs check)."
        ],
        "quickRevisionNotes": [
          "Skolem constant replaces Exists; Skolem function replaces Exists inside ForAll.",
          "Unification finds variable substitutions: UNIFY(p,q) = theta.",
          "Occurs check prevents infinite loops: x cannot unify with f(x)."
        ]
      }
    }
  },
  {
    "id": "ai-u3-t3",
    "subjectId": "ai",
    "unitId": "ai-u3",
    "unitNumber": 3,
    "unitTitle": "Knowledge Representation & Logic",
    "topicNumber": 3,
    "title": "Ontological Engineering, Semantic Networks & Conceptual Graphs",
    "objectives": [
      "Analyze Ontological Engineering for structured, re-usable domain knowledge representation.",
      "Construct Semantic Networks with IS-A and PART-OF inheritance hierarchies.",
      "Evaluate Description Logics, Web Ontology Language (OWL), and Resource Description Framework (RDF) knowledge graphs."
    ],
    "keywords": [
      "Knowledge Representation",
      "Ontology",
      "Semantic Networks",
      "Conceptual Dependency",
      "Frames",
      "Inheritance",
      "Description Logics",
      "OWL",
      "RDF"
    ],
    "content": {
      "beginner": {
        "summary": "While first-order logic provides raw mathematical expressiveness, organizing large-scale knowledge requires Ontological Engineering: the structured ca...",
        "theory": "While first-order logic provides raw mathematical expressiveness, organizing large-scale knowledge requires Ontological Engineering: the structured categorization of concepts, entities, properties, and relationships within a domain. Early knowledge representations include Semantic Networks (directed graphs where nodes represent concepts or physical objects, and arcs represent relations like IS-A and HAS-A) and Frames (data structures containing named slots and default filler values). Inheritance allows subordinate concept nodes to automatically inherit attributes from parent categories, enabling modular knowledge reuse.",
        "definitions": [
          {
            "term": "Ontology",
            "definition": "A formal, explicit specification of a shared conceptualization defining entities, relations, and axioms in a domain."
          },
          {
            "term": "TBox & ABox",
            "definition": "TBox contains terminological schema axioms (classes/roles); ABox contains assertional data about concrete individuals."
          },
          {
            "term": "RDF Triple",
            "definition": "A foundational semantic web statement format composed of Subject, Predicate, and Object."
          }
        ],
        "keyConcepts": [
          {
            "title": "Default Inheritance and Overrides",
            "explanation": "Penguin is a Bird. Bird has default property Fly=True. Penguin overrides this with Fly=False.",
            "example": "Exception handling in semantic networks requires non-monotonic reasoning."
          },
          {
            "title": "TBox vs ABox in Medical Ontologies",
            "explanation": "TBox axiom: Hepatitis is a Disease of the Liver. ABox assertion: Patient John has Hepatitis.",
            "example": "Automated reasoners infer John has a liver disease without manual tagging."
          }
        ],
        "diagram": "+-- SEMANTIC NETWORK WITH INHERITANCE HIERARCHY --+\\n|              [ Living Thing ]\\n|                     ^\\n|                     | IS-A\\n|                [ Animal ] -----------> [ Has: Breathe ]\\n|                     ^\\n|                     | IS-A\\n|                 [ Bird ] ------------> [ Can: Fly ]\\n|                  /    \\\\\\n|           (IS-A)/      \\\\(IS-A)\\n|          [ Robin ]    [ Penguin ] ------> [ Can: Fly (OVERRIDE: FALSE) ]",
        "applications": [
          "Google Knowledge Graph powering web search entity panels.",
          "Biomedical clinical classification systems (SNOMED-CT).",
          "Enterprise data integration across disparate corporate databases."
        ],
        "examImportantPoints": [
          "Draw a Semantic Network for a university hierarchy (Student, Professor, Course) showing IS-A and HAS-A relationships.",
          "Differentiate TBox and ABox in Description Logics with examples.",
          "Explain the default inheritance override problem in semantic graphs."
        ],
        "quickRevisionNotes": [
          "Semantic Networks: Graph with nodes (concepts) and edges (relations).",
          "IS-A defines subclass inheritance; PART-OF defines compositional hierarchy.",
          "Description Logics: TBox (terminology/classes) + ABox (assertions/instances).",
          "RDF: Subject-Predicate-Object triples queryable by SPARQL."
        ]
      },
      "intermediate": {
        "summary": "Description Logics (DL) were developed to provide formal decidable subsets of First-Order Logic for ontological reasoning. DL classifies knowledge int...",
        "theory": "Description Logics (DL) were developed to provide formal decidable subsets of First-Order Logic for ontological reasoning. DL classifies knowledge into two components: 1. TBox (Terminological Box): Defines the vocabulary, concepts, and relationships of the domain (e.g. Woman is a Person, Mother is a Woman with child). 2. ABox (Assertional Box): Contains assertions about individual instances in the world (e.g. Mary is a Mother). DL reasoning algorithms perform Subsumption (checking if one concept is a subcategory of another) and Consistency Checking.",
        "definitions": [
          {
            "term": "Ontology",
            "definition": "A formal, explicit specification of a shared conceptualization defining entities, relations, and axioms in a domain."
          },
          {
            "term": "TBox & ABox",
            "definition": "TBox contains terminological schema axioms (classes/roles); ABox contains assertional data about concrete individuals."
          },
          {
            "term": "RDF Triple",
            "definition": "A foundational semantic web statement format composed of Subject, Predicate, and Object."
          }
        ],
        "keyConcepts": [
          {
            "title": "Default Inheritance and Overrides",
            "explanation": "Penguin is a Bird. Bird has default property Fly=True. Penguin overrides this with Fly=False.",
            "example": "Exception handling in semantic networks requires non-monotonic reasoning."
          },
          {
            "title": "TBox vs ABox in Medical Ontologies",
            "explanation": "TBox axiom: Hepatitis is a Disease of the Liver. ABox assertion: Patient John has Hepatitis.",
            "example": "Automated reasoners infer John has a liver disease without manual tagging."
          }
        ],
        "diagram": "+-- SEMANTIC NETWORK WITH INHERITANCE HIERARCHY --+\\n|              [ Living Thing ]\\n|                     ^\\n|                     | IS-A\\n|                [ Animal ] -----------> [ Has: Breathe ]\\n|                     ^\\n|                     | IS-A\\n|                 [ Bird ] ------------> [ Can: Fly ]\\n|                  /    \\\\\\n|           (IS-A)/      \\\\(IS-A)\\n|          [ Robin ]    [ Penguin ] ------> [ Can: Fly (OVERRIDE: FALSE) ]",
        "applications": [
          "Google Knowledge Graph powering web search entity panels.",
          "Biomedical clinical classification systems (SNOMED-CT).",
          "Enterprise data integration across disparate corporate databases."
        ],
        "examImportantPoints": [
          "Draw a Semantic Network for a university hierarchy (Student, Professor, Course) showing IS-A and HAS-A relationships.",
          "Differentiate TBox and ABox in Description Logics with examples.",
          "Explain the default inheritance override problem in semantic graphs."
        ],
        "quickRevisionNotes": [
          "Semantic Networks: Graph with nodes (concepts) and edges (relations).",
          "IS-A defines subclass inheritance; PART-OF defines compositional hierarchy.",
          "Description Logics: TBox (terminology/classes) + ABox (assertions/instances)."
        ]
      },
      "advanced": {
        "summary": "The modern realization of ontological engineering is the Semantic Web and Enterprise Knowledge Graphs. Resource Description Framework (RDF) represents...",
        "theory": "The modern realization of ontological engineering is the Semantic Web and Enterprise Knowledge Graphs. Resource Description Framework (RDF) represents knowledge as subject-predicate-object triples (e.g., `<Einstein> <bornIn> <Ulm>`). Web Ontology Language (OWL-DL) adds rich description logic axiomatization, powering knowledge graphs like Google Knowledge Graph, Wikidata, and biomedical ontologies (SNOMED-CT, Gene Ontology) queried via SPARQL.",
        "definitions": [
          {
            "term": "Ontology",
            "definition": "A formal, explicit specification of a shared conceptualization defining entities, relations, and axioms in a domain."
          },
          {
            "term": "TBox & ABox",
            "definition": "TBox contains terminological schema axioms (classes/roles); ABox contains assertional data about concrete individuals."
          },
          {
            "term": "RDF Triple",
            "definition": "A foundational semantic web statement format composed of Subject, Predicate, and Object."
          }
        ],
        "keyConcepts": [
          {
            "title": "Default Inheritance and Overrides",
            "explanation": "Penguin is a Bird. Bird has default property Fly=True. Penguin overrides this with Fly=False.",
            "example": "Exception handling in semantic networks requires non-monotonic reasoning."
          },
          {
            "title": "TBox vs ABox in Medical Ontologies",
            "explanation": "TBox axiom: Hepatitis is a Disease of the Liver. ABox assertion: Patient John has Hepatitis.",
            "example": "Automated reasoners infer John has a liver disease without manual tagging."
          }
        ],
        "diagram": "+-- SEMANTIC NETWORK WITH INHERITANCE HIERARCHY --+\\n|              [ Living Thing ]\\n|                     ^\\n|                     | IS-A\\n|                [ Animal ] -----------> [ Has: Breathe ]\\n|                     ^\\n|                     | IS-A\\n|                 [ Bird ] ------------> [ Can: Fly ]\\n|                  /    \\\\\\n|           (IS-A)/      \\\\(IS-A)\\n|          [ Robin ]    [ Penguin ] ------> [ Can: Fly (OVERRIDE: FALSE) ]",
        "applications": [
          "Google Knowledge Graph powering web search entity panels.",
          "Biomedical clinical classification systems (SNOMED-CT).",
          "Enterprise data integration across disparate corporate databases."
        ],
        "examImportantPoints": [
          "Draw a Semantic Network for a university hierarchy (Student, Professor, Course) showing IS-A and HAS-A relationships.",
          "Differentiate TBox and ABox in Description Logics with examples.",
          "Explain the default inheritance override problem in semantic graphs."
        ],
        "quickRevisionNotes": [
          "IS-A defines subclass inheritance; PART-OF defines compositional hierarchy.",
          "Description Logics: TBox (terminology/classes) + ABox (assertions/instances).",
          "RDF: Subject-Predicate-Object triples queryable by SPARQL."
        ]
      }
    }
  },
  {
    "id": "ai-u4-t1",
    "subjectId": "ai",
    "unitId": "ai-u4",
    "unitNumber": 4,
    "unitTitle": "Uncertainty & Probabilistic Reasoning",
    "topicNumber": 1,
    "title": "Probability Theory, Axioms & Bayes Rule in AI",
    "objectives": [
      "Formulate handling of uncertainty in AI agents using Kolmogorov axioms of probability.",
      "Calculate prior, conditional, and marginal probabilities from Full Joint Probability Distributions.",
      "Apply Bayes Rule for diagnostic reasoning combining prior probabilities and evidence likelihood."
    ],
    "keywords": [
      "Uncertainty",
      "Probability",
      "Axioms of Probability",
      "Prior Probability",
      "Conditional Probability",
      "Bayes Rule",
      "Independence",
      "Joint Distribution"
    ],
    "content": {
      "beginner": {
        "summary": "In real-world environments, pure logic fails because agents face incomplete observability, noisy sensors, and non-deterministic actions. Probability T...",
        "theory": "In real-world environments, pure logic fails because agents face incomplete observability, noisy sensors, and non-deterministic actions. Probability Theory provides the mathematical foundation for reasoning under uncertainty. An agent assigns degrees of belief represented as probabilities between 0 and 1. Kolmogorov Axioms dictate: 1. P(A) >= 0 for all events A. 2. P(True) = 1 (and P(False) = 0). 3. P(A v B) = P(A) + P(B) - P(A ^ B). Conditional Probability P(A|B) represents the probability of A given that evidence B is known to have occurred: P(A|B) = P(A ^ B) / P(B).",
        "definitions": [
          {
            "term": "Prior (Unconditional) Probability",
            "definition": "The baseline probability assigned to a proposition in the absence of any other information or evidence."
          },
          {
            "term": "Posterior (Conditional) Probability",
            "definition": "The updated probability assigned to a proposition after accounting for new observable evidence."
          },
          {
            "term": "Bayes Rule",
            "definition": "A mathematical theorem expressing the posterior probability of an event given prior odds and evidence likelihood."
          }
        ],
        "keyConcepts": [
          {
            "title": "Medical Diagnosis via Bayes Rule",
            "explanation": "Meningitis causes stiff neck in 70% of cases (Likelihood). Prior of meningitis is 1/50,000. Prior of stiff neck is 1%. What is P(Meningitis | StiffNeck)?",
            "example": "P = (0.7 * 0.00002) / 0.01 = 0.0014 (0.14%). Even with a stiff neck, meningitis remains rare!"
          },
          {
            "title": "Marginalization Arithmetic",
            "explanation": "To find P(Cavity) from joint distribution over Cavity, Toothache, Catch, sum all entries where Cavity=True regardless of other variables.",
            "example": "Provides exact baseline probability from joint table."
          }
        ],
        "diagram": "+-- BAYES RULE DIAGNOSTIC INFERENCE FORMULA --+\\n| P(Cause | Effect) = [ P(Effect | Cause) * P(Cause) ] / P(Effect)\\n| Posterior         = [ Likelihood        * Prior    ] / Evidence\\n| Where P(Effect)   = P(Effect|Cause)*P(Cause) + P(Effect|~Cause)*P(~Cause)",
        "applications": [
          "Medical diagnostic decision-support engines.",
          "Spam email classification (Naive Bayes filter based on word frequencies).",
          "Automated fraud detection in banking credit card transactions."
        ],
        "examImportantPoints": [
          "State Kolmogorov three axioms of probability.",
          "Solve a complete Bayes Rule numerical problem: calculate posterior probability of disease given a positive lab test result with false-positive and false-negative rates.",
          "Explain how conditional independence reduces the exponential parameters of a full joint distribution."
        ],
        "quickRevisionNotes": [
          "P(A|B) = P(A ^ B) / P(B).",
          "Bayes Rule: P(H|E) = P(E|H) * P(H) / P(E).",
          "Posterior = (Likelihood * Prior) / Evidence.",
          "Joint distribution size 2^n is intractable; independence enables factoring."
        ]
      },
      "intermediate": {
        "summary": "The Full Joint Probability Distribution specifies the probability of every atomic event across all random variables. Marginalization (summing out) com...",
        "theory": "The Full Joint Probability Distribution specifies the probability of every atomic event across all random variables. Marginalization (summing out) computes marginal probabilities: P(Y) = Sum_z P(Y, z). Conditioning rewrites this: P(Y) = Sum_z P(Y|z) * P(z). Bayes Rule is derived from the product rule P(A ^ B) = P(A|B) * P(B) = P(B|A) * P(A):\\nP(Cause | Effect) = [ P(Effect | Cause) * P(Cause) ] / P(Effect).\\nBayes Rule enables Diagnostic Reasoning (inferring hidden causes from observable symptoms) using Causal Knowledge (how often a cause produces a symptom) and Prior Probabilities.",
        "definitions": [
          {
            "term": "Prior (Unconditional) Probability",
            "definition": "The baseline probability assigned to a proposition in the absence of any other information or evidence."
          },
          {
            "term": "Posterior (Conditional) Probability",
            "definition": "The updated probability assigned to a proposition after accounting for new observable evidence."
          },
          {
            "term": "Bayes Rule",
            "definition": "A mathematical theorem expressing the posterior probability of an event given prior odds and evidence likelihood."
          }
        ],
        "keyConcepts": [
          {
            "title": "Medical Diagnosis via Bayes Rule",
            "explanation": "Meningitis causes stiff neck in 70% of cases (Likelihood). Prior of meningitis is 1/50,000. Prior of stiff neck is 1%. What is P(Meningitis | StiffNeck)?",
            "example": "P = (0.7 * 0.00002) / 0.01 = 0.0014 (0.14%). Even with a stiff neck, meningitis remains rare!"
          },
          {
            "title": "Marginalization Arithmetic",
            "explanation": "To find P(Cavity) from joint distribution over Cavity, Toothache, Catch, sum all entries where Cavity=True regardless of other variables.",
            "example": "Provides exact baseline probability from joint table."
          }
        ],
        "diagram": "+-- BAYES RULE DIAGNOSTIC INFERENCE FORMULA --+\\n| P(Cause | Effect) = [ P(Effect | Cause) * P(Cause) ] / P(Effect)\\n| Posterior         = [ Likelihood        * Prior    ] / Evidence\\n| Where P(Effect)   = P(Effect|Cause)*P(Cause) + P(Effect|~Cause)*P(~Cause)",
        "applications": [
          "Medical diagnostic decision-support engines.",
          "Spam email classification (Naive Bayes filter based on word frequencies).",
          "Automated fraud detection in banking credit card transactions."
        ],
        "examImportantPoints": [
          "State Kolmogorov three axioms of probability.",
          "Solve a complete Bayes Rule numerical problem: calculate posterior probability of disease given a positive lab test result with false-positive and false-negative rates.",
          "Explain how conditional independence reduces the exponential parameters of a full joint distribution."
        ],
        "quickRevisionNotes": [
          "P(A|B) = P(A ^ B) / P(B).",
          "Bayes Rule: P(H|E) = P(E|H) * P(H) / P(E).",
          "Posterior = (Likelihood * Prior) / Evidence."
        ]
      },
      "advanced": {
        "summary": "While the Full Joint Distribution contains answers to every probabilistic query, its size scales exponentially as 2^n for n binary variables, making f...",
        "theory": "While the Full Joint Distribution contains answers to every probabilistic query, its size scales exponentially as 2^n for n binary variables, making full joint tables computationally and memory intractable. Independence between variables reduces complexity: if A and B are independent, P(A|B) = P(A), meaning P(A ^ B) = P(A) * P(B). Conditional Independence further decomposes complex joint distributions, forming the mathematical cornerstone of Bayesian Belief Networks.",
        "definitions": [
          {
            "term": "Prior (Unconditional) Probability",
            "definition": "The baseline probability assigned to a proposition in the absence of any other information or evidence."
          },
          {
            "term": "Posterior (Conditional) Probability",
            "definition": "The updated probability assigned to a proposition after accounting for new observable evidence."
          },
          {
            "term": "Bayes Rule",
            "definition": "A mathematical theorem expressing the posterior probability of an event given prior odds and evidence likelihood."
          }
        ],
        "keyConcepts": [
          {
            "title": "Medical Diagnosis via Bayes Rule",
            "explanation": "Meningitis causes stiff neck in 70% of cases (Likelihood). Prior of meningitis is 1/50,000. Prior of stiff neck is 1%. What is P(Meningitis | StiffNeck)?",
            "example": "P = (0.7 * 0.00002) / 0.01 = 0.0014 (0.14%). Even with a stiff neck, meningitis remains rare!"
          },
          {
            "title": "Marginalization Arithmetic",
            "explanation": "To find P(Cavity) from joint distribution over Cavity, Toothache, Catch, sum all entries where Cavity=True regardless of other variables.",
            "example": "Provides exact baseline probability from joint table."
          }
        ],
        "diagram": "+-- BAYES RULE DIAGNOSTIC INFERENCE FORMULA --+\\n| P(Cause | Effect) = [ P(Effect | Cause) * P(Cause) ] / P(Effect)\\n| Posterior         = [ Likelihood        * Prior    ] / Evidence\\n| Where P(Effect)   = P(Effect|Cause)*P(Cause) + P(Effect|~Cause)*P(~Cause)",
        "applications": [
          "Medical diagnostic decision-support engines.",
          "Spam email classification (Naive Bayes filter based on word frequencies).",
          "Automated fraud detection in banking credit card transactions."
        ],
        "examImportantPoints": [
          "State Kolmogorov three axioms of probability.",
          "Solve a complete Bayes Rule numerical problem: calculate posterior probability of disease given a positive lab test result with false-positive and false-negative rates.",
          "Explain how conditional independence reduces the exponential parameters of a full joint distribution."
        ],
        "quickRevisionNotes": [
          "Bayes Rule: P(H|E) = P(E|H) * P(H) / P(E).",
          "Posterior = (Likelihood * Prior) / Evidence.",
          "Joint distribution size 2^n is intractable; independence enables factoring."
        ]
      }
    }
  },
  {
    "id": "ai-u4-t2",
    "subjectId": "ai",
    "unitId": "ai-u4",
    "unitNumber": 4,
    "unitTitle": "Uncertainty & Probabilistic Reasoning",
    "topicNumber": 2,
    "title": "Bayesian Belief Networks (BBN) & Conditional Independence",
    "objectives": [
      "Construct Bayesian Belief Networks (DAG + Conditional Probability Tables).",
      "Evaluate Conditional Independence relationships using the d-separation criterion.",
      "Execute probabilistic inference via Variable Elimination and understand the Markov Blanket."
    ],
    "keywords": [
      "Bayesian Network",
      "BBN",
      "DAG",
      "Conditional Probability Table",
      "CPT",
      "d-separation",
      "Markov Blanket",
      "Inference",
      "Variable Elimination"
    ],
    "content": {
      "beginner": {
        "summary": "A Bayesian Belief Network (BBN) is a probabilistic graphical model that represents a set of random variables and their conditional dependencies via a ...",
        "theory": "A Bayesian Belief Network (BBN) is a probabilistic graphical model that represents a set of random variables and their conditional dependencies via a Directed Acyclic Graph (DAG). The network consists of: 1. Graph Topology: Nodes represent random variables, and directed edges represent direct causal influence (parent to child). 2. Conditional Probability Tables (CPTs): Each node X_i has an associated CPT quantifying P(X_i | Parents(X_i)). The global semantics of a BBN states that the full joint distribution is factored into the product of local conditional distributions: P(X_1, ..., X_n) = Product_i P(X_i | Parents(X_i)).",
        "definitions": [
          {
            "term": "Bayesian Belief Network",
            "definition": "A directed acyclic graph where nodes represent random variables and edges indicate direct conditional dependencies."
          },
          {
            "term": "Conditional Probability Table (CPT)",
            "definition": "A table attached to each BBN node specifying the probability of each node state for every combination of parent states."
          },
          {
            "term": "Markov Blanket",
            "definition": "The minimal set of nodes containing a variable parents, children, and spouses that completely shields it from the rest of the network."
          }
        ],
        "keyConcepts": [
          {
            "title": "Factoring the Joint Distribution",
            "explanation": "In the Burglar Alarm network with 5 binary variables: Full joint requires 2^5 - 1 = 31 parameters. BBN requires only 1+1+4+2+2 = 10 parameters!",
            "example": "Massive reduction in parameter storage and expert elicitation."
          },
          {
            "title": "d-Separation Triads",
            "explanation": "1. Causal chain (A->B->C): A and C independent given B. 2. Common cause (A<-B->C): A and C independent given B. 3. Common effect/Collider (A->B<-C): A and C dependent given B (Explaining Away!).",
            "example": "Colliders reverse standard independence intuition."
          }
        ],
        "diagram": "+-- BURGLAR ALARM BAYESIAN NETWORK (DAG) --+\\n|   [Burglary]      [Earthquake]\\n|        \\\\             /\\n|         v           v\\n|           [ Alarm ]\\n|           /       \\\\\\n|          v         v\\n|     [JohnCalls]  [MaryCalls]\\n| Full Joint: P(B,E,A,J,M) = P(B)*P(E)*P(A|B,E)*P(J|A)*P(M|A)",
        "applications": [
          "Medical disease diagnosis from multi-symptom clusters (QMR-DT).",
          "Predictive aircraft equipment component failure maintenance.",
          "Ecosystem risk assessment in environmental engineering."
        ],
        "examImportantPoints": [
          "Draw the standard Burglary-Alarm network, write down the joint probability factorization, and compute a query like P(B=T | J=T, M=T).",
          "Define the Markov Blanket of a node and list its three constituent member types.",
          "Explain the three d-separation connection structures: Serial, Diverging, and Converging (Collider)."
        ],
        "quickRevisionNotes": [
          "BBN = DAG + CPTs.",
          "Full joint = Product of P(Node | Parents).",
          "Markov Blanket = Parents + Children + Children other parents.",
          "Exact inference is NP-Hard; solved by Variable Elimination or MCMC."
        ]
      },
      "intermediate": {
        "summary": "BBNs drastically compress probability tables: if a node has k parents, its CPT requires 2^k values, yielding total network parameters O(n * 2^k) compa...",
        "theory": "BBNs drastically compress probability tables: if a node has k parents, its CPT requires 2^k values, yielding total network parameters O(n * 2^k) compared to O(2^n) in a full joint distribution. A node is conditionally independent of its non-descendants given its parents. The Markov Blanket of a node X consists of its Parents, its Children, and its Children Other Parents. Conditioned on its Markov Blanket, node X is conditionally independent of all other nodes in the entire network. d-separation (directed separation) is an algorithmic graph procedure that determines if variable set X is independent of Y given evidence Z.",
        "definitions": [
          {
            "term": "Bayesian Belief Network",
            "definition": "A directed acyclic graph where nodes represent random variables and edges indicate direct conditional dependencies."
          },
          {
            "term": "Conditional Probability Table (CPT)",
            "definition": "A table attached to each BBN node specifying the probability of each node state for every combination of parent states."
          },
          {
            "term": "Markov Blanket",
            "definition": "The minimal set of nodes containing a variable parents, children, and spouses that completely shields it from the rest of the network."
          }
        ],
        "keyConcepts": [
          {
            "title": "Factoring the Joint Distribution",
            "explanation": "In the Burglar Alarm network with 5 binary variables: Full joint requires 2^5 - 1 = 31 parameters. BBN requires only 1+1+4+2+2 = 10 parameters!",
            "example": "Massive reduction in parameter storage and expert elicitation."
          },
          {
            "title": "d-Separation Triads",
            "explanation": "1. Causal chain (A->B->C): A and C independent given B. 2. Common cause (A<-B->C): A and C independent given B. 3. Common effect/Collider (A->B<-C): A and C dependent given B (Explaining Away!).",
            "example": "Colliders reverse standard independence intuition."
          }
        ],
        "diagram": "+-- BURGLAR ALARM BAYESIAN NETWORK (DAG) --+\\n|   [Burglary]      [Earthquake]\\n|        \\\\             /\\n|         v           v\\n|           [ Alarm ]\\n|           /       \\\\\\n|          v         v\\n|     [JohnCalls]  [MaryCalls]\\n| Full Joint: P(B,E,A,J,M) = P(B)*P(E)*P(A|B,E)*P(J|A)*P(M|A)",
        "applications": [
          "Medical disease diagnosis from multi-symptom clusters (QMR-DT).",
          "Predictive aircraft equipment component failure maintenance.",
          "Ecosystem risk assessment in environmental engineering."
        ],
        "examImportantPoints": [
          "Draw the standard Burglary-Alarm network, write down the joint probability factorization, and compute a query like P(B=T | J=T, M=T).",
          "Define the Markov Blanket of a node and list its three constituent member types.",
          "Explain the three d-separation connection structures: Serial, Diverging, and Converging (Collider)."
        ],
        "quickRevisionNotes": [
          "BBN = DAG + CPTs.",
          "Full joint = Product of P(Node | Parents).",
          "Markov Blanket = Parents + Children + Children other parents."
        ]
      },
      "advanced": {
        "summary": "Exact inference in Bayesian networks is NP-Hard. Exact algorithms include Enumeration and Variable Elimination (which avoids repeated calculations by ...",
        "theory": "Exact inference in Bayesian networks is NP-Hard. Exact algorithms include Enumeration and Variable Elimination (which avoids repeated calculations by caching intermediate factor products via dynamic programming). For complex high-dimensional networks, Approximate Inference is employed using Markov Chain Monte Carlo (MCMC), Gibbs Sampling, and Likelihood Weighting algorithms.",
        "definitions": [
          {
            "term": "Bayesian Belief Network",
            "definition": "A directed acyclic graph where nodes represent random variables and edges indicate direct conditional dependencies."
          },
          {
            "term": "Conditional Probability Table (CPT)",
            "definition": "A table attached to each BBN node specifying the probability of each node state for every combination of parent states."
          },
          {
            "term": "Markov Blanket",
            "definition": "The minimal set of nodes containing a variable parents, children, and spouses that completely shields it from the rest of the network."
          }
        ],
        "keyConcepts": [
          {
            "title": "Factoring the Joint Distribution",
            "explanation": "In the Burglar Alarm network with 5 binary variables: Full joint requires 2^5 - 1 = 31 parameters. BBN requires only 1+1+4+2+2 = 10 parameters!",
            "example": "Massive reduction in parameter storage and expert elicitation."
          },
          {
            "title": "d-Separation Triads",
            "explanation": "1. Causal chain (A->B->C): A and C independent given B. 2. Common cause (A<-B->C): A and C independent given B. 3. Common effect/Collider (A->B<-C): A and C dependent given B (Explaining Away!).",
            "example": "Colliders reverse standard independence intuition."
          }
        ],
        "diagram": "+-- BURGLAR ALARM BAYESIAN NETWORK (DAG) --+\\n|   [Burglary]      [Earthquake]\\n|        \\\\             /\\n|         v           v\\n|           [ Alarm ]\\n|           /       \\\\\\n|          v         v\\n|     [JohnCalls]  [MaryCalls]\\n| Full Joint: P(B,E,A,J,M) = P(B)*P(E)*P(A|B,E)*P(J|A)*P(M|A)",
        "applications": [
          "Medical disease diagnosis from multi-symptom clusters (QMR-DT).",
          "Predictive aircraft equipment component failure maintenance.",
          "Ecosystem risk assessment in environmental engineering."
        ],
        "examImportantPoints": [
          "Draw the standard Burglary-Alarm network, write down the joint probability factorization, and compute a query like P(B=T | J=T, M=T).",
          "Define the Markov Blanket of a node and list its three constituent member types.",
          "Explain the three d-separation connection structures: Serial, Diverging, and Converging (Collider)."
        ],
        "quickRevisionNotes": [
          "Full joint = Product of P(Node | Parents).",
          "Markov Blanket = Parents + Children + Children other parents.",
          "Exact inference is NP-Hard; solved by Variable Elimination or MCMC."
        ]
      }
    }
  },
  {
    "id": "ai-u4-t3",
    "subjectId": "ai",
    "unitId": "ai-u4",
    "unitNumber": 4,
    "unitTitle": "Uncertainty & Probabilistic Reasoning",
    "topicNumber": 3,
    "title": "Markov Decision Processes (MDP), Bellman Equations & Reinforcement Fundamentals",
    "objectives": [
      "Formulate sequential decision-making problems under uncertainty as Markov Decision Processes (S, A, T, R, gamma).",
      "Derive and solve Bellman Expectation and Bellman Optimality Equations.",
      "Execute Value Iteration and Policy Iteration dynamic programming algorithms."
    ],
    "keywords": [
      "MDP",
      "Markov Decision Process",
      "Markov Property",
      "Bellman Equation",
      "Value Iteration",
      "Policy Iteration",
      "Reward Function",
      "Discount Factor",
      "Reinforcement Learning"
    ],
    "content": {
      "beginner": {
        "summary": "A Markov Decision Process (MDP) formalizes sequential decision making for an agent in a stochastic environment where outcomes are partially random and...",
        "theory": "A Markov Decision Process (MDP) formalizes sequential decision making for an agent in a stochastic environment where outcomes are partially random and partially under the control of the agent. An MDP is defined by a 5-tuple (S, A, T, R, gamma): 1. States (S): Set of all valid world states. 2. Actions (A): Available actions. 3. Transition Model T(s, a, s`): Probability P(s` | s, a) of transitioning to state s` given action a in state s. 4. Reward Function R(s, a, s`): Immediate scalar reward received after transition. 5. Discount Factor gamma in [0, 1]: Weighs immediate rewards versus future long-term rewards (gamma^t * R_t).",
        "definitions": [
          {
            "term": "Markov Property",
            "definition": "The memoryless property of a stochastic process where conditional probability of future states depends only on present state and not past history."
          },
          {
            "term": "Discount Factor (gamma)",
            "definition": "A scalar between 0 and 1 that discounts future rewards, ensuring mathematical convergence in infinite-horizon tasks."
          },
          {
            "term": "Policy (pi)",
            "definition": "A mapping or decision function that specifies the action an agent should take in each state."
          }
        ],
        "keyConcepts": [
          {
            "title": "Role of Discount Factor gamma",
            "explanation": "When gamma=0, agent is purely myopic (cares only about immediate next reward). When gamma approaches 1, agent values distant future payoffs.",
            "example": "Setting gamma=0.99 enables learning long-term financial or navigational strategies."
          },
          {
            "title": "Value Iteration vs Policy Iteration",
            "explanation": "Value iteration converges values slowly over many numeric sweeps. Policy iteration converges in fewer iterations because policies often freeze before values finalize.",
            "example": "Policy iteration solves a linear system of equations in each evaluation phase."
          }
        ],
        "diagram": "+-- VALUE ITERATION BACKUP BELLMAN DIAGRAM --+\\n| State s\\n|    |\\n|    +---- Action a1 ----> [Transition Prob T(s,a1,s`)] ---> State s` (Reward R + gamma*V(s`))\\n|    +---- Action a2\\n| V*(s) = max_a Sum_{s`} T(s,a,s`) [ R(s,a,s`) + gamma * V*(s`) ]",
        "applications": [
          "Autonomous drone hovering and trajectory navigation.",
          "Automated heating/cooling building climate HVAC control optimization.",
          "Game playing AI (DeepMind AlphaGo reinforcement learning pipeline)."
        ],
        "examImportantPoints": [
          "Write the 5-tuple defining a Markov Decision Process (S, A, T, R, gamma) and state the Markov Property.",
          "State the Bellman Optimality Equation for V*(s) and explain each term.",
          "Execute one complete step of Value Iteration for a grid-world state given transition probabilities and rewards."
        ],
        "quickRevisionNotes": [
          "MDP: (S, A, T, R, gamma).",
          "Markov property: Future depends only on present, not past.",
          "Bellman Optimality: V*(s) = max_a Sum T(s,a,s`) [R + gamma*V*(s`)].",
          "Value iteration updates values; Policy iteration updates policies."
        ]
      },
      "intermediate": {
        "summary": "The Markov Property asserts that the future state depends only on the current state and action, independent of the historical path: P(S_{t+1} | S_t, A...",
        "theory": "The Markov Property asserts that the future state depends only on the current state and action, independent of the historical path: P(S_{t+1} | S_t, A_t, ..., S_0) = P(S_{t+1} | S_t, A_t). A Policy pi(s) specifies the action the agent chooses in state s. The Value Function V^pi(s) represents the expected cumulative discounted reward starting in s following policy pi. The Bellman Optimality Equation defines optimal value V*(s):\\nV*(s) = max_a Sum_{s`} T(s, a, s`) * [ R(s, a, s`) + gamma * V*(s`) ].\\nDynamic programming algorithms solve MDPs: 1. Value Iteration: Iteratively updates state values until convergence (|V_{k+1} - V_k| < epsilon(1-gamma)/gamma). 2. Policy Iteration: Alternates between Policy Evaluation (calculating V for current pi) and Policy Improvement (updating pi greedily).",
        "definitions": [
          {
            "term": "Markov Property",
            "definition": "The memoryless property of a stochastic process where conditional probability of future states depends only on present state and not past history."
          },
          {
            "term": "Discount Factor (gamma)",
            "definition": "A scalar between 0 and 1 that discounts future rewards, ensuring mathematical convergence in infinite-horizon tasks."
          },
          {
            "term": "Policy (pi)",
            "definition": "A mapping or decision function that specifies the action an agent should take in each state."
          }
        ],
        "keyConcepts": [
          {
            "title": "Role of Discount Factor gamma",
            "explanation": "When gamma=0, agent is purely myopic (cares only about immediate next reward). When gamma approaches 1, agent values distant future payoffs.",
            "example": "Setting gamma=0.99 enables learning long-term financial or navigational strategies."
          },
          {
            "title": "Value Iteration vs Policy Iteration",
            "explanation": "Value iteration converges values slowly over many numeric sweeps. Policy iteration converges in fewer iterations because policies often freeze before values finalize.",
            "example": "Policy iteration solves a linear system of equations in each evaluation phase."
          }
        ],
        "diagram": "+-- VALUE ITERATION BACKUP BELLMAN DIAGRAM --+\\n| State s\\n|    |\\n|    +---- Action a1 ----> [Transition Prob T(s,a1,s`)] ---> State s` (Reward R + gamma*V(s`))\\n|    +---- Action a2\\n| V*(s) = max_a Sum_{s`} T(s,a,s`) [ R(s,a,s`) + gamma * V*(s`) ]",
        "applications": [
          "Autonomous drone hovering and trajectory navigation.",
          "Automated heating/cooling building climate HVAC control optimization.",
          "Game playing AI (DeepMind AlphaGo reinforcement learning pipeline)."
        ],
        "examImportantPoints": [
          "Write the 5-tuple defining a Markov Decision Process (S, A, T, R, gamma) and state the Markov Property.",
          "State the Bellman Optimality Equation for V*(s) and explain each term.",
          "Execute one complete step of Value Iteration for a grid-world state given transition probabilities and rewards."
        ],
        "quickRevisionNotes": [
          "MDP: (S, A, T, R, gamma).",
          "Markov property: Future depends only on present, not past.",
          "Bellman Optimality: V*(s) = max_a Sum T(s,a,s`) [R + gamma*V*(s`)]."
        ]
      },
      "advanced": {
        "summary": "When the transition probabilities T and reward model R are unknown, the problem transitions from Planning (MDP) to Reinforcement Learning (RL). Model-...",
        "theory": "When the transition probabilities T and reward model R are unknown, the problem transitions from Planning (MDP) to Reinforcement Learning (RL). Model-Free RL algorithms learn directly from experience: Q-Learning uses temporal difference errors to learn action-value functions Q(s, a) off-policy, while SARSA learns on-policy. Deep Q-Networks (DQN) substitute neural networks for Q-tables to master high-dimensional video game environments (Atari, robotics).",
        "definitions": [
          {
            "term": "Markov Property",
            "definition": "The memoryless property of a stochastic process where conditional probability of future states depends only on present state and not past history."
          },
          {
            "term": "Discount Factor (gamma)",
            "definition": "A scalar between 0 and 1 that discounts future rewards, ensuring mathematical convergence in infinite-horizon tasks."
          },
          {
            "term": "Policy (pi)",
            "definition": "A mapping or decision function that specifies the action an agent should take in each state."
          }
        ],
        "keyConcepts": [
          {
            "title": "Role of Discount Factor gamma",
            "explanation": "When gamma=0, agent is purely myopic (cares only about immediate next reward). When gamma approaches 1, agent values distant future payoffs.",
            "example": "Setting gamma=0.99 enables learning long-term financial or navigational strategies."
          },
          {
            "title": "Value Iteration vs Policy Iteration",
            "explanation": "Value iteration converges values slowly over many numeric sweeps. Policy iteration converges in fewer iterations because policies often freeze before values finalize.",
            "example": "Policy iteration solves a linear system of equations in each evaluation phase."
          }
        ],
        "diagram": "+-- VALUE ITERATION BACKUP BELLMAN DIAGRAM --+\\n| State s\\n|    |\\n|    +---- Action a1 ----> [Transition Prob T(s,a1,s`)] ---> State s` (Reward R + gamma*V(s`))\\n|    +---- Action a2\\n| V*(s) = max_a Sum_{s`} T(s,a,s`) [ R(s,a,s`) + gamma * V*(s`) ]",
        "applications": [
          "Autonomous drone hovering and trajectory navigation.",
          "Automated heating/cooling building climate HVAC control optimization.",
          "Game playing AI (DeepMind AlphaGo reinforcement learning pipeline)."
        ],
        "examImportantPoints": [
          "Write the 5-tuple defining a Markov Decision Process (S, A, T, R, gamma) and state the Markov Property.",
          "State the Bellman Optimality Equation for V*(s) and explain each term.",
          "Execute one complete step of Value Iteration for a grid-world state given transition probabilities and rewards."
        ],
        "quickRevisionNotes": [
          "Markov property: Future depends only on present, not past.",
          "Bellman Optimality: V*(s) = max_a Sum T(s,a,s`) [R + gamma*V*(s`)].",
          "Value iteration updates values; Policy iteration updates policies."
        ]
      }
    }
  },
  {
    "id": "ai-u5-t1",
    "subjectId": "ai",
    "unitId": "ai-u5",
    "unitNumber": 5,
    "unitTitle": "Machine Learning & AI Ethics",
    "topicNumber": 1,
    "title": "Supervised, Unsupervised & Reinforcement Learning Paradigms",
    "objectives": [
      "Differentiate Supervised, Unsupervised, and Reinforcement learning paradigms with training inputs and task objectives.",
      "Evaluate Regression vs Classification algorithms and metrics (MSE, Accuracy, Precision, Recall, F1).",
      "Analyze the Bias-Variance Trade-off, Overfitting, and Regularization (L1 Lasso, L2 Ridge)."
    ],
    "keywords": [
      "Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Classification",
      "Regression",
      "Clustering",
      "Overfitting",
      "Bias-Variance"
    ],
    "content": {
      "beginner": {
        "summary": "Machine Learning enables computers to learn from experience data without being explicitly programmed. The three core learning paradigms are: 1. Superv...",
        "theory": "Machine Learning enables computers to learn from experience data without being explicitly programmed. The three core learning paradigms are: 1. Supervised Learning: The algorithm is trained on labeled data pairs (input x, target output y). If y is continuous, the task is Regression (e.g. house price prediction); if y is categorical, the task is Classification (e.g. spam detection). 2. Unsupervised Learning: The algorithm discovers latent patterns, groupings, or representations in unlabeled data (e.g. K-Means clustering, PCA dimensionality reduction). 3. Reinforcement Learning: An agent learns optimal behavior through trial-and-error interaction with a dynamic environment via rewards and penalties.",
        "definitions": [
          {
            "term": "Overfitting",
            "definition": "A machine learning failure where a model fits training data too closely, capturing noise and failing to generalize to new data."
          },
          {
            "term": "Bias-Variance Trade-Off",
            "definition": "The conflict in machine learning between minimizing estimation error due to simplistic assumptions (bias) vs sensitivity to data fluctuations (variance)."
          },
          {
            "term": "Regularization",
            "definition": "Techniques that add penalty terms to the loss function (L1/L2) to prevent parameters from growing excessively large and causing overfitting."
          }
        ],
        "keyConcepts": [
          {
            "title": "Confusion Matrix Metrics",
            "explanation": "Accuracy = (TP+TN)/(Total). Precision = TP/(TP+FP) (quality of positive claims). Recall = TP/(TP+FN) (fraction of actual positives caught).",
            "example": "In cancer detection, high Recall is prioritized over Precision to avoid missed diagnoses."
          },
          {
            "title": "L1 vs L2 Regularization Behavior",
            "explanation": "L2 (Ridge) squares weights, shrinking all weights smoothly. L1 (Lasso) uses absolute values, creating diamond constraint corners that zero out weights.",
            "example": "L1 acts as automatic feature selection."
          }
        ],
        "diagram": "+-- THE 3 MACHINE LEARNING PARADIGMS --+\\n| SUPERVISED:   Labeled Data (x, y)      -> Predict Target y (Classification/Regression)\\n| UNSUPERVISED: Unlabeled Data (x)       -> Discover Structure (Clustering/Dimensionality)\\n| REINFORCEMENT: Environment Interaction -> Maximize Cumulative Reward (Agent Policy)",
        "applications": [
          "Customer segmentation using K-Means clustering.",
          "Credit card default prediction using logistic regression.",
          "Autonomous robotic manipulation using Deep Reinforcement Learning."
        ],
        "examImportantPoints": [
          "Compare Supervised, Unsupervised, and Reinforcement Learning across: input data, feedback mechanism, and typical applications.",
          "Explain the Bias-Variance Trade-off and how L1/L2 regularization mitigates overfitting.",
          "Given a confusion matrix, calculate Accuracy, Precision, Recall, and F1-Score."
        ],
        "quickRevisionNotes": [
          "Supervised: Labeled data (Classification & Regression).",
          "Unsupervised: Unlabeled data (Clustering & Dimensionality Reduction).",
          "Reinforcement: Trial-and-error reward maximization.",
          "Overfitting = High variance; Underfitting = High bias."
        ]
      },
      "intermediate": {
        "summary": "Generalization is the central goal of machine learning: model performance on unseen test data. Overfitting occurs when a complex model memorizes train...",
        "theory": "Generalization is the central goal of machine learning: model performance on unseen test data. Overfitting occurs when a complex model memorizes training noise, achieving zero training error but high test error. Underfitting occurs when a model is too simple to capture underlying patterns. The Bias-Variance Trade-off formalizes total expected prediction error as: Error = Bias^2 + Variance + Irreducible Error. High bias indicates underfitting; high variance indicates overfitting. Regularization constrains model complexity by adding a penalty to the loss function: L2 Ridge (adds sum of squared weights, shrinking coefficients) and L1 Lasso (adds sum of absolute weights, driving irrelevant coefficients to zero for feature selection).",
        "definitions": [
          {
            "term": "Overfitting",
            "definition": "A machine learning failure where a model fits training data too closely, capturing noise and failing to generalize to new data."
          },
          {
            "term": "Bias-Variance Trade-Off",
            "definition": "The conflict in machine learning between minimizing estimation error due to simplistic assumptions (bias) vs sensitivity to data fluctuations (variance)."
          },
          {
            "term": "Regularization",
            "definition": "Techniques that add penalty terms to the loss function (L1/L2) to prevent parameters from growing excessively large and causing overfitting."
          }
        ],
        "keyConcepts": [
          {
            "title": "Confusion Matrix Metrics",
            "explanation": "Accuracy = (TP+TN)/(Total). Precision = TP/(TP+FP) (quality of positive claims). Recall = TP/(TP+FN) (fraction of actual positives caught).",
            "example": "In cancer detection, high Recall is prioritized over Precision to avoid missed diagnoses."
          },
          {
            "title": "L1 vs L2 Regularization Behavior",
            "explanation": "L2 (Ridge) squares weights, shrinking all weights smoothly. L1 (Lasso) uses absolute values, creating diamond constraint corners that zero out weights.",
            "example": "L1 acts as automatic feature selection."
          }
        ],
        "diagram": "+-- THE 3 MACHINE LEARNING PARADIGMS --+\\n| SUPERVISED:   Labeled Data (x, y)      -> Predict Target y (Classification/Regression)\\n| UNSUPERVISED: Unlabeled Data (x)       -> Discover Structure (Clustering/Dimensionality)\\n| REINFORCEMENT: Environment Interaction -> Maximize Cumulative Reward (Agent Policy)",
        "applications": [
          "Customer segmentation using K-Means clustering.",
          "Credit card default prediction using logistic regression.",
          "Autonomous robotic manipulation using Deep Reinforcement Learning."
        ],
        "examImportantPoints": [
          "Compare Supervised, Unsupervised, and Reinforcement Learning across: input data, feedback mechanism, and typical applications.",
          "Explain the Bias-Variance Trade-off and how L1/L2 regularization mitigates overfitting.",
          "Given a confusion matrix, calculate Accuracy, Precision, Recall, and F1-Score."
        ],
        "quickRevisionNotes": [
          "Supervised: Labeled data (Classification & Regression).",
          "Unsupervised: Unlabeled data (Clustering & Dimensionality Reduction).",
          "Reinforcement: Trial-and-error reward maximization."
        ]
      },
      "advanced": {
        "summary": "Semi-Supervised Learning and Self-Supervised Learning (SSL) bridge the gap between supervised and unsupervised learning. In SSL (which powers modern L...",
        "theory": "Semi-Supervised Learning and Self-Supervised Learning (SSL) bridge the gap between supervised and unsupervised learning. In SSL (which powers modern Large Language Models and Foundation Models), the system masks parts of unlabeled text or images and trains a neural network to predict the masked content, learning rich contextual representations without expensive human annotation.",
        "definitions": [
          {
            "term": "Overfitting",
            "definition": "A machine learning failure where a model fits training data too closely, capturing noise and failing to generalize to new data."
          },
          {
            "term": "Bias-Variance Trade-Off",
            "definition": "The conflict in machine learning between minimizing estimation error due to simplistic assumptions (bias) vs sensitivity to data fluctuations (variance)."
          },
          {
            "term": "Regularization",
            "definition": "Techniques that add penalty terms to the loss function (L1/L2) to prevent parameters from growing excessively large and causing overfitting."
          }
        ],
        "keyConcepts": [
          {
            "title": "Confusion Matrix Metrics",
            "explanation": "Accuracy = (TP+TN)/(Total). Precision = TP/(TP+FP) (quality of positive claims). Recall = TP/(TP+FN) (fraction of actual positives caught).",
            "example": "In cancer detection, high Recall is prioritized over Precision to avoid missed diagnoses."
          },
          {
            "title": "L1 vs L2 Regularization Behavior",
            "explanation": "L2 (Ridge) squares weights, shrinking all weights smoothly. L1 (Lasso) uses absolute values, creating diamond constraint corners that zero out weights.",
            "example": "L1 acts as automatic feature selection."
          }
        ],
        "diagram": "+-- THE 3 MACHINE LEARNING PARADIGMS --+\\n| SUPERVISED:   Labeled Data (x, y)      -> Predict Target y (Classification/Regression)\\n| UNSUPERVISED: Unlabeled Data (x)       -> Discover Structure (Clustering/Dimensionality)\\n| REINFORCEMENT: Environment Interaction -> Maximize Cumulative Reward (Agent Policy)",
        "applications": [
          "Customer segmentation using K-Means clustering.",
          "Credit card default prediction using logistic regression.",
          "Autonomous robotic manipulation using Deep Reinforcement Learning."
        ],
        "examImportantPoints": [
          "Compare Supervised, Unsupervised, and Reinforcement Learning across: input data, feedback mechanism, and typical applications.",
          "Explain the Bias-Variance Trade-off and how L1/L2 regularization mitigates overfitting.",
          "Given a confusion matrix, calculate Accuracy, Precision, Recall, and F1-Score."
        ],
        "quickRevisionNotes": [
          "Unsupervised: Unlabeled data (Clustering & Dimensionality Reduction).",
          "Reinforcement: Trial-and-error reward maximization.",
          "Overfitting = High variance; Underfitting = High bias."
        ]
      }
    }
  },
  {
    "id": "ai-u5-t2",
    "subjectId": "ai",
    "unitId": "ai-u5",
    "unitNumber": 5,
    "unitTitle": "Machine Learning & AI Ethics",
    "topicNumber": 2,
    "title": "Artificial Neural Networks, Perceptrons & Backpropagation",
    "objectives": [
      "Analyze Rosenblatt Single-Layer Perceptron architecture, decision boundaries, and Minsky-Papert XOR limitation.",
      "Compare activation functions: Sigmoid, Hyperbolic Tangent (Tanh), and Rectified Linear Unit (ReLU).",
      "Derive the Backpropagation algorithm using calculus chain rule and stochastic gradient descent."
    ],
    "keywords": [
      "Neural Networks",
      "Perceptron",
      "Activation Function",
      "Sigmoid",
      "ReLU",
      "Multi-Layer Perceptron",
      "Backpropagation",
      "Gradient Descent",
      "XOR Problem"
    ],
    "content": {
      "beginner": {
        "summary": "Artificial Neural Networks (ANNs) are computational models inspired by biological neural structures in the human brain. The fundamental building block...",
        "theory": "Artificial Neural Networks (ANNs) are computational models inspired by biological neural structures in the human brain. The fundamental building block is the Artificial Neuron (Perceptron), developed by Frank Rosenblatt (1958). A perceptron computes a weighted sum of its inputs plus a bias: z = Sum(w_i * x_i) + b. This sum is passed through an Activation Function g(z) to produce the output. While a single-layer perceptron can learn any linearly separable function (such as AND and OR), Marvin Minsky and Seymour Papert proved in 1969 that it cannot learn non-linearly separable functions like XOR, triggering the first AI Winter. Overcoming this requires Multi-Layer Perceptrons (MLP) with non-linear activation functions.",
        "definitions": [
          {
            "term": "Perceptron",
            "definition": "A mathematical model of a biological neuron that takes weighted inputs, sums them with a bias, and passes the result through an activation function."
          },
          {
            "term": "Vanishing Gradient Problem",
            "definition": "A training failure where gradients become exponentially small as they backpropagate through deep layers, stalling weight updates."
          },
          {
            "term": "Backpropagation",
            "definition": "An efficient algorithm for calculating the gradient of the loss function with respect to all neural network weights using the chain rule."
          }
        ],
        "keyConcepts": [
          {
            "title": "The XOR Non-Linearity Problem",
            "explanation": "XOR outputs 1 only when inputs differ: (0,1) and (1,0) are true; (0,0) and (1,1) are false. No single linear line can separate these in 2D space.",
            "example": "Adding a hidden layer with 2 neurons transforms the feature space into a linearly separable representation."
          },
          {
            "title": "Calculus Chain Rule in Backpropagation",
            "explanation": "To update weight w_jk between hidden neuron j and output k: dLoss/dw_jk = (dLoss/dOutput_k) * (dOutput_k/dSum_k) * (dSum_k/dw_jk).",
            "example": "Enables automated reverse-mode automatic differentiation."
          }
        ],
        "diagram": "+-- ARTIFICIAL NEURON ARCHITECTURE & BACKPROPAGATION --+\\n| Inputs:       Weights:                  Activation:\\n|   x1 ----------> w1 ----\\\\\\n|   x2 ----------> w2 ------> [ Sum: w.x + b ] ---> [ g(z) ] ---> Output y_hat\\n|   xn ----------> wn ----/\\n|                                                 |\\n|                                                 v\\n| Error E = (y - y_hat)^2 <-----------------------+\\n| Backward Pass: dE/dw_i = (dE/dy_hat) * (dy_hat/dz) * (dz/dw_i) [Chain Rule!]",
        "applications": [
          "Image recognition and classification using deep convolutional neural networks.",
          "Speech-to-text acoustic modeling in digital voice assistants.",
          "Predictive time-series forecasting in energy and stock markets."
        ],
        "examImportantPoints": [
          "Draw the architecture of an artificial neuron and explain the role of weights, bias, and activation function.",
          "Explain why a single-layer perceptron cannot solve the XOR problem and how a multi-layer perceptron resolves it.",
          "Derive the weight update rule for backpropagation using the calculus chain rule for squared error loss."
        ],
        "quickRevisionNotes": [
          "Single layer perceptron only solves linearly separable problems (cannot do XOR).",
          "Multi-layer perceptron (MLP) with non-linear activations overcomes XOR limitation.",
          "ReLU: max(0, z); avoids vanishing gradient.",
          "Backpropagation applies chain rule backwards to compute dE/dw for gradient descent."
        ]
      },
      "intermediate": {
        "summary": "Activation functions introduce non-linearity into networks: 1. Sigmoid: sigma(z) = 1 / (1 + e^-z), squashes output to (0, 1), but suffers from Vanishi...",
        "theory": "Activation functions introduce non-linearity into networks: 1. Sigmoid: sigma(z) = 1 / (1 + e^-z), squashes output to (0, 1), but suffers from Vanishing Gradients for large inputs. 2. Tanh: squashes output to (-1, +1), zero-centered. 3. ReLU (Rectified Linear Unit): f(z) = max(0, z), solves vanishing gradient for positive activations, speeds up gradient descent convergence, and is the modern standard for hidden layers. The Backpropagation Algorithm trains MLPs using Gradient Descent: it computes the partial derivative of the loss function with respect to every weight in the network by applying the Calculus Chain Rule backwards from the output layer to the input layer.",
        "definitions": [
          {
            "term": "Perceptron",
            "definition": "A mathematical model of a biological neuron that takes weighted inputs, sums them with a bias, and passes the result through an activation function."
          },
          {
            "term": "Vanishing Gradient Problem",
            "definition": "A training failure where gradients become exponentially small as they backpropagate through deep layers, stalling weight updates."
          },
          {
            "term": "Backpropagation",
            "definition": "An efficient algorithm for calculating the gradient of the loss function with respect to all neural network weights using the chain rule."
          }
        ],
        "keyConcepts": [
          {
            "title": "The XOR Non-Linearity Problem",
            "explanation": "XOR outputs 1 only when inputs differ: (0,1) and (1,0) are true; (0,0) and (1,1) are false. No single linear line can separate these in 2D space.",
            "example": "Adding a hidden layer with 2 neurons transforms the feature space into a linearly separable representation."
          },
          {
            "title": "Calculus Chain Rule in Backpropagation",
            "explanation": "To update weight w_jk between hidden neuron j and output k: dLoss/dw_jk = (dLoss/dOutput_k) * (dOutput_k/dSum_k) * (dSum_k/dw_jk).",
            "example": "Enables automated reverse-mode automatic differentiation."
          }
        ],
        "diagram": "+-- ARTIFICIAL NEURON ARCHITECTURE & BACKPROPAGATION --+\\n| Inputs:       Weights:                  Activation:\\n|   x1 ----------> w1 ----\\\\\\n|   x2 ----------> w2 ------> [ Sum: w.x + b ] ---> [ g(z) ] ---> Output y_hat\\n|   xn ----------> wn ----/\\n|                                                 |\\n|                                                 v\\n| Error E = (y - y_hat)^2 <-----------------------+\\n| Backward Pass: dE/dw_i = (dE/dy_hat) * (dy_hat/dz) * (dz/dw_i) [Chain Rule!]",
        "applications": [
          "Image recognition and classification using deep convolutional neural networks.",
          "Speech-to-text acoustic modeling in digital voice assistants.",
          "Predictive time-series forecasting in energy and stock markets."
        ],
        "examImportantPoints": [
          "Draw the architecture of an artificial neuron and explain the role of weights, bias, and activation function.",
          "Explain why a single-layer perceptron cannot solve the XOR problem and how a multi-layer perceptron resolves it.",
          "Derive the weight update rule for backpropagation using the calculus chain rule for squared error loss."
        ],
        "quickRevisionNotes": [
          "Single layer perceptron only solves linearly separable problems (cannot do XOR).",
          "Multi-layer perceptron (MLP) with non-linear activations overcomes XOR limitation.",
          "ReLU: max(0, z); avoids vanishing gradient."
        ]
      },
      "advanced": {
        "summary": "The Universal Approximation Theorem (Cybenko, 1989) proves that a standard feedforward neural network with a single hidden layer containing a finite n...",
        "theory": "The Universal Approximation Theorem (Cybenko, 1989) proves that a standard feedforward neural network with a single hidden layer containing a finite number of non-linear neurons can approximate any continuous function on compact subsets of R^n to arbitrary precision. Modern optimization enhancements include Momentum, Adam (Adaptive Moment Estimation), Dropout (randomly deactivating neurons during training to prevent co-adaptation), and Batch Normalization.",
        "definitions": [
          {
            "term": "Perceptron",
            "definition": "A mathematical model of a biological neuron that takes weighted inputs, sums them with a bias, and passes the result through an activation function."
          },
          {
            "term": "Vanishing Gradient Problem",
            "definition": "A training failure where gradients become exponentially small as they backpropagate through deep layers, stalling weight updates."
          },
          {
            "term": "Backpropagation",
            "definition": "An efficient algorithm for calculating the gradient of the loss function with respect to all neural network weights using the chain rule."
          }
        ],
        "keyConcepts": [
          {
            "title": "The XOR Non-Linearity Problem",
            "explanation": "XOR outputs 1 only when inputs differ: (0,1) and (1,0) are true; (0,0) and (1,1) are false. No single linear line can separate these in 2D space.",
            "example": "Adding a hidden layer with 2 neurons transforms the feature space into a linearly separable representation."
          },
          {
            "title": "Calculus Chain Rule in Backpropagation",
            "explanation": "To update weight w_jk between hidden neuron j and output k: dLoss/dw_jk = (dLoss/dOutput_k) * (dOutput_k/dSum_k) * (dSum_k/dw_jk).",
            "example": "Enables automated reverse-mode automatic differentiation."
          }
        ],
        "diagram": "+-- ARTIFICIAL NEURON ARCHITECTURE & BACKPROPAGATION --+\\n| Inputs:       Weights:                  Activation:\\n|   x1 ----------> w1 ----\\\\\\n|   x2 ----------> w2 ------> [ Sum: w.x + b ] ---> [ g(z) ] ---> Output y_hat\\n|   xn ----------> wn ----/\\n|                                                 |\\n|                                                 v\\n| Error E = (y - y_hat)^2 <-----------------------+\\n| Backward Pass: dE/dw_i = (dE/dy_hat) * (dy_hat/dz) * (dz/dw_i) [Chain Rule!]",
        "applications": [
          "Image recognition and classification using deep convolutional neural networks.",
          "Speech-to-text acoustic modeling in digital voice assistants.",
          "Predictive time-series forecasting in energy and stock markets."
        ],
        "examImportantPoints": [
          "Draw the architecture of an artificial neuron and explain the role of weights, bias, and activation function.",
          "Explain why a single-layer perceptron cannot solve the XOR problem and how a multi-layer perceptron resolves it.",
          "Derive the weight update rule for backpropagation using the calculus chain rule for squared error loss."
        ],
        "quickRevisionNotes": [
          "Multi-layer perceptron (MLP) with non-linear activations overcomes XOR limitation.",
          "ReLU: max(0, z); avoids vanishing gradient.",
          "Backpropagation applies chain rule backwards to compute dE/dw for gradient descent."
        ]
      }
    }
  },
  {
    "id": "ai-u5-t3",
    "subjectId": "ai",
    "unitId": "ai-u5",
    "unitNumber": 5,
    "unitTitle": "Machine Learning & AI Ethics",
    "topicNumber": 3,
    "title": "Ethics of AI, Algorithmic Bias, Safety & Governance",
    "objectives": [
      "Analyze sources of algorithmic bias in data collection, historical inequities, and proxy features.",
      "Evaluate Explainable AI (XAI) mechanisms: LIME, SHAP, and interpretability vs accuracy trade-offs.",
      "Formulate frameworks for AI alignment, lethal autonomous weapons, deepfakes, and global regulatory governance."
    ],
    "keywords": [
      "AI Ethics",
      "Algorithmic Bias",
      "Fairness",
      "Transparency",
      "Explainability",
      "XAI",
      "Privacy",
      "Alignment",
      "Accountability",
      "Deepfakes"
    ],
    "content": {
      "beginner": {
        "summary": "As AI systems are deployed in consequential high-stakes domains (criminal justice, healthcare, hiring, lending, surveillance), ethical governance beco...",
        "theory": "As AI systems are deployed in consequential high-stakes domains (criminal justice, healthcare, hiring, lending, surveillance), ethical governance becomes critical. Algorithmic Bias arises when an AI system produces systematically prejudiced results that unfairly disadvantage protected demographic groups. Bias does not stem from machine malice; it reflects historical prejudices embedded in training datasets, unrepresentative sampling, or proxy variables (e.g., using postal zip codes as proxies for race in loan underwriting). Ethical AI requires Fairness, Transparency, Accountability, Privacy protection, and Safety.",
        "definitions": [
          {
            "term": "Algorithmic Bias",
            "definition": "Systematic, repeatable errors in a computer system that generate unfair outcomes, such as privileging one demographic category over another."
          },
          {
            "term": "Explainable AI (XAI)",
            "definition": "Methods and techniques in the application of AI such that the results of the solution can be understood and audited by human experts."
          },
          {
            "term": "AI Alignment",
            "definition": "The subfield of AI safety aiming to steer AI systems towards their designers intended human goals and ethical principles without unintended harms."
          }
        ],
        "keyConcepts": [
          {
            "title": "The COMPAS Recidivism Bias Case",
            "explanation": "A recidivism prediction algorithm used in US courts exhibited racial bias: Black defendants were misclassified as high risk at twice the rate of white defendants.",
            "example": "Mathematical definitions of fairness (Equal Opportunity vs Predictive Parity) are often mutually incompatible."
          },
          {
            "title": "Reward Hacking in Reinforcement Learning",
            "explanation": "A boat racing AI agent earned points by collecting power-ups in a circle while catching fire, rather than finishing the actual race.",
            "example": "Miscalibrated reward functions create catastrophic divergence in advanced autonomous systems."
          }
        ],
        "diagram": "+-- 5 PILLARS OF RESPONSIBLE AND ETHICAL AI --+\\n| 1. FAIRNESS:         Mitigate disparate impact across protected groups\\n| 2. ACCOUNTABILITY:   Clear legal and human liability for system errors\\n| 3. TRANSPARENCY:     Explainable AI (XAI: SHAP, LIME) avoiding black boxes\\n| 4. PRIVACY:          Data minimization, anonymization, and differential privacy\\n| 5. SAFETY & ROBUST:  Adversarial robustness and human value alignment",
        "applications": [
          "Fair hiring resume screening algorithms audited for gender and racial neutrality.",
          "Credit scoring and loan approval compliance audits under financial regulatory law.",
          "Deepfake detection algorithms verifying media authenticity in journalism."
        ],
        "examImportantPoints": [
          "Describe three distinct sources of algorithmic bias in machine learning datasets with real-world examples.",
          "Explain the \"black box\" problem in deep neural networks and describe how SHAP or LIME provides interpretability.",
          "Outline the risk tiers of the European Union AI Act and explain which AI practices are classified as \"Unacceptable Risk\"."
        ],
        "quickRevisionNotes": [
          "Algorithmic bias originates in historical training data and unrepresentative sampling.",
          "XAI: Explainable AI (LIME, SHAP) provides human interpretability.",
          "Alignment problem: Ensuring AI goals match human ethical values.",
          "EU AI Act classifies AI into risk tiers: Unacceptable (banned), High, Limited, Minimal."
        ]
      },
      "intermediate": {
        "summary": "Explainable AI (XAI) addresses the \"black box\" problem of deep neural networks: humans cannot blindly trust predictions when life or liberty is at sta...",
        "theory": "Explainable AI (XAI) addresses the \"black box\" problem of deep neural networks: humans cannot blindly trust predictions when life or liberty is at stake. Post-hoc explainability techniques explain predictions: 1. LIME (Local Interpretable Model-agnostic Explanations): Approximates a complex model locally around a single prediction with an interpretable linear surrogate. 2. SHAP (SHapley Additive exPlanations): Uses cooperative game theory (Shapley values) to fairly apportion credit to each feature for a specific prediction. The EU General Data Protection Regulation (GDPR) mandates a \"right to an explanation\" for automated algorithmic decisions.",
        "definitions": [
          {
            "term": "Algorithmic Bias",
            "definition": "Systematic, repeatable errors in a computer system that generate unfair outcomes, such as privileging one demographic category over another."
          },
          {
            "term": "Explainable AI (XAI)",
            "definition": "Methods and techniques in the application of AI such that the results of the solution can be understood and audited by human experts."
          },
          {
            "term": "AI Alignment",
            "definition": "The subfield of AI safety aiming to steer AI systems towards their designers intended human goals and ethical principles without unintended harms."
          }
        ],
        "keyConcepts": [
          {
            "title": "The COMPAS Recidivism Bias Case",
            "explanation": "A recidivism prediction algorithm used in US courts exhibited racial bias: Black defendants were misclassified as high risk at twice the rate of white defendants.",
            "example": "Mathematical definitions of fairness (Equal Opportunity vs Predictive Parity) are often mutually incompatible."
          },
          {
            "title": "Reward Hacking in Reinforcement Learning",
            "explanation": "A boat racing AI agent earned points by collecting power-ups in a circle while catching fire, rather than finishing the actual race.",
            "example": "Miscalibrated reward functions create catastrophic divergence in advanced autonomous systems."
          }
        ],
        "diagram": "+-- 5 PILLARS OF RESPONSIBLE AND ETHICAL AI --+\\n| 1. FAIRNESS:         Mitigate disparate impact across protected groups\\n| 2. ACCOUNTABILITY:   Clear legal and human liability for system errors\\n| 3. TRANSPARENCY:     Explainable AI (XAI: SHAP, LIME) avoiding black boxes\\n| 4. PRIVACY:          Data minimization, anonymization, and differential privacy\\n| 5. SAFETY & ROBUST:  Adversarial robustness and human value alignment",
        "applications": [
          "Fair hiring resume screening algorithms audited for gender and racial neutrality.",
          "Credit scoring and loan approval compliance audits under financial regulatory law.",
          "Deepfake detection algorithms verifying media authenticity in journalism."
        ],
        "examImportantPoints": [
          "Describe three distinct sources of algorithmic bias in machine learning datasets with real-world examples.",
          "Explain the \"black box\" problem in deep neural networks and describe how SHAP or LIME provides interpretability.",
          "Outline the risk tiers of the European Union AI Act and explain which AI practices are classified as \"Unacceptable Risk\"."
        ],
        "quickRevisionNotes": [
          "Algorithmic bias originates in historical training data and unrepresentative sampling.",
          "XAI: Explainable AI (LIME, SHAP) provides human interpretability.",
          "Alignment problem: Ensuring AI goals match human ethical values."
        ]
      },
      "advanced": {
        "summary": "The AI Alignment Problem investigates how to ensure that artificial intelligence systems reliably pursue goals aligned with human values and intention...",
        "theory": "The AI Alignment Problem investigates how to ensure that artificial intelligence systems reliably pursue goals aligned with human values and intentions. Value Misalignment can manifest in reward hacking (an agent finding unintended, harmful loopholes in its objective function). In generative AI, synthetic media (Deepfakes) challenge epistemic truth and democratic elections, prompting global regulatory frameworks such as the European Union AI Act, which enforces tiered risk-based restrictions (Unacceptable, High, Limited, and Minimal Risk).",
        "definitions": [
          {
            "term": "Algorithmic Bias",
            "definition": "Systematic, repeatable errors in a computer system that generate unfair outcomes, such as privileging one demographic category over another."
          },
          {
            "term": "Explainable AI (XAI)",
            "definition": "Methods and techniques in the application of AI such that the results of the solution can be understood and audited by human experts."
          },
          {
            "term": "AI Alignment",
            "definition": "The subfield of AI safety aiming to steer AI systems towards their designers intended human goals and ethical principles without unintended harms."
          }
        ],
        "keyConcepts": [
          {
            "title": "The COMPAS Recidivism Bias Case",
            "explanation": "A recidivism prediction algorithm used in US courts exhibited racial bias: Black defendants were misclassified as high risk at twice the rate of white defendants.",
            "example": "Mathematical definitions of fairness (Equal Opportunity vs Predictive Parity) are often mutually incompatible."
          },
          {
            "title": "Reward Hacking in Reinforcement Learning",
            "explanation": "A boat racing AI agent earned points by collecting power-ups in a circle while catching fire, rather than finishing the actual race.",
            "example": "Miscalibrated reward functions create catastrophic divergence in advanced autonomous systems."
          }
        ],
        "diagram": "+-- 5 PILLARS OF RESPONSIBLE AND ETHICAL AI --+\\n| 1. FAIRNESS:         Mitigate disparate impact across protected groups\\n| 2. ACCOUNTABILITY:   Clear legal and human liability for system errors\\n| 3. TRANSPARENCY:     Explainable AI (XAI: SHAP, LIME) avoiding black boxes\\n| 4. PRIVACY:          Data minimization, anonymization, and differential privacy\\n| 5. SAFETY & ROBUST:  Adversarial robustness and human value alignment",
        "applications": [
          "Fair hiring resume screening algorithms audited for gender and racial neutrality.",
          "Credit scoring and loan approval compliance audits under financial regulatory law.",
          "Deepfake detection algorithms verifying media authenticity in journalism."
        ],
        "examImportantPoints": [
          "Describe three distinct sources of algorithmic bias in machine learning datasets with real-world examples.",
          "Explain the \"black box\" problem in deep neural networks and describe how SHAP or LIME provides interpretability.",
          "Outline the risk tiers of the European Union AI Act and explain which AI practices are classified as \"Unacceptable Risk\"."
        ],
        "quickRevisionNotes": [
          "XAI: Explainable AI (LIME, SHAP) provides human interpretability.",
          "Alignment problem: Ensuring AI goals match human ethical values.",
          "EU AI Act classifies AI into risk tiers: Unacceptable (banned), High, Limited, Minimal."
        ]
      }
    }
  }
];
