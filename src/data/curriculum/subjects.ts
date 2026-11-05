import { SubjectId, SubjectMetadata, UnitMetadata } from '../../types';

export const ALL_SUBJECTS: SubjectMetadata[] = [
  {
    id: 'cn',
    code: 'CS-401',
    name: 'Computer Networks',
    shortName: 'Networks',
    tagline: 'Protocols, architectural models, routing algorithms, transport mechanics, and cyber security.',
    iconName: 'Network',
    accentColor: '#2563eb', // Blue
    unitsCount: 5,
    topicsCount: 15,
    mcqCount: 150,
    partBCount: 10,
  },
  {
    id: 'ai',
    code: 'CS-402',
    name: 'Fundamentals of AI',
    shortName: 'AI Fundamentals',
    tagline: 'Intelligent agents, uninformed and heuristic search, logical inference, and probabilistic reasoning.',
    iconName: 'Cpu',
    accentColor: '#7c3aed', // Violet
    unitsCount: 5,
    topicsCount: 15,
    mcqCount: 150,
    partBCount: 10,
  },
  {
    id: 'toc',
    code: 'CS-403',
    name: 'Theory of Computation',
    shortName: 'Theory of Comp',
    tagline: 'Formal languages, finite automata, pushdown automata, Turing machines, decidability, and complexity.',
    iconName: 'Binary',
    accentColor: '#0284c7', // Sky
    unitsCount: 5,
    topicsCount: 15,
    mcqCount: 150,
    partBCount: 10,
  },
  {
    id: 'mc',
    code: 'CS-404',
    name: 'Mobile Computing',
    shortName: 'Mobile Comp',
    tagline: 'Cellular architecture, handoff, wireless MAC, IEEE 802.11, Mobile IP, Indirect TCP, and MANETs.',
    iconName: 'Smartphone',
    accentColor: '#0d9488', // Teal
    unitsCount: 5,
    topicsCount: 15,
    mcqCount: 150,
    partBCount: 10,
  },
  {
    id: 'gk',
    code: 'GEN-101',
    name: 'General Knowledge',
    shortName: 'General Studies',
    tagline: 'Indian Constitution, national movement, drainage & physical geography, RBI & fiscal policy, space & global affairs.',
    iconName: 'Compass',
    accentColor: '#d97706', // Amber
    unitsCount: 5,
    topicsCount: 15,
    mcqCount: 150,
    partBCount: 10,
  },
];

