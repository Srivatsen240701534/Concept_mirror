// src/services/conceptDictionary.ts
// Subject-specific technical knowledge base for offline Part B answer evaluation
// Covers: Computer Networks (cn), Fundamentals of AI (ai), Theory of Computation (toc),
// Mobile Computing (mc), and General Knowledge (gk).

export interface AbbreviationEntry {
  shortForm: string; // e.g. "TCP"
  fullForm: string; // e.g. "Transmission Control Protocol"
  subjectId?: 'cn' | 'ai' | 'toc' | 'mc' | 'gk' | 'general';
  category?: string;
  aliases?: string[]; // alternate short forms like "T.C.P.", "T.C.P", "tcp"
}

export interface FunctionalDefinition {
  conceptKey: string;
  subjectId: 'cn' | 'ai' | 'toc' | 'mc' | 'gk';
  patterns: RegExp[];
  canonicalTerm: string;
  minWordCount?: number;
}

export interface MisconceptionRule {
  conceptKey: string;
  contradictionPatterns: RegExp[];
  explanation: string;
}

/**
 * 1. Comprehensive Abbreviation Dictionary for all 5 Subjects
 */
export const ABBREVIATIONS: AbbreviationEntry[] = [
  // --- Computer Networks (cn) ---
  { shortForm: 'TCP', fullForm: 'Transmission Control Protocol', subjectId: 'cn' },
  { shortForm: 'IP', fullForm: 'Internet Protocol', subjectId: 'cn' },
  { shortForm: 'UDP', fullForm: 'User Datagram Protocol', subjectId: 'cn' },
  { shortForm: 'HTTP', fullForm: 'Hypertext Transfer Protocol', subjectId: 'cn' },
  { shortForm: 'HTTPS', fullForm: 'Hypertext Transfer Protocol Secure', subjectId: 'cn' },
  { shortForm: 'DNS', fullForm: 'Domain Name System', subjectId: 'cn' },
  { shortForm: 'FTP', fullForm: 'File Transfer Protocol', subjectId: 'cn' },
  { shortForm: 'SMTP', fullForm: 'Simple Mail Transfer Protocol', subjectId: 'cn' },
  { shortForm: 'ARP', fullForm: 'Address Resolution Protocol', subjectId: 'cn' },
  { shortForm: 'RARP', fullForm: 'Reverse Address Resolution Protocol', subjectId: 'cn' },
  { shortForm: 'ICMP', fullForm: 'Internet Control Message Protocol', subjectId: 'cn' },
  { shortForm: 'OSPF', fullForm: 'Open Shortest Path First', subjectId: 'cn' },
  { shortForm: 'BGP', fullForm: 'Border Gateway Protocol', subjectId: 'cn' },
  { shortForm: 'RIP', fullForm: 'Routing Information Protocol', subjectId: 'cn' },
  { shortForm: 'CRC', fullForm: 'Cyclic Redundancy Check', subjectId: 'cn' },
  { shortForm: 'CSMA/CD', fullForm: 'Carrier Sense Multiple Access with Collision Detection', subjectId: 'cn', aliases: ['CSMA-CD', 'CSMACD'] },
  { shortForm: 'CSMA/CA', fullForm: 'Carrier Sense Multiple Access with Collision Avoidance', subjectId: 'cn', aliases: ['CSMA-CA', 'CSMACA'] },
  { shortForm: 'CIDR', fullForm: 'Classless Inter-Domain Routing', subjectId: 'cn' },
  { shortForm: 'VLSM', fullForm: 'Variable Length Subnet Mask', subjectId: 'cn' },
  { shortForm: 'NAT', fullForm: 'Network Address Translation', subjectId: 'cn' },
  { shortForm: 'DHCP', fullForm: 'Dynamic Host Configuration Protocol', subjectId: 'cn' },
  { shortForm: 'LAN', fullForm: 'Local Area Network', subjectId: 'cn' },
  { shortForm: 'WAN', fullForm: 'Wide Area Network', subjectId: 'cn' },
  { shortForm: 'MAN', fullForm: 'Metropolitan Area Network', subjectId: 'cn' },
  { shortForm: 'VPN', fullForm: 'Virtual Private Network', subjectId: 'cn' },
  { shortForm: 'SSL', fullForm: 'Secure Sockets Layer', subjectId: 'cn' },
  { shortForm: 'TLS', fullForm: 'Transport Layer Security', subjectId: 'cn' },
  { shortForm: 'IPsec', fullForm: 'Internet Protocol Security', subjectId: 'cn', aliases: ['IPSEC', 'IP-sec'] },
  { shortForm: 'RSA', fullForm: 'Rivest Shamir Adleman', subjectId: 'cn' },
  { shortForm: 'AES', fullForm: 'Advanced Encryption Standard', subjectId: 'cn' },
  { shortForm: 'DES', fullForm: 'Data Encryption Standard', subjectId: 'cn' },
  { shortForm: 'PDU', fullForm: 'Protocol Data Unit', subjectId: 'cn' },
  { shortForm: 'MTU', fullForm: 'Maximum Transmission Unit', subjectId: 'cn' },
  { shortForm: 'RTT', fullForm: 'Round Trip Time', subjectId: 'cn' },
  { shortForm: 'MAC', fullForm: 'Medium Access Control', subjectId: 'cn' },
  { shortForm: 'LLC', fullForm: 'Logical Link Control', subjectId: 'cn' },
  { shortForm: 'CWND', fullForm: 'Congestion Window', subjectId: 'cn' },
  { shortForm: 'SSTHRESH', fullForm: 'Slow Start Threshold', subjectId: 'cn' },

  // --- Fundamentals of AI (ai) ---
  { shortForm: 'AI', fullForm: 'Artificial Intelligence', subjectId: 'ai' },
  { shortForm: 'ML', fullForm: 'Machine Learning', subjectId: 'ai' },
  { shortForm: 'DL', fullForm: 'Deep Learning', subjectId: 'ai' },
  { shortForm: 'NLP', fullForm: 'Natural Language Processing', subjectId: 'ai' },
  { shortForm: 'PEAS', fullForm: 'Performance Environment Actuators Sensors', subjectId: 'ai' },
  { shortForm: 'BFS', fullForm: 'Breadth First Search', subjectId: 'ai' },
  { shortForm: 'DFS', fullForm: 'Depth First Search', subjectId: 'ai' },
  { shortForm: 'UCS', fullForm: 'Uniform Cost Search', subjectId: 'ai' },
  { shortForm: 'IDDFS', fullForm: 'Iterative Deepening Depth First Search', subjectId: 'ai' },
  { shortForm: 'CSP', fullForm: 'Constraint Satisfaction Problem', subjectId: 'ai' },
  { shortForm: 'FOL', fullForm: 'First Order Logic', subjectId: 'ai' },
  { shortForm: 'CNF', fullForm: 'Conjunctive Normal Form', subjectId: 'ai' },
  { shortForm: 'DNF', fullForm: 'Disjunctive Normal Form', subjectId: 'ai' },
  { shortForm: 'KB', fullForm: 'Knowledge Base', subjectId: 'ai' },
  { shortForm: 'MDP', fullForm: 'Markov Decision Process', subjectId: 'ai' },
  { shortForm: 'POMDP', fullForm: 'Partially Observable Markov Decision Process', subjectId: 'ai' },
  { shortForm: 'HMM', fullForm: 'Hidden Markov Model', subjectId: 'ai' },
  { shortForm: 'ANN', fullForm: 'Artificial Neural Network', subjectId: 'ai' },
  { shortForm: 'CNN', fullForm: 'Convolutional Neural Network', subjectId: 'ai' },
  { shortForm: 'RNN', fullForm: 'Recurrent Neural Network', subjectId: 'ai' },
  { shortForm: 'RL', fullForm: 'Reinforcement Learning', subjectId: 'ai' },
  { shortForm: 'STRIPS', fullForm: 'Stanford Research Institute Problem Solver', subjectId: 'ai' },
  { shortForm: 'PDDL', fullForm: 'Planning Domain Definition Language', subjectId: 'ai' },

  // --- Theory of Computation (toc) ---
  { shortForm: 'DFA', fullForm: 'Deterministic Finite Automaton', subjectId: 'toc', aliases: ['DFAs', 'Deterministic Finite Automata'] },
  { shortForm: 'NFA', fullForm: 'Nondeterministic Finite Automaton', subjectId: 'toc', aliases: ['NFAs', 'Nondeterministic Finite Automata'] },
  { shortForm: 'PDA', fullForm: 'Pushdown Automaton', subjectId: 'toc', aliases: ['PDAs', 'Pushdown Automata'] },
  { shortForm: 'DPDA', fullForm: 'Deterministic Pushdown Automaton', subjectId: 'toc' },
  { shortForm: 'NPDA', fullForm: 'Nondeterministic Pushdown Automaton', subjectId: 'toc' },
  { shortForm: 'TM', fullForm: 'Turing Machine', subjectId: 'toc', aliases: ['TMs', 'Turing Machines'] },
  { shortForm: 'DTM', fullForm: 'Deterministic Turing Machine', subjectId: 'toc' },
  { shortForm: 'NTM', fullForm: 'Nondeterministic Turing Machine', subjectId: 'toc' },
  { shortForm: 'CFG', fullForm: 'Context Free Grammar', subjectId: 'toc', aliases: ['CFGs', 'Context Free Grammars'] },
  { shortForm: 'CFL', fullForm: 'Context Free Language', subjectId: 'toc', aliases: ['CFLs', 'Context Free Languages'] },
  { shortForm: 'RE', fullForm: 'Regular Expression', subjectId: 'toc', aliases: ['Regex', 'RegEx', 'Regular Expressions'] },
  { shortForm: 'RL', fullForm: 'Regular Language', subjectId: 'toc', aliases: ['RLs', 'Regular Languages'] },
  { shortForm: 'CNF', fullForm: 'Chomsky Normal Form', subjectId: 'toc' },
  { shortForm: 'GNF', fullForm: 'Greibach Normal Form', subjectId: 'toc' },
  { shortForm: 'LBA', fullForm: 'Linear Bounded Automaton', subjectId: 'toc' },
  { shortForm: 'CSG', fullForm: 'Context Sensitive Grammar', subjectId: 'toc' },
  { shortForm: 'CSL', fullForm: 'Context Sensitive Language', subjectId: 'toc' },
  { shortForm: 'PCP', fullForm: 'Post Correspondence Problem', subjectId: 'toc' },
  { shortForm: 'NPC', fullForm: 'NP Complete', subjectId: 'toc', aliases: ['NP-Complete'] },
  { shortForm: 'NPH', fullForm: 'NP Hard', subjectId: 'toc', aliases: ['NP-Hard'] },

  // --- Mobile Computing (mc) ---
  { shortForm: 'GSM', fullForm: 'Global System for Mobile Communications', subjectId: 'mc' },
  { shortForm: 'GPRS', fullForm: 'General Packet Radio Service', subjectId: 'mc' },
  { shortForm: 'EDGE', fullForm: 'Enhanced Data rates for GSM Evolution', subjectId: 'mc' },
  { shortForm: 'UMTS', fullForm: 'Universal Mobile Telecommunications System', subjectId: 'mc' },
  { shortForm: 'LTE', fullForm: 'Long Term Evolution', subjectId: 'mc' },
  { shortForm: 'CDMA', fullForm: 'Code Division Multiple Access', subjectId: 'mc' },
  { shortForm: 'TDMA', fullForm: 'Time Division Multiple Access', subjectId: 'mc' },
  { shortForm: 'FDMA', fullForm: 'Frequency Division Multiple Access', subjectId: 'mc' },
  { shortForm: 'SDMA', fullForm: 'Space Division Multiple Access', subjectId: 'mc' },
  { shortForm: 'OFDMA', fullForm: 'Orthogonal Frequency Division Multiple Access', subjectId: 'mc' },
  { shortForm: 'MANET', fullForm: 'Mobile Ad-hoc Network', subjectId: 'mc', aliases: ['MANETs', 'Mobile Ad hoc Networks'] },
  { shortForm: 'DSDV', fullForm: 'Destination Sequenced Distance Vector', subjectId: 'mc' },
  { shortForm: 'AODV', fullForm: 'Ad hoc On Demand Distance Vector', subjectId: 'mc' },
  { shortForm: 'DSR', fullForm: 'Dynamic Source Routing', subjectId: 'mc' },
  { shortForm: 'MIP', fullForm: 'Mobile IP', subjectId: 'mc' },
  { shortForm: 'COA', fullForm: 'Care of Address', subjectId: 'mc' },
  { shortForm: 'HA', fullForm: 'Home Agent', subjectId: 'mc' },
  { shortForm: 'FA', fullForm: 'Foreign Agent', subjectId: 'mc' },
  { shortForm: 'I-TCP', fullForm: 'Indirect TCP', subjectId: 'mc', aliases: ['ITCP'] },
  { shortForm: 'M-TCP', fullForm: 'Mobile TCP', subjectId: 'mc', aliases: ['MTCP'] },
  { shortForm: 'WLAN', fullForm: 'Wireless Local Area Network', subjectId: 'mc' },
  { shortForm: 'WPAN', fullForm: 'Wireless Personal Area Network', subjectId: 'mc' },
  { shortForm: 'RTS/CTS', fullForm: 'Request to Send Clear to Send', subjectId: 'mc', aliases: ['RTS-CTS', 'RTS CTS'] },
  { shortForm: 'DCF', fullForm: 'Distributed Coordination Function', subjectId: 'mc' },
  { shortForm: 'PCF', fullForm: 'Point Coordination Function', subjectId: 'mc' },
  { shortForm: 'WEP', fullForm: 'Wired Equivalent Privacy', subjectId: 'mc' },
  { shortForm: 'WPA', fullForm: 'Wi-Fi Protected Access', subjectId: 'mc' },
  { shortForm: 'BTS', fullForm: 'Base Transceiver Station', subjectId: 'mc' },
  { shortForm: 'BSC', fullForm: 'Base Station Controller', subjectId: 'mc' },
  { shortForm: 'MSC', fullForm: 'Mobile Switching Center', subjectId: 'mc' },
  { shortForm: 'HLR', fullForm: 'Home Location Register', subjectId: 'mc' },
  { shortForm: 'VLR', fullForm: 'Visitor Location Register', subjectId: 'mc' },
  { shortForm: 'VoIP', fullForm: 'Voice over Internet Protocol', subjectId: 'mc' },
  { shortForm: 'IMS', fullForm: 'IP Multimedia Subsystem', subjectId: 'mc' },

  // --- General Knowledge (gk) ---
  { shortForm: 'RBI', fullForm: 'Reserve Bank of India', subjectId: 'gk' },
  { shortForm: 'CRR', fullForm: 'Cash Reserve Ratio', subjectId: 'gk' },
  { shortForm: 'SLR', fullForm: 'Statutory Liquidity Ratio', subjectId: 'gk' },
  { shortForm: 'GST', fullForm: 'Goods and Services Tax', subjectId: 'gk' },
  { shortForm: 'NITI', fullForm: 'National Institution for Transforming India', subjectId: 'gk', aliases: ['NITI Aayog'] },
  { shortForm: 'DPSP', fullForm: 'Directive Principles of State Policy', subjectId: 'gk' },
  { shortForm: 'PIL', fullForm: 'Public Interest Litigation', subjectId: 'gk' },
  { shortForm: 'ISRO', fullForm: 'Indian Space Research Organisation', subjectId: 'gk' },
  { shortForm: 'DRDO', fullForm: 'Defence Research and Development Organisation', subjectId: 'gk' },
  { shortForm: 'UN', fullForm: 'United Nations', subjectId: 'gk' },
  { shortForm: 'UNSC', fullForm: 'United Nations Security Council', subjectId: 'gk' },
  { shortForm: 'IMF', fullForm: 'International Monetary Fund', subjectId: 'gk' },
  { shortForm: 'IBRD', fullForm: 'International Bank for Reconstruction and Development', subjectId: 'gk' },
  { shortForm: 'SDG', fullForm: 'Sustainable Development Goal', subjectId: 'gk', aliases: ['SDGs', 'Sustainable Development Goals'] },
  { shortForm: 'PSLV', fullForm: 'Polar Satellite Launch Vehicle', subjectId: 'gk' },
  { shortForm: 'GSLV', fullForm: 'Geosynchronous Satellite Launch Vehicle', subjectId: 'gk' },

  // --- General Computing ---
  { shortForm: 'CPU', fullForm: 'Central Processing Unit', subjectId: 'general' },
  { shortForm: 'RAM', fullForm: 'Random Access Memory', subjectId: 'general' },
  { shortForm: 'ROM', fullForm: 'Read Only Memory', subjectId: 'general' },
  { shortForm: 'OS', fullForm: 'Operating System', subjectId: 'general' },
  { shortForm: 'ALU', fullForm: 'Arithmetic Logic Unit', subjectId: 'general' },
  { shortForm: 'I/O', fullForm: 'Input Output', subjectId: 'general', aliases: ['IO'] },
];

