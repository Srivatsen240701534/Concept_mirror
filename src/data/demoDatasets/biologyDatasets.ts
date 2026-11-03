import { DemoDataset } from '../../types';

export const BIOLOGY_DATASETS: DemoDataset[] = [
  {
    id: 'bio-human-anatomy',
    title: 'Human Anatomy & Skeletal-Muscular Architecture',
    subject: 'Biology',
    domain: 'Anatomy & Morphological Sciences',
    difficulty: 'Beginner',
    summary: 'The human structural framework: axial and appendicular skeleton, joint types, muscle insertion, and spatial anatomical directions.',
    tags: ['Bones', 'Joints', 'Muscles', 'Axial', 'Appendicular'],
    explanation: {
      topic: 'Human Anatomy & Skeletal-Muscular Architecture',
      subject: 'Biology',
      summary: 'The human body is structured around an articulated bony scaffold powered by antagonistic muscle pairings.',
      keyConcepts: [
        {
          name: 'Axial vs Appendicular Skeleton',
          explanation: 'Axial (80 bones: skull, vertebral column, rib cage) protects vital organs; appendicular (126 bones: limbs and girdles) enables locomotion.',
          importance: 'Underpins mechanical support and central nervous system protection.'
        },
        {
          name: 'Joint Classifications',
          explanation: 'Synarthroses (immovable sutures), amphiarthroses (cartilaginous slightly movable), and diarthroses (synovial freely movable: ball-and-socket, hinge, pivot).',
          importance: 'Provides balance between structural rigidity and kinetic range of motion.'
        },
        {
          name: 'Antagonistic Muscle Pairs',
          explanation: 'Muscles only contract (pull); they cannot push. Movement requires agonist-antagonist pairings (e.g., biceps flex, triceps extend).',
          importance: 'Essential for bidirectional skeletal articulation and posture control.'
        }
      ],
      prerequisites: ['Basic tissues (epithelial, connective, muscular, nervous)'],
      misconceptions: [
        'Bones are dead, inert calcium deposits rather than dynamic, vascularized living tissues remodeling constantly.',
        'Muscles can push joints back into resting extension.',
        'Tendons connect bone to bone (ligaments connect bone to bone; tendons connect muscle to bone).'
      ],
      learningObjectives: [
        'Differentiate between axial and appendicular structural components.',
        'Classify synovial joints and describe their degrees of freedom.',
        'Explain bone remodeling via osteoblasts and osteoclasts.'
      ]
    },
    questions: [
      {
        id: 'q-bio-1',
        topic: 'Human Anatomy',
        subject: 'Biology',
        question: 'Why do skeletal muscles always work in antagonistic pairs (such as the biceps and triceps brachii)?',
        conceptTargeted: 'Muscular Contraction Mechanism',
        difficulty: 'Beginner',
        hints: [
          'Can a contracting sarcomere actively lengthen by pushing outward?',
          'How is the arm returned to an extended position after flexion?'
        ],
        idealAnswer: 'Skeletal muscle fibers can only produce active tension by contracting (shortening via actin-myosin cross-bridge cycles); they cannot actively expand or push. Therefore, to return a joint to its original position or move in the opposite direction, an opposing muscle (antagonist) located on the opposite side of the joint must contract while the primary muscle (agonist) relaxes.',
        rubric: {
          accuracy: 45,
          depth: 30,
          clarity: 25
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-bio-1',
        studentAnswer: 'Because muscles can only pull and shorten, they cannot push. So an opposite muscle is needed to pull the bone back.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 92,
        feedback: 'Direct, clear, and biomechanically accurate!'
      }
    ]
  },
  {
    id: 'bio-genetics',
    title: 'Genetics, DNA Replication & Mendelian Inheritance',
    subject: 'Biology',
    domain: 'Molecular & Classical Genetics',
    difficulty: 'Intermediate',
    summary: 'Mendel\'s laws (segregation, independent assortment), DNA double helix, semi-conservative replication, and transcription/translation.',
    tags: ['DNA', 'Mendel', 'Punnett Squares', 'Replication', 'Central Dogma'],
    explanation: {
      topic: 'Genetics, DNA Replication & Mendelian Inheritance',
      subject: 'Biology',
      summary: 'Genetic information encoded in antiparallel DNA duplexes is replicated faithfully and expressed via transcription and translation.',
      keyConcepts: [
        {
          name: 'Central Dogma of Molecular Biology',
          explanation: 'Information flows from DNA (replication) to messenger RNA via transcription, and from mRNA to polypeptide chains via ribosomal translation.',
          importance: 'Explains how genotypes give rise to functional phenotypes.'
        },
        {
          name: 'Semi-Conservative Replication',
          explanation: 'Each daughter DNA double helix contains one conserved parental template strand and one newly synthesized daughter strand (Meselson-Stahl experiment).',
          importance: 'Ensures high-fidelity preservation of genetic blueprints across cell generations.'
        },
        {
          name: 'Mendelian Segregation & Assortment',
          explanation: 'Alleles for a gene segregate during gametogenesis (meiosis I); unlinked gene pairs assort independently.',
          importance: 'Produces predictable phenotypic ratios (e.g. 3:1 monohybrid, 9:3:3:1 dihybrid).'
        }
      ],
      prerequisites: ['Basic cell structure', 'Nucleic acid structure (A, T, C, G)'],
      misconceptions: [
        'Dominant traits are always more common or healthier in a population than recessive traits.',
        'Both strands of DNA are synthesized continuously during replication (lagging strand requires Okazaki fragments).',
        'Mutations always cause harmful diseases.'
      ],
      learningObjectives: [
        'Trace semi-conservative DNA synthesis including helicase, primase, DNA polymerase, and ligase.',
        'Calculate expected offspring genotypes using Punnett squares and probability rules.',
        'Distinguish point mutations (silent, missense, nonsense) from frameshifts.'
      ]
    },
    questions: [
      {
        id: 'q-bio-2',
        topic: 'Genetics',
        subject: 'Biology',
        question: 'Why does the lagging strand of DNA have to be synthesized discontinuously in Okazaki fragments during replication?',
        conceptTargeted: 'DNA Polymerase Directionality',
        difficulty: 'Intermediate',
        hints: [
          'In what chemical direction can DNA polymerases synthesize new strands?',
          'What is the antiparallel orientation of the replication fork?'
        ],
        idealAnswer: 'DNA polymerases can only add free deoxyribonucleotides to the 3\'-OH end of an existing strand, meaning synthesis strictly occurs in the 5\' to 3\' direction. Because the two parental DNA strands are antiparallel, as the replication fork unzips in one direction, the lagging strand template runs 5\' to 3\', requiring the enzyme to synthesize away from the fork in short, periodic chunks called Okazaki fragments, which are subsequently joined by DNA ligase.',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-bio-2',
        studentAnswer: 'Because DNA polymerase can only build in the 5\' to 3\' direction, and since the DNA strands run opposite to each other, one strand has to be made in backwards pieces called Okazaki fragments.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 94,
        feedback: 'Outstanding explanation! You clearly linked the antiparallel structure to polymerase 5\' to 3\' enzymatic constraints.'
      }
    ]
  },
  {
    id: 'bio-cell-biology',
    title: 'Cell Biology, Organelles & Cell Division',
    subject: 'Biology',
    domain: 'Cytology & Cellular Physiology',
    difficulty: 'Beginner',
    summary: 'Prokaryotic vs eukaryotic cells, organelle functions (mitochondria, ER, Golgi, lysosomes), cell membrane transport, and mitotic cycle.',
    tags: ['Organelles', 'Mitochondria', 'Mitosis', 'Membrane Transport', 'ATP'],
    explanation: {
      topic: 'Cell Biology, Organelles & Cell Division',
      subject: 'Biology',
      summary: 'The cell is the basic structural and functional unit of life, relying on compartmentalized membrane-bound organelles to coordinate metabolism and division.',
      keyConcepts: [
        {
          name: 'Endomembrane System',
          explanation: 'Rough ER synthesizes proteins, Smooth ER synthesizes lipids and detoxifies, Golgi modifies and sorts cargo into vesicles for trafficking.',
          importance: 'Prevents metabolic interference through physical compartmentalization.'
        },
        {
          name: 'Mitochondrial Chemiosmosis',
          explanation: 'The inner membrane electron transport chain pumps protons into the intermembrane space, driving ATP synthesis via ATP synthase.',
          importance: 'Generates ~90% of cellular energy (ATP) in aerobic eukaryotes.'
        },
        {
          name: 'Mitotic Cell Cycle (M-Phase)',
          explanation: 'Prophase, Metaphase, Anaphase, and Telophase ensure exact chromosomal segregation into two genetically identical daughter cells.',
          importance: 'Underlies growth, tissue repair, and asexual reproduction.'
        }
      ],
      prerequisites: ['Basic biomolecules: carbohydrates, lipids, proteins, nucleic acids'],
      misconceptions: [
        'Plant cells only have chloroplasts and lack mitochondria.',
        'Diffusion requires energy if it happens across a membrane.',
        'Mitosis produces haploid gametes (meiosis produces gametes; mitosis produces identical diploids).'
      ],
      learningObjectives: [
        'Identify structures and functions of eukaryotic organelles.',
        'Distinguish passive diffusion and facilitated diffusion from active transport.',
        'Sequence the phases of mitosis and describe spindle fiber mechanics.'
      ]
    },
    questions: [
      {
        id: 'q-bio-3',
        topic: 'Cell Biology',
        subject: 'Biology',
        question: 'Do plant cells have mitochondria? If so, why do they need them if they already contain chloroplasts?',
        conceptTargeted: 'Photosynthesis vs Cellular Respiration',
        difficulty: 'Beginner',
        hints: [
          'What do chloroplasts synthesize?',
          'How do plant cells generate ATP during the night or in root tissues lacking sunlight?'
        ],
        idealAnswer: 'Yes, plant cells contain mitochondria. Chloroplasts use sunlight to synthesize sugars via photosynthesis, but mitochondria are needed to break down those carbohydrates via cellular respiration into usable ATP for cellular work, both in non-photosynthetic organs (like roots) and in photosynthetic tissues during darkness.',
        rubric: {
          accuracy: 50,
          depth: 25,
          clarity: 25
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-bio-3',
        studentAnswer: 'Yes, plant cells have mitochondria because chloroplasts make glucose from sun, but the cell still needs mitochondria to turn that glucose into ATP energy for night time and root cells.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 92,
        feedback: 'Spot on! You dispelled a very common misconception with clarity.'
      }
    ]
  },
  {
    id: 'bio-human-physiology',
    title: 'Human Physiology & Cardiovascular-Respiratory Systems',
    subject: 'Biology',
    domain: 'Physiology & Systems Biology',
    difficulty: 'Intermediate',
    summary: 'Homeostasis, cardiac cycle, pulmonary gas exchange, nephron filtration in kidneys, and negative feedback loops.',
    tags: ['Circulation', 'Heart', 'Lungs', 'Homeostasis', 'Nephrons'],
    explanation: {
      topic: 'Human Physiology & Cardiovascular-Respiratory Systems',
      subject: 'Biology',
      summary: 'Organ systems operate in concert via negative feedback to maintain homeostatic equilibrium across varying metabolic demands.',
      keyConcepts: [
        {
          name: 'Homeostatic Negative Feedback',
          explanation: 'Sensors detect deviation from set point, an integrating center calculates error, and effectors trigger responses to reverse the perturbation.',
          importance: 'Maintains core temperature, arterial blood pressure, and blood glucose.'
        },
        {
          name: 'Cardiac Double Circulation',
          explanation: 'Right ventricle pumps deoxygenated blood to pulmonary capillaries; left ventricle pumps oxygenated blood to systemic circulation.',
          importance: 'Allows systemic blood to be delivered at high pressure while protecting fragile lung capillaries.'
        },
        {
          name: 'Gas Exchange and Hemoglobin Transport',
          explanation: 'O2 and CO2 diffuse down partial pressure gradients across alveoli; O2 binds cooperatively to hemoglobin heme groups.',
          importance: 'Enables continuous tissue cellular respiration.'
        }
      ],
      prerequisites: ['Basic anatomy', 'Cellular respiration concepts'],
      misconceptions: [
        'Veins always carry deoxygenated blood and arteries always carry oxygenated blood (pulmonary artery carries deoxygenated blood; pulmonary veins carry oxygenated blood).',
        'Homeostasis means physiological variables remain completely static and frozen without fluctuation.',
        'Negative feedback produces harmful outcomes because of the word "negative".'
      ],
      learningObjectives: [
        'Trace blood flow through all four chambers, valves, and pulmonary/systemic circuits.',
        'Explain how partial pressure gradients facilitate gas diffusion across alveolar membranes.',
        'Delineate the components of a homeostatic regulatory loop.'
      ]
    },
    questions: [
      {
        id: 'q-bio-4',
        topic: 'Human Physiology',
        subject: 'Biology',
        question: 'Why is the pulmonary artery an exception to the rule that arteries carry oxygenated blood?',
        conceptTargeted: 'Cardiovascular Circulatory Circuit',
        difficulty: 'Beginner',
        hints: [
          'How are arteries and veins anatomically defined (direction of flow relative to the heart)?',
          'Where is the right ventricle pumping blood to?'
        ],
        idealAnswer: 'Arteries are anatomically defined as vessels that carry blood away from the heart, not by whether the blood is oxygenated. The pulmonary artery carries blood away from the right ventricle toward the lungs specifically to get oxygenated, which is why it carries deoxygenated blood.',
        rubric: {
          accuracy: 50,
          depth: 30,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-bio-4',
        studentAnswer: 'Arteries are defined as moving away from the heart, not whether they have oxygen. The pulmonary artery takes blood from the heart to the lungs to receive oxygen, so it is deoxygenated.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 93,
        feedback: 'Accurate distinction between anatomical vascular classification and blood gas content.'
      }
    ]
  },
  {
    id: 'bio-ecology',
    title: 'Ecology, Energy Flow & Ecosystem Dynamics',
    subject: 'Biology',
    domain: 'Ecology & Environmental Biology',
    difficulty: 'Intermediate',
    summary: 'Trophic levels, the 10% energy transfer rule, food webs, biogeochemical cycles (carbon, nitrogen), and ecological succession.',
    tags: ['Trophic Levels', 'Food Web', 'Carbon Cycle', 'Succession', 'Biodiversity'],
    explanation: {
      topic: 'Ecology, Energy Flow & Ecosystem Dynamics',
      subject: 'Biology',
      summary: 'Ecosystems operate on non-cyclical one-way energy flow from the sun coupled with closed cyclical nutrient recycling.',
      keyConcepts: [
        {
          name: 'The 10% Energy Transfer Law',
          explanation: 'Only approximately 10% of energy at one trophic level is incorporated into the biomass of the next; 90% is dissipated as metabolic heat and waste.',
          importance: 'Explains why food chains are rarely longer than 4-5 trophic levels.'
        },
        {
          name: 'Biogeochemical Cycles',
          explanation: 'Chemical elements (C, N, P, H2O) circulate continuously between biotic organisms and abiotic geological reservoirs.',
          importance: 'Ensures essential elements are recycled indefinitely on Earth.'
        },
        {
          name: 'Keystone Species & Trophic Cascades',
          explanation: 'A species that exerts top-down control over ecosystem structure disproportionate to its abundance (e.g., sea otters, wolves in Yellowstone).',
          importance: 'Maintains biodiversity and prevents community collapse.'
        }
      ],
      prerequisites: ['Photosynthesis', 'Basic population concepts'],
      misconceptions: [
        'Energy cycles within an ecosystem just like matter and nutrients do (matter cycles, but energy flows and dissipates).',
        'Top predators in a food chain are always the most numerous animals.',
        'Primary succession begins on soil that already contains organic compost.'
      ],
      learningObjectives: [
        'Calculate biomass and energy losses across multi-level trophic pyramids.',
        'Distinguish primary from secondary succession mechanisms.',
        'Illustrate how removal of a keystone predator initiates a trophic cascade.'
      ]
    },
    questions: [
      {
        id: 'q-bio-5',
        topic: 'Ecology',
        subject: 'Biology',
        question: 'Why are terrestrial food chains virtually never more than four or five trophic levels long?',
        conceptTargeted: 'Thermodynamics & 10% Energy Transfer Rule',
        difficulty: 'Beginner',
        hints: [
          'How much energy is lost as heat at each step?',
          'What happens to the available calories at trophic level 5 or 6?'
        ],
        idealAnswer: 'Due to the second law of thermodynamics and respiratory metabolism, only roughly 10% of chemical energy from one trophic level is transferred to biomass in the next. By the 4th or 5th trophic level (tertiary or quaternary consumer), less than 0.01% of original primary producer energy remains, which is insufficient to sustain a viable reproductive population of apex consumers.',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-bio-5',
        studentAnswer: 'Because around 90% of energy is lost as metabolic heat at every step, so after 4 or 5 levels there is not enough energy left to support another population.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 90,
        feedback: 'Concise and scientifically sound explanation of thermodynamic limits in trophic webs.'
      }
    ]
  },
  {
    id: 'bio-microbiology',
    title: 'Microbiology & Immunology',
    subject: 'Biology',
    domain: 'Microbiology & Infectious Diseases',
    difficulty: 'Advanced',
    summary: 'Bacteria vs viruses, Gram staining, antibiotics vs antivirals, innate vs adaptive immunity (B cells, T cells, antibodies), and vaccines.',
    tags: ['Bacteria', 'Viruses', 'Innate Immunity', 'Adaptive Immunity', 'Antibodies'],
    explanation: {
      topic: 'Microbiology & Immunology',
      subject: 'Biology',
      summary: 'Host defense relies on layered barriers, rapid non-specific innate responses, and targeted antigen-specific adaptive immunity with immunological memory.',
      keyConcepts: [
        {
          name: 'Innate vs Adaptive Immunity',
          explanation: 'Innate is immediate and non-specific (macrophages, neutrophils, complement); adaptive is delayed, highly antigen-specific, and creates long-term memory (B cells, T cells).',
          importance: 'Provides both immediate defense and lifetime protection against reinfection.'
        },
        {
          name: 'Humoral vs Cell-Mediated Immunity',
          explanation: 'Humoral (B-cells/plasma cells producing soluble antibodies against extracellular pathogens); cell-mediated (cytotoxic CD8+ T cells destroying infected host cells).',
          importance: 'Eliminates both circulating pathogens and intracellular viral reservoirs.'
        },
        {
          name: 'Antibiotics vs Antivirals',
          explanation: 'Antibiotics target bacterial structures absent in human cells (peptidoglycan cell wall, 70S ribosomes); they are completely ineffective against viruses.',
          importance: 'Prevents misuse of antibiotics and slows antimicrobial resistance (AMR).'
        }
      ],
      prerequisites: ['Cell biology', 'Protein structure', 'Molecular genetics'],
      misconceptions: [
        'Antibiotics can cure viral infections such as influenza or the common cold.',
        'Vaccines cause infection rather than presenting attenuated antigens to generate memory lymphocytes.',
        'Innate immunity remembers pathogens from past infections.'
      ],
      learningObjectives: [
        'Compare structural differences between gram-positive and gram-negative bacteria.',
        'Trace the activation of naïve B and T lymphocytes by antigen-presenting cells (APCs).',
        'Explain the mechanism of immunological memory and secondary immune responses.'
      ]
    },
    questions: [
      {
        id: 'q-bio-6',
        topic: 'Microbiology',
        subject: 'Biology',
        question: 'Why are antibiotics like penicillin completely ineffective against viral infections such as the influenza virus?',
        conceptTargeted: 'Target Specificity of Antimicrobial Agents',
        difficulty: 'Beginner',
        hints: [
          'What structure does penicillin target in bacteria?',
          'Do viruses possess cell walls, peptidoglycan, or their own metabolic machinery?'
        ],
        idealAnswer: 'Penicillin specifically inhibits bacterial transpeptidase enzymes required for synthesizing peptidoglycan in bacterial cell walls. Viruses are non-cellular entities that lack cell walls, peptidoglycan, ribosomes, and autonomous metabolic machinery, instead hijacking host machinery. Therefore, drugs targeting bacterial metabolic pathways have no viral target.',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-bio-6',
        studentAnswer: 'Penicillin attacks bacterial cell walls (peptidoglycan). Viruses do not have cell walls or independent metabolism, so penicillin has nothing to act on.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 95,
        feedback: 'Flawless answer highlighting the specific target of penicillin and the acellular nature of viruses.'
      }
    ]
  }
];
