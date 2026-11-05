import { Topic } from '../../../types';

export const CN_TOPICS: Topic[] = [
  {
    "id": "cn-u1-t1",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "unitNumber": 1,
    "unitTitle": "Foundations & Physical Layer",
    "topicNumber": 1,
    "title": "Network Topologies & System Architectures",
    "objectives": [
      "Analyze star, bus, ring, mesh, tree, and hybrid topologies.",
      "Evaluate reliability, redundancy, fault-isolation, and cabling complexity.",
      "Differentiate client-server and peer-to-peer (P2P) computing paradigms."
    ],
    "keywords": [
      "Topology",
      "Mesh",
      "Star",
      "Ring",
      "Bus",
      "Point-to-Point",
      "Redundancy",
      "Fault Tolerance",
      "Client-Server",
      "P2P"
    ],
    "content": {
      "beginner": {
        "summary": "A network topology defines how computers, switches, and transmission links are physically arranged and logically connected. In a Star topology, all en...",
        "theory": "A network topology defines how computers, switches, and transmission links are physically arranged and logically connected. In a Star topology, all endpoints connect directly to a central switch. In a Bus topology, nodes share a single common backbone cable terminated at both ends. In a Ring topology, each computer is linked to two neighbors forming a closed loop with token passing. In a Mesh topology, every device has dedicated point-to-point connections to every other device, providing maximum fault tolerance at higher cabling cost.",
        "definitions": [
          {
            "term": "Physical Topology",
            "definition": "The actual physical layout and cable routing of transmission media and networking hardware."
          },
          {
            "term": "Logical Topology",
            "definition": "The path along which data signals travel from node to node across the network medium."
          },
          {
            "term": "Full Mesh Topology",
            "definition": "A network design where every node connects directly to every other node via dedicated links, requiring n*(n-1)/2 links for n nodes."
          }
        ],
        "keyConcepts": [
          {
            "title": "Centralized vs Distributed Switching",
            "explanation": "Star networks rely on central intelligence (switch) to filter traffic, while bus networks rely on broadcast collision domains.",
            "example": "Modern office Ethernet LANs utilize Star topology wired back to rack-mounted Gigabit switches."
          },
          {
            "title": "Mesh Redundancy Formula",
            "explanation": "In a full mesh of n nodes, the total number of physical duplex links required is given by N = n*(n - 1) / 2.",
            "example": "Connecting 6 core routers in full mesh requires 6 * 5 / 2 = 15 dedicated links."
          }
        ],
        "diagram": "+--- STAR ---+        +--- MESH ---+\\n|   [Node A] |        | [A]----[B] |\\n|    \\\\  /    |        |  | \\\\  / |  |\\n|   [Switch] |        |  |  \\\\/  |  |\\n|    /  \\\\    |        |  |  /\\\\  |  |\\n|   [Node B] |        | [C]----[D] |\\n+------------+        +------------+",
        "applications": [
          "Enterprise office LANs (Switched Star).",
          "Core ISP backbone router interconnections (Full/Partial Mesh).",
          "Automotive CAN bus systems for in-vehicle sensor networks."
        ],
        "examImportantPoints": [
          "Full mesh formula n(n-1)/2 is a standard numerical calculation in exams.",
          "Differentiate physical star vs logical bus (e.g. legacy hubs).",
          "Client-server centralizes management; P2P distributes bandwidth."
        ],
        "quickRevisionNotes": [
          "Star: Central switch, easiest fault isolation.",
          "Mesh: Highest fault tolerance, n(n-1)/2 links, n-1 ports per node.",
          "Bus: Shared coaxial cable, terminators required.",
          "Ring: Unidirectional token circulating ring."
        ]
      },
      "intermediate": {
        "summary": "Network topologies dictate queuing delay, throughput, and fault isolation. Switched star topologies provide microsegmentation where each link forms an...",
        "theory": "Network topologies dictate queuing delay, throughput, and fault isolation. Switched star topologies provide microsegmentation where each link forms an isolated collision domain, eliminating CSMA/CD half-duplex collisions. Client-server architectures offer centralized authentication and reliable backups, but introduce single-point-of-failure bottlenecks. Peer-to-peer (P2P) systems distribute workload and bandwidth across peers, making them resilient to flash crowds.",
        "definitions": [
          {
            "term": "Physical Topology",
            "definition": "The actual physical layout and cable routing of transmission media and networking hardware."
          },
          {
            "term": "Logical Topology",
            "definition": "The path along which data signals travel from node to node across the network medium."
          },
          {
            "term": "Full Mesh Topology",
            "definition": "A network design where every node connects directly to every other node via dedicated links, requiring n*(n-1)/2 links for n nodes."
          }
        ],
        "keyConcepts": [
          {
            "title": "Centralized vs Distributed Switching",
            "explanation": "Star networks rely on central intelligence (switch) to filter traffic, while bus networks rely on broadcast collision domains.",
            "example": "Modern office Ethernet LANs utilize Star topology wired back to rack-mounted Gigabit switches."
          },
          {
            "title": "Mesh Redundancy Formula",
            "explanation": "In a full mesh of n nodes, the total number of physical duplex links required is given by N = n*(n - 1) / 2.",
            "example": "Connecting 6 core routers in full mesh requires 6 * 5 / 2 = 15 dedicated links."
          }
        ],
        "diagram": "+--- STAR ---+        +--- MESH ---+\\n|   [Node A] |        | [A]----[B] |\\n|    \\\\  /    |        |  | \\\\  / |  |\\n|   [Switch] |        |  |  \\\\/  |  |\\n|    /  \\\\    |        |  |  /\\\\  |  |\\n|   [Node B] |        | [C]----[D] |\\n+------------+        +------------+",
        "applications": [
          "Enterprise office LANs (Switched Star).",
          "Core ISP backbone router interconnections (Full/Partial Mesh).",
          "Automotive CAN bus systems for in-vehicle sensor networks."
        ],
        "examImportantPoints": [
          "Full mesh formula n(n-1)/2 is a standard numerical calculation in exams.",
          "Differentiate physical star vs logical bus (e.g. legacy hubs).",
          "Client-server centralizes management; P2P distributes bandwidth."
        ],
        "quickRevisionNotes": [
          "Star: Central switch, easiest fault isolation.",
          "Mesh: Highest fault tolerance, n(n-1)/2 links, n-1 ports per node.",
          "Bus: Shared coaxial cable, terminators required."
        ]
      },
      "advanced": {
        "summary": "Modern hyperscale datacenters have discarded spanning tree topologies in favor of Leaf-Spine (Clos network) architectures. Graph diameter defines the ...",
        "theory": "Modern hyperscale datacenters have discarded spanning tree topologies in favor of Leaf-Spine (Clos network) architectures. Graph diameter defines the maximum shortest path between any node pair. Bisection bandwidth defines the minimum cross-sectional capacity when the graph is split into two equal halves. In a 2-tier Leaf-Spine Clos topology, every leaf connects to every spine, delivering deterministic 2-hop East-West latency with Layer 3 ECMP load balancing.",
        "definitions": [
          {
            "term": "Physical Topology",
            "definition": "The actual physical layout and cable routing of transmission media and networking hardware."
          },
          {
            "term": "Logical Topology",
            "definition": "The path along which data signals travel from node to node across the network medium."
          },
          {
            "term": "Full Mesh Topology",
            "definition": "A network design where every node connects directly to every other node via dedicated links, requiring n*(n-1)/2 links for n nodes."
          }
        ],
        "keyConcepts": [
          {
            "title": "Centralized vs Distributed Switching",
            "explanation": "Star networks rely on central intelligence (switch) to filter traffic, while bus networks rely on broadcast collision domains.",
            "example": "Modern office Ethernet LANs utilize Star topology wired back to rack-mounted Gigabit switches."
          },
          {
            "title": "Mesh Redundancy Formula",
            "explanation": "In a full mesh of n nodes, the total number of physical duplex links required is given by N = n*(n - 1) / 2.",
            "example": "Connecting 6 core routers in full mesh requires 6 * 5 / 2 = 15 dedicated links."
          }
        ],
        "diagram": "+--- STAR ---+        +--- MESH ---+\\n|   [Node A] |        | [A]----[B] |\\n|    \\\\  /    |        |  | \\\\  / |  |\\n|   [Switch] |        |  |  \\\\/  |  |\\n|    /  \\\\    |        |  |  /\\\\  |  |\\n|   [Node B] |        | [C]----[D] |\\n+------------+        +------------+",
        "applications": [
          "Enterprise office LANs (Switched Star).",
          "Core ISP backbone router interconnections (Full/Partial Mesh).",
          "Automotive CAN bus systems for in-vehicle sensor networks."
        ],
        "examImportantPoints": [
          "Full mesh formula n(n-1)/2 is a standard numerical calculation in exams.",
          "Differentiate physical star vs logical bus (e.g. legacy hubs).",
          "Client-server centralizes management; P2P distributes bandwidth."
        ],
        "quickRevisionNotes": [
          "Mesh: Highest fault tolerance, n(n-1)/2 links, n-1 ports per node.",
          "Bus: Shared coaxial cable, terminators required.",
          "Ring: Unidirectional token circulating ring."
        ]
      }
    }
  },
  {
    "id": "cn-u1-t2",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "unitNumber": 1,
    "unitTitle": "Foundations & Physical Layer",
    "topicNumber": 2,
    "title": "OSI and TCP/IP Reference Models",
    "objectives": [
      "Compare the 7 layers of the ISO/OSI model with the 4-layer TCP/IP architectural suite.",
      "Explain peer-to-peer communication, vertical service primitives, and protocol data units (PDU).",
      "Detail header encapsulation and decapsulation processes across each layer of the network stack."
    ],
    "keywords": [
      "OSI Model",
      "TCP/IP",
      "Encapsulation",
      "Decapsulation",
      "PDU",
      "Transport",
      "Network",
      "Data Link",
      "Physical"
    ],
    "content": {
      "beginner": {
        "summary": "The ISO/OSI reference model standardizes network communication into 7 distinct layers: Physical (bits), Data Link (frames), Network (packets), Transpo...",
        "theory": "The ISO/OSI reference model standardizes network communication into 7 distinct layers: Physical (bits), Data Link (frames), Network (packets), Transport (segments), Session (dialogs), Presentation (formatting and encryption), and Application (user interfaces). The TCP/IP model condenses this into 4 operational layers: Network Access, Internet (IP), Transport (TCP/UDP), and Application. As data moves down the stack, each layer wraps higher-layer data with headers (encapsulation); the receiver reverses this by stripping headers (decapsulation).",
        "definitions": [
          {
            "term": "PDU (Protocol Data Unit)",
            "definition": "The discrete unit of data exchanged by peer entities at a specific layer: Frame, Packet, Segment, Message."
          },
          {
            "term": "Encapsulation",
            "definition": "The addition of control headers and trailers to payload data as it moves down through the network protocol layers."
          },
          {
            "term": "Decapsulation",
            "definition": "The sequential removal of protocol headers by receiving layers as incoming data ascends the stack."
          }
        ],
        "keyConcepts": [
          {
            "title": "PDU Layer Alignment",
            "explanation": "Layer 4 uses Segments/Datagrams; Layer 3 uses Packets; Layer 2 uses Frames; Layer 1 uses raw Bits.",
            "example": "A router reads Layer 3 IP Packet headers; a switch reads Layer 2 MAC Frame headers."
          },
          {
            "title": "Encapsulation Sequence",
            "explanation": "Application data -> [TCP Header | Data] -> [IP Header | TCP | Data] -> [Ethernet Header | IP | TCP | Data | FCS Trailer].",
            "example": "Web browser HTTP requests undergo 4 levels of encapsulation before physical transmission."
          }
        ],
        "diagram": "OSI (7 Layers)           TCP/IP (4 Layers)\\n[7] Application   \\\\\\n[6] Presentation  - -> [Application Layer]\\n[5] Session       /\\n[4] Transport --------> [Transport Layer  (TCP/UDP)]\\n[3] Network ----------> [Internet Layer   (IP/ICMP)]\\n[2] Data Link     \\\\\\n[1] Physical      - - > [Network Access   (Ethernet)]",
        "applications": [
          "Network diagnostics and layered protocol troubleshooting.",
          "Firewall categorization (L4 packet filter vs L7 application proxy).",
          "Standardization of network interface cards and drivers."
        ],
        "examImportantPoints": [
          "List all 7 OSI layers in exact top-down or bottom-up order.",
          "Map OSI layers 5, 6, 7 to the single TCP/IP Application layer.",
          "Describe the 5-tuple socket identifier: (Src IP, Src Port, Dst IP, Dst Port, Protocol)."
        ],
        "quickRevisionNotes": [
          "OSI: Theoretical 7-layer framework.",
          "TCP/IP: Implemented 4-layer internet protocol suite.",
          "PDU names: Bits -> Frames -> Packets -> Segments -> Data."
        ]
      },
      "intermediate": {
        "summary": "Communication between adjacent layers occurs across Service Access Points (SAPs) using four service primitives: Request, Indication, Response, and Con...",
        "theory": "Communication between adjacent layers occurs across Service Access Points (SAPs) using four service primitives: Request, Indication, Response, and Confirm. The core philosophy of TCP/IP is the End-to-End Principle: intermediate routing nodes perform simple, connectionless best-effort packet forwarding without session state. Complex reliability, retransmission, and flow control are handled exclusively by the end hosts in the Transport layer.",
        "definitions": [
          {
            "term": "PDU (Protocol Data Unit)",
            "definition": "The discrete unit of data exchanged by peer entities at a specific layer: Frame, Packet, Segment, Message."
          },
          {
            "term": "Encapsulation",
            "definition": "The addition of control headers and trailers to payload data as it moves down through the network protocol layers."
          },
          {
            "term": "Decapsulation",
            "definition": "The sequential removal of protocol headers by receiving layers as incoming data ascends the stack."
          }
        ],
        "keyConcepts": [
          {
            "title": "PDU Layer Alignment",
            "explanation": "Layer 4 uses Segments/Datagrams; Layer 3 uses Packets; Layer 2 uses Frames; Layer 1 uses raw Bits.",
            "example": "A router reads Layer 3 IP Packet headers; a switch reads Layer 2 MAC Frame headers."
          },
          {
            "title": "Encapsulation Sequence",
            "explanation": "Application data -> [TCP Header | Data] -> [IP Header | TCP | Data] -> [Ethernet Header | IP | TCP | Data | FCS Trailer].",
            "example": "Web browser HTTP requests undergo 4 levels of encapsulation before physical transmission."
          }
        ],
        "diagram": "OSI (7 Layers)           TCP/IP (4 Layers)\\n[7] Application   \\\\\\n[6] Presentation  - -> [Application Layer]\\n[5] Session       /\\n[4] Transport --------> [Transport Layer  (TCP/UDP)]\\n[3] Network ----------> [Internet Layer   (IP/ICMP)]\\n[2] Data Link     \\\\\\n[1] Physical      - - > [Network Access   (Ethernet)]",
        "applications": [
          "Network diagnostics and layered protocol troubleshooting.",
          "Firewall categorization (L4 packet filter vs L7 application proxy).",
          "Standardization of network interface cards and drivers."
        ],
        "examImportantPoints": [
          "List all 7 OSI layers in exact top-down or bottom-up order.",
          "Map OSI layers 5, 6, 7 to the single TCP/IP Application layer.",
          "Describe the 5-tuple socket identifier: (Src IP, Src Port, Dst IP, Dst Port, Protocol)."
        ],
        "quickRevisionNotes": [
          "OSI: Theoretical 7-layer framework.",
          "TCP/IP: Implemented 4-layer internet protocol suite.",
          "PDU names: Bits -> Frames -> Packets -> Segments -> Data."
        ]
      },
      "advanced": {
        "summary": "Middlebox ossification prevents deployment of new Layer 4 transport protocols because firewalls and NATs drop packets with unfamiliar protocol numbers...",
        "theory": "Middlebox ossification prevents deployment of new Layer 4 transport protocols because firewalls and NATs drop packets with unfamiliar protocol numbers. To circumvent this, modern protocols like QUIC run entirely atop UDP in user space. QUIC integrates TLS 1.3 encryption and independent stream multiplexing, eliminating TCP Head-of-Line (HoL) blocking. For high-speed networking, Linux kernel bypass frameworks (DPDK, eBPF XDP) process packets directly in userspace or at the NIC driver hook, achieving 100 Gbps line-rate forwarding.",
        "definitions": [
          {
            "term": "PDU (Protocol Data Unit)",
            "definition": "The discrete unit of data exchanged by peer entities at a specific layer: Frame, Packet, Segment, Message."
          },
          {
            "term": "Encapsulation",
            "definition": "The addition of control headers and trailers to payload data as it moves down through the network protocol layers."
          },
          {
            "term": "Decapsulation",
            "definition": "The sequential removal of protocol headers by receiving layers as incoming data ascends the stack."
          }
        ],
        "keyConcepts": [
          {
            "title": "PDU Layer Alignment",
            "explanation": "Layer 4 uses Segments/Datagrams; Layer 3 uses Packets; Layer 2 uses Frames; Layer 1 uses raw Bits.",
            "example": "A router reads Layer 3 IP Packet headers; a switch reads Layer 2 MAC Frame headers."
          },
          {
            "title": "Encapsulation Sequence",
            "explanation": "Application data -> [TCP Header | Data] -> [IP Header | TCP | Data] -> [Ethernet Header | IP | TCP | Data | FCS Trailer].",
            "example": "Web browser HTTP requests undergo 4 levels of encapsulation before physical transmission."
          }
        ],
        "diagram": "OSI (7 Layers)           TCP/IP (4 Layers)\\n[7] Application   \\\\\\n[6] Presentation  - -> [Application Layer]\\n[5] Session       /\\n[4] Transport --------> [Transport Layer  (TCP/UDP)]\\n[3] Network ----------> [Internet Layer   (IP/ICMP)]\\n[2] Data Link     \\\\\\n[1] Physical      - - > [Network Access   (Ethernet)]",
        "applications": [
          "Network diagnostics and layered protocol troubleshooting.",
          "Firewall categorization (L4 packet filter vs L7 application proxy).",
          "Standardization of network interface cards and drivers."
        ],
        "examImportantPoints": [
          "List all 7 OSI layers in exact top-down or bottom-up order.",
          "Map OSI layers 5, 6, 7 to the single TCP/IP Application layer.",
          "Describe the 5-tuple socket identifier: (Src IP, Src Port, Dst IP, Dst Port, Protocol)."
        ],
        "quickRevisionNotes": [
          "TCP/IP: Implemented 4-layer internet protocol suite.",
          "PDU names: Bits -> Frames -> Packets -> Segments -> Data."
        ]
      }
    }
  },
  {
    "id": "cn-u1-t3",
    "subjectId": "cn",
    "unitId": "cn-u1",
    "unitNumber": 1,
    "unitTitle": "Foundations & Physical Layer",
    "topicNumber": 3,
    "title": "Transmission Media & Multiplexing Techniques",
    "objectives": [
      "Compare guided media (Twisted Pair, Coaxial, Fiber Optics) and unguided wireless media.",
      "Apply Shannon Capacity Theorem and Nyquist Bit Rate Formula to compute theoretical channel bandwidth.",
      "Analyze multiplexing mechanisms: FDM, TDM (Synchronous vs Statistical), WDM, and CDMA."
    ],
    "keywords": [
      "Transmission Media",
      "Fiber Optics",
      "Twisted Pair",
      "Nyquist",
      "Shannon Theorem",
      "Multiplexing",
      "FDM",
      "TDM",
      "WDM",
      "CDMA"
    ],
    "content": {
      "beginner": {
        "summary": "Physical transmission media are classified into Guided Media (Twisted Pair, Coaxial Cable, Fiber-Optic Cable) and Unguided Media (radio, microwave, in...",
        "theory": "Physical transmission media are classified into Guided Media (Twisted Pair, Coaxial Cable, Fiber-Optic Cable) and Unguided Media (radio, microwave, infrared). Twisted pair cables twist insulated copper pairs to cancel electromagnetic interference. Fiber-optic cables guide pulses of light using Total Internal Reflection through a silica glass core, offering immense bandwidth immune to electrical noise. Multiplexing techniques combine multiple communication streams over one shared physical medium: Frequency Division Multiplexing (FDM) splits analog bandwidth into frequency bands, while Time Division Multiplexing (TDM) assigns cyclical time slices.",
        "definitions": [
          {
            "term": "Attenuation",
            "definition": "The reduction in signal strength and power as an electromagnetic wave propagates through a transmission medium."
          },
          {
            "term": "Total Internal Reflection",
            "definition": "The optical phenomenon where light reflecting inside a core with a higher refractive index than the cladding is completely trapped and guided."
          },
          {
            "term": "Multiplexing",
            "definition": "The technique of combining multiple analog or digital input streams into one composite signal over a shared medium."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Wires Are Twisted",
            "explanation": "Twisting ensures both conductors in a pair receive equal external noise. The receiver takes the voltage difference, cancelling out common-mode electromagnetic noise.",
            "example": "Cat6 UTP cables achieve 10 Gbps up to 55 meters through precise twist rates."
          },
          {
            "title": "Single-Mode vs Multi-Mode Fiber",
            "explanation": "Single-mode fiber has a tiny 9-micron core carrying one optical light path for long distances; multi-mode has a 50-62.5 micron core for short campus distances.",
            "example": "Transoceanic submarine cables use Single-Mode fiber with optical amplifiers."
          }
        ],
        "diagram": "FDM: Multiple Frequencies simultaneously   TDM: Multiple Users in Time Slots\\nFreq ^                                      Freq ^\\n     | [Ch 3: Audio]                             | [User 1 | User 2 | User 3 | User 1]\\n     | [Ch 2: Video]                             | \\n     | [Ch 1: Data ]                             +--------------------------------->\\n     +-------------> Time                                                  Time",
        "applications": [
          "Fiber-to-the-Home (FTTH) broadband deployment.",
          "Cellular base station backhaul over fiber and microwave.",
          "Enterprise structured cabling using Cat6A and Cat7."
        ],
        "examImportantPoints": [
          "State conditions for Total Internal Reflection: angle of incidence > critical angle, and n_core > n_cladding.",
          "Differentiate UTP (Unshielded) and STP (Shielded) twisted pair.",
          "Define guard bands in FDM: unused buffer bands that prevent channel overlap."
        ],
        "quickRevisionNotes": [
          "Fiber optics: Core > Cladding refractive index, zero EMI, highest capacity.",
          "Twisted pair: Differential signaling cancels common-mode noise.",
          "FDM: Analog frequency splitting with guard bands.",
          "TDM: Digital time-slot interleaving."
        ]
      },
      "intermediate": {
        "summary": "Fundamental channel capacity is governed by two core formulas: Nyquist Bit Rate for noiseless channels: BitRate = 2 * B * log2(V), where B is bandwidt...",
        "theory": "Fundamental channel capacity is governed by two core formulas: Nyquist Bit Rate for noiseless channels: BitRate = 2 * B * log2(V), where B is bandwidth in Hz and V is signal voltage levels. Shannon Capacity Theorem for noisy channels: Capacity (C) = B * log2(1 + SNR), where SNR is linear signal-to-noise ratio (SNR_dB = 10 * log10(SNR)). In Synchronous TDM, time slots are pre-allocated cyclically, wasting slots if an input is idle. In Statistical (Asynchronous) TDM, slots are dynamically allocated on demand with header tags, maximizing channel utilization.",
        "definitions": [
          {
            "term": "Attenuation",
            "definition": "The reduction in signal strength and power as an electromagnetic wave propagates through a transmission medium."
          },
          {
            "term": "Total Internal Reflection",
            "definition": "The optical phenomenon where light reflecting inside a core with a higher refractive index than the cladding is completely trapped and guided."
          },
          {
            "term": "Multiplexing",
            "definition": "The technique of combining multiple analog or digital input streams into one composite signal over a shared medium."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Wires Are Twisted",
            "explanation": "Twisting ensures both conductors in a pair receive equal external noise. The receiver takes the voltage difference, cancelling out common-mode electromagnetic noise.",
            "example": "Cat6 UTP cables achieve 10 Gbps up to 55 meters through precise twist rates."
          },
          {
            "title": "Single-Mode vs Multi-Mode Fiber",
            "explanation": "Single-mode fiber has a tiny 9-micron core carrying one optical light path for long distances; multi-mode has a 50-62.5 micron core for short campus distances.",
            "example": "Transoceanic submarine cables use Single-Mode fiber with optical amplifiers."
          }
        ],
        "diagram": "FDM: Multiple Frequencies simultaneously   TDM: Multiple Users in Time Slots\\nFreq ^                                      Freq ^\\n     | [Ch 3: Audio]                             | [User 1 | User 2 | User 3 | User 1]\\n     | [Ch 2: Video]                             | \\n     | [Ch 1: Data ]                             +--------------------------------->\\n     +-------------> Time                                                  Time",
        "applications": [
          "Fiber-to-the-Home (FTTH) broadband deployment.",
          "Cellular base station backhaul over fiber and microwave.",
          "Enterprise structured cabling using Cat6A and Cat7."
        ],
        "examImportantPoints": [
          "State conditions for Total Internal Reflection: angle of incidence > critical angle, and n_core > n_cladding.",
          "Differentiate UTP (Unshielded) and STP (Shielded) twisted pair.",
          "Define guard bands in FDM: unused buffer bands that prevent channel overlap."
        ],
        "quickRevisionNotes": [
          "Fiber optics: Core > Cladding refractive index, zero EMI, highest capacity.",
          "Twisted pair: Differential signaling cancels common-mode noise.",
          "FDM: Analog frequency splitting with guard bands."
        ]
      },
      "advanced": {
        "summary": "Dense Wavelength Division Multiplexing (DWDM) multiplexes up to 160 distinct optical wavelengths onto a single fiber within the C-band (1530-1565 nm) ...",
        "theory": "Dense Wavelength Division Multiplexing (DWDM) multiplexes up to 160 distinct optical wavelengths onto a single fiber within the C-band (1530-1565 nm) using 50 GHz spacing, delivering multi-terabit speeds amplified by Erbium-Doped Fiber Amplifiers (EDFA). Code Division Multiple Access (CDMA) allows all stations to transmit simultaneously over the entire frequency band by assigning each user an orthogonal Walsh chip code. Because the cross-product of any two distinct orthogonal codes is zero (Ca . Cb = 0), a receiver isolates any user signal by taking the dot product with that user specific code.",
        "definitions": [
          {
            "term": "Attenuation",
            "definition": "The reduction in signal strength and power as an electromagnetic wave propagates through a transmission medium."
          },
          {
            "term": "Total Internal Reflection",
            "definition": "The optical phenomenon where light reflecting inside a core with a higher refractive index than the cladding is completely trapped and guided."
          },
          {
            "term": "Multiplexing",
            "definition": "The technique of combining multiple analog or digital input streams into one composite signal over a shared medium."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Wires Are Twisted",
            "explanation": "Twisting ensures both conductors in a pair receive equal external noise. The receiver takes the voltage difference, cancelling out common-mode electromagnetic noise.",
            "example": "Cat6 UTP cables achieve 10 Gbps up to 55 meters through precise twist rates."
          },
          {
            "title": "Single-Mode vs Multi-Mode Fiber",
            "explanation": "Single-mode fiber has a tiny 9-micron core carrying one optical light path for long distances; multi-mode has a 50-62.5 micron core for short campus distances.",
            "example": "Transoceanic submarine cables use Single-Mode fiber with optical amplifiers."
          }
        ],
        "diagram": "FDM: Multiple Frequencies simultaneously   TDM: Multiple Users in Time Slots\\nFreq ^                                      Freq ^\\n     | [Ch 3: Audio]                             | [User 1 | User 2 | User 3 | User 1]\\n     | [Ch 2: Video]                             | \\n     | [Ch 1: Data ]                             +--------------------------------->\\n     +-------------> Time                                                  Time",
        "applications": [
          "Fiber-to-the-Home (FTTH) broadband deployment.",
          "Cellular base station backhaul over fiber and microwave.",
          "Enterprise structured cabling using Cat6A and Cat7."
        ],
        "examImportantPoints": [
          "State conditions for Total Internal Reflection: angle of incidence > critical angle, and n_core > n_cladding.",
          "Differentiate UTP (Unshielded) and STP (Shielded) twisted pair.",
          "Define guard bands in FDM: unused buffer bands that prevent channel overlap."
        ],
        "quickRevisionNotes": [
          "Twisted pair: Differential signaling cancels common-mode noise.",
          "FDM: Analog frequency splitting with guard bands.",
          "TDM: Digital time-slot interleaving."
        ]
      }
    }
  },
  {
    "id": "cn-u2-t1",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "unitNumber": 2,
    "unitTitle": "Data Link Layer & Medium Access",
    "topicNumber": 1,
    "title": "Framing, Error Detection & Correction (CRC, Hamming Code)",
    "objectives": [
      "Master framing techniques: character count, byte stuffing, and bit stuffing (HDLC flag 01111110).",
      "Implement Cyclic Redundancy Check (CRC) polynomial binary division and Frame Check Sequence (FCS) calculation.",
      "Design Hamming Code with parity bit placement (formula 2^r >= m + r + 1) and syndrome single-bit error correction."
    ],
    "keywords": [
      "Framing",
      "Bit Stuffing",
      "Byte Stuffing",
      "CRC",
      "Hamming Code",
      "Parity",
      "Checksum",
      "Syndrome",
      "Error Correction"
    ],
    "content": {
      "beginner": {
        "summary": "The Data Link Layer converts the raw bit stream of the Physical layer into discrete, structured units called Frames. Framing methods include byte stuf...",
        "theory": "The Data Link Layer converts the raw bit stream of the Physical layer into discrete, structured units called Frames. Framing methods include byte stuffing (inserting escape characters) and bit stuffing (inserting a 0 after five consecutive 1s to prevent false flag detection). To ensure data integrity, error detection schemes add redundant bits: Single Parity checks detect odd errors, Internet Checksum sums 16-bit words in ones complement arithmetic, while Cyclic Redundancy Check (CRC) uses polynomial modulo-2 arithmetic. For error correction, Hamming Code calculates redundant parity bits placed at powers-of-two bit positions to pinpoint and invert corrupted bits.",
        "definitions": [
          {
            "term": "Bit Stuffing",
            "definition": "The insertion of a 0 bit after any sequence of five consecutive 1 bits in the data payload to avoid imitation of the 01111110 delimiter flag."
          },
          {
            "term": "FCS (Frame Check Sequence)",
            "definition": "The redundant bits appended to a frame by CRC computation for error verification at the receiver."
          },
          {
            "term": "Hamming Distance",
            "definition": "The minimum number of bit inversions required to transform one valid codeword into another valid codeword in a codebook."
          }
        ],
        "keyConcepts": [
          {
            "title": "CRC Polynomial Division",
            "explanation": "Modulo-2 division replaces arithmetic subtraction with bitwise XOR operations, ignoring carries and borrows.",
            "example": "Given data 110100 and generator 1001, appending 3 zeros and XOR dividing produces remainder 011."
          },
          {
            "title": "Hamming Syndrome Error Localization",
            "explanation": "Parity bits at positions 1, 2, 4, 8 check overlapping bit subsets. If syndrome evaluates to binary 0110 (decimal 6), bit position 6 was flipped.",
            "example": "Single-bit error correction flips bit 6 back to its correct state without retransmission."
          }
        ],
        "diagram": "+-- BIT STUFFING & CRC FRAME STRUCTURE --+\\n| Flag: 01111110 | Header | Payload Data (after 5 1s, stuff 0) | FCS (CRC-32) | Flag: 01111110 |\\n| CRC Modulo-2: Message * 2^r XOR Generator Polynomial = Remainder (FCS)             |",
        "applications": [
          "Ethernet frame integrity validation via CRC-32 hardware acceleration in network interface cards.",
          "ECC memory modules and satellite telemetry using Hamming codes.",
          "HDLC and PPP serial data link protocols."
        ],
        "examImportantPoints": [
          "Solve a full CRC numerical problem: given data bitstring and generator polynomial, calculate FCS and verify receiver operation.",
          "Calculate number of redundancy bits required for a given data length using 2^r >= m + r + 1.",
          "State the condition: To detect d errors, minimum Hamming distance must be d+1; to correct d errors, distance must be 2d+1."
        ],
        "quickRevisionNotes": [
          "Bit stuffing: Insert 0 after five consecutive 1s.",
          "CRC uses XOR modulo-2 division, no borrows/carries.",
          "Hamming code positions: 1, 2, 4, 8, 16 (powers of 2).",
          "Syndrome decimal value indicates the corrupted bit location."
        ]
      },
      "intermediate": {
        "summary": "In CRC, the sender appends r zeros to the message of m bits and divides by a predetermined generator polynomial G(x) of degree r using XOR modulo-2 di...",
        "theory": "In CRC, the sender appends r zeros to the message of m bits and divides by a predetermined generator polynomial G(x) of degree r using XOR modulo-2 division. The resulting r-bit remainder is the Frame Check Sequence (FCS). At the receiver, dividing the entire received frame by G(x) yields a zero remainder if no error occurred. Hamming Code satisfies the inequality 2^r >= m + r + 1, where m is data bits and r is parity bits. The receiver computes the syndrome word from parity parity checks; the decimal value of the syndrome directly identifies the 1-based index of the corrupted bit.",
        "definitions": [
          {
            "term": "Bit Stuffing",
            "definition": "The insertion of a 0 bit after any sequence of five consecutive 1 bits in the data payload to avoid imitation of the 01111110 delimiter flag."
          },
          {
            "term": "FCS (Frame Check Sequence)",
            "definition": "The redundant bits appended to a frame by CRC computation for error verification at the receiver."
          },
          {
            "term": "Hamming Distance",
            "definition": "The minimum number of bit inversions required to transform one valid codeword into another valid codeword in a codebook."
          }
        ],
        "keyConcepts": [
          {
            "title": "CRC Polynomial Division",
            "explanation": "Modulo-2 division replaces arithmetic subtraction with bitwise XOR operations, ignoring carries and borrows.",
            "example": "Given data 110100 and generator 1001, appending 3 zeros and XOR dividing produces remainder 011."
          },
          {
            "title": "Hamming Syndrome Error Localization",
            "explanation": "Parity bits at positions 1, 2, 4, 8 check overlapping bit subsets. If syndrome evaluates to binary 0110 (decimal 6), bit position 6 was flipped.",
            "example": "Single-bit error correction flips bit 6 back to its correct state without retransmission."
          }
        ],
        "diagram": "+-- BIT STUFFING & CRC FRAME STRUCTURE --+\\n| Flag: 01111110 | Header | Payload Data (after 5 1s, stuff 0) | FCS (CRC-32) | Flag: 01111110 |\\n| CRC Modulo-2: Message * 2^r XOR Generator Polynomial = Remainder (FCS)             |",
        "applications": [
          "Ethernet frame integrity validation via CRC-32 hardware acceleration in network interface cards.",
          "ECC memory modules and satellite telemetry using Hamming codes.",
          "HDLC and PPP serial data link protocols."
        ],
        "examImportantPoints": [
          "Solve a full CRC numerical problem: given data bitstring and generator polynomial, calculate FCS and verify receiver operation.",
          "Calculate number of redundancy bits required for a given data length using 2^r >= m + r + 1.",
          "State the condition: To detect d errors, minimum Hamming distance must be d+1; to correct d errors, distance must be 2d+1."
        ],
        "quickRevisionNotes": [
          "Bit stuffing: Insert 0 after five consecutive 1s.",
          "CRC uses XOR modulo-2 division, no borrows/carries.",
          "Hamming code positions: 1, 2, 4, 8, 16 (powers of 2)."
        ]
      },
      "advanced": {
        "summary": "Modern high-speed links evaluate error handling through Galois Field GF(2) matrix mathematics and Low-Density Parity-Check (LDPC) codes used in 5G NR ...",
        "theory": "Modern high-speed links evaluate error handling through Galois Field GF(2) matrix mathematics and Low-Density Parity-Check (LDPC) codes used in 5G NR and Wi-Fi 6. Standard CRC polynomials (such as CRC-32 used in IEEE 802.3 Ethernet: x^32 + x^26 + ... + 1) guarantee detection of all single-bit, double-bit errors, odd numbers of bit errors, and burst errors up to 32 bits in length. When bit error rates (BER) exceed threshold on wireless links, Forward Error Correction (FEC) avoids costly retransmission round-trips.",
        "definitions": [
          {
            "term": "Bit Stuffing",
            "definition": "The insertion of a 0 bit after any sequence of five consecutive 1 bits in the data payload to avoid imitation of the 01111110 delimiter flag."
          },
          {
            "term": "FCS (Frame Check Sequence)",
            "definition": "The redundant bits appended to a frame by CRC computation for error verification at the receiver."
          },
          {
            "term": "Hamming Distance",
            "definition": "The minimum number of bit inversions required to transform one valid codeword into another valid codeword in a codebook."
          }
        ],
        "keyConcepts": [
          {
            "title": "CRC Polynomial Division",
            "explanation": "Modulo-2 division replaces arithmetic subtraction with bitwise XOR operations, ignoring carries and borrows.",
            "example": "Given data 110100 and generator 1001, appending 3 zeros and XOR dividing produces remainder 011."
          },
          {
            "title": "Hamming Syndrome Error Localization",
            "explanation": "Parity bits at positions 1, 2, 4, 8 check overlapping bit subsets. If syndrome evaluates to binary 0110 (decimal 6), bit position 6 was flipped.",
            "example": "Single-bit error correction flips bit 6 back to its correct state without retransmission."
          }
        ],
        "diagram": "+-- BIT STUFFING & CRC FRAME STRUCTURE --+\\n| Flag: 01111110 | Header | Payload Data (after 5 1s, stuff 0) | FCS (CRC-32) | Flag: 01111110 |\\n| CRC Modulo-2: Message * 2^r XOR Generator Polynomial = Remainder (FCS)             |",
        "applications": [
          "Ethernet frame integrity validation via CRC-32 hardware acceleration in network interface cards.",
          "ECC memory modules and satellite telemetry using Hamming codes.",
          "HDLC and PPP serial data link protocols."
        ],
        "examImportantPoints": [
          "Solve a full CRC numerical problem: given data bitstring and generator polynomial, calculate FCS and verify receiver operation.",
          "Calculate number of redundancy bits required for a given data length using 2^r >= m + r + 1.",
          "State the condition: To detect d errors, minimum Hamming distance must be d+1; to correct d errors, distance must be 2d+1."
        ],
        "quickRevisionNotes": [
          "CRC uses XOR modulo-2 division, no borrows/carries.",
          "Hamming code positions: 1, 2, 4, 8, 16 (powers of 2).",
          "Syndrome decimal value indicates the corrupted bit location."
        ]
      }
    }
  },
  {
    "id": "cn-u2-t2",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "unitNumber": 2,
    "unitTitle": "Data Link Layer & Medium Access",
    "topicNumber": 2,
    "title": "Flow Control Protocols (Stop-and-Wait, Go-Back-N, Selective Repeat)",
    "objectives": [
      "Analyze Stop-and-Wait protocol efficiency and calculate link utilization based on propagation delay.",
      "Formulate the Sliding Window concept and contrast Go-Back-N with Selective Repeat.",
      "Determine maximum sender and receiver window sizes based on sequence number bit width n."
    ],
    "keywords": [
      "Flow Control",
      "Stop-and-Wait",
      "Go-Back-N",
      "Selective Repeat",
      "Sliding Window",
      "Piggybacking",
      "Bandwidth-Delay Product",
      "Efficiency"
    ],
    "content": {
      "beginner": {
        "summary": "Flow control prevents a fast sender from swamping a slow receiver with data frames. In the simplest Stop-and-Wait protocol, the sender transmits one f...",
        "theory": "Flow control prevents a fast sender from swamping a slow receiver with data frames. In the simplest Stop-and-Wait protocol, the sender transmits one frame and must wait for an Acknowledgement (ACK) before transmitting the next. If an ACK or frame is lost, a retransmission timer fires. Because Stop-and-Wait leaves high-speed, long-distance links idle during the round-trip propagation time, Sliding Window protocols allow multiple frames to be in flight simultaneously. Go-Back-N uses cumulative ACKs; if a frame drops, the receiver discards all subsequent frames, forcing the sender to retransmit the entire window. Selective Repeat accepts out-of-order frames in a buffer and retransmits only the damaged frame.",
        "definitions": [
          {
            "term": "Bandwidth-Delay Product (BDP)",
            "definition": "The volume of data that can be in transit on a network link simultaneously, equal to Bandwidth * Round-Trip Time."
          },
          {
            "term": "Cumulative ACK",
            "definition": "An acknowledgement acknowledging all frames received correctly up to that sequence number (used in Go-Back-N and TCP)."
          },
          {
            "term": "Piggybacking",
            "definition": "The technique of temporarily delaying an outgoing ACK to combine it with an outgoing data frame travelling in the reverse direction."
          }
        ],
        "keyConcepts": [
          {
            "title": "Efficiency Formula Derivation",
            "explanation": "Total cycle time = T_trans + 2*T_prop. Efficiency = T_trans / (T_trans + 2*T_prop) = 1 / (1 + 2a).",
            "example": "On a 1 Gbps satellite link with 250ms RTT, Stop-and-Wait achieves < 0.1% throughput."
          },
          {
            "title": "Window Size Limit Proof",
            "explanation": "In Selective Repeat with 3-bit sequence numbers (0 to 7), setting window > 4 allows an ACK-loss scenario where receiver confuses retransmitted frame 0 with new frame 0.",
            "example": "Hence maximum window size for n-bit sequence numbers is 2^(n-1) = 4."
          }
        ],
        "diagram": "+-- SLIDING WINDOW PROTOCOL WINDOWS --+\\n| Go-Back-N:        Sender Window = 2^n - 1 | Receiver Window = 1 (Cumulative ACK)    |\\n| Selective Repeat: Sender Window = 2^(n-1) | Receiver Window = 2^(n-1) (Individual)  |",
        "applications": [
          "TCP sliding window flow control on global internet connections.",
          "Satellite communication links with massive propagation delays.",
          "High-throughput NVMe over Fabrics storage networks."
        ],
        "examImportantPoints": [
          "Calculate efficiency and throughput for Stop-and-Wait given frame size, transmission speed, distance, and propagation speed.",
          "Explain why the maximum window size in Go-Back-N is 2^n - 1 whereas in Selective Repeat it is 2^(n-1).",
          "Compare Go-Back-N vs Selective Repeat in terms of receiver buffer requirements and channel efficiency under high loss."
        ],
        "quickRevisionNotes": [
          "Stop-and-Wait efficiency = 1 / (1 + 2a).",
          "Go-Back-N: W_s = 2^n - 1, W_r = 1, cumulative ACK.",
          "Selective Repeat: W_s = 2^(n-1), W_r = 2^(n-1), individual ACK.",
          "Piggybacking attaches ACKs to return data."
        ]
      },
      "intermediate": {
        "summary": "Link utilization (efficiency) of Stop-and-Wait is given by: Efficiency = 1 / (1 + 2a), where a = T_prop / T_trans = (Distance / Propagation_Speed) / (...",
        "theory": "Link utilization (efficiency) of Stop-and-Wait is given by: Efficiency = 1 / (1 + 2a), where a = T_prop / T_trans = (Distance / Propagation_Speed) / (Frame_Size / Bandwidth). For high Bandwidth-Delay Product (BDP) links (large a), Stop-and-Wait efficiency drops near zero. In Go-Back-N, sender window size W_s <= 2^n - 1 (for n sequence bits) and receiver window W_r = 1. In Selective Repeat, both sender and receiver maintain sliding windows: W_s <= 2^(n-1) and W_r <= 2^(n-1) to prevent sequence number ambiguity between old duplicate frames and new frames.",
        "definitions": [
          {
            "term": "Bandwidth-Delay Product (BDP)",
            "definition": "The volume of data that can be in transit on a network link simultaneously, equal to Bandwidth * Round-Trip Time."
          },
          {
            "term": "Cumulative ACK",
            "definition": "An acknowledgement acknowledging all frames received correctly up to that sequence number (used in Go-Back-N and TCP)."
          },
          {
            "term": "Piggybacking",
            "definition": "The technique of temporarily delaying an outgoing ACK to combine it with an outgoing data frame travelling in the reverse direction."
          }
        ],
        "keyConcepts": [
          {
            "title": "Efficiency Formula Derivation",
            "explanation": "Total cycle time = T_trans + 2*T_prop. Efficiency = T_trans / (T_trans + 2*T_prop) = 1 / (1 + 2a).",
            "example": "On a 1 Gbps satellite link with 250ms RTT, Stop-and-Wait achieves < 0.1% throughput."
          },
          {
            "title": "Window Size Limit Proof",
            "explanation": "In Selective Repeat with 3-bit sequence numbers (0 to 7), setting window > 4 allows an ACK-loss scenario where receiver confuses retransmitted frame 0 with new frame 0.",
            "example": "Hence maximum window size for n-bit sequence numbers is 2^(n-1) = 4."
          }
        ],
        "diagram": "+-- SLIDING WINDOW PROTOCOL WINDOWS --+\\n| Go-Back-N:        Sender Window = 2^n - 1 | Receiver Window = 1 (Cumulative ACK)    |\\n| Selective Repeat: Sender Window = 2^(n-1) | Receiver Window = 2^(n-1) (Individual)  |",
        "applications": [
          "TCP sliding window flow control on global internet connections.",
          "Satellite communication links with massive propagation delays.",
          "High-throughput NVMe over Fabrics storage networks."
        ],
        "examImportantPoints": [
          "Calculate efficiency and throughput for Stop-and-Wait given frame size, transmission speed, distance, and propagation speed.",
          "Explain why the maximum window size in Go-Back-N is 2^n - 1 whereas in Selective Repeat it is 2^(n-1).",
          "Compare Go-Back-N vs Selective Repeat in terms of receiver buffer requirements and channel efficiency under high loss."
        ],
        "quickRevisionNotes": [
          "Stop-and-Wait efficiency = 1 / (1 + 2a).",
          "Go-Back-N: W_s = 2^n - 1, W_r = 1, cumulative ACK.",
          "Selective Repeat: W_s = 2^(n-1), W_r = 2^(n-1), individual ACK."
        ]
      },
      "advanced": {
        "summary": "When designing reliable protocols over satellite or trans-oceanic 100 Gbps fiber links, Long Fat Networks (LFNs) require substantial sliding windows: ...",
        "theory": "When designing reliable protocols over satellite or trans-oceanic 100 Gbps fiber links, Long Fat Networks (LFNs) require substantial sliding windows: BDP = Bandwidth * RTT. If sequence numbers wrap around before the Maximum Segment Lifetime (MSL) expires, duplicate packets corrupt the data stream (PAWS - Protection Against Wrapped Sequences). Piggybacking merges reverse-path ACKs with forward-path data frames to eliminate separate acknowledgement frame overhead.",
        "definitions": [
          {
            "term": "Bandwidth-Delay Product (BDP)",
            "definition": "The volume of data that can be in transit on a network link simultaneously, equal to Bandwidth * Round-Trip Time."
          },
          {
            "term": "Cumulative ACK",
            "definition": "An acknowledgement acknowledging all frames received correctly up to that sequence number (used in Go-Back-N and TCP)."
          },
          {
            "term": "Piggybacking",
            "definition": "The technique of temporarily delaying an outgoing ACK to combine it with an outgoing data frame travelling in the reverse direction."
          }
        ],
        "keyConcepts": [
          {
            "title": "Efficiency Formula Derivation",
            "explanation": "Total cycle time = T_trans + 2*T_prop. Efficiency = T_trans / (T_trans + 2*T_prop) = 1 / (1 + 2a).",
            "example": "On a 1 Gbps satellite link with 250ms RTT, Stop-and-Wait achieves < 0.1% throughput."
          },
          {
            "title": "Window Size Limit Proof",
            "explanation": "In Selective Repeat with 3-bit sequence numbers (0 to 7), setting window > 4 allows an ACK-loss scenario where receiver confuses retransmitted frame 0 with new frame 0.",
            "example": "Hence maximum window size for n-bit sequence numbers is 2^(n-1) = 4."
          }
        ],
        "diagram": "+-- SLIDING WINDOW PROTOCOL WINDOWS --+\\n| Go-Back-N:        Sender Window = 2^n - 1 | Receiver Window = 1 (Cumulative ACK)    |\\n| Selective Repeat: Sender Window = 2^(n-1) | Receiver Window = 2^(n-1) (Individual)  |",
        "applications": [
          "TCP sliding window flow control on global internet connections.",
          "Satellite communication links with massive propagation delays.",
          "High-throughput NVMe over Fabrics storage networks."
        ],
        "examImportantPoints": [
          "Calculate efficiency and throughput for Stop-and-Wait given frame size, transmission speed, distance, and propagation speed.",
          "Explain why the maximum window size in Go-Back-N is 2^n - 1 whereas in Selective Repeat it is 2^(n-1).",
          "Compare Go-Back-N vs Selective Repeat in terms of receiver buffer requirements and channel efficiency under high loss."
        ],
        "quickRevisionNotes": [
          "Go-Back-N: W_s = 2^n - 1, W_r = 1, cumulative ACK.",
          "Selective Repeat: W_s = 2^(n-1), W_r = 2^(n-1), individual ACK.",
          "Piggybacking attaches ACKs to return data."
        ]
      }
    }
  },
  {
    "id": "cn-u2-t3",
    "subjectId": "cn",
    "unitId": "cn-u2",
    "unitNumber": 2,
    "unitTitle": "Data Link Layer & Medium Access",
    "topicNumber": 3,
    "title": "Medium Access Control Protocols (ALOHA, CSMA/CD, CSMA/CA, Ethernet)",
    "objectives": [
      "Evaluate Pure and Slotted ALOHA throughput equations and vulnerable periods.",
      "Analyze CSMA persistence methods (1-persistent, non-persistent, p-persistent) and collision detection mechanics.",
      "Formulate minimum frame size in CSMA/CD and the Truncated Binary Exponential Backoff algorithm."
    ],
    "keywords": [
      "MAC",
      "ALOHA",
      "Pure ALOHA",
      "Slotted ALOHA",
      "CSMA",
      "CSMA/CD",
      "CSMA/CA",
      "Ethernet",
      "Exponential Backoff",
      "Collision"
    ],
    "content": {
      "beginner": {
        "summary": "Medium Access Control (MAC) sublayer protocols coordinate how multiple nodes share a single broadcast broadcast channel: Pure ALOHA lets stations tran...",
        "theory": "Medium Access Control (MAC) sublayer protocols coordinate how multiple nodes share a single broadcast broadcast channel: Pure ALOHA lets stations transmit immediately whenever they have data; if frames overlap, a collision occurs and frames are destroyed. Slotted ALOHA synchronizes time into discrete slots, doubling maximum throughput. Carrier Sense Multiple Access (CSMA) introduces \"listen before talk\". CSMA/CD (Collision Detection) monitors the channel while transmitting; if a collision occurs, the transmission aborts immediately and stations wait a random backoff time. CSMA/CA (Collision Avoidance) is used in wireless networks where stations cannot listen while transmitting.",
        "definitions": [
          {
            "term": "Vulnerable Period",
            "definition": "The time window during which a transmitted frame is susceptible to colliding with a transmission from another station."
          },
          {
            "term": "Jam Signal",
            "definition": "A 32-to-48 bit pattern transmitted by an Ethernet station upon detecting a collision to ensure all stations detect the collision."
          },
          {
            "term": "Truncated Binary Exponential Backoff",
            "definition": "An algorithm where stations back off a random number of slot times chosen from [0, 2^min(i, 10) - 1] after i consecutive collisions."
          }
        ],
        "keyConcepts": [
          {
            "title": "Minimum Frame Size in Ethernet",
            "explanation": "Standard 10 Mbps Ethernet specifies 64-byte (512-bit) minimum frame size to guarantee collision detection across a 2.5 km coaxial collision domain.",
            "example": "A frame shorter than 64 bytes is padded with zeros by the network interface card."
          },
          {
            "title": "Slotted vs Pure ALOHA Vulnerability",
            "explanation": "In Pure ALOHA, any frame starting between t0 - T_fr and t0 + T_fr collides (2*T_fr). In Slotted ALOHA, transmissions only start at slot boundaries (T_fr).",
            "example": "Synchronizing clocks cuts the vulnerable period in half and doubles channel throughput."
          }
        ],
        "diagram": "+-- CSMA/CD COLLISION DETECTION TIMELINE --+\\n| Time 0: Station A transmits frame        --->  \\n| Time t = T_prop - epsilon: Station B transmits -> COLLISION OCCURS!\\n| Time 2 * T_prop: Collision signal reaches A -> A aborts and sends Jamming Signal\\n| Condition: Frame_Size / Bandwidth >= 2 * (Distance / Prop_Speed)",
        "applications": [
          "Legacy shared coaxial Ethernet (10Base2/10Base5).",
          "Satellite ground station uplink reservation protocols.",
          "Wi-Fi 802.11 Distributed Coordination Function (DCF)."
        ],
        "examImportantPoints": [
          "Derive maximum throughput for Pure ALOHA (18.4%) and Slotted ALOHA (36.8%) using Poisson distribution.",
          "Calculate the minimum frame size for an Ethernet network given cable length, propagation speed, and data rate.",
          "Detail the Truncated Binary Exponential Backoff algorithm with maximum retry limits (abort at 16 collisions)."
        ],
        "quickRevisionNotes": [
          "Pure ALOHA max throughput: 18.4% (G=0.5).",
          "Slotted ALOHA max throughput: 36.8% (G=1.0).",
          "CSMA/CD condition: T_trans >= 2 * T_prop.",
          "Backoff range after i collisions: 0 to 2^i - 1 (cap at i=10, abort at i=16)."
        ]
      },
      "intermediate": {
        "summary": "Mathematical throughput S of ALOHA as a function of offered load G: Pure ALOHA throughput S = G * e^(-2G), reaching a maximum of 1/(2e) ≈ 18.4% at G =...",
        "theory": "Mathematical throughput S of ALOHA as a function of offered load G: Pure ALOHA throughput S = G * e^(-2G), reaching a maximum of 1/(2e) ≈ 18.4% at G = 0.5 (vulnerable period = 2*T_fr). Slotted ALOHA throughput S = G * e^(-G), reaching a maximum of 1/e ≈ 36.8% at G = 1.0 (vulnerable period = T_fr). In CSMA/CD (Ethernet IEEE 802.3), to ensure a station detects collisions before transmission completes, the frame transmission time must be at least twice the propagation delay: T_trans >= 2 * T_prop, meaning Minimum Frame Size = 2 * Propagation_Delay * Bandwidth. Colliding stations execute the Truncated Binary Exponential Backoff algorithm: after i collisions, choose random k from [0, 2^k - 1] slots (capped at k=10).",
        "definitions": [
          {
            "term": "Vulnerable Period",
            "definition": "The time window during which a transmitted frame is susceptible to colliding with a transmission from another station."
          },
          {
            "term": "Jam Signal",
            "definition": "A 32-to-48 bit pattern transmitted by an Ethernet station upon detecting a collision to ensure all stations detect the collision."
          },
          {
            "term": "Truncated Binary Exponential Backoff",
            "definition": "An algorithm where stations back off a random number of slot times chosen from [0, 2^min(i, 10) - 1] after i consecutive collisions."
          }
        ],
        "keyConcepts": [
          {
            "title": "Minimum Frame Size in Ethernet",
            "explanation": "Standard 10 Mbps Ethernet specifies 64-byte (512-bit) minimum frame size to guarantee collision detection across a 2.5 km coaxial collision domain.",
            "example": "A frame shorter than 64 bytes is padded with zeros by the network interface card."
          },
          {
            "title": "Slotted vs Pure ALOHA Vulnerability",
            "explanation": "In Pure ALOHA, any frame starting between t0 - T_fr and t0 + T_fr collides (2*T_fr). In Slotted ALOHA, transmissions only start at slot boundaries (T_fr).",
            "example": "Synchronizing clocks cuts the vulnerable period in half and doubles channel throughput."
          }
        ],
        "diagram": "+-- CSMA/CD COLLISION DETECTION TIMELINE --+\\n| Time 0: Station A transmits frame        --->  \\n| Time t = T_prop - epsilon: Station B transmits -> COLLISION OCCURS!\\n| Time 2 * T_prop: Collision signal reaches A -> A aborts and sends Jamming Signal\\n| Condition: Frame_Size / Bandwidth >= 2 * (Distance / Prop_Speed)",
        "applications": [
          "Legacy shared coaxial Ethernet (10Base2/10Base5).",
          "Satellite ground station uplink reservation protocols.",
          "Wi-Fi 802.11 Distributed Coordination Function (DCF)."
        ],
        "examImportantPoints": [
          "Derive maximum throughput for Pure ALOHA (18.4%) and Slotted ALOHA (36.8%) using Poisson distribution.",
          "Calculate the minimum frame size for an Ethernet network given cable length, propagation speed, and data rate.",
          "Detail the Truncated Binary Exponential Backoff algorithm with maximum retry limits (abort at 16 collisions)."
        ],
        "quickRevisionNotes": [
          "Pure ALOHA max throughput: 18.4% (G=0.5).",
          "Slotted ALOHA max throughput: 36.8% (G=1.0).",
          "CSMA/CD condition: T_trans >= 2 * T_prop."
        ]
      },
      "advanced": {
        "summary": "Ethernet evolution (Gigabit, 10G, 40G, 100G, 400G) replaced shared half-duplex CSMA/CD with switched full-duplex point-to-point links. In full-duplex ...",
        "theory": "Ethernet evolution (Gigabit, 10G, 40G, 100G, 400G) replaced shared half-duplex CSMA/CD with switched full-duplex point-to-point links. In full-duplex switched Ethernet, collisions are structurally impossible, rendering CSMA/CD obsolete in wired networks. In wireless networks (IEEE 802.11 Wi-Fi), CSMA/CA remains mandatory due to the Hidden Terminal Problem (solved by RTS/CTS handshakes) and the physical impossibility of full-duplex radio collision detection on single antenna transceivers.",
        "definitions": [
          {
            "term": "Vulnerable Period",
            "definition": "The time window during which a transmitted frame is susceptible to colliding with a transmission from another station."
          },
          {
            "term": "Jam Signal",
            "definition": "A 32-to-48 bit pattern transmitted by an Ethernet station upon detecting a collision to ensure all stations detect the collision."
          },
          {
            "term": "Truncated Binary Exponential Backoff",
            "definition": "An algorithm where stations back off a random number of slot times chosen from [0, 2^min(i, 10) - 1] after i consecutive collisions."
          }
        ],
        "keyConcepts": [
          {
            "title": "Minimum Frame Size in Ethernet",
            "explanation": "Standard 10 Mbps Ethernet specifies 64-byte (512-bit) minimum frame size to guarantee collision detection across a 2.5 km coaxial collision domain.",
            "example": "A frame shorter than 64 bytes is padded with zeros by the network interface card."
          },
          {
            "title": "Slotted vs Pure ALOHA Vulnerability",
            "explanation": "In Pure ALOHA, any frame starting between t0 - T_fr and t0 + T_fr collides (2*T_fr). In Slotted ALOHA, transmissions only start at slot boundaries (T_fr).",
            "example": "Synchronizing clocks cuts the vulnerable period in half and doubles channel throughput."
          }
        ],
        "diagram": "+-- CSMA/CD COLLISION DETECTION TIMELINE --+\\n| Time 0: Station A transmits frame        --->  \\n| Time t = T_prop - epsilon: Station B transmits -> COLLISION OCCURS!\\n| Time 2 * T_prop: Collision signal reaches A -> A aborts and sends Jamming Signal\\n| Condition: Frame_Size / Bandwidth >= 2 * (Distance / Prop_Speed)",
        "applications": [
          "Legacy shared coaxial Ethernet (10Base2/10Base5).",
          "Satellite ground station uplink reservation protocols.",
          "Wi-Fi 802.11 Distributed Coordination Function (DCF)."
        ],
        "examImportantPoints": [
          "Derive maximum throughput for Pure ALOHA (18.4%) and Slotted ALOHA (36.8%) using Poisson distribution.",
          "Calculate the minimum frame size for an Ethernet network given cable length, propagation speed, and data rate.",
          "Detail the Truncated Binary Exponential Backoff algorithm with maximum retry limits (abort at 16 collisions)."
        ],
        "quickRevisionNotes": [
          "Slotted ALOHA max throughput: 36.8% (G=1.0).",
          "CSMA/CD condition: T_trans >= 2 * T_prop.",
          "Backoff range after i collisions: 0 to 2^i - 1 (cap at i=10, abort at i=16)."
        ]
      }
    }
  },
  {
    "id": "cn-u3-t1",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "unitNumber": 3,
    "unitTitle": "Network Layer & Routing",
    "topicNumber": 1,
    "title": "IPv4 and IPv6 Addressing & Subnetting (CIDR & VLSM)",
    "objectives": [
      "Calculate subnets, broadcast addresses, and host ranges using Classless Inter-Domain Routing (CIDR) and VLSM.",
      "Compare 32-bit IPv4 with 128-bit IPv6 address architecture and transition mechanisms (Dual-Stack, Tunneling).",
      "Analyze IPv4 header fields (TTL, Fragmentation, IHL, TOS) and IPv6 simplified header structure."
    ],
    "keywords": [
      "IPv4",
      "IPv6",
      "CIDR",
      "VLSM",
      "Subnet Mask",
      "Supernetting",
      "Hexadecimal",
      "Dual Stack",
      "NAT"
    ],
    "content": {
      "beginner": {
        "summary": "The Network layer is responsible for host-to-host logical addressing and routing packets across intermediate routers. IPv4 uses 32-bit addresses divid...",
        "theory": "The Network layer is responsible for host-to-host logical addressing and routing packets across intermediate routers. IPv4 uses 32-bit addresses divided into four octets (e.g. 192.168.1.1). Originally grouped into Classes A, B, C, D, and E, Classful addressing led to severe address exhaustion. Classless Inter-Domain Routing (CIDR) replaced this with prefix notation (e.g., /24), where the subnet mask specifies the network prefix length. Variable Length Subnet Masking (VLSM) allows network engineers to subdivide subnets into custom sizes to match exact department host requirements without wasting IP space. IPv6 uses 128-bit addresses written in hexadecimal colon-separated groups, providing 3.4 x 10^38 unique addresses.",
        "definitions": [
          {
            "term": "Subnet Mask",
            "definition": "A 32-bit number where contiguous 1s define the network portion and contiguous 0s identify the host portion of an IP address."
          },
          {
            "term": "VLSM (Variable Length Subnet Masking)",
            "definition": "The technique of assigning different subnet masks to different subnets within the same classful network space."
          },
          {
            "term": "Route Summarization (Supernetting)",
            "definition": "The consolidation of multiple continuous smaller subnet routes into one larger aggregate routing announcement."
          }
        ],
        "keyConcepts": [
          {
            "title": "Step-by-Step Subnet Calculation",
            "explanation": "Given 192.168.1.0/26: Borrow 2 bits (32 - 26 = 6 host bits). Block size = 2^6 = 64. Subnet 0: 192.168.1.0 - 192.168.1.63 (Usable: .1 to .62, Broadcast: .63).",
            "example": "Subnetting partitions a single broadcast domain into isolated IP segments."
          },
          {
            "title": "IPv6 Simplified Header Efficiency",
            "explanation": "IPv6 removed the header checksum because Layer 2 and Layer 4 already verify checksums, speeding up router forwarding processing.",
            "example": "Eliminating hop-by-hop fragmentation prevents CPU exhaustion on high-speed core routers."
          }
        ],
        "diagram": "+-- IPv4 vs IPv6 ADDRESS & HEADER COMPARISON --+\\n| IPv4: 32 bits (4 octets)   -> 192.168.10.1    | Variable Header (20-60 bytes) | TTL, Checksum, Flags |\\n| IPv6: 128 bits (8 hextets) -> 2001:0db8::1    | Fixed Header (40 bytes)       | Hop Limit, Next Hdr  |",
        "applications": [
          "Corporate enterprise IP address allocation planning.",
          "Cloud VPC subnet architecture (AWS VPC, Google Cloud VPC).",
          "Internet Service Provider BGP route aggregation."
        ],
        "examImportantPoints": [
          "Perform a complete VLSM subnet allocation problem for 4 departments with disparate host counts (e.g. 50, 25, 12, 2 hosts).",
          "Identify the Network ID, Broadcast Address, and valid host range for any given CIDR block.",
          "Contrast IPv4 vs IPv6 headers: address length, header size, fragmentation handling, and checksum presence."
        ],
        "quickRevisionNotes": [
          "IPv4 = 32 bits; IPv6 = 128 bits.",
          "Usable hosts per subnet = 2^(32-n) - 2.",
          "IPv4 header: 20 bytes min; IPv6 header: 40 bytes fixed.",
          "IPv6 eliminates in-flight router fragmentation."
        ]
      },
      "intermediate": {
        "summary": "In an IPv4 address with CIDR prefix /n, the first n bits represent the network prefix, and the remaining (32 - n) bits identify the host. The total nu...",
        "theory": "In an IPv4 address with CIDR prefix /n, the first n bits represent the network prefix, and the remaining (32 - n) bits identify the host. The total number of addresses is 2^(32-n), with usable host addresses equal to 2^(32-n) - 2 (subtracting network identifier and directed broadcast address). IPv4 header fields include TTL (Time-To-Live, decremented at each hop to prevent routing loops), Identification/Flags/Fragment Offset for packet fragmentation, and Checksum. In IPv6, the header is streamlined to a fixed 40 bytes: fragmentation is moved to extension headers performed exclusively at the source host, and the TTL field is renamed Hop Limit.",
        "definitions": [
          {
            "term": "Subnet Mask",
            "definition": "A 32-bit number where contiguous 1s define the network portion and contiguous 0s identify the host portion of an IP address."
          },
          {
            "term": "VLSM (Variable Length Subnet Masking)",
            "definition": "The technique of assigning different subnet masks to different subnets within the same classful network space."
          },
          {
            "term": "Route Summarization (Supernetting)",
            "definition": "The consolidation of multiple continuous smaller subnet routes into one larger aggregate routing announcement."
          }
        ],
        "keyConcepts": [
          {
            "title": "Step-by-Step Subnet Calculation",
            "explanation": "Given 192.168.1.0/26: Borrow 2 bits (32 - 26 = 6 host bits). Block size = 2^6 = 64. Subnet 0: 192.168.1.0 - 192.168.1.63 (Usable: .1 to .62, Broadcast: .63).",
            "example": "Subnetting partitions a single broadcast domain into isolated IP segments."
          },
          {
            "title": "IPv6 Simplified Header Efficiency",
            "explanation": "IPv6 removed the header checksum because Layer 2 and Layer 4 already verify checksums, speeding up router forwarding processing.",
            "example": "Eliminating hop-by-hop fragmentation prevents CPU exhaustion on high-speed core routers."
          }
        ],
        "diagram": "+-- IPv4 vs IPv6 ADDRESS & HEADER COMPARISON --+\\n| IPv4: 32 bits (4 octets)   -> 192.168.10.1    | Variable Header (20-60 bytes) | TTL, Checksum, Flags |\\n| IPv6: 128 bits (8 hextets) -> 2001:0db8::1    | Fixed Header (40 bytes)       | Hop Limit, Next Hdr  |",
        "applications": [
          "Corporate enterprise IP address allocation planning.",
          "Cloud VPC subnet architecture (AWS VPC, Google Cloud VPC).",
          "Internet Service Provider BGP route aggregation."
        ],
        "examImportantPoints": [
          "Perform a complete VLSM subnet allocation problem for 4 departments with disparate host counts (e.g. 50, 25, 12, 2 hosts).",
          "Identify the Network ID, Broadcast Address, and valid host range for any given CIDR block.",
          "Contrast IPv4 vs IPv6 headers: address length, header size, fragmentation handling, and checksum presence."
        ],
        "quickRevisionNotes": [
          "IPv4 = 32 bits; IPv6 = 128 bits.",
          "Usable hosts per subnet = 2^(32-n) - 2.",
          "IPv4 header: 20 bytes min; IPv6 header: 40 bytes fixed."
        ]
      },
      "advanced": {
        "summary": "Global IPv4 depletion required mitigation via Network Address Translation (NAT) and CIDR route summarization (supernetting). In supernetting, multiple...",
        "theory": "Global IPv4 depletion required mitigation via Network Address Translation (NAT) and CIDR route summarization (supernetting). In supernetting, multiple contiguous network prefixes sharing identical high-order bits are merged into a single routing table entry, reducing router BGP memory requirements. IPv6 transition mechanisms include: 1. Dual-Stack (running IPv4 and IPv6 protocols simultaneously on routers), 2. Tunneling (encapsulating IPv6 packets inside IPv4 packets across legacy backbones), and 3. Translation (NAT64/DNS64 translating between IPv6 and IPv4 endpoints).",
        "definitions": [
          {
            "term": "Subnet Mask",
            "definition": "A 32-bit number where contiguous 1s define the network portion and contiguous 0s identify the host portion of an IP address."
          },
          {
            "term": "VLSM (Variable Length Subnet Masking)",
            "definition": "The technique of assigning different subnet masks to different subnets within the same classful network space."
          },
          {
            "term": "Route Summarization (Supernetting)",
            "definition": "The consolidation of multiple continuous smaller subnet routes into one larger aggregate routing announcement."
          }
        ],
        "keyConcepts": [
          {
            "title": "Step-by-Step Subnet Calculation",
            "explanation": "Given 192.168.1.0/26: Borrow 2 bits (32 - 26 = 6 host bits). Block size = 2^6 = 64. Subnet 0: 192.168.1.0 - 192.168.1.63 (Usable: .1 to .62, Broadcast: .63).",
            "example": "Subnetting partitions a single broadcast domain into isolated IP segments."
          },
          {
            "title": "IPv6 Simplified Header Efficiency",
            "explanation": "IPv6 removed the header checksum because Layer 2 and Layer 4 already verify checksums, speeding up router forwarding processing.",
            "example": "Eliminating hop-by-hop fragmentation prevents CPU exhaustion on high-speed core routers."
          }
        ],
        "diagram": "+-- IPv4 vs IPv6 ADDRESS & HEADER COMPARISON --+\\n| IPv4: 32 bits (4 octets)   -> 192.168.10.1    | Variable Header (20-60 bytes) | TTL, Checksum, Flags |\\n| IPv6: 128 bits (8 hextets) -> 2001:0db8::1    | Fixed Header (40 bytes)       | Hop Limit, Next Hdr  |",
        "applications": [
          "Corporate enterprise IP address allocation planning.",
          "Cloud VPC subnet architecture (AWS VPC, Google Cloud VPC).",
          "Internet Service Provider BGP route aggregation."
        ],
        "examImportantPoints": [
          "Perform a complete VLSM subnet allocation problem for 4 departments with disparate host counts (e.g. 50, 25, 12, 2 hosts).",
          "Identify the Network ID, Broadcast Address, and valid host range for any given CIDR block.",
          "Contrast IPv4 vs IPv6 headers: address length, header size, fragmentation handling, and checksum presence."
        ],
        "quickRevisionNotes": [
          "Usable hosts per subnet = 2^(32-n) - 2.",
          "IPv4 header: 20 bytes min; IPv6 header: 40 bytes fixed.",
          "IPv6 eliminates in-flight router fragmentation."
        ]
      }
    }
  },
  {
    "id": "cn-u3-t2",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "unitNumber": 3,
    "unitTitle": "Network Layer & Routing",
    "topicNumber": 2,
    "title": "Routing Algorithms (Distance Vector, Link State, OSPF, BGP)",
    "objectives": [
      "Differentiate interior gateway protocols (IGP: RIP, OSPF) from exterior gateway protocols (EGP: BGP).",
      "Analyze Distance Vector routing (Bellman-Ford) and solutions to Count-to-Infinity (Split Horizon, Poison Reverse).",
      "Implement Dijkstra Shortest Path First (SPF) algorithm for Link State routing."
    ],
    "keywords": [
      "Routing",
      "Distance Vector",
      "Link State",
      "Bellman-Ford",
      "Dijkstra",
      "OSPF",
      "BGP",
      "Count to Infinity",
      "Split Horizon"
    ],
    "content": {
      "beginner": {
        "summary": "Routing algorithms determine the optimal mathematical path for packets to travel from source to destination across a network of interconnected routers...",
        "theory": "Routing algorithms determine the optimal mathematical path for packets to travel from source to destination across a network of interconnected routers. Routing protocols are divided into Interior Gateway Protocols (IGP) inside a single autonomous domain and Exterior Gateway Protocols (EGP) between domains. Distance Vector routing uses the Bellman-Ford algorithm: each router shares its entire routing table with immediate neighbors at periodic intervals. Link State routing uses Dijkstra Algorithm: each router floods the status of its directly connected links across the entire network, allowing every router to construct an identical topological map before computing the shortest paths.",
        "definitions": [
          {
            "term": "Autonomous System (AS)",
            "definition": "A collection of routers and subnets under a single technical administration and unified routing policy."
          },
          {
            "term": "Split Horizon",
            "definition": "A routing rule preventing a router from advertising a routing route back out the same physical interface it arrived on."
          },
          {
            "term": "LSA (Link State Advertisement)",
            "definition": "A small packet describing the state and cost of a router interfaces, flooded to all routers in an OSPF area."
          }
        ],
        "keyConcepts": [
          {
            "title": "Dijkstra Algorithm Execution",
            "explanation": "Iteratively selects the unvisited node with minimal cumulative distance, updates neighbor distances, and marks node visited.",
            "example": "OSPF runs Dijkstra to calculate shortest paths to all subnets from its own perspective."
          },
          {
            "title": "Count-to-Infinity Example",
            "explanation": "If link A-B breaks, A tells C cost is infinity. But C previously told A cost was 2 via B; A updates cost to 3, C updates to 4, slowly incrementing until 16 is reached.",
            "example": "Split Horizon stops C from advertising the route back to B, eliminating the loop."
          }
        ],
        "diagram": "+-- DISTANCE VECTOR vs LINK STATE ROUTING --+\\n| Distance Vector (RIP): Tell neighbors about the entire world (periodic tables)\\n| Link State (OSPF):     Tell the entire world about immediate neighbors (LSAs flooded)\\n| Path Vector (BGP):     Exchange AS-PATH vector between autonomous systems",
        "applications": [
          "Global internet core routing using BGP between Tier-1 transit providers.",
          "Campus and enterprise multi-vlan routing using OSPF Area 0.",
          "Data center fabric routing using eBGP between leaf and spine switches."
        ],
        "examImportantPoints": [
          "Trace Dijkstra algorithm step-by-step given an adjacency matrix or network graph.",
          "Explain the Count-to-Infinity problem in Distance Vector routing and how Split Horizon with Poison Reverse resolves it.",
          "Compare Distance Vector, Link State, and Path Vector routing across 4 metrics: convergence speed, overhead, metric, and scalability."
        ],
        "quickRevisionNotes": [
          "Distance Vector: Bellman-Ford, metric hops (max 15 for RIP), count-to-infinity.",
          "Link State: Dijkstra SPF, metric cost/bandwidth, fast convergence.",
          "BGP: Path Vector, AS-Path attribute prevents loops.",
          "Split Horizon: Do not advertise routes back to sender."
        ]
      },
      "intermediate": {
        "summary": "In Distance Vector routing (e.g., RIP), routers only know neighbor distances, making them prone to the Count-to-Infinity problem when a link fails: ro...",
        "theory": "In Distance Vector routing (e.g., RIP), routers only know neighbor distances, making them prone to the Count-to-Infinity problem when a link fails: routers pass stale positive distance estimates in a loop until metrics reach infinity (RIP hop count 16). Mitigations include Split Horizon (never advertise a route back to the interface from which it was learned) and Poison Reverse (advertise the failed route back with an infinite metric). In Link State routing (e.g., OSPF), routers generate Link State Advertisements (LSAs), synchronize Link State Databases (LSDB), and execute Dijkstra SPF to form a loop-free Shortest Path Tree. BGP (Border Gateway Protocol) is a Path Vector protocol that prevents inter-domain loops by inspecting the AS-Path attribute list.",
        "definitions": [
          {
            "term": "Autonomous System (AS)",
            "definition": "A collection of routers and subnets under a single technical administration and unified routing policy."
          },
          {
            "term": "Split Horizon",
            "definition": "A routing rule preventing a router from advertising a routing route back out the same physical interface it arrived on."
          },
          {
            "term": "LSA (Link State Advertisement)",
            "definition": "A small packet describing the state and cost of a router interfaces, flooded to all routers in an OSPF area."
          }
        ],
        "keyConcepts": [
          {
            "title": "Dijkstra Algorithm Execution",
            "explanation": "Iteratively selects the unvisited node with minimal cumulative distance, updates neighbor distances, and marks node visited.",
            "example": "OSPF runs Dijkstra to calculate shortest paths to all subnets from its own perspective."
          },
          {
            "title": "Count-to-Infinity Example",
            "explanation": "If link A-B breaks, A tells C cost is infinity. But C previously told A cost was 2 via B; A updates cost to 3, C updates to 4, slowly incrementing until 16 is reached.",
            "example": "Split Horizon stops C from advertising the route back to B, eliminating the loop."
          }
        ],
        "diagram": "+-- DISTANCE VECTOR vs LINK STATE ROUTING --+\\n| Distance Vector (RIP): Tell neighbors about the entire world (periodic tables)\\n| Link State (OSPF):     Tell the entire world about immediate neighbors (LSAs flooded)\\n| Path Vector (BGP):     Exchange AS-PATH vector between autonomous systems",
        "applications": [
          "Global internet core routing using BGP between Tier-1 transit providers.",
          "Campus and enterprise multi-vlan routing using OSPF Area 0.",
          "Data center fabric routing using eBGP between leaf and spine switches."
        ],
        "examImportantPoints": [
          "Trace Dijkstra algorithm step-by-step given an adjacency matrix or network graph.",
          "Explain the Count-to-Infinity problem in Distance Vector routing and how Split Horizon with Poison Reverse resolves it.",
          "Compare Distance Vector, Link State, and Path Vector routing across 4 metrics: convergence speed, overhead, metric, and scalability."
        ],
        "quickRevisionNotes": [
          "Distance Vector: Bellman-Ford, metric hops (max 15 for RIP), count-to-infinity.",
          "Link State: Dijkstra SPF, metric cost/bandwidth, fast convergence.",
          "BGP: Path Vector, AS-Path attribute prevents loops."
        ]
      },
      "advanced": {
        "summary": "Enterprise and cloud networks structure OSPF into hierarchical Areas (Backbone Area 0, Area Border Routers ABR, Autonomous System Boundary Routers ASB...",
        "theory": "Enterprise and cloud networks structure OSPF into hierarchical Areas (Backbone Area 0, Area Border Routers ABR, Autonomous System Boundary Routers ASBR) to localize LSA flooding and constrain SPF recalculation overhead. In the global internet, BGP-4 governs inter-AS routing using policy-based routing metrics (LOCAL_PREF, AS_PATH length, Origin, MED) rather than pure link cost. BGP route reflectors and confederations resolve full-mesh internal BGP (iBGP) scaling limitations in large transit carrier networks.",
        "definitions": [
          {
            "term": "Autonomous System (AS)",
            "definition": "A collection of routers and subnets under a single technical administration and unified routing policy."
          },
          {
            "term": "Split Horizon",
            "definition": "A routing rule preventing a router from advertising a routing route back out the same physical interface it arrived on."
          },
          {
            "term": "LSA (Link State Advertisement)",
            "definition": "A small packet describing the state and cost of a router interfaces, flooded to all routers in an OSPF area."
          }
        ],
        "keyConcepts": [
          {
            "title": "Dijkstra Algorithm Execution",
            "explanation": "Iteratively selects the unvisited node with minimal cumulative distance, updates neighbor distances, and marks node visited.",
            "example": "OSPF runs Dijkstra to calculate shortest paths to all subnets from its own perspective."
          },
          {
            "title": "Count-to-Infinity Example",
            "explanation": "If link A-B breaks, A tells C cost is infinity. But C previously told A cost was 2 via B; A updates cost to 3, C updates to 4, slowly incrementing until 16 is reached.",
            "example": "Split Horizon stops C from advertising the route back to B, eliminating the loop."
          }
        ],
        "diagram": "+-- DISTANCE VECTOR vs LINK STATE ROUTING --+\\n| Distance Vector (RIP): Tell neighbors about the entire world (periodic tables)\\n| Link State (OSPF):     Tell the entire world about immediate neighbors (LSAs flooded)\\n| Path Vector (BGP):     Exchange AS-PATH vector between autonomous systems",
        "applications": [
          "Global internet core routing using BGP between Tier-1 transit providers.",
          "Campus and enterprise multi-vlan routing using OSPF Area 0.",
          "Data center fabric routing using eBGP between leaf and spine switches."
        ],
        "examImportantPoints": [
          "Trace Dijkstra algorithm step-by-step given an adjacency matrix or network graph.",
          "Explain the Count-to-Infinity problem in Distance Vector routing and how Split Horizon with Poison Reverse resolves it.",
          "Compare Distance Vector, Link State, and Path Vector routing across 4 metrics: convergence speed, overhead, metric, and scalability."
        ],
        "quickRevisionNotes": [
          "Link State: Dijkstra SPF, metric cost/bandwidth, fast convergence.",
          "BGP: Path Vector, AS-Path attribute prevents loops.",
          "Split Horizon: Do not advertise routes back to sender."
        ]
      }
    }
  },
  {
    "id": "cn-u3-t3",
    "subjectId": "cn",
    "unitId": "cn-u3",
    "unitNumber": 3,
    "unitTitle": "Network Layer & Routing",
    "topicNumber": 3,
    "title": "Congestion Control, Traffic Shaping & Supporting Protocols (ARP, ICMP)",
    "objectives": [
      "Differentiate network layer open-loop vs closed-loop congestion control mechanisms.",
      "Implement Leaky Bucket and Token Bucket traffic shaping and policing algorithms.",
      "Detail Address Resolution Protocol (ARP) cache operations and Internet Control Message Protocol (ICMP) error reporting."
    ],
    "keywords": [
      "Congestion Control",
      "Traffic Shaping",
      "Leaky Bucket",
      "Token Bucket",
      "ARP",
      "ICMP",
      "Ping",
      "Traceroute",
      "Choke Packet"
    ],
    "content": {
      "beginner": {
        "summary": "When incoming network traffic exceeds the forwarding capacity of intermediate routers, buffer queues overflow and packets are dropped, creating networ...",
        "theory": "When incoming network traffic exceeds the forwarding capacity of intermediate routers, buffer queues overflow and packets are dropped, creating network congestion. Congestion control techniques are divided into Open-Loop (preventative policies before congestion occurs) and Closed-Loop (feedback-based corrective actions when congestion is detected, like Choke Packets). Traffic shaping regulates the rate and burstiness of packet transmission: Leaky Bucket produces a strict constant output rate, while Token Bucket allows controlled bursts of data up to token capacity. Supporting network protocols include ARP (which maps 32-bit IP addresses to 48-bit MAC hardware addresses) and ICMP (which communicates diagnostic errors and powers Ping and Traceroute).",
        "definitions": [
          {
            "term": "Token Bucket",
            "definition": "A traffic shaping algorithm that accumulates transmission tokens at a steady rate, allowing bursty transmissions when tokens are plentiful."
          },
          {
            "term": "ARP (Address Resolution Protocol)",
            "definition": "A protocol that resolves an unknown Layer 2 physical MAC address from a known Layer 3 logical IP address."
          },
          {
            "term": "ICMP (Internet Control Message Protocol)",
            "definition": "A network layer protocol used by routers and hosts to communicate network errors, operational issues, and diagnostic queries."
          }
        ],
        "keyConcepts": [
          {
            "title": "Leaky vs Token Bucket Trade-Off",
            "explanation": "Leaky Bucket enforces rigid traffic pacing (poor for bursty web browsing); Token Bucket allows short bursts while enforcing long-term average bandwidth.",
            "example": "Cloud API gateways and carrier routers combine Token Bucket with Leaky Bucket to meter rate limits."
          },
          {
            "title": "Traceroute ICMP Hop Discovery",
            "explanation": "Traceroute sends UDP/ICMP packets starting with TTL=1. First router decrements TTL to 0, drops packet, and sends ICMP Type 11 (Time Exceeded), revealing its IP.",
            "example": "Incrementing TTL reveals each sequential hop across the global path."
          }
        ],
        "diagram": "+-- LEAKY BUCKET vs TOKEN BUCKET --+\\n| Leaky Bucket: Bursty Input -> [Buffer] -> Strict Constant Output Rate (Smooth)\\n| Token Bucket: Tokens arrive at rate r -> [Tokens bucket capacity b] -> Allows Bursts!\\n| ARP Operation: IP -> Broadcast Layer 2 (\"Who has 192.168.1.1?\") -> Unicast MAC Reply",
        "applications": [
          "Internet Service Provider bandwidth throttling and QoS traffic policing.",
          "Traceroute and Ping network diagnostic troubleshooting tools.",
          "DDoS volumetric traffic mitigation via Token Bucket rate limiters."
        ],
        "examImportantPoints": [
          "Calculate maximum burst duration in a Token Bucket system given token arrival rate r, bucket capacity b, and maximum line transmission rate M.",
          "Describe ARP request and reply packet formats and why requests are broadcast while replies are unicast.",
          "Explain how Traceroute uses the TTL field in IP headers and ICMP Time Exceeded messages to discover router hops."
        ],
        "quickRevisionNotes": [
          "Leaky Bucket: Constant output rate, discards excess burst.",
          "Token Bucket: Allows bursts up to bucket capacity b, steady rate r.",
          "ARP: Maps IP to MAC (broadcast request, unicast reply).",
          "ICMP: Diagnostic errors (Ping = Echo 8/0, Traceroute = TTL expired 11)."
        ]
      },
      "intermediate": {
        "summary": "Leaky Bucket algorithms buffer incoming bursts in a finite queue and leak packets out at a constant rate, discarding excess overflow packets. Token Bu...",
        "theory": "Leaky Bucket algorithms buffer incoming bursts in a finite queue and leak packets out at a constant rate, discarding excess overflow packets. Token Bucket generates tokens at a constant rate r tokens/sec into a bucket of capacity b tokens. A packet of m bytes can transmit immediately if m tokens are available; if tokens are empty, packets queue or are dropped. Hence, Token Bucket accommodates bursty traffic while guaranteeing average rate r and maximum burst size b. Address Resolution Protocol (ARP) broadcasts an ARP Request frame (\"Who has IP X? Tell MAC Y\") and receives a unicast ARP Reply. ICMP messages include Echo Request/Reply (Ping), Destination Unreachable, and Time Exceeded (used by Traceroute by sending packets with TTL=1, 2, 3...).",
        "definitions": [
          {
            "term": "Token Bucket",
            "definition": "A traffic shaping algorithm that accumulates transmission tokens at a steady rate, allowing bursty transmissions when tokens are plentiful."
          },
          {
            "term": "ARP (Address Resolution Protocol)",
            "definition": "A protocol that resolves an unknown Layer 2 physical MAC address from a known Layer 3 logical IP address."
          },
          {
            "term": "ICMP (Internet Control Message Protocol)",
            "definition": "A network layer protocol used by routers and hosts to communicate network errors, operational issues, and diagnostic queries."
          }
        ],
        "keyConcepts": [
          {
            "title": "Leaky vs Token Bucket Trade-Off",
            "explanation": "Leaky Bucket enforces rigid traffic pacing (poor for bursty web browsing); Token Bucket allows short bursts while enforcing long-term average bandwidth.",
            "example": "Cloud API gateways and carrier routers combine Token Bucket with Leaky Bucket to meter rate limits."
          },
          {
            "title": "Traceroute ICMP Hop Discovery",
            "explanation": "Traceroute sends UDP/ICMP packets starting with TTL=1. First router decrements TTL to 0, drops packet, and sends ICMP Type 11 (Time Exceeded), revealing its IP.",
            "example": "Incrementing TTL reveals each sequential hop across the global path."
          }
        ],
        "diagram": "+-- LEAKY BUCKET vs TOKEN BUCKET --+\\n| Leaky Bucket: Bursty Input -> [Buffer] -> Strict Constant Output Rate (Smooth)\\n| Token Bucket: Tokens arrive at rate r -> [Tokens bucket capacity b] -> Allows Bursts!\\n| ARP Operation: IP -> Broadcast Layer 2 (\"Who has 192.168.1.1?\") -> Unicast MAC Reply",
        "applications": [
          "Internet Service Provider bandwidth throttling and QoS traffic policing.",
          "Traceroute and Ping network diagnostic troubleshooting tools.",
          "DDoS volumetric traffic mitigation via Token Bucket rate limiters."
        ],
        "examImportantPoints": [
          "Calculate maximum burst duration in a Token Bucket system given token arrival rate r, bucket capacity b, and maximum line transmission rate M.",
          "Describe ARP request and reply packet formats and why requests are broadcast while replies are unicast.",
          "Explain how Traceroute uses the TTL field in IP headers and ICMP Time Exceeded messages to discover router hops."
        ],
        "quickRevisionNotes": [
          "Leaky Bucket: Constant output rate, discards excess burst.",
          "Token Bucket: Allows bursts up to bucket capacity b, steady rate r.",
          "ARP: Maps IP to MAC (broadcast request, unicast reply)."
        ]
      },
      "advanced": {
        "summary": "Random Early Detection (RED) in core routers monitors average queue length; when buffer thresholds are crossed, RED randomly drops or marks packets us...",
        "theory": "Random Early Detection (RED) in core routers monitors average queue length; when buffer thresholds are crossed, RED randomly drops or marks packets using Explicit Congestion Notification (ECN in IP TOS header) before buffers completely overflow, preventing global TCP synchronization. ARP Cache Poisoning (Spoofing) is an enterprise man-in-the-middle vulnerability mitigated by Dynamic ARP Inspection (DAI) on managed switches.",
        "definitions": [
          {
            "term": "Token Bucket",
            "definition": "A traffic shaping algorithm that accumulates transmission tokens at a steady rate, allowing bursty transmissions when tokens are plentiful."
          },
          {
            "term": "ARP (Address Resolution Protocol)",
            "definition": "A protocol that resolves an unknown Layer 2 physical MAC address from a known Layer 3 logical IP address."
          },
          {
            "term": "ICMP (Internet Control Message Protocol)",
            "definition": "A network layer protocol used by routers and hosts to communicate network errors, operational issues, and diagnostic queries."
          }
        ],
        "keyConcepts": [
          {
            "title": "Leaky vs Token Bucket Trade-Off",
            "explanation": "Leaky Bucket enforces rigid traffic pacing (poor for bursty web browsing); Token Bucket allows short bursts while enforcing long-term average bandwidth.",
            "example": "Cloud API gateways and carrier routers combine Token Bucket with Leaky Bucket to meter rate limits."
          },
          {
            "title": "Traceroute ICMP Hop Discovery",
            "explanation": "Traceroute sends UDP/ICMP packets starting with TTL=1. First router decrements TTL to 0, drops packet, and sends ICMP Type 11 (Time Exceeded), revealing its IP.",
            "example": "Incrementing TTL reveals each sequential hop across the global path."
          }
        ],
        "diagram": "+-- LEAKY BUCKET vs TOKEN BUCKET --+\\n| Leaky Bucket: Bursty Input -> [Buffer] -> Strict Constant Output Rate (Smooth)\\n| Token Bucket: Tokens arrive at rate r -> [Tokens bucket capacity b] -> Allows Bursts!\\n| ARP Operation: IP -> Broadcast Layer 2 (\"Who has 192.168.1.1?\") -> Unicast MAC Reply",
        "applications": [
          "Internet Service Provider bandwidth throttling and QoS traffic policing.",
          "Traceroute and Ping network diagnostic troubleshooting tools.",
          "DDoS volumetric traffic mitigation via Token Bucket rate limiters."
        ],
        "examImportantPoints": [
          "Calculate maximum burst duration in a Token Bucket system given token arrival rate r, bucket capacity b, and maximum line transmission rate M.",
          "Describe ARP request and reply packet formats and why requests are broadcast while replies are unicast.",
          "Explain how Traceroute uses the TTL field in IP headers and ICMP Time Exceeded messages to discover router hops."
        ],
        "quickRevisionNotes": [
          "Token Bucket: Allows bursts up to bucket capacity b, steady rate r.",
          "ARP: Maps IP to MAC (broadcast request, unicast reply).",
          "ICMP: Diagnostic errors (Ping = Echo 8/0, Traceroute = TTL expired 11)."
        ]
      }
    }
  },
  {
    "id": "cn-u4-t1",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "unitNumber": 4,
    "unitTitle": "Transport Layer & Congestion Control",
    "topicNumber": 1,
    "title": "Transport Layer Services, Multiplexing & Port Addressing (TCP vs UDP)",
    "objectives": [
      "Analyze transport layer process-to-process delivery, port numbers, and socket abstractions.",
      "Compare Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) headers, overhead, and service models.",
      "Evaluate transport multiplexing and demultiplexing across concurrent application streams."
    ],
    "keywords": [
      "Transport Layer",
      "TCP",
      "UDP",
      "Port Numbers",
      "Multiplexing",
      "Demultiplexing",
      "Sockets",
      "Connectionless",
      "Reliability"
    ],
    "content": {
      "beginner": {
        "summary": "While the Network layer delivers packets between host machines, the Transport layer provides end-to-end communication between specific software proces...",
        "theory": "While the Network layer delivers packets between host machines, the Transport layer provides end-to-end communication between specific software processes running on those hosts. Processes are addressed using 16-bit Port numbers (ranging from 0 to 65535), categorized into Well-Known Ports (0-1023, like HTTP 80, HTTPS 443, DNS 53), Registered Ports (1024-49151), and Dynamic/Private Ports (49152-65535). The two primary transport protocols are: 1. TCP (Transmission Control Protocol): Connection-oriented, highly reliable, ordered, byte-stream delivery with flow and congestion control. 2. UDP (User Datagram Protocol): Connectionless, lightweight, unreliable, unordered datagram delivery with minimal 8-byte header overhead.",
        "definitions": [
          {
            "term": "Port Number",
            "definition": "A 16-bit integer identifying a specific application endpoint or service on an IP host."
          },
          {
            "term": "Socket",
            "definition": "The unique software communication endpoint defined by the combination of an IP address and a Port number."
          },
          {
            "term": "Demultiplexing",
            "definition": "The process of delivering the received transport layer segment payload to the correct application socket based on header port addresses."
          }
        ],
        "keyConcepts": [
          {
            "title": "TCP Connection-Oriented 4-Tuple Demux",
            "explanation": "Two different clients connecting to web server port 80 are separated into distinct sockets because their source IP or source port differs.",
            "example": "UDP demultiplexing relies only on destination IP and destination port, routing multiple senders into the same socket."
          },
          {
            "title": "Why Real-Time Audio Uses UDP",
            "explanation": "A dropped audio frame retransmitted 200ms later arrives too late for speech playback, causing stutter. Dropping it and playing current audio is superior.",
            "example": "VoIP protocols (RTP over UDP) favor timely delivery over complete recovery."
          }
        ],
        "diagram": "+-- TCP HEADER (20-60 Bytes) vs UDP HEADER (8 Bytes Fixed) --+\\n| UDP: [Src Port (16b) | Dst Port (16b) | Length (16b) | Checksum (16b)]\\n| TCP: [Src Port (16b) | Dst Port (16b)]\\n|      [Sequence Number (32 bits)       ]\\n|      [Acknowledgment Number (32 bits) ]\\n|      [Offset | Flags: U|A|P|R|S|F | Window Size (16b)]\\n|      [Checksum (16b) | Urgent Pointer (16b)]",
        "applications": [
          "Domain Name System (DNS) queries over UDP port 53.",
          "Secure shell remote administration (SSH) over TCP port 22.",
          "Web real-time voice and video conferencing (WebRTC over UDP)."
        ],
        "examImportantPoints": [
          "Draw and label the complete 20-byte TCP header and 8-byte UDP header with bit lengths for each field.",
          "Compare TCP and UDP across 6 parameters: connection state, reliability, ordering, header size, speed, and flow control.",
          "Explain why UDP includes an optional/mandatory checksum that incorporates a pseudo-header."
        ],
        "quickRevisionNotes": [
          "UDP: 8 bytes fixed header, connectionless, unreliable, fast.",
          "TCP: 20 bytes min header, connection-oriented, reliable, byte-stream.",
          "Well-known ports: 0-1023 (HTTP 80, HTTPS 443, DNS 53, SSH 22).",
          "Socket = IP Address + Port Number."
        ]
      },
      "intermediate": {
        "summary": "Transport Multiplexing gathers data from multiple application sockets, encloses it with port numbers in transport headers, and passes it to the networ...",
        "theory": "Transport Multiplexing gathers data from multiple application sockets, encloses it with port numbers in transport headers, and passes it to the network layer. Demultiplexing inspects the destination port (and in TCP, the full 4-tuple: source IP, source port, dest IP, dest port) to direct the payload to the correct socket buffer. The UDP header is fixed at 8 bytes: Source Port (16 bits), Destination Port (16 bits), Length (16 bits), and Checksum (16 bits). The TCP header is minimum 20 bytes: Sequence Number, Acknowledgment Number, Data Offset (header length), Flags (URG, ACK, PSH, RST, SYN, FIN), Window Size, Checksum, and Urgent Pointer.",
        "definitions": [
          {
            "term": "Port Number",
            "definition": "A 16-bit integer identifying a specific application endpoint or service on an IP host."
          },
          {
            "term": "Socket",
            "definition": "The unique software communication endpoint defined by the combination of an IP address and a Port number."
          },
          {
            "term": "Demultiplexing",
            "definition": "The process of delivering the received transport layer segment payload to the correct application socket based on header port addresses."
          }
        ],
        "keyConcepts": [
          {
            "title": "TCP Connection-Oriented 4-Tuple Demux",
            "explanation": "Two different clients connecting to web server port 80 are separated into distinct sockets because their source IP or source port differs.",
            "example": "UDP demultiplexing relies only on destination IP and destination port, routing multiple senders into the same socket."
          },
          {
            "title": "Why Real-Time Audio Uses UDP",
            "explanation": "A dropped audio frame retransmitted 200ms later arrives too late for speech playback, causing stutter. Dropping it and playing current audio is superior.",
            "example": "VoIP protocols (RTP over UDP) favor timely delivery over complete recovery."
          }
        ],
        "diagram": "+-- TCP HEADER (20-60 Bytes) vs UDP HEADER (8 Bytes Fixed) --+\\n| UDP: [Src Port (16b) | Dst Port (16b) | Length (16b) | Checksum (16b)]\\n| TCP: [Src Port (16b) | Dst Port (16b)]\\n|      [Sequence Number (32 bits)       ]\\n|      [Acknowledgment Number (32 bits) ]\\n|      [Offset | Flags: U|A|P|R|S|F | Window Size (16b)]\\n|      [Checksum (16b) | Urgent Pointer (16b)]",
        "applications": [
          "Domain Name System (DNS) queries over UDP port 53.",
          "Secure shell remote administration (SSH) over TCP port 22.",
          "Web real-time voice and video conferencing (WebRTC over UDP)."
        ],
        "examImportantPoints": [
          "Draw and label the complete 20-byte TCP header and 8-byte UDP header with bit lengths for each field.",
          "Compare TCP and UDP across 6 parameters: connection state, reliability, ordering, header size, speed, and flow control.",
          "Explain why UDP includes an optional/mandatory checksum that incorporates a pseudo-header."
        ],
        "quickRevisionNotes": [
          "UDP: 8 bytes fixed header, connectionless, unreliable, fast.",
          "TCP: 20 bytes min header, connection-oriented, reliable, byte-stream.",
          "Well-known ports: 0-1023 (HTTP 80, HTTPS 443, DNS 53, SSH 22)."
        ]
      },
      "advanced": {
        "summary": "UDP is essential for real-time applications (VoIP, multiplayer online gaming, DNS, live video streaming) where latency is prioritized over retransmiss...",
        "theory": "UDP is essential for real-time applications (VoIP, multiplayer online gaming, DNS, live video streaming) where latency is prioritized over retransmission delay. TCP is mandatory for data accuracy (web browsing, email, file transfer, SSH). Pseudo-header checksum calculation in both TCP and UDP includes source/dest IP addresses and protocol numbers from the Network layer, violating strict modular layering to catch mismatched IP delivery before passing corrupt data to applications.",
        "definitions": [
          {
            "term": "Port Number",
            "definition": "A 16-bit integer identifying a specific application endpoint or service on an IP host."
          },
          {
            "term": "Socket",
            "definition": "The unique software communication endpoint defined by the combination of an IP address and a Port number."
          },
          {
            "term": "Demultiplexing",
            "definition": "The process of delivering the received transport layer segment payload to the correct application socket based on header port addresses."
          }
        ],
        "keyConcepts": [
          {
            "title": "TCP Connection-Oriented 4-Tuple Demux",
            "explanation": "Two different clients connecting to web server port 80 are separated into distinct sockets because their source IP or source port differs.",
            "example": "UDP demultiplexing relies only on destination IP and destination port, routing multiple senders into the same socket."
          },
          {
            "title": "Why Real-Time Audio Uses UDP",
            "explanation": "A dropped audio frame retransmitted 200ms later arrives too late for speech playback, causing stutter. Dropping it and playing current audio is superior.",
            "example": "VoIP protocols (RTP over UDP) favor timely delivery over complete recovery."
          }
        ],
        "diagram": "+-- TCP HEADER (20-60 Bytes) vs UDP HEADER (8 Bytes Fixed) --+\\n| UDP: [Src Port (16b) | Dst Port (16b) | Length (16b) | Checksum (16b)]\\n| TCP: [Src Port (16b) | Dst Port (16b)]\\n|      [Sequence Number (32 bits)       ]\\n|      [Acknowledgment Number (32 bits) ]\\n|      [Offset | Flags: U|A|P|R|S|F | Window Size (16b)]\\n|      [Checksum (16b) | Urgent Pointer (16b)]",
        "applications": [
          "Domain Name System (DNS) queries over UDP port 53.",
          "Secure shell remote administration (SSH) over TCP port 22.",
          "Web real-time voice and video conferencing (WebRTC over UDP)."
        ],
        "examImportantPoints": [
          "Draw and label the complete 20-byte TCP header and 8-byte UDP header with bit lengths for each field.",
          "Compare TCP and UDP across 6 parameters: connection state, reliability, ordering, header size, speed, and flow control.",
          "Explain why UDP includes an optional/mandatory checksum that incorporates a pseudo-header."
        ],
        "quickRevisionNotes": [
          "TCP: 20 bytes min header, connection-oriented, reliable, byte-stream.",
          "Well-known ports: 0-1023 (HTTP 80, HTTPS 443, DNS 53, SSH 22).",
          "Socket = IP Address + Port Number."
        ]
      }
    }
  },
  {
    "id": "cn-u4-t2",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "unitNumber": 4,
    "unitTitle": "Transport Layer & Congestion Control",
    "topicNumber": 2,
    "title": "TCP Connection Management (3-Way Handshake & State Machine)",
    "objectives": [
      "Detail the TCP 3-Way Handshake connection establishment and 4-Way teardown state transitions.",
      "Explain Initial Sequence Number (ISN) selection and synchronization to prevent delayed duplicate confusion.",
      "Analyze TCP socket state machine (SYN_SENT, ESTABLISHED, FIN_WAIT, TIME_WAIT) and SYN flood defense (SYN cookies)."
    ],
    "keywords": [
      "TCP Handshake",
      "Three-Way Handshake",
      "SYN",
      "SYN-ACK",
      "ACK",
      "FIN",
      "TIME_WAIT",
      "ISN",
      "SYN Flood",
      "State Machine"
    ],
    "content": {
      "beginner": {
        "summary": "Before TCP transmits user data, both hosts must establish a full-duplex virtual connection using the Three-Way Handshake: 1. Client sends SYN (Synchro...",
        "theory": "Before TCP transmits user data, both hosts must establish a full-duplex virtual connection using the Three-Way Handshake: 1. Client sends SYN (Synchronize flag set, selecting random Initial Sequence Number x). 2. Server responds with SYN-ACK (SYN flag set, its own random sequence number y, and ACK = x + 1). 3. Client replies with ACK (ACK = y + 1), transitioning both sides to the ESTABLISHED state. When data transmission finishes, connection termination requires a 4-way handshake using FIN and ACK control packets, because each direction of the full-duplex channel must be closed independently.",
        "definitions": [
          {
            "term": "ISN (Initial Sequence Number)",
            "definition": "The initial 32-bit sequence number randomly selected by a TCP endpoint to identify the first byte of data transmitted in a session."
          },
          {
            "term": "TIME_WAIT State",
            "definition": "A closing TCP socket state where the endpoint waits for twice the Maximum Segment Lifetime (2*MSL) to ensure final ACK delivery."
          },
          {
            "term": "SYN Cookies",
            "definition": "A stateless cryptographic mechanism used by TCP servers to resist SYN flood denial-of-service attacks without consuming connection buffer memory."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why 2*MSL Wait is Required",
            "explanation": "If client final ACK is lost, server retransmits its FIN. If client closed immediately, client would send RST, causing abnormal server termination.",
            "example": "TIME_WAIT ensures retransmitted FINs receive an ACK and prevents port reuse while old segments remain in transit."
          },
          {
            "title": "SYN Flood Backlog Exhaustion",
            "explanation": "Half-open connections tie up kernel memory in the backlog queue. SYN Cookies eliminate state until the client proves authenticity via the third ACK.",
            "example": "Linux kernels activate syncookies automatically under high SYN pressure."
          }
        ],
        "diagram": "+-- TCP 3-WAY HANDSHAKE & 4-WAY TEARDOWN --+\\n| Client                              Server\\n|   [CLOSED]                            [LISTEN]\\n|      | --- SYN (seq = x) ------------>   | [SYN_RCVD]\\n|      | <--- SYN-ACK (seq=y, ack=x+1) -   |\\n| [ESTABLISHED] --- ACK (ack=y+1) ----->   | [ESTABLISHED]\\n|      ... Data Transfer ...\\n|   [FIN_WAIT_1] --- FIN -------------->   | [CLOSE_WAIT]\\n|   [FIN_WAIT_2] <--- ACK --------------   |\\n|   [TIME_WAIT]  <--- FIN --------------   | [LAST_ACK]\\n|   (wait 2MSL)  --- ACK -------------->   | [CLOSED]",
        "applications": [
          "Web server connection handling for millions of concurrent HTTP/HTTPS requests.",
          "Stateful firewall connection tracking tables (conntrack in Linux iptables).",
          "Load balancer reverse proxy connection pooling."
        ],
        "examImportantPoints": [
          "Trace the complete TCP 3-Way Handshake with packet sequence numbers and ACK values for client ISN 1000 and server ISN 5000.",
          "Explain the necessity and duration of the TIME_WAIT state (2*MSL).",
          "Describe how a SYN Flood denial of service attack works and how SYN Cookies mitigate it."
        ],
        "quickRevisionNotes": [
          "Establishment: SYN -> SYN-ACK -> ACK (3 steps).",
          "Termination: FIN -> ACK, FIN -> ACK (4 steps).",
          "TIME_WAIT = 2 * MSL (prevents delayed duplicates and ensures clean closure).",
          "SYN Cookies encode state into sequence number to defeat SYN flood."
        ]
      },
      "intermediate": {
        "summary": "TCP sequence numbers track bytes, not packets. Random Initial Sequence Number (ISN) generation prevents old delayed duplicate packets from a previous ...",
        "theory": "TCP sequence numbers track bytes, not packets. Random Initial Sequence Number (ISN) generation prevents old delayed duplicate packets from a previous connection incarnation from being accepted as valid data. During teardown: Host A sends FIN; Host B sends ACK (A enters FIN_WAIT_2; B enters CLOSE_WAIT). When Host B finishes sending remaining queued data, B sends its own FIN; Host A replies with ACK and enters the TIME_WAIT state. Host A remains in TIME_WAIT for 2 * MSL (Maximum Segment Lifetime, typically 1 to 2 minutes) to guarantee the final ACK reached B and allow old wandering segments to expire in the network.",
        "definitions": [
          {
            "term": "ISN (Initial Sequence Number)",
            "definition": "The initial 32-bit sequence number randomly selected by a TCP endpoint to identify the first byte of data transmitted in a session."
          },
          {
            "term": "TIME_WAIT State",
            "definition": "A closing TCP socket state where the endpoint waits for twice the Maximum Segment Lifetime (2*MSL) to ensure final ACK delivery."
          },
          {
            "term": "SYN Cookies",
            "definition": "A stateless cryptographic mechanism used by TCP servers to resist SYN flood denial-of-service attacks without consuming connection buffer memory."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why 2*MSL Wait is Required",
            "explanation": "If client final ACK is lost, server retransmits its FIN. If client closed immediately, client would send RST, causing abnormal server termination.",
            "example": "TIME_WAIT ensures retransmitted FINs receive an ACK and prevents port reuse while old segments remain in transit."
          },
          {
            "title": "SYN Flood Backlog Exhaustion",
            "explanation": "Half-open connections tie up kernel memory in the backlog queue. SYN Cookies eliminate state until the client proves authenticity via the third ACK.",
            "example": "Linux kernels activate syncookies automatically under high SYN pressure."
          }
        ],
        "diagram": "+-- TCP 3-WAY HANDSHAKE & 4-WAY TEARDOWN --+\\n| Client                              Server\\n|   [CLOSED]                            [LISTEN]\\n|      | --- SYN (seq = x) ------------>   | [SYN_RCVD]\\n|      | <--- SYN-ACK (seq=y, ack=x+1) -   |\\n| [ESTABLISHED] --- ACK (ack=y+1) ----->   | [ESTABLISHED]\\n|      ... Data Transfer ...\\n|   [FIN_WAIT_1] --- FIN -------------->   | [CLOSE_WAIT]\\n|   [FIN_WAIT_2] <--- ACK --------------   |\\n|   [TIME_WAIT]  <--- FIN --------------   | [LAST_ACK]\\n|   (wait 2MSL)  --- ACK -------------->   | [CLOSED]",
        "applications": [
          "Web server connection handling for millions of concurrent HTTP/HTTPS requests.",
          "Stateful firewall connection tracking tables (conntrack in Linux iptables).",
          "Load balancer reverse proxy connection pooling."
        ],
        "examImportantPoints": [
          "Trace the complete TCP 3-Way Handshake with packet sequence numbers and ACK values for client ISN 1000 and server ISN 5000.",
          "Explain the necessity and duration of the TIME_WAIT state (2*MSL).",
          "Describe how a SYN Flood denial of service attack works and how SYN Cookies mitigate it."
        ],
        "quickRevisionNotes": [
          "Establishment: SYN -> SYN-ACK -> ACK (3 steps).",
          "Termination: FIN -> ACK, FIN -> ACK (4 steps).",
          "TIME_WAIT = 2 * MSL (prevents delayed duplicates and ensures clean closure)."
        ]
      },
      "advanced": {
        "summary": "In a SYN Flood attack, malicious attackers send thousands of spoofed SYN packets without completing the third ACK, filling the server SYN backlog queu...",
        "theory": "In a SYN Flood attack, malicious attackers send thousands of spoofed SYN packets without completing the third ACK, filling the server SYN backlog queue (listen queue) and denying service to legitimate clients. The cryptographic defense is SYN Cookies: the server does not allocate memory state upon receiving a SYN; instead, it encodes the connection state and timestamp into the server ISN = Hash(SrcIP, SrcPort, DstIP, DstPort, Secret) + Timestamp. When the client returns ACK with ISN+1, the server verifies the hash and instantiates the socket only then.",
        "definitions": [
          {
            "term": "ISN (Initial Sequence Number)",
            "definition": "The initial 32-bit sequence number randomly selected by a TCP endpoint to identify the first byte of data transmitted in a session."
          },
          {
            "term": "TIME_WAIT State",
            "definition": "A closing TCP socket state where the endpoint waits for twice the Maximum Segment Lifetime (2*MSL) to ensure final ACK delivery."
          },
          {
            "term": "SYN Cookies",
            "definition": "A stateless cryptographic mechanism used by TCP servers to resist SYN flood denial-of-service attacks without consuming connection buffer memory."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why 2*MSL Wait is Required",
            "explanation": "If client final ACK is lost, server retransmits its FIN. If client closed immediately, client would send RST, causing abnormal server termination.",
            "example": "TIME_WAIT ensures retransmitted FINs receive an ACK and prevents port reuse while old segments remain in transit."
          },
          {
            "title": "SYN Flood Backlog Exhaustion",
            "explanation": "Half-open connections tie up kernel memory in the backlog queue. SYN Cookies eliminate state until the client proves authenticity via the third ACK.",
            "example": "Linux kernels activate syncookies automatically under high SYN pressure."
          }
        ],
        "diagram": "+-- TCP 3-WAY HANDSHAKE & 4-WAY TEARDOWN --+\\n| Client                              Server\\n|   [CLOSED]                            [LISTEN]\\n|      | --- SYN (seq = x) ------------>   | [SYN_RCVD]\\n|      | <--- SYN-ACK (seq=y, ack=x+1) -   |\\n| [ESTABLISHED] --- ACK (ack=y+1) ----->   | [ESTABLISHED]\\n|      ... Data Transfer ...\\n|   [FIN_WAIT_1] --- FIN -------------->   | [CLOSE_WAIT]\\n|   [FIN_WAIT_2] <--- ACK --------------   |\\n|   [TIME_WAIT]  <--- FIN --------------   | [LAST_ACK]\\n|   (wait 2MSL)  --- ACK -------------->   | [CLOSED]",
        "applications": [
          "Web server connection handling for millions of concurrent HTTP/HTTPS requests.",
          "Stateful firewall connection tracking tables (conntrack in Linux iptables).",
          "Load balancer reverse proxy connection pooling."
        ],
        "examImportantPoints": [
          "Trace the complete TCP 3-Way Handshake with packet sequence numbers and ACK values for client ISN 1000 and server ISN 5000.",
          "Explain the necessity and duration of the TIME_WAIT state (2*MSL).",
          "Describe how a SYN Flood denial of service attack works and how SYN Cookies mitigate it."
        ],
        "quickRevisionNotes": [
          "Termination: FIN -> ACK, FIN -> ACK (4 steps).",
          "TIME_WAIT = 2 * MSL (prevents delayed duplicates and ensures clean closure).",
          "SYN Cookies encode state into sequence number to defeat SYN flood."
        ]
      }
    }
  },
  {
    "id": "cn-u4-t3",
    "subjectId": "cn",
    "unitId": "cn-u4",
    "unitNumber": 4,
    "unitTitle": "Transport Layer & Congestion Control",
    "topicNumber": 3,
    "title": "TCP Congestion Control Mechanics (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)",
    "objectives": [
      "Analyze TCP congestion window (cwnd) and slow-start threshold (ssthresh) dynamics.",
      "Differentiate Additive Increase Multiplicative Decrease (AIMD) linear growth from exponential Slow Start.",
      "Compare TCP Tahoe and TCP Reno recovery algorithms upon timeout vs triple duplicate ACKs."
    ],
    "keywords": [
      "Congestion Control",
      "Slow Start",
      "Congestion Avoidance",
      "Fast Retransmit",
      "Fast Recovery",
      "AIMD",
      "cwnd",
      "ssthresh",
      "TCP Reno",
      "TCP Tahoe"
    ],
    "content": {
      "beginner": {
        "summary": "While flow control protects the receiving host from buffer overflow, TCP Congestion Control protects the intermediate network routers from being overl...",
        "theory": "While flow control protects the receiving host from buffer overflow, TCP Congestion Control protects the intermediate network routers from being overloaded. TCP maintains a state variable called the Congestion Window (cwnd), which limits the number of unacknowledged bytes in flight: Effective Window = min(cwnd, rwnd), where rwnd is the receiver advertised buffer window. TCP Congestion Control operates across distinct phases: 1. Slow Start: cwnd starts at 1 MSS (Maximum Segment Size) and doubles every Round-Trip Time (exponential growth) until it hits the slow-start threshold (ssthresh). 2. Congestion Avoidance: cwnd increases linearly by 1 MSS per RTT (Additive Increase) to gently probe available bandwidth.",
        "definitions": [
          {
            "term": "cwnd (Congestion Window)",
            "definition": "A TCP state variable maintained by the sender that limits the total amount of unacknowledged data in transit."
          },
          {
            "term": "ssthresh (Slow-Start Threshold)",
            "definition": "The threshold dividing exponential Slow Start phase from linear Congestion Avoidance phase."
          },
          {
            "term": "AIMD (Additive Increase Multiplicative Decrease)",
            "definition": "A feedback control algorithm that linearly increases sending rate when no loss occurs and halves it when congestion is detected."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why 3 Duplicate ACKs Trigger Fast Retransmit",
            "explanation": "A single out-of-order packet generates one or two duplicate ACKs due to packet reordering. Three duplicate ACKs reliably indicates packet loss.",
            "example": "Fast Retransmit repairs drops hundreds of milliseconds faster than coarse timeouts."
          },
          {
            "title": "AIMD Mathematical Fairness",
            "explanation": "Vector analysis proves that when two competing flows share a bottleneck link, Additive Increase (+1) and Multiplicative Decrease (/2) converges to equal bandwidth allocation.",
            "example": "Pure multiplicative increase causes unfair starvation."
          }
        ],
        "diagram": "+-- TCP CONGESTION WINDOW (cwnd) PROGRESSION GRAPH --+\\n| cwnd ^                                                     \\n|      |              /\\\\ (ssthresh)                         \\n|      |             /  -- Congestion Avoidance (Linear +1)   \\n|      |            /        \\\\ (Loss: 3 Dup ACKs)            \\n|      |           /          ---\\\\ (Fast Recovery Reno)      \\n|      |          /                 \\\\                        \\n|      |   /\\\\   / (Slow Start: Exp *2)                       \\n|      +--+--+--+-------------------------> Time (RTT)        ",
        "applications": [
          "Global internet file downloads and video streaming throughput optimization.",
          "Cloud storage synchronization and backup replication pipelines.",
          "BBR congestion control deployed across YouTube and Google cloud edges."
        ],
        "examImportantPoints": [
          "Draw the cwnd vs time graph illustrating Slow Start, ssthresh transition, Congestion Avoidance, Timeout drop, and 3 Dup ACK recovery.",
          "Contrast TCP Tahoe and TCP Reno handling of triple duplicate ACKs.",
          "Calculate cwnd size across multiple RTT cycles given initial ssthresh and packet drop events."
        ],
        "quickRevisionNotes": [
          "Slow Start: Doubles cwnd every RTT (exponential).",
          "Congestion Avoidance: cwnd increases by 1 MSS per RTT (linear).",
          "Timeout: ssthresh = cwnd/2; cwnd resets to 1 MSS.",
          "3 Duplicate ACKs: Reno sets cwnd = ssthresh (Fast Recovery); Tahoe resets cwnd to 1."
        ]
      },
      "intermediate": {
        "summary": "TCP detects packet loss via two distinct signals: 1. Retransmission Timeout (RTO): Severe congestion. In TCP Tahoe, ssthresh is set to cwnd/2, and cwn...",
        "theory": "TCP detects packet loss via two distinct signals: 1. Retransmission Timeout (RTO): Severe congestion. In TCP Tahoe, ssthresh is set to cwnd/2, and cwnd resets to 1 MSS, restarting Slow Start. 2. Three Duplicate ACKs: Moderate loss where later packets still reach the receiver. TCP triggers Fast Retransmit (immediately retransmitting the missing segment without waiting for the timer). In TCP Reno, Fast Recovery is activated: ssthresh is set to cwnd/2, but cwnd is set to ssthresh + 3 MSS (rather than dropping to 1), and continues linear Congestion Avoidance. This principle is called Additive Increase Multiplicative Decrease (AIMD), ensuring stability and fairness.",
        "definitions": [
          {
            "term": "cwnd (Congestion Window)",
            "definition": "A TCP state variable maintained by the sender that limits the total amount of unacknowledged data in transit."
          },
          {
            "term": "ssthresh (Slow-Start Threshold)",
            "definition": "The threshold dividing exponential Slow Start phase from linear Congestion Avoidance phase."
          },
          {
            "term": "AIMD (Additive Increase Multiplicative Decrease)",
            "definition": "A feedback control algorithm that linearly increases sending rate when no loss occurs and halves it when congestion is detected."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why 3 Duplicate ACKs Trigger Fast Retransmit",
            "explanation": "A single out-of-order packet generates one or two duplicate ACKs due to packet reordering. Three duplicate ACKs reliably indicates packet loss.",
            "example": "Fast Retransmit repairs drops hundreds of milliseconds faster than coarse timeouts."
          },
          {
            "title": "AIMD Mathematical Fairness",
            "explanation": "Vector analysis proves that when two competing flows share a bottleneck link, Additive Increase (+1) and Multiplicative Decrease (/2) converges to equal bandwidth allocation.",
            "example": "Pure multiplicative increase causes unfair starvation."
          }
        ],
        "diagram": "+-- TCP CONGESTION WINDOW (cwnd) PROGRESSION GRAPH --+\\n| cwnd ^                                                     \\n|      |              /\\\\ (ssthresh)                         \\n|      |             /  -- Congestion Avoidance (Linear +1)   \\n|      |            /        \\\\ (Loss: 3 Dup ACKs)            \\n|      |           /          ---\\\\ (Fast Recovery Reno)      \\n|      |          /                 \\\\                        \\n|      |   /\\\\   / (Slow Start: Exp *2)                       \\n|      +--+--+--+-------------------------> Time (RTT)        ",
        "applications": [
          "Global internet file downloads and video streaming throughput optimization.",
          "Cloud storage synchronization and backup replication pipelines.",
          "BBR congestion control deployed across YouTube and Google cloud edges."
        ],
        "examImportantPoints": [
          "Draw the cwnd vs time graph illustrating Slow Start, ssthresh transition, Congestion Avoidance, Timeout drop, and 3 Dup ACK recovery.",
          "Contrast TCP Tahoe and TCP Reno handling of triple duplicate ACKs.",
          "Calculate cwnd size across multiple RTT cycles given initial ssthresh and packet drop events."
        ],
        "quickRevisionNotes": [
          "Slow Start: Doubles cwnd every RTT (exponential).",
          "Congestion Avoidance: cwnd increases by 1 MSS per RTT (linear).",
          "Timeout: ssthresh = cwnd/2; cwnd resets to 1 MSS."
        ]
      },
      "advanced": {
        "summary": "Modern high-speed datacenter networks have evolved beyond loss-based TCP (Reno, Cubic) to delay-based and rate-based congestion control: Google BBR (B...",
        "theory": "Modern high-speed datacenter networks have evolved beyond loss-based TCP (Reno, Cubic) to delay-based and rate-based congestion control: Google BBR (Bottleneck Bandwidth and Round-trip propagation time) measures maximum bandwidth and minimum RTT independently to keep the pipe full without filling router buffers, eliminating Bufferbloat. In datacenters, DCTCP (Data Center TCP) leverages Explicit Congestion Notification (ECN) to maintain low queue occupancy at microsecond latency.",
        "definitions": [
          {
            "term": "cwnd (Congestion Window)",
            "definition": "A TCP state variable maintained by the sender that limits the total amount of unacknowledged data in transit."
          },
          {
            "term": "ssthresh (Slow-Start Threshold)",
            "definition": "The threshold dividing exponential Slow Start phase from linear Congestion Avoidance phase."
          },
          {
            "term": "AIMD (Additive Increase Multiplicative Decrease)",
            "definition": "A feedback control algorithm that linearly increases sending rate when no loss occurs and halves it when congestion is detected."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why 3 Duplicate ACKs Trigger Fast Retransmit",
            "explanation": "A single out-of-order packet generates one or two duplicate ACKs due to packet reordering. Three duplicate ACKs reliably indicates packet loss.",
            "example": "Fast Retransmit repairs drops hundreds of milliseconds faster than coarse timeouts."
          },
          {
            "title": "AIMD Mathematical Fairness",
            "explanation": "Vector analysis proves that when two competing flows share a bottleneck link, Additive Increase (+1) and Multiplicative Decrease (/2) converges to equal bandwidth allocation.",
            "example": "Pure multiplicative increase causes unfair starvation."
          }
        ],
        "diagram": "+-- TCP CONGESTION WINDOW (cwnd) PROGRESSION GRAPH --+\\n| cwnd ^                                                     \\n|      |              /\\\\ (ssthresh)                         \\n|      |             /  -- Congestion Avoidance (Linear +1)   \\n|      |            /        \\\\ (Loss: 3 Dup ACKs)            \\n|      |           /          ---\\\\ (Fast Recovery Reno)      \\n|      |          /                 \\\\                        \\n|      |   /\\\\   / (Slow Start: Exp *2)                       \\n|      +--+--+--+-------------------------> Time (RTT)        ",
        "applications": [
          "Global internet file downloads and video streaming throughput optimization.",
          "Cloud storage synchronization and backup replication pipelines.",
          "BBR congestion control deployed across YouTube and Google cloud edges."
        ],
        "examImportantPoints": [
          "Draw the cwnd vs time graph illustrating Slow Start, ssthresh transition, Congestion Avoidance, Timeout drop, and 3 Dup ACK recovery.",
          "Contrast TCP Tahoe and TCP Reno handling of triple duplicate ACKs.",
          "Calculate cwnd size across multiple RTT cycles given initial ssthresh and packet drop events."
        ],
        "quickRevisionNotes": [
          "Congestion Avoidance: cwnd increases by 1 MSS per RTT (linear).",
          "Timeout: ssthresh = cwnd/2; cwnd resets to 1 MSS.",
          "3 Duplicate ACKs: Reno sets cwnd = ssthresh (Fast Recovery); Tahoe resets cwnd to 1."
        ]
      }
    }
  },
  {
    "id": "cn-u5-t1",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "unitNumber": 5,
    "unitTitle": "Application Layer & Network Security",
    "topicNumber": 1,
    "title": "Application Layer Protocols (DNS, HTTP/HTTPS, FTP, SMTP)",
    "objectives": [
      "Analyze Domain Name System (DNS) hierarchy, record types (A, AAAA, CNAME, MX), and resolution queries.",
      "Compare HTTP/1.1 persistent connections, HTTP/2 binary framing/multiplexing, and HTTP/3 over QUIC.",
      "Differentiate electronic mail protocols (SMTP for push, POP3/IMAP for retrieval) and FTP dual-port control/data connections."
    ],
    "keywords": [
      "Application Layer",
      "DNS",
      "HTTP",
      "HTTPS",
      "FTP",
      "SMTP",
      "POP3",
      "IMAP",
      "Iterative",
      "Recursive",
      "Resource Records"
    ],
    "content": {
      "beginner": {
        "summary": "The Application layer contains protocols that users and client applications interact with directly: 1. DNS (Domain Name System): Resolves human-readab...",
        "theory": "The Application layer contains protocols that users and client applications interact with directly: 1. DNS (Domain Name System): Resolves human-readable domain names (e.g. google.com) into machine-readable IP addresses using a distributed hierarchical database of Root, Top-Level Domain (TLD), and Authoritative servers. 2. HTTP/HTTPS: Hypertext Transfer Protocol transfers web pages, with HTTPS adding TLS encryption. 3. FTP (File Transfer Protocol): Transfers files using two separate TCP connections: port 21 for commands and port 20 for raw data. 4. SMTP (Simple Mail Transfer Protocol): Pushes email between mail servers over port 25, while POP3 (port 110) and IMAP (port 143) retrieve emails to user clients.",
        "definitions": [
          {
            "term": "Recursive Query",
            "definition": "A DNS resolution request where the queried DNS server takes full responsibility to return the final answer to the client."
          },
          {
            "term": "Iterative Query",
            "definition": "A DNS resolution request where the queried server returns the best referral address it knows if it lacks the direct record."
          },
          {
            "term": "CNAME Record",
            "definition": "A DNS Canonical Name record that maps an alias domain name to an existing true domain name."
          }
        ],
        "keyConcepts": [
          {
            "title": "FTP Dual-Connection Architecture",
            "explanation": "FTP separates control commands (USER, PASS, LIST) on TCP port 21 from actual bulk file data transfer on dynamic port 20.",
            "example": "Separating control allows status commands to interrupt or abort large file transfers cleanly."
          },
          {
            "title": "HTTP/1.1 vs HTTP/2 Multiplexing",
            "explanation": "HTTP/1.1 requires sequential request/response exchanges per TCP socket. HTTP/2 interleaves binary frames from multiple requests simultaneously over one TCP socket.",
            "example": "Eliminates latency from maintaining dozens of parallel TCP sockets."
          }
        ],
        "diagram": "+-- HIERARCHICAL DNS RESOLUTION PIPELINE --+\\n| Client -> [Local DNS Resolver] -> [Root DNS Server (.)]\\n|                                 -> [TLD Server (.com)]\\n|                                 -> [Authoritative Server (example.com)]\\n| Local Cache saves record (TTL); returns IP to browser",
        "applications": [
          "Global website hosting and CDN edge routing.",
          "Enterprise email deliverability and spam filtering.",
          "Automated software updates and cloud file synchronizations."
        ],
        "examImportantPoints": [
          "Differentiate Recursive vs Iterative DNS queries with a step-by-step diagram.",
          "Explain why FTP uses two separate TCP connections (Control on 21, Data on 20).",
          "Compare HTTP/1.1, HTTP/2, and HTTP/3 across connection management and multiplexing."
        ],
        "quickRevisionNotes": [
          "DNS: UDP port 53; maps hostnames to IP addresses.",
          "HTTP/1.1 = text, persistent; HTTP/2 = binary multiplexed; HTTP/3 = QUIC/UDP.",
          "FTP: Port 21 control, Port 20 data.",
          "Mail: SMTP sends (port 25); POP3/IMAP retrieve (110/143)."
        ]
      },
      "intermediate": {
        "summary": "DNS queries operate in two modes: Recursive (the local resolver queries hierarchical servers on the client behalf and returns the final answer) and It...",
        "theory": "DNS queries operate in two modes: Recursive (the local resolver queries hierarchical servers on the client behalf and returns the final answer) and Iterative (the queried server refers the client to the next authoritative server down the tree). DNS Resource Records include: A (IPv4), AAAA (IPv6), CNAME (canonical alias), MX (mail exchange), and NS (name server). HTTP evolution: HTTP/1.0 required a new TCP handshake for every asset; HTTP/1.1 introduced Keep-Alive persistent connections and pipelining; HTTP/2 introduced binary framing, header compression (HPACK), and stream multiplexing over a single TCP connection; HTTP/3 migrated from TCP to QUIC over UDP to eliminate Head-of-Line blocking.",
        "definitions": [
          {
            "term": "Recursive Query",
            "definition": "A DNS resolution request where the queried DNS server takes full responsibility to return the final answer to the client."
          },
          {
            "term": "Iterative Query",
            "definition": "A DNS resolution request where the queried server returns the best referral address it knows if it lacks the direct record."
          },
          {
            "term": "CNAME Record",
            "definition": "A DNS Canonical Name record that maps an alias domain name to an existing true domain name."
          }
        ],
        "keyConcepts": [
          {
            "title": "FTP Dual-Connection Architecture",
            "explanation": "FTP separates control commands (USER, PASS, LIST) on TCP port 21 from actual bulk file data transfer on dynamic port 20.",
            "example": "Separating control allows status commands to interrupt or abort large file transfers cleanly."
          },
          {
            "title": "HTTP/1.1 vs HTTP/2 Multiplexing",
            "explanation": "HTTP/1.1 requires sequential request/response exchanges per TCP socket. HTTP/2 interleaves binary frames from multiple requests simultaneously over one TCP socket.",
            "example": "Eliminates latency from maintaining dozens of parallel TCP sockets."
          }
        ],
        "diagram": "+-- HIERARCHICAL DNS RESOLUTION PIPELINE --+\\n| Client -> [Local DNS Resolver] -> [Root DNS Server (.)]\\n|                                 -> [TLD Server (.com)]\\n|                                 -> [Authoritative Server (example.com)]\\n| Local Cache saves record (TTL); returns IP to browser",
        "applications": [
          "Global website hosting and CDN edge routing.",
          "Enterprise email deliverability and spam filtering.",
          "Automated software updates and cloud file synchronizations."
        ],
        "examImportantPoints": [
          "Differentiate Recursive vs Iterative DNS queries with a step-by-step diagram.",
          "Explain why FTP uses two separate TCP connections (Control on 21, Data on 20).",
          "Compare HTTP/1.1, HTTP/2, and HTTP/3 across connection management and multiplexing."
        ],
        "quickRevisionNotes": [
          "DNS: UDP port 53; maps hostnames to IP addresses.",
          "HTTP/1.1 = text, persistent; HTTP/2 = binary multiplexed; HTTP/3 = QUIC/UDP.",
          "FTP: Port 21 control, Port 20 data."
        ]
      },
      "advanced": {
        "summary": "DNS Security Extensions (DNSSEC) protect against DNS Cache Poisoning by signing resource records with public-key cryptography (RRSIG records). In mode...",
        "theory": "DNS Security Extensions (DNSSEC) protect against DNS Cache Poisoning by signing resource records with public-key cryptography (RRSIG records). In modern web performance, HTTP/2 server push and HTTP/3 0-RTT handshakes minimize page load metrics (Core Web Vitals). Modern mail infrastructure relies on SPF (Sender Policy Framework), DKIM (cryptographic domain key signatures), and DMARC policies to prevent email spoofing and phishing.",
        "definitions": [
          {
            "term": "Recursive Query",
            "definition": "A DNS resolution request where the queried DNS server takes full responsibility to return the final answer to the client."
          },
          {
            "term": "Iterative Query",
            "definition": "A DNS resolution request where the queried server returns the best referral address it knows if it lacks the direct record."
          },
          {
            "term": "CNAME Record",
            "definition": "A DNS Canonical Name record that maps an alias domain name to an existing true domain name."
          }
        ],
        "keyConcepts": [
          {
            "title": "FTP Dual-Connection Architecture",
            "explanation": "FTP separates control commands (USER, PASS, LIST) on TCP port 21 from actual bulk file data transfer on dynamic port 20.",
            "example": "Separating control allows status commands to interrupt or abort large file transfers cleanly."
          },
          {
            "title": "HTTP/1.1 vs HTTP/2 Multiplexing",
            "explanation": "HTTP/1.1 requires sequential request/response exchanges per TCP socket. HTTP/2 interleaves binary frames from multiple requests simultaneously over one TCP socket.",
            "example": "Eliminates latency from maintaining dozens of parallel TCP sockets."
          }
        ],
        "diagram": "+-- HIERARCHICAL DNS RESOLUTION PIPELINE --+\\n| Client -> [Local DNS Resolver] -> [Root DNS Server (.)]\\n|                                 -> [TLD Server (.com)]\\n|                                 -> [Authoritative Server (example.com)]\\n| Local Cache saves record (TTL); returns IP to browser",
        "applications": [
          "Global website hosting and CDN edge routing.",
          "Enterprise email deliverability and spam filtering.",
          "Automated software updates and cloud file synchronizations."
        ],
        "examImportantPoints": [
          "Differentiate Recursive vs Iterative DNS queries with a step-by-step diagram.",
          "Explain why FTP uses two separate TCP connections (Control on 21, Data on 20).",
          "Compare HTTP/1.1, HTTP/2, and HTTP/3 across connection management and multiplexing."
        ],
        "quickRevisionNotes": [
          "HTTP/1.1 = text, persistent; HTTP/2 = binary multiplexed; HTTP/3 = QUIC/UDP.",
          "FTP: Port 21 control, Port 20 data.",
          "Mail: SMTP sends (port 25); POP3/IMAP retrieve (110/143)."
        ]
      }
    }
  },
  {
    "id": "cn-u5-t2",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "unitNumber": 5,
    "unitTitle": "Application Layer & Network Security",
    "topicNumber": 2,
    "title": "Cryptography & Network Security (Symmetric vs Asymmetric, RSA, Digital Signatures)",
    "objectives": [
      "Compare Symmetric Key Cryptography (AES, DES) with Asymmetric Public-Key Cryptography (RSA).",
      "Calculate RSA key generation, modular exponentiation encryption, and decryption mathematics.",
      "Analyze cryptographic hash functions (SHA-256) and Digital Signature verification for non-repudiation and integrity."
    ],
    "keywords": [
      "Cryptography",
      "Symmetric Encryption",
      "Asymmetric Encryption",
      "AES",
      "DES",
      "RSA",
      "Public Key",
      "Private Key",
      "Digital Signature",
      "SHA-256"
    ],
    "content": {
      "beginner": {
        "summary": "Network security ensures Confidentiality, Integrity, Authentication, and Non-repudiation (the CIA triad). In Symmetric Key Cryptography (e.g. AES, DES...",
        "theory": "Network security ensures Confidentiality, Integrity, Authentication, and Non-repudiation (the CIA triad). In Symmetric Key Cryptography (e.g. AES, DES), the sender and receiver share a single identical secret key for both encryption and decryption. It is computationally fast but suffers from the secure key distribution problem. In Asymmetric (Public-Key) Cryptography (e.g. RSA, ECC), every participant has a key pair: a public key known to all, and a private key kept strictly secret. Data encrypted with the public key can only be decrypted by the matching private key. Digital Signatures reverse this: the sender signs a document hash with their private key, allowing anyone to verify authenticity using the sender public key.",
        "definitions": [
          {
            "term": "Confidentiality",
            "definition": "Guaranteeing that data transmitted across a network is readable only by authorized recipients possessing the decryption key."
          },
          {
            "term": "Non-Repudiation",
            "definition": "The security property ensuring that a sender cannot deny having sent a specific message or initiated a transaction."
          },
          {
            "term": "Euler Totient Function phi(n)",
            "definition": "The count of positive integers less than or equal to n that are relatively prime to n; for primes p and q, phi(pq) = (p-1)(q-1)."
          }
        ],
        "keyConcepts": [
          {
            "title": "Hybrid Cryptography Architecture",
            "explanation": "Asymmetric encryption is computationally slow; symmetric encryption is fast. Hybrid systems use RSA/ECDH to exchange an AES key in milliseconds.",
            "example": "Combines the speed of AES with the secure key exchange of public-key cryptography."
          },
          {
            "title": "Digital Signature Integrity Check",
            "explanation": "Receiver decrypts signature with sender public key to obtain Hash1, computes Hash2 of document, and compares. Matching hashes proves zero tampering.",
            "example": "Guarantees both sender identity and data integrity."
          }
        ],
        "diagram": "+-- ASYMMETRIC ENCRYPTION & DIGITAL SIGNATURE --+\\n| Encryption: Plaintext -> [Encrypt with Receiver Public Key] -> Ciphertext\\n|             Ciphertext -> [Decrypt with Receiver Private Key] -> Plaintext\\n| Signature:  Document -> [SHA-256 Hash] -> [Sign with Sender Private Key] -> Signature\\n|             Verification: [Verify with Sender Public Key] -> Confirms Integrity & Origin",
        "applications": [
          "HTTPS web traffic encryption across global web servers.",
          "Cryptocurrency blockchain transactions and Bitcoin wallet signatures.",
          "Code signing for operating system kernel drivers and software updates."
        ],
        "examImportantPoints": [
          "Perform a complete RSA calculation: given small primes p=3, q=11, and e=7, calculate n, phi(n), private key d, encrypt M=2, and decrypt C.",
          "Compare symmetric vs asymmetric encryption across 5 factors: keys, speed, key distribution, algorithm examples, and use cases.",
          "Explain how a digital signature provides both integrity and non-repudiation."
        ],
        "quickRevisionNotes": [
          "Symmetric: Single shared key (AES, DES), fast, key distribution challenge.",
          "Asymmetric: Public/private key pair (RSA, ECC), secure exchange.",
          "RSA formulas: C = M^e mod n; M = C^d mod n; d*e = 1 mod (p-1)(q-1).",
          "Digital signature = Hash encrypted with sender private key."
        ]
      },
      "intermediate": {
        "summary": "RSA Algorithm Mathematics: 1. Select two large distinct primes p and q. 2. Calculate modulus n = p * q. 3. Compute Euler totient function phi(n) = (p ...",
        "theory": "RSA Algorithm Mathematics: 1. Select two large distinct primes p and q. 2. Calculate modulus n = p * q. 3. Compute Euler totient function phi(n) = (p - 1) * (q - 1). 4. Choose public exponent e such that 1 < e < phi(n) and gcd(e, phi(n)) = 1. 5. Compute private exponent d such that (d * e) mod phi(n) = 1 (modular inverse). Encryption of plaintext message M (where M < n): Ciphertext C = M^e mod n. Decryption: Plaintext M = C^d mod n. RSA security relies on the mathematical intractability of factoring the product n of two massive prime numbers.",
        "definitions": [
          {
            "term": "Confidentiality",
            "definition": "Guaranteeing that data transmitted across a network is readable only by authorized recipients possessing the decryption key."
          },
          {
            "term": "Non-Repudiation",
            "definition": "The security property ensuring that a sender cannot deny having sent a specific message or initiated a transaction."
          },
          {
            "term": "Euler Totient Function phi(n)",
            "definition": "The count of positive integers less than or equal to n that are relatively prime to n; for primes p and q, phi(pq) = (p-1)(q-1)."
          }
        ],
        "keyConcepts": [
          {
            "title": "Hybrid Cryptography Architecture",
            "explanation": "Asymmetric encryption is computationally slow; symmetric encryption is fast. Hybrid systems use RSA/ECDH to exchange an AES key in milliseconds.",
            "example": "Combines the speed of AES with the secure key exchange of public-key cryptography."
          },
          {
            "title": "Digital Signature Integrity Check",
            "explanation": "Receiver decrypts signature with sender public key to obtain Hash1, computes Hash2 of document, and compares. Matching hashes proves zero tampering.",
            "example": "Guarantees both sender identity and data integrity."
          }
        ],
        "diagram": "+-- ASYMMETRIC ENCRYPTION & DIGITAL SIGNATURE --+\\n| Encryption: Plaintext -> [Encrypt with Receiver Public Key] -> Ciphertext\\n|             Ciphertext -> [Decrypt with Receiver Private Key] -> Plaintext\\n| Signature:  Document -> [SHA-256 Hash] -> [Sign with Sender Private Key] -> Signature\\n|             Verification: [Verify with Sender Public Key] -> Confirms Integrity & Origin",
        "applications": [
          "HTTPS web traffic encryption across global web servers.",
          "Cryptocurrency blockchain transactions and Bitcoin wallet signatures.",
          "Code signing for operating system kernel drivers and software updates."
        ],
        "examImportantPoints": [
          "Perform a complete RSA calculation: given small primes p=3, q=11, and e=7, calculate n, phi(n), private key d, encrypt M=2, and decrypt C.",
          "Compare symmetric vs asymmetric encryption across 5 factors: keys, speed, key distribution, algorithm examples, and use cases.",
          "Explain how a digital signature provides both integrity and non-repudiation."
        ],
        "quickRevisionNotes": [
          "Symmetric: Single shared key (AES, DES), fast, key distribution challenge.",
          "Asymmetric: Public/private key pair (RSA, ECC), secure exchange.",
          "RSA formulas: C = M^e mod n; M = C^d mod n; d*e = 1 mod (p-1)(q-1)."
        ]
      },
      "advanced": {
        "summary": "In real-world security (such as TLS), hybrid cryptography is standard: asymmetric RSA or Elliptic Curve Diffie-Hellman (ECDHE) performs the initial mu...",
        "theory": "In real-world security (such as TLS), hybrid cryptography is standard: asymmetric RSA or Elliptic Curve Diffie-Hellman (ECDHE) performs the initial mutual authentication and securely negotiates a temporary symmetric session key; subsequent high-speed bulk data transfer is encrypted using symmetric AES-GCM. Cryptographic hash functions like SHA-256 produce fixed 256-bit digests possessing pre-image resistance and collision resistance (birthday paradox immunity).",
        "definitions": [
          {
            "term": "Confidentiality",
            "definition": "Guaranteeing that data transmitted across a network is readable only by authorized recipients possessing the decryption key."
          },
          {
            "term": "Non-Repudiation",
            "definition": "The security property ensuring that a sender cannot deny having sent a specific message or initiated a transaction."
          },
          {
            "term": "Euler Totient Function phi(n)",
            "definition": "The count of positive integers less than or equal to n that are relatively prime to n; for primes p and q, phi(pq) = (p-1)(q-1)."
          }
        ],
        "keyConcepts": [
          {
            "title": "Hybrid Cryptography Architecture",
            "explanation": "Asymmetric encryption is computationally slow; symmetric encryption is fast. Hybrid systems use RSA/ECDH to exchange an AES key in milliseconds.",
            "example": "Combines the speed of AES with the secure key exchange of public-key cryptography."
          },
          {
            "title": "Digital Signature Integrity Check",
            "explanation": "Receiver decrypts signature with sender public key to obtain Hash1, computes Hash2 of document, and compares. Matching hashes proves zero tampering.",
            "example": "Guarantees both sender identity and data integrity."
          }
        ],
        "diagram": "+-- ASYMMETRIC ENCRYPTION & DIGITAL SIGNATURE --+\\n| Encryption: Plaintext -> [Encrypt with Receiver Public Key] -> Ciphertext\\n|             Ciphertext -> [Decrypt with Receiver Private Key] -> Plaintext\\n| Signature:  Document -> [SHA-256 Hash] -> [Sign with Sender Private Key] -> Signature\\n|             Verification: [Verify with Sender Public Key] -> Confirms Integrity & Origin",
        "applications": [
          "HTTPS web traffic encryption across global web servers.",
          "Cryptocurrency blockchain transactions and Bitcoin wallet signatures.",
          "Code signing for operating system kernel drivers and software updates."
        ],
        "examImportantPoints": [
          "Perform a complete RSA calculation: given small primes p=3, q=11, and e=7, calculate n, phi(n), private key d, encrypt M=2, and decrypt C.",
          "Compare symmetric vs asymmetric encryption across 5 factors: keys, speed, key distribution, algorithm examples, and use cases.",
          "Explain how a digital signature provides both integrity and non-repudiation."
        ],
        "quickRevisionNotes": [
          "Asymmetric: Public/private key pair (RSA, ECC), secure exchange.",
          "RSA formulas: C = M^e mod n; M = C^d mod n; d*e = 1 mod (p-1)(q-1).",
          "Digital signature = Hash encrypted with sender private key."
        ]
      }
    }
  },
  {
    "id": "cn-u5-t3",
    "subjectId": "cn",
    "unitId": "cn-u5",
    "unitNumber": 5,
    "unitTitle": "Application Layer & Network Security",
    "topicNumber": 3,
    "title": "Network Security Protocols & Firewalls (SSL/TLS, IPsec, Packet Filtering & Stateful Firewalls)",
    "objectives": [
      "Detail the SSL/TLS 1.2 and 1.3 cryptographic handshake steps and session key derivation.",
      "Compare IPsec operational modes (Transport vs Tunnel) and security headers (Authentication Header AH vs Encapsulating Security Payload ESP).",
      "Analyze firewall architectures: stateless packet filtering, stateful inspection, application proxies, and DMZ design."
    ],
    "keywords": [
      "Security Protocols",
      "SSL",
      "TLS Handshake",
      "IPsec",
      "AH",
      "ESP",
      "Firewall",
      "Packet Filter",
      "Stateful Inspection",
      "DMZ"
    ],
    "content": {
      "beginner": {
        "summary": "Network security protocols protect data at various layers of the stack: 1. SSL/TLS operates between Transport and Application layers, securing web tra...",
        "theory": "Network security protocols protect data at various layers of the stack: 1. SSL/TLS operates between Transport and Application layers, securing web traffic (HTTPS) via certificates and symmetric session keys. 2. IPsec operates at the Network layer, securing all IP traffic transparently between hosts or site-to-site Virtual Private Networks (VPNs). A Firewall is a network security device that monitors and filters incoming and outgoing traffic based on predetermined security rules. Stateless packet filters inspect individual IP/port headers independently; Stateful inspection firewalls track the state of active TCP connections; Application firewalls (WAF) inspect Layer 7 payload data.",
        "definitions": [
          {
            "term": "Stateful Inspection",
            "definition": "A firewall technology that monitors the state of active network connections in a state table, automatically permitting return traffic for established sessions."
          },
          {
            "term": "DMZ (Demilitarized Zone)",
            "definition": "A physical or logical subnetwork that exposes an organization external-facing services to an untrusted network while protecting internal LANs."
          },
          {
            "term": "IPsec ESP (Encapsulating Security Payload)",
            "definition": "An IPsec protocol that provides data confidentiality, origin authentication, integrity check, and anti-replay protection."
          }
        ],
        "keyConcepts": [
          {
            "title": "IPsec Tunnel Mode for Site-to-Site VPN",
            "explanation": "Branch office routers encrypt all company traffic entering the public internet and encapsulate it with gateway IP headers, decrypting it at HQ.",
            "example": "Individual employee workstations require zero VPN configuration."
          },
          {
            "title": "Stateless vs Stateful Firewall Table",
            "explanation": "A stateless firewall requires separate manual rules for outbound requests and inbound replies. A stateful firewall remembers the SYN and allows the return SYN-ACK automatically.",
            "example": "Prevents attackers from injecting fake unsolicited ACK packets."
          }
        ],
        "diagram": "+-- IPSEC TUNNEL vs TRANSPORT MODE & FIREWALL ZONES --+\\n| Transport Mode: [Original IP Header | ESP Header | Encrypted Payload | ESP Trailer]\\n| Tunnel Mode:    [New IP Header      | ESP Header | Encrypted [Orig IP + Payload]  ]\\n| DMZ Design:     [Internet] <-> [Firewall] <-> [DMZ: Web Server]\\n|                                    ^\\n|                                    +--------> [Internal Private LAN]",
        "applications": [
          "Enterprise site-to-site IPsec VPN interconnecting branch offices.",
          "Secure e-commerce payment processing over HTTPS/TLS 1.3.",
          "Corporate perimeter defense using perimeter DMZ firewalls."
        ],
        "examImportantPoints": [
          "Detail the step-by-step SSL/TLS handshake for connection setup and key exchange.",
          "Compare IPsec Transport Mode vs Tunnel Mode with packet diagrams.",
          "Differentiate Stateless Packet Filtering, Stateful Inspection, and Application-Level Gateway firewalls."
        ],
        "quickRevisionNotes": [
          "TLS: Secures L4/L7 (HTTPS), handshake negotiates session keys.",
          "IPsec AH (integrity only, proto 51); ESP (encryption + integrity, proto 50).",
          "IPsec Transport mode = host-to-host; Tunnel mode = gateway-to-gateway.",
          "Stateful firewall tracks connection state in a dynamic session table."
        ]
      },
      "intermediate": {
        "summary": "TLS 1.2 Handshake: 1. ClientHello (supported cipher suites, random number). 2. ServerHello (chosen cipher suite, server certificate, server random). 3...",
        "theory": "TLS 1.2 Handshake: 1. ClientHello (supported cipher suites, random number). 2. ServerHello (chosen cipher suite, server certificate, server random). 3. Client verifies certificate with Certificate Authority (CA) root public key, generates Pre-Master Secret, encrypts it with server public key, and sends it. 4. Both derive identical Master Secret session keys. 5. Finished messages encrypted with session key confirm secure link. IPsec provides two core protocols: Authentication Header (AH, protocol 51) provides integrity and authentication without encryption; Encapsulating Security Payload (ESP, protocol 50) provides confidentiality through encryption as well as authentication. In Tunnel Mode, the entire original IP packet is encrypted and enclosed inside a new IP header; in Transport Mode, only the payload is encrypted.",
        "definitions": [
          {
            "term": "Stateful Inspection",
            "definition": "A firewall technology that monitors the state of active network connections in a state table, automatically permitting return traffic for established sessions."
          },
          {
            "term": "DMZ (Demilitarized Zone)",
            "definition": "A physical or logical subnetwork that exposes an organization external-facing services to an untrusted network while protecting internal LANs."
          },
          {
            "term": "IPsec ESP (Encapsulating Security Payload)",
            "definition": "An IPsec protocol that provides data confidentiality, origin authentication, integrity check, and anti-replay protection."
          }
        ],
        "keyConcepts": [
          {
            "title": "IPsec Tunnel Mode for Site-to-Site VPN",
            "explanation": "Branch office routers encrypt all company traffic entering the public internet and encapsulate it with gateway IP headers, decrypting it at HQ.",
            "example": "Individual employee workstations require zero VPN configuration."
          },
          {
            "title": "Stateless vs Stateful Firewall Table",
            "explanation": "A stateless firewall requires separate manual rules for outbound requests and inbound replies. A stateful firewall remembers the SYN and allows the return SYN-ACK automatically.",
            "example": "Prevents attackers from injecting fake unsolicited ACK packets."
          }
        ],
        "diagram": "+-- IPSEC TUNNEL vs TRANSPORT MODE & FIREWALL ZONES --+\\n| Transport Mode: [Original IP Header | ESP Header | Encrypted Payload | ESP Trailer]\\n| Tunnel Mode:    [New IP Header      | ESP Header | Encrypted [Orig IP + Payload]  ]\\n| DMZ Design:     [Internet] <-> [Firewall] <-> [DMZ: Web Server]\\n|                                    ^\\n|                                    +--------> [Internal Private LAN]",
        "applications": [
          "Enterprise site-to-site IPsec VPN interconnecting branch offices.",
          "Secure e-commerce payment processing over HTTPS/TLS 1.3.",
          "Corporate perimeter defense using perimeter DMZ firewalls."
        ],
        "examImportantPoints": [
          "Detail the step-by-step SSL/TLS handshake for connection setup and key exchange.",
          "Compare IPsec Transport Mode vs Tunnel Mode with packet diagrams.",
          "Differentiate Stateless Packet Filtering, Stateful Inspection, and Application-Level Gateway firewalls."
        ],
        "quickRevisionNotes": [
          "TLS: Secures L4/L7 (HTTPS), handshake negotiates session keys.",
          "IPsec AH (integrity only, proto 51); ESP (encryption + integrity, proto 50).",
          "IPsec Transport mode = host-to-host; Tunnel mode = gateway-to-gateway."
        ]
      },
      "advanced": {
        "summary": "Demilitarized Zones (DMZs) isolate publicly accessible servers (web, mail) on a separate subnet between two firewall interfaces, preventing compromise...",
        "theory": "Demilitarized Zones (DMZs) isolate publicly accessible servers (web, mail) on a separate subnet between two firewall interfaces, preventing compromised public servers from directly accessing private internal LAN databases. Next-Generation Firewalls (NGFW) combine stateful inspection with deep packet inspection (DPI), intrusion prevention systems (IPS), and SSL/TLS decryption to defend against advanced persistent threats (APTs).",
        "definitions": [
          {
            "term": "Stateful Inspection",
            "definition": "A firewall technology that monitors the state of active network connections in a state table, automatically permitting return traffic for established sessions."
          },
          {
            "term": "DMZ (Demilitarized Zone)",
            "definition": "A physical or logical subnetwork that exposes an organization external-facing services to an untrusted network while protecting internal LANs."
          },
          {
            "term": "IPsec ESP (Encapsulating Security Payload)",
            "definition": "An IPsec protocol that provides data confidentiality, origin authentication, integrity check, and anti-replay protection."
          }
        ],
        "keyConcepts": [
          {
            "title": "IPsec Tunnel Mode for Site-to-Site VPN",
            "explanation": "Branch office routers encrypt all company traffic entering the public internet and encapsulate it with gateway IP headers, decrypting it at HQ.",
            "example": "Individual employee workstations require zero VPN configuration."
          },
          {
            "title": "Stateless vs Stateful Firewall Table",
            "explanation": "A stateless firewall requires separate manual rules for outbound requests and inbound replies. A stateful firewall remembers the SYN and allows the return SYN-ACK automatically.",
            "example": "Prevents attackers from injecting fake unsolicited ACK packets."
          }
        ],
        "diagram": "+-- IPSEC TUNNEL vs TRANSPORT MODE & FIREWALL ZONES --+\\n| Transport Mode: [Original IP Header | ESP Header | Encrypted Payload | ESP Trailer]\\n| Tunnel Mode:    [New IP Header      | ESP Header | Encrypted [Orig IP + Payload]  ]\\n| DMZ Design:     [Internet] <-> [Firewall] <-> [DMZ: Web Server]\\n|                                    ^\\n|                                    +--------> [Internal Private LAN]",
        "applications": [
          "Enterprise site-to-site IPsec VPN interconnecting branch offices.",
          "Secure e-commerce payment processing over HTTPS/TLS 1.3.",
          "Corporate perimeter defense using perimeter DMZ firewalls."
        ],
        "examImportantPoints": [
          "Detail the step-by-step SSL/TLS handshake for connection setup and key exchange.",
          "Compare IPsec Transport Mode vs Tunnel Mode with packet diagrams.",
          "Differentiate Stateless Packet Filtering, Stateful Inspection, and Application-Level Gateway firewalls."
        ],
        "quickRevisionNotes": [
          "IPsec AH (integrity only, proto 51); ESP (encryption + integrity, proto 50).",
          "IPsec Transport mode = host-to-host; Tunnel mode = gateway-to-gateway.",
          "Stateful firewall tracks connection state in a dynamic session table."
        ]
      }
    }
  }
];