/**
 * 2. Domain-Specific Synonyms and Alternative Technical Terms
 */
export const DOMAIN_SYNONYMS: Record<string, string[]> = {
  // Networks & Transport
  router: ['packet forwarder', 'layer 3 forwarding device', 'network gateway', 'routing node'],
  switch: ['layer 2 switching fabric', 'multi-port bridge', 'packet switch', 'switching hub'],
  hub: ['repeater', 'multiport repeater', 'physical layer concentrator'],
  firewall: ['packet filter', 'stateful inspection engine', 'access perimeter barrier', 'security gateway'],
  bandwidth: ['channel capacity', 'data rate', 'transmission speed', 'throughput capacity'],
  throughput: ['data transfer rate', 'actual transmission speed', 'delivered bandwidth', 'goodput'],
  latency: ['propagation delay', 'round trip time', 'network delay', 'lag', 'queuing delay'],
  packet: ['datagram', 'pdu', 'network unit', 'ip datagram'],
  frame: ['data link pdu', 'l2 unit', 'mac frame', 'ethernet frame'],
  segment: ['transport pdu', 'tcp segment', 'l4 chunk'],
  encapsulation: ['data wrapping', 'header attachment', 'multiplexing envelope', 'protocol nesting'],
  topology: ['network layout', 'interconnection structure', 'geometrical arrangement', 'wiring scheme'],
  mesh: ['fully connected', 'point to point interconnect', 'decentralized mesh', 'omni connected'],
  star: ['hub and spoke', 'central switch topology', 'radial connection'],
  bus: ['shared backbone', 'multipoint line', 'linear trunk'],
  ring: ['token ring', 'circular loop', 'closed loop loop'],
  handshake: ['three-way handshake', 'connection establishment', 'syn syn-ack ack sequence'],

  // Artificial Intelligence
  agent: ['autonomous entity', 'decision maker', 'intelligent system', 'software agent', 'rational actor'],
  heuristic: ['rule of thumb', 'evaluation function', 'informed estimate', 'guiding metric', 'cost estimator'],
  admissible: ['never overestimates', 'optimistic heuristic', 'lower bound cost estimator'],
  backtracking: ['depth first constraint search', 'recursive search with pruning', 'systematic trial and error'],
  pruning: ['branch elimination', 'search space reduction', 'alpha beta cut', 'cut off'],
  state: ['configuration', 'world snapshot', 'node representation'],
  sensor: ['percept receiver', 'input transducer', 'observation interface'],
  actuator: ['action executor', 'output effector', 'motor control'],

  // Theory of Computation
  automaton: ['state machine', 'formal computing model', 'transition system', 'finite state device'],
  transition: ['state change', 'delta function', 'state progression', 'movement on input'],
  stack: ['pushdown store', 'lifo memory', 'last in first out store'],
  tape: ['infinite storage', 'read write memory tape', 'linear tape memory'],
  decidable: ['computable', 'recursive language', 'solvable', 'turing-decidable'],
  undecidable: ['unsolvable', 'non-recursive', 'halting uncomputable', 'incomputable'],
  deterministic: ['single transition path', 'predictable state change', 'unique next state'],
  nondeterministic: ['multiple branch paths', 'parallel transition choices', 'simultaneous state branching'],

  // Mobile Computing
  handoff: ['handover', 'cell switching', 'channel re-assignment', 'base station transfer'],
  cell: ['coverage zone', 'hexagonal radio area', 'base station sector'],
  fading: ['signal attenuation', 'multipath loss', 'path loss', 'wireless interference'],
  ad_hoc: ['infrastructureless', 'peer to peer mobile', 'self configuring', 'dynamic decentralized'],

  // General Knowledge / Polity & Economy
  constitution: ['supreme law', 'foundational legal framework', 'grundnorm', 'charter'],
  preamble: ['introductory statement', 'philosophical preface', 'guiding spirit of constitution'],
  fundamental_rights: ['basic liberties', 'enforceable constitutional guarantees', 'justiciable rights'],
  monetary_policy: ['central bank credit control', 'liquidity management', 'interest rate regulation'],
  inflation: ['general price rise', 'currency purchasing power decline'],
  drainage_system: ['river network', 'fluvial basin system', 'catchment system'],
};

