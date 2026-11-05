// scripts/data/cnData.js
// Computer Networks (CS-401): 15 Topics, 150 MCQs, 10 Part B questions

export const cnTopics = [
  // Unit 1
  {
    id: 'cn-u1-t1',
    subjectId: 'cn',
    unitId: 'cn-u1',
    unitNumber: 1,
    unitTitle: 'Foundations & Physical Layer',
    topicNumber: 1,
    title: 'Network Topologies & System Architectures',
    objectives: [
      'Analyze star, bus, ring, mesh, tree, and hybrid physical and logical network topologies.',
      'Evaluate reliability, redundancy, fault-isolation, and cabling complexity trade-offs.',
      'Differentiate client-server and peer-to-peer (P2P) computing paradigms in enterprise systems.',
    ],
    keywords: ['Topology', 'Mesh', 'Star', 'Ring', 'Bus', 'Point-to-Point', 'Redundancy', 'Fault Tolerance', 'Client-Server', 'P2P'],
    content: {
      beginner: {
        summary: 'A network topology defines how computers, switches, and transmission links are physically arranged and logically connected.',
        theory: 'A network topology is the geometric arrangement of devices (nodes) and connecting lines (links) in a computer network. In a Star topology, all endpoints connect directly to a central switch. In a Bus topology, nodes share a single common backbone cable terminated at both ends. In a Ring topology, each computer is linked to two neighbors forming a closed loop with token passing. In a Mesh topology, every device has dedicated point-to-point connections to every other device, providing maximum fault tolerance at higher cabling cost.',
        definitions: [
          { term: 'Physical Topology', definition: 'The actual physical layout and cable routing of transmission media and networking hardware.' },
          { term: 'Logical Topology', definition: 'The path along which data signals travel from node to node across the network medium.' },
          { term: 'Full Mesh Topology', definition: 'A network design where every node connects directly to every other node via dedicated links, requiring n*(n-1)/2 links for n nodes.' },
        ],
        keyConcepts: [
          { title: 'Centralized vs Distributed Switching', explanation: 'Star networks rely on central intelligence (switch) to filter traffic, while bus networks rely on broadcast collision domains.', example: 'Modern office Ethernet LANs utilize Star topology wired back to rack-mounted Gigabit switches.' },
          { title: 'Mesh Redundancy Formula', explanation: 'In a full mesh of n nodes, the total number of physical duplex links required is given by N = n*(n - 1) / 2.', example: 'Connecting 6 core routers in full mesh requires 6 * 5 / 2 = 15 dedicated links.' },
        ],
        diagram: '+--- STAR ---+        +--- MESH ---+\n|   [Node A] |        | [A]----[B] |\n|    \\  /    |        |  | \\  / |  |\n|   [Switch] |        |  |  \\/  |  |\n|    /  \\    |        |  |  /\\  |  |\n|   [Node B] |        | [C]----[D] |\n+------------+        +------------+',
        applications: ['Enterprise office LANs (Switched Star).', 'Core ISP backbone router interconnections (Full/Partial Mesh).', 'Automotive CAN bus systems for in-vehicle sensor networks.'],
        examImportantPoints: ['Full mesh formula n(n-1)/2 is a standard numerical calculation in exams.', 'Differentiate physical star vs logical bus (e.g. legacy hubs).', 'Client-server centralizes management; P2P distributes bandwidth.'],
        quickRevisionNotes: ['Star: Central switch, easiest fault isolation.', 'Mesh: Highest fault tolerance, n(n-1)/2 links, n-1 ports per node.', 'Bus: Shared coaxial cable, terminators required.', 'Ring: Unidirectional token circulating ring.'],
      },
      intermediate: {
        summary: 'Examination of collision domains, broadcast domains, bandwidth allocation, and client-server vs P2P scalability.',
        theory: 'Network topologies dictate queuing delay, throughput, and fault isolation. Switched star topologies provide microsegmentation where each link forms an isolated collision domain, eliminating CSMA/CD half-duplex collisions. Client-server architectures offer centralized authentication and reliable backups, but introduce single-point-of-failure bottlenecks. Peer-to-peer (P2P) systems distribute workload and bandwidth across peers, making them resilient to flash crowds.',
        definitions: [
          { term: 'Collision Domain', definition: 'A network segment where simultaneous packet transmissions by two or more hosts collide with each other.' },
          { term: 'Broadcast Domain', definition: 'A network region where any node can broadcast a frame that will be received by all other nodes in that segment.' },
          { term: 'Microsegmentation', definition: 'The practice of dividing a network into isolated segments using switches to eliminate shared media collisions.' },
        ],
        keyConcepts: [
          { title: 'Switches vs Hubs in Topologies', explanation: 'A hub creates a single large collision domain in a physical star. A switch creates individual point-to-point collision domains per port.', example: 'A 24-port switch creates 24 distinct collision domains, allowing simultaneous conversations.' },
          { title: 'P2P Decentralized Scalability', explanation: 'In BitTorrent-style P2P, each peer downloading blocks concurrently serves as a seed for other peers, reversing client-server bottlenecking.', example: 'Distributing multi-gigabyte OS images across millions of users.' },
        ],
        diagram: '+-------------------------------------------------------+\n| COLLISION DOMAIN SEPARATION                           |\n| [Host 1] --\\                                          |\n| [Host 2] ---- [Switch (24 Collision Domains)] ------- |\n| [Host 3] --/  [Router (1 Broadcast Domain Boundary)]  |\n+-------------------------------------------------------+',
        applications: ['Three-tier hierarchical campus network design (Core, Distribution, Access).', 'Distributed file distribution architectures.', 'Metropolitan dual-ring telecom networks.'],
        examImportantPoints: ['Switches divide collision domains; routers divide broadcast domains.', 'Explain the single point of failure in a pure star topology.', 'Contrast P2P and Client-Server across scalability, security, and administrative overhead.'],
        quickRevisionNotes: ['Switches create per-port collision domains.', 'Routers block Layer 2 broadcasts.', 'Hierarchical design provides modular growth and predictable latency.'],
      },
      advanced: {
        summary: 'Graph-theoretic topological analysis: bisection bandwidth, network diameter, Leaf-Spine (Clos) fabrics, and Fat-Trees.',
        theory: 'Modern hyperscale datacenters have discarded spanning tree topologies in favor of Leaf-Spine (Clos network) architectures. Graph diameter defines the maximum shortest path between any node pair. Bisection bandwidth defines the minimum cross-sectional capacity when the graph is split into two equal halves. In a 2-tier Leaf-Spine Clos topology, every leaf connects to every spine, delivering deterministic 2-hop East-West latency with Layer 3 ECMP load balancing.',
        definitions: [
          { term: 'Bisection Bandwidth', definition: 'The minimum aggregate bandwidth crossing a boundary that partitions the network into two equal halves.' },
          { term: 'Clos Network', definition: 'A multi-stage non-blocking switching fabric providing non-blocking line-rate cross-sectional capacity.' },
          { term: 'ECMP (Equal-Cost Multi-Path)', definition: 'A routing strategy where packet forwarding to a destination is hashed across multiple equal-cost paths.' },
        ],
        keyConcepts: [
          { title: 'Leaf-Spine 2-Hop Determinism', explanation: 'Inter-rack traffic always travels exactly 2 hops (Leaf to Spine to Leaf), eliminating core oversubscription bottlenecks.', example: 'High-performance AI GPU clusters running all-reduce gradient synchronization.' },
          { title: 'Fat-Tree k-Port Switches', explanation: 'A k-ary Fat-Tree datacenter topology built entirely with identical k-port commodity switches supports k^3 / 4 servers with 100% bisection bandwidth.', example: 'A 48-port switch fat-tree supporting 27,648 hosts without oversubscription.' },
        ],
        diagram: '+-- 2-TIER LEAF-SPINE CLOS FABRIC --+\n|     [Spine 1]     [Spine 2]       |\n|       /   \\         /   \\         |\n|   [Leaf 1] [Leaf 2] [Leaf 3]      |\n|     |  |     |  |     |  |        |\n|    [Servers Servers Servers]      |\n+-----------------------------------+',
        applications: ['Modern cloud datacenters (AWS, Google Cloud, Azure fabrics).', 'AI training clusters using RoCEv2 and InfiniBand.', 'Supercomputer interconnects.'],
        examImportantPoints: ['Calculate network diameter for Bus (n-1), Ring (n/2), Hypercube (k for 2^k nodes), and Leaf-Spine (2 hops).', 'Explain why Spanning Tree Protocol (STP) is disabled in modern datacenters in favor of L3 routing.', 'Define non-blocking bisection bandwidth.'],
        quickRevisionNotes: ['Leaf-Spine: 2-hop East-West traffic, ECMP hashing.', 'Bisection bandwidth measures partition throughput.', 'Fat-Tree maintains uniform cross-sectional bandwidth across tiers.'],
      },
    },
  },

  {
    id: 'cn-u1-t2',
    subjectId: 'cn',
    unitId: 'cn-u1',
    unitNumber: 1,
    unitTitle: 'Foundations & Physical Layer',
    topicNumber: 2,
    title: 'OSI and TCP/IP Reference Models',
    objectives: [
      'Compare the 7 layers of the ISO/OSI model with the 4-layer TCP/IP architectural suite.',
      'Explain peer-to-peer communication, vertical service primitives, and protocol data units (PDU).',
      'Detail header encapsulation and decapsulation processes across each layer of the network stack.',
    ],
    keywords: ['OSI Model', 'TCP/IP', 'Encapsulation', 'Decapsulation', 'PDU', 'Transport', 'Network', 'Data Link', 'Physical'],
    content: {
      beginner: {
        summary: 'The OSI model has 7 conceptual layers, while the practical internet is built on the 4-layer TCP/IP model.',
        theory: 'The ISO/OSI reference model standardizes network communication into 7 distinct layers: Physical (bits), Data Link (frames), Network (packets), Transport (segments), Session (dialogs), Presentation (formatting and encryption), and Application (user interfaces). The TCP/IP model condenses this into 4 operational layers: Network Access, Internet (IP), Transport (TCP/UDP), and Application. As data moves down the stack, each layer wraps higher-layer data with headers (encapsulation); the receiver reverses this by stripping headers (decapsulation).',
        definitions: [
          { term: 'PDU (Protocol Data Unit)', definition: 'The discrete unit of data exchanged by peer entities at a specific layer: Frame, Packet, Segment, Message.' },
          { term: 'Encapsulation', definition: 'The addition of control headers and trailers to payload data as it moves down through the network protocol layers.' },
          { term: 'Decapsulation', definition: 'The sequential removal of protocol headers by receiving layers as incoming data ascends the stack.' },
        ],
        keyConcepts: [
          { title: 'PDU Layer Alignment', explanation: 'Layer 4 uses Segments/Datagrams; Layer 3 uses Packets; Layer 2 uses Frames; Layer 1 uses raw Bits.', example: 'A router reads Layer 3 IP Packet headers; a switch reads Layer 2 MAC Frame headers.' },
          { title: 'Encapsulation Sequence', explanation: 'Application data -> [TCP Header | Data] -> [IP Header | TCP | Data] -> [Ethernet Header | IP | TCP | Data | FCS Trailer].', example: 'Web browser HTTP requests undergo 4 levels of encapsulation before physical transmission.' },
        ],
        diagram: 'OSI (7 Layers)           TCP/IP (4 Layers)\n[7] Application   \\\n[6] Presentation  - -> [Application Layer]\n[5] Session       /\n[4] Transport --------> [Transport Layer  (TCP/UDP)]\n[3] Network ----------> [Internet Layer   (IP/ICMP)]\n[2] Data Link     \\\n[1] Physical      - - > [Network Access   (Ethernet)]',
        applications: ['Network diagnostics and layered protocol troubleshooting.', 'Firewall categorization (L4 packet filter vs L7 application proxy).', 'Standardization of network interface cards and drivers.'],
        examImportantPoints: ['List all 7 OSI layers in exact top-down or bottom-up order.', 'Map OSI layers 5, 6, 7 to the single TCP/IP Application layer.', 'Describe the 5-tuple socket identifier: (Src IP, Src Port, Dst IP, Dst Port, Protocol).'],
        quickRevisionNotes: ['OSI: Theoretical 7-layer framework.', 'TCP/IP: Implemented 4-layer internet protocol suite.', 'PDU names: Bits -> Frames -> Packets -> Segments -> Data.'],
      },
      intermediate: {
        summary: 'Detailed study of service primitives, connectionless vs connection-oriented semantics, and the End-to-End Principle.',
        theory: 'Communication between adjacent layers occurs across Service Access Points (SAPs) using four service primitives: Request, Indication, Response, and Confirm. The core philosophy of TCP/IP is the End-to-End Principle: intermediate routing nodes perform simple, connectionless best-effort packet forwarding without session state. Complex reliability, retransmission, and flow control are handled exclusively by the end hosts in the Transport layer.',
        definitions: [
          { term: 'End-to-End Principle', definition: 'A foundational internet design doctrine stating that reliability and state must reside in endpoints rather than intermediate routers.' },
          { term: 'Service Access Point (SAP)', definition: 'The logical interface where a lower layer provides functional services to the layer above it.' },
          { term: 'Connectionless Service', definition: 'Communication where each data packet carries full destination addressing and is routed independently without prior handshake.' },
        ],
        keyConcepts: [
          { title: 'Why Core Routers Do Not Reorder Packets', explanation: 'Core routers only forward IP packets. Reordering and retransmitting corrupted data is left to TCP at the destination host, keeping routers fast.', example: 'The internet scaled to billions of endpoints because routers remain stateless.' },
          { title: 'Layer Addressing Comparison', explanation: 'Layer 2: 48-bit MAC address. Layer 3: 32-bit (IPv4) or 128-bit (IPv6) address. Layer 4: 16-bit Port number (0 to 65535).', example: 'Operating system socket bindings map IP addresses and port numbers to process IDs.' },
        ],
        diagram: '+-- END-TO-END PRINCIPLE IN THE INTERNET --+\n| [Host A]          [Router]         [Host B] |\n| [App   ]                           [App   ] |\n| [TCP   ] <=======================> [TCP   ] |\n| [IP    ] -------> [IP   ] -------> [IP    ] |\n| [Eth   ] -------> [Eth  ] -------> [Eth   ] |\n+---------------------------------------------+',
        applications: ['Autonomous system BGP border routing.', 'Transport layer state tracking in stateful NAT firewalls.', 'Software-Defined Networking (SDN) control/data plane separation.'],
        examImportantPoints: ['Explain why OSI was commercially superseded by TCP/IP despite being standardized first.', 'Explain why error checking is performed at both Layer 2 (FCS) and Layer 4 (TCP Checksum).', 'Contrast connection-oriented (TCP) with connectionless (UDP) transport.'],
        quickRevisionNotes: ['End-to-End Principle keeps network core simple and edge hosts intelligent.', 'SAPs identify higher layer protocols (e.g. EtherType for L3, Protocol field for L4, Port for L7).', 'Four primitives: Request, Indication, Response, Confirm.'],
      },
      advanced: {
        summary: 'Protocol ossification, QUIC over UDP, HTTP/3, and kernel bypass networking (eBPF, DPDK, XDP).',
        theory: 'Middlebox ossification prevents deployment of new Layer 4 transport protocols because firewalls and NATs drop packets with unfamiliar protocol numbers. To circumvent this, modern protocols like QUIC run entirely atop UDP in user space. QUIC integrates TLS 1.3 encryption and independent stream multiplexing, eliminating TCP Head-of-Line (HoL) blocking. For high-speed networking, Linux kernel bypass frameworks (DPDK, eBPF XDP) process packets directly in userspace or at the NIC driver hook, achieving 100 Gbps line-rate forwarding.',
        definitions: [
          { term: 'Protocol Ossification', definition: 'The inability to deploy new network protocols because legacy middleboxes drop unrecognized headers.' },
          { term: 'QUIC', definition: 'A multiplexed, encrypted transport protocol built over UDP that combines transport and security handshakes and powers HTTP/3.' },
          { term: 'eBPF / XDP', definition: 'Extended Berkeley Packet Filter running sandboxed bytecode at the eXpress Data Path driver hook for ultra-fast packet filtering.' },
        ],
        keyConcepts: [
          { title: 'Eliminating Head-of-Line Blocking', explanation: 'In HTTP/2 over TCP, a single lost packet pauses all concurrent streams. In HTTP/3 over QUIC, packet loss on one stream does not block unrelated streams.', example: 'Mobile users on unstable Wi-Fi experience seamless audio/video streaming.' },
          { title: 'Zero-Copy Packet Processing', explanation: 'Traditional socket read/write calls copy data between kernel and user buffers. DPDK polls the NIC ring buffer directly in userspace.', example: 'High-frequency trading trading servers achieving sub-microsecond packet latency.' },
        ],
        diagram: '+-- QUIC / HTTP/3 STACK ARCHITECTURE --+\n| [ HTTP/3                           ] |\n| [ QUIC (TLS 1.3 + Streams + Cong.) ] |\n| [ UDP                              ] |\n| [ IP                               ] |\n+--------------------------------------+',
        applications: ['Cloudflare and Google CDN edge web servers running HTTP/3.', 'Telecom 5G user plane function (UPF) acceleration via DPDK.', 'DDoS mitigation via in-kernel XDP packet dropping.'],
        examImportantPoints: ['Explain why QUIC was layered on top of UDP rather than raw IP.', 'Contrast TCP 3-way handshake + TLS 1.2 handshake (3 RTTs) with QUIC 0-RTT/1-RTT connection setup.', 'Explain how eBPF eliminates Linux kernel context switches.'],
        quickRevisionNotes: ['HTTP/3 uses QUIC over UDP.', 'QUIC eliminates Head-of-Line blocking and combines transport + TLS handshakes.', 'Kernel bypass (DPDK/XDP) enables line-rate 100G packet processing.'],
      },
    },
  },

  {
    id: 'cn-u1-t3',
    subjectId: 'cn',
    unitId: 'cn-u1',
    unitNumber: 1,
    unitTitle: 'Foundations & Physical Layer',
    topicNumber: 3,
    title: 'Transmission Media & Multiplexing Techniques',
    objectives: [
      'Compare guided media (Twisted Pair, Coaxial, Fiber Optics) and unguided wireless media.',
      'Apply Shannon Capacity Theorem and Nyquist Bit Rate Formula to compute theoretical channel bandwidth.',
      'Analyze multiplexing mechanisms: FDM, TDM (Synchronous vs Statistical), WDM, and CDMA.',
    ],
    keywords: ['Transmission Media', 'Fiber Optics', 'Twisted Pair', 'Nyquist', 'Shannon Theorem', 'Multiplexing', 'FDM', 'TDM', 'WDM', 'CDMA'],
    content: {
      beginner: {
        summary: 'Guided media carry electrical or optical signals through physical cables; multiplexing combines multiple signals over a single transmission channel.',
        theory: 'Physical transmission media are classified into Guided Media (Twisted Pair, Coaxial Cable, Fiber-Optic Cable) and Unguided Media (radio, microwave, infrared). Twisted pair cables twist insulated copper pairs to cancel electromagnetic interference. Fiber-optic cables guide pulses of light using Total Internal Reflection through a silica glass core, offering immense bandwidth immune to electrical noise. Multiplexing techniques combine multiple communication streams over one shared physical medium: Frequency Division Multiplexing (FDM) splits analog bandwidth into frequency bands, while Time Division Multiplexing (TDM) assigns cyclical time slices.',
        definitions: [
          { term: 'Attenuation', definition: 'The reduction in signal strength and power as an electromagnetic wave propagates through a transmission medium.' },
          { term: 'Total Internal Reflection', definition: 'The optical phenomenon where light reflecting inside a core with a higher refractive index than the cladding is completely trapped and guided.' },
          { term: 'Multiplexing', definition: 'The technique of combining multiple analog or digital input streams into one composite signal over a shared medium.' },
        ],
        keyConcepts: [
          { title: 'Why Wires Are Twisted', explanation: 'Twisting ensures both conductors in a pair receive equal external noise. The receiver takes the voltage difference, cancelling out common-mode electromagnetic noise.', example: 'Cat6 UTP cables achieve 10 Gbps up to 55 meters through precise twist rates.' },
          { title: 'Single-Mode vs Multi-Mode Fiber', explanation: 'Single-mode fiber has a tiny 9-micron core carrying one optical light path for long distances; multi-mode has a 50-62.5 micron core for short campus distances.', example: 'Transoceanic submarine cables use Single-Mode fiber with optical amplifiers.' },
        ],
        diagram: 'FDM: Multiple Frequencies simultaneously   TDM: Multiple Users in Time Slots\nFreq ^                                      Freq ^\n     | [Ch 3: Audio]                             | [User 1 | User 2 | User 3 | User 1]\n     | [Ch 2: Video]                             | \n     | [Ch 1: Data ]                             +--------------------------------->\n     +-------------> Time                                                  Time',
        applications: ['Fiber-to-the-Home (FTTH) broadband deployment.', 'Cellular base station backhaul over fiber and microwave.', 'Enterprise structured cabling using Cat6A and Cat7.'],
        examImportantPoints: ['State conditions for Total Internal Reflection: angle of incidence > critical angle, and n_core > n_cladding.', 'Differentiate UTP (Unshielded) and STP (Shielded) twisted pair.', 'Define guard bands in FDM: unused buffer bands that prevent channel overlap.'],
        quickRevisionNotes: ['Fiber optics: Core > Cladding refractive index, zero EMI, highest capacity.', 'Twisted pair: Differential signaling cancels common-mode noise.', 'FDM: Analog frequency splitting with guard bands.', 'TDM: Digital time-slot interleaving.'],
      },
      intermediate: {
        summary: 'Mathematical calculation of channel capacity via Nyquist and Shannon theorems, and comparison of Synchronous vs Statistical TDM.',
        theory: 'Fundamental channel capacity is governed by two core formulas: Nyquist Bit Rate for noiseless channels: BitRate = 2 * B * log2(V), where B is bandwidth in Hz and V is signal voltage levels. Shannon Capacity Theorem for noisy channels: Capacity (C) = B * log2(1 + SNR), where SNR is linear signal-to-noise ratio (SNR_dB = 10 * log10(SNR)). In Synchronous TDM, time slots are pre-allocated cyclically, wasting slots if an input is idle. In Statistical (Asynchronous) TDM, slots are dynamically allocated on demand with header tags, maximizing channel utilization.',
        definitions: [
          { term: 'Signal-to-Noise Ratio (SNR)', definition: 'The ratio of signal power to thermal noise power: SNR = Power_signal / Power_noise.' },
          { term: 'Baud Rate', definition: 'The number of signal symbol changes or transitions per second (Bit Rate = Baud Rate * bits per symbol).' },
          { term: 'Statistical TDM', definition: 'A multiplexing technique that dynamically allocates slots only to active channels with queued data.' },
        ],
        keyConcepts: [
          { title: 'Applying Shannon Capacity', explanation: 'For a 4 kHz channel with SNR = 30 dB: 30 = 10 log10(SNR) => SNR = 1000. C = 4000 * log2(1 + 1000) ≈ 39.88 kbps.', example: 'This Shannon ceiling explains why legacy dial-up modems could not exceed 56 kbps.' },
          { title: 'Modulation Multi-Bit Symbols', explanation: 'A 16-QAM constellation encodes log2(16) = 4 bits per symbol, allowing Bit Rate to be 4 times the Baud Rate.', example: 'Wi-Fi 6 uses 1024-QAM to encode 10 bits per transmission symbol.' },
        ],
        diagram: '+-- STATISTICAL vs SYNCHRONOUS TDM --+\n| Synch: [A1 | B1 | C1 | D1] [A2 | B2 | C2 | D2] (C idle = wasted empty slot)\n| Stat:  [ID:A | Data] [ID:B | Data] [ID:D | Data] (Dynamic slots, zero waste)',
        applications: ['4G/5G physical layer modulation planning (QPSK, 64-QAM, 256-QAM).', 'Telecom T1/E1 digital carrier multiplexing.', 'Cable DOCSIS broadband modulation.'],
        examImportantPoints: ['Solve numerical questions using both Nyquist and Shannon theorems in exams.', 'Always convert SNR from dB to linear ratio before inserting into Shannon formula.', 'Explain why Statistical TDM requires buffering and addressing overhead compared to Synchronous TDM.'],
        quickRevisionNotes: ['Nyquist: Noiseless, 2 * B * log2(V).', 'Shannon: Noisy, B * log2(1 + SNR).', 'SNR(dB) = 10 * log10(Linear_SNR).', 'Statistical TDM eliminates idle slot waste through dynamic packet tagging.'],
      },
      advanced: {
        summary: 'Dense Wavelength Division Multiplexing (DWDM), Code Division Multiple Access (CDMA) orthogonal codes, and optical dispersion.',
        theory: 'Dense Wavelength Division Multiplexing (DWDM) multiplexes up to 160 distinct optical wavelengths onto a single fiber within the C-band (1530-1565 nm) using 50 GHz spacing, delivering multi-terabit speeds amplified by Erbium-Doped Fiber Amplifiers (EDFA). Code Division Multiple Access (CDMA) allows all stations to transmit simultaneously over the entire frequency band by assigning each user an orthogonal Walsh chip code. Because the cross-product of any two distinct orthogonal codes is zero (Ca . Cb = 0), a receiver isolates any user signal by taking the dot product with that user specific code.',
        definitions: [
          { term: 'Orthogonal Walsh Code', definition: 'A binary sequence set whose inner product with itself is 1 and cross-product with any other code is 0.' },
          { term: 'DWDM', definition: 'Optical multiplexing packing dozens of optical wavelengths onto one fiber with narrow channel spacing.' },
          { term: 'EDFA (Erbium-Doped Fiber Amplifier)', definition: 'An all-optical repeater that amplifies multiple laser wavelengths simultaneously without electrical conversion.' },
        ],
        keyConcepts: [
          { title: 'CDMA Orthogonal Decoding Mathematics', explanation: 'If Station A sends bit 1 with code (+1,+1,+1,+1) and B sends bit 0 with (-1,+1,-1,+1), the composite signal S is decoded at receiver A by evaluating (S . Ca) / N = 1.', example: '3G cellular networks and GPS satellite navigation use CDMA orthogonal codes.' },
          { title: 'EDFA Optical Amplification Window', explanation: 'EDFAs operate directly within the 1550 nm minimum-attenuation optical window, boosting hundreds of WDM wavelengths concurrently.', example: 'Trans-Atlantic undersea optical cables traverse thousands of kilometers with submerged EDFAs.' },
        ],
        diagram: '+-- CDMA ORTHOGONAL MULTIPLEXING PRINCIPLE --+\n| User A (Code Ca) * Bit Da                   |\n| User B (Code Cb) * Bit Db                   |\n| Composite Signal S = Ca*Da + Cb*Db          |\n| Receiver A: (S . Ca)/N = Da (Cb vanishes!)  |\n+---------------------------------------------+',
        applications: ['Global subsea fiber-optic telecommunications.', 'GPS satellite navigation signal extraction.', 'Military spread-spectrum jam-resistant radio links.'],
        examImportantPoints: ['Work out a complete CDMA numerical decoding problem using vector dot products.', 'Explain why the 1550 nm wavelength window is preferred for long-haul optical fiber.', 'Contrast DWDM with Coarse WDM (CWDM).'],
        quickRevisionNotes: ['CDMA: Uses orthogonal chip vectors. Cross-product of different codes equals 0.', 'DWDM: Up to 160 wavelengths per fiber, 50 GHz spacing, amplified by EDFAs.', 'Attenuation window: 1550 nm is standard for long-haul optical communication.'],
      },
    },
  },
];
