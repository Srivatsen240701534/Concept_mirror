import { MCQuestion } from '../../types';

export const TOC_MCQS: MCQuestion[] = [
  {
    "id": "mcq-toc-u1-t1-1",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t1",
    "topicTitle": "Alphabets, Formal Languages & Deterministic Finite Automata (DFA)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Alphabets, Formal Languages & Deterministic Finite Automata (DFA)?",
    "options": [
      "A 5-tuple finite state machine that accepts or rejects strings with exactly one deterministic state transition per input symbol.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A 5-tuple finite state machine that accepts or rejects strings with exactly one deterministic state transition per input symbol.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Design a DFA to accept the language over {0,1} containing an even number of 0s and an odd number of 1s (4-state cross product)."
  },
  {
    "id": "mcq-toc-u1-t1-2",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t1",
    "topicTitle": "Alphabets, Formal Languages & Deterministic Finite Automata (DFA)",
    "difficulty": "beginner",
    "question": "In the study of Alphabets, Formal Languages & Deterministic Finite Automata (DFA), what is the role of \"Automata\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "To accept binary numbers divisible by 3: States represent remainders {q0, q1, q2} mod 3. When reading next bit b, new state = (2 * current_state + b) mod 3.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "To accept binary numbers divisible by 3: States represent remainders {q0, q1, q2} mod 3. When reading next bit b, new state = (2 * current_state + b) mod 3.",
    "referenceExamPoint": "Write the formal 5-tuple definition of a DFA and define the extended transition function delta* recursively."
  },
  {
    "id": "mcq-toc-u1-t1-3",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t1",
    "topicTitle": "Alphabets, Formal Languages & Deterministic Finite Automata (DFA)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Extended Transition Function (delta*)\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The recursive extension of the single-step transition function delta to evaluate multi-character strings of arbitrary length.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Extended Transition Function (delta*) is formally defined as: The recursive extension of the single-step transition function delta to evaluate multi-character strings of arbitrary length.",
    "referenceExamPoint": "DFA: 5-tuple (Q, Sigma, delta, q0, F)."
  },
  {
    "id": "mcq-toc-u1-t1-4",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t1",
    "topicTitle": "Alphabets, Formal Languages & Deterministic Finite Automata (DFA)",
    "difficulty": "intermediate",
    "question": "How does Alphabets, Formal Languages & Deterministic Finite Automata (DFA) address the problem of system overhead or error conditions?",
    "options": [
      "Because state count |Q| is finite, feeding a string of length > |Q| forces the DFA to revisit at least one state (Pigeonhole Principle).",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Because state count |Q| is finite, feeding a string of length > |Q| forces the DFA to revisit at least one state (Pigeonhole Principle).",
    "referenceExamPoint": "Construct a DFA accepting binary strings ending in 0101."
  },
  {
    "id": "mcq-toc-u1-t1-5",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t1",
    "topicTitle": "Alphabets, Formal Languages & Deterministic Finite Automata (DFA)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Alphabets, Formal Languages & Deterministic Finite Automata (DFA)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Lexical analyzers in compilers (scanning tokens like identifiers and keywords).",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Lexical analyzers in compilers (scanning tokens like identifiers and keywords).. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Deterministic: Exactly one transition per state and symbol."
  },
  {
    "id": "mcq-toc-u1-t1-6",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t1",
    "topicTitle": "Alphabets, Formal Languages & Deterministic Finite Automata (DFA)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Alphabets, Formal Languages & Deterministic Finite Automata (DFA). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Extended delta*(q, wa) = delta(delta*(q, w), a)..",
    "referenceExamPoint": "Write the formal 5-tuple definition of a DFA and define the extended transition function delta* recursively."
  },
  {
    "id": "mcq-toc-u1-t1-7",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t1",
    "topicTitle": "Alphabets, Formal Languages & Deterministic Finite Automata (DFA)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Kleene Star (Sigma*)\" in Alphabets, Formal Languages & Deterministic Finite Automata (DFA)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The set of all possible finite-length strings constructed from symbols in alphabet Sigma, including the empty string epsilon.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Kleene Star (Sigma*) is specifically defined as: The set of all possible finite-length strings constructed from symbols in alphabet Sigma, including the empty string epsilon.",
    "referenceExamPoint": "Extended delta*(q, wa) = delta(delta*(q, w), a)."
  },
  {
    "id": "mcq-toc-u1-t1-8",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t1",
    "topicTitle": "Alphabets, Formal Languages & Deterministic Finite Automata (DFA)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Alphabets, Formal Languages & Deterministic Finite Automata (DFA), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Design a DFA to accept the language over {0,1} containing an even number of 0s and an odd number of 1s (4-state cross product)."
  },
  {
    "id": "mcq-toc-u1-t1-9",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t1",
    "topicTitle": "Alphabets, Formal Languages & Deterministic Finite Automata (DFA)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Alphabets, Formal Languages & Deterministic Finite Automata (DFA)?",
    "options": [
      "Principle: DFA: 5-tuple (Q, Sigma, delta, q0, F).",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: DFA: 5-tuple (Q, Sigma, delta, q0, F).. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "DFA: 5-tuple (Q, Sigma, delta, q0, F)."
  },
  {
    "id": "mcq-toc-u1-t1-10",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t1",
    "topicTitle": "Alphabets, Formal Languages & Deterministic Finite Automata (DFA)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Alphabets, Formal Languages & Deterministic Finite Automata (DFA)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Alphabets, Formal Languages & Deterministic Finite Automata (DFA) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Finite state machine controllers in digital electronics and traffic light systems."
  },
  {
    "id": "mcq-toc-u1-t2-1",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t2",
    "topicTitle": "Non-Deterministic Finite Automata (NFA) & Subset Construction",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Non-Deterministic Finite Automata (NFA) & Subset Construction?",
    "options": [
      "A finite state machine whose transition function maps to subsets of states (2^Q), allowing multiple simultaneous active paths.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A finite state machine whose transition function maps to subsets of states (2^Q), allowing multiple simultaneous active paths.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Convert a given epsilon-NFA into an equivalent DFA using subset construction with complete transition table."
  },
  {
    "id": "mcq-toc-u1-t2-2",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t2",
    "topicTitle": "Non-Deterministic Finite Automata (NFA) & Subset Construction",
    "difficulty": "beginner",
    "question": "In the study of Non-Deterministic Finite Automata (NFA) & Subset Construction, what is the role of \"NFA\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "An NFA acts as a parallel computer: it explores all valid paths simultaneously. If even one branch terminates in an accept state, the string is accepted.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "An NFA acts as a parallel computer: it explores all valid paths simultaneously. If even one branch terminates in an accept state, the string is accepted.",
    "referenceExamPoint": "Explain the mathematical definition of ECLOSE(q) and calculate it for a sample epsilon-NFA graph."
  },
  {
    "id": "mcq-toc-u1-t2-3",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t2",
    "topicTitle": "Non-Deterministic Finite Automata (NFA) & Subset Construction",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Epsilon Closure (ECLOSE)\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The set of all states reachable from a given state by following only epsilon (null) transitions without consuming input.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Epsilon Closure (ECLOSE) is formally defined as: The set of all states reachable from a given state by following only epsilon (null) transitions without consuming input.",
    "referenceExamPoint": "NFA delta: Q x Sigma -> 2^Q (powerset)."
  },
  {
    "id": "mcq-toc-u1-t2-4",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t2",
    "topicTitle": "Non-Deterministic Finite Automata (NFA) & Subset Construction",
    "difficulty": "intermediate",
    "question": "How does Non-Deterministic Finite Automata (NFA) & Subset Construction address the problem of system overhead or error conditions?",
    "options": [
      "Language L = { w in {0,1}* | the n-th bit from the end is 1 }. NFA needs n+1 states. Any DFA requires exactly 2^n states to track last n bits.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Language L = { w in {0,1}* | the n-th bit from the end is 1 }. NFA needs n+1 states. Any DFA requires exactly 2^n states to track last n bits.",
    "referenceExamPoint": "Prove that every language accepted by an NFA can also be accepted by a DFA."
  },
  {
    "id": "mcq-toc-u1-t2-5",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t2",
    "topicTitle": "Non-Deterministic Finite Automata (NFA) & Subset Construction",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Non-Deterministic Finite Automata (NFA) & Subset Construction?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Regular expression compilation engines (Thompson Construction converting regex to NFA).",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Regular expression compilation engines (Thompson Construction converting regex to NFA).. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "NFA accepts if ANY branch reaches a final state."
  },
  {
    "id": "mcq-toc-u1-t2-6",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t2",
    "topicTitle": "Non-Deterministic Finite Automata (NFA) & Subset Construction",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Non-Deterministic Finite Automata (NFA) & Subset Construction. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: DFA and NFA recognize the EXACT SAME class of regular languages..",
    "referenceExamPoint": "Explain the mathematical definition of ECLOSE(q) and calculate it for a sample epsilon-NFA graph."
  },
  {
    "id": "mcq-toc-u1-t2-7",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t2",
    "topicTitle": "Non-Deterministic Finite Automata (NFA) & Subset Construction",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Subset Construction\" in Non-Deterministic Finite Automata (NFA) & Subset Construction?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The algorithmic procedure that converts any NFA into an equivalent DFA by tracking sets of concurrent NFA states as individual DFA states.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Subset Construction is specifically defined as: The algorithmic procedure that converts any NFA into an equivalent DFA by tracking sets of concurrent NFA states as individual DFA states.",
    "referenceExamPoint": "DFA and NFA recognize the EXACT SAME class of regular languages."
  },
  {
    "id": "mcq-toc-u1-t2-8",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t2",
    "topicTitle": "Non-Deterministic Finite Automata (NFA) & Subset Construction",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Non-Deterministic Finite Automata (NFA) & Subset Construction, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Convert a given epsilon-NFA into an equivalent DFA using subset construction with complete transition table."
  },
  {
    "id": "mcq-toc-u1-t2-9",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t2",
    "topicTitle": "Non-Deterministic Finite Automata (NFA) & Subset Construction",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Non-Deterministic Finite Automata (NFA) & Subset Construction?",
    "options": [
      "Principle: NFA delta: Q x Sigma -> 2^Q (powerset).",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: NFA delta: Q x Sigma -> 2^Q (powerset).. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "NFA delta: Q x Sigma -> 2^Q (powerset)."
  },
  {
    "id": "mcq-toc-u1-t2-10",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t2",
    "topicTitle": "Non-Deterministic Finite Automata (NFA) & Subset Construction",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Non-Deterministic Finite Automata (NFA) & Subset Construction?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Non-Deterministic Finite Automata (NFA) & Subset Construction leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Pattern matching in lexical analyzer generators (Flex/Lex)."
  },
  {
    "id": "mcq-toc-u1-t3-1",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t3",
    "topicTitle": "Regular Expressions, Kleene Algebra & Ardens Theorem",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Regular Expressions, Kleene Algebra & Ardens Theorem?",
    "options": [
      "A formal string of characters and operators defining a search pattern or generating a regular language.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A formal string of characters and operators defining a search pattern or generating a regular language.. The other choices are incorrect distractors.",
    "referenceExamPoint": "State and prove Arden Theorem (show R = Q*P* satisfies the equation and prove uniqueness)."
  },
  {
    "id": "mcq-toc-u1-t3-2",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t3",
    "topicTitle": "Regular Expressions, Kleene Algebra & Ardens Theorem",
    "difficulty": "beginner",
    "question": "In the study of Regular Expressions, Kleene Algebra & Ardens Theorem, what is the role of \"Regular Expression\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "If X = 0*X + 1: Matches R = Q + R*P where R=X, Q=1, P=0. By Arden Theorem, the unique solution is X = 1*0*.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "If X = 0*X + 1: Matches R = Q + R*P where R=X, Q=1, P=0. By Arden Theorem, the unique solution is X = 1*0*.",
    "referenceExamPoint": "Given a 3-state DFA transition diagram, formulate simultaneous equations and find its regular expression using Arden Theorem."
  },
  {
    "id": "mcq-toc-u1-t3-3",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t3",
    "topicTitle": "Regular Expressions, Kleene Algebra & Ardens Theorem",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Arden Theorem\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A mathematical theorem in formal languages stating that the equation R = Q + R*P has a unique solution R = Q*P* when P does not contain epsilon.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Arden Theorem is formally defined as: A mathematical theorem in formal languages stating that the equation R = Q + R*P has a unique solution R = Q*P* when P does not contain epsilon.",
    "referenceExamPoint": "Regular expressions: Union (+), Concatenation (.), Kleene Star (*)."
  },
  {
    "id": "mcq-toc-u1-t3-4",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t3",
    "topicTitle": "Regular Expressions, Kleene Algebra & Ardens Theorem",
    "difficulty": "intermediate",
    "question": "How does Regular Expressions, Kleene Algebra & Ardens Theorem address the problem of system overhead or error conditions?",
    "options": [
      "phi* = epsilon; epsilon* = epsilon; (a*)* = a*; (a + b)* = (a* b*)*; a(ba)* = (ab)*a.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "phi* = epsilon; epsilon* = epsilon; (a*)* = a*; (a + b)* = (a* b*)*; a(ba)* = (ab)*a.",
    "referenceExamPoint": "Convert a given regular expression (e.g. (a+b)*abb) into an epsilon-NFA using Thompson Construction."
  },
  {
    "id": "mcq-toc-u1-t3-5",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t3",
    "topicTitle": "Regular Expressions, Kleene Algebra & Ardens Theorem",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Regular Expressions, Kleene Algebra & Ardens Theorem?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Command line text processing tools (grep, sed, awk).",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Command line text processing tools (grep, sed, awk).. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Kleene Theorem: DFA <=> NFA <=> Regular Expression."
  },
  {
    "id": "mcq-toc-u1-t3-6",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t3",
    "topicTitle": "Regular Expressions, Kleene Algebra & Ardens Theorem",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Regular Expressions, Kleene Algebra & Ardens Theorem. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Arden Theorem: R = Q + R*P => R = Q*P* (if epsilon not in P)..",
    "referenceExamPoint": "Given a 3-state DFA transition diagram, formulate simultaneous equations and find its regular expression using Arden Theorem."
  },
  {
    "id": "mcq-toc-u1-t3-7",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t3",
    "topicTitle": "Regular Expressions, Kleene Algebra & Ardens Theorem",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Thompson Construction\" in Regular Expressions, Kleene Algebra & Ardens Theorem?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A linear-time compilation algorithm that transforms any regular expression into an equivalent epsilon-NFA.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Thompson Construction is specifically defined as: A linear-time compilation algorithm that transforms any regular expression into an equivalent epsilon-NFA.",
    "referenceExamPoint": "Arden Theorem: R = Q + R*P => R = Q*P* (if epsilon not in P)."
  },
  {
    "id": "mcq-toc-u1-t3-8",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t3",
    "topicTitle": "Regular Expressions, Kleene Algebra & Ardens Theorem",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Regular Expressions, Kleene Algebra & Ardens Theorem, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "State and prove Arden Theorem (show R = Q*P* satisfies the equation and prove uniqueness)."
  },
  {
    "id": "mcq-toc-u1-t3-9",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t3",
    "topicTitle": "Regular Expressions, Kleene Algebra & Ardens Theorem",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Regular Expressions, Kleene Algebra & Ardens Theorem?",
    "options": [
      "Principle: Regular expressions: Union (+), Concatenation (.), Kleene Star (*).",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Regular expressions: Union (+), Concatenation (.), Kleene Star (*).. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Regular expressions: Union (+), Concatenation (.), Kleene Star (*)."
  },
  {
    "id": "mcq-toc-u1-t3-10",
    "subjectId": "toc",
    "unitId": "toc-u1",
    "topicId": "toc-u1-t3",
    "topicTitle": "Regular Expressions, Kleene Algebra & Ardens Theorem",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Regular Expressions, Kleene Algebra & Ardens Theorem?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Regular Expressions, Kleene Algebra & Ardens Theorem leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Input validation patterns in web forms and database constraints."
  },
  {
    "id": "mcq-toc-u2-t1-1",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t1",
    "topicTitle": "Closure Properties of Regular Languages",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Closure Properties of Regular Languages?",
    "options": [
      "A mathematical property where an operation applied to members of a set produces a result that is also in the set.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A mathematical property where an operation applied to members of a set produces a result that is also in the set.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Prove that regular languages are closed under Intersection using the Cartesian Cross-Product Construction."
  },
  {
    "id": "mcq-toc-u2-t1-2",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t1",
    "topicTitle": "Closure Properties of Regular Languages",
    "difficulty": "beginner",
    "question": "In the study of Closure Properties of Regular Languages, what is the role of \"Closure Properties\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "If a DFA lacks an explicit dead state (sink) and drops invalid transitions, inverting states fails to accept strings that died.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "If a DFA lacks an explicit dead state (sink) and drops invalid transitions, inverting states fails to accept strings that died.",
    "referenceExamPoint": "Explain how De Morgan Laws prove closure under intersection using union and complement."
  },
  {
    "id": "mcq-toc-u2-t1-3",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t1",
    "topicTitle": "Closure Properties of Regular Languages",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Cross-Product Construction\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A method of constructing a composite automaton whose states are pairs of states from two independent automata running in lockstep.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Cross-Product Construction is formally defined as: A method of constructing a composite automaton whose states are pairs of states from two independent automata running in lockstep.",
    "referenceExamPoint": "Regular languages closed under: Union, Intersection, Complement, Difference, Concatenation, Star, Reversal."
  },
  {
    "id": "mcq-toc-u2-t1-4",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t1",
    "topicTitle": "Closure Properties of Regular Languages",
    "difficulty": "intermediate",
    "question": "How does Closure Properties of Regular Languages address the problem of system overhead or error conditions?",
    "options": [
      "Construct machine with state pairs [q, p]. Both machines process input simultaneously. String is accepted if both sub-states are in respective final sets.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Construct machine with state pairs [q, p]. Both machines process input simultaneously. String is accepted if both sub-states are in respective final sets.",
    "referenceExamPoint": "Describe the algorithm to test whether two DFAs are equivalent."
  },
  {
    "id": "mcq-toc-u2-t1-5",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t1",
    "topicTitle": "Closure Properties of Regular Languages",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Closure Properties of Regular Languages?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Static code analysis checking if program execution traces intersect forbidden error state languages.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Static code analysis checking if program execution traces intersect forbidden error state languages.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Complement: Swap final and non-final states of a complete DFA."
  },
  {
    "id": "mcq-toc-u2-t1-6",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t1",
    "topicTitle": "Closure Properties of Regular Languages",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Closure Properties of Regular Languages. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Intersection: Cartesian product machine with F = F1 x F2..",
    "referenceExamPoint": "Explain how De Morgan Laws prove closure under intersection using union and complement."
  },
  {
    "id": "mcq-toc-u2-t1-7",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t1",
    "topicTitle": "Closure Properties of Regular Languages",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Symmetric Difference\" in Closure Properties of Regular Languages?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The set of strings belonging to exactly one of two languages: (L1 - L2) U (L2 - L1), empty if and only if L1 equals L2.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Symmetric Difference is specifically defined as: The set of strings belonging to exactly one of two languages: (L1 - L2) U (L2 - L1), empty if and only if L1 equals L2.",
    "referenceExamPoint": "Intersection: Cartesian product machine with F = F1 x F2."
  },
  {
    "id": "mcq-toc-u2-t1-8",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t1",
    "topicTitle": "Closure Properties of Regular Languages",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Closure Properties of Regular Languages, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Prove that regular languages are closed under Intersection using the Cartesian Cross-Product Construction."
  },
  {
    "id": "mcq-toc-u2-t1-9",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t1",
    "topicTitle": "Closure Properties of Regular Languages",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Closure Properties of Regular Languages?",
    "options": [
      "Principle: Regular languages closed under: Union, Intersection, Complement, Difference, Concatenation, Star, Reversal.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Regular languages closed under: Union, Intersection, Complement, Difference, Concatenation, Star, Reversal.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Regular languages closed under: Union, Intersection, Complement, Difference, Concatenation, Star, Reversal."
  },
  {
    "id": "mcq-toc-u2-t1-10",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t1",
    "topicTitle": "Closure Properties of Regular Languages",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Closure Properties of Regular Languages?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Closure Properties of Regular Languages leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Hardware verification testing equivalence of synthesized netlists against specifications."
  },
  {
    "id": "mcq-toc-u2-t2-1",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t2",
    "topicTitle": "Pumping Lemma for Regular Languages & Non-Regularity Proofs",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Pumping Lemma for Regular Languages & Non-Regularity Proofs?",
    "options": [
      "A positive integer associated with a regular language, guaranteed to be less than or equal to the state count of its recognizing DFA.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A positive integer associated with a regular language, guaranteed to be less than or equal to the state count of its recognizing DFA.. The other choices are incorrect distractors.",
    "referenceExamPoint": "State the Pumping Lemma for regular languages with all 3 conditions."
  },
  {
    "id": "mcq-toc-u2-t2-2",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t2",
    "topicTitle": "Pumping Lemma for Regular Languages & Non-Regularity Proofs",
    "difficulty": "beginner",
    "question": "In the study of Pumping Lemma for Regular Languages & Non-Regularity Proofs, what is the role of \"Pumping Lemma\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Choosing w = 0101 does not work because length is not >= p. Choosing w = 0^p 1^p forces y into the 0-block because |xy| <= p.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Choosing w = 0101 does not work because length is not >= p. Choosing w = 0^p 1^p forces y into the 0-block because |xy| <= p.",
    "referenceExamPoint": "Prove that L = { a^n b^n | n >= 0 } is not regular using the Pumping Lemma."
  },
  {
    "id": "mcq-toc-u2-t2-3",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t2",
    "topicTitle": "Pumping Lemma for Regular Languages & Non-Regularity Proofs",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Pigeonhole Principle\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The mathematical theorem stating that if n items are put into m containers with n > m, at least one container must hold more than one item.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Pigeonhole Principle is formally defined as: The mathematical theorem stating that if n items are put into m containers with n > m, at least one container must hold more than one item.",
    "referenceExamPoint": "Pumping Lemma is used ONLY to prove a language is NOT regular."
  },
  {
    "id": "mcq-toc-u2-t2-4",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t2",
    "topicTitle": "Pumping Lemma for Regular Languages & Non-Regularity Proofs",
    "difficulty": "intermediate",
    "question": "How does Pumping Lemma for Regular Languages & Non-Regularity Proofs address the problem of system overhead or error conditions?",
    "options": [
      "Setting i = 0 deletes y from the string: w` = xz. In languages with inequalities (e.g. 0^i 1^j where i > j), pumping down breaks the inequality.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Setting i = 0 deletes y from the string: w` = xz. In languages with inequalities (e.g. 0^i 1^j where i > j), pumping down breaks the inequality.",
    "referenceExamPoint": "Prove that L = { a^(p) | p is a prime number } or L = { w w^R } is not regular."
  },
  {
    "id": "mcq-toc-u2-t2-5",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t2",
    "topicTitle": "Pumping Lemma for Regular Languages & Non-Regularity Proofs",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Pumping Lemma for Regular Languages & Non-Regularity Proofs?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Compiler grammar validation proving lexical scanners cannot parse nested programming language constructs.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Compiler grammar validation proving lexical scanners cannot parse nested programming language constructs.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Conditions: 1. |y| > 0, 2. |xy| <= p, 3. x(y^i)z in L for all i >= 0."
  },
  {
    "id": "mcq-toc-u2-t2-6",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t2",
    "topicTitle": "Pumping Lemma for Regular Languages & Non-Regularity Proofs",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Pumping Lemma for Regular Languages & Non-Regularity Proofs. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Based on Pigeonhole Principle state repetition in DFA..",
    "referenceExamPoint": "Prove that L = { a^n b^n | n >= 0 } is not regular using the Pumping Lemma."
  },
  {
    "id": "mcq-toc-u2-t2-7",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t2",
    "topicTitle": "Pumping Lemma for Regular Languages & Non-Regularity Proofs",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Pumping (y^i)\" in Pumping Lemma for Regular Languages & Non-Regularity Proofs?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The repetition of substring y i times: for i=0 (pumping down), i=1 (original), i>=2 (pumping up).",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Pumping (y^i) is specifically defined as: The repetition of substring y i times: for i=0 (pumping down), i=1 (original), i>=2 (pumping up).",
    "referenceExamPoint": "Based on Pigeonhole Principle state repetition in DFA."
  },
  {
    "id": "mcq-toc-u2-t2-8",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t2",
    "topicTitle": "Pumping Lemma for Regular Languages & Non-Regularity Proofs",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Pumping Lemma for Regular Languages & Non-Regularity Proofs, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "State the Pumping Lemma for regular languages with all 3 conditions."
  },
  {
    "id": "mcq-toc-u2-t2-9",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t2",
    "topicTitle": "Pumping Lemma for Regular Languages & Non-Regularity Proofs",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Pumping Lemma for Regular Languages & Non-Regularity Proofs?",
    "options": [
      "Principle: Pumping Lemma is used ONLY to prove a language is NOT regular.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Pumping Lemma is used ONLY to prove a language is NOT regular.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Pumping Lemma is used ONLY to prove a language is NOT regular."
  },
  {
    "id": "mcq-toc-u2-t2-10",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t2",
    "topicTitle": "Pumping Lemma for Regular Languages & Non-Regularity Proofs",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Pumping Lemma for Regular Languages & Non-Regularity Proofs?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Pumping Lemma for Regular Languages & Non-Regularity Proofs leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Protocol verification ensuring protocol states do not require unbounded counters."
  },
  {
    "id": "mcq-toc-u2-t3-1",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t3",
    "topicTitle": "Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)?",
    "options": [
      "Two states p and q such that there exists at least one string w where delta*(p, w) in F and delta*(q, w) not in F.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: Two states p and q such that there exists at least one string w where delta*(p, w) in F and delta*(q, w) not in F.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Minimize a given 6-to-8 state DFA using the Table-Filling Algorithm showing all iterations of the table."
  },
  {
    "id": "mcq-toc-u2-t3-2",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t3",
    "topicTitle": "Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)",
    "difficulty": "beginner",
    "question": "In the study of Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode), what is the role of \"DFA Minimization\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "States that cannot be reached by any path from start state q0 must be discarded before running table-filling.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "States that cannot be reached by any path from start state q0 must be discarded before running table-filling.",
    "referenceExamPoint": "State the Myhill-Nerode Theorem and explain what the index of a language represents."
  },
  {
    "id": "mcq-toc-u2-t3-3",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t3",
    "topicTitle": "Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Table-Filling Algorithm\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A dynamic programming algorithm that iteratively discovers distinguishable state pairs in a DFA.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Table-Filling Algorithm is formally defined as: A dynamic programming algorithm that iteratively discovers distinguishable state pairs in a DFA.",
    "referenceExamPoint": "Table-filling marks pairs where one is final and other is non-final (basis)."
  },
  {
    "id": "mcq-toc-u2-t3-4",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t3",
    "topicTitle": "Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)",
    "difficulty": "intermediate",
    "question": "How does Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode) address the problem of system overhead or error conditions?",
    "options": [
      "The minimal DFA is structurally unique up to state isomorphism: no other DFA with <= states can recognize the language.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "The minimal DFA is structurally unique up to state isomorphism: no other DFA with <= states can recognize the language.",
    "referenceExamPoint": "Define state equivalence (p == q) formally using the extended transition function delta*."
  },
  {
    "id": "mcq-toc-u2-t3-5",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t3",
    "topicTitle": "Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Hardware digital logic synthesis minimizing flip-flop gate count in ASIC chips.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Hardware digital logic synthesis minimizing flip-flop gate count in ASIC chips.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Induction marks {p,q} if their successors {delta(p,a), delta(q,a)} are marked."
  },
  {
    "id": "mcq-toc-u2-t3-6",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t3",
    "topicTitle": "Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Unmarked pairs at termination are equivalent and merged..",
    "referenceExamPoint": "State the Myhill-Nerode Theorem and explain what the index of a language represents."
  },
  {
    "id": "mcq-toc-u2-t3-7",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t3",
    "topicTitle": "Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Myhill-Nerode Theorem\" in Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A fundamental theorem establishing that minimal DFA state count equals the finite index of the language prefix equivalence relation.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Myhill-Nerode Theorem is specifically defined as: A fundamental theorem establishing that minimal DFA state count equals the finite index of the language prefix equivalence relation.",
    "referenceExamPoint": "Unmarked pairs at termination are equivalent and merged."
  },
  {
    "id": "mcq-toc-u2-t3-8",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t3",
    "topicTitle": "Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Minimize a given 6-to-8 state DFA using the Table-Filling Algorithm showing all iterations of the table."
  },
  {
    "id": "mcq-toc-u2-t3-9",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t3",
    "topicTitle": "Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)?",
    "options": [
      "Principle: Table-filling marks pairs where one is final and other is non-final (basis).",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Table-filling marks pairs where one is final and other is non-final (basis).. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Table-filling marks pairs where one is final and other is non-final (basis)."
  },
  {
    "id": "mcq-toc-u2-t3-10",
    "subjectId": "toc",
    "unitId": "toc-u2",
    "topicId": "toc-u2-t3",
    "topicTitle": "Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Minimization of DFA (Table-Filling Algorithm & Myhill-Nerode) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Compiler lexical analyzer optimization compressing token matching tables."
  },
  {
    "id": "mcq-toc-u3-t1-1",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t1",
    "topicTitle": "Context-Free Grammars (CFG), Derivations & Ambiguity",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Context-Free Grammars (CFG), Derivations & Ambiguity?",
    "options": [
      "A 4-tuple (V, T, P, S) where productions replace a single non-terminal variable with a string of variables and terminals.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A 4-tuple (V, T, P, S) where productions replace a single non-terminal variable with a string of variables and terminals.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Prove that the grammar E -> E + E | E * E | id is ambiguous by drawing two distinct parse trees for string \"id + id * id\"."
  },
  {
    "id": "mcq-toc-u3-t1-2",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t1",
    "topicTitle": "Context-Free Grammars (CFG), Derivations & Ambiguity",
    "difficulty": "beginner",
    "question": "In the study of Context-Free Grammars (CFG), Derivations & Ambiguity, what is the role of \"CFG\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Leftmost always expands the leftmost non-terminal first. Rightmost expands the rightmost first. Both produce identical parse tree geometry.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Leftmost always expands the leftmost non-terminal first. Rightmost expands the rightmost first. Both produce identical parse tree geometry.",
    "referenceExamPoint": "Rewrite the ambiguous arithmetic grammar into an unambiguous grammar with correct precedence and associativity."
  },
  {
    "id": "mcq-toc-u3-t1-3",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t1",
    "topicTitle": "Context-Free Grammars (CFG), Derivations & Ambiguity",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Ambiguous Grammar\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A grammar that generates two or more distinct parse trees (or leftmost derivations) for the same terminal string.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Ambiguous Grammar is formally defined as: A grammar that generates two or more distinct parse trees (or leftmost derivations) for the same terminal string.",
    "referenceExamPoint": "CFG: 4-tuple (V, T, P, S). Left-hand side must be single variable."
  },
  {
    "id": "mcq-toc-u3-t1-4",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t1",
    "topicTitle": "Context-Free Grammars (CFG), Derivations & Ambiguity",
    "difficulty": "intermediate",
    "question": "How does Context-Free Grammars (CFG), Derivations & Ambiguity address the problem of system overhead or error conditions?",
    "options": [
      "Creating intermediate non-terminals (E, T, F) forces * to bind closer to leaves than +, ensuring correct mathematical evaluation.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Creating intermediate non-terminals (E, T, F) forces * to bind closer to leaves than +, ensuring correct mathematical evaluation.",
    "referenceExamPoint": "Construct a CFG for balanced parentheses or palindromes { w w^R }."
  },
  {
    "id": "mcq-toc-u3-t1-5",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t1",
    "topicTitle": "Context-Free Grammars (CFG), Derivations & Ambiguity",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Context-Free Grammars (CFG), Derivations & Ambiguity?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Programming language syntax specifications (BNF - Backus-Naur Form for Java, C, Python).",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Programming language syntax specifications (BNF - Backus-Naur Form for Java, C, Python).. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Leftmost derivation expands leftmost variable at each step."
  },
  {
    "id": "mcq-toc-u3-t1-6",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t1",
    "topicTitle": "Context-Free Grammars (CFG), Derivations & Ambiguity",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Context-Free Grammars (CFG), Derivations & Ambiguity. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Ambiguity = 2 or more parse trees for the same string..",
    "referenceExamPoint": "Rewrite the ambiguous arithmetic grammar into an unambiguous grammar with correct precedence and associativity."
  },
  {
    "id": "mcq-toc-u3-t1-7",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t1",
    "topicTitle": "Context-Free Grammars (CFG), Derivations & Ambiguity",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Inherently Ambiguous Language\" in Context-Free Grammars (CFG), Derivations & Ambiguity?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A context-free language for which no unambiguous grammar can possibly exist.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Inherently Ambiguous Language is specifically defined as: A context-free language for which no unambiguous grammar can possibly exist.",
    "referenceExamPoint": "Ambiguity = 2 or more parse trees for the same string."
  },
  {
    "id": "mcq-toc-u3-t1-8",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t1",
    "topicTitle": "Context-Free Grammars (CFG), Derivations & Ambiguity",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Context-Free Grammars (CFG), Derivations & Ambiguity, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Prove that the grammar E -> E + E | E * E | id is ambiguous by drawing two distinct parse trees for string \"id + id * id\"."
  },
  {
    "id": "mcq-toc-u3-t1-9",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t1",
    "topicTitle": "Context-Free Grammars (CFG), Derivations & Ambiguity",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Context-Free Grammars (CFG), Derivations & Ambiguity?",
    "options": [
      "Principle: CFG: 4-tuple (V, T, P, S). Left-hand side must be single variable.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: CFG: 4-tuple (V, T, P, S). Left-hand side must be single variable.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "CFG: 4-tuple (V, T, P, S). Left-hand side must be single variable."
  },
  {
    "id": "mcq-toc-u3-t1-10",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t1",
    "topicTitle": "Context-Free Grammars (CFG), Derivations & Ambiguity",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Context-Free Grammars (CFG), Derivations & Ambiguity?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Context-Free Grammars (CFG), Derivations & Ambiguity leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Compiler front-end parser generators (Bison, Yacc, ANTLR)."
  },
  {
    "id": "mcq-toc-u3-t2-1",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t2",
    "topicTitle": "Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)?",
    "options": [
      "A restricted CFG format where all productions are of the form A -> BC or A -> a.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A restricted CFG format where all productions are of the form A -> BC or A -> a.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Convert a given CFG into Chomsky Normal Form step-by-step: eliminate epsilon, unit, useless symbols, and split long rules."
  },
  {
    "id": "mcq-toc-u3-t2-2",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t2",
    "topicTitle": "Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)",
    "difficulty": "beginner",
    "question": "In the study of Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form), what is the role of \"Normal Forms\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "In a binary parse tree producing n leaves (terminals): internal nodes = n - 1 (requiring n-1 rule applications A->BC). Terminal transitions A->a = n rules. Total steps = (n-1) + n = 2n - 1.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "In a binary parse tree producing n leaves (terminals): internal nodes = n - 1 (requiring n-1 rule applications A->BC). Terminal transitions A->a = n rules. Total steps = (n-1) + n = 2n - 1.",
    "referenceExamPoint": "Prove that in a CNF grammar, deriving a string of length n takes exactly 2n - 1 steps."
  },
  {
    "id": "mcq-toc-u3-t2-3",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t2",
    "topicTitle": "Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Nullable Variable\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A non-terminal variable A from which the empty string epsilon can be derived (A =>* epsilon).",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Nullable Variable is formally defined as: A non-terminal variable A from which the empty string epsilon can be derived (A =>* epsilon).",
    "referenceExamPoint": "CNF rules: A -> BC or A -> a."
  },
  {
    "id": "mcq-toc-u3-t2-4",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t2",
    "topicTitle": "Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)",
    "difficulty": "intermediate",
    "question": "How does Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form) address the problem of system overhead or error conditions?",
    "options": [
      "Must eliminate epsilon-productions first, then unit productions, and finally useless symbols. Swapping order can re-introduce unit productions.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Must eliminate epsilon-productions first, then unit productions, and finally useless symbols. Swapping order can re-introduce unit productions.",
    "referenceExamPoint": "Differentiate Chomsky Normal Form (A -> BC | a) and Greibach Normal Form (A -> a alpha)."
  },
  {
    "id": "mcq-toc-u3-t2-5",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t2",
    "topicTitle": "Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Natural language syntactic chart parsers (CYK parsing in computational linguistics).",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Natural language syntactic chart parsers (CYK parsing in computational linguistics).. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Cleanup sequence: 1. Epsilon removal, 2. Unit removal, 3. Useless removal."
  },
  {
    "id": "mcq-toc-u3-t2-6",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t2",
    "topicTitle": "Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: CNF derivation of length n takes exactly 2n - 1 steps..",
    "referenceExamPoint": "Prove that in a CNF grammar, deriving a string of length n takes exactly 2n - 1 steps."
  },
  {
    "id": "mcq-toc-u3-t2-7",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t2",
    "topicTitle": "Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"CYK Algorithm\" in Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A dynamic programming algorithm that tests whether a string belongs to a context-free language in O(n^3) time using CNF.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "CYK Algorithm is specifically defined as: A dynamic programming algorithm that tests whether a string belongs to a context-free language in O(n^3) time using CNF.",
    "referenceExamPoint": "CNF derivation of length n takes exactly 2n - 1 steps."
  },
  {
    "id": "mcq-toc-u3-t2-8",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t2",
    "topicTitle": "Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Convert a given CFG into Chomsky Normal Form step-by-step: eliminate epsilon, unit, useless symbols, and split long rules."
  },
  {
    "id": "mcq-toc-u3-t2-9",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t2",
    "topicTitle": "Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)?",
    "options": [
      "Principle: CNF rules: A -> BC or A -> a.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: CNF rules: A -> BC or A -> a.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "CNF rules: A -> BC or A -> a."
  },
  {
    "id": "mcq-toc-u3-t2-10",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t2",
    "topicTitle": "Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Normal Forms for CFG (Chomsky Normal Form & Greibach Normal Form) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Formal grammar simplification in compiler construction."
  },
  {
    "id": "mcq-toc-u3-t3-1",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t3",
    "topicTitle": "Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)?",
    "options": [
      "A computational state machine equipped with an unbounded LIFO stack memory that recognizes context-free languages.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A computational state machine equipped with an unbounded LIFO stack memory that recognizes context-free languages.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Design a PDA to accept L = { 0^n 1^n | n >= 1 } by empty stack and by final state with complete transition function."
  },
  {
    "id": "mcq-toc-u3-t3-2",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t3",
    "topicTitle": "Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)",
    "difficulty": "beginner",
    "question": "In the study of Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack), what is the role of \"PDA\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "delta(q, a, X) = (p, alpha): reads input a, pops X from top of stack, pushes string alpha onto stack, transitions to state p.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "delta(q, a, X) = (p, alpha): reads input a, pops X from top of stack, pushes string alpha onto stack, transitions to state p.",
    "referenceExamPoint": "Prove the equivalence of acceptance by final state and acceptance by empty stack."
  },
  {
    "id": "mcq-toc-u3-t3-3",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t3",
    "topicTitle": "Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Stack Alphabet (Gamma)\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The finite set of symbols that can be pushed onto and popped from the PDA stack memory.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Stack Alphabet (Gamma) is formally defined as: The finite set of symbols that can be pushed onto and popped from the PDA stack memory.",
    "referenceExamPoint": "PDA: 7-tuple (Q, Sigma, Gamma, delta, q0, z0, F)."
  },
  {
    "id": "mcq-toc-u3-t3-4",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t3",
    "topicTitle": "Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)",
    "difficulty": "intermediate",
    "question": "How does Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack) address the problem of system overhead or error conditions?",
    "options": [
      "To convert Empty Stack to Final State: add new start state pushing new bottom marker, and new final state reached on sensing original bottom marker.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "To convert Empty Stack to Final State: add new start state pushing new bottom marker, and new final state reached on sensing original bottom marker.",
    "referenceExamPoint": "Explain why Deterministic PDAs are strictly less powerful than Non-Deterministic PDAs with a counterexample (palindromes)."
  },
  {
    "id": "mcq-toc-u3-t3-5",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t3",
    "topicTitle": "Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Compiler syntax analyzers (pushdown parser implementations).",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Compiler syntax analyzers (pushdown parser implementations).. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Stack is LIFO: Push, Pop, or No-op."
  },
  {
    "id": "mcq-toc-u3-t3-6",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t3",
    "topicTitle": "Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Final State vs Empty Stack acceptance are mathematically equivalent..",
    "referenceExamPoint": "Prove the equivalence of acceptance by final state and acceptance by empty stack."
  },
  {
    "id": "mcq-toc-u3-t3-7",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t3",
    "topicTitle": "Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"DPDA vs NPDA\" in Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "Deterministic PDAs have at most one transition per configuration; Non-deterministic PDAs can explore multiple branches and accept a strictly larger language class.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "DPDA vs NPDA is specifically defined as: Deterministic PDAs have at most one transition per configuration; Non-deterministic PDAs can explore multiple branches and accept a strictly larger language class.",
    "referenceExamPoint": "Final State vs Empty Stack acceptance are mathematically equivalent."
  },
  {
    "id": "mcq-toc-u3-t3-8",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t3",
    "topicTitle": "Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Design a PDA to accept L = { 0^n 1^n | n >= 1 } by empty stack and by final state with complete transition function."
  },
  {
    "id": "mcq-toc-u3-t3-9",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t3",
    "topicTitle": "Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)?",
    "options": [
      "Principle: PDA: 7-tuple (Q, Sigma, Gamma, delta, q0, z0, F).",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: PDA: 7-tuple (Q, Sigma, Gamma, delta, q0, z0, F).. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "PDA: 7-tuple (Q, Sigma, Gamma, delta, q0, z0, F)."
  },
  {
    "id": "mcq-toc-u3-t3-10",
    "subjectId": "toc",
    "unitId": "toc-u3",
    "topicId": "toc-u3-t3",
    "topicTitle": "Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Pushdown Automata (PDA) (Acceptance by Final State vs Empty Stack) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Nested HTML/XML tag hierarchy validation."
  },
  {
    "id": "mcq-toc-u4-t1-1",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t1",
    "topicTitle": "Pumping Lemma for Context-Free Languages & Limitations",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Pumping Lemma for Context-Free Languages & Limitations?",
    "options": [
      "A mathematical property stating that any sufficiently long string in a CFL can be divided into uvwxy where v and x can be simultaneously pumped.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A mathematical property stating that any sufficiently long string in a CFL can be divided into uvwxy where v and x can be simultaneously pumped.. The other choices are incorrect distractors.",
    "referenceExamPoint": "State the Pumping Lemma for Context-Free Languages with all 3 conditions."
  },
  {
    "id": "mcq-toc-u4-t1-2",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t1",
    "topicTitle": "Pumping Lemma for Context-Free Languages & Limitations",
    "difficulty": "beginner",
    "question": "In the study of Pumping Lemma for Context-Free Languages & Limitations, what is the role of \"Pumping Lemma for CFL\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "A single variable A in a parse tree expands into left branch v, middle tree w, and right branch x. Pumping A repeats both branches v and x symmetrically.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "A single variable A in a parse tree expands into left branch v, middle tree w, and right branch x. Pumping A repeats both branches v and x symmetrically.",
    "referenceExamPoint": "Prove that L = { a^n b^n c^n | n >= 1 } is not context-free using the Pumping Lemma."
  },
  {
    "id": "mcq-toc-u4-t1-3",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t1",
    "topicTitle": "Pumping Lemma for Context-Free Languages & Limitations",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Parse Tree Height\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The length of the longest path from root to leaf in a parse tree, determining whether variable repetition must occur.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Parse Tree Height is formally defined as: The length of the longest path from root to leaf in a parse tree, determining whether variable repetition must occur.",
    "referenceExamPoint": "CFL Pumping Lemma partitions string into 5 parts: uvwxy."
  },
  {
    "id": "mcq-toc-u4-t1-4",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t1",
    "topicTitle": "Pumping Lemma for Context-Free Languages & Limitations",
    "difficulty": "intermediate",
    "question": "How does Pumping Lemma for Context-Free Languages & Limitations address the problem of system overhead or error conditions?",
    "options": [
      "The constraint |vwx| <= p ensures v and x can bridge at most two adjacent blocks of letters. It can never touch a and c at the same time.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "The constraint |vwx| <= p ensures v and x can bridge at most two adjacent blocks of letters. It can never touch a and c at the same time.",
    "referenceExamPoint": "Prove that L = { w w | w in {0,1}* } is not context-free."
  },
  {
    "id": "mcq-toc-u4-t1-5",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t1",
    "topicTitle": "Pumping Lemma for Context-Free Languages & Limitations",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Pumping Lemma for Context-Free Languages & Limitations?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Proving natural languages (like Swiss-German) have cross-serial dependencies exceeding context-free grammars.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Proving natural languages (like Swiss-German) have cross-serial dependencies exceeding context-free grammars.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Conditions: 1. |vwx| <= p, 2. |vx| >= 1, 3. u(v^i)w(x^i)y in L for all i >= 0."
  },
  {
    "id": "mcq-toc-u4-t1-6",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t1",
    "topicTitle": "Pumping Lemma for Context-Free Languages & Limitations",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Pumping Lemma for Context-Free Languages & Limitations. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Cannot coordinate 3 independent counts (e.g. a^n b^n c^n is NOT CFL)..",
    "referenceExamPoint": "Prove that L = { a^n b^n c^n | n >= 1 } is not context-free using the Pumping Lemma."
  },
  {
    "id": "mcq-toc-u4-t1-7",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t1",
    "topicTitle": "Pumping Lemma for Context-Free Languages & Limitations",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Cross-Serial Dependencies\" in Pumping Lemma for Context-Free Languages & Limitations?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "Syntactic dependencies (like a^n b^n c^n or w w) that exceed the nesting capacity of pushdown stacks.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Cross-Serial Dependencies is specifically defined as: Syntactic dependencies (like a^n b^n c^n or w w) that exceed the nesting capacity of pushdown stacks.",
    "referenceExamPoint": "Cannot coordinate 3 independent counts (e.g. a^n b^n c^n is NOT CFL)."
  },
  {
    "id": "mcq-toc-u4-t1-8",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t1",
    "topicTitle": "Pumping Lemma for Context-Free Languages & Limitations",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Pumping Lemma for Context-Free Languages & Limitations, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "State the Pumping Lemma for Context-Free Languages with all 3 conditions."
  },
  {
    "id": "mcq-toc-u4-t1-9",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t1",
    "topicTitle": "Pumping Lemma for Context-Free Languages & Limitations",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Pumping Lemma for Context-Free Languages & Limitations?",
    "options": [
      "Principle: CFL Pumping Lemma partitions string into 5 parts: uvwxy.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: CFL Pumping Lemma partitions string into 5 parts: uvwxy.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "CFL Pumping Lemma partitions string into 5 parts: uvwxy."
  },
  {
    "id": "mcq-toc-u4-t1-10",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t1",
    "topicTitle": "Pumping Lemma for Context-Free Languages & Limitations",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Pumping Lemma for Context-Free Languages & Limitations?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Pumping Lemma for Context-Free Languages & Limitations leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Compiler validation ensuring type-checking constraints are handled beyond pure context-free parsing."
  },
  {
    "id": "mcq-toc-u4-t2-1",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t2",
    "topicTitle": "Closure Properties of Context-Free Languages",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Closure Properties of Context-Free Languages?",
    "options": [
      "Operations under which the combination of CFLs remains context-free (Union, Concatenation, Star).",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: Operations under which the combination of CFLs remains context-free (Union, Concatenation, Star).. The other choices are incorrect distractors.",
    "referenceExamPoint": "Prove that Context-Free Languages are NOT closed under intersection using a concrete counterexample."
  },
  {
    "id": "mcq-toc-u4-t2-2",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t2",
    "topicTitle": "Closure Properties of Context-Free Languages",
    "difficulty": "beginner",
    "question": "In the study of Closure Properties of Context-Free Languages, what is the role of \"Closure Properties\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Given G1 with start S1 and G2 with start S2. New grammar G has start S with rule S -> S1 | S2. Trivially generates L1 U L2.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Given G1 with start S1 and G2 with start S2. New grammar G has start S with rule S -> S1 | S2. Trivially generates L1 U L2.",
    "referenceExamPoint": "Prove that CFLs are NOT closed under complementation using De Morgan Laws."
  },
  {
    "id": "mcq-toc-u4-t2-3",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t2",
    "topicTitle": "Closure Properties of Context-Free Languages",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Non-Closure under Intersection\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The mathematical fact that the intersection of two context-free languages is not necessarily context-free.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Non-Closure under Intersection is formally defined as: The mathematical fact that the intersection of two context-free languages is not necessarily context-free.",
    "referenceExamPoint": "CFLs closed under: Union, Concatenation, Kleene Star."
  },
  {
    "id": "mcq-toc-u4-t2-4",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t2",
    "topicTitle": "Closure Properties of Context-Free Languages",
    "difficulty": "intermediate",
    "question": "How does Closure Properties of Context-Free Languages address the problem of system overhead or error conditions?",
    "options": [
      "To prove L is not context-free, intersect L with a carefully selected regular language R. If L Intersect R is a known non-CFL, then L cannot be CFL.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "To prove L is not context-free, intersect L with a carefully selected regular language R. If L Intersect R is a known non-CFL, then L cannot be CFL.",
    "referenceExamPoint": "State and prove the theorem: If L is a CFL and R is a regular language, then L Intersect R is a CFL."
  },
  {
    "id": "mcq-toc-u4-t2-5",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t2",
    "topicTitle": "Closure Properties of Context-Free Languages",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Closure Properties of Context-Free Languages?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Compiler front-end architecture separating lexing (regular) from parsing (context-free).",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Compiler front-end architecture separating lexing (regular) from parsing (context-free).. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "CFLs NOT closed under: Intersection, Complement."
  },
  {
    "id": "mcq-toc-u4-t2-6",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t2",
    "topicTitle": "Closure Properties of Context-Free Languages",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Closure Properties of Context-Free Languages. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Counterexample: {a^n b^n c^m} Intersect {a^m b^n c^n} = {a^n b^n c^n}..",
    "referenceExamPoint": "Prove that CFLs are NOT closed under complementation using De Morgan Laws."
  },
  {
    "id": "mcq-toc-u4-t2-7",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t2",
    "topicTitle": "Closure Properties of Context-Free Languages",
    "difficulty": "intermediate",
    "question": "What distinguishes \"CFL-Regular Cross Product\" in Closure Properties of Context-Free Languages?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "An automaton combining a PDA and a DFA demonstrating that intersecting a CFL with a regular set yields a CFL.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "CFL-Regular Cross Product is specifically defined as: An automaton combining a PDA and a DFA demonstrating that intersecting a CFL with a regular set yields a CFL.",
    "referenceExamPoint": "Counterexample: {a^n b^n c^m} Intersect {a^m b^n c^n} = {a^n b^n c^n}."
  },
  {
    "id": "mcq-toc-u4-t2-8",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t2",
    "topicTitle": "Closure Properties of Context-Free Languages",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Closure Properties of Context-Free Languages, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Prove that Context-Free Languages are NOT closed under intersection using a concrete counterexample."
  },
  {
    "id": "mcq-toc-u4-t2-9",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t2",
    "topicTitle": "Closure Properties of Context-Free Languages",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Closure Properties of Context-Free Languages?",
    "options": [
      "Principle: CFLs closed under: Union, Concatenation, Kleene Star.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: CFLs closed under: Union, Concatenation, Kleene Star.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "CFLs closed under: Union, Concatenation, Kleene Star."
  },
  {
    "id": "mcq-toc-u4-t2-10",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t2",
    "topicTitle": "Closure Properties of Context-Free Languages",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Closure Properties of Context-Free Languages?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Closure Properties of Context-Free Languages leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Security validation of programming language grammar subsets."
  },
  {
    "id": "mcq-toc-u4-t3-1",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t3",
    "topicTitle": "Standard Turing Machine: 7-Tuple Definition, Configurations & Design",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Standard Turing Machine: 7-Tuple Definition, Configurations & Design?",
    "options": [
      "A 7-tuple abstract computational model with an infinite read-write tape capable of simulating any algorithmic computation.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A 7-tuple abstract computational model with an infinite read-write tape capable of simulating any algorithmic computation.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Write the formal 7-tuple definition of a Turing Machine and explain each component."
  },
  {
    "id": "mcq-toc-u4-t3-2",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t3",
    "topicTitle": "Standard Turing Machine: 7-Tuple Definition, Configurations & Design",
    "difficulty": "beginner",
    "question": "In the study of Standard Turing Machine: 7-Tuple Definition, Configurations & Design, what is the role of \"Turing Machine\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "1. Scan right, replace first 0 with X. 2. Scan right to first 1, replace with Y. 3. Scan left to leftmost 0. Repeat until all 0s are X and all 1s are Y. 4. If tape contains only X and Y, accept.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "1. Scan right, replace first 0 with X. 2. Scan right to first 1, replace with Y. 3. Scan left to leftmost 0. Repeat until all 0s are X and all 1s are Y. 4. If tape contains only X and Y, accept.",
    "referenceExamPoint": "Design a Turing Machine to accept L = { 0^n 1^n | n >= 1 } with complete transition table or state diagram."
  },
  {
    "id": "mcq-toc-u4-t3-3",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t3",
    "topicTitle": "Standard Turing Machine: 7-Tuple Definition, Configurations & Design",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Instantaneous Description (ID)\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A compact string notation u q v representing current state q, tape content uv, and head scanning the first symbol of v.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Instantaneous Description (ID) is formally defined as: A compact string notation u q v representing current state q, tape content uv, and head scanning the first symbol of v.",
    "referenceExamPoint": "TM: 7-tuple (Q, Sigma, Gamma, delta, q0, B, F)."
  },
  {
    "id": "mcq-toc-u4-t3-4",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t3",
    "topicTitle": "Standard Turing Machine: 7-Tuple Definition, Configurations & Design",
    "difficulty": "intermediate",
    "question": "How does Standard Turing Machine: 7-Tuple Definition, Configurations & Design address the problem of system overhead or error conditions?",
    "options": [
      "A TM accepts by entering q_accept. It rejects either by entering q_reject (or halting on undefined transition), OR by looping forever.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "A TM accepts by entering q_accept. It rejects either by entering q_reject (or halting on undefined transition), OR by looping forever.",
    "referenceExamPoint": "Trace the sequence of Instantaneous Descriptions (IDs) for input \"0011\" on your designed Turing Machine."
  },
  {
    "id": "mcq-toc-u4-t3-5",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t3",
    "topicTitle": "Standard Turing Machine: 7-Tuple Definition, Configurations & Design",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Standard Turing Machine: 7-Tuple Definition, Configurations & Design?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Theoretical upper bounds on algorithm computability.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Theoretical upper bounds on algorithm computability.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "delta(q, X) = (p, Y, L/R): change state, write symbol, move head Left or Right."
  },
  {
    "id": "mcq-toc-u4-t3-6",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t3",
    "topicTitle": "Standard Turing Machine: 7-Tuple Definition, Configurations & Design",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Standard Turing Machine: 7-Tuple Definition, Configurations & Design. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Tape is infinite; blank symbol B fills unused cells..",
    "referenceExamPoint": "Design a Turing Machine to accept L = { 0^n 1^n | n >= 1 } with complete transition table or state diagram."
  },
  {
    "id": "mcq-toc-u4-t3-7",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t3",
    "topicTitle": "Standard Turing Machine: 7-Tuple Definition, Configurations & Design",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Turing-Decidable (Recursive)\" in Standard Turing Machine: 7-Tuple Definition, Configurations & Design?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A language for which there exists a Turing Machine that halts and makes a definitive decision (accept or reject) on every input.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Turing-Decidable (Recursive) is specifically defined as: A language for which there exists a Turing Machine that halts and makes a definitive decision (accept or reject) on every input.",
    "referenceExamPoint": "Tape is infinite; blank symbol B fills unused cells."
  },
  {
    "id": "mcq-toc-u4-t3-8",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t3",
    "topicTitle": "Standard Turing Machine: 7-Tuple Definition, Configurations & Design",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Standard Turing Machine: 7-Tuple Definition, Configurations & Design, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Write the formal 7-tuple definition of a Turing Machine and explain each component."
  },
  {
    "id": "mcq-toc-u4-t3-9",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t3",
    "topicTitle": "Standard Turing Machine: 7-Tuple Definition, Configurations & Design",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Standard Turing Machine: 7-Tuple Definition, Configurations & Design?",
    "options": [
      "Principle: TM: 7-tuple (Q, Sigma, Gamma, delta, q0, B, F).",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: TM: 7-tuple (Q, Sigma, Gamma, delta, q0, B, F).. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "TM: 7-tuple (Q, Sigma, Gamma, delta, q0, B, F)."
  },
  {
    "id": "mcq-toc-u4-t3-10",
    "subjectId": "toc",
    "unitId": "toc-u4",
    "topicId": "toc-u4-t3",
    "topicTitle": "Standard Turing Machine: 7-Tuple Definition, Configurations & Design",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Standard Turing Machine: 7-Tuple Definition, Configurations & Design?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Standard Turing Machine: 7-Tuple Definition, Configurations & Design leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Formal models of modern CPU architectures and memory buses."
  },
  {
    "id": "mcq-toc-u5-t1-1",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t1",
    "topicTitle": "Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)?",
    "options": [
      "The conjecture that every algorithmically computable function can be computed by a standard Turing machine.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: The conjecture that every algorithmically computable function can be computed by a standard Turing machine.. The other choices are incorrect distractors.",
    "referenceExamPoint": "State the Church-Turing Thesis and explain why it is a thesis rather than a mathematical theorem."
  },
  {
    "id": "mcq-toc-u5-t1-2",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t1",
    "topicTitle": "Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)",
    "difficulty": "beginner",
    "question": "In the study of Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic), what is the role of \"Church-Turing Thesis\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Store all k tapes on a single tape separated by delimiter #. Track each tape head position by placing a virtual marker symbol (e.g. X_dot) over the active cell.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Store all k tapes on a single tape separated by delimiter #. Track each tape head position by placing a virtual marker symbol (e.g. X_dot) over the active cell.",
    "referenceExamPoint": "Prove that a Multi-Tape Turing Machine is computationally equivalent to a Single-Tape Turing Machine."
  },
  {
    "id": "mcq-toc-u5-t1-3",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t1",
    "topicTitle": "Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Multi-Tape Turing Machine\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A variant of a Turing Machine possessing multiple independent memory tapes and heads, speeding up algorithms by at most a square.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Multi-Tape Turing Machine is formally defined as: A variant of a Turing Machine possessing multiple independent memory tapes and heads, speeding up algorithms by at most a square.",
    "referenceExamPoint": "Church-Turing Thesis: Algorithm == Turing Machine computation."
  },
  {
    "id": "mcq-toc-u5-t1-4",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t1",
    "topicTitle": "Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)",
    "difficulty": "intermediate",
    "question": "How does Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic) address the problem of system overhead or error conditions?",
    "options": [
      "Alan Turing conceptualized the Stored-Program Computer in 1936: instead of building specialized hardware for each problem, build a single machine that interprets software programs.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Alan Turing conceptualized the Stored-Program Computer in 1936: instead of building specialized hardware for each problem, build a single machine that interprets software programs.",
    "referenceExamPoint": "Explain how a Deterministic TM simulates a Non-Deterministic TM using breadth-first tree search."
  },
  {
    "id": "mcq-toc-u5-t1-5",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t1",
    "topicTitle": "Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Foundational architecture of programmable microprocessors (von Neumann architecture).",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Foundational architecture of programmable microprocessors (von Neumann architecture).. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Multi-tape TM is equivalent to single-tape TM (quadratic O(t^2) slowdown)."
  },
  {
    "id": "mcq-toc-u5-t1-6",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t1",
    "topicTitle": "Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Non-deterministic TM is equivalent to deterministic TM (exponential O(b^t) slowdown)..",
    "referenceExamPoint": "Prove that a Multi-Tape Turing Machine is computationally equivalent to a Single-Tape Turing Machine."
  },
  {
    "id": "mcq-toc-u5-t1-7",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t1",
    "topicTitle": "Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Universal Turing Machine (UTM)\" in Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A Turing Machine U capable of simulating any arbitrary Turing Machine M on input w when provided the encoded description <M, w>.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Universal Turing Machine (UTM) is specifically defined as: A Turing Machine U capable of simulating any arbitrary Turing Machine M on input w when provided the encoded description <M, w>.",
    "referenceExamPoint": "Non-deterministic TM is equivalent to deterministic TM (exponential O(b^t) slowdown)."
  },
  {
    "id": "mcq-toc-u5-t1-8",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t1",
    "topicTitle": "Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "State the Church-Turing Thesis and explain why it is a thesis rather than a mathematical theorem."
  },
  {
    "id": "mcq-toc-u5-t1-9",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t1",
    "topicTitle": "Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)?",
    "options": [
      "Principle: Church-Turing Thesis: Algorithm == Turing Machine computation.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Church-Turing Thesis: Algorithm == Turing Machine computation.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Church-Turing Thesis: Algorithm == Turing Machine computation."
  },
  {
    "id": "mcq-toc-u5-t1-10",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t1",
    "topicTitle": "Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Church-Turing Thesis & Turing Machine Variations (Multi-tape, Non-deterministic) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Theoretical programming language expressiveness evaluation (Turing-completeness)."
  },
  {
    "id": "mcq-toc-u5-t2-1",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t2",
    "topicTitle": "Decidable Languages, Undecidability & The Halting Problem",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Decidable Languages, Undecidability & The Halting Problem?",
    "options": [
      "The problem of determining whether a given Turing Machine M will halt on a specific input string w.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: The problem of determining whether a given Turing Machine M will halt on a specific input string w.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Prove that the Halting Problem is undecidable using Alan Turing diagonalization and contradiction argument."
  },
  {
    "id": "mcq-toc-u5-t2-2",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t2",
    "topicTitle": "Decidable Languages, Undecidability & The Halting Problem",
    "difficulty": "beginner",
    "question": "In the study of Decidable Languages, Undecidability & The Halting Problem, what is the role of \"Decidability\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "If we could solve B, we could solve A. But A is known to be impossible. Therefore, B is also impossible.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "If we could solve B, we could solve A. But A is known to be impossible. Therefore, B is also impossible.",
    "referenceExamPoint": "State Rice Theorem and apply it to determine if \"L(M) is finite\" is decidable."
  },
  {
    "id": "mcq-toc-u5-t2-3",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t2",
    "topicTitle": "Decidable Languages, Undecidability & The Halting Problem",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Diagonalization Method\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A mathematical proof technique developed by Georg Cantor and adapted by Turing that constructs counterexamples by inverting diagonal matrix entries.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Diagonalization Method is formally defined as: A mathematical proof technique developed by Georg Cantor and adapted by Turing that constructs counterexamples by inverting diagonal matrix entries.",
    "referenceExamPoint": "Decidable: Halts on all inputs. Undecidable: No algorithm can decide all inputs."
  },
  {
    "id": "mcq-toc-u5-t2-4",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t2",
    "topicTitle": "Decidable Languages, Undecidability & The Halting Problem",
    "difficulty": "intermediate",
    "question": "How does Decidable Languages, Undecidability & The Halting Problem address the problem of system overhead or error conditions?",
    "options": [
      "Syntactic property (Does M have 5 states?) is decidable. Semantic property (Does M accept any palindromes?) is undecidable by Rice Theorem.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Syntactic property (Does M have 5 states?) is decidable. Semantic property (Does M accept any palindromes?) is undecidable by Rice Theorem.",
    "referenceExamPoint": "Explain how reduction (A <=_m B) proves that problem B is undecidable if problem A is undecidable."
  },
  {
    "id": "mcq-toc-u5-t2-5",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t2",
    "topicTitle": "Decidable Languages, Undecidability & The Halting Problem",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Decidable Languages, Undecidability & The Halting Problem?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Proving that perfect automated software bug detectors (antivirus, security checkers) can never be mathematically complete.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Proving that perfect automated software bug detectors (antivirus, security checkers) can never be mathematically complete.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Halting Problem HALT_TM is undecidable (proven by diagonalization)."
  },
  {
    "id": "mcq-toc-u5-t2-6",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t2",
    "topicTitle": "Decidable Languages, Undecidability & The Halting Problem",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Decidable Languages, Undecidability & The Halting Problem. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Rice Theorem: All non-trivial semantic properties of TMs are undecidable..",
    "referenceExamPoint": "State Rice Theorem and apply it to determine if \"L(M) is finite\" is decidable."
  },
  {
    "id": "mcq-toc-u5-t2-7",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t2",
    "topicTitle": "Decidable Languages, Undecidability & The Halting Problem",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Rice Theorem\" in Decidable Languages, Undecidability & The Halting Problem?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A foundational theorem stating that any non-trivial semantic behavioral property of Turing machines is undecidable.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Rice Theorem is specifically defined as: A foundational theorem stating that any non-trivial semantic behavioral property of Turing machines is undecidable.",
    "referenceExamPoint": "Rice Theorem: All non-trivial semantic properties of TMs are undecidable."
  },
  {
    "id": "mcq-toc-u5-t2-8",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t2",
    "topicTitle": "Decidable Languages, Undecidability & The Halting Problem",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Decidable Languages, Undecidability & The Halting Problem, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Prove that the Halting Problem is undecidable using Alan Turing diagonalization and contradiction argument."
  },
  {
    "id": "mcq-toc-u5-t2-9",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t2",
    "topicTitle": "Decidable Languages, Undecidability & The Halting Problem",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Decidable Languages, Undecidability & The Halting Problem?",
    "options": [
      "Principle: Decidable: Halts on all inputs. Undecidable: No algorithm can decide all inputs.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Decidable: Halts on all inputs. Undecidable: No algorithm can decide all inputs.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Decidable: Halts on all inputs. Undecidable: No algorithm can decide all inputs."
  },
  {
    "id": "mcq-toc-u5-t2-10",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t2",
    "topicTitle": "Decidable Languages, Undecidability & The Halting Problem",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Decidable Languages, Undecidability & The Halting Problem?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Decidable Languages, Undecidability & The Halting Problem leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Compiler optimization bounds (determining if code branch is reachable)."
  },
  {
    "id": "mcq-toc-u5-t3-1",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t3",
    "topicTitle": "Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard?",
    "options": [
      "The set of all decision problems solvable by a deterministic algorithm in polynomial time O(n^k).",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: The set of all decision problems solvable by a deterministic algorithm in polynomial time O(n^k).. The other choices are incorrect distractors.",
    "referenceExamPoint": "Define the complexity classes P, NP, NP-Complete, and NP-Hard."
  },
  {
    "id": "mcq-toc-u5-t3-2",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t3",
    "topicTitle": "Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard",
    "difficulty": "beginner",
    "question": "In the study of Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard, what is the role of \"Complexity\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Sudoku: Solving a 100x100 puzzle is extremely difficult (exponential search). Verifying a completed puzzle takes seconds (polynomial row/column scan).",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Sudoku: Solving a 100x100 puzzle is extremely difficult (exponential search). Verifying a completed puzzle takes seconds (polynomial row/column scan).",
    "referenceExamPoint": "State the Cook-Levin Theorem and explain its historical significance."
  },
  {
    "id": "mcq-toc-u5-t3-3",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t3",
    "topicTitle": "Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Class NP\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The set of all decision problems whose candidate solutions can be verified in polynomial time.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Class NP is formally defined as: The set of all decision problems whose candidate solutions can be verified in polynomial time.",
    "referenceExamPoint": "P: Solvable in polynomial time O(n^k)."
  },
  {
    "id": "mcq-toc-u5-t3-4",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t3",
    "topicTitle": "Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard",
    "difficulty": "intermediate",
    "question": "How does Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard address the problem of system overhead or error conditions?",
    "options": [
      "Stephen Cook proved SAT is NP-Complete directly from the definition by showing that ANY polynomial-time Turing machine computation can be encoded as a Boolean formula.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Stephen Cook proved SAT is NP-Complete directly from the definition by showing that ANY polynomial-time Turing machine computation can be encoded as a Boolean formula.",
    "referenceExamPoint": "Explain how to prove a new problem is NP-Complete using polynomial-time reduction from a known NP-Complete problem."
  },
  {
    "id": "mcq-toc-u5-t3-5",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t3",
    "topicTitle": "Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Cryptography and public-key encryption security (relying on NP-hard factoring / discrete log assumptions).",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Cryptography and public-key encryption security (relying on NP-hard factoring / discrete log assumptions).. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "NP: Verifiable in polynomial time."
  },
  {
    "id": "mcq-toc-u5-t3-6",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t3",
    "topicTitle": "Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: NP-Hard: At least as hard as any problem in NP (may not be in NP)..",
    "referenceExamPoint": "State the Cook-Levin Theorem and explain its historical significance."
  },
  {
    "id": "mcq-toc-u5-t3-7",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t3",
    "topicTitle": "Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard",
    "difficulty": "intermediate",
    "question": "What distinguishes \"NP-Complete\" in Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The subset of NP problems that are as hard as any problem in NP; if one is in P, all NP problems are in P.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "NP-Complete is specifically defined as: The subset of NP problems that are as hard as any problem in NP; if one is in P, all NP problems are in P.",
    "referenceExamPoint": "NP-Hard: At least as hard as any problem in NP (may not be in NP)."
  },
  {
    "id": "mcq-toc-u5-t3-8",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t3",
    "topicTitle": "Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Define the complexity classes P, NP, NP-Complete, and NP-Hard."
  },
  {
    "id": "mcq-toc-u5-t3-9",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t3",
    "topicTitle": "Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard?",
    "options": [
      "Principle: P: Solvable in polynomial time O(n^k).",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: P: Solvable in polynomial time O(n^k).. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "P: Solvable in polynomial time O(n^k)."
  },
  {
    "id": "mcq-toc-u5-t3-10",
    "subjectId": "toc",
    "unitId": "toc-u5",
    "topicId": "toc-u5-t3",
    "topicTitle": "Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Computational Complexity Classes P, NP, NP-Complete (Cook-Levin Theorem) & NP-Hard leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Logistics supply chain delivery optimization (Traveling Salesperson heuristic solvers)."
  }
];