/**
 * 3. Functional Definitions / Paraphrase Patterns
 * Matches technical explanations where students describe how a concept works
 * without necessarily reproducing the exact terminology!
 */
export const FUNCTIONAL_DEFINITIONS: FunctionalDefinition[] = [
  // --- Computer Networks ---
  {
    conceptKey: 'router',
    subjectId: 'cn',
    patterns: [
      /(?:device|node|system|hardware)\s+(?:that\s+)?(?:forwards|routes|directs|switches)\s+(?:packets|traffic|datagrams)\s+between\s+(?:different\s+)?networks/i,
      /(?:operates|works)\s+at\s+(?:the\s+)?(?:layer\s+3|network\s+layer)\s+(?:to\s+)?(?:route|forward)\s+packets/i,
      /(?:determines|finds)\s+(?:the\s+)?best\s+(?:path|route)\s+(?:across|through)\s+(?:the\s+)?(?:internet|networks)/i,
    ],
    canonicalTerm: 'Router (Forwarding & Network Layer)',
  },
  {
    conceptKey: 'dns',
    subjectId: 'cn',
    patterns: [
      /(?:converts?|translates?|resolves?|maps?)\s+(?:domain\s+names?|hostnames?|urls?)\s+(?:in)?to\s+(?:ip\s+addresses?|numerical\s+ips?)/i,
      /(?:phonebook|directory)\s+of\s+the\s+internet/i,
      /(?:matches|looks\s+up)\s+(?:human\s+readable\s+)?names?\s+(?:to|with)\s+ip\s+addresses?/i,
    ],
    canonicalTerm: 'DNS (Domain Name System resolution)',
  },
  {
    conceptKey: 'tcp_reliability',
    subjectId: 'cn',
    patterns: [
      /(?:guarantees?|ensures?|provides?)\s+(?:reliable|in-order|lossless|accurate)\s+(?:data\s+)?delivery/i,
      /(?:uses?|utilizes?)\s+(?:sequence\s+numbers|acknowledg(?:e)?ments|acks?|checksums?)\s+to\s+(?:verify|retransmit|confirm)/i,
      /(?:retransmits?|resends?)\s+(?:lost|dropped|corrupted)\s+(?:packets|segments|data)/i,
      /(?:three|3)-way\s+handshake\s+(?:to\s+)?(?:establish|create|open)\s+(?:a\s+)?connection/i,
    ],
    canonicalTerm: 'TCP Reliability & Connection Mechanics',
  },
  {
    conceptKey: 'udp_concept',
    subjectId: 'cn',
    patterns: [
      /(?:connectionless|best-effort|unreliable|lightweight)\s+(?:transport|protocol|datagram\s+service)/i,
      /(?:no|without)\s+(?:handshake|guaranteed\s+delivery|acknowledg(?:e)?ments|retransmission)/i,
      /(?:low\s+latency|minimal\s+overhead|fast)\s+(?:for\s+)?(?:streaming|gaming|dns|voip)/i,
    ],
    canonicalTerm: 'UDP (Connectionless Transport)',
  },
  {
    conceptKey: 'packet_filtering_firewall',
    subjectId: 'cn',
    patterns: [
      /(?:inspects?|examines?|checks?)\s+(?:packet\s+)?(?:headers?|ip\s+addresses?|port\s+numbers?)\s+(?:against|using)\s+(?:rules?|access\s+control\s+lists?|acls?)/i,
      /(?:blocks?|allows?|drops?|permits?)\s+(?:traffic|packets)\s+based\s+on\s+(?:source|destination|port|protocol)/i,
    ],
    canonicalTerm: 'Packet Filtering & Firewall Mechanics',
  },
  {
    conceptKey: 'rsa_asymmetric',
    subjectId: 'cn',
    patterns: [
      /(?:uses?|relies\s+on)\s+(?:a\s+)?pair\s+of\s+keys\s*[,]?\s*(?:public\s+and\s+private|one\s+public\s+one\s+private)/i,
      /(?:public\s+key\s+(?:for\s+)?encryption\s+and\s+private\s+key\s+(?:for\s+)?decryption)/i,
      /(?:based\s+on|relies\s+on)\s+(?:the\s+difficulty\s+of\s+)?(?:factoring|prime\s+factorization\s+of)\s+large\s+(?:integers|numbers|primes)/i,
    ],
    canonicalTerm: 'Asymmetric Cryptography & RSA',
  },

  // --- Fundamentals of AI ---
  {
    conceptKey: 'peas_framework',
    subjectId: 'ai',
    patterns: [
      /(?:specifies|evaluates|describes|defines)\s+(?:performance\s+measure|environment|actuators|sensors)/i,
      /performance\s*[,]\s*environment\s*[,]\s*actuators?\s*[,]\s*sensors?/i,
      /(?:criteria|framework)\s+to\s+define\s+(?:the\s+)?agent\s+task\s+environment/i,
    ],
    canonicalTerm: 'PEAS Framework & Agent Task Environment',
  },
  {
    conceptKey: 'a_star_algorithm',
    subjectId: 'ai',
    patterns: [
      /f\s*\(\s*n\s*\)\s*=\s*g\s*\(\s*n\s*\)\s*\+\s*h\s*\(\s*n\s*\)/i,
      /(?:combines|sums)\s+(?:actual\s+cost|path\s+cost)\s+(?:from\s+start|g)\s+and\s+(?:heuristic|estimated\s+cost)\s+(?:to\s+goal|h)/i,
      /(?:guaranteed|optimal|complete)\s+(?:if|when)\s+(?:the\s+)?heuristic\s+is\s+admissible/i,
    ],
    canonicalTerm: 'A* Search & Cost Evaluation Function',
  },
  {
    conceptKey: 'minimax_alpha_beta',
    subjectId: 'ai',
    patterns: [
      /(?:maximizes?|maximize)\s+(?:own\s+score|utility)\s+while\s+(?:minimizing|assuming)\s+(?:opponent|competitor)\s+minimizes/i,
      /(?:alpha|beta)\s+(?:pruning|cut-off|cuts?)\s+(?:eliminates?|discards?|prunes?)\s+(?:branches|subtrees)/i,
      /(?:zero-sum|adversarial|game\s+playing)\s+(?:algorithm|tree\s+search)/i,
    ],
    canonicalTerm: 'Adversarial Minimax & Alpha-Beta Pruning',
  },
  {
    conceptKey: 'q_learning',
    subjectId: 'ai',
    patterns: [
      /(?:learns|updates)\s+(?:action-value|q-values?)\s+(?:through|using)\s+(?:rewards?|feedback|experience)/i,
      /bellman\s+(?:optimality\s+)?equation/i,
      /(?:model-free|temporal\s+difference|reinforcement\s+learning)\s+algorithm/i,
      /(?:exploration\s+vs\s+exploitation|epsilon\s+greedy)/i,
    ],
    canonicalTerm: 'Q-Learning & Reinforcement Dynamics',
  },

  // --- Theory of Computation ---
  {
    conceptKey: 'dfa_definition',
    subjectId: 'toc',
    patterns: [
      /(?:5|five)\s+tuple\s*(?:definition|representation)?\s*[:\(]?\s*(?:q|states?)\s*[,]\s*(?:sigma|alphabet)\s*[,]\s*(?:delta|transition)\s*[,]\s*(?:q0|start)\s*[,]\s*(?:f|accept)/i,
      /(?:deterministic|unique)\s+transition\s+for\s+(?:every|each)\s+input\s+symbol/i,
      /(?:no|does\s+not\s+allow)\s+(?:epsilon|lambda|null|\u03b5)\s+transitions/i,
    ],
    canonicalTerm: 'DFA 5-Tuple Formulation & Determinism',
  },
  {
    conceptKey: 'pda_stack',
    subjectId: 'toc',
    patterns: [
      /(?:finite\s+automaton|state\s+machine)\s+(?:equipped\s+with|augmented\s+with|having)\s+(?:a\s+)?(?:stack|pushdown\s+store|lifo\s+memory)/i,
      /(?:push|pop)\s+operations?\s+(?:to\s+)?(?:recognize|accept)\s+context-free/i,
      /(?:accepts?|recognized?)\s+by\s+(?:final\s+state|empty\s+stack)/i,
    ],
    canonicalTerm: 'PDA Stack Operations & Context-Free Recognition',
  },
  {
    conceptKey: 'turing_machine_concept',
    subjectId: 'toc',
    patterns: [
      /(?:infinite|unbounded)\s+(?:tape|storage)\s+(?:with\s+a\s+)?(?:read\/write|read-write)\s+head/i,
      /(?:head\s+can\s+move|moves)\s+(?:both\s+)?(?:left\s+and\s+right|l\s+and\s+r)/i,
      /(?:standard|formal)\s+mathematical\s+model\s+of\s+(?:universal\s+)?computation/i,
      /(?:accepts?|recognizes?)\s+(?:recursively\s+enumerable|turing-recognizable)\s+languages/i,
    ],
    canonicalTerm: 'Turing Machine Tape Architecture & Computational Power',
  },
  {
    conceptKey: 'halting_problem',
    subjectId: 'toc',
    patterns: [
      /(?:cannot\s+determine|impossible\s+to\s+decide)\s+whether\s+(?:an\s+arbitrary\s+)?(?:program|turing\s+machine)\s+(?:will\s+)?(?:halt|terminate|finish)\s+or\s+(?:loop\s+forever|run\s+infinitely)/i,
      /(?:proven\s+by|using)\s+(?:cantor(?:'s)?\s+)?diagonalization\s+(?:argument|method)/i,
      /undecidable\s+(?:decision\s+problem|language)/i,
    ],
    canonicalTerm: 'Halting Problem Undecidability & Diagonalization',
  },

  // --- Mobile Computing ---
  {
    conceptKey: 'cellular_handoff',
    subjectId: 'mc',
    patterns: [
      /(?:transferring|switching|handing\s+over)\s+(?:an\s+ongoing\s+)?call\s+(?:or\s+data\s+session)?\s+from\s+one\s+(?:base\s+station|cell|bts)\s+to\s+another/i,
      /(?:hard\s+handoff|break\s+before\s+make)\s+(?:and|vs)\s+(?:soft\s+handoff|make\s+before\s+break)/i,
      /(?:received\s+signal\s+strength|rssi|snr)\s+(?:drops|falls)\s+below\s+threshold/i,
    ],
    canonicalTerm: 'Cellular Handoff / Handover Mechanics',
  },
  {
    conceptKey: 'hidden_terminal_problem',
    subjectId: 'mc',
    patterns: [
      /(?:two|2)\s+nodes?\s+(?:out\s+of\s+range|cannot\s+hear\s+each\s+other)\s+transmitting\s+(?:simultaneously\s+)?to\s+(?:a\s+common|the\s+same)\s+(?:receiver|node|access\s+point)/i,
      /(?:resolved|solved|mitigated)\s+(?:by|using)\s+(?:rts\/cts|request\s+to\s+send)/i,
      /hidden\s+(?:terminal|node)\s+(?:problem|collision)/i,
    ],
    canonicalTerm: 'Hidden Terminal Problem & RTS/CTS Resolution',
  },
  {
    conceptKey: 'mobile_ip_mechanics',
    subjectId: 'mc',
    patterns: [
      /(?:home\s+agent|ha)\s+(?:tunnels?|encapsulates?|forwards?)\s+packets?\s+to\s+(?:foreign\s+agent|fa|care-of\s+address|coa)/i,
      /(?:maintains?|preserves?)\s+(?:permanent|home)\s+ip\s+address\s+while\s+(?:moving|roaming)/i,
      /triangle\s+routing\s+(?:problem|inefficiency)/i,
    ],
    canonicalTerm: 'Mobile IP Architecture & Triangle Routing',
  },
  {
    conceptKey: 'aodv_dsr_manet',
    subjectId: 'mc',
    patterns: [
      /(?:on-demand|reactive)\s+routing\s+(?:protocol)?\s+(?:discovers?\s+routes?\s+only\s+when\s+needed)/i,
      /(?:route\s+request|rreq)\s+and\s+(?:route\s+reply|rrep)/i,
      /(?:table-driven|proactive)\s+(?:vs|versus)\s+(?:on-demand|reactive)/i,
    ],
    canonicalTerm: 'MANET On-Demand Routing (AODV/DSR & RREQ/RREP)',
  },

  // --- General Knowledge ---
  {
    conceptKey: 'preamble_ideals',
    subjectId: 'gk',
    patterns: [
      /(?:sovereign\s+socialist\s+secular\s+democratic\s+republic)/i,
      /(?:justice|liberty|equality|fraternity)\s+(?:secured\s+to\s+all\s+citizens)/i,
      /(?:soul|key|id\s+card|preface)\s+of\s+the\s+constitution/i,
      /(?:adopted\s+on\s+)?(?:26th?\s+november|26\s+nov|1949)/i,
    ],
    canonicalTerm: 'Preamble Constitutional Ideals',
  },
  {
    conceptKey: 'fundamental_rights_vs_dpsp',
    subjectId: 'gk',
    patterns: [
      /(?:fundamental\s+rights|part\s+iii)\s+are\s+justiciable\s+(?:while|whereas)\s+(?:dpsp|directive\s+principles|part\s+iv)\s+are\s+non-justiciable/i,
      /articles?\s+12\s*(?:to|-)\s*35\s+(?:and|vs)\s+articles?\s+36\s*(?:to|-)\s*51/i,
      /(?:enforceable\s+in\s+court|writs?\s+under\s+article\s+32)/i,
    ],
    canonicalTerm: 'Fundamental Rights Justiciability & DPSP Comparison',
  },
  {
    conceptKey: 'rbi_monetary_tools',
    subjectId: 'gk',
    patterns: [
      /(?:repo\s+rate|reverse\s+repo\s+rate|crr|slr|cash\s+reserve\s+ratio)/i,
      /(?:controls|regulates)\s+(?:money\s+supply|liquidity|credit|inflation)\s+(?:in\s+the\s+economy)/i,
      /(?:central\s+bank|rbi)\s+(?:lender\s+of\s+last\s+resort)/i,
    ],
    canonicalTerm: 'RBI Monetary Policy & Liquidity Regulation',
  },
  {
    conceptKey: 'himalayan_vs_peninsular_rivers',
    subjectId: 'gk',
    patterns: [
      /(?:himalayan\s+rivers?\s+are\s+perennial|fed\s+by\s+glaciers?)\s+(?:while|whereas)\s+(?:peninsular\s+rivers?\s+are\s+seasonal|rain-fed)/i,
      /(?:indus|ganga|brahmaputra)\s+(?:vs|versus|and)\s+(?:godavari|krishna|kaveri|narmada)/i,
      /(?:youthful\s+v-shaped\s+valleys|mature\s+graded\s+valleys)/i,
    ],
    canonicalTerm: 'Himalayan vs Peninsular River Systems Drainage',
  },
  {
    conceptKey: 'isro_missions',
    subjectId: 'gk',
    patterns: [
      /(?:chandrayaan|mangalyaan|gaganyaan|aditya-l1)/i,
      /(?:lunar\s+exploration|mars\s+orbiter|human\s+spaceflight|solar\s+observation)/i,
      /(?:pslv|gslv|launch\s+vehicle)\s+(?:indigenous\s+cryogenic)/i,
    ],
    canonicalTerm: 'ISRO Space Exploration Missions & Launch Capabilities',
  },
];

/**
 * 4. Technical Contradictions & Misconceptions
 * Flags factual contradictions so students making inverted claims do not earn credit.
 */
export const TECHNICAL_MISCONCEPTIONS: MisconceptionRule[] = [
  {
    conceptKey: 'tcp_connection',
    contradictionPatterns: [
      /tcp\s+(?:is|provides|operates\s+as)\s+(?:a\s+)?connectionless/i,
      /tcp\s+(?:is|does\s+not\s+guarantee|never\s+guarantees)\s+unreliable/i,
      /udp\s+(?:uses|requires)\s+(?:a\s+)?three-way\s+handshake/i,
    ],
    explanation: 'Factually inverted: TCP is connection-oriented and reliable, whereas UDP is connectionless.',
  },
  {
    conceptKey: 'dfa_determinism',
    contradictionPatterns: [
      /dfa\s+(?:allows|has|supports)\s+(?:epsilon|\u03b5|lambda|null)\s+transitions/i,
      /dfa\s+(?:can\s+have|has)\s+multiple\s+next\s+states\s+for\s+(?:a\s+single|the\s+same)\s+symbol/i,
    ],
    explanation: 'Factually inverted: A DFA cannot have epsilon transitions or multiple transitions for the same symbol.',
  },
  {
    conceptKey: 'turing_power',
    contradictionPatterns: [
      /turing\s+machine\s+(?:cannot\s+move|is\s+unable\s+to\s+move)\s+left/i,
      /turing\s+machine\s+has\s+(?:finite|bounded)\s+tape\s+memory/i,
      /halting\s+problem\s+is\s+(?:decidable|solvable)/i,
    ],
    explanation: 'Factually inverted: Turing Machine tape is infinite, can move left and right, and the Halting Problem is undecidable.',
  },
  {
    conceptKey: 'rights_justiciability',
    contradictionPatterns: [
      /fundamental\s+rights\s+are\s+non-justiciable/i,
      /dpsp\s+is\s+(?:directly\s+)?enforceable\s+in\s+(?:the\s+)?court/i,
    ],
    explanation: 'Factually inverted: Fundamental Rights are justiciable (enforceable), whereas DPSPs are non-justiciable directive principles.',
  },
];

/**
 * 5. Helper function to normalize text with abbreviation and symbol expansion
 */
export function expandAbbreviationsInText(text: string): {
  expandedText: string;
  foundAbbreviations: Array<{ short: string; full: string }>;
} {
  let expanded = text;
  const foundAbbreviations: Array<{ short: string; full: string }> = [];

  // Match abbreviations with optional dots, e.g. "T.C.P.", "T.C.P", "TCP"
  ABBREVIATIONS.forEach((entry) => {
    // Generate dot pattern, e.g., T\.C\.P\.?
    const letters = entry.shortForm.split('');
    const dottedPattern = letters.join('\\.') + '\\.?';
    const regex = new RegExp(`\\b(?:${entry.shortForm}|${dottedPattern})\\b`, 'gi');

    if (regex.test(expanded)) {
      foundAbbreviations.push({ short: entry.shortForm, full: entry.fullForm });
      // Replace with both short and full form so all downstream matchers catch it
      expanded = expanded.replace(regex, `${entry.shortForm} (${entry.fullForm})`);
    }
  });

  return { expandedText: expanded, foundAbbreviations };
}
