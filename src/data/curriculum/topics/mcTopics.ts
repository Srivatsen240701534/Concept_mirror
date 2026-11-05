import { Topic } from '../../../types';

export const MC_TOPICS: Topic[] = [
  {
    "id": "mc-u1-t1",
    "subjectId": "mc",
    "unitId": "mc-u1",
    "unitNumber": 1,
    "unitTitle": "Mobile Architecture & Cellular Fundamentals",
    "topicNumber": 1,
    "title": "Mobile Computing Paradigm, Challenges & 1G-to-5G Cellular Evolution",
    "objectives": [
      "Formulate the mobile computing paradigm and analyze hardware, bandwidth, battery, and security challenges.",
      "Trace the generational evolution of cellular networks from 1G analog voice to 5G New Radio (NR).",
      "Evaluate 5G service pillars: eMBB, URLLC, and mMTC."
    ],
    "keywords": [
      "Mobile Computing",
      "Mobility",
      "Wireless Channel",
      "Cellular Evolution",
      "1G",
      "2G",
      "3G",
      "4G LTE",
      "5G NR",
      "OFDMA"
    ],
    "content": {
      "beginner": {
        "summary": "Mobile Computing is an umbrella paradigm enabling the transmission of data, voice, and video via a computer or any other wireless-enabled device witho...",
        "theory": "Mobile Computing is an umbrella paradigm enabling the transmission of data, voice, and video via a computer or any other wireless-enabled device without having to be connected to a fixed physical link. Mobile computing merges three distinct components: Mobile Communication (wireless network infrastructure), Mobile Hardware (smartphones, wearables, portable transceivers), and Mobile Software (applications, location services, and adaptive operating systems). Key technical challenges include: 1. Bandwidth constraints and variable wireless link quality, 2. Finite battery power consumption, 3. Frequent disconnections and handoffs, 4. Physical security and location privacy risks, and 5. Device heterogeneity.",
        "definitions": [
          {
            "term": "Mobile Computing",
            "definition": "A computing paradigm that allows transmission of data, voice, and video via a wireless device without physical link tethering."
          },
          {
            "term": "eMBB (Enhanced Mobile Broadband)",
            "definition": "A 5G use case focusing on extreme high-throughput data rates and seamless wide-area coverage."
          },
          {
            "term": "Network Slicing",
            "definition": "A 5G architecture utilizing virtualization to create customized, isolated virtual networks atop shared physical infrastructure."
          }
        ],
        "keyConcepts": [
          {
            "title": "Constraints of Mobile Environments",
            "explanation": "Wired networks provide high, predictable bandwidth with low bit-error rates. Wireless links suffer multipath fading, Doppler shifts, interference, and dynamic attenuation.",
            "example": "Mobile protocols must adapt transmission rates and power dynamically."
          },
          {
            "title": "All-IP Core Network Shift",
            "explanation": "4G eliminated legacy circuit-switched voice cores entirely (replacing with IMS/VoLTE). All communications are routed as IP packets over a simplified flat architecture.",
            "example": "Lowers operating expenses and simplifies roaming."
          }
        ],
        "diagram": "+-- GENERATIONAL CELLULAR EVOLUTION TIMELINE --+\\n| 1G (1980s) -> Analog Voice, FDMA, 2.4 kbps (AMPS)\\n| 2G (1990s) -> Digital Voice + SMS, TDMA/CDMA, 64 kbps (GSM, GPRS)\\n| 3G (2000s) -> Mobile Broadband Data, WCDMA, 2 Mbps (UMTS)\\n| 4G (2010s) -> All-IP Network, OFDMA + MIMO, 100 Mbps (LTE-Advanced)\\n| 5G (2020s) -> eMBB + URLLC + mMTC, mmWave + Massive MIMO, 20 Gbps (5G NR)",
        "applications": [
          "Autonomous vehicle V2X (Vehicle-to-Everything) communications via 5G URLLC.",
          "Smart agriculture and smart city smart-meter monitoring via 5G mMTC.",
          "Telemedicine remote patient monitoring over cellular broadband."
        ],
        "examImportantPoints": [
          "Compare 1G, 2G, 3G, 4G, and 5G cellular technologies across: data rate, core architecture, multiplexing scheme, and primary services.",
          "Explain the three primary use cases of 5G New Radio: eMBB, URLLC, and mMTC.",
          "Describe four major hardware and communication constraints unique to mobile computing."
        ],
        "quickRevisionNotes": [
          "1G = Analog voice (FDMA).",
          "2G = Digital voice + SMS (TDMA/CDMA).",
          "3G = Mobile data (WCDMA).",
          "4G = All-IP (OFDMA + MIMO).",
          "5G = eMBB, URLLC, mMTC (mmWave, Network Slicing)."
        ]
      },
      "intermediate": {
        "summary": "Generational Evolution of Cellular Systems: 1. 1G (1980s): Analog circuit-switched frequency modulation (AMPS, TACS) for voice only, zero encryption, ...",
        "theory": "Generational Evolution of Cellular Systems: 1. 1G (1980s): Analog circuit-switched frequency modulation (AMPS, TACS) for voice only, zero encryption, low capacity, FDMA. 2. 2G (1990s): Digital voice and text messaging (GSM, CDMAOne/IS-95), TDMA/CDMA, introduced SMS, SIM cards, and basic encryption (A5/1). 3. 3G (2000s): Mobile broadband data (UMTS/WCDMA, CDMA2000), packet switching, video calling, up to 2 Mbps. 4. 4G LTE (2010s): All-IP packet-switched architecture, OFDMA modulation, MIMO multi-antenna transceivers, reaching 100 Mbps mobile and 1 Gbps stationary. 5. 5G NR (2020s): Sub-6 GHz and millimeter-wave (mmWave), massive MIMO, network slicing, beamforming, delivering peak rates of 20 Gbps with sub-1ms air-interface latency.",
        "definitions": [
          {
            "term": "Mobile Computing",
            "definition": "A computing paradigm that allows transmission of data, voice, and video via a wireless device without physical link tethering."
          },
          {
            "term": "eMBB (Enhanced Mobile Broadband)",
            "definition": "A 5G use case focusing on extreme high-throughput data rates and seamless wide-area coverage."
          },
          {
            "term": "Network Slicing",
            "definition": "A 5G architecture utilizing virtualization to create customized, isolated virtual networks atop shared physical infrastructure."
          }
        ],
        "keyConcepts": [
          {
            "title": "Constraints of Mobile Environments",
            "explanation": "Wired networks provide high, predictable bandwidth with low bit-error rates. Wireless links suffer multipath fading, Doppler shifts, interference, and dynamic attenuation.",
            "example": "Mobile protocols must adapt transmission rates and power dynamically."
          },
          {
            "title": "All-IP Core Network Shift",
            "explanation": "4G eliminated legacy circuit-switched voice cores entirely (replacing with IMS/VoLTE). All communications are routed as IP packets over a simplified flat architecture.",
            "example": "Lowers operating expenses and simplifies roaming."
          }
        ],
        "diagram": "+-- GENERATIONAL CELLULAR EVOLUTION TIMELINE --+\\n| 1G (1980s) -> Analog Voice, FDMA, 2.4 kbps (AMPS)\\n| 2G (1990s) -> Digital Voice + SMS, TDMA/CDMA, 64 kbps (GSM, GPRS)\\n| 3G (2000s) -> Mobile Broadband Data, WCDMA, 2 Mbps (UMTS)\\n| 4G (2010s) -> All-IP Network, OFDMA + MIMO, 100 Mbps (LTE-Advanced)\\n| 5G (2020s) -> eMBB + URLLC + mMTC, mmWave + Massive MIMO, 20 Gbps (5G NR)",
        "applications": [
          "Autonomous vehicle V2X (Vehicle-to-Everything) communications via 5G URLLC.",
          "Smart agriculture and smart city smart-meter monitoring via 5G mMTC.",
          "Telemedicine remote patient monitoring over cellular broadband."
        ],
        "examImportantPoints": [
          "Compare 1G, 2G, 3G, 4G, and 5G cellular technologies across: data rate, core architecture, multiplexing scheme, and primary services.",
          "Explain the three primary use cases of 5G New Radio: eMBB, URLLC, and mMTC.",
          "Describe four major hardware and communication constraints unique to mobile computing."
        ],
        "quickRevisionNotes": [
          "1G = Analog voice (FDMA).",
          "2G = Digital voice + SMS (TDMA/CDMA).",
          "3G = Mobile data (WCDMA)."
        ]
      },
      "advanced": {
        "summary": "5G introduces three formal service categories defined by ITU-R: 1. eMBB (Enhanced Mobile Broadband): Extreme data rates for 4K/8K video streaming and ...",
        "theory": "5G introduces three formal service categories defined by ITU-R: 1. eMBB (Enhanced Mobile Broadband): Extreme data rates for 4K/8K video streaming and VR/AR. 2. URLLC (Ultra-Reliable Low-Latency Communication): Sub-millisecond latency with 99.999% reliability for autonomous vehicles, industrial robotics, and telesurgery. 3. mMTC (Massive Machine-Type Communication): Supports up to 1 million IoT sensor connections per square kilometer with ultra-low battery power consumption. Network Slicing leverages SDN and NFV to partition a single physical 5G network into multiple isolated virtual end-to-end networks tailored to distinct QoS requirements.",
        "definitions": [
          {
            "term": "Mobile Computing",
            "definition": "A computing paradigm that allows transmission of data, voice, and video via a wireless device without physical link tethering."
          },
          {
            "term": "eMBB (Enhanced Mobile Broadband)",
            "definition": "A 5G use case focusing on extreme high-throughput data rates and seamless wide-area coverage."
          },
          {
            "term": "Network Slicing",
            "definition": "A 5G architecture utilizing virtualization to create customized, isolated virtual networks atop shared physical infrastructure."
          }
        ],
        "keyConcepts": [
          {
            "title": "Constraints of Mobile Environments",
            "explanation": "Wired networks provide high, predictable bandwidth with low bit-error rates. Wireless links suffer multipath fading, Doppler shifts, interference, and dynamic attenuation.",
            "example": "Mobile protocols must adapt transmission rates and power dynamically."
          },
          {
            "title": "All-IP Core Network Shift",
            "explanation": "4G eliminated legacy circuit-switched voice cores entirely (replacing with IMS/VoLTE). All communications are routed as IP packets over a simplified flat architecture.",
            "example": "Lowers operating expenses and simplifies roaming."
          }
        ],
        "diagram": "+-- GENERATIONAL CELLULAR EVOLUTION TIMELINE --+\\n| 1G (1980s) -> Analog Voice, FDMA, 2.4 kbps (AMPS)\\n| 2G (1990s) -> Digital Voice + SMS, TDMA/CDMA, 64 kbps (GSM, GPRS)\\n| 3G (2000s) -> Mobile Broadband Data, WCDMA, 2 Mbps (UMTS)\\n| 4G (2010s) -> All-IP Network, OFDMA + MIMO, 100 Mbps (LTE-Advanced)\\n| 5G (2020s) -> eMBB + URLLC + mMTC, mmWave + Massive MIMO, 20 Gbps (5G NR)",
        "applications": [
          "Autonomous vehicle V2X (Vehicle-to-Everything) communications via 5G URLLC.",
          "Smart agriculture and smart city smart-meter monitoring via 5G mMTC.",
          "Telemedicine remote patient monitoring over cellular broadband."
        ],
        "examImportantPoints": [
          "Compare 1G, 2G, 3G, 4G, and 5G cellular technologies across: data rate, core architecture, multiplexing scheme, and primary services.",
          "Explain the three primary use cases of 5G New Radio: eMBB, URLLC, and mMTC.",
          "Describe four major hardware and communication constraints unique to mobile computing."
        ],
        "quickRevisionNotes": [
          "2G = Digital voice + SMS (TDMA/CDMA).",
          "3G = Mobile data (WCDMA).",
          "4G = All-IP (OFDMA + MIMO)."
        ]
      }
    }
  },
  {
    "id": "mc-u1-t2",
    "subjectId": "mc",
    "unitId": "mc-u1",
    "unitNumber": 1,
    "unitTitle": "Mobile Architecture & Cellular Fundamentals",
    "topicNumber": 2,
    "title": "Cellular System Architecture, Hexagonal Geometry & Frequency Reuse",
    "objectives": [
      "Formulate the cellular concept, hexagonal cell geometry, and the mathematical frequency reuse ratio.",
      "Calculate Cluster Size N using shift parameters i and j (N = i^2 + ij + j^2).",
      "Analyze Co-Channel Interference (CCI), Signal-to-Interference Ratio (SIR), and cell capacity expansion techniques (Cell Splitting and Sectoring)."
    ],
    "keywords": [
      "Cellular",
      "Hexagonal Cell",
      "Frequency Reuse",
      "Cluster Size",
      "Co-Channel Interference",
      "SIR",
      "Cell Splitting",
      "Sectoring",
      "Capacity"
    ],
    "content": {
      "beginner": {
        "summary": "Prior to the cellular concept, mobile communications used single high-powered central broadcast antennas covering entire cities, supporting fewer than...",
        "theory": "Prior to the cellular concept, mobile communications used single high-powered central broadcast antennas covering entire cities, supporting fewer than 50 simultaneous calls due to spectrum limits. The Cellular Concept solved this by dividing geographic coverage into small regions called Cells, each served by a low-power Base Station (BS). By treating cells as Hexagons (which tessellate the Euclidean plane without gaps or overlaps and provide equal distances to adjacent neighbors), identical radio frequency channels can be reused in different cells separated by a safe geographic buffer distance, multiplying system capacity indefinitely.",
        "definitions": [
          {
            "term": "Frequency Reuse",
            "definition": "The design technique of using the same radio frequency channels in disparate geographic cell sites separated by sufficient distance to avoid co-channel interference."
          },
          {
            "term": "Cluster Size (N)",
            "definition": "The smallest group of neighboring cells that together utilize the full allocation of radio spectrum without frequency reuse."
          },
          {
            "term": "Co-Channel Interference (CCI)",
            "definition": "Radio frequency interference caused by signals from other base stations operating on the exact same frequency channels."
          }
        ],
        "keyConcepts": [
          {
            "title": "Locating Co-Channel Neighbors Step-by-Step",
            "explanation": "To find the nearest co-channel cells for cluster size N(i, j): 1. Move i cells along any hexagon face. 2. Turn 60 degrees counter-clockwise and move j cells.",
            "example": "For N=7 (i=2, j=1): move 2 cells forward, turn 60 degrees, move 1 cell."
          },
          {
            "title": "Cell Sectoring Interference Reduction",
            "explanation": "A 120-degree sector antenna radiates only into one third of the cell. Instead of 6 co-channel interferers illuminating a mobile receiver, only 2 interferers hit the sector, tripling SIR.",
            "example": "Allows tighter frequency reuse clusters without dropping calls."
          }
        ],
        "diagram": "+-- HEXAGONAL FREQUENCY REUSE CLUSTER (N = 7) --+\\n|           / \\\\     / \\\\     / \\\\\\n|          | A |---| B |---| C |\\n|         / \\\\ / \\\\ / \\\\ / \\\\ / \\\\\\n|        | G |---| D |---| E |---| A (Co-channel reuse!)\\n|         \\\\ / \\\\ / \\\\ / \\\\ / \\\\ /\\n|          | F |---| A |---| B |\\n| N = i^2 + ij + j^2 (For i=2, j=1 -> N = 4 + 2 + 1 = 7)\\n| Co-Channel Distance D = R * sqrt(3N)",
        "applications": [
          "Commercial 4G/5G mobile cellular network radio frequency planning.",
          "Private campus LTE networks in industrial refineries and ports.",
          "Public safety emergency responder P25 digital trunked radio systems."
        ],
        "examImportantPoints": [
          "Prove that the valid cluster size in a hexagonal geometry is N = i^2 + ij + j^2 and calculate N for (i=2, j=1) and (i=3, j=0).",
          "Derive the formula for Co-Channel Reuse Ratio Q = D/R = sqrt(3N).",
          "Compare Cell Splitting and Cell Sectoring in terms of capacity gain, antenna requirements, and handoff frequency."
        ],
        "quickRevisionNotes": [
          "Hexagons tessellate space without overlap.",
          "Cluster size N = i^2 + ij + j^2 (3, 4, 7, 12).",
          "Co-channel distance D = R * sqrt(3N).",
          "Worst case SIR = (sqrt(3N))^n / 6 (with 6 first-tier interferers).",
          "Capacity increase: Cell Splitting (smaller cells) & Sectoring (directional antennas)."
        ]
      },
      "intermediate": {
        "summary": "A Cluster is a group of N adjacent cells that collectively use the complete set of available radio frequencies. The Cluster Size N must satisfy the ge...",
        "theory": "A Cluster is a group of N adjacent cells that collectively use the complete set of available radio frequencies. The Cluster Size N must satisfy the geometric tessellation equation: N = i^2 + i*j + j^2, where i and j are non-negative integers (yielding valid cluster sizes N = 3, 4, 7, 12, 19...). The Frequency Reuse Factor is 1/N. If total allocated bandwidth supports S duplex channels, each cell is assigned k = S / N channels. The Co-Channel Reuse Ratio Q is defined as: Q = D / R = sqrt(3N), where D is the distance between centers of nearest co-channel cells, and R is the cell radius. Higher Q reduces Co-Channel Interference (CCI) at the expense of lower capacity per unit area.",
        "definitions": [
          {
            "term": "Frequency Reuse",
            "definition": "The design technique of using the same radio frequency channels in disparate geographic cell sites separated by sufficient distance to avoid co-channel interference."
          },
          {
            "term": "Cluster Size (N)",
            "definition": "The smallest group of neighboring cells that together utilize the full allocation of radio spectrum without frequency reuse."
          },
          {
            "term": "Co-Channel Interference (CCI)",
            "definition": "Radio frequency interference caused by signals from other base stations operating on the exact same frequency channels."
          }
        ],
        "keyConcepts": [
          {
            "title": "Locating Co-Channel Neighbors Step-by-Step",
            "explanation": "To find the nearest co-channel cells for cluster size N(i, j): 1. Move i cells along any hexagon face. 2. Turn 60 degrees counter-clockwise and move j cells.",
            "example": "For N=7 (i=2, j=1): move 2 cells forward, turn 60 degrees, move 1 cell."
          },
          {
            "title": "Cell Sectoring Interference Reduction",
            "explanation": "A 120-degree sector antenna radiates only into one third of the cell. Instead of 6 co-channel interferers illuminating a mobile receiver, only 2 interferers hit the sector, tripling SIR.",
            "example": "Allows tighter frequency reuse clusters without dropping calls."
          }
        ],
        "diagram": "+-- HEXAGONAL FREQUENCY REUSE CLUSTER (N = 7) --+\\n|           / \\\\     / \\\\     / \\\\\\n|          | A |---| B |---| C |\\n|         / \\\\ / \\\\ / \\\\ / \\\\ / \\\\\\n|        | G |---| D |---| E |---| A (Co-channel reuse!)\\n|         \\\\ / \\\\ / \\\\ / \\\\ / \\\\ /\\n|          | F |---| A |---| B |\\n| N = i^2 + ij + j^2 (For i=2, j=1 -> N = 4 + 2 + 1 = 7)\\n| Co-Channel Distance D = R * sqrt(3N)",
        "applications": [
          "Commercial 4G/5G mobile cellular network radio frequency planning.",
          "Private campus LTE networks in industrial refineries and ports.",
          "Public safety emergency responder P25 digital trunked radio systems."
        ],
        "examImportantPoints": [
          "Prove that the valid cluster size in a hexagonal geometry is N = i^2 + ij + j^2 and calculate N for (i=2, j=1) and (i=3, j=0).",
          "Derive the formula for Co-Channel Reuse Ratio Q = D/R = sqrt(3N).",
          "Compare Cell Splitting and Cell Sectoring in terms of capacity gain, antenna requirements, and handoff frequency."
        ],
        "quickRevisionNotes": [
          "Hexagons tessellate space without overlap.",
          "Cluster size N = i^2 + ij + j^2 (3, 4, 7, 12).",
          "Co-channel distance D = R * sqrt(3N)."
        ]
      },
      "advanced": {
        "summary": "In a first-tier hexagonal cellular layout with 6 co-channel interferers, the worst-case Signal-to-Interference Ratio (SIR) is given by: SIR = (D / R)^...",
        "theory": "In a first-tier hexagonal cellular layout with 6 co-channel interferers, the worst-case Signal-to-Interference Ratio (SIR) is given by: SIR = (D / R)^n / 6 = (sqrt(3N))^n / 6, where n is the path loss exponent (typically 3 to 4). When cellular subscriber traffic grows, capacity is expanded via: 1. Cell Splitting: Subdividing congested microcells into smaller cells, reducing transmitter power and radius R to increase frequency reuse per square kilometer. 2. Cell Sectoring: Replacing omnidirectional antennas with 120-degree or 60-degree directional antennas, reducing the number of interfering co-channel base stations from 6 to 2 (for 120-degree sectoring).",
        "definitions": [
          {
            "term": "Frequency Reuse",
            "definition": "The design technique of using the same radio frequency channels in disparate geographic cell sites separated by sufficient distance to avoid co-channel interference."
          },
          {
            "term": "Cluster Size (N)",
            "definition": "The smallest group of neighboring cells that together utilize the full allocation of radio spectrum without frequency reuse."
          },
          {
            "term": "Co-Channel Interference (CCI)",
            "definition": "Radio frequency interference caused by signals from other base stations operating on the exact same frequency channels."
          }
        ],
        "keyConcepts": [
          {
            "title": "Locating Co-Channel Neighbors Step-by-Step",
            "explanation": "To find the nearest co-channel cells for cluster size N(i, j): 1. Move i cells along any hexagon face. 2. Turn 60 degrees counter-clockwise and move j cells.",
            "example": "For N=7 (i=2, j=1): move 2 cells forward, turn 60 degrees, move 1 cell."
          },
          {
            "title": "Cell Sectoring Interference Reduction",
            "explanation": "A 120-degree sector antenna radiates only into one third of the cell. Instead of 6 co-channel interferers illuminating a mobile receiver, only 2 interferers hit the sector, tripling SIR.",
            "example": "Allows tighter frequency reuse clusters without dropping calls."
          }
        ],
        "diagram": "+-- HEXAGONAL FREQUENCY REUSE CLUSTER (N = 7) --+\\n|           / \\\\     / \\\\     / \\\\\\n|          | A |---| B |---| C |\\n|         / \\\\ / \\\\ / \\\\ / \\\\ / \\\\\\n|        | G |---| D |---| E |---| A (Co-channel reuse!)\\n|         \\\\ / \\\\ / \\\\ / \\\\ / \\\\ /\\n|          | F |---| A |---| B |\\n| N = i^2 + ij + j^2 (For i=2, j=1 -> N = 4 + 2 + 1 = 7)\\n| Co-Channel Distance D = R * sqrt(3N)",
        "applications": [
          "Commercial 4G/5G mobile cellular network radio frequency planning.",
          "Private campus LTE networks in industrial refineries and ports.",
          "Public safety emergency responder P25 digital trunked radio systems."
        ],
        "examImportantPoints": [
          "Prove that the valid cluster size in a hexagonal geometry is N = i^2 + ij + j^2 and calculate N for (i=2, j=1) and (i=3, j=0).",
          "Derive the formula for Co-Channel Reuse Ratio Q = D/R = sqrt(3N).",
          "Compare Cell Splitting and Cell Sectoring in terms of capacity gain, antenna requirements, and handoff frequency."
        ],
        "quickRevisionNotes": [
          "Cluster size N = i^2 + ij + j^2 (3, 4, 7, 12).",
          "Co-channel distance D = R * sqrt(3N).",
          "Worst case SIR = (sqrt(3N))^n / 6 (with 6 first-tier interferers)."
        ]
      }
    }
  },
  {
    "id": "mc-u1-t3",
    "subjectId": "mc",
    "unitId": "mc-u1",
    "unitNumber": 1,
    "unitTitle": "Mobile Architecture & Cellular Fundamentals",
    "topicNumber": 3,
    "title": "Channel Assignment Strategies & Cellular Handoff Mechanisms (Hard vs Soft)",
    "objectives": [
      "Compare Fixed Channel Assignment (FCA) and Dynamic Channel Assignment (DCA) strategies.",
      "Analyze handoff initiation criteria: received signal strength (RSS), thresholding, and hysteresis margin.",
      "Differentiate Hard Handoff (Break-before-Make) in GSM/LTE from Soft Handoff (Make-before-Break) in CDMA."
    ],
    "keywords": [
      "Handoff",
      "Handover",
      "Hard Handoff",
      "Soft Handoff",
      "Fixed Channel Assignment",
      "Dynamic Channel Assignment",
      "FCA",
      "DCA",
      "Hysteresis",
      "Break-before-Make"
    ],
    "content": {
      "beginner": {
        "summary": "As a mobile subscriber moves across cellular cell boundaries during an active telephone call or data session, the connection must be transferred seaml...",
        "theory": "As a mobile subscriber moves across cellular cell boundaries during an active telephone call or data session, the connection must be transferred seamlessly from the serving base station to a new target base station without call termination: this process is called Handoff (or Handover). To allocate radio resources to cells, operators employ Channel Assignment Strategies: 1. Fixed Channel Assignment (FCA): Each cell is pre-allocated a constant set of nominal channels; if all channels are occupied, calls are blocked (borrowing algorithms allow borrowing from idle neighbors). 2. Dynamic Channel Assignment (DCA): Channels are not permanently assigned to cells; instead, a central Mobile Switching Center (MSC) allocates channels on demand, optimizing utilization under fluctuating traffic.",
        "definitions": [
          {
            "term": "Handoff / Handover",
            "definition": "The operational process of transferring an ongoing call or data session from one cell channel or base station to another without user disruption."
          },
          {
            "term": "Ping-Pong Effect",
            "definition": "Unwanted rapid back-and-forth handoffs between adjacent base stations caused by momentary signal fluctuations."
          },
          {
            "term": "Soft Handoff",
            "definition": "A make-before-break handoff where the mobile device communicates with two base stations simultaneously on identical frequencies."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Call Dropping is Worse Than Call Blocking",
            "explanation": "A blocked new call means the user redials later. A dropped active call interrupts an established conversation, causing acute user dissatisfaction.",
            "example": "Networks dedicate Guard Channels to guarantee handoff calls have higher admission priority."
          },
          {
            "title": "Mobile-Assisted Handoff (MAHO)",
            "explanation": "In legacy networks, the base station monitored signal levels (Network-Controlled Handoff). In MAHO, the handset continuously measures neighbor RSS and reports to the base station.",
            "example": "Reduces handoff latency from seconds to under 100 milliseconds."
          }
        ],
        "diagram": "+-- HANDOFF TRIGGERING WITH HYSTERESIS MARGIN --+\\n| Signal ^\\n|        |   [ Base Station A Signal ]           [ Base Station B Signal ]\\n|        |           \\\\                                 /\\n|        |            \\\\            Hysteresis Delta   /\\n|        |             \\\\           |<--------------->/\\n|        |              \\\\          |                /\\n|        |               \\\\---------+---------------/   <-- HANDOFF EXECUTED HERE!\\n|        |                \\\\        |              /\\n|        |                 \\\\       |             /\\n|        +------------------+-------+------------+--------> Distance\\n|                          Threshold",
        "applications": [
          "High-speed rail cellular connectivity maintaining calls at 300 km/h.",
          "VoLTE (Voice over LTE) seamless voice handoffs to Wi-Fi calling (ePDG).",
          "Cellular vehicle-to-infrastructure handoff orchestration."
        ],
        "examImportantPoints": [
          "Differentiate Hard Handoff and Soft Handoff across mechanism, network types, frequency usage, and advantages/disadvantages.",
          "Explain the necessity of a Hysteresis Margin in preventing the Ping-Pong effect with a signal diagram.",
          "Compare Fixed Channel Assignment (FCA) and Dynamic Channel Assignment (DCA)."
        ],
        "quickRevisionNotes": [
          "Hard Handoff = Break-before-Make (GSM, LTE).",
          "Soft Handoff = Make-before-Break (CDMA).",
          "Hysteresis margin Delta prevents Ping-Pong handoffs.",
          "Guard channels prioritize handoff calls over new incoming calls."
        ]
      },
      "intermediate": {
        "summary": "Handoff decision metrics evaluate Received Signal Strength (RSS). A naive handoff triggers whenever RSS_target > RSS_current, causing the \"Ping-Pong E...",
        "theory": "Handoff decision metrics evaluate Received Signal Strength (RSS). A naive handoff triggers whenever RSS_target > RSS_current, causing the \"Ping-Pong Effect\" (rapid, wasteful oscillating handoffs caused by shadow fading). To eliminate this, modern networks employ a Hysteresis Margin (Delta):\\nHandoff occurs iff RSS_target > RSS_current + Delta, AND RSS_current < Threshold.\\nTwo primary handoff classifications exist: 1. Hard Handoff: \"Break-before-Make\". The mobile device releases the radio link with the current base station before establishing the link with the target base station (brief micro-interruption, used in FDMA/TDMA systems like GSM, LTE). 2. Soft Handoff: \"Make-before-Break\". The mobile communicates simultaneously with two or more base stations over the same frequency channel (using rake receivers and macroscopic diversity), combining signals until the target link is dominant (used in CDMA and 3G WCDMA).",
        "definitions": [
          {
            "term": "Handoff / Handover",
            "definition": "The operational process of transferring an ongoing call or data session from one cell channel or base station to another without user disruption."
          },
          {
            "term": "Ping-Pong Effect",
            "definition": "Unwanted rapid back-and-forth handoffs between adjacent base stations caused by momentary signal fluctuations."
          },
          {
            "term": "Soft Handoff",
            "definition": "A make-before-break handoff where the mobile device communicates with two base stations simultaneously on identical frequencies."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Call Dropping is Worse Than Call Blocking",
            "explanation": "A blocked new call means the user redials later. A dropped active call interrupts an established conversation, causing acute user dissatisfaction.",
            "example": "Networks dedicate Guard Channels to guarantee handoff calls have higher admission priority."
          },
          {
            "title": "Mobile-Assisted Handoff (MAHO)",
            "explanation": "In legacy networks, the base station monitored signal levels (Network-Controlled Handoff). In MAHO, the handset continuously measures neighbor RSS and reports to the base station.",
            "example": "Reduces handoff latency from seconds to under 100 milliseconds."
          }
        ],
        "diagram": "+-- HANDOFF TRIGGERING WITH HYSTERESIS MARGIN --+\\n| Signal ^\\n|        |   [ Base Station A Signal ]           [ Base Station B Signal ]\\n|        |           \\\\                                 /\\n|        |            \\\\            Hysteresis Delta   /\\n|        |             \\\\           |<--------------->/\\n|        |              \\\\          |                /\\n|        |               \\\\---------+---------------/   <-- HANDOFF EXECUTED HERE!\\n|        |                \\\\        |              /\\n|        |                 \\\\       |             /\\n|        +------------------+-------+------------+--------> Distance\\n|                          Threshold",
        "applications": [
          "High-speed rail cellular connectivity maintaining calls at 300 km/h.",
          "VoLTE (Voice over LTE) seamless voice handoffs to Wi-Fi calling (ePDG).",
          "Cellular vehicle-to-infrastructure handoff orchestration."
        ],
        "examImportantPoints": [
          "Differentiate Hard Handoff and Soft Handoff across mechanism, network types, frequency usage, and advantages/disadvantages.",
          "Explain the necessity of a Hysteresis Margin in preventing the Ping-Pong effect with a signal diagram.",
          "Compare Fixed Channel Assignment (FCA) and Dynamic Channel Assignment (DCA)."
        ],
        "quickRevisionNotes": [
          "Hard Handoff = Break-before-Make (GSM, LTE).",
          "Soft Handoff = Make-before-Break (CDMA).",
          "Hysteresis margin Delta prevents Ping-Pong handoffs."
        ]
      },
      "advanced": {
        "summary": "In modern heterogeneous networks (HetNets) comprising macrocells overlaid with microcells, picocells, and femtocells, Handoff Priority Schemes are vit...",
        "theory": "In modern heterogeneous networks (HetNets) comprising macrocells overlaid with microcells, picocells, and femtocells, Handoff Priority Schemes are vital to ensure user satisfaction: Call Dropping is considered far more annoying than Call Blocking. Guard Channels reserve a fraction of total cell channels exclusively for incoming handoff requests. Queuing of Handoff Requests buffers handoffs during temporary traffic peaks, exploiting the time window between the handoff threshold and the minimum acceptable receiver sensitivity.",
        "definitions": [
          {
            "term": "Handoff / Handover",
            "definition": "The operational process of transferring an ongoing call or data session from one cell channel or base station to another without user disruption."
          },
          {
            "term": "Ping-Pong Effect",
            "definition": "Unwanted rapid back-and-forth handoffs between adjacent base stations caused by momentary signal fluctuations."
          },
          {
            "term": "Soft Handoff",
            "definition": "A make-before-break handoff where the mobile device communicates with two base stations simultaneously on identical frequencies."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why Call Dropping is Worse Than Call Blocking",
            "explanation": "A blocked new call means the user redials later. A dropped active call interrupts an established conversation, causing acute user dissatisfaction.",
            "example": "Networks dedicate Guard Channels to guarantee handoff calls have higher admission priority."
          },
          {
            "title": "Mobile-Assisted Handoff (MAHO)",
            "explanation": "In legacy networks, the base station monitored signal levels (Network-Controlled Handoff). In MAHO, the handset continuously measures neighbor RSS and reports to the base station.",
            "example": "Reduces handoff latency from seconds to under 100 milliseconds."
          }
        ],
        "diagram": "+-- HANDOFF TRIGGERING WITH HYSTERESIS MARGIN --+\\n| Signal ^\\n|        |   [ Base Station A Signal ]           [ Base Station B Signal ]\\n|        |           \\\\                                 /\\n|        |            \\\\            Hysteresis Delta   /\\n|        |             \\\\           |<--------------->/\\n|        |              \\\\          |                /\\n|        |               \\\\---------+---------------/   <-- HANDOFF EXECUTED HERE!\\n|        |                \\\\        |              /\\n|        |                 \\\\       |             /\\n|        +------------------+-------+------------+--------> Distance\\n|                          Threshold",
        "applications": [
          "High-speed rail cellular connectivity maintaining calls at 300 km/h.",
          "VoLTE (Voice over LTE) seamless voice handoffs to Wi-Fi calling (ePDG).",
          "Cellular vehicle-to-infrastructure handoff orchestration."
        ],
        "examImportantPoints": [
          "Differentiate Hard Handoff and Soft Handoff across mechanism, network types, frequency usage, and advantages/disadvantages.",
          "Explain the necessity of a Hysteresis Margin in preventing the Ping-Pong effect with a signal diagram.",
          "Compare Fixed Channel Assignment (FCA) and Dynamic Channel Assignment (DCA)."
        ],
        "quickRevisionNotes": [
          "Soft Handoff = Make-before-Break (CDMA).",
          "Hysteresis margin Delta prevents Ping-Pong handoffs.",
          "Guard channels prioritize handoff calls over new incoming calls."
        ]
      }
    }
  },
  {
    "id": "mc-u2-t1",
    "subjectId": "mc",
    "unitId": "mc-u2",
    "unitNumber": 2,
    "unitTitle": "Wireless MAC & Telecommunication Systems",
    "topicNumber": 1,
    "title": "Wireless MAC Issues (Hidden & Exposed Terminal, Near-Far Problem, MACA)",
    "objectives": [
      "Analyze fundamental wireless physical constraints preventing traditional CSMA/CD execution.",
      "Formulate the Hidden Terminal Problem and Exposed Terminal Problem with geometric node topologies.",
      "Implement the MACA (Multiple Access with Collision Avoidance) protocol using RTS/CTS dialogue frames."
    ],
    "keywords": [
      "Wireless MAC",
      "Hidden Terminal",
      "Exposed Terminal",
      "Near-Far Problem",
      "MACA",
      "MACAW",
      "RTS/CTS",
      "CSMA/CA",
      "Capture Effect"
    ],
    "content": {
      "beginner": {
        "summary": "Traditional wired Ethernet uses CSMA/CD (Collision Detection): a station listens to the shared cable while transmitting, detecting collisions immediat...",
        "theory": "Traditional wired Ethernet uses CSMA/CD (Collision Detection): a station listens to the shared cable while transmitting, detecting collisions immediately if voltage spikes. In wireless networks, CSMA/CD is physically impossible for two reasons: 1. A wireless radio transmission power completely overpowers its sensitive receiver electronics, blinding the station from detecting incoming colliding signals while transmitting. 2. Radio waves attenuate rapidly with distance (inverse-square or inverse-fourth law), meaning collisions occur at the RECEIVER, not at the sender! This gives rise to the classic wireless MAC challenges: the Hidden Terminal Problem, the Exposed Terminal Problem, and the Near-Far Problem.",
        "definitions": [
          {
            "term": "Hidden Terminal Problem",
            "definition": "A condition in wireless networks where two stations cannot detect each other carrier, transmitting simultaneously and causing collisions at a mutual receiver."
          },
          {
            "term": "Exposed Terminal Problem",
            "definition": "A condition where a station refrains from transmitting to an unrelated node because it overhears an active transmission to another receiver."
          },
          {
            "term": "MACA (Multiple Access with Collision Avoidance)",
            "definition": "A channel access protocol that uses RTS and CTS control frames to reserve the medium and prevent collisions."
          }
        ],
        "keyConcepts": [
          {
            "title": "Collisions Occur at the Receiver",
            "explanation": "In wireless communication, what the transmitter hears is irrelevant. What matters is the signal-to-interference ratio at the receiving antenna.",
            "example": "RTS/CTS explicitly verifies channel readiness at the receiver."
          },
          {
            "title": "RTS/CTS Overhead Trade-off",
            "explanation": "Sending RTS and CTS frames consumes channel capacity. Wi-Fi drivers use an \"RTS Threshold\" (e.g. 2347 bytes): only packets larger than the threshold use RTS/CTS.",
            "example": "Short packets transmit directly via CSMA/CA to avoid handshake overhead."
          }
        ],
        "diagram": "+-- HIDDEN & EXPOSED TERMINAL SCENARIOS --+\\n| Hidden Terminal:  [Station A] ---> [Station B] <--- [Station C]\\n|                   (A and C cannot hear each other; collision occurs at B!)\\n|\\n| Exposed Terminal: [Station A] <--- [Station B]      [Station C] ---> [Station D]\\n|                   (C hears B transmitting and needlessly stays silent!)",
        "applications": [
          "IEEE 802.11 Wi-Fi Distributed Coordination Function (DCF).",
          "Wireless sensor networks operating in dense mesh topologies (ZigBee).",
          "Underwater acoustic sensor networks."
        ],
        "examImportantPoints": [
          "Explain the Hidden Terminal Problem and Exposed Terminal Problem with clear node diagrams.",
          "Explain why CSMA/CD cannot be used in wireless radio networks.",
          "Describe how the MACA RTS/CTS handshake solves both the hidden and exposed terminal problems."
        ],
        "quickRevisionNotes": [
          "CSMA/CD fails in wireless (cannot transmit and listen simultaneously; attenuation).",
          "Hidden Terminal: A and C collide at B (solved by CTS broadcast).",
          "Exposed Terminal: C needlessly waits while B talks to A (solved by hearing RTS only).",
          "MACA sequence: RTS -> CTS -> Data -> ACK."
        ]
      },
      "intermediate": {
        "summary": "1. Hidden Terminal Problem: Node A communicates with Node B. Node C wants to transmit to Node B. A and C are out of radio range of each other (\"hidden...",
        "theory": "1. Hidden Terminal Problem: Node A communicates with Node B. Node C wants to transmit to Node B. A and C are out of radio range of each other (\"hidden\"), so C carrier senses the air, hears silence, and begins transmitting to B. Both transmissions collide at intermediate Node B, destroying both frames. 2. Exposed Terminal Problem: Node B is transmitting to Node A. Node C wants to transmit to Node D (outside A range). C senses B transmission and unnecessarily refrains from transmitting, wasting available spatial channel capacity. 3. Near-Far Problem: A strong signal from a nearby transmitter drowns out a weak signal from a distant transmitter at the base station, mitigated in CDMA by rapid closed-loop power control.",
        "definitions": [
          {
            "term": "Hidden Terminal Problem",
            "definition": "A condition in wireless networks where two stations cannot detect each other carrier, transmitting simultaneously and causing collisions at a mutual receiver."
          },
          {
            "term": "Exposed Terminal Problem",
            "definition": "A condition where a station refrains from transmitting to an unrelated node because it overhears an active transmission to another receiver."
          },
          {
            "term": "MACA (Multiple Access with Collision Avoidance)",
            "definition": "A channel access protocol that uses RTS and CTS control frames to reserve the medium and prevent collisions."
          }
        ],
        "keyConcepts": [
          {
            "title": "Collisions Occur at the Receiver",
            "explanation": "In wireless communication, what the transmitter hears is irrelevant. What matters is the signal-to-interference ratio at the receiving antenna.",
            "example": "RTS/CTS explicitly verifies channel readiness at the receiver."
          },
          {
            "title": "RTS/CTS Overhead Trade-off",
            "explanation": "Sending RTS and CTS frames consumes channel capacity. Wi-Fi drivers use an \"RTS Threshold\" (e.g. 2347 bytes): only packets larger than the threshold use RTS/CTS.",
            "example": "Short packets transmit directly via CSMA/CA to avoid handshake overhead."
          }
        ],
        "diagram": "+-- HIDDEN & EXPOSED TERMINAL SCENARIOS --+\\n| Hidden Terminal:  [Station A] ---> [Station B] <--- [Station C]\\n|                   (A and C cannot hear each other; collision occurs at B!)\\n|\\n| Exposed Terminal: [Station A] <--- [Station B]      [Station C] ---> [Station D]\\n|                   (C hears B transmitting and needlessly stays silent!)",
        "applications": [
          "IEEE 802.11 Wi-Fi Distributed Coordination Function (DCF).",
          "Wireless sensor networks operating in dense mesh topologies (ZigBee).",
          "Underwater acoustic sensor networks."
        ],
        "examImportantPoints": [
          "Explain the Hidden Terminal Problem and Exposed Terminal Problem with clear node diagrams.",
          "Explain why CSMA/CD cannot be used in wireless radio networks.",
          "Describe how the MACA RTS/CTS handshake solves both the hidden and exposed terminal problems."
        ],
        "quickRevisionNotes": [
          "CSMA/CD fails in wireless (cannot transmit and listen simultaneously; attenuation).",
          "Hidden Terminal: A and C collide at B (solved by CTS broadcast).",
          "Exposed Terminal: C needlessly waits while B talks to A (solved by hearing RTS only)."
        ]
      },
      "advanced": {
        "summary": "MACA (Multiple Access with Collision Avoidance) solves the Hidden and Exposed terminal problems using explicit 4-way handshaking: 1. Sender A transmit...",
        "theory": "MACA (Multiple Access with Collision Avoidance) solves the Hidden and Exposed terminal problems using explicit 4-way handshaking: 1. Sender A transmits a short Request-to-Send (RTS) frame indicating payload duration. 2. Receiver B replies with a Clear-to-Send (CTS) frame echoing the duration. 3. Hidden node C hears the CTS and defers transmission for the specified Network Allocation Vector (NAV) duration. 4. Exposed node hearing only RTS (and no CTS) knows its transmission will not collide at receiver B and can transmit concurrently. MACAW refined MACA by adding an explicit Data-ACK frame and backoff synchronization.",
        "definitions": [
          {
            "term": "Hidden Terminal Problem",
            "definition": "A condition in wireless networks where two stations cannot detect each other carrier, transmitting simultaneously and causing collisions at a mutual receiver."
          },
          {
            "term": "Exposed Terminal Problem",
            "definition": "A condition where a station refrains from transmitting to an unrelated node because it overhears an active transmission to another receiver."
          },
          {
            "term": "MACA (Multiple Access with Collision Avoidance)",
            "definition": "A channel access protocol that uses RTS and CTS control frames to reserve the medium and prevent collisions."
          }
        ],
        "keyConcepts": [
          {
            "title": "Collisions Occur at the Receiver",
            "explanation": "In wireless communication, what the transmitter hears is irrelevant. What matters is the signal-to-interference ratio at the receiving antenna.",
            "example": "RTS/CTS explicitly verifies channel readiness at the receiver."
          },
          {
            "title": "RTS/CTS Overhead Trade-off",
            "explanation": "Sending RTS and CTS frames consumes channel capacity. Wi-Fi drivers use an \"RTS Threshold\" (e.g. 2347 bytes): only packets larger than the threshold use RTS/CTS.",
            "example": "Short packets transmit directly via CSMA/CA to avoid handshake overhead."
          }
        ],
        "diagram": "+-- HIDDEN & EXPOSED TERMINAL SCENARIOS --+\\n| Hidden Terminal:  [Station A] ---> [Station B] <--- [Station C]\\n|                   (A and C cannot hear each other; collision occurs at B!)\\n|\\n| Exposed Terminal: [Station A] <--- [Station B]      [Station C] ---> [Station D]\\n|                   (C hears B transmitting and needlessly stays silent!)",
        "applications": [
          "IEEE 802.11 Wi-Fi Distributed Coordination Function (DCF).",
          "Wireless sensor networks operating in dense mesh topologies (ZigBee).",
          "Underwater acoustic sensor networks."
        ],
        "examImportantPoints": [
          "Explain the Hidden Terminal Problem and Exposed Terminal Problem with clear node diagrams.",
          "Explain why CSMA/CD cannot be used in wireless radio networks.",
          "Describe how the MACA RTS/CTS handshake solves both the hidden and exposed terminal problems."
        ],
        "quickRevisionNotes": [
          "Hidden Terminal: A and C collide at B (solved by CTS broadcast).",
          "Exposed Terminal: C needlessly waits while B talks to A (solved by hearing RTS only).",
          "MACA sequence: RTS -> CTS -> Data -> ACK."
        ]
      }
    }
  },
  {
    "id": "mc-u2-t2",
    "subjectId": "mc",
    "unitId": "mc-u2",
    "unitNumber": 2,
    "unitTitle": "Wireless MAC & Telecommunication Systems",
    "topicNumber": 2,
    "title": "GSM Architecture (BSS, NSS, OSS), Channels & Location Tracking",
    "objectives": [
      "Analyze Global System for Mobile Communications (GSM) 3-tier architectural subsystem layout.",
      "Compare database roles in the Network and Switching Subsystem (HLR, VLR, AUC, EIR).",
      "Detail GSM frequency allocation, logical channels (BCH, CCCH, DCCH, TCH), and mobility location updates."
    ],
    "keywords": [
      "GSM",
      "BSS",
      "NSS",
      "OSS",
      "BTS",
      "BSC",
      "MSC",
      "HLR",
      "VLR",
      "EIR",
      "AUC",
      "IMSI",
      "TMSI",
      "Location Update"
    ],
    "content": {
      "beginner": {
        "summary": "GSM (Global System for Mobile Communications) was standardized by ETSI as the pioneering second-generation (2G) digital cellular telecommunication sta...",
        "theory": "GSM (Global System for Mobile Communications) was standardized by ETSI as the pioneering second-generation (2G) digital cellular telecommunication standard. GSM replaced analog systems with digital TDMA/FDMA modulation, SIM cards, end-to-end voice encryption, and international roaming. The GSM network architecture is divided into three major functional subsystems: 1. Base Station Subsystem (BSS): Manages radio link connectivity with the Mobile Station (MS). 2. Network and Switching Subsystem (NSS): Manages call switching, user authentication, and mobility databases. 3. Operation and Support Subsystem (OSS): Handles central network administration, billing, and fault diagnostics.",
        "definitions": [
          {
            "term": "HLR (Home Location Register)",
            "definition": "The master permanent database of a GSM carrier storing subscriber identities (IMSI), service tiers, and current location pointers."
          },
          {
            "term": "VLR (Visitor Location Register)",
            "definition": "A local dynamic database linked to an MSC that temporarily caches subscriber information for visiting devices within its serving area."
          },
          {
            "term": "AUC (Authentication Center)",
            "definition": "A protected security database storing confidential subscriber cryptographic keys (Ki) to generate authentication challenge triplets."
          }
        ],
        "keyConcepts": [
          {
            "title": "GSM Authentication Triplet Generation",
            "explanation": "AUC generates 128-bit random number RAND. Computes expected response SRES = A3(RAND, Ki) and cipher key Kc = A8(RAND, Ki).",
            "example": "Sends RAND to mobile. Mobile SIM computes SRES. If matches, subscriber is authentic without ever transmitting secret Ki over the air!"
          },
          {
            "title": "IMSI vs TMSI Privacy Protection",
            "explanation": "The International Mobile Subscriber Identity (IMSI) uniquely identifies the SIM. To prevent radio eavesdropping, the network assigns a temporary alias (TMSI).",
            "example": "TMSI is updated periodically, keeping the permanent IMSI hidden."
          }
        ],
        "diagram": "+-- GSM SYSTEM ARCHITECTURE SUBSYSTEM LAYOUT --+\\n| [Mobile Station (MS)] <-> [BTS] <-\\\\                               |\\n|                                  [BSC] <-> [MSC] <-> [PSTN / ISDN]|\\n| [Mobile Station (MS)] <-> [BTS] <-/         ^                      |\\n|       |================ BSS ================| |                    |\\n|                                               v                    |\\n|                                        [HLR] [VLR] [AUC] [EIR]     |\\n|                                       |======= NSS ========|       |",
        "applications": [
          "Global 2G voice telephony and SMS emergency fallback infrastructure.",
          "Machine-to-machine (M2M) smart utility meters and POS payment terminals.",
          "Railroad GSM-R specialized high-speed train control and voice dispatch."
        ],
        "examImportantPoints": [
          "Draw the complete GSM architecture diagram labeling BSS (BTS, BSC), NSS (MSC, HLR, VLR, AUC, EIR), and OSS.",
          "Explain the roles of HLR, VLR, AUC, and EIR databases in GSM call routing and security.",
          "Describe the GSM Location Update procedure when a mobile station roams into a new Location Area."
        ],
        "quickRevisionNotes": [
          "GSM Subsystems: BSS (Radio), NSS (Switching + Databases), OSS (Management).",
          "HLR = Permanent home database; VLR = Temporary visitor cache.",
          "AUC = Security triplets (RAND, SRES, Kc); EIR = IMEI blacklist/whitelist.",
          "Combines FDMA (200 kHz) and TDMA (8 time slots per carrier)."
        ]
      },
      "intermediate": {
        "summary": "Structural Subsystems Breakdown: 1. BSS consists of Base Transceiver Stations (BTS: radio antennas and transceivers in each cell) and Base Station Con...",
        "theory": "Structural Subsystems Breakdown: 1. BSS consists of Base Transceiver Stations (BTS: radio antennas and transceivers in each cell) and Base Station Controllers (BSC: controls radio frequency hopping, handoffs, and power control across multiple BTSs). 2. NSS consists of the Mobile Switching Center (MSC: telephone call switching office) connected to four databases: - HLR (Home Location Register): Permanent database storing subscriber profiles, subscribed services, and current VLR location. - VLR (Visitor Location Register): Temporary database storing subscriber data for mobiles currently roaming in its service area. - AUC (Authentication Center): Generates cryptographic triplets (RAND, SRES, Kc) using algorithm A3/A8 and secret key Ki. - EIR (Equipment Identity Register): Tracks physical phone IMEI status across White (valid), Grey (monitored), and Black (stolen/barred) lists.",
        "definitions": [
          {
            "term": "HLR (Home Location Register)",
            "definition": "The master permanent database of a GSM carrier storing subscriber identities (IMSI), service tiers, and current location pointers."
          },
          {
            "term": "VLR (Visitor Location Register)",
            "definition": "A local dynamic database linked to an MSC that temporarily caches subscriber information for visiting devices within its serving area."
          },
          {
            "term": "AUC (Authentication Center)",
            "definition": "A protected security database storing confidential subscriber cryptographic keys (Ki) to generate authentication challenge triplets."
          }
        ],
        "keyConcepts": [
          {
            "title": "GSM Authentication Triplet Generation",
            "explanation": "AUC generates 128-bit random number RAND. Computes expected response SRES = A3(RAND, Ki) and cipher key Kc = A8(RAND, Ki).",
            "example": "Sends RAND to mobile. Mobile SIM computes SRES. If matches, subscriber is authentic without ever transmitting secret Ki over the air!"
          },
          {
            "title": "IMSI vs TMSI Privacy Protection",
            "explanation": "The International Mobile Subscriber Identity (IMSI) uniquely identifies the SIM. To prevent radio eavesdropping, the network assigns a temporary alias (TMSI).",
            "example": "TMSI is updated periodically, keeping the permanent IMSI hidden."
          }
        ],
        "diagram": "+-- GSM SYSTEM ARCHITECTURE SUBSYSTEM LAYOUT --+\\n| [Mobile Station (MS)] <-> [BTS] <-\\\\                               |\\n|                                  [BSC] <-> [MSC] <-> [PSTN / ISDN]|\\n| [Mobile Station (MS)] <-> [BTS] <-/         ^                      |\\n|       |================ BSS ================| |                    |\\n|                                               v                    |\\n|                                        [HLR] [VLR] [AUC] [EIR]     |\\n|                                       |======= NSS ========|       |",
        "applications": [
          "Global 2G voice telephony and SMS emergency fallback infrastructure.",
          "Machine-to-machine (M2M) smart utility meters and POS payment terminals.",
          "Railroad GSM-R specialized high-speed train control and voice dispatch."
        ],
        "examImportantPoints": [
          "Draw the complete GSM architecture diagram labeling BSS (BTS, BSC), NSS (MSC, HLR, VLR, AUC, EIR), and OSS.",
          "Explain the roles of HLR, VLR, AUC, and EIR databases in GSM call routing and security.",
          "Describe the GSM Location Update procedure when a mobile station roams into a new Location Area."
        ],
        "quickRevisionNotes": [
          "GSM Subsystems: BSS (Radio), NSS (Switching + Databases), OSS (Management).",
          "HLR = Permanent home database; VLR = Temporary visitor cache.",
          "AUC = Security triplets (RAND, SRES, Kc); EIR = IMEI blacklist/whitelist."
        ]
      },
      "advanced": {
        "summary": "GSM combines FDMA (dividing 25 MHz spectrum into 124 carrier channels of 200 kHz spacing) with TDMA (dividing each carrier into 8 cyclical time slots)...",
        "theory": "GSM combines FDMA (dividing 25 MHz spectrum into 124 carrier channels of 200 kHz spacing) with TDMA (dividing each carrier into 8 cyclical time slots). Logical Channels are multiplexed over physical slots: 1. Traffic Channels (TCH): Full-rate (22.8 kbps) or half-rate digitised voice and data. 2. Control Channels: Broadcast Channels (BCCH, FCCH, SCH for frequency and time synchronization), Common Control Channels (PCH for paging, RACH for random access, AGCH for grant), and Dedicated Control Channels (SDCCH for call setup and SMS). Location Tracking uses Location Areas (LA): when a mobile crosses into a new LA, it initiates a Location Update procedure, updating the VLR and HLR.",
        "definitions": [
          {
            "term": "HLR (Home Location Register)",
            "definition": "The master permanent database of a GSM carrier storing subscriber identities (IMSI), service tiers, and current location pointers."
          },
          {
            "term": "VLR (Visitor Location Register)",
            "definition": "A local dynamic database linked to an MSC that temporarily caches subscriber information for visiting devices within its serving area."
          },
          {
            "term": "AUC (Authentication Center)",
            "definition": "A protected security database storing confidential subscriber cryptographic keys (Ki) to generate authentication challenge triplets."
          }
        ],
        "keyConcepts": [
          {
            "title": "GSM Authentication Triplet Generation",
            "explanation": "AUC generates 128-bit random number RAND. Computes expected response SRES = A3(RAND, Ki) and cipher key Kc = A8(RAND, Ki).",
            "example": "Sends RAND to mobile. Mobile SIM computes SRES. If matches, subscriber is authentic without ever transmitting secret Ki over the air!"
          },
          {
            "title": "IMSI vs TMSI Privacy Protection",
            "explanation": "The International Mobile Subscriber Identity (IMSI) uniquely identifies the SIM. To prevent radio eavesdropping, the network assigns a temporary alias (TMSI).",
            "example": "TMSI is updated periodically, keeping the permanent IMSI hidden."
          }
        ],
        "diagram": "+-- GSM SYSTEM ARCHITECTURE SUBSYSTEM LAYOUT --+\\n| [Mobile Station (MS)] <-> [BTS] <-\\\\                               |\\n|                                  [BSC] <-> [MSC] <-> [PSTN / ISDN]|\\n| [Mobile Station (MS)] <-> [BTS] <-/         ^                      |\\n|       |================ BSS ================| |                    |\\n|                                               v                    |\\n|                                        [HLR] [VLR] [AUC] [EIR]     |\\n|                                       |======= NSS ========|       |",
        "applications": [
          "Global 2G voice telephony and SMS emergency fallback infrastructure.",
          "Machine-to-machine (M2M) smart utility meters and POS payment terminals.",
          "Railroad GSM-R specialized high-speed train control and voice dispatch."
        ],
        "examImportantPoints": [
          "Draw the complete GSM architecture diagram labeling BSS (BTS, BSC), NSS (MSC, HLR, VLR, AUC, EIR), and OSS.",
          "Explain the roles of HLR, VLR, AUC, and EIR databases in GSM call routing and security.",
          "Describe the GSM Location Update procedure when a mobile station roams into a new Location Area."
        ],
        "quickRevisionNotes": [
          "HLR = Permanent home database; VLR = Temporary visitor cache.",
          "AUC = Security triplets (RAND, SRES, Kc); EIR = IMEI blacklist/whitelist.",
          "Combines FDMA (200 kHz) and TDMA (8 time slots per carrier)."
        ]
      }
    }
  },
  {
    "id": "mc-u2-t3",
    "subjectId": "mc",
    "unitId": "mc-u2",
    "unitNumber": 2,
    "unitTitle": "Wireless MAC & Telecommunication Systems",
    "topicNumber": 3,
    "title": "2.5G GPRS, EDGE & 3G UMTS Packet Radio Architecture",
    "objectives": [
      "Analyze 2.5G General Packet Radio Service (GPRS) packet-switched overlay architecture (SGSN and GGSN).",
      "Evaluate Enhanced Data rates for GSM Evolution (EDGE) 8-PSK modulation enhancements.",
      "Formulate 3G UMTS / WCDMA cellular network architecture, Node B, and Radio Network Controllers (RNC)."
    ],
    "keywords": [
      "GPRS",
      "EDGE",
      "UMTS",
      "SGSN",
      "GGSN",
      "WCDMA",
      "Packet Switching",
      "QoS",
      "Node B",
      "RNC"
    ],
    "content": {
      "beginner": {
        "summary": "Original 2G GSM was strictly circuit-switched: charging per minute, tying up an entire radio slot even during silence, and capped at 9.6 kbps—incapabl...",
        "theory": "Original 2G GSM was strictly circuit-switched: charging per minute, tying up an entire radio slot even during silence, and capped at 9.6 kbps—incapable of handling internet browsing. To bridge the gap to 3G, carriers introduced 2.5G GPRS (General Packet Radio Service), an all-packet-switched overlay atop the existing GSM radio access network. GPRS introduced \"always-on\" internet connectivity, charging for data consumed (megabytes) rather than time connected. EDGE (Enhanced Data rates for GSM Evolution) pushed 2G data rates up to 384 kbps by introducing 8-PSK modulation. 3G UMTS (Universal Mobile Telecommunications System) deployed a new wideband CDMA (WCDMA) radio interface delivering true mobile broadband up to 2 Mbps.",
        "definitions": [
          {
            "term": "SGSN (Serving GPRS Support Node)",
            "definition": "The core network node responsible for delivery of packet data to and from mobile stations within its geographic handling area."
          },
          {
            "term": "GGSN (Gateway GPRS Support Node)",
            "definition": "The edge gateway router in a cellular network that translates packet protocols and routes traffic to the public Internet."
          },
          {
            "term": "PDP Context",
            "definition": "A network data structure established on the phone, SGSN, and GGSN containing IP routing information and QoS session parameters."
          }
        ],
        "keyConcepts": [
          {
            "title": "Circuit-Switched vs Packet-Switched Overlay",
            "explanation": "GSM voice routes through the MSC to telephone lines (circuit-switched). GPRS data branches off at the BSC (PCU unit) to the SGSN/GGSN (packet-switched).",
            "example": "Allows simultaneous voice and background data."
          },
          {
            "title": "8-PSK Modulation in EDGE",
            "explanation": "By rotating carrier phase into 8 distinct states, each transmission symbol transmits 3 bits instead of 1 bit. Under good radio conditions, throughput triples.",
            "example": "Dynamically falls back to GMSK when channel noise increases."
          }
        ],
        "diagram": "+-- GPRS / 3G UMTS PACKET-SWITCHED DATA PIPELINE --+\\n| Mobile Device -> [BTS / Node B] -> [BSC / RNC]\\n|                                         |\\n|                                         v\\n|                                      [SGSN] (Mobility & Packet Forwarding)\\n|                                         |\\n|                                         v\\n|                                      [GGSN] (Gateway Router) <-> [Internet]",
        "applications": [
          "Early mobile web browsing (WAP, HTTP on smartphones).",
          "BlackBerry enterprise mobile email synchronization networks.",
          "Fleet telematics and automated vehicle location (AVL) trackers."
        ],
        "examImportantPoints": [
          "Draw the GPRS architecture and explain the functions of SGSN and GGSN.",
          "Explain the role of the Packet Control Unit (PCU) in splitting voice and data traffic at the BSC.",
          "Compare GPRS, EDGE, and UMTS in terms of modulation, peak data rate, and channel bandwidth."
        ],
        "quickRevisionNotes": [
          "GPRS: 2.5G packet-switched overlay (adds SGSN and GGSN).",
          "SGSN = Packet MSC; GGSN = Gateway router to Internet.",
          "EDGE: Upgrades modulation to 8-PSK (3 bits/symbol, up to 384 kbps).",
          "UMTS: 3G WCDMA (5 MHz channels, Node B + RNC, up to 2 Mbps)."
        ]
      },
      "intermediate": {
        "summary": "GPRS Core Network introduces two new network nodes: 1. SGSN (Serving GPRS Support Node): Equivalent to an MSC for packet data; tracks mobile packet lo...",
        "theory": "GPRS Core Network introduces two new network nodes: 1. SGSN (Serving GPRS Support Node): Equivalent to an MSC for packet data; tracks mobile packet location, performs security, and routes packets to and from the BSS. 2. GGSN (Gateway GPRS Support Node): The gateway router interconnecting the internal cellular packet network with external packet data networks (the public Internet). A Packet Data Protocol (PDP) Context is established between the mobile device, SGSN, and GGSN, assigning an IP address to the mobile. EDGE upgraded the GMSK modulation of GSM (1 bit/symbol) to 8-PSK (8-Phase Shift Keying, 3 bits/symbol), tripling raw data rates over identical 200 kHz channels.",
        "definitions": [
          {
            "term": "SGSN (Serving GPRS Support Node)",
            "definition": "The core network node responsible for delivery of packet data to and from mobile stations within its geographic handling area."
          },
          {
            "term": "GGSN (Gateway GPRS Support Node)",
            "definition": "The edge gateway router in a cellular network that translates packet protocols and routes traffic to the public Internet."
          },
          {
            "term": "PDP Context",
            "definition": "A network data structure established on the phone, SGSN, and GGSN containing IP routing information and QoS session parameters."
          }
        ],
        "keyConcepts": [
          {
            "title": "Circuit-Switched vs Packet-Switched Overlay",
            "explanation": "GSM voice routes through the MSC to telephone lines (circuit-switched). GPRS data branches off at the BSC (PCU unit) to the SGSN/GGSN (packet-switched).",
            "example": "Allows simultaneous voice and background data."
          },
          {
            "title": "8-PSK Modulation in EDGE",
            "explanation": "By rotating carrier phase into 8 distinct states, each transmission symbol transmits 3 bits instead of 1 bit. Under good radio conditions, throughput triples.",
            "example": "Dynamically falls back to GMSK when channel noise increases."
          }
        ],
        "diagram": "+-- GPRS / 3G UMTS PACKET-SWITCHED DATA PIPELINE --+\\n| Mobile Device -> [BTS / Node B] -> [BSC / RNC]\\n|                                         |\\n|                                         v\\n|                                      [SGSN] (Mobility & Packet Forwarding)\\n|                                         |\\n|                                         v\\n|                                      [GGSN] (Gateway Router) <-> [Internet]",
        "applications": [
          "Early mobile web browsing (WAP, HTTP on smartphones).",
          "BlackBerry enterprise mobile email synchronization networks.",
          "Fleet telematics and automated vehicle location (AVL) trackers."
        ],
        "examImportantPoints": [
          "Draw the GPRS architecture and explain the functions of SGSN and GGSN.",
          "Explain the role of the Packet Control Unit (PCU) in splitting voice and data traffic at the BSC.",
          "Compare GPRS, EDGE, and UMTS in terms of modulation, peak data rate, and channel bandwidth."
        ],
        "quickRevisionNotes": [
          "GPRS: 2.5G packet-switched overlay (adds SGSN and GGSN).",
          "SGSN = Packet MSC; GGSN = Gateway router to Internet.",
          "EDGE: Upgrades modulation to 8-PSK (3 bits/symbol, up to 384 kbps)."
        ]
      },
      "advanced": {
        "summary": "3G UMTS introduced the UTRAN (UMTS Terrestrial Radio Access Network): Base stations are renamed Node B, and controllers are called RNCs (Radio Network...",
        "theory": "3G UMTS introduced the UTRAN (UMTS Terrestrial Radio Access Network): Base stations are renamed Node B, and controllers are called RNCs (Radio Network Controller). UMTS operates on 5 MHz carrier bandwidth using Wideband CDMA (WCDMA) with direct-sequence spreading at 3.84 Mcps chip rate. High-Speed Packet Access (HSPA/HSPA+) subsequently enhanced UMTS with 16-QAM/64-QAM modulation and fast hybrid ARQ, delivering peak downlink speeds of 42 Mbps.",
        "definitions": [
          {
            "term": "SGSN (Serving GPRS Support Node)",
            "definition": "The core network node responsible for delivery of packet data to and from mobile stations within its geographic handling area."
          },
          {
            "term": "GGSN (Gateway GPRS Support Node)",
            "definition": "The edge gateway router in a cellular network that translates packet protocols and routes traffic to the public Internet."
          },
          {
            "term": "PDP Context",
            "definition": "A network data structure established on the phone, SGSN, and GGSN containing IP routing information and QoS session parameters."
          }
        ],
        "keyConcepts": [
          {
            "title": "Circuit-Switched vs Packet-Switched Overlay",
            "explanation": "GSM voice routes through the MSC to telephone lines (circuit-switched). GPRS data branches off at the BSC (PCU unit) to the SGSN/GGSN (packet-switched).",
            "example": "Allows simultaneous voice and background data."
          },
          {
            "title": "8-PSK Modulation in EDGE",
            "explanation": "By rotating carrier phase into 8 distinct states, each transmission symbol transmits 3 bits instead of 1 bit. Under good radio conditions, throughput triples.",
            "example": "Dynamically falls back to GMSK when channel noise increases."
          }
        ],
        "diagram": "+-- GPRS / 3G UMTS PACKET-SWITCHED DATA PIPELINE --+\\n| Mobile Device -> [BTS / Node B] -> [BSC / RNC]\\n|                                         |\\n|                                         v\\n|                                      [SGSN] (Mobility & Packet Forwarding)\\n|                                         |\\n|                                         v\\n|                                      [GGSN] (Gateway Router) <-> [Internet]",
        "applications": [
          "Early mobile web browsing (WAP, HTTP on smartphones).",
          "BlackBerry enterprise mobile email synchronization networks.",
          "Fleet telematics and automated vehicle location (AVL) trackers."
        ],
        "examImportantPoints": [
          "Draw the GPRS architecture and explain the functions of SGSN and GGSN.",
          "Explain the role of the Packet Control Unit (PCU) in splitting voice and data traffic at the BSC.",
          "Compare GPRS, EDGE, and UMTS in terms of modulation, peak data rate, and channel bandwidth."
        ],
        "quickRevisionNotes": [
          "SGSN = Packet MSC; GGSN = Gateway router to Internet.",
          "EDGE: Upgrades modulation to 8-PSK (3 bits/symbol, up to 384 kbps).",
          "UMTS: 3G WCDMA (5 MHz channels, Node B + RNC, up to 2 Mbps)."
        ]
      }
    }
  },
  {
    "id": "mc-u3-t1",
    "subjectId": "mc",
    "unitId": "mc-u3",
    "unitNumber": 3,
    "unitTitle": "Wireless LANs, Bluetooth & Mobile IP",
    "topicNumber": 1,
    "title": "IEEE 802.11 Architecture, DCF/PCF & CSMA/CA with RTS/CTS",
    "objectives": [
      "Analyze IEEE 802.11 architecture: Basic Service Set (BSS), Extended Service Set (ESS), and Distribution System (DS).",
      "Compare Distributed Coordination Function (DCF contention-based) and Point Coordination Function (PCF contention-free).",
      "Trace the CSMA/CA protocol with SIFS, DIFS, PIFS interframe spaces, and Network Allocation Vector (NAV)."
    ],
    "keywords": [
      "IEEE 802.11",
      "Wi-Fi",
      "BSS",
      "ESS",
      "DCF",
      "PCF",
      "CSMA/CA",
      "DIFS",
      "SIFS",
      "NAV",
      "RTS/CTS",
      "Interframe Spacing"
    ],
    "content": {
      "beginner": {
        "summary": "IEEE 802.11 (popularly known as Wi-Fi) is the dominant international standard for Wireless Local Area Networks (WLAN). The fundamental architectural b...",
        "theory": "IEEE 802.11 (popularly known as Wi-Fi) is the dominant international standard for Wireless Local Area Networks (WLAN). The fundamental architectural building block is the Basic Service Set (BSS), consisting of mobile stations communicating with an Access Point (AP) in Infrastructure Mode, or directly between stations in Ad-Hoc Mode (Independent BSS - IBSS). Multiple BSSs are interconnected via a wired Distribution System (DS) to form an Extended Service Set (ESS), presenting a seamless, unified local area network to upper protocol layers and enabling roaming.",
        "definitions": [
          {
            "term": "BSS (Basic Service Set)",
            "definition": "The foundational building block of an 802.11 wireless LAN, comprising a central Access Point and associated client stations."
          },
          {
            "term": "CSMA/CA",
            "definition": "Carrier Sense Multiple Access with Collision Avoidance: a channel reservation access protocol using random backoff and IFS spacing."
          },
          {
            "term": "NAV (Network Allocation Vector)",
            "definition": "An internal timer maintained by 802.11 stations representing how long the wireless medium will remain busy with reserved traffic."
          }
        ],
        "keyConcepts": [
          {
            "title": "Priority Hierarchy via Interframe Spacing",
            "explanation": "Because SIFS is shorter than DIFS, an ACK or CTS frame is always transmitted before any waiting station can finish its DIFS period.",
            "example": "Prevents waiting stations from interrupting established handshakes."
          },
          {
            "title": "Virtual vs Physical Carrier Sensing",
            "explanation": "Physical sensing listens to RF energy on the antenna. Virtual sensing reads duration fields in RTS/CTS and runs the internal NAV countdown timer.",
            "example": "Virtual carrier sensing eliminates hidden terminal collisions."
          }
        ],
        "diagram": "+-- IEEE 802.11 CSMA/CA RTS/CTS & INTERFRAME SPACING (IFS) --+\\n| Sender:   [DIFS] [Backoff] [ RTS ]             [ DATA ]\\n| Receiver:                          [SIFS] [CTS]          [SIFS] [ACK]\\n| Other:    [--- NAV (RTS) --------------------] [--- NAV (CTS) -------]\\n| SIFS < PIFS < DIFS (Shorter spacing guarantees higher priority!)",
        "applications": [
          "Enterprise corporate Wi-Fi 6 (802.11ax) campus access points.",
          "Residential high-speed wireless home internet networks.",
          "Public airport and hospitality municipal Wi-Fi hotspot deployments."
        ],
        "examImportantPoints": [
          "Draw the complete timing diagram of IEEE 802.11 CSMA/CA showing DIFS, SIFS, RTS, CTS, Data, ACK, and NAV.",
          "Compare DCF and PCF coordination functions in IEEE 802.11.",
          "Explain why SIFS is shorter than PIFS, and PIFS is shorter than DIFS."
        ],
        "quickRevisionNotes": [
          "Architecture: BSS (one AP), ESS (multiple BSSs joined by DS).",
          "DCF = Contention-based (CSMA/CA); PCF = Polling contention-free.",
          "IFS priority order: SIFS (highest) < PIFS < DIFS (lowest).",
          "NAV acts as virtual carrier sensor, setting deferral timer."
        ]
      },
      "intermediate": {
        "summary": "Medium access in 802.11 is governed by two coordination functions: 1. Distributed Coordination Function (DCF): Mandatory contention-based distributed ...",
        "theory": "Medium access in 802.11 is governed by two coordination functions: 1. Distributed Coordination Function (DCF): Mandatory contention-based distributed channel access using CSMA/CA with binary exponential backoff. 2. Point Coordination Function (PCF): Optional centralized, contention-free polling mediated by the AP. Interframe Spacing (IFS) dictates transmission priorities: - SIFS (Short IFS): Highest priority, used for immediate control responses (ACK, CTS). - PIFS (PCF IFS): Intermediate priority, used by the AP for polling in PCF mode. - DIFS (DCF IFS): Lowest priority, used by stations waiting to transmit normal asynchronous data frames.",
        "definitions": [
          {
            "term": "BSS (Basic Service Set)",
            "definition": "The foundational building block of an 802.11 wireless LAN, comprising a central Access Point and associated client stations."
          },
          {
            "term": "CSMA/CA",
            "definition": "Carrier Sense Multiple Access with Collision Avoidance: a channel reservation access protocol using random backoff and IFS spacing."
          },
          {
            "term": "NAV (Network Allocation Vector)",
            "definition": "An internal timer maintained by 802.11 stations representing how long the wireless medium will remain busy with reserved traffic."
          }
        ],
        "keyConcepts": [
          {
            "title": "Priority Hierarchy via Interframe Spacing",
            "explanation": "Because SIFS is shorter than DIFS, an ACK or CTS frame is always transmitted before any waiting station can finish its DIFS period.",
            "example": "Prevents waiting stations from interrupting established handshakes."
          },
          {
            "title": "Virtual vs Physical Carrier Sensing",
            "explanation": "Physical sensing listens to RF energy on the antenna. Virtual sensing reads duration fields in RTS/CTS and runs the internal NAV countdown timer.",
            "example": "Virtual carrier sensing eliminates hidden terminal collisions."
          }
        ],
        "diagram": "+-- IEEE 802.11 CSMA/CA RTS/CTS & INTERFRAME SPACING (IFS) --+\\n| Sender:   [DIFS] [Backoff] [ RTS ]             [ DATA ]\\n| Receiver:                          [SIFS] [CTS]          [SIFS] [ACK]\\n| Other:    [--- NAV (RTS) --------------------] [--- NAV (CTS) -------]\\n| SIFS < PIFS < DIFS (Shorter spacing guarantees higher priority!)",
        "applications": [
          "Enterprise corporate Wi-Fi 6 (802.11ax) campus access points.",
          "Residential high-speed wireless home internet networks.",
          "Public airport and hospitality municipal Wi-Fi hotspot deployments."
        ],
        "examImportantPoints": [
          "Draw the complete timing diagram of IEEE 802.11 CSMA/CA showing DIFS, SIFS, RTS, CTS, Data, ACK, and NAV.",
          "Compare DCF and PCF coordination functions in IEEE 802.11.",
          "Explain why SIFS is shorter than PIFS, and PIFS is shorter than DIFS."
        ],
        "quickRevisionNotes": [
          "Architecture: BSS (one AP), ESS (multiple BSSs joined by DS).",
          "DCF = Contention-based (CSMA/CA); PCF = Polling contention-free.",
          "IFS priority order: SIFS (highest) < PIFS < DIFS (lowest)."
        ]
      },
      "advanced": {
        "summary": "In CSMA/CA execution: 1. Station senses medium; if busy, it defers. 2. When medium becomes idle, it waits for a DIFS duration. 3. If medium remains id...",
        "theory": "In CSMA/CA execution: 1. Station senses medium; if busy, it defers. 2. When medium becomes idle, it waits for a DIFS duration. 3. If medium remains idle throughout DIFS, it selects a random backoff counter from [0, CW]. 4. Counter decrements only while medium is idle. 5. When counter reaches 0, it transmits RTS. 6. Target returns CTS after SIFS. 7. Data transmits after SIFS; ACK returns after SIFS. All other stations hearing RTS/CTS update their Network Allocation Vector (NAV), a timer acting as a virtual carrier-sensing mechanism that prevents transmissions until the active sequence finishes.",
        "definitions": [
          {
            "term": "BSS (Basic Service Set)",
            "definition": "The foundational building block of an 802.11 wireless LAN, comprising a central Access Point and associated client stations."
          },
          {
            "term": "CSMA/CA",
            "definition": "Carrier Sense Multiple Access with Collision Avoidance: a channel reservation access protocol using random backoff and IFS spacing."
          },
          {
            "term": "NAV (Network Allocation Vector)",
            "definition": "An internal timer maintained by 802.11 stations representing how long the wireless medium will remain busy with reserved traffic."
          }
        ],
        "keyConcepts": [
          {
            "title": "Priority Hierarchy via Interframe Spacing",
            "explanation": "Because SIFS is shorter than DIFS, an ACK or CTS frame is always transmitted before any waiting station can finish its DIFS period.",
            "example": "Prevents waiting stations from interrupting established handshakes."
          },
          {
            "title": "Virtual vs Physical Carrier Sensing",
            "explanation": "Physical sensing listens to RF energy on the antenna. Virtual sensing reads duration fields in RTS/CTS and runs the internal NAV countdown timer.",
            "example": "Virtual carrier sensing eliminates hidden terminal collisions."
          }
        ],
        "diagram": "+-- IEEE 802.11 CSMA/CA RTS/CTS & INTERFRAME SPACING (IFS) --+\\n| Sender:   [DIFS] [Backoff] [ RTS ]             [ DATA ]\\n| Receiver:                          [SIFS] [CTS]          [SIFS] [ACK]\\n| Other:    [--- NAV (RTS) --------------------] [--- NAV (CTS) -------]\\n| SIFS < PIFS < DIFS (Shorter spacing guarantees higher priority!)",
        "applications": [
          "Enterprise corporate Wi-Fi 6 (802.11ax) campus access points.",
          "Residential high-speed wireless home internet networks.",
          "Public airport and hospitality municipal Wi-Fi hotspot deployments."
        ],
        "examImportantPoints": [
          "Draw the complete timing diagram of IEEE 802.11 CSMA/CA showing DIFS, SIFS, RTS, CTS, Data, ACK, and NAV.",
          "Compare DCF and PCF coordination functions in IEEE 802.11.",
          "Explain why SIFS is shorter than PIFS, and PIFS is shorter than DIFS."
        ],
        "quickRevisionNotes": [
          "DCF = Contention-based (CSMA/CA); PCF = Polling contention-free.",
          "IFS priority order: SIFS (highest) < PIFS < DIFS (lowest).",
          "NAV acts as virtual carrier sensor, setting deferral timer."
        ]
      }
    }
  },
  {
    "id": "mc-u3-t2",
    "subjectId": "mc",
    "unitId": "mc-u3",
    "unitNumber": 3,
    "unitTitle": "Wireless LANs, Bluetooth & Mobile IP",
    "topicNumber": 2,
    "title": "Bluetooth (IEEE 802.15.1) Architecture, Piconets, Scatternets & Protocol Stack",
    "objectives": [
      "Analyze Bluetooth Personal Area Network (PAN) piconet and scatternet topologies.",
      "Evaluate Bluetooth Frequency Hopping Spread Spectrum (FHSS) operating at 2.4 GHz ISM band (1600 hops/sec).",
      "Examine the Bluetooth protocol stack: Radio, Baseband, L2CAP, HCI, and Service Discovery Protocol (SDP)."
    ],
    "keywords": [
      "Bluetooth",
      "IEEE 802.15.1",
      "Piconet",
      "Scatternet",
      "Master-Slave",
      "FHSS",
      "L2CAP",
      "HCI",
      "SDP",
      "BLE"
    ],
    "content": {
      "beginner": {
        "summary": "Bluetooth (standardized as IEEE 802.15.1) is a low-power, short-range wireless Personal Area Network (PAN) technology designed to replace cables inter...",
        "theory": "Bluetooth (standardized as IEEE 802.15.1) is a low-power, short-range wireless Personal Area Network (PAN) technology designed to replace cables interconnecting portable computing devices, peripherals, and audio accessories. Operating in the globally unlicensed 2.4 GHz ISM (Industrial, Scientific, and Medical) band, Bluetooth connects devices within 10 meters. The basic network topology is a Piconet: a star network consisting of exactly ONE Master device and up to SEVEN active Slave devices (plus up to 255 parked slaves). Multiple piconets can overlap to form a Scatternet, bridged by devices acting as slaves in both piconets or master in one and slave in another.",
        "definitions": [
          {
            "term": "Piconet",
            "definition": "An ad-hoc Bluetooth network containing one master device controlling up to seven active slave devices."
          },
          {
            "term": "Scatternet",
            "definition": "A multi-hop collection of overlapping Bluetooth piconets interconnected by shared bridge devices."
          },
          {
            "term": "L2CAP",
            "definition": "The Logical Link Control and Adaptation Protocol responsible for packet segmentation, reassembly, and protocol multiplexing in Bluetooth."
          }
        ],
        "keyConcepts": [
          {
            "title": "Master-Driven Time Division Duplex (TDD)",
            "explanation": "Slaves never speak unless specifically polled by the Master in the preceding slot. Completely eliminates collisions between slave devices.",
            "example": "Master transmits in slot 0, 2, 4... Slaves respond in slot 1, 3, 5..."
          },
          {
            "title": "SCO vs ACL Links",
            "explanation": "SCO (Synchronous Connection-Oriented) allocates reserved time slots for real-time uncompressed voice without retransmissions. ACL (Asynchronous Connection-Less) is packet data with retransmission.",
            "example": "Enables simultaneous voice audio and data telemetry."
          }
        ],
        "diagram": "+-- BLUETOOTH PICONET AND SCATTERNET TOPOLOGY --+\\n| Piconet 1:   [Master M1] <---> [Slave S1]\\n|                   ^\\n|                   |\\n|                   v\\n|              [Bridge Node: Slave in P1, Master in P2]\\n|                   ^\\n|                   |\\n| Piconet 2:   [Master M2] <---> [Slave S2]\\n| (Scatternet formed by sharing the bridge node across piconets!)",
        "applications": [
          "Wireless audio headphones and hands-free automotive infotainment.",
          "Wireless computer peripherals (mice, keyboards, game controllers).",
          "Wearable health fitness trackers and smartwatches (Bluetooth Low Energy)."
        ],
        "examImportantPoints": [
          "Draw and describe the architecture of a Bluetooth Piconet and a Scatternet.",
          "Explain Frequency Hopping Spread Spectrum (FHSS) in Bluetooth: 79 channels, 1600 hops/sec, 625 microsecond slots.",
          "Detail the functions of the Baseband and L2CAP layers in the Bluetooth protocol stack."
        ],
        "quickRevisionNotes": [
          "Piconet: 1 Master, up to 7 active Slaves.",
          "Scatternet: Overlapping piconets joined by bridge nodes.",
          "FHSS: 79 channels, 1600 hops/sec, 625 microsecond slot time.",
          "L2CAP handles segmentation, reassembly, and protocol multiplexing."
        ]
      },
      "intermediate": {
        "summary": "To combat severe radio interference in the congested 2.4 GHz band (competing with Wi-Fi and microwaves), Bluetooth employs Frequency Hopping Spread Sp...",
        "theory": "To combat severe radio interference in the congested 2.4 GHz band (competing with Wi-Fi and microwaves), Bluetooth employs Frequency Hopping Spread Spectrum (FHSS): the transceiver hops pseudo-randomly across 79 carrier channels (spaced 1 MHz apart) at a rate of 1600 hops per second (each slot lasting 625 microseconds). The hopping sequence is uniquely determined by the Master device 48-bit hardware address (BD_ADDR) and its internal clock. Communication is strictly master-driven using Time Division Duplex (TDD): the master transmits in even-numbered slots, and addressed slaves respond in odd-numbered slots.",
        "definitions": [
          {
            "term": "Piconet",
            "definition": "An ad-hoc Bluetooth network containing one master device controlling up to seven active slave devices."
          },
          {
            "term": "Scatternet",
            "definition": "A multi-hop collection of overlapping Bluetooth piconets interconnected by shared bridge devices."
          },
          {
            "term": "L2CAP",
            "definition": "The Logical Link Control and Adaptation Protocol responsible for packet segmentation, reassembly, and protocol multiplexing in Bluetooth."
          }
        ],
        "keyConcepts": [
          {
            "title": "Master-Driven Time Division Duplex (TDD)",
            "explanation": "Slaves never speak unless specifically polled by the Master in the preceding slot. Completely eliminates collisions between slave devices.",
            "example": "Master transmits in slot 0, 2, 4... Slaves respond in slot 1, 3, 5..."
          },
          {
            "title": "SCO vs ACL Links",
            "explanation": "SCO (Synchronous Connection-Oriented) allocates reserved time slots for real-time uncompressed voice without retransmissions. ACL (Asynchronous Connection-Less) is packet data with retransmission.",
            "example": "Enables simultaneous voice audio and data telemetry."
          }
        ],
        "diagram": "+-- BLUETOOTH PICONET AND SCATTERNET TOPOLOGY --+\\n| Piconet 1:   [Master M1] <---> [Slave S1]\\n|                   ^\\n|                   |\\n|                   v\\n|              [Bridge Node: Slave in P1, Master in P2]\\n|                   ^\\n|                   |\\n| Piconet 2:   [Master M2] <---> [Slave S2]\\n| (Scatternet formed by sharing the bridge node across piconets!)",
        "applications": [
          "Wireless audio headphones and hands-free automotive infotainment.",
          "Wireless computer peripherals (mice, keyboards, game controllers).",
          "Wearable health fitness trackers and smartwatches (Bluetooth Low Energy)."
        ],
        "examImportantPoints": [
          "Draw and describe the architecture of a Bluetooth Piconet and a Scatternet.",
          "Explain Frequency Hopping Spread Spectrum (FHSS) in Bluetooth: 79 channels, 1600 hops/sec, 625 microsecond slots.",
          "Detail the functions of the Baseband and L2CAP layers in the Bluetooth protocol stack."
        ],
        "quickRevisionNotes": [
          "Piconet: 1 Master, up to 7 active Slaves.",
          "Scatternet: Overlapping piconets joined by bridge nodes.",
          "FHSS: 79 channels, 1600 hops/sec, 625 microsecond slot time."
        ]
      },
      "advanced": {
        "summary": "Bluetooth Protocol Stack layers: 1. Radio Layer: Physical RF transceiver, GFSK/DQPSK modulation, 1 mW power (Class 2). 2. Baseband Layer: Manages phys...",
        "theory": "Bluetooth Protocol Stack layers: 1. Radio Layer: Physical RF transceiver, GFSK/DQPSK modulation, 1 mW power (Class 2). 2. Baseband Layer: Manages physical channels, link establishment (ACL asynchronous connectionless, SCO synchronous connection-oriented for real-time voice), and frequency hopping. 3. L2CAP (Logical Link Control and Adaptation Protocol): Provides protocol multiplexing, segmentation and reassembly (SAR), and QoS negotiation. 4. SDP (Service Discovery Protocol): Queries available device profiles (hands-free audio, serial port, file transfer). Bluetooth Low Energy (BLE / Bluetooth Smart) introduced ultra-low duty cycles operating for years on coin-cell batteries.",
        "definitions": [
          {
            "term": "Piconet",
            "definition": "An ad-hoc Bluetooth network containing one master device controlling up to seven active slave devices."
          },
          {
            "term": "Scatternet",
            "definition": "A multi-hop collection of overlapping Bluetooth piconets interconnected by shared bridge devices."
          },
          {
            "term": "L2CAP",
            "definition": "The Logical Link Control and Adaptation Protocol responsible for packet segmentation, reassembly, and protocol multiplexing in Bluetooth."
          }
        ],
        "keyConcepts": [
          {
            "title": "Master-Driven Time Division Duplex (TDD)",
            "explanation": "Slaves never speak unless specifically polled by the Master in the preceding slot. Completely eliminates collisions between slave devices.",
            "example": "Master transmits in slot 0, 2, 4... Slaves respond in slot 1, 3, 5..."
          },
          {
            "title": "SCO vs ACL Links",
            "explanation": "SCO (Synchronous Connection-Oriented) allocates reserved time slots for real-time uncompressed voice without retransmissions. ACL (Asynchronous Connection-Less) is packet data with retransmission.",
            "example": "Enables simultaneous voice audio and data telemetry."
          }
        ],
        "diagram": "+-- BLUETOOTH PICONET AND SCATTERNET TOPOLOGY --+\\n| Piconet 1:   [Master M1] <---> [Slave S1]\\n|                   ^\\n|                   |\\n|                   v\\n|              [Bridge Node: Slave in P1, Master in P2]\\n|                   ^\\n|                   |\\n| Piconet 2:   [Master M2] <---> [Slave S2]\\n| (Scatternet formed by sharing the bridge node across piconets!)",
        "applications": [
          "Wireless audio headphones and hands-free automotive infotainment.",
          "Wireless computer peripherals (mice, keyboards, game controllers).",
          "Wearable health fitness trackers and smartwatches (Bluetooth Low Energy)."
        ],
        "examImportantPoints": [
          "Draw and describe the architecture of a Bluetooth Piconet and a Scatternet.",
          "Explain Frequency Hopping Spread Spectrum (FHSS) in Bluetooth: 79 channels, 1600 hops/sec, 625 microsecond slots.",
          "Detail the functions of the Baseband and L2CAP layers in the Bluetooth protocol stack."
        ],
        "quickRevisionNotes": [
          "Scatternet: Overlapping piconets joined by bridge nodes.",
          "FHSS: 79 channels, 1600 hops/sec, 625 microsecond slot time.",
          "L2CAP handles segmentation, reassembly, and protocol multiplexing."
        ]
      }
    }
  },
  {
    "id": "mc-u3-t3",
    "subjectId": "mc",
    "unitId": "mc-u3",
    "unitNumber": 3,
    "unitTitle": "Wireless LANs, Bluetooth & Mobile IP",
    "topicNumber": 3,
    "title": "Mobile IP: Home Agent, Foreign Agent, Care-of Address & Triangle Routing",
    "objectives": [
      "Formulate the Mobile IP architecture (RFC 5944) solving host mobility without terminating TCP sessions.",
      "Analyze the three operational phases: Agent Discovery, Registration, and Tunneling.",
      "Explain the Triangle Routing inefficiency and the Route Optimization binding cache solution."
    ],
    "keywords": [
      "Mobile IP",
      "Home Agent",
      "Foreign Agent",
      "Care-of Address",
      "CoA",
      "Triangle Routing",
      "Tunneling",
      "Encapsulation",
      "IP-in-IP"
    ],
    "content": {
      "beginner": {
        "summary": "In traditional IP networking, an IP address serves two distinct purposes: it acts as an Endpoint Identifier (who the computer is) and a Locator (where...",
        "theory": "In traditional IP networking, an IP address serves two distinct purposes: it acts as an Endpoint Identifier (who the computer is) and a Locator (where the computer is physically attached in the global routing topology). If a mobile laptop moves to a new Wi-Fi network and changes its IP address, all active TCP connections drop immediately because TCP sockets are permanently bound to the original IP address. Mobile IP solves this dilemma by allowing a mobile node to retain its permanent Home IP Address anywhere in the world, while transparently using a temporary Care-of Address (CoA) when roaming.",
        "definitions": [
          {
            "term": "Home Agent (HA)",
            "definition": "A router on the mobile node home network that intercepts packets destined for the mobile node and tunnels them to its roaming location."
          },
          {
            "term": "Care-of Address (CoA)",
            "definition": "A temporary IP address assigned to a mobile node while roaming in a foreign network, identifying its topological point of attachment."
          },
          {
            "term": "Triangle Routing",
            "definition": "An inefficient routing phenomenon where packets from a sender must travel to the home agent before being forwarded to the roaming mobile node."
          }
        ],
        "keyConcepts": [
          {
            "title": "IP-in-IP Encapsulation Tunneling",
            "explanation": "The Home Agent prepends an outer IP header: Source=HA_IP, Destination=CoA. The original IP packet (Source=CN_IP, Destination=MN_Home_IP) is carried as raw payload.",
            "example": "Intermediate internet routers forward based on outer header, unaware of mobility."
          },
          {
            "title": "Proxy ARP at the Home Network",
            "explanation": "When MN is away, the Home Agent activates Proxy ARP, answering ARP requests for the MN IP with the HA own hardware MAC address.",
            "example": "Allows HA to intercept packets arriving on the home subnet."
          }
        ],
        "diagram": "+-- MOBILE IP TRIANGLE ROUTING & TUNNELING --+\\n|        [ Correspondent Node (CN) ]\\n|           /                     ^\\n|          / (Direct Reverse Path) | (Direct Forward Path)\\n|         v                        |\\n|   [Home Agent (HA)]              |\\n|         |                        |\\n|         | (IP-in-IP Tunnel)      |\\n|         v                        |\\n|   [Foreign Agent (FA)] -> [Mobile Node (MN)]",
        "applications": [
          "Cellular 4G/5G mobile data inter-gateway roaming (GTP tunneling based on Mobile IP principles).",
          "In-flight passenger Wi-Fi maintaining active VPN connections as airplane crosses satellite footprints.",
          "Connected emergency ambulance telemetry routing."
        ],
        "examImportantPoints": [
          "Explain the three core entities of Mobile IP: Mobile Node (MN), Home Agent (HA), and Foreign Agent (FA).",
          "Describe the step-by-step process of Agent Discovery, Registration, and Tunneling with packet flow diagrams.",
          "Explain the Triangle Routing problem and describe how Route Optimization with binding updates resolves it."
        ],
        "quickRevisionNotes": [
          "Mobile IP decouples identity (Home Address) from location (Care-of Address).",
          "Home Agent intercepts packets using Proxy ARP and tunnels via IP-in-IP.",
          "Triangle Routing: CN -> HA -> FA -> MN (forward), MN -> CN (reverse).",
          "Route Optimization: CN caches CoA directly via Binding Updates."
        ]
      },
      "intermediate": {
        "summary": "Mobile IP Entities: 1. Mobile Node (MN): The roaming device. 2. Home Agent (HA): A router on the MN home network that intercepts packets destined for ...",
        "theory": "Mobile IP Entities: 1. Mobile Node (MN): The roaming device. 2. Home Agent (HA): A router on the MN home network that intercepts packets destined for the MN when it is away. 3. Foreign Agent (FA): A router on the visited network providing routing and assigning the Care-of Address (CoA). 4. Correspondent Node (CN): The stationary or remote peer communicating with MN. Three operational steps: 1. Agent Discovery: FA broadcasts periodic Agent Advertisements; MN discovers it has moved. 2. Registration: MN registers its foreign CoA with its HA through the FA. 3. Tunneling: When CN sends packets to MN home address, the HA intercepts them via Proxy ARP, encapsulates them inside a new IP packet addressed to the CoA (IP-in-IP encapsulation), and forwards them through an IP tunnel. The FA decapsulates the packet and delivers it to MN.",
        "definitions": [
          {
            "term": "Home Agent (HA)",
            "definition": "A router on the mobile node home network that intercepts packets destined for the mobile node and tunnels them to its roaming location."
          },
          {
            "term": "Care-of Address (CoA)",
            "definition": "A temporary IP address assigned to a mobile node while roaming in a foreign network, identifying its topological point of attachment."
          },
          {
            "term": "Triangle Routing",
            "definition": "An inefficient routing phenomenon where packets from a sender must travel to the home agent before being forwarded to the roaming mobile node."
          }
        ],
        "keyConcepts": [
          {
            "title": "IP-in-IP Encapsulation Tunneling",
            "explanation": "The Home Agent prepends an outer IP header: Source=HA_IP, Destination=CoA. The original IP packet (Source=CN_IP, Destination=MN_Home_IP) is carried as raw payload.",
            "example": "Intermediate internet routers forward based on outer header, unaware of mobility."
          },
          {
            "title": "Proxy ARP at the Home Network",
            "explanation": "When MN is away, the Home Agent activates Proxy ARP, answering ARP requests for the MN IP with the HA own hardware MAC address.",
            "example": "Allows HA to intercept packets arriving on the home subnet."
          }
        ],
        "diagram": "+-- MOBILE IP TRIANGLE ROUTING & TUNNELING --+\\n|        [ Correspondent Node (CN) ]\\n|           /                     ^\\n|          / (Direct Reverse Path) | (Direct Forward Path)\\n|         v                        |\\n|   [Home Agent (HA)]              |\\n|         |                        |\\n|         | (IP-in-IP Tunnel)      |\\n|         v                        |\\n|   [Foreign Agent (FA)] -> [Mobile Node (MN)]",
        "applications": [
          "Cellular 4G/5G mobile data inter-gateway roaming (GTP tunneling based on Mobile IP principles).",
          "In-flight passenger Wi-Fi maintaining active VPN connections as airplane crosses satellite footprints.",
          "Connected emergency ambulance telemetry routing."
        ],
        "examImportantPoints": [
          "Explain the three core entities of Mobile IP: Mobile Node (MN), Home Agent (HA), and Foreign Agent (FA).",
          "Describe the step-by-step process of Agent Discovery, Registration, and Tunneling with packet flow diagrams.",
          "Explain the Triangle Routing problem and describe how Route Optimization with binding updates resolves it."
        ],
        "quickRevisionNotes": [
          "Mobile IP decouples identity (Home Address) from location (Care-of Address).",
          "Home Agent intercepts packets using Proxy ARP and tunnels via IP-in-IP.",
          "Triangle Routing: CN -> HA -> FA -> MN (forward), MN -> CN (reverse)."
        ]
      },
      "advanced": {
        "summary": "A major structural inefficiency of Mobile IP is Triangle Routing: Packets from CN travel all the way to the distant Home Agent, which tunnels them to ...",
        "theory": "A major structural inefficiency of Mobile IP is Triangle Routing: Packets from CN travel all the way to the distant Home Agent, which tunnels them to the Foreign Agent (CN -> HA -> FA -> MN). However, return packets from MN travel directly back to CN via normal IP routing (MN -> CN), forming an asymmetrical triangle with massive propagation delay. Route Optimization solves Triangle Routing by sending a Binding Update directly to CN: CN caches the MN Care-of Address in its local binding cache and tunnels subsequent packets directly to the CoA, bypassing the Home Agent entirely.",
        "definitions": [
          {
            "term": "Home Agent (HA)",
            "definition": "A router on the mobile node home network that intercepts packets destined for the mobile node and tunnels them to its roaming location."
          },
          {
            "term": "Care-of Address (CoA)",
            "definition": "A temporary IP address assigned to a mobile node while roaming in a foreign network, identifying its topological point of attachment."
          },
          {
            "term": "Triangle Routing",
            "definition": "An inefficient routing phenomenon where packets from a sender must travel to the home agent before being forwarded to the roaming mobile node."
          }
        ],
        "keyConcepts": [
          {
            "title": "IP-in-IP Encapsulation Tunneling",
            "explanation": "The Home Agent prepends an outer IP header: Source=HA_IP, Destination=CoA. The original IP packet (Source=CN_IP, Destination=MN_Home_IP) is carried as raw payload.",
            "example": "Intermediate internet routers forward based on outer header, unaware of mobility."
          },
          {
            "title": "Proxy ARP at the Home Network",
            "explanation": "When MN is away, the Home Agent activates Proxy ARP, answering ARP requests for the MN IP with the HA own hardware MAC address.",
            "example": "Allows HA to intercept packets arriving on the home subnet."
          }
        ],
        "diagram": "+-- MOBILE IP TRIANGLE ROUTING & TUNNELING --+\\n|        [ Correspondent Node (CN) ]\\n|           /                     ^\\n|          / (Direct Reverse Path) | (Direct Forward Path)\\n|         v                        |\\n|   [Home Agent (HA)]              |\\n|         |                        |\\n|         | (IP-in-IP Tunnel)      |\\n|         v                        |\\n|   [Foreign Agent (FA)] -> [Mobile Node (MN)]",
        "applications": [
          "Cellular 4G/5G mobile data inter-gateway roaming (GTP tunneling based on Mobile IP principles).",
          "In-flight passenger Wi-Fi maintaining active VPN connections as airplane crosses satellite footprints.",
          "Connected emergency ambulance telemetry routing."
        ],
        "examImportantPoints": [
          "Explain the three core entities of Mobile IP: Mobile Node (MN), Home Agent (HA), and Foreign Agent (FA).",
          "Describe the step-by-step process of Agent Discovery, Registration, and Tunneling with packet flow diagrams.",
          "Explain the Triangle Routing problem and describe how Route Optimization with binding updates resolves it."
        ],
        "quickRevisionNotes": [
          "Home Agent intercepts packets using Proxy ARP and tunnels via IP-in-IP.",
          "Triangle Routing: CN -> HA -> FA -> MN (forward), MN -> CN (reverse).",
          "Route Optimization: CN caches CoA directly via Binding Updates."
        ]
      }
    }
  },
  {
    "id": "mc-u4-t1",
    "subjectId": "mc",
    "unitId": "mc-u4",
    "unitNumber": 4,
    "unitTitle": "Mobile Transport Layer & Data Management",
    "topicNumber": 1,
    "title": "Traditional TCP Challenges over Wireless & Indirect TCP (I-TCP)",
    "objectives": [
      "Analyze why traditional TCP fails catastrophically in wireless networks by misinterpreting packet loss as congestion.",
      "Evaluate the Indirect TCP (I-TCP) split-connection architecture.",
      "Critique I-TCP trade-offs: performance gain versus violation of the End-to-End semantic principle."
    ],
    "keywords": [
      "Mobile Transport",
      "TCP over Wireless",
      "Indirect TCP",
      "I-TCP",
      "Split Connection",
      "Bit Error Rate",
      "Handover Interruption",
      "End-to-End Violation"
    ],
    "content": {
      "beginner": {
        "summary": "TCP was designed exclusively for wired networks where transmission cables have extremely low Bit Error Rates (BER < 10^-9). Consequently, traditional ...",
        "theory": "TCP was designed exclusively for wired networks where transmission cables have extremely low Bit Error Rates (BER < 10^-9). Consequently, traditional TCP operates under a fundamental assumption: ANY PACKET LOSS IS CAUSED BY NETWORK CONGESTION (router buffer overflow). When a packet drops, TCP triggers its Congestion Control mechanisms: cutting its congestion window (cwnd) in half, resetting slow-start thresholds, and throttling transmission throughput. However, in wireless networks, the vast majority of packet losses are caused by transmission bit errors, multipath fading, shadow fading, and brief handoff disconnections—NOT congestion! Throttling TCP under wireless bit loss degrades throughput catastrophically.",
        "definitions": [
          {
            "term": "Wireless Packet Loss Misclassification",
            "definition": "The failure of standard TCP to differentiate between transmission bit error losses and router congestion buffer overflow."
          },
          {
            "term": "Indirect TCP (I-TCP)",
            "definition": "A split-connection transport protocol that terminates standard TCP at the base station and uses a separate connection over the wireless hop."
          },
          {
            "term": "End-to-End Semantics Violation",
            "definition": "A design flaw where the sender receives successful delivery confirmation (ACK) before the destination host has actually received the data."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why TCP Throughput Collapses on Wi-Fi",
            "explanation": "If 5% of packets are lost to radio static, standard TCP cuts cwnd repeatedly, dropping transmission rate to a trickle despite an empty network pipe.",
            "example": "Decoupling wireless loss from wired congestion preserves maximum throughput."
          },
          {
            "title": "Handover Latency in Split TCP",
            "explanation": "When the mobile moves, all unacknowledged packets buffered in base station 1 must be migrated over the wired backbone to base station 2 before resuming.",
            "example": "Consumes backbone bandwidth and stalls active streaming."
          }
        ],
        "diagram": "+-- INDIRECT TCP (I-TCP) SPLIT-CONNECTION ARCHITECTURE --+\\n| [Fixed Host] <====== Standard Wired TCP ======> [Base Station] <== Optimized Wireless ==> [Mobile Host]\\n|                                                    | (Acts as Proxy)\\n|                                                    +- ACK sent to Fixed Host early!\\n|                                                    +- Violates End-to-End Semantics",
        "applications": [
          "Cellular carrier performance-enhancing proxies (PEP) accelerating mobile web browsing.",
          "Satellite internet proxy gateways hiding 600ms latency from client TCP stacks.",
          "Industrial automation wireless telemetry backhauls."
        ],
        "examImportantPoints": [
          "Explain why traditional TCP performs poorly in wireless mobile environments.",
          "Draw and describe the architecture of Indirect TCP (I-TCP) showing how the connection is split.",
          "Discuss the major advantages and disadvantages of I-TCP, focusing on the violation of end-to-end semantics."
        ],
        "quickRevisionNotes": [
          "Standard TCP assumes all packet loss = congestion; wireless loss = radio errors.",
          "I-TCP splits connection at Base Station: Wired TCP + Wireless TCP.",
          "Advantage: Shields wired host from wireless drops; isolates errors.",
          "Disadvantage: Violates end-to-end semantics; buffer handover overhead."
        ]
      },
      "intermediate": {
        "summary": "To address this without modifying the millions of legacy internet servers, Indirect TCP (I-TCP) introduces a Split-Connection approach: the single end...",
        "theory": "To address this without modifying the millions of legacy internet servers, Indirect TCP (I-TCP) introduces a Split-Connection approach: the single end-to-end TCP connection is split into two separate, independent connections at the foreign base station (Access Point / Mobile Gateway): 1. Standard Wired TCP Connection between the fixed Correspondent Host (CH) and the Base Station. 2. Specialized Wireless TCP Connection between the Base Station and the Mobile Host (MH). The Base Station acts as a mediating proxy: it acknowledges packets from the wired sender immediately, buffers the data, and retransmits it over the wireless link using aggressive, optimized wireless link-layer retransmissions.",
        "definitions": [
          {
            "term": "Wireless Packet Loss Misclassification",
            "definition": "The failure of standard TCP to differentiate between transmission bit error losses and router congestion buffer overflow."
          },
          {
            "term": "Indirect TCP (I-TCP)",
            "definition": "A split-connection transport protocol that terminates standard TCP at the base station and uses a separate connection over the wireless hop."
          },
          {
            "term": "End-to-End Semantics Violation",
            "definition": "A design flaw where the sender receives successful delivery confirmation (ACK) before the destination host has actually received the data."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why TCP Throughput Collapses on Wi-Fi",
            "explanation": "If 5% of packets are lost to radio static, standard TCP cuts cwnd repeatedly, dropping transmission rate to a trickle despite an empty network pipe.",
            "example": "Decoupling wireless loss from wired congestion preserves maximum throughput."
          },
          {
            "title": "Handover Latency in Split TCP",
            "explanation": "When the mobile moves, all unacknowledged packets buffered in base station 1 must be migrated over the wired backbone to base station 2 before resuming.",
            "example": "Consumes backbone bandwidth and stalls active streaming."
          }
        ],
        "diagram": "+-- INDIRECT TCP (I-TCP) SPLIT-CONNECTION ARCHITECTURE --+\\n| [Fixed Host] <====== Standard Wired TCP ======> [Base Station] <== Optimized Wireless ==> [Mobile Host]\\n|                                                    | (Acts as Proxy)\\n|                                                    +- ACK sent to Fixed Host early!\\n|                                                    +- Violates End-to-End Semantics",
        "applications": [
          "Cellular carrier performance-enhancing proxies (PEP) accelerating mobile web browsing.",
          "Satellite internet proxy gateways hiding 600ms latency from client TCP stacks.",
          "Industrial automation wireless telemetry backhauls."
        ],
        "examImportantPoints": [
          "Explain why traditional TCP performs poorly in wireless mobile environments.",
          "Draw and describe the architecture of Indirect TCP (I-TCP) showing how the connection is split.",
          "Discuss the major advantages and disadvantages of I-TCP, focusing on the violation of end-to-end semantics."
        ],
        "quickRevisionNotes": [
          "Standard TCP assumes all packet loss = congestion; wireless loss = radio errors.",
          "I-TCP splits connection at Base Station: Wired TCP + Wireless TCP.",
          "Advantage: Shields wired host from wireless drops; isolates errors."
        ]
      },
      "advanced": {
        "summary": "While I-TCP shields the fixed wired network from wireless losses (preventing the sender from triggering congestion control on radio drops), it incurs ...",
        "theory": "While I-TCP shields the fixed wired network from wireless losses (preventing the sender from triggering congestion control on radio drops), it incurs severe architectural drawbacks: 1. Violation of End-to-End Semantics: The sender receives an ACK when data reaches the intermediate base station, NOT when the mobile host actually receives it. If the base station crashes, acknowledged data is permanently lost. 2. Heavy Buffer State: The base station must maintain socket buffers for every active mobile connection. During handoffs, entire socket buffers must be transferred to the new base station, introducing handover latency.",
        "definitions": [
          {
            "term": "Wireless Packet Loss Misclassification",
            "definition": "The failure of standard TCP to differentiate between transmission bit error losses and router congestion buffer overflow."
          },
          {
            "term": "Indirect TCP (I-TCP)",
            "definition": "A split-connection transport protocol that terminates standard TCP at the base station and uses a separate connection over the wireless hop."
          },
          {
            "term": "End-to-End Semantics Violation",
            "definition": "A design flaw where the sender receives successful delivery confirmation (ACK) before the destination host has actually received the data."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why TCP Throughput Collapses on Wi-Fi",
            "explanation": "If 5% of packets are lost to radio static, standard TCP cuts cwnd repeatedly, dropping transmission rate to a trickle despite an empty network pipe.",
            "example": "Decoupling wireless loss from wired congestion preserves maximum throughput."
          },
          {
            "title": "Handover Latency in Split TCP",
            "explanation": "When the mobile moves, all unacknowledged packets buffered in base station 1 must be migrated over the wired backbone to base station 2 before resuming.",
            "example": "Consumes backbone bandwidth and stalls active streaming."
          }
        ],
        "diagram": "+-- INDIRECT TCP (I-TCP) SPLIT-CONNECTION ARCHITECTURE --+\\n| [Fixed Host] <====== Standard Wired TCP ======> [Base Station] <== Optimized Wireless ==> [Mobile Host]\\n|                                                    | (Acts as Proxy)\\n|                                                    +- ACK sent to Fixed Host early!\\n|                                                    +- Violates End-to-End Semantics",
        "applications": [
          "Cellular carrier performance-enhancing proxies (PEP) accelerating mobile web browsing.",
          "Satellite internet proxy gateways hiding 600ms latency from client TCP stacks.",
          "Industrial automation wireless telemetry backhauls."
        ],
        "examImportantPoints": [
          "Explain why traditional TCP performs poorly in wireless mobile environments.",
          "Draw and describe the architecture of Indirect TCP (I-TCP) showing how the connection is split.",
          "Discuss the major advantages and disadvantages of I-TCP, focusing on the violation of end-to-end semantics."
        ],
        "quickRevisionNotes": [
          "I-TCP splits connection at Base Station: Wired TCP + Wireless TCP.",
          "Advantage: Shields wired host from wireless drops; isolates errors.",
          "Disadvantage: Violates end-to-end semantics; buffer handover overhead."
        ]
      }
    }
  },
  {
    "id": "mc-u4-t2",
    "subjectId": "mc",
    "unitId": "mc-u4",
    "unitNumber": 4,
    "unitTitle": "Mobile Transport Layer & Data Management",
    "topicNumber": 2,
    "title": "Snooping TCP, Mobile TCP (M-TCP) & Fast Retransmit",
    "objectives": [
      "Analyze Snooping TCP architecture preserving end-to-end TCP semantics.",
      "Implement local retransmission and duplicate ACK suppression algorithms at the foreign agent.",
      "Evaluate Mobile TCP (M-TCP) handling long disconnections via Zero-Window Advertisements (ZWA)."
    ],
    "keywords": [
      "Snooping TCP",
      "Mobile TCP",
      "M-TCP",
      "Fast Retransmit",
      "Snoop Protocol",
      "NACK",
      "Local Retransmission",
      "Zero Window",
      "Disconnection"
    ],
    "content": {
      "beginner": {
        "summary": "Because Indirect TCP violates end-to-end reliability guarantees, alternative mobile transport protocols were developed to preserve end-to-end semantic...",
        "theory": "Because Indirect TCP violates end-to-end reliability guarantees, alternative mobile transport protocols were developed to preserve end-to-end semantics while mitigating wireless drops. Snooping TCP deploys a Snoop Agent inside the base station that passively monitors (snoops on) TCP packets flowing in both directions without terminating the connection. Mobile TCP (M-TCP) is designed specifically to handle high error rates, low bandwidth, and frequent prolonged disconnections (such as entering tunnels) without crashing TCP session timers.",
        "definitions": [
          {
            "term": "Snooping TCP",
            "definition": "A transport layer optimization where the base station caches packets and performs local retransmissions while suppressing duplicate ACKs."
          },
          {
            "term": "Duplicate ACK Suppression",
            "definition": "The act of filtering out duplicate ACKs at the base station to prevent the sender from triggering Fast Retransmit and cutting cwnd."
          },
          {
            "term": "Zero Window Advertisement (ZWA)",
            "definition": "A TCP flow control mechanism advertising a receive window of 0 bytes, forcing the sender into persist mode without closing the connection."
          }
        ],
        "keyConcepts": [
          {
            "title": "Preserving End-to-End Guarantees in Snooping TCP",
            "explanation": "Because the base station never generates fake ACKs, an ACK reaching the fixed host guarantees the mobile host physically received the byte.",
            "example": "Maintains strict compliance with standard TCP RFC contracts."
          },
          {
            "title": "M-TCP Disconnection Recovery",
            "explanation": "Without M-TCP, 10 seconds in a tunnel causes multiple exponential timeout backoffs, dropping cwnd to 1 and stalling recovery. ZWA keeps cwnd wide open.",
            "example": "Upon exiting tunnel, data flows immediately at line rate."
          }
        ],
        "diagram": "+-- SNOOPING TCP BUFFERING & DUPLICATE ACK SUPPRESSION --+\\n| [Fixed Host] <================ End-to-End TCP ================> [Mobile Host]\\n|                                  |\\n|                                  v\\n|                        [ Base Station: Snoop Agent ]\\n|                        [ Caches un-ACKed packets   ]\\n|                        +- Suppresses Duplicate ACKs!\\n|                        +- Performs fast local retransmission",
        "applications": [
          "Modern cellular LTE/5G Radio Link Control (RLC) acknowledged mode buffers.",
          "Wi-Fi MAC-layer automatic repeat request (ARQ) retransmission mechanisms.",
          "Railway and highway cellular passenger connectivity."
        ],
        "examImportantPoints": [
          "Explain the working mechanism of Snooping TCP and how it suppresses duplicate ACKs.",
          "Compare I-TCP and Snooping TCP across: end-to-end semantics, base station overhead, and handoff handling.",
          "Describe how Mobile TCP (M-TCP) uses Zero Window Advertisements to survive frequent disconnections."
        ],
        "quickRevisionNotes": [
          "Snooping TCP preserves end-to-end semantics (no split connection).",
          "Base station caches packets and retransmits locally on duplicate ACKs.",
          "Duplicate ACKs are suppressed from reaching the fixed host.",
          "M-TCP advertises Zero Window (ZWA) during disconnects to freeze sender without timeout."
        ]
      },
      "intermediate": {
        "summary": "How Snooping TCP Works: 1. Packets from the wired sender to the mobile host are cached in a local buffer at the base station as they pass through. 2. ...",
        "theory": "How Snooping TCP Works: 1. Packets from the wired sender to the mobile host are cached in a local buffer at the base station as they pass through. 2. The base station snoops on returning ACKs from the mobile host. 3. If the base station detects packet loss (evidenced by duplicate ACKs or a local timeout), the Snoop Agent immediately retransmits the missing segment from its local cache to the mobile host. 4. Critically, the Snoop Agent SUPPRESSES duplicate ACKs from reaching the original sender! The wired sender remains completely unaware of the wireless drop, never triggers congestion control, and end-to-end semantics are strictly preserved.",
        "definitions": [
          {
            "term": "Snooping TCP",
            "definition": "A transport layer optimization where the base station caches packets and performs local retransmissions while suppressing duplicate ACKs."
          },
          {
            "term": "Duplicate ACK Suppression",
            "definition": "The act of filtering out duplicate ACKs at the base station to prevent the sender from triggering Fast Retransmit and cutting cwnd."
          },
          {
            "term": "Zero Window Advertisement (ZWA)",
            "definition": "A TCP flow control mechanism advertising a receive window of 0 bytes, forcing the sender into persist mode without closing the connection."
          }
        ],
        "keyConcepts": [
          {
            "title": "Preserving End-to-End Guarantees in Snooping TCP",
            "explanation": "Because the base station never generates fake ACKs, an ACK reaching the fixed host guarantees the mobile host physically received the byte.",
            "example": "Maintains strict compliance with standard TCP RFC contracts."
          },
          {
            "title": "M-TCP Disconnection Recovery",
            "explanation": "Without M-TCP, 10 seconds in a tunnel causes multiple exponential timeout backoffs, dropping cwnd to 1 and stalling recovery. ZWA keeps cwnd wide open.",
            "example": "Upon exiting tunnel, data flows immediately at line rate."
          }
        ],
        "diagram": "+-- SNOOPING TCP BUFFERING & DUPLICATE ACK SUPPRESSION --+\\n| [Fixed Host] <================ End-to-End TCP ================> [Mobile Host]\\n|                                  |\\n|                                  v\\n|                        [ Base Station: Snoop Agent ]\\n|                        [ Caches un-ACKed packets   ]\\n|                        +- Suppresses Duplicate ACKs!\\n|                        +- Performs fast local retransmission",
        "applications": [
          "Modern cellular LTE/5G Radio Link Control (RLC) acknowledged mode buffers.",
          "Wi-Fi MAC-layer automatic repeat request (ARQ) retransmission mechanisms.",
          "Railway and highway cellular passenger connectivity."
        ],
        "examImportantPoints": [
          "Explain the working mechanism of Snooping TCP and how it suppresses duplicate ACKs.",
          "Compare I-TCP and Snooping TCP across: end-to-end semantics, base station overhead, and handoff handling.",
          "Describe how Mobile TCP (M-TCP) uses Zero Window Advertisements to survive frequent disconnections."
        ],
        "quickRevisionNotes": [
          "Snooping TCP preserves end-to-end semantics (no split connection).",
          "Base station caches packets and retransmits locally on duplicate ACKs.",
          "Duplicate ACKs are suppressed from reaching the fixed host."
        ]
      },
      "advanced": {
        "summary": "How Mobile TCP (M-TCP) Handles Disconnection: When a mobile host moves into a dead zone or initiates a handoff, M-TCP forces the sender into a Persist...",
        "theory": "How Mobile TCP (M-TCP) Handles Disconnection: When a mobile host moves into a dead zone or initiates a handoff, M-TCP forces the sender into a Persist Mode rather than a Congestion mode. The Supervisory Host (SH) monitors link connectivity; upon detecting a disconnection, it intercepts incoming packets and sends an ACK back to the sender advertising a Receive Window of ZERO (ZWA: Zero Window Advertisement). This forces the sender to freeze transmission and enter Persist Mode (sending periodic 1-byte probe packets without reducing cwnd or resetting ssthresh). When the mobile reconnects, the SH sends an updated window advertisement, instantly resuming full-speed transmission without Slow-Start penalties.",
        "definitions": [
          {
            "term": "Snooping TCP",
            "definition": "A transport layer optimization where the base station caches packets and performs local retransmissions while suppressing duplicate ACKs."
          },
          {
            "term": "Duplicate ACK Suppression",
            "definition": "The act of filtering out duplicate ACKs at the base station to prevent the sender from triggering Fast Retransmit and cutting cwnd."
          },
          {
            "term": "Zero Window Advertisement (ZWA)",
            "definition": "A TCP flow control mechanism advertising a receive window of 0 bytes, forcing the sender into persist mode without closing the connection."
          }
        ],
        "keyConcepts": [
          {
            "title": "Preserving End-to-End Guarantees in Snooping TCP",
            "explanation": "Because the base station never generates fake ACKs, an ACK reaching the fixed host guarantees the mobile host physically received the byte.",
            "example": "Maintains strict compliance with standard TCP RFC contracts."
          },
          {
            "title": "M-TCP Disconnection Recovery",
            "explanation": "Without M-TCP, 10 seconds in a tunnel causes multiple exponential timeout backoffs, dropping cwnd to 1 and stalling recovery. ZWA keeps cwnd wide open.",
            "example": "Upon exiting tunnel, data flows immediately at line rate."
          }
        ],
        "diagram": "+-- SNOOPING TCP BUFFERING & DUPLICATE ACK SUPPRESSION --+\\n| [Fixed Host] <================ End-to-End TCP ================> [Mobile Host]\\n|                                  |\\n|                                  v\\n|                        [ Base Station: Snoop Agent ]\\n|                        [ Caches un-ACKed packets   ]\\n|                        +- Suppresses Duplicate ACKs!\\n|                        +- Performs fast local retransmission",
        "applications": [
          "Modern cellular LTE/5G Radio Link Control (RLC) acknowledged mode buffers.",
          "Wi-Fi MAC-layer automatic repeat request (ARQ) retransmission mechanisms.",
          "Railway and highway cellular passenger connectivity."
        ],
        "examImportantPoints": [
          "Explain the working mechanism of Snooping TCP and how it suppresses duplicate ACKs.",
          "Compare I-TCP and Snooping TCP across: end-to-end semantics, base station overhead, and handoff handling.",
          "Describe how Mobile TCP (M-TCP) uses Zero Window Advertisements to survive frequent disconnections."
        ],
        "quickRevisionNotes": [
          "Base station caches packets and retransmits locally on duplicate ACKs.",
          "Duplicate ACKs are suppressed from reaching the fixed host.",
          "M-TCP advertises Zero Window (ZWA) during disconnects to freeze sender without timeout."
        ]
      }
    }
  },
  {
    "id": "mc-u4-t3",
    "subjectId": "mc",
    "unitId": "mc-u4",
    "unitNumber": 4,
    "unitTitle": "Mobile Transport Layer & Data Management",
    "topicNumber": 3,
    "title": "Mobile Data Dissemination, Caching, Hoarding & Disconnected Operations",
    "objectives": [
      "Compare Mobile Data Dissemination mechanisms: Pull (on-demand), Push (broadcast), and Hybrid dissemination.",
      "Analyze Broadcast Disks and indexing techniques for energy-efficient data retrieval.",
      "Evaluate Disconnected Operations and caching/hoarding architectures (the CODA distributed file system)."
    ],
    "keywords": [
      "Data Dissemination",
      "Push-based",
      "Pull-based",
      "Broadcast Disks",
      "Caching",
      "Hoarding",
      "Disconnected Operation",
      "CODA",
      "Replication"
    ],
    "content": {
      "beginner": {
        "summary": "Mobile devices face asymmetric communications: wireless downstream bandwidth (broadcast from base stations) is vast and cheap, whereas upstream bandwi...",
        "theory": "Mobile devices face asymmetric communications: wireless downstream bandwidth (broadcast from base stations) is vast and cheap, whereas upstream bandwidth (transmission from battery-powered mobile devices) is scarce, expensive, and energy-draining. Mobile Data Dissemination addresses how information is efficiently distributed across mobile clients: 1. Pull-based (On-demand): Clients explicitly request data via upstream queries (poor scalability under high client volume). 2. Push-based (Broadcast): Servers broadcast scheduled data streams to all listening clients simultaneously (infinite client scalability, zero upstream power). 3. Hybrid: Combines scheduled broadcasts for popular data with pull channels for personalized requests.",
        "definitions": [
          {
            "term": "Broadcast Disk",
            "definition": "A technique that cyclically broadcasts data pages with frequencies proportional to their popularity, simulating a multi-tiered disk storage."
          },
          {
            "term": "Hoarding",
            "definition": "The predictive pre-caching of files into local mobile memory before an anticipated network disconnection."
          },
          {
            "term": "CODA File System",
            "definition": "An advanced distributed file system designed for mobile computing supporting disconnected operation through caching and reintegration."
          }
        ],
        "keyConcepts": [
          {
            "title": "Energy Efficiency via Broadcast Indexing",
            "explanation": "Listening to RF broadcasts drains battery continuously. An index header tells the mobile: \"Stock quote arrives at slot 452\". Phone sleeps for 451 slots.",
            "example": "Extends mobile battery life by up to 90% in broadcast telemetry."
          },
          {
            "title": "Reintegration Conflict Resolution",
            "explanation": "If file A was edited on the disconnected laptop and concurrently modified on the corporate file server, reintegration detects the conflicting timestamps.",
            "example": "CODA uses Application-Specific Resolvers (ASR) to auto-merge changes."
          }
        ],
        "diagram": "+-- CODA DISCONNECTED OPERATION STATE TRANSITIONS --+\\n|   [ Hoarding State ]  (Connected: Prefetching & caching files into HDB)\\n|           |\\n|           | Disconnection\\n|           v\\n|   [ Emulating State ] (Disconnected: Client simulates server, logs to CML)\\n|           |\\n|           | Reconnection\\n|           v\\n|   [ Reintegrating ]   (Syncs CML to server; resolves conflicting writes)",
        "applications": [
          "Stock market quote and financial ticker broadcast streams.",
          "Offline note-taking and document collaboration apps (Google Docs offline mode).",
          "Remote field-worker utility mapping tablets operating in cellular dead zones."
        ],
        "examImportantPoints": [
          "Differentiate Push-based and Pull-based data dissemination in mobile computing.",
          "Describe the three operational states of the CODA file system: Hoarding, Emulation, and Reintegration.",
          "Explain how Broadcast Disks structure hot and cold data pages and how indexing saves battery power."
        ],
        "quickRevisionNotes": [
          "Downstream bandwidth >> Upstream bandwidth (asymmetric communication).",
          "Broadcast disks: Hot data broadcast frequently; cold data broadcast rarely.",
          "Indexing allows mobile radio to sleep until target data slot arrives.",
          "CODA states: Hoarding (connected) -> Emulation (disconnected) -> Reintegration (reconnected)."
        ]
      },
      "intermediate": {
        "summary": "Broadcast Disks structure periodic broadcast streams as multi-speed rotating disks: hot (popular) data pages are broadcast multiple times per cycle, w...",
        "theory": "Broadcast Disks structure periodic broadcast streams as multi-speed rotating disks: hot (popular) data pages are broadcast multiple times per cycle, while cold (rare) pages are broadcast once per major cycle. To preserve mobile device battery, data streams include Index Information (e.g., (1, m) indexing or distributed trees). A mobile device wakes up, reads the index, determines the exact future arrival slot of its desired data, transitions its radio into sleep mode to conserve power, and wakes up precisely when the target page arrives. Caching stores previously accessed data in local mobile flash memory, drastically reducing wireless queries.",
        "definitions": [
          {
            "term": "Broadcast Disk",
            "definition": "A technique that cyclically broadcasts data pages with frequencies proportional to their popularity, simulating a multi-tiered disk storage."
          },
          {
            "term": "Hoarding",
            "definition": "The predictive pre-caching of files into local mobile memory before an anticipated network disconnection."
          },
          {
            "term": "CODA File System",
            "definition": "An advanced distributed file system designed for mobile computing supporting disconnected operation through caching and reintegration."
          }
        ],
        "keyConcepts": [
          {
            "title": "Energy Efficiency via Broadcast Indexing",
            "explanation": "Listening to RF broadcasts drains battery continuously. An index header tells the mobile: \"Stock quote arrives at slot 452\". Phone sleeps for 451 slots.",
            "example": "Extends mobile battery life by up to 90% in broadcast telemetry."
          },
          {
            "title": "Reintegration Conflict Resolution",
            "explanation": "If file A was edited on the disconnected laptop and concurrently modified on the corporate file server, reintegration detects the conflicting timestamps.",
            "example": "CODA uses Application-Specific Resolvers (ASR) to auto-merge changes."
          }
        ],
        "diagram": "+-- CODA DISCONNECTED OPERATION STATE TRANSITIONS --+\\n|   [ Hoarding State ]  (Connected: Prefetching & caching files into HDB)\\n|           |\\n|           | Disconnection\\n|           v\\n|   [ Emulating State ] (Disconnected: Client simulates server, logs to CML)\\n|           |\\n|           | Reconnection\\n|           v\\n|   [ Reintegrating ]   (Syncs CML to server; resolves conflicting writes)",
        "applications": [
          "Stock market quote and financial ticker broadcast streams.",
          "Offline note-taking and document collaboration apps (Google Docs offline mode).",
          "Remote field-worker utility mapping tablets operating in cellular dead zones."
        ],
        "examImportantPoints": [
          "Differentiate Push-based and Pull-based data dissemination in mobile computing.",
          "Describe the three operational states of the CODA file system: Hoarding, Emulation, and Reintegration.",
          "Explain how Broadcast Disks structure hot and cold data pages and how indexing saves battery power."
        ],
        "quickRevisionNotes": [
          "Downstream bandwidth >> Upstream bandwidth (asymmetric communication).",
          "Broadcast disks: Hot data broadcast frequently; cold data broadcast rarely.",
          "Indexing allows mobile radio to sleep until target data slot arrives."
        ]
      },
      "advanced": {
        "summary": "When a mobile device disconnects completely (airplane, subway), it must support Disconnected Operations. The CODA Distributed File System formalizes t...",
        "theory": "When a mobile device disconnects completely (airplane, subway), it must support Disconnected Operations. The CODA Distributed File System formalizes this across three operational states: 1. Hoarding State: While connected, CODA predicts future user needs and hoards (pre-caches) critical files and directories locally using an automated Hoard Database (HDB). 2. Emulating State: When disconnected, the local client cache emulates the remote server, logging all local file modifications in a Client Modification Log (CML). 3. Reintegrating State: Upon reconnection, CODA syncs the CML back to the server, performing automated conflict resolution or alerting the user to write-write conflicts.",
        "definitions": [
          {
            "term": "Broadcast Disk",
            "definition": "A technique that cyclically broadcasts data pages with frequencies proportional to their popularity, simulating a multi-tiered disk storage."
          },
          {
            "term": "Hoarding",
            "definition": "The predictive pre-caching of files into local mobile memory before an anticipated network disconnection."
          },
          {
            "term": "CODA File System",
            "definition": "An advanced distributed file system designed for mobile computing supporting disconnected operation through caching and reintegration."
          }
        ],
        "keyConcepts": [
          {
            "title": "Energy Efficiency via Broadcast Indexing",
            "explanation": "Listening to RF broadcasts drains battery continuously. An index header tells the mobile: \"Stock quote arrives at slot 452\". Phone sleeps for 451 slots.",
            "example": "Extends mobile battery life by up to 90% in broadcast telemetry."
          },
          {
            "title": "Reintegration Conflict Resolution",
            "explanation": "If file A was edited on the disconnected laptop and concurrently modified on the corporate file server, reintegration detects the conflicting timestamps.",
            "example": "CODA uses Application-Specific Resolvers (ASR) to auto-merge changes."
          }
        ],
        "diagram": "+-- CODA DISCONNECTED OPERATION STATE TRANSITIONS --+\\n|   [ Hoarding State ]  (Connected: Prefetching & caching files into HDB)\\n|           |\\n|           | Disconnection\\n|           v\\n|   [ Emulating State ] (Disconnected: Client simulates server, logs to CML)\\n|           |\\n|           | Reconnection\\n|           v\\n|   [ Reintegrating ]   (Syncs CML to server; resolves conflicting writes)",
        "applications": [
          "Stock market quote and financial ticker broadcast streams.",
          "Offline note-taking and document collaboration apps (Google Docs offline mode).",
          "Remote field-worker utility mapping tablets operating in cellular dead zones."
        ],
        "examImportantPoints": [
          "Differentiate Push-based and Pull-based data dissemination in mobile computing.",
          "Describe the three operational states of the CODA file system: Hoarding, Emulation, and Reintegration.",
          "Explain how Broadcast Disks structure hot and cold data pages and how indexing saves battery power."
        ],
        "quickRevisionNotes": [
          "Broadcast disks: Hot data broadcast frequently; cold data broadcast rarely.",
          "Indexing allows mobile radio to sleep until target data slot arrives.",
          "CODA states: Hoarding (connected) -> Emulation (disconnected) -> Reintegration (reconnected)."
        ]
      }
    }
  },
  {
    "id": "mc-u5-t1",
    "subjectId": "mc",
    "unitId": "mc-u5",
    "unitNumber": 5,
    "unitTitle": "MANET Routing Protocols & Mobile Security",
    "topicNumber": 1,
    "title": "Mobile Ad-Hoc Networks (MANET): Characteristics, Challenges & Applications",
    "objectives": [
      "Formulate the Mobile Ad-Hoc Network (MANET) paradigm and identify core characteristics.",
      "Analyze unique technical challenges: dynamic topology, asymmetric links, bandwidth constraints, and energy dissipation.",
      "Evaluate MANET applications in disaster relief, tactical battlefields, and Vehicular Ad-Hoc Networks (VANETs)."
    ],
    "keywords": [
      "MANET",
      "Ad-Hoc",
      "Multi-Hop",
      "Infrastructureless",
      "Dynamic Topology",
      "Energy Constraint",
      "VANET",
      "Self-Organizing",
      "Security Vulnerabilities"
    ],
    "content": {
      "beginner": {
        "summary": "A Mobile Ad-Hoc Network (MANET) is a self-configuring, infrastructureless network of mobile devices connected wirelessly without the aid of any centra...",
        "theory": "A Mobile Ad-Hoc Network (MANET) is a self-configuring, infrastructureless network of mobile devices connected wirelessly without the aid of any centralized administration, fixed base stations, or routers. In a MANET, every mobile node acts simultaneously as both an end-host and a Router, forwarding packets on behalf of other nodes across Multi-Hop paths. Nodes are free to move randomly, meaning the network topology changes dynamically and unpredictably. Because links can break at any moment, routing protocols must rapidly discover new paths without flooding the network with excessive control overhead.",
        "definitions": [
          {
            "term": "MANET",
            "definition": "An autonomous, decentralized collection of mobile nodes communicating over multi-hop wireless links without fixed infrastructure."
          },
          {
            "term": "Multi-Hop Routing",
            "definition": "A packet delivery technique where data traverses intermediate intermediary nodes to reach destinations beyond direct radio transmission range."
          },
          {
            "term": "VANET (Vehicular Ad-Hoc Network)",
            "definition": "A specialized high-speed MANET enabling communication between vehicles and roadside infrastructure units."
          }
        ],
        "keyConcepts": [
          {
            "title": "Every Node is a Router",
            "explanation": "In cellular networks, the base station handles all routing. In MANETs, if intermediate nodes refuse to forward packets (selfish behavior), communication collapses.",
            "example": "Incentive schemes (reputation systems, micropayments) encourage cooperative forwarding."
          },
          {
            "title": "Topology Dynamics and Scalability",
            "explanation": "As node velocity and network size grow, the rate of link breaks increases exponentially. Routing protocols that flood updates cause broadcast storms.",
            "example": "Requires on-demand discovery or hierarchical clustering."
          }
        ],
        "diagram": "+-- MOBILE AD-HOC NETWORK (MANET) MULTI-HOP TOPOLOGY --+\\n| [Source S] ----> [Node A] ----> [Node B] ----> [Destination D]\\n|                    ^              |\\n|                    |              v\\n|                 [Node C] <---> [Node E]\\n| (Every node acts as an intermediate router; no central base station exists!)",
        "applications": [
          "Military tactical battlefield communications where infrastructure is destroyed or absent.",
          "Emergency search and rescue operations during earthquakes and floods.",
          "Vehicular platooning and collision warning networks (VANETs)."
        ],
        "examImportantPoints": [
          "List and explain five major characteristics and challenges of Mobile Ad-Hoc Networks (MANETs).",
          "Explain why conventional routing protocols (like RIP and OSPF) fail in MANET environments.",
          "Differentiate MANET and VANET in terms of node mobility, power constraints, and topological predictability."
        ],
        "quickRevisionNotes": [
          "MANET: Infrastructureless, self-configuring, multi-hop wireless network.",
          "Every mobile node acts as both an end-host and an intermediate router.",
          "Challenges: Rapid dynamic topology, energy constraints, asymmetric links, security.",
          "VANET = Vehicles on roads (high speed, road constrained, ample battery)."
        ]
      },
      "intermediate": {
        "summary": "Core Characteristics and Technical Challenges of MANETs: 1. Dynamic Topology: Rapid node mobility causes frequent link breaks, route rediscovery, and ...",
        "theory": "Core Characteristics and Technical Challenges of MANETs: 1. Dynamic Topology: Rapid node mobility causes frequent link breaks, route rediscovery, and stale routing table entries. 2. Bandwidth & Energy Constraints: Mobile nodes rely on exhaustible batteries; wireless links have variable bit error rates and shared channel capacity. 3. Asymmetric (Unidirectional) Links: Due to disparate transmission power or local interference, Node A may reach Node B while Node B cannot reach Node A. 4. Decentralized Security: The absence of a central Certificate Authority (CA) or central firewall leaves MANETs highly vulnerable to eavesdropping, spoofing, denial of service, and Byzantine routing attacks.",
        "definitions": [
          {
            "term": "MANET",
            "definition": "An autonomous, decentralized collection of mobile nodes communicating over multi-hop wireless links without fixed infrastructure."
          },
          {
            "term": "Multi-Hop Routing",
            "definition": "A packet delivery technique where data traverses intermediate intermediary nodes to reach destinations beyond direct radio transmission range."
          },
          {
            "term": "VANET (Vehicular Ad-Hoc Network)",
            "definition": "A specialized high-speed MANET enabling communication between vehicles and roadside infrastructure units."
          }
        ],
        "keyConcepts": [
          {
            "title": "Every Node is a Router",
            "explanation": "In cellular networks, the base station handles all routing. In MANETs, if intermediate nodes refuse to forward packets (selfish behavior), communication collapses.",
            "example": "Incentive schemes (reputation systems, micropayments) encourage cooperative forwarding."
          },
          {
            "title": "Topology Dynamics and Scalability",
            "explanation": "As node velocity and network size grow, the rate of link breaks increases exponentially. Routing protocols that flood updates cause broadcast storms.",
            "example": "Requires on-demand discovery or hierarchical clustering."
          }
        ],
        "diagram": "+-- MOBILE AD-HOC NETWORK (MANET) MULTI-HOP TOPOLOGY --+\\n| [Source S] ----> [Node A] ----> [Node B] ----> [Destination D]\\n|                    ^              |\\n|                    |              v\\n|                 [Node C] <---> [Node E]\\n| (Every node acts as an intermediate router; no central base station exists!)",
        "applications": [
          "Military tactical battlefield communications where infrastructure is destroyed or absent.",
          "Emergency search and rescue operations during earthquakes and floods.",
          "Vehicular platooning and collision warning networks (VANETs)."
        ],
        "examImportantPoints": [
          "List and explain five major characteristics and challenges of Mobile Ad-Hoc Networks (MANETs).",
          "Explain why conventional routing protocols (like RIP and OSPF) fail in MANET environments.",
          "Differentiate MANET and VANET in terms of node mobility, power constraints, and topological predictability."
        ],
        "quickRevisionNotes": [
          "MANET: Infrastructureless, self-configuring, multi-hop wireless network.",
          "Every mobile node acts as both an end-host and an intermediate router.",
          "Challenges: Rapid dynamic topology, energy constraints, asymmetric links, security."
        ]
      },
      "advanced": {
        "summary": "Specialized MANET subsets: 1. VANET (Vehicular Ad-Hoc Networks): Fast-moving vehicles on roads communicating via V2V (Vehicle-to-Vehicle) using IEEE 8...",
        "theory": "Specialized MANET subsets: 1. VANET (Vehicular Ad-Hoc Networks): Fast-moving vehicles on roads communicating via V2V (Vehicle-to-Vehicle) using IEEE 802.11p (DSRC) / C-V2X; characterized by predictable road constrained mobility, abundant battery power, and strict real-time safety deadlines. 2. Flying Ad-Hoc Networks (FANET): High-mobility autonomous drones collaborating in 3D airspace. 3. WSN (Wireless Sensor Networks): Battery-critical static or low-mobility nodes collecting physical telemetry with sleep cycles.",
        "definitions": [
          {
            "term": "MANET",
            "definition": "An autonomous, decentralized collection of mobile nodes communicating over multi-hop wireless links without fixed infrastructure."
          },
          {
            "term": "Multi-Hop Routing",
            "definition": "A packet delivery technique where data traverses intermediate intermediary nodes to reach destinations beyond direct radio transmission range."
          },
          {
            "term": "VANET (Vehicular Ad-Hoc Network)",
            "definition": "A specialized high-speed MANET enabling communication between vehicles and roadside infrastructure units."
          }
        ],
        "keyConcepts": [
          {
            "title": "Every Node is a Router",
            "explanation": "In cellular networks, the base station handles all routing. In MANETs, if intermediate nodes refuse to forward packets (selfish behavior), communication collapses.",
            "example": "Incentive schemes (reputation systems, micropayments) encourage cooperative forwarding."
          },
          {
            "title": "Topology Dynamics and Scalability",
            "explanation": "As node velocity and network size grow, the rate of link breaks increases exponentially. Routing protocols that flood updates cause broadcast storms.",
            "example": "Requires on-demand discovery or hierarchical clustering."
          }
        ],
        "diagram": "+-- MOBILE AD-HOC NETWORK (MANET) MULTI-HOP TOPOLOGY --+\\n| [Source S] ----> [Node A] ----> [Node B] ----> [Destination D]\\n|                    ^              |\\n|                    |              v\\n|                 [Node C] <---> [Node E]\\n| (Every node acts as an intermediate router; no central base station exists!)",
        "applications": [
          "Military tactical battlefield communications where infrastructure is destroyed or absent.",
          "Emergency search and rescue operations during earthquakes and floods.",
          "Vehicular platooning and collision warning networks (VANETs)."
        ],
        "examImportantPoints": [
          "List and explain five major characteristics and challenges of Mobile Ad-Hoc Networks (MANETs).",
          "Explain why conventional routing protocols (like RIP and OSPF) fail in MANET environments.",
          "Differentiate MANET and VANET in terms of node mobility, power constraints, and topological predictability."
        ],
        "quickRevisionNotes": [
          "Every mobile node acts as both an end-host and an intermediate router.",
          "Challenges: Rapid dynamic topology, energy constraints, asymmetric links, security.",
          "VANET = Vehicles on roads (high speed, road constrained, ample battery)."
        ]
      }
    }
  },
  {
    "id": "mc-u5-t2",
    "subjectId": "mc",
    "unitId": "mc-u5",
    "unitNumber": 5,
    "unitTitle": "MANET Routing Protocols & Mobile Security",
    "topicNumber": 2,
    "title": "MANET Routing Protocols: Table-Driven (DSDV) vs On-Demand (AODV, DSR)",
    "objectives": [
      "Classify MANET routing protocols into Table-Driven (Proactive), On-Demand (Reactive), and Hybrid categories.",
      "Analyze Destination-Sequenced Distance-Vector (DSDV) routing and sequence number loop elimination.",
      "Detail Ad-Hoc On-Demand Distance Vector (AODV) and Dynamic Source Routing (DSR) RREQ/RREP route discovery cycles."
    ],
    "keywords": [
      "MANET Routing",
      "Table-Driven",
      "On-Demand",
      "Proactive",
      "Reactive",
      "DSDV",
      "AODV",
      "DSR",
      "RREQ",
      "RREP",
      "RERR",
      "Sequence Numbers"
    ],
    "content": {
      "beginner": {
        "summary": "Routing protocols in MANETs are broadly classified into three categories: 1. Table-Driven (Proactive) Protocols: Nodes continuously maintain complete,...",
        "theory": "Routing protocols in MANETs are broadly classified into three categories: 1. Table-Driven (Proactive) Protocols: Nodes continuously maintain complete, up-to-date routing information to every other node in the network by periodically broadcasting routing tables (e.g. DSDV). Routes are immediately available when needed, but periodic updates consume massive bandwidth and battery. 2. On-Demand (Reactive) Protocols: Nodes discover routes only when a source needs to transmit data to a destination (e.g. AODV, DSR). This saves bandwidth and battery when traffic is idle, at the expense of initial route discovery latency. 3. Hybrid Protocols: Combine proactive routing for local clusters with reactive routing for distant nodes (e.g. ZRP - Zone Routing Protocol).",
        "definitions": [
          {
            "term": "Proactive (Table-Driven) Routing",
            "definition": "A routing paradigm where all network nodes continuously maintain routes to all destinations through periodic table exchanges."
          },
          {
            "term": "Reactive (On-Demand) Routing",
            "definition": "A routing paradigm where paths are established only when explicitly needed by a sending station."
          },
          {
            "term": "Route Request (RREQ)",
            "definition": "A broadcast packet initiated by a source node to discover a path to an unknown destination in reactive routing."
          }
        ],
        "keyConcepts": [
          {
            "title": "Loop Freedom via Sequence Numbers in DSDV",
            "explanation": "If link breaks, sequence number is incremented to an odd number with infinite metric. The destination increments to the next even number upon recovery.",
            "example": "Completely eliminates Bellman-Ford count-to-infinity loops."
          },
          {
            "title": "Source Routing (DSR) vs Hop-by-Hop (AODV)",
            "explanation": "In DSR, the packet header contains [Node1 -> Node2 -> Node3 -> Dest]. In AODV, packet header contains only [Dest]; intermediate nodes check local routing table.",
            "example": "AODV header is fixed size; DSR header grows with hop count."
          }
        ],
        "diagram": "+-- AODV ROUTE DISCOVERY CYCLE (RREQ & RREP) --+\\n| Route Request (Broadcast):\\n|   [Source S] === RREQ (Broadcast) ===> [Node A] ===> [Destination D]\\n| Route Reply (Unicast along reverse path):\\n|   [Source S] <=== RREP (Unicast) <==== [Node A] <=== [Destination D]\\n| Active Link Breakage: [Node A] ---> RERR ---> [Source S] (Triggers new RREQ)",
        "applications": [
          "Tactical troop convoy ad-hoc radio communications using AODV routing.",
          "Post-disaster search and rescue ad-hoc tablet swarms.",
          "Drone swarm coordinated mesh networks."
        ],
        "examImportantPoints": [
          "Compare Table-Driven (Proactive) and On-Demand (Reactive) MANET routing protocols across latency, routing overhead, and memory.",
          "Explain the complete AODV route discovery and route maintenance mechanism using RREQ, RREP, and RERR packets.",
          "Contrast AODV and DSR: explain source routing vs hop-by-hop routing and header overhead implications."
        ],
        "quickRevisionNotes": [
          "Proactive (DSDV): Constant updates, zero latency, high overhead.",
          "Reactive (AODV, DSR): On-demand discovery, saves battery, initial discovery latency.",
          "DSDV uses sequence numbers to guarantee loop freedom.",
          "AODV = Hop-by-hop routing; DSR = Source routing (path in header)."
        ]
      },
      "intermediate": {
        "summary": "1. DSDV (Destination-Sequenced Distance-Vector): An enhanced Bellman-Ford protocol. To prevent routing loops and Count-to-Infinity, every routing upda...",
        "theory": "1. DSDV (Destination-Sequenced Distance-Vector): An enhanced Bellman-Ford protocol. To prevent routing loops and Count-to-Infinity, every routing update carries a Destination Sequence Number generated by the destination node. Nodes always prefer routes with higher sequence numbers (fresher routes); for equal sequence numbers, the route with lower metric (hop count) is chosen. 2. AODV (Ad-Hoc On-Demand Distance Vector): When Source S needs a route to D, it broadcasts a Route Request (RREQ) packet. Intermediate nodes record a reverse path back to S. When D (or a node with a fresh route to D) receives RREQ, it unifies a Route Reply (RREP) back along the reverse path. If an active link breaks, a Route Error (RERR) packet notifies upstream senders.",
        "definitions": [
          {
            "term": "Proactive (Table-Driven) Routing",
            "definition": "A routing paradigm where all network nodes continuously maintain routes to all destinations through periodic table exchanges."
          },
          {
            "term": "Reactive (On-Demand) Routing",
            "definition": "A routing paradigm where paths are established only when explicitly needed by a sending station."
          },
          {
            "term": "Route Request (RREQ)",
            "definition": "A broadcast packet initiated by a source node to discover a path to an unknown destination in reactive routing."
          }
        ],
        "keyConcepts": [
          {
            "title": "Loop Freedom via Sequence Numbers in DSDV",
            "explanation": "If link breaks, sequence number is incremented to an odd number with infinite metric. The destination increments to the next even number upon recovery.",
            "example": "Completely eliminates Bellman-Ford count-to-infinity loops."
          },
          {
            "title": "Source Routing (DSR) vs Hop-by-Hop (AODV)",
            "explanation": "In DSR, the packet header contains [Node1 -> Node2 -> Node3 -> Dest]. In AODV, packet header contains only [Dest]; intermediate nodes check local routing table.",
            "example": "AODV header is fixed size; DSR header grows with hop count."
          }
        ],
        "diagram": "+-- AODV ROUTE DISCOVERY CYCLE (RREQ & RREP) --+\\n| Route Request (Broadcast):\\n|   [Source S] === RREQ (Broadcast) ===> [Node A] ===> [Destination D]\\n| Route Reply (Unicast along reverse path):\\n|   [Source S] <=== RREP (Unicast) <==== [Node A] <=== [Destination D]\\n| Active Link Breakage: [Node A] ---> RERR ---> [Source S] (Triggers new RREQ)",
        "applications": [
          "Tactical troop convoy ad-hoc radio communications using AODV routing.",
          "Post-disaster search and rescue ad-hoc tablet swarms.",
          "Drone swarm coordinated mesh networks."
        ],
        "examImportantPoints": [
          "Compare Table-Driven (Proactive) and On-Demand (Reactive) MANET routing protocols across latency, routing overhead, and memory.",
          "Explain the complete AODV route discovery and route maintenance mechanism using RREQ, RREP, and RERR packets.",
          "Contrast AODV and DSR: explain source routing vs hop-by-hop routing and header overhead implications."
        ],
        "quickRevisionNotes": [
          "Proactive (DSDV): Constant updates, zero latency, high overhead.",
          "Reactive (AODV, DSR): On-demand discovery, saves battery, initial discovery latency.",
          "DSDV uses sequence numbers to guarantee loop freedom."
        ]
      },
      "advanced": {
        "summary": "DSR (Dynamic Source Routing) vs AODV: In DSR, the entire source route (the ordered list of intermediate node IDs) is accumulated in the RREQ header an...",
        "theory": "DSR (Dynamic Source Routing) vs AODV: In DSR, the entire source route (the ordered list of intermediate node IDs) is accumulated in the RREQ header and copied into every data packet header (Source Routing). Intermediate nodes do not need to store routing tables for every destination. In AODV, packets carry only the destination IP; intermediate nodes maintain routing table entries pointing to the next hop (Hop-by-Hop Routing). Consequently, DSR suffers from high packet header overhead as path length scales, whereas AODV scales better to larger network diameters.",
        "definitions": [
          {
            "term": "Proactive (Table-Driven) Routing",
            "definition": "A routing paradigm where all network nodes continuously maintain routes to all destinations through periodic table exchanges."
          },
          {
            "term": "Reactive (On-Demand) Routing",
            "definition": "A routing paradigm where paths are established only when explicitly needed by a sending station."
          },
          {
            "term": "Route Request (RREQ)",
            "definition": "A broadcast packet initiated by a source node to discover a path to an unknown destination in reactive routing."
          }
        ],
        "keyConcepts": [
          {
            "title": "Loop Freedom via Sequence Numbers in DSDV",
            "explanation": "If link breaks, sequence number is incremented to an odd number with infinite metric. The destination increments to the next even number upon recovery.",
            "example": "Completely eliminates Bellman-Ford count-to-infinity loops."
          },
          {
            "title": "Source Routing (DSR) vs Hop-by-Hop (AODV)",
            "explanation": "In DSR, the packet header contains [Node1 -> Node2 -> Node3 -> Dest]. In AODV, packet header contains only [Dest]; intermediate nodes check local routing table.",
            "example": "AODV header is fixed size; DSR header grows with hop count."
          }
        ],
        "diagram": "+-- AODV ROUTE DISCOVERY CYCLE (RREQ & RREP) --+\\n| Route Request (Broadcast):\\n|   [Source S] === RREQ (Broadcast) ===> [Node A] ===> [Destination D]\\n| Route Reply (Unicast along reverse path):\\n|   [Source S] <=== RREP (Unicast) <==== [Node A] <=== [Destination D]\\n| Active Link Breakage: [Node A] ---> RERR ---> [Source S] (Triggers new RREQ)",
        "applications": [
          "Tactical troop convoy ad-hoc radio communications using AODV routing.",
          "Post-disaster search and rescue ad-hoc tablet swarms.",
          "Drone swarm coordinated mesh networks."
        ],
        "examImportantPoints": [
          "Compare Table-Driven (Proactive) and On-Demand (Reactive) MANET routing protocols across latency, routing overhead, and memory.",
          "Explain the complete AODV route discovery and route maintenance mechanism using RREQ, RREP, and RERR packets.",
          "Contrast AODV and DSR: explain source routing vs hop-by-hop routing and header overhead implications."
        ],
        "quickRevisionNotes": [
          "Reactive (AODV, DSR): On-demand discovery, saves battery, initial discovery latency.",
          "DSDV uses sequence numbers to guarantee loop freedom.",
          "AODV = Hop-by-hop routing; DSR = Source routing (path in header)."
        ]
      }
    }
  },
  {
    "id": "mc-u5-t3",
    "subjectId": "mc",
    "unitId": "mc-u5",
    "unitNumber": 5,
    "unitTitle": "MANET Routing Protocols & Mobile Security",
    "topicNumber": 3,
    "title": "Mobile Security Architecture, WEP/WPA Vulnerabilities & Wireless Authentication",
    "objectives": [
      "Analyze vulnerabilities in legacy Wired Equivalent Privacy (WEP) encryption (RC4 key reuse, IV weakness).",
      "Evaluate WPA, WPA2 (AES-CCMP), and WPA3 (Simultaneous Authentication of Equals SAE) security architectures.",
      "Trace the 802.11i 4-Way Handshake and analyze modern wireless exploits (KRACK, Evil Twin attacks)."
    ],
    "keywords": [
      "Mobile Security",
      "WEP",
      "WPA",
      "WPA2",
      "WPA3",
      "RC4",
      "AES",
      "TKIP",
      "4-Way Handshake",
      "KRACK Attack",
      "EAP"
    ],
    "content": {
      "beginner": {
        "summary": "Because wireless radio transmissions propagate through open air, anyone with a commercial Wi-Fi receiver can eavesdrop on packets, inject spoofed fram...",
        "theory": "Because wireless radio transmissions propagate through open air, anyone with a commercial Wi-Fi receiver can eavesdrop on packets, inject spoofed frames, or jam frequencies without physical building access. The earliest wireless security standard was WEP (Wired Equivalent Privacy, 1997), intended to provide security comparable to wired Ethernet. However, WEP was fundamentally broken due to cryptographic flaws: a short 24-bit Initialization Vector (IV) and the RC4 stream cipher allowed attackers to crack passwords in under 60 seconds by capturing a few thousand packets. This spurred the development of WPA, WPA2 (AES-CCMP), and the modern WPA3 standard.",
        "definitions": [
          {
            "term": "WEP (Wired Equivalent Privacy)",
            "definition": "A deprecated, highly vulnerable early IEEE 802.11 security protocol using RC4 and 24-bit initialization vectors."
          },
          {
            "term": "WPA2 / WPA3",
            "definition": "Modern Wi-Fi security protocols utilizing AES-CCMP encryption and Simultaneous Authentication of Equals (SAE) handshakes."
          },
          {
            "term": "4-Way Handshake",
            "definition": "The cryptographic key exchange process in WPA2/WPA3 that generates dynamic session encryption keys without transmitting credentials."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why 24-bit IVs Killed WEP",
            "explanation": "With 2^24 possible IVs, a busy 10 Mbps Wi-Fi link wraps around IV space in under 5 hours. Two packets encrypted with the exact same key stream can be XORed to reveal plaintext.",
            "example": "WPA increased IV length to 48 bits, extending wrap time to centuries."
          },
          {
            "title": "WPA3 Protection Against Dictionary Attacks",
            "explanation": "In WPA2-Personal, attackers capture the 4-way handshake and test billions of dictionary passwords offline. WPA3 SAE requires active participation in every guess.",
            "example": "Eliminates offline password cracking."
          }
        ],
        "diagram": "+-- 802.11i WPA2 4-WAY HANDSHAKE KEY EXCHANGE --+\\n| Client (Supplicant)                            Access Point (Authenticator)\\n|         | <--- Message 1: ANonce ----------------- |\\n|         | (Client derives PTK using ANonce+SNonce)  |\\n|         | --- Message 2: SNonce + MIC -----------> |\\n|         | (AP derives PTK and verifies MIC)         |\\n|         | <--- Message 3: Install PTK + GTK ------ |\\n|         | --- Message 4: Acknowledgment ---------> |\\n| Both sides now encrypt user data using verified AES-CCMP session key!",
        "applications": [
          "Enterprise 802.1X RADIUS authentication for corporate university Wi-Fi networks.",
          "Home WPA2-PSK and WPA3-SAE encrypted broadband routers.",
          "Mobile cellular SIM-based EAP-SIM / EAP-AKA Wi-Fi offloading."
        ],
        "examImportantPoints": [
          "Explain the cryptographic vulnerabilities that led to the collapse of WEP security (short IV, linear CRC, RC4 weaknesses).",
          "Trace the step-by-step operation of the IEEE 802.11i 4-Way Handshake.",
          "Compare WEP, WPA, WPA2, and WPA3 across encryption algorithms, key integrity mechanisms, and authentication methods."
        ],
        "quickRevisionNotes": [
          "WEP is insecure: 24-bit IV collision + RC4 weak keys + linear CRC-32.",
          "WPA added TKIP (48-bit IV, dynamic key mixing).",
          "WPA2 uses AES-CCMP (industry standard robust encryption).",
          "WPA3 uses SAE (Dragonfly) preventing offline dictionary attacks."
        ]
      },
      "intermediate": {
        "summary": "Evolution of Wi-Fi Security Protocols: 1. WEP: 64/128-bit RC4 stream cipher with static shared key and 24-bit IV. Due to the Birthday Paradox, the 24-...",
        "theory": "Evolution of Wi-Fi Security Protocols: 1. WEP: 64/128-bit RC4 stream cipher with static shared key and 24-bit IV. Due to the Birthday Paradox, the 24-bit IV repeats within hours, enabling analytical key recovery (Fluhrer-Mantin-Shamir FMS attack). CRC-32 used for integrity is linear, allowing bit-flipping attacks. 2. WPA (Wi-Fi Protected Access): Interim fix utilizing Temporal Key Integrity Protocol (TKIP) with per-packet dynamic key mixing and 48-bit IVs. 3. WPA2 (IEEE 802.11i): Replaced weak RC4 with enterprise-grade AES (Advanced Encryption Standard) in CCMP mode (Counter Mode with CBC-MAC), providing rock-solid confidentiality and cryptographic integrity. 4. WPA3 (2018): Replaced Pre-Shared Key (PSK) with SAE (Simultaneous Authentication of Equals / Dragonfly handshake), providing forward secrecy and immunity to offline dictionary brute-force attacks.",
        "definitions": [
          {
            "term": "WEP (Wired Equivalent Privacy)",
            "definition": "A deprecated, highly vulnerable early IEEE 802.11 security protocol using RC4 and 24-bit initialization vectors."
          },
          {
            "term": "WPA2 / WPA3",
            "definition": "Modern Wi-Fi security protocols utilizing AES-CCMP encryption and Simultaneous Authentication of Equals (SAE) handshakes."
          },
          {
            "term": "4-Way Handshake",
            "definition": "The cryptographic key exchange process in WPA2/WPA3 that generates dynamic session encryption keys without transmitting credentials."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why 24-bit IVs Killed WEP",
            "explanation": "With 2^24 possible IVs, a busy 10 Mbps Wi-Fi link wraps around IV space in under 5 hours. Two packets encrypted with the exact same key stream can be XORed to reveal plaintext.",
            "example": "WPA increased IV length to 48 bits, extending wrap time to centuries."
          },
          {
            "title": "WPA3 Protection Against Dictionary Attacks",
            "explanation": "In WPA2-Personal, attackers capture the 4-way handshake and test billions of dictionary passwords offline. WPA3 SAE requires active participation in every guess.",
            "example": "Eliminates offline password cracking."
          }
        ],
        "diagram": "+-- 802.11i WPA2 4-WAY HANDSHAKE KEY EXCHANGE --+\\n| Client (Supplicant)                            Access Point (Authenticator)\\n|         | <--- Message 1: ANonce ----------------- |\\n|         | (Client derives PTK using ANonce+SNonce)  |\\n|         | --- Message 2: SNonce + MIC -----------> |\\n|         | (AP derives PTK and verifies MIC)         |\\n|         | <--- Message 3: Install PTK + GTK ------ |\\n|         | --- Message 4: Acknowledgment ---------> |\\n| Both sides now encrypt user data using verified AES-CCMP session key!",
        "applications": [
          "Enterprise 802.1X RADIUS authentication for corporate university Wi-Fi networks.",
          "Home WPA2-PSK and WPA3-SAE encrypted broadband routers.",
          "Mobile cellular SIM-based EAP-SIM / EAP-AKA Wi-Fi offloading."
        ],
        "examImportantPoints": [
          "Explain the cryptographic vulnerabilities that led to the collapse of WEP security (short IV, linear CRC, RC4 weaknesses).",
          "Trace the step-by-step operation of the IEEE 802.11i 4-Way Handshake.",
          "Compare WEP, WPA, WPA2, and WPA3 across encryption algorithms, key integrity mechanisms, and authentication methods."
        ],
        "quickRevisionNotes": [
          "WEP is insecure: 24-bit IV collision + RC4 weak keys + linear CRC-32.",
          "WPA added TKIP (48-bit IV, dynamic key mixing).",
          "WPA2 uses AES-CCMP (industry standard robust encryption)."
        ]
      },
      "advanced": {
        "summary": "The 802.11i 4-Way Handshake establishes dynamic session keys (PTK - Pairwise Transient Key) derived from the Master Key (PMK), client random nonce (AN...",
        "theory": "The 802.11i 4-Way Handshake establishes dynamic session keys (PTK - Pairwise Transient Key) derived from the Master Key (PMK), client random nonce (ANonce), and AP random nonce (SNonce) without ever transmitting the password over the air. In 2017, the Key Reinstallation Attack (KRACK) exposed a flaw in the 4-Way Handshake: by manipulating retransmitted Message 3 of the handshake, attackers trick the client into reinstalling an already-in-use encryption key, resetting packet replay counters to zero and decrypting WPA2 traffic. Modern mitigation enforces stateful nonces and strict key reinstallation rejection.",
        "definitions": [
          {
            "term": "WEP (Wired Equivalent Privacy)",
            "definition": "A deprecated, highly vulnerable early IEEE 802.11 security protocol using RC4 and 24-bit initialization vectors."
          },
          {
            "term": "WPA2 / WPA3",
            "definition": "Modern Wi-Fi security protocols utilizing AES-CCMP encryption and Simultaneous Authentication of Equals (SAE) handshakes."
          },
          {
            "term": "4-Way Handshake",
            "definition": "The cryptographic key exchange process in WPA2/WPA3 that generates dynamic session encryption keys without transmitting credentials."
          }
        ],
        "keyConcepts": [
          {
            "title": "Why 24-bit IVs Killed WEP",
            "explanation": "With 2^24 possible IVs, a busy 10 Mbps Wi-Fi link wraps around IV space in under 5 hours. Two packets encrypted with the exact same key stream can be XORed to reveal plaintext.",
            "example": "WPA increased IV length to 48 bits, extending wrap time to centuries."
          },
          {
            "title": "WPA3 Protection Against Dictionary Attacks",
            "explanation": "In WPA2-Personal, attackers capture the 4-way handshake and test billions of dictionary passwords offline. WPA3 SAE requires active participation in every guess.",
            "example": "Eliminates offline password cracking."
          }
        ],
        "diagram": "+-- 802.11i WPA2 4-WAY HANDSHAKE KEY EXCHANGE --+\\n| Client (Supplicant)                            Access Point (Authenticator)\\n|         | <--- Message 1: ANonce ----------------- |\\n|         | (Client derives PTK using ANonce+SNonce)  |\\n|         | --- Message 2: SNonce + MIC -----------> |\\n|         | (AP derives PTK and verifies MIC)         |\\n|         | <--- Message 3: Install PTK + GTK ------ |\\n|         | --- Message 4: Acknowledgment ---------> |\\n| Both sides now encrypt user data using verified AES-CCMP session key!",
        "applications": [
          "Enterprise 802.1X RADIUS authentication for corporate university Wi-Fi networks.",
          "Home WPA2-PSK and WPA3-SAE encrypted broadband routers.",
          "Mobile cellular SIM-based EAP-SIM / EAP-AKA Wi-Fi offloading."
        ],
        "examImportantPoints": [
          "Explain the cryptographic vulnerabilities that led to the collapse of WEP security (short IV, linear CRC, RC4 weaknesses).",
          "Trace the step-by-step operation of the IEEE 802.11i 4-Way Handshake.",
          "Compare WEP, WPA, WPA2, and WPA3 across encryption algorithms, key integrity mechanisms, and authentication methods."
        ],
        "quickRevisionNotes": [
          "WPA added TKIP (48-bit IV, dynamic key mixing).",
          "WPA2 uses AES-CCMP (industry standard robust encryption).",
          "WPA3 uses SAE (Dragonfly) preventing offline dictionary attacks."
        ]
      }
    }
  }
];