export const ALL_UNITS: UnitMetadata[] = [
  // 1. Computer Networks (Units 1 to 5)
  {
    id: 'cn-u1',
    subjectId: 'cn',
    unitNumber: 1,
    title: 'Foundations & Physical Layer',
    description: 'Network topologies, OSI and TCP/IP protocol architectures, transmission media, and multiplexing fundamentals.',
    topicIds: ['cn-u1-t1', 'cn-u1-t2', 'cn-u1-t3'],
  },
  {
    id: 'cn-u2',
    subjectId: 'cn',
    unitNumber: 2,
    title: 'Data Link Layer & Medium Access',
    description: 'Framing, error detection & correction (CRC, Hamming code), sliding window flow control, and multiple access protocols.',
    topicIds: ['cn-u2-t1', 'cn-u2-t2', 'cn-u2-t3'],
  },
  {
    id: 'cn-u3',
    subjectId: 'cn',
    unitNumber: 3,
    title: 'Network Layer & Routing',
    description: 'IPv4/IPv6 addressing, classless subnetting (CIDR), intra and inter-domain routing algorithms, and packet forwarding.',
    topicIds: ['cn-u3-t1', 'cn-u3-t2', 'cn-u3-t3'],
  },
  {
    id: 'cn-u4',
    subjectId: 'cn',
    unitNumber: 4,
    title: 'Transport Layer & Congestion Control',
    description: 'End-to-end transport mechanics, port multiplexing, TCP 3-way handshake, flow control, and TCP congestion algorithms.',
    topicIds: ['cn-u4-t1', 'cn-u4-t2', 'cn-u4-t3'],
  },
  {
    id: 'cn-u5',
    subjectId: 'cn',
    unitNumber: 5,
    title: 'Application Layer & Network Security',
    description: 'Application protocols (DNS, HTTP/HTTPS, FTP, SMTP), symmetric & asymmetric cryptography, SSL/TLS, and firewalls.',
    topicIds: ['cn-u5-t1', 'cn-u5-t2', 'cn-u5-t3'],
  },

  // 2. Fundamentals of AI (Units 1 to 5)
  {
    id: 'ai-u1',
    subjectId: 'ai',
    unitNumber: 1,
    title: 'Introduction to AI & Intelligent Agents',
    description: 'Historical evolution, definitions of intelligence, agent architectures, PEAS specification, and environment classifications.',
    topicIds: ['ai-u1-t1', 'ai-u1-t2', 'ai-u1-t3'],
  },
  {
    id: 'ai-u2',
    subjectId: 'ai',
    unitNumber: 2,
    title: 'Search Strategies & Problem Solving',
    description: 'State space formulation, uninformed graph search (BFS, DFS, UCS), heuristic informed search (A*), and adversarial game playing.',
    topicIds: ['ai-u2-t1', 'ai-u2-t2', 'ai-u2-t3'],
  },
  {
    id: 'ai-u3',
    subjectId: 'ai',
    unitNumber: 3,
    title: 'Knowledge Representation & Logic',
    description: 'Propositional logic inference, First-Order Predicate Logic (FOL), unification, resolution refutation, and ontologies.',
    topicIds: ['ai-u3-t1', 'ai-u3-t2', 'ai-u3-t3'],
  },
  {
    id: 'ai-u4',
    subjectId: 'ai',
    unitNumber: 4,
    title: 'Uncertainty & Probabilistic Reasoning',
    description: 'Bayesian probability theory, conditional independence, Bayesian Belief Networks (BBN), and Markov Decision Processes.',
    topicIds: ['ai-u4-t1', 'ai-u4-t2', 'ai-u4-t3'],
  },
  {
    id: 'ai-u5',
    subjectId: 'ai',
    unitNumber: 5,
    title: 'Machine Learning & AI Ethics',
    description: 'Supervised, unsupervised, reinforcement paradigms, artificial neural networks, backpropagation, and ethical alignment.',
    topicIds: ['ai-u5-t1', 'ai-u5-t2', 'ai-u5-t3'],
  },

  // 3. Theory of Computation (Units 1 to 5)
  {
    id: 'toc-u1',
    subjectId: 'toc',
    unitNumber: 1,
    title: 'Automata Theory & Regular Languages',
    description: 'Alphabets, languages, Deterministic Finite Automata (DFA), Non-deterministic Finite Automata (NFA), and Regular Expressions.',
    topicIds: ['toc-u1-t1', 'toc-u1-t2', 'toc-u1-t3'],
  },
  {
    id: 'toc-u2',
    subjectId: 'toc',
    unitNumber: 2,
    title: 'Regular Language Properties & DFA Minimization',
    description: 'Closure properties of regular sets, the Pumping Lemma for regular languages, and Myhill-Nerode minimization.',
    topicIds: ['toc-u2-t1', 'toc-u2-t2', 'toc-u2-t3'],
  },
  {
    id: 'toc-u3',
    subjectId: 'toc',
    unitNumber: 3,
    title: 'Context-Free Grammars & Pushdown Automata',
    description: 'Context-free grammars (CFG), parse trees, ambiguity, Chomsky & Greibach normal forms, and pushdown automata (PDA).',
    topicIds: ['toc-u3-t1', 'toc-u3-t2', 'toc-u3-t3'],
  },
  {
    id: 'toc-u4',
    subjectId: 'toc',
    unitNumber: 4,
    title: 'CFL Properties & Turing Machines',
    description: 'Pumping Lemma for CFLs, closure limitations, standard Turing machine definition, transition functions, and tape computations.',
    topicIds: ['toc-u4-t1', 'toc-u4-t2', 'toc-u4-t3'],
  },
  {
    id: 'toc-u5',
    subjectId: 'toc',
    unitNumber: 5,
    title: 'Decidability, Undecidability & Complexity Classes',
    description: 'Church-Turing thesis, Universal Turing Machine, the Halting Problem, Rice theorem, and complexity classes P, NP, NP-Complete.',
    topicIds: ['toc-u5-t1', 'toc-u5-t2', 'toc-u5-t3'],
  },

  // 4. Mobile Computing (Units 1 to 5)
  {
    id: 'mc-u1',
    subjectId: 'mc',
    unitNumber: 1,
    title: 'Mobile Architecture & Cellular Fundamentals',
    description: 'Mobile computing principles, 1G-to-5G evolution, cellular geometry, frequency reuse clusters, and handoff algorithms.',
    topicIds: ['mc-u1-t1', 'mc-u1-t2', 'mc-u1-t3'],
  },
  {
    id: 'mc-u2',
    subjectId: 'mc',
    unitNumber: 2,
    title: 'Wireless MAC & Telecommunication Systems',
    description: 'Hidden and exposed terminal challenges, MACA/MACAW, GSM architectural subsystems, logical channels, and 2.5G/3G data.',
    topicIds: ['mc-u2-t1', 'mc-u2-t2', 'mc-u2-t3'],
  },
  {
    id: 'mc-u3',
    subjectId: 'mc',
    unitNumber: 3,
    title: 'Wireless LANs, Bluetooth & Mobile IP',
    description: 'IEEE 802.11 DCF/PCF & CSMA/CA, Bluetooth piconets and scatternets, Mobile IP home/foreign agents, and triangle routing.',
    topicIds: ['mc-u3-t1', 'mc-u3-t2', 'mc-u3-t3'],
  },
  {
    id: 'mc-u4',
    subjectId: 'mc',
    unitNumber: 4,
    title: 'Mobile Transport Layer & Data Management',
    description: 'Effects of wireless transmission on TCP, Indirect TCP, Snooping TCP, Mobile TCP, and disconnected hoarding/caching.',
    topicIds: ['mc-u4-t1', 'mc-u4-t2', 'mc-u4-t3'],
  },
  {
    id: 'mc-u5',
    subjectId: 'mc',
    unitNumber: 5,
    title: 'MANET Routing Protocols & Mobile Security',
    description: 'Mobile Ad-hoc Network (MANET) characteristics, reactive (AODV, DSR) and proactive (DSDV) routing, and wireless security.',
    topicIds: ['mc-u5-t1', 'mc-u5-t2', 'mc-u5-t3'],
  },

  // 5. General Knowledge (Units 1 to 5)
  {
    id: 'gk-u1',
    subjectId: 'gk',
    unitNumber: 1,
    title: 'Indian Polity, Constitution & Governance',
    description: 'Constituent assembly, Preamble ideals, Fundamental Rights, Directive Principles, and the Executive, Legislative, and Judiciary balance.',
    topicIds: ['gk-u1-t1', 'gk-u1-t2', 'gk-u1-t3'],
  },
  {
    id: 'gk-u2',
    subjectId: 'gk',
    unitNumber: 2,
    title: 'Modern Indian History & Freedom Struggle',
    description: 'Revolt of 1857, early Indian National Congress, Partition of Bengal, and the Gandhian mass movements leading to Independence.',
    topicIds: ['gk-u2-t1', 'gk-u2-t2', 'gk-u2-t3'],
  },
  {
    id: 'gk-u3',
    subjectId: 'gk',
    unitNumber: 3,
    title: 'Geography, River Systems & Environment of India',
    description: 'Himalayan and Peninsular physiography, river drainage basins, Southwest Monsoon climate dynamics, and conservation hotspots.',
    topicIds: ['gk-u3-t1', 'gk-u3-t2', 'gk-u3-t3'],
  },
  {
    id: 'gk-u4',
    subjectId: 'gk',
    unitNumber: 4,
    title: 'Indian Economy & Financial Architecture',
    description: 'Economic planning, NITI Aayog development goals, Reserve Bank of India monetary policy tools, and fiscal taxation (GST).',
    topicIds: ['gk-u4-t1', 'gk-u4-t2', 'gk-u4-t3'],
  },
  {
    id: 'gk-u5',
    subjectId: 'gk',
    unitNumber: 5,
    title: 'Science, Space Missions & Global Affairs',
    description: 'ISRO planetary expeditions, DRDO strategic systems, United Nations organs, Bretton Woods agencies, and Sustainable Development Goals.',
    topicIds: ['gk-u5-t1', 'gk-u5-t2', 'gk-u5-t3'],
  },
];

export function getSubjectById(subjectId: SubjectId): SubjectMetadata {
  return ALL_SUBJECTS.find((s) => s.id === subjectId) || ALL_SUBJECTS[0];
}

export function getUnitsBySubject(subjectId: SubjectId): UnitMetadata[] {
  return ALL_UNITS.filter((u) => u.subjectId === subjectId);
}

export function getUnitById(unitId: string): UnitMetadata | undefined {
  return ALL_UNITS.find((u) => u.id === unitId);
}
