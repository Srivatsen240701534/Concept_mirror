import { MCQuestion } from '../../types';

export const CN_MCQS: MCQuestion[] = [
  {
    "id": "mcq-cn-u1-t1-1",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t1",
    "topicTitle": "Network Topologies & System Architectures",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Network Topologies & System Architectures?",
    "options": [
      "The actual physical layout and cable routing of transmission media and networking hardware.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: The actual physical layout and cable routing of transmission media and networking hardware.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Full mesh formula n(n-1)/2 is a standard numerical calculation in exams."
  },
  {
    "id": "mcq-cn-u1-t1-2",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t1",
    "topicTitle": "Network Topologies & System Architectures",
    "difficulty": "beginner",
    "question": "In the study of Network Topologies & System Architectures, what is the role of \"Topology\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Star networks rely on central intelligence (switch) to filter traffic, while bus networks rely on broadcast collision domains.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Star networks rely on central intelligence (switch) to filter traffic, while bus networks rely on broadcast collision domains.",
    "referenceExamPoint": "Differentiate physical star vs logical bus (e.g. legacy hubs)."
  },
  {
    "id": "mcq-cn-u1-t1-3",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t1",
    "topicTitle": "Network Topologies & System Architectures",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Logical Topology\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The path along which data signals travel from node to node across the network medium.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Logical Topology is formally defined as: The path along which data signals travel from node to node across the network medium.",
    "referenceExamPoint": "Star: Central switch, easiest fault isolation."
  },
  {
    "id": "mcq-cn-u1-t1-4",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t1",
    "topicTitle": "Network Topologies & System Architectures",
    "difficulty": "intermediate",
    "question": "How does Network Topologies & System Architectures address the problem of system overhead or error conditions?",
    "options": [
      "In a full mesh of n nodes, the total number of physical duplex links required is given by N = n*(n - 1) / 2.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "In a full mesh of n nodes, the total number of physical duplex links required is given by N = n*(n - 1) / 2.",
    "referenceExamPoint": "Client-server centralizes management; P2P distributes bandwidth."
  },
  {
    "id": "mcq-cn-u1-t1-5",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t1",
    "topicTitle": "Network Topologies & System Architectures",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Network Topologies & System Architectures?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Enterprise office LANs (Switched Star).",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Enterprise office LANs (Switched Star).. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Mesh: Highest fault tolerance, n(n-1)/2 links, n-1 ports per node."
  },
  {
    "id": "mcq-cn-u1-t1-6",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t1",
    "topicTitle": "Network Topologies & System Architectures",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Network Topologies & System Architectures. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Bus: Shared coaxial cable, terminators required..",
    "referenceExamPoint": "Differentiate physical star vs logical bus (e.g. legacy hubs)."
  },
  {
    "id": "mcq-cn-u1-t1-7",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t1",
    "topicTitle": "Network Topologies & System Architectures",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Full Mesh Topology\" in Network Topologies & System Architectures?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A network design where every node connects directly to every other node via dedicated links, requiring n*(n-1)/2 links for n nodes.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Full Mesh Topology is specifically defined as: A network design where every node connects directly to every other node via dedicated links, requiring n*(n-1)/2 links for n nodes.",
    "referenceExamPoint": "Bus: Shared coaxial cable, terminators required."
  },
  {
    "id": "mcq-cn-u1-t1-8",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t1",
    "topicTitle": "Network Topologies & System Architectures",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Network Topologies & System Architectures, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Full mesh formula n(n-1)/2 is a standard numerical calculation in exams."
  },
  {
    "id": "mcq-cn-u1-t1-9",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t1",
    "topicTitle": "Network Topologies & System Architectures",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Network Topologies & System Architectures?",
    "options": [
      "Principle: Star: Central switch, easiest fault isolation.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Star: Central switch, easiest fault isolation.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Star: Central switch, easiest fault isolation."
  },
  {
    "id": "mcq-cn-u1-t1-10",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t1",
    "topicTitle": "Network Topologies & System Architectures",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Network Topologies & System Architectures?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Network Topologies & System Architectures leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Core ISP backbone router interconnections (Full/Partial Mesh)."
  },
  {
    "id": "mcq-cn-u1-t2-1",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t2",
    "topicTitle": "OSI and TCP/IP Reference Models",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of OSI and TCP/IP Reference Models?",
    "options": [
      "The discrete unit of data exchanged by peer entities at a specific layer: Frame, Packet, Segment, Message.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: The discrete unit of data exchanged by peer entities at a specific layer: Frame, Packet, Segment, Message.. The other choices are incorrect distractors.",
    "referenceExamPoint": "List all 7 OSI layers in exact top-down or bottom-up order."
  },
  {
    "id": "mcq-cn-u1-t2-2",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t2",
    "topicTitle": "OSI and TCP/IP Reference Models",
    "difficulty": "beginner",
    "question": "In the study of OSI and TCP/IP Reference Models, what is the role of \"OSI Model\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Layer 4 uses Segments/Datagrams; Layer 3 uses Packets; Layer 2 uses Frames; Layer 1 uses raw Bits.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Layer 4 uses Segments/Datagrams; Layer 3 uses Packets; Layer 2 uses Frames; Layer 1 uses raw Bits.",
    "referenceExamPoint": "Map OSI layers 5, 6, 7 to the single TCP/IP Application layer."
  },
  {
    "id": "mcq-cn-u1-t2-3",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t2",
    "topicTitle": "OSI and TCP/IP Reference Models",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Encapsulation\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The addition of control headers and trailers to payload data as it moves down through the network protocol layers.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Encapsulation is formally defined as: The addition of control headers and trailers to payload data as it moves down through the network protocol layers.",
    "referenceExamPoint": "OSI: Theoretical 7-layer framework."
  },
  {
    "id": "mcq-cn-u1-t2-4",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t2",
    "topicTitle": "OSI and TCP/IP Reference Models",
    "difficulty": "intermediate",
    "question": "How does OSI and TCP/IP Reference Models address the problem of system overhead or error conditions?",
    "options": [
      "Application data -> [TCP Header | Data] -> [IP Header | TCP | Data] -> [Ethernet Header | IP | TCP | Data | FCS Trailer].",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Application data -> [TCP Header | Data] -> [IP Header | TCP | Data] -> [Ethernet Header | IP | TCP | Data | FCS Trailer].",
    "referenceExamPoint": "Describe the 5-tuple socket identifier: (Src IP, Src Port, Dst IP, Dst Port, Protocol)."
  },
  {
    "id": "mcq-cn-u1-t2-5",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t2",
    "topicTitle": "OSI and TCP/IP Reference Models",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of OSI and TCP/IP Reference Models?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Network diagnostics and layered protocol troubleshooting.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Network diagnostics and layered protocol troubleshooting.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "TCP/IP: Implemented 4-layer internet protocol suite."
  },
  {
    "id": "mcq-cn-u1-t2-6",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t2",
    "topicTitle": "OSI and TCP/IP Reference Models",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in OSI and TCP/IP Reference Models. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: PDU names: Bits -> Frames -> Packets -> Segments -> Data..",
    "referenceExamPoint": "Map OSI layers 5, 6, 7 to the single TCP/IP Application layer."
  },
  {
    "id": "mcq-cn-u1-t2-7",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t2",
    "topicTitle": "OSI and TCP/IP Reference Models",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Decapsulation\" in OSI and TCP/IP Reference Models?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The sequential removal of protocol headers by receiving layers as incoming data ascends the stack.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Decapsulation is specifically defined as: The sequential removal of protocol headers by receiving layers as incoming data ascends the stack.",
    "referenceExamPoint": "PDU names: Bits -> Frames -> Packets -> Segments -> Data."
  },
  {
    "id": "mcq-cn-u1-t2-8",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t2",
    "topicTitle": "OSI and TCP/IP Reference Models",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of OSI and TCP/IP Reference Models, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "List all 7 OSI layers in exact top-down or bottom-up order."
  },
  {
    "id": "mcq-cn-u1-t2-9",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t2",
    "topicTitle": "OSI and TCP/IP Reference Models",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with OSI and TCP/IP Reference Models?",
    "options": [
      "Principle: OSI: Theoretical 7-layer framework.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: OSI: Theoretical 7-layer framework.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "OSI: Theoretical 7-layer framework."
  },
  {
    "id": "mcq-cn-u1-t2-10",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t2",
    "topicTitle": "OSI and TCP/IP Reference Models",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in OSI and TCP/IP Reference Models?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in OSI and TCP/IP Reference Models leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Firewall categorization (L4 packet filter vs L7 application proxy)."
  },
  {
    "id": "mcq-cn-u1-t3-1",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t3",
    "topicTitle": "Transmission Media & Multiplexing Techniques",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Transmission Media & Multiplexing Techniques?",
    "options": [
      "The reduction in signal strength and power as an electromagnetic wave propagates through a transmission medium.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: The reduction in signal strength and power as an electromagnetic wave propagates through a transmission medium.. The other choices are incorrect distractors.",
    "referenceExamPoint": "State conditions for Total Internal Reflection: angle of incidence > critical angle, and n_core > n_cladding."
  },
  {
    "id": "mcq-cn-u1-t3-2",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t3",
    "topicTitle": "Transmission Media & Multiplexing Techniques",
    "difficulty": "beginner",
    "question": "In the study of Transmission Media & Multiplexing Techniques, what is the role of \"Transmission Media\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Twisting ensures both conductors in a pair receive equal external noise. The receiver takes the voltage difference, cancelling out common-mode electromagnetic noise.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Twisting ensures both conductors in a pair receive equal external noise. The receiver takes the voltage difference, cancelling out common-mode electromagnetic noise.",
    "referenceExamPoint": "Differentiate UTP (Unshielded) and STP (Shielded) twisted pair."
  },
  {
    "id": "mcq-cn-u1-t3-3",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t3",
    "topicTitle": "Transmission Media & Multiplexing Techniques",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Total Internal Reflection\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The optical phenomenon where light reflecting inside a core with a higher refractive index than the cladding is completely trapped and guided.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Total Internal Reflection is formally defined as: The optical phenomenon where light reflecting inside a core with a higher refractive index than the cladding is completely trapped and guided.",
    "referenceExamPoint": "Fiber optics: Core > Cladding refractive index, zero EMI, highest capacity."
  },
  {
    "id": "mcq-cn-u1-t3-4",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t3",
    "topicTitle": "Transmission Media & Multiplexing Techniques",
    "difficulty": "intermediate",
    "question": "How does Transmission Media & Multiplexing Techniques address the problem of system overhead or error conditions?",
    "options": [
      "Single-mode fiber has a tiny 9-micron core carrying one optical light path for long distances; multi-mode has a 50-62.5 micron core for short campus distances.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Single-mode fiber has a tiny 9-micron core carrying one optical light path for long distances; multi-mode has a 50-62.5 micron core for short campus distances.",
    "referenceExamPoint": "Define guard bands in FDM: unused buffer bands that prevent channel overlap."
  },
  {
    "id": "mcq-cn-u1-t3-5",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t3",
    "topicTitle": "Transmission Media & Multiplexing Techniques",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Transmission Media & Multiplexing Techniques?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Fiber-to-the-Home (FTTH) broadband deployment.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Fiber-to-the-Home (FTTH) broadband deployment.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Twisted pair: Differential signaling cancels common-mode noise."
  },
  {
    "id": "mcq-cn-u1-t3-6",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t3",
    "topicTitle": "Transmission Media & Multiplexing Techniques",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Transmission Media & Multiplexing Techniques. What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: FDM: Analog frequency splitting with guard bands..",
    "referenceExamPoint": "Differentiate UTP (Unshielded) and STP (Shielded) twisted pair."
  },
  {
    "id": "mcq-cn-u1-t3-7",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t3",
    "topicTitle": "Transmission Media & Multiplexing Techniques",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Multiplexing\" in Transmission Media & Multiplexing Techniques?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The technique of combining multiple analog or digital input streams into one composite signal over a shared medium.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Multiplexing is specifically defined as: The technique of combining multiple analog or digital input streams into one composite signal over a shared medium.",
    "referenceExamPoint": "FDM: Analog frequency splitting with guard bands."
  },
  {
    "id": "mcq-cn-u1-t3-8",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t3",
    "topicTitle": "Transmission Media & Multiplexing Techniques",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Transmission Media & Multiplexing Techniques, what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "State conditions for Total Internal Reflection: angle of incidence > critical angle, and n_core > n_cladding."
  },
  {
    "id": "mcq-cn-u1-t3-9",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t3",
    "topicTitle": "Transmission Media & Multiplexing Techniques",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Transmission Media & Multiplexing Techniques?",
    "options": [
      "Principle: Fiber optics: Core > Cladding refractive index, zero EMI, highest capacity.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Fiber optics: Core > Cladding refractive index, zero EMI, highest capacity.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Fiber optics: Core > Cladding refractive index, zero EMI, highest capacity."
  },
  {
    "id": "mcq-cn-u1-t3-10",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "topicId": "cn-u1-t3",
    "topicTitle": "Transmission Media & Multiplexing Techniques",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Transmission Media & Multiplexing Techniques?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Transmission Media & Multiplexing Techniques leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Cellular base station backhaul over fiber and microwave."
  },
  {
    "id": "mcq-cn-u2-t1-1",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t1",
    "topicTitle": "Framing, Error Detection & Correction (CRC, Hamming Code)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Framing, Error Detection & Correction (CRC, Hamming Code)?",
    "options": [
      "The insertion of a 0 bit after any sequence of five consecutive 1 bits in the data payload to avoid imitation of the 01111110 delimiter flag.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: The insertion of a 0 bit after any sequence of five consecutive 1 bits in the data payload to avoid imitation of the 01111110 delimiter flag.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Solve a full CRC numerical problem: given data bitstring and generator polynomial, calculate FCS and verify receiver operation."
  },
  {
    "id": "mcq-cn-u2-t1-2",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t1",
    "topicTitle": "Framing, Error Detection & Correction (CRC, Hamming Code)",
    "difficulty": "beginner",
    "question": "In the study of Framing, Error Detection & Correction (CRC, Hamming Code), what is the role of \"Framing\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Modulo-2 division replaces arithmetic subtraction with bitwise XOR operations, ignoring carries and borrows.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Modulo-2 division replaces arithmetic subtraction with bitwise XOR operations, ignoring carries and borrows.",
    "referenceExamPoint": "Calculate number of redundancy bits required for a given data length using 2^r >= m + r + 1."
  },
  {
    "id": "mcq-cn-u2-t1-3",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t1",
    "topicTitle": "Framing, Error Detection & Correction (CRC, Hamming Code)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"FCS (Frame Check Sequence)\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The redundant bits appended to a frame by CRC computation for error verification at the receiver.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "FCS (Frame Check Sequence) is formally defined as: The redundant bits appended to a frame by CRC computation for error verification at the receiver.",
    "referenceExamPoint": "Bit stuffing: Insert 0 after five consecutive 1s."
  },
  {
    "id": "mcq-cn-u2-t1-4",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t1",
    "topicTitle": "Framing, Error Detection & Correction (CRC, Hamming Code)",
    "difficulty": "intermediate",
    "question": "How does Framing, Error Detection & Correction (CRC, Hamming Code) address the problem of system overhead or error conditions?",
    "options": [
      "Parity bits at positions 1, 2, 4, 8 check overlapping bit subsets. If syndrome evaluates to binary 0110 (decimal 6), bit position 6 was flipped.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Parity bits at positions 1, 2, 4, 8 check overlapping bit subsets. If syndrome evaluates to binary 0110 (decimal 6), bit position 6 was flipped.",
    "referenceExamPoint": "State the condition: To detect d errors, minimum Hamming distance must be d+1; to correct d errors, distance must be 2d+1."
  },
  {
    "id": "mcq-cn-u2-t1-5",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t1",
    "topicTitle": "Framing, Error Detection & Correction (CRC, Hamming Code)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Framing, Error Detection & Correction (CRC, Hamming Code)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Ethernet frame integrity validation via CRC-32 hardware acceleration in network interface cards.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Ethernet frame integrity validation via CRC-32 hardware acceleration in network interface cards.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "CRC uses XOR modulo-2 division, no borrows/carries."
  },
  {
    "id": "mcq-cn-u2-t1-6",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t1",
    "topicTitle": "Framing, Error Detection & Correction (CRC, Hamming Code)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Framing, Error Detection & Correction (CRC, Hamming Code). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Hamming code positions: 1, 2, 4, 8, 16 (powers of 2)..",
    "referenceExamPoint": "Calculate number of redundancy bits required for a given data length using 2^r >= m + r + 1."
  },
  {
    "id": "mcq-cn-u2-t1-7",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t1",
    "topicTitle": "Framing, Error Detection & Correction (CRC, Hamming Code)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Hamming Distance\" in Framing, Error Detection & Correction (CRC, Hamming Code)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The minimum number of bit inversions required to transform one valid codeword into another valid codeword in a codebook.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Hamming Distance is specifically defined as: The minimum number of bit inversions required to transform one valid codeword into another valid codeword in a codebook.",
    "referenceExamPoint": "Hamming code positions: 1, 2, 4, 8, 16 (powers of 2)."
  },
  {
    "id": "mcq-cn-u2-t1-8",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t1",
    "topicTitle": "Framing, Error Detection & Correction (CRC, Hamming Code)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Framing, Error Detection & Correction (CRC, Hamming Code), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Solve a full CRC numerical problem: given data bitstring and generator polynomial, calculate FCS and verify receiver operation."
  },
  {
    "id": "mcq-cn-u2-t1-9",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t1",
    "topicTitle": "Framing, Error Detection & Correction (CRC, Hamming Code)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Framing, Error Detection & Correction (CRC, Hamming Code)?",
    "options": [
      "Principle: Bit stuffing: Insert 0 after five consecutive 1s.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Bit stuffing: Insert 0 after five consecutive 1s.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Bit stuffing: Insert 0 after five consecutive 1s."
  },
  {
    "id": "mcq-cn-u2-t1-10",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t1",
    "topicTitle": "Framing, Error Detection & Correction (CRC, Hamming Code)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Framing, Error Detection & Correction (CRC, Hamming Code)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Framing, Error Detection & Correction (CRC, Hamming Code) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "ECC memory modules and satellite telemetry using Hamming codes."
  },
  {
    "id": "mcq-cn-u2-t2-1",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t2",
    "topicTitle": "Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)?",
    "options": [
      "The volume of data that can be in transit on a network link simultaneously, equal to Bandwidth * Round-Trip Time.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: The volume of data that can be in transit on a network link simultaneously, equal to Bandwidth * Round-Trip Time.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Calculate efficiency and throughput for Stop-and-Wait given frame size, transmission speed, distance, and propagation speed."
  },
  {
    "id": "mcq-cn-u2-t2-2",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t2",
    "topicTitle": "Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)",
    "difficulty": "beginner",
    "question": "In the study of Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat), what is the role of \"Flow Control\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Total cycle time = T_trans + 2*T_prop. Efficiency = T_trans / (T_trans + 2*T_prop) = 1 / (1 + 2a).",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Total cycle time = T_trans + 2*T_prop. Efficiency = T_trans / (T_trans + 2*T_prop) = 1 / (1 + 2a).",
    "referenceExamPoint": "Explain why the maximum window size in Go-Back-N is 2^n - 1 whereas in Selective Repeat it is 2^(n-1)."
  },
  {
    "id": "mcq-cn-u2-t2-3",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t2",
    "topicTitle": "Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Cumulative ACK\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "An acknowledgement acknowledging all frames received correctly up to that sequence number (used in Go-Back-N and TCP).",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Cumulative ACK is formally defined as: An acknowledgement acknowledging all frames received correctly up to that sequence number (used in Go-Back-N and TCP).",
    "referenceExamPoint": "Stop-and-Wait efficiency = 1 / (1 + 2a)."
  },
  {
    "id": "mcq-cn-u2-t2-4",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t2",
    "topicTitle": "Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)",
    "difficulty": "intermediate",
    "question": "How does Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat) address the problem of system overhead or error conditions?",
    "options": [
      "In Selective Repeat with 3-bit sequence numbers (0 to 7), setting window > 4 allows an ACK-loss scenario where receiver confuses retransmitted frame 0 with new frame 0.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "In Selective Repeat with 3-bit sequence numbers (0 to 7), setting window > 4 allows an ACK-loss scenario where receiver confuses retransmitted frame 0 with new frame 0.",
    "referenceExamPoint": "Compare Go-Back-N vs Selective Repeat in terms of receiver buffer requirements and channel efficiency under high loss."
  },
  {
    "id": "mcq-cn-u2-t2-5",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t2",
    "topicTitle": "Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "TCP sliding window flow control on global internet connections.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: TCP sliding window flow control on global internet connections.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Go-Back-N: W_s = 2^n - 1, W_r = 1, cumulative ACK."
  },
  {
    "id": "mcq-cn-u2-t2-6",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t2",
    "topicTitle": "Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Selective Repeat: W_s = 2^(n-1), W_r = 2^(n-1), individual ACK..",
    "referenceExamPoint": "Explain why the maximum window size in Go-Back-N is 2^n - 1 whereas in Selective Repeat it is 2^(n-1)."
  },
  {
    "id": "mcq-cn-u2-t2-7",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t2",
    "topicTitle": "Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Piggybacking\" in Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The technique of temporarily delaying an outgoing ACK to combine it with an outgoing data frame travelling in the reverse direction.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Piggybacking is specifically defined as: The technique of temporarily delaying an outgoing ACK to combine it with an outgoing data frame travelling in the reverse direction.",
    "referenceExamPoint": "Selective Repeat: W_s = 2^(n-1), W_r = 2^(n-1), individual ACK."
  },
  {
    "id": "mcq-cn-u2-t2-8",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t2",
    "topicTitle": "Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Calculate efficiency and throughput for Stop-and-Wait given frame size, transmission speed, distance, and propagation speed."
  },
  {
    "id": "mcq-cn-u2-t2-9",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t2",
    "topicTitle": "Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)?",
    "options": [
      "Principle: Stop-and-Wait efficiency = 1 / (1 + 2a).",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Stop-and-Wait efficiency = 1 / (1 + 2a).. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Stop-and-Wait efficiency = 1 / (1 + 2a)."
  },
  {
    "id": "mcq-cn-u2-t2-10",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t2",
    "topicTitle": "Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Satellite communication links with massive propagation delays."
  },
  {
    "id": "mcq-cn-u2-t3-1",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t3",
    "topicTitle": "Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)?",
    "options": [
      "The time window during which a transmitted frame is susceptible to colliding with a transmission from another station.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: The time window during which a transmitted frame is susceptible to colliding with a transmission from another station.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Derive maximum throughput for Pure ALOHA (18.4%) and Slotted ALOHA (36.8%) using Poisson distribution."
  },
  {
    "id": "mcq-cn-u2-t3-2",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t3",
    "topicTitle": "Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)",
    "difficulty": "beginner",
    "question": "In the study of Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet), what is the role of \"MAC\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Standard 10 Mbps Ethernet specifies 64-byte (512-bit) minimum frame size to guarantee collision detection across a 2.5 km coaxial collision domain.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Standard 10 Mbps Ethernet specifies 64-byte (512-bit) minimum frame size to guarantee collision detection across a 2.5 km coaxial collision domain.",
    "referenceExamPoint": "Calculate the minimum frame size for an Ethernet network given cable length, propagation speed, and data rate."
  },
  {
    "id": "mcq-cn-u2-t3-3",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t3",
    "topicTitle": "Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Jam Signal\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A 32-to-48 bit pattern transmitted by an Ethernet station upon detecting a collision to ensure all stations detect the collision.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Jam Signal is formally defined as: A 32-to-48 bit pattern transmitted by an Ethernet station upon detecting a collision to ensure all stations detect the collision.",
    "referenceExamPoint": "Pure ALOHA max throughput: 18.4% (G=0.5)."
  },
  {
    "id": "mcq-cn-u2-t3-4",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t3",
    "topicTitle": "Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)",
    "difficulty": "intermediate",
    "question": "How does Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet) address the problem of system overhead or error conditions?",
    "options": [
      "In Pure ALOHA, any frame starting between t0 - T_fr and t0 + T_fr collides (2*T_fr). In Slotted ALOHA, transmissions only start at slot boundaries (T_fr).",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "In Pure ALOHA, any frame starting between t0 - T_fr and t0 + T_fr collides (2*T_fr). In Slotted ALOHA, transmissions only start at slot boundaries (T_fr).",
    "referenceExamPoint": "Detail the Truncated Binary Exponential Backoff algorithm with maximum retry limits (abort at 16 collisions)."
  },
  {
    "id": "mcq-cn-u2-t3-5",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t3",
    "topicTitle": "Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Legacy shared coaxial Ethernet (10Base2/10Base5).",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Legacy shared coaxial Ethernet (10Base2/10Base5).. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Slotted ALOHA max throughput: 36.8% (G=1.0)."
  },
  {
    "id": "mcq-cn-u2-t3-6",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t3",
    "topicTitle": "Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: CSMA/CD condition: T_trans >= 2 * T_prop..",
    "referenceExamPoint": "Calculate the minimum frame size for an Ethernet network given cable length, propagation speed, and data rate."
  },
  {
    "id": "mcq-cn-u2-t3-7",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t3",
    "topicTitle": "Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Truncated Binary Exponential Backoff\" in Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "An algorithm where stations back off a random number of slot times chosen from [0, 2^min(i, 10) - 1] after i consecutive collisions.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Truncated Binary Exponential Backoff is specifically defined as: An algorithm where stations back off a random number of slot times chosen from [0, 2^min(i, 10) - 1] after i consecutive collisions.",
    "referenceExamPoint": "CSMA/CD condition: T_trans >= 2 * T_prop."
  },
  {
    "id": "mcq-cn-u2-t3-8",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t3",
    "topicTitle": "Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Derive maximum throughput for Pure ALOHA (18.4%) and Slotted ALOHA (36.8%) using Poisson distribution."
  },
  {
    "id": "mcq-cn-u2-t3-9",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t3",
    "topicTitle": "Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)?",
    "options": [
      "Principle: Pure ALOHA max throughput: 18.4% (G=0.5).",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Pure ALOHA max throughput: 18.4% (G=0.5).. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Pure ALOHA max throughput: 18.4% (G=0.5)."
  },
  {
    "id": "mcq-cn-u2-t3-10",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "topicId": "cn-u2-t3",
    "topicTitle": "Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Satellite ground station uplink reservation protocols."
  },
  {
    "id": "mcq-cn-u3-t1-1",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t1",
    "topicTitle": "IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)?",
    "options": [
      "A 32-bit number where contiguous 1s define the network portion and contiguous 0s identify the host portion of an IP address.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A 32-bit number where contiguous 1s define the network portion and contiguous 0s identify the host portion of an IP address.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Perform a complete VLSM subnet allocation problem for 4 departments with disparate host counts (e.g. 50, 25, 12, 2 hosts)."
  },
  {
    "id": "mcq-cn-u3-t1-2",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t1",
    "topicTitle": "IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)",
    "difficulty": "beginner",
    "question": "In the study of IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM), what is the role of \"IPv4\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Given 192.168.1.0/26: Borrow 2 bits (32 - 26 = 6 host bits). Block size = 2^6 = 64. Subnet 0: 192.168.1.0 - 192.168.1.63 (Usable: .1 to .62, Broadcast: .63).",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Given 192.168.1.0/26: Borrow 2 bits (32 - 26 = 6 host bits). Block size = 2^6 = 64. Subnet 0: 192.168.1.0 - 192.168.1.63 (Usable: .1 to .62, Broadcast: .63).",
    "referenceExamPoint": "Identify the Network ID, Broadcast Address, and valid host range for any given CIDR block."
  },
  {
    "id": "mcq-cn-u3-t1-3",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t1",
    "topicTitle": "IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"VLSM (Variable Length Subnet Masking)\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The technique of assigning different subnet masks to different subnets within the same classful network space.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "VLSM (Variable Length Subnet Masking) is formally defined as: The technique of assigning different subnet masks to different subnets within the same classful network space.",
    "referenceExamPoint": "IPv4 = 32 bits; IPv6 = 128 bits."
  },
  {
    "id": "mcq-cn-u3-t1-4",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t1",
    "topicTitle": "IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)",
    "difficulty": "intermediate",
    "question": "How does IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM) address the problem of system overhead or error conditions?",
    "options": [
      "IPv6 removed the header checksum because Layer 2 and Layer 4 already verify checksums, speeding up router forwarding processing.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "IPv6 removed the header checksum because Layer 2 and Layer 4 already verify checksums, speeding up router forwarding processing.",
    "referenceExamPoint": "Contrast IPv4 vs IPv6 headers: address length, header size, fragmentation handling, and checksum presence."
  },
  {
    "id": "mcq-cn-u3-t1-5",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t1",
    "topicTitle": "IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Corporate enterprise IP address allocation planning.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Corporate enterprise IP address allocation planning.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Usable hosts per subnet = 2^(32-n) - 2."
  },
  {
    "id": "mcq-cn-u3-t1-6",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t1",
    "topicTitle": "IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: IPv4 header: 20 bytes min; IPv6 header: 40 bytes fixed..",
    "referenceExamPoint": "Identify the Network ID, Broadcast Address, and valid host range for any given CIDR block."
  },
  {
    "id": "mcq-cn-u3-t1-7",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t1",
    "topicTitle": "IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Route Summarization (Supernetting)\" in IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The consolidation of multiple continuous smaller subnet routes into one larger aggregate routing announcement.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Route Summarization (Supernetting) is specifically defined as: The consolidation of multiple continuous smaller subnet routes into one larger aggregate routing announcement.",
    "referenceExamPoint": "IPv4 header: 20 bytes min; IPv6 header: 40 bytes fixed."
  },
  {
    "id": "mcq-cn-u3-t1-8",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t1",
    "topicTitle": "IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Perform a complete VLSM subnet allocation problem for 4 departments with disparate host counts (e.g. 50, 25, 12, 2 hosts)."
  },
  {
    "id": "mcq-cn-u3-t1-9",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t1",
    "topicTitle": "IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)?",
    "options": [
      "Principle: IPv4 = 32 bits; IPv6 = 128 bits.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: IPv4 = 32 bits; IPv6 = 128 bits.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "IPv4 = 32 bits; IPv6 = 128 bits."
  },
  {
    "id": "mcq-cn-u3-t1-10",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t1",
    "topicTitle": "IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Cloud VPC subnet architecture (AWS VPC, Google Cloud VPC)."
  },
  {
    "id": "mcq-cn-u3-t2-1",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t2",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Routing Algorithms (Distance Vector, Link State, OSPF, BGP)?",
    "options": [
      "A collection of routers and subnets under a single technical administration and unified routing policy.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A collection of routers and subnets under a single technical administration and unified routing policy.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Trace Dijkstra algorithm step-by-step given an adjacency matrix or network graph."
  },
  {
    "id": "mcq-cn-u3-t2-2",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t2",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
    "difficulty": "beginner",
    "question": "In the study of Routing Algorithms (Distance Vector, Link State, OSPF, BGP), what is the role of \"Routing\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Iteratively selects the unvisited node with minimal cumulative distance, updates neighbor distances, and marks node visited.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Iteratively selects the unvisited node with minimal cumulative distance, updates neighbor distances, and marks node visited.",
    "referenceExamPoint": "Explain the Count-to-Infinity problem in Distance Vector routing and how Split Horizon with Poison Reverse resolves it."
  },
  {
    "id": "mcq-cn-u3-t2-3",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t2",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Split Horizon\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A routing rule preventing a router from advertising a routing route back out the same physical interface it arrived on.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Split Horizon is formally defined as: A routing rule preventing a router from advertising a routing route back out the same physical interface it arrived on.",
    "referenceExamPoint": "Distance Vector: Bellman-Ford, metric hops (max 15 for RIP), count-to-infinity."
  },
  {
    "id": "mcq-cn-u3-t2-4",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t2",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
    "difficulty": "intermediate",
    "question": "How does Routing Algorithms (Distance Vector, Link State, OSPF, BGP) address the problem of system overhead or error conditions?",
    "options": [
      "If link A-B breaks, A tells C cost is infinity. But C previously told A cost was 2 via B; A updates cost to 3, C updates to 4, slowly incrementing until 16 is reached.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "If link A-B breaks, A tells C cost is infinity. But C previously told A cost was 2 via B; A updates cost to 3, C updates to 4, slowly incrementing until 16 is reached.",
    "referenceExamPoint": "Compare Distance Vector, Link State, and Path Vector routing across 4 metrics: convergence speed, overhead, metric, and scalability."
  },
  {
    "id": "mcq-cn-u3-t2-5",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t2",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Routing Algorithms (Distance Vector, Link State, OSPF, BGP)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Global internet core routing using BGP between Tier-1 transit providers.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Global internet core routing using BGP between Tier-1 transit providers.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Link State: Dijkstra SPF, metric cost/bandwidth, fast convergence."
  },
  {
    "id": "mcq-cn-u3-t2-6",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t2",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Routing Algorithms (Distance Vector, Link State, OSPF, BGP). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: BGP: Path Vector, AS-Path attribute prevents loops..",
    "referenceExamPoint": "Explain the Count-to-Infinity problem in Distance Vector routing and how Split Horizon with Poison Reverse resolves it."
  },
  {
    "id": "mcq-cn-u3-t2-7",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t2",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"LSA (Link State Advertisement)\" in Routing Algorithms (Distance Vector, Link State, OSPF, BGP)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A small packet describing the state and cost of a router interfaces, flooded to all routers in an OSPF area.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "LSA (Link State Advertisement) is specifically defined as: A small packet describing the state and cost of a router interfaces, flooded to all routers in an OSPF area.",
    "referenceExamPoint": "BGP: Path Vector, AS-Path attribute prevents loops."
  },
  {
    "id": "mcq-cn-u3-t2-8",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t2",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Routing Algorithms (Distance Vector, Link State, OSPF, BGP), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Trace Dijkstra algorithm step-by-step given an adjacency matrix or network graph."
  },
  {
    "id": "mcq-cn-u3-t2-9",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t2",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Routing Algorithms (Distance Vector, Link State, OSPF, BGP)?",
    "options": [
      "Principle: Distance Vector: Bellman-Ford, metric hops (max 15 for RIP), count-to-infinity.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Distance Vector: Bellman-Ford, metric hops (max 15 for RIP), count-to-infinity.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Distance Vector: Bellman-Ford, metric hops (max 15 for RIP), count-to-infinity."
  },
  {
    "id": "mcq-cn-u3-t2-10",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t2",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Routing Algorithms (Distance Vector, Link State, OSPF, BGP)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Routing Algorithms (Distance Vector, Link State, OSPF, BGP) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Campus and enterprise multi-vlan routing using OSPF Area 0."
  },
  {
    "id": "mcq-cn-u3-t3-1",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t3",
    "topicTitle": "Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)?",
    "options": [
      "A traffic shaping algorithm that accumulates transmission tokens at a steady rate, allowing bursty transmissions when tokens are plentiful.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A traffic shaping algorithm that accumulates transmission tokens at a steady rate, allowing bursty transmissions when tokens are plentiful.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Calculate maximum burst duration in a Token Bucket system given token arrival rate r, bucket capacity b, and maximum line transmission rate M."
  },
  {
    "id": "mcq-cn-u3-t3-2",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t3",
    "topicTitle": "Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)",
    "difficulty": "beginner",
    "question": "In the study of Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP), what is the role of \"Congestion Control\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Leaky Bucket enforces rigid traffic pacing (poor for bursty web browsing); Token Bucket allows short bursts while enforcing long-term average bandwidth.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Leaky Bucket enforces rigid traffic pacing (poor for bursty web browsing); Token Bucket allows short bursts while enforcing long-term average bandwidth.",
    "referenceExamPoint": "Describe ARP request and reply packet formats and why requests are broadcast while replies are unicast."
  },
  {
    "id": "mcq-cn-u3-t3-3",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t3",
    "topicTitle": "Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"ARP (Address Resolution Protocol)\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A protocol that resolves an unknown Layer 2 physical MAC address from a known Layer 3 logical IP address.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "ARP (Address Resolution Protocol) is formally defined as: A protocol that resolves an unknown Layer 2 physical MAC address from a known Layer 3 logical IP address.",
    "referenceExamPoint": "Leaky Bucket: Constant output rate, discards excess burst."
  },
  {
    "id": "mcq-cn-u3-t3-4",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t3",
    "topicTitle": "Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)",
    "difficulty": "intermediate",
    "question": "How does Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP) address the problem of system overhead or error conditions?",
    "options": [
      "Traceroute sends UDP/ICMP packets starting with TTL=1. First router decrements TTL to 0, drops packet, and sends ICMP Type 11 (Time Exceeded), revealing its IP.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Traceroute sends UDP/ICMP packets starting with TTL=1. First router decrements TTL to 0, drops packet, and sends ICMP Type 11 (Time Exceeded), revealing its IP.",
    "referenceExamPoint": "Explain how Traceroute uses the TTL field in IP headers and ICMP Time Exceeded messages to discover router hops."
  },
  {
    "id": "mcq-cn-u3-t3-5",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t3",
    "topicTitle": "Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Internet Service Provider bandwidth throttling and QoS traffic policing.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Internet Service Provider bandwidth throttling and QoS traffic policing.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Token Bucket: Allows bursts up to bucket capacity b, steady rate r."
  },
  {
    "id": "mcq-cn-u3-t3-6",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t3",
    "topicTitle": "Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: ARP: Maps IP to MAC (broadcast request, unicast reply)..",
    "referenceExamPoint": "Describe ARP request and reply packet formats and why requests are broadcast while replies are unicast."
  },
  {
    "id": "mcq-cn-u3-t3-7",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t3",
    "topicTitle": "Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"ICMP (Internet Control Message Protocol)\" in Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A network layer protocol used by routers and hosts to communicate network errors, operational issues, and diagnostic queries.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "ICMP (Internet Control Message Protocol) is specifically defined as: A network layer protocol used by routers and hosts to communicate network errors, operational issues, and diagnostic queries.",
    "referenceExamPoint": "ARP: Maps IP to MAC (broadcast request, unicast reply)."
  },
  {
    "id": "mcq-cn-u3-t3-8",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t3",
    "topicTitle": "Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Calculate maximum burst duration in a Token Bucket system given token arrival rate r, bucket capacity b, and maximum line transmission rate M."
  },
  {
    "id": "mcq-cn-u3-t3-9",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t3",
    "topicTitle": "Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)?",
    "options": [
      "Principle: Leaky Bucket: Constant output rate, discards excess burst.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Leaky Bucket: Constant output rate, discards excess burst.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Leaky Bucket: Constant output rate, discards excess burst."
  },
  {
    "id": "mcq-cn-u3-t3-10",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "topicId": "cn-u3-t3",
    "topicTitle": "Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Traceroute and Ping network diagnostic troubleshooting tools."
  },
  {
    "id": "mcq-cn-u4-t1-1",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t1",
    "topicTitle": "Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)?",
    "options": [
      "A 16-bit integer identifying a specific application endpoint or service on an IP host.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A 16-bit integer identifying a specific application endpoint or service on an IP host.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Draw and label the complete 20-byte TCP header and 8-byte UDP header with bit lengths for each field."
  },
  {
    "id": "mcq-cn-u4-t1-2",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t1",
    "topicTitle": "Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)",
    "difficulty": "beginner",
    "question": "In the study of Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP), what is the role of \"Transport Layer\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Two different clients connecting to web server port 80 are separated into distinct sockets because their source IP or source port differs.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Two different clients connecting to web server port 80 are separated into distinct sockets because their source IP or source port differs.",
    "referenceExamPoint": "Compare TCP and UDP across 6 parameters: connection state, reliability, ordering, header size, speed, and flow control."
  },
  {
    "id": "mcq-cn-u4-t1-3",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t1",
    "topicTitle": "Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Socket\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The unique software communication endpoint defined by the combination of an IP address and a Port number.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Socket is formally defined as: The unique software communication endpoint defined by the combination of an IP address and a Port number.",
    "referenceExamPoint": "UDP: 8 bytes fixed header, connectionless, unreliable, fast."
  },
  {
    "id": "mcq-cn-u4-t1-4",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t1",
    "topicTitle": "Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)",
    "difficulty": "intermediate",
    "question": "How does Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP) address the problem of system overhead or error conditions?",
    "options": [
      "A dropped audio frame retransmitted 200ms later arrives too late for speech playback, causing stutter. Dropping it and playing current audio is superior.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "A dropped audio frame retransmitted 200ms later arrives too late for speech playback, causing stutter. Dropping it and playing current audio is superior.",
    "referenceExamPoint": "Explain why UDP includes an optional/mandatory checksum that incorporates a pseudo-header."
  },
  {
    "id": "mcq-cn-u4-t1-5",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t1",
    "topicTitle": "Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Domain Name System (DNS) queries over UDP port 53.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Domain Name System (DNS) queries over UDP port 53.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "TCP: 20 bytes min header, connection-oriented, reliable, byte-stream."
  },
  {
    "id": "mcq-cn-u4-t1-6",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t1",
    "topicTitle": "Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Well-known ports: 0-1023 (HTTP 80, HTTPS 443, DNS 53, SSH 22)..",
    "referenceExamPoint": "Compare TCP and UDP across 6 parameters: connection state, reliability, ordering, header size, speed, and flow control."
  },
  {
    "id": "mcq-cn-u4-t1-7",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t1",
    "topicTitle": "Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Demultiplexing\" in Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The process of delivering the received transport layer segment payload to the correct application socket based on header port addresses.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Demultiplexing is specifically defined as: The process of delivering the received transport layer segment payload to the correct application socket based on header port addresses.",
    "referenceExamPoint": "Well-known ports: 0-1023 (HTTP 80, HTTPS 443, DNS 53, SSH 22)."
  },
  {
    "id": "mcq-cn-u4-t1-8",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t1",
    "topicTitle": "Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Draw and label the complete 20-byte TCP header and 8-byte UDP header with bit lengths for each field."
  },
  {
    "id": "mcq-cn-u4-t1-9",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t1",
    "topicTitle": "Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)?",
    "options": [
      "Principle: UDP: 8 bytes fixed header, connectionless, unreliable, fast.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: UDP: 8 bytes fixed header, connectionless, unreliable, fast.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "UDP: 8 bytes fixed header, connectionless, unreliable, fast."
  },
  {
    "id": "mcq-cn-u4-t1-10",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t1",
    "topicTitle": "Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Secure shell remote administration (SSH) over TCP port 22."
  },
  {
    "id": "mcq-cn-u4-t2-1",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t2",
    "topicTitle": "TCP Connection Management (3-Way Handshake & State Machine)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of TCP Connection Management (3-Way Handshake & State Machine)?",
    "options": [
      "The initial 32-bit sequence number randomly selected by a TCP endpoint to identify the first byte of data transmitted in a session.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: The initial 32-bit sequence number randomly selected by a TCP endpoint to identify the first byte of data transmitted in a session.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Trace the complete TCP 3-Way Handshake with packet sequence numbers and ACK values for client ISN 1000 and server ISN 5000."
  },
  {
    "id": "mcq-cn-u4-t2-2",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t2",
    "topicTitle": "TCP Connection Management (3-Way Handshake & State Machine)",
    "difficulty": "beginner",
    "question": "In the study of TCP Connection Management (3-Way Handshake & State Machine), what is the role of \"TCP Handshake\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "If client final ACK is lost, server retransmits its FIN. If client closed immediately, client would send RST, causing abnormal server termination.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "If client final ACK is lost, server retransmits its FIN. If client closed immediately, client would send RST, causing abnormal server termination.",
    "referenceExamPoint": "Explain the necessity and duration of the TIME_WAIT state (2*MSL)."
  },
  {
    "id": "mcq-cn-u4-t2-3",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t2",
    "topicTitle": "TCP Connection Management (3-Way Handshake & State Machine)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"TIME_WAIT State\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A closing TCP socket state where the endpoint waits for twice the Maximum Segment Lifetime (2*MSL) to ensure final ACK delivery.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "TIME_WAIT State is formally defined as: A closing TCP socket state where the endpoint waits for twice the Maximum Segment Lifetime (2*MSL) to ensure final ACK delivery.",
    "referenceExamPoint": "Establishment: SYN -> SYN-ACK -> ACK (3 steps)."
  },
  {
    "id": "mcq-cn-u4-t2-4",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t2",
    "topicTitle": "TCP Connection Management (3-Way Handshake & State Machine)",
    "difficulty": "intermediate",
    "question": "How does TCP Connection Management (3-Way Handshake & State Machine) address the problem of system overhead or error conditions?",
    "options": [
      "Half-open connections tie up kernel memory in the backlog queue. SYN Cookies eliminate state until the client proves authenticity via the third ACK.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Half-open connections tie up kernel memory in the backlog queue. SYN Cookies eliminate state until the client proves authenticity via the third ACK.",
    "referenceExamPoint": "Describe how a SYN Flood denial of service attack works and how SYN Cookies mitigate it."
  },
  {
    "id": "mcq-cn-u4-t2-5",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t2",
    "topicTitle": "TCP Connection Management (3-Way Handshake & State Machine)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of TCP Connection Management (3-Way Handshake & State Machine)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Web server connection handling for millions of concurrent HTTP/HTTPS requests.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Web server connection handling for millions of concurrent HTTP/HTTPS requests.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Termination: FIN -> ACK, FIN -> ACK (4 steps)."
  },
  {
    "id": "mcq-cn-u4-t2-6",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t2",
    "topicTitle": "TCP Connection Management (3-Way Handshake & State Machine)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in TCP Connection Management (3-Way Handshake & State Machine). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: TIME_WAIT = 2 * MSL (prevents delayed duplicates and ensures clean closure)..",
    "referenceExamPoint": "Explain the necessity and duration of the TIME_WAIT state (2*MSL)."
  },
  {
    "id": "mcq-cn-u4-t2-7",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t2",
    "topicTitle": "TCP Connection Management (3-Way Handshake & State Machine)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"SYN Cookies\" in TCP Connection Management (3-Way Handshake & State Machine)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A stateless cryptographic mechanism used by TCP servers to resist SYN flood denial-of-service attacks without consuming connection buffer memory.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "SYN Cookies is specifically defined as: A stateless cryptographic mechanism used by TCP servers to resist SYN flood denial-of-service attacks without consuming connection buffer memory.",
    "referenceExamPoint": "TIME_WAIT = 2 * MSL (prevents delayed duplicates and ensures clean closure)."
  },
  {
    "id": "mcq-cn-u4-t2-8",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t2",
    "topicTitle": "TCP Connection Management (3-Way Handshake & State Machine)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of TCP Connection Management (3-Way Handshake & State Machine), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Trace the complete TCP 3-Way Handshake with packet sequence numbers and ACK values for client ISN 1000 and server ISN 5000."
  },
  {
    "id": "mcq-cn-u4-t2-9",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t2",
    "topicTitle": "TCP Connection Management (3-Way Handshake & State Machine)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with TCP Connection Management (3-Way Handshake & State Machine)?",
    "options": [
      "Principle: Establishment: SYN -> SYN-ACK -> ACK (3 steps).",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Establishment: SYN -> SYN-ACK -> ACK (3 steps).. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Establishment: SYN -> SYN-ACK -> ACK (3 steps)."
  },
  {
    "id": "mcq-cn-u4-t2-10",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t2",
    "topicTitle": "TCP Connection Management (3-Way Handshake & State Machine)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in TCP Connection Management (3-Way Handshake & State Machine)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in TCP Connection Management (3-Way Handshake & State Machine) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Stateful firewall connection tracking tables (conntrack in Linux iptables)."
  },
  {
    "id": "mcq-cn-u4-t3-1",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t3",
    "topicTitle": "TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)?",
    "options": [
      "A TCP state variable maintained by the sender that limits the total amount of unacknowledged data in transit.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A TCP state variable maintained by the sender that limits the total amount of unacknowledged data in transit.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Draw the cwnd vs time graph illustrating Slow Start, ssthresh transition, Congestion Avoidance, Timeout drop, and 3 Dup ACK recovery."
  },
  {
    "id": "mcq-cn-u4-t3-2",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t3",
    "topicTitle": "TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)",
    "difficulty": "beginner",
    "question": "In the study of TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery), what is the role of \"Congestion Control\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "A single out-of-order packet generates one or two duplicate ACKs due to packet reordering. Three duplicate ACKs reliably indicates packet loss.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "A single out-of-order packet generates one or two duplicate ACKs due to packet reordering. Three duplicate ACKs reliably indicates packet loss.",
    "referenceExamPoint": "Contrast TCP Tahoe and TCP Reno handling of triple duplicate ACKs."
  },
  {
    "id": "mcq-cn-u4-t3-3",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t3",
    "topicTitle": "TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"ssthresh (Slow-Start Threshold)\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The threshold dividing exponential Slow Start phase from linear Congestion Avoidance phase.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "ssthresh (Slow-Start Threshold) is formally defined as: The threshold dividing exponential Slow Start phase from linear Congestion Avoidance phase.",
    "referenceExamPoint": "Slow Start: Doubles cwnd every RTT (exponential)."
  },
  {
    "id": "mcq-cn-u4-t3-4",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t3",
    "topicTitle": "TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)",
    "difficulty": "intermediate",
    "question": "How does TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery) address the problem of system overhead or error conditions?",
    "options": [
      "Vector analysis proves that when two competing flows share a bottleneck link, Additive Increase (+1) and Multiplicative Decrease (/2) converges to equal bandwidth allocation.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Vector analysis proves that when two competing flows share a bottleneck link, Additive Increase (+1) and Multiplicative Decrease (/2) converges to equal bandwidth allocation.",
    "referenceExamPoint": "Calculate cwnd size across multiple RTT cycles given initial ssthresh and packet drop events."
  },
  {
    "id": "mcq-cn-u4-t3-5",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t3",
    "topicTitle": "TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Global internet file downloads and video streaming throughput optimization.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Global internet file downloads and video streaming throughput optimization.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Congestion Avoidance: cwnd increases by 1 MSS per RTT (linear)."
  },
  {
    "id": "mcq-cn-u4-t3-6",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t3",
    "topicTitle": "TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: Timeout: ssthresh = cwnd/2; cwnd resets to 1 MSS..",
    "referenceExamPoint": "Contrast TCP Tahoe and TCP Reno handling of triple duplicate ACKs."
  },
  {
    "id": "mcq-cn-u4-t3-7",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t3",
    "topicTitle": "TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"AIMD (Additive Increase Multiplicative Decrease)\" in TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A feedback control algorithm that linearly increases sending rate when no loss occurs and halves it when congestion is detected.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "AIMD (Additive Increase Multiplicative Decrease) is specifically defined as: A feedback control algorithm that linearly increases sending rate when no loss occurs and halves it when congestion is detected.",
    "referenceExamPoint": "Timeout: ssthresh = cwnd/2; cwnd resets to 1 MSS."
  },
  {
    "id": "mcq-cn-u4-t3-8",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t3",
    "topicTitle": "TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Draw the cwnd vs time graph illustrating Slow Start, ssthresh transition, Congestion Avoidance, Timeout drop, and 3 Dup ACK recovery."
  },
  {
    "id": "mcq-cn-u4-t3-9",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t3",
    "topicTitle": "TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)?",
    "options": [
      "Principle: Slow Start: Doubles cwnd every RTT (exponential).",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Slow Start: Doubles cwnd every RTT (exponential).. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Slow Start: Doubles cwnd every RTT (exponential)."
  },
  {
    "id": "mcq-cn-u4-t3-10",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "topicId": "cn-u4-t3",
    "topicTitle": "TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Cloud storage synchronization and backup replication pipelines."
  },
  {
    "id": "mcq-cn-u5-t1-1",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t1",
    "topicTitle": "Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)?",
    "options": [
      "A DNS resolution request where the queried DNS server takes full responsibility to return the final answer to the client.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A DNS resolution request where the queried DNS server takes full responsibility to return the final answer to the client.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Differentiate Recursive vs Iterative DNS queries with a step-by-step diagram."
  },
  {
    "id": "mcq-cn-u5-t1-2",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t1",
    "topicTitle": "Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)",
    "difficulty": "beginner",
    "question": "In the study of Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP), what is the role of \"Application Layer\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "FTP separates control commands (USER, PASS, LIST) on TCP port 21 from actual bulk file data transfer on dynamic port 20.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "FTP separates control commands (USER, PASS, LIST) on TCP port 21 from actual bulk file data transfer on dynamic port 20.",
    "referenceExamPoint": "Explain why FTP uses two separate TCP connections (Control on 21, Data on 20)."
  },
  {
    "id": "mcq-cn-u5-t1-3",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t1",
    "topicTitle": "Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Iterative Query\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A DNS resolution request where the queried server returns the best referral address it knows if it lacks the direct record.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Iterative Query is formally defined as: A DNS resolution request where the queried server returns the best referral address it knows if it lacks the direct record.",
    "referenceExamPoint": "DNS: UDP port 53; maps hostnames to IP addresses."
  },
  {
    "id": "mcq-cn-u5-t1-4",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t1",
    "topicTitle": "Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)",
    "difficulty": "intermediate",
    "question": "How does Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP) address the problem of system overhead or error conditions?",
    "options": [
      "HTTP/1.1 requires sequential request/response exchanges per TCP socket. HTTP/2 interleaves binary frames from multiple requests simultaneously over one TCP socket.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "HTTP/1.1 requires sequential request/response exchanges per TCP socket. HTTP/2 interleaves binary frames from multiple requests simultaneously over one TCP socket.",
    "referenceExamPoint": "Compare HTTP/1.1, HTTP/2, and HTTP/3 across connection management and multiplexing."
  },
  {
    "id": "mcq-cn-u5-t1-5",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t1",
    "topicTitle": "Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Global website hosting and CDN edge routing.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Global website hosting and CDN edge routing.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "HTTP/1.1 = text, persistent; HTTP/2 = binary multiplexed; HTTP/3 = QUIC/UDP."
  },
  {
    "id": "mcq-cn-u5-t1-6",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t1",
    "topicTitle": "Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: FTP: Port 21 control, Port 20 data..",
    "referenceExamPoint": "Explain why FTP uses two separate TCP connections (Control on 21, Data on 20)."
  },
  {
    "id": "mcq-cn-u5-t1-7",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t1",
    "topicTitle": "Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"CNAME Record\" in Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "A DNS Canonical Name record that maps an alias domain name to an existing true domain name.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "CNAME Record is specifically defined as: A DNS Canonical Name record that maps an alias domain name to an existing true domain name.",
    "referenceExamPoint": "FTP: Port 21 control, Port 20 data."
  },
  {
    "id": "mcq-cn-u5-t1-8",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t1",
    "topicTitle": "Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Differentiate Recursive vs Iterative DNS queries with a step-by-step diagram."
  },
  {
    "id": "mcq-cn-u5-t1-9",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t1",
    "topicTitle": "Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)?",
    "options": [
      "Principle: DNS: UDP port 53; maps hostnames to IP addresses.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: DNS: UDP port 53; maps hostnames to IP addresses.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "DNS: UDP port 53; maps hostnames to IP addresses."
  },
  {
    "id": "mcq-cn-u5-t1-10",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t1",
    "topicTitle": "Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Enterprise email deliverability and spam filtering."
  },
  {
    "id": "mcq-cn-u5-t2-1",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t2",
    "topicTitle": "Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)?",
    "options": [
      "Guaranteeing that data transmitted across a network is readable only by authorized recipients possessing the decryption key.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: Guaranteeing that data transmitted across a network is readable only by authorized recipients possessing the decryption key.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Perform a complete RSA calculation: given small primes p=3, q=11, and e=7, calculate n, phi(n), private key d, encrypt M=2, and decrypt C."
  },
  {
    "id": "mcq-cn-u5-t2-2",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t2",
    "topicTitle": "Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)",
    "difficulty": "beginner",
    "question": "In the study of Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures), what is the role of \"Cryptography\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Asymmetric encryption is computationally slow; symmetric encryption is fast. Hybrid systems use RSA/ECDH to exchange an AES key in milliseconds.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Asymmetric encryption is computationally slow; symmetric encryption is fast. Hybrid systems use RSA/ECDH to exchange an AES key in milliseconds.",
    "referenceExamPoint": "Compare symmetric vs asymmetric encryption across 5 factors: keys, speed, key distribution, algorithm examples, and use cases."
  },
  {
    "id": "mcq-cn-u5-t2-3",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t2",
    "topicTitle": "Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"Non-Repudiation\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "The security property ensuring that a sender cannot deny having sent a specific message or initiated a transaction.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "Non-Repudiation is formally defined as: The security property ensuring that a sender cannot deny having sent a specific message or initiated a transaction.",
    "referenceExamPoint": "Symmetric: Single shared key (AES, DES), fast, key distribution challenge."
  },
  {
    "id": "mcq-cn-u5-t2-4",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t2",
    "topicTitle": "Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)",
    "difficulty": "intermediate",
    "question": "How does Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures) address the problem of system overhead or error conditions?",
    "options": [
      "Receiver decrypts signature with sender public key to obtain Hash1, computes Hash2 of document, and compares. Matching hashes proves zero tampering.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "Receiver decrypts signature with sender public key to obtain Hash1, computes Hash2 of document, and compares. Matching hashes proves zero tampering.",
    "referenceExamPoint": "Explain how a digital signature provides both integrity and non-repudiation."
  },
  {
    "id": "mcq-cn-u5-t2-5",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t2",
    "topicTitle": "Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "HTTPS web traffic encryption across global web servers.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: HTTPS web traffic encryption across global web servers.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "Asymmetric: Public/private key pair (RSA, ECC), secure exchange."
  },
  {
    "id": "mcq-cn-u5-t2-6",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t2",
    "topicTitle": "Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: RSA formulas: C = M^e mod n; M = C^d mod n; d*e = 1 mod (p-1)(q-1)..",
    "referenceExamPoint": "Compare symmetric vs asymmetric encryption across 5 factors: keys, speed, key distribution, algorithm examples, and use cases."
  },
  {
    "id": "mcq-cn-u5-t2-7",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t2",
    "topicTitle": "Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"Euler Totient Function phi(n)\" in Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "The count of positive integers less than or equal to n that are relatively prime to n; for primes p and q, phi(pq) = (p-1)(q-1).",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "Euler Totient Function phi(n) is specifically defined as: The count of positive integers less than or equal to n that are relatively prime to n; for primes p and q, phi(pq) = (p-1)(q-1).",
    "referenceExamPoint": "RSA formulas: C = M^e mod n; M = C^d mod n; d*e = 1 mod (p-1)(q-1)."
  },
  {
    "id": "mcq-cn-u5-t2-8",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t2",
    "topicTitle": "Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Perform a complete RSA calculation: given small primes p=3, q=11, and e=7, calculate n, phi(n), private key d, encrypt M=2, and decrypt C."
  },
  {
    "id": "mcq-cn-u5-t2-9",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t2",
    "topicTitle": "Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)?",
    "options": [
      "Principle: Symmetric: Single shared key (AES, DES), fast, key distribution challenge.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: Symmetric: Single shared key (AES, DES), fast, key distribution challenge.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "Symmetric: Single shared key (AES, DES), fast, key distribution challenge."
  },
  {
    "id": "mcq-cn-u5-t2-10",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t2",
    "topicTitle": "Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Cryptocurrency blockchain transactions and Bitcoin wallet signatures."
  },
  {
    "id": "mcq-cn-u5-t3-1",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t3",
    "topicTitle": "Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)",
    "difficulty": "beginner",
    "question": "Which of the following best defines the primary concept of Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)?",
    "options": [
      "A firewall technology that monitors the state of active network connections in a state table, automatically permitting return traffic for established sessions.",
      "A hardware-only component that operates strictly without protocol software intervention.",
      "A legacy analog technique that has been completely deprecated in modern networks.",
      "An unstructured data format used exclusively for temporary cache storage."
    ],
    "correctIndex": 0,
    "explanation": "Option A accurately states the formal definition: A firewall technology that monitors the state of active network connections in a state table, automatically permitting return traffic for established sessions.. The other choices are incorrect distractors.",
    "referenceExamPoint": "Detail the step-by-step SSL/TLS handshake for connection setup and key exchange."
  },
  {
    "id": "mcq-cn-u5-t3-2",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t3",
    "topicTitle": "Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)",
    "difficulty": "beginner",
    "question": "In the study of Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls), what is the role of \"Security Protocols\"?",
    "options": [
      "It serves as an unnecessary auxiliary buffer that increases transmission delay.",
      "Branch office routers encrypt all company traffic entering the public internet and encapsulate it with gateway IP headers, decrypting it at HQ.",
      "It restricts communication to single-directional half-duplex signals only.",
      "It generates random non-deterministic noise across physical transmission lines."
    ],
    "correctIndex": 1,
    "explanation": "Branch office routers encrypt all company traffic entering the public internet and encapsulate it with gateway IP headers, decrypting it at HQ.",
    "referenceExamPoint": "Compare IPsec Transport Mode vs Tunnel Mode with packet diagrams."
  },
  {
    "id": "mcq-cn-u5-t3-3",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t3",
    "topicTitle": "Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)",
    "difficulty": "beginner",
    "question": "Which statement regarding \"DMZ (Demilitarized Zone)\" is TRUE?",
    "options": [
      "It is completely unstandardized and differs across proprietary vendors.",
      "It is an optional diagnostic logging tool that has zero effect on operational runtime.",
      "A physical or logical subnetwork that exposes an organization external-facing services to an untrusted network while protecting internal LANs.",
      "It is only applicable in theoretical simulations and cannot be implemented in hardware."
    ],
    "correctIndex": 2,
    "explanation": "DMZ (Demilitarized Zone) is formally defined as: A physical or logical subnetwork that exposes an organization external-facing services to an untrusted network while protecting internal LANs.",
    "referenceExamPoint": "TLS: Secures L4/L7 (HTTPS), handshake negotiates session keys."
  },
  {
    "id": "mcq-cn-u5-t3-4",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t3",
    "topicTitle": "Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)",
    "difficulty": "intermediate",
    "question": "How does Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls) address the problem of system overhead or error conditions?",
    "options": [
      "A stateless firewall requires separate manual rules for outbound requests and inbound replies. A stateful firewall remembers the SYN and allows the return SYN-ACK automatically.",
      "By discarding all unacknowledged packets immediately without logging.",
      "By permanently locking the transmission bus until manual human reset.",
      "By multiplying the clock frequency by an arbitrary random factor."
    ],
    "correctIndex": 0,
    "explanation": "A stateless firewall requires separate manual rules for outbound requests and inbound replies. A stateful firewall remembers the SYN and allows the return SYN-ACK automatically.",
    "referenceExamPoint": "Differentiate Stateless Packet Filtering, Stateful Inspection, and Application-Level Gateway firewalls."
  },
  {
    "id": "mcq-cn-u5-t3-5",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t3",
    "topicTitle": "Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)",
    "difficulty": "intermediate",
    "question": "Which of the following is a prominent real-world application of Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)?",
    "options": [
      "Analog telegraph communication across 19th-century copper wires.",
      "Purely non-digital mechanical relay computing systems.",
      "Enterprise site-to-site IPsec VPN interconnecting branch offices.",
      "Uncalibrated consumer toy battery charging circuits."
    ],
    "correctIndex": 2,
    "explanation": "A primary modern deployment is: Enterprise site-to-site IPsec VPN interconnecting branch offices.. The other options describe obsolete or irrelevant domains.",
    "referenceExamPoint": "IPsec AH (integrity only, proto 51); ESP (encryption + integrity, proto 50)."
  },
  {
    "id": "mcq-cn-u5-t3-6",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t3",
    "topicTitle": "Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)",
    "difficulty": "intermediate",
    "question": "Consider the design trade-offs in Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls). What is the primary disadvantage of choosing a naive or unoptimized implementation?",
    "options": [
      "It increases hardware power consumption while failing to provide reliability guarantees.",
      "It produces perfectly deterministic results with zero computational overhead.",
      "It automatically adapts to infinite scale without additional configuration.",
      "It completely eliminates the need for underlying physical communication layers."
    ],
    "correctIndex": 0,
    "explanation": "Naive implementations suffer from degraded throughput, increased latency, or higher resource overhead, as detailed in the curriculum notes: IPsec Transport mode = host-to-host; Tunnel mode = gateway-to-gateway..",
    "referenceExamPoint": "Compare IPsec Transport Mode vs Tunnel Mode with packet diagrams."
  },
  {
    "id": "mcq-cn-u5-t3-7",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t3",
    "topicTitle": "Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)",
    "difficulty": "intermediate",
    "question": "What distinguishes \"IPsec ESP (Encapsulating Security Payload)\" in Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)?",
    "options": [
      "It only works when the network is completely idle with zero active clients.",
      "An IPsec protocol that provides data confidentiality, origin authentication, integrity check, and anti-replay protection.",
      "It requires physical manual key entry for every single byte of transmitted data.",
      "It forces the CPU into an infinite polling loop without interrupt handling."
    ],
    "correctIndex": 1,
    "explanation": "IPsec ESP (Encapsulating Security Payload) is specifically defined as: An IPsec protocol that provides data confidentiality, origin authentication, integrity check, and anti-replay protection.",
    "referenceExamPoint": "IPsec Transport mode = host-to-host; Tunnel mode = gateway-to-gateway."
  },
  {
    "id": "mcq-cn-u5-t3-8",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t3",
    "topicTitle": "Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)",
    "difficulty": "advanced",
    "question": "In advanced theoretical analysis of Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls), what condition leads to performance collapse or computational intractability?",
    "options": [
      "When buffer memory exceeds the physical disk capacity by a factor of 10.",
      "When clock jitter drops below one nanosecond.",
      "When scaling causes state space explosion, oversubscription, or unbounded queuing delays.",
      "When all connected clients operate at line rate with zero packet drops."
    ],
    "correctIndex": 2,
    "explanation": "Advanced systems break down under state explosion, oversubscription, or unmitigated collisions/loops, requiring formal algorithms like Clos fabrics, d-separation, or backoff protocols.",
    "referenceExamPoint": "Detail the step-by-step SSL/TLS handshake for connection setup and key exchange."
  },
  {
    "id": "mcq-cn-u5-t3-9",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t3",
    "topicTitle": "Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)",
    "difficulty": "advanced",
    "question": "Which of the following represents an essential mathematical or architectural formula associated with Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)?",
    "options": [
      "Principle: TLS: Secures L4/L7 (HTTPS), handshake negotiates session keys.",
      "Throughput = Input / 0 (undefined divergence).",
      "Latency = Speed of light multiplied by clock cycle frequency.",
      "Bandwidth = Total disk space divided by number of CPU cores."
    ],
    "correctIndex": 0,
    "explanation": "Correct: TLS: Secures L4/L7 (HTTPS), handshake negotiates session keys.. The other options are physically or mathematically absurd.",
    "referenceExamPoint": "TLS: Secures L4/L7 (HTTPS), handshake negotiates session keys."
  },
  {
    "id": "mcq-cn-u5-t3-10",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "topicId": "cn-u5-t3",
    "topicTitle": "Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)",
    "difficulty": "advanced",
    "question": "How does modern production technology advance beyond legacy limitations in Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)?",
    "options": [
      "By returning entirely to unencrypted analog circuits to avoid digital logic bugs.",
      "By adopting decentralized protocols, hardware acceleration, or optimized mathematical representations.",
      "By hardcoding all dynamic state variables as static constants in ROM.",
      "By reducing transmission bandwidth to match 1980 dial-up modem standards."
    ],
    "correctIndex": 1,
    "explanation": "Modern advancements in Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls) leverage hardware acceleration, eBPF, non-blocking fabrics, or advanced heuristics to achieve line-rate performance and scalability.",
    "referenceExamPoint": "Secure e-commerce payment processing over HTTPS/TLS 1.3."
  }
];
