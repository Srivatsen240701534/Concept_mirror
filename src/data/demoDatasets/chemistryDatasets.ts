import { DemoDataset } from '../../types';

export const CHEMISTRY_DATASETS: DemoDataset[] = [
  {
    id: 'chem-atomic-structure',
    title: 'Atomic Structure & Electron Configuration',
    subject: 'Chemistry',
    domain: 'Physical & Inorganic Chemistry',
    difficulty: 'Beginner',
    summary: 'The composition of atoms including protons, neutrons, electrons, energy levels, orbitals (s, p, d, f), and Hund\'s/Aufbau principles.',
    tags: ['Atoms', 'Electrons', 'Orbitals', 'Quantum Numbers', 'Periodic Table'],
    explanation: {
      topic: 'Atomic Structure & Electron Configuration',
      subject: 'Chemistry',
      summary: 'Atoms consist of a dense positive nucleus surrounded by quantized electron clouds.',
      keyConcepts: [
        {
          name: 'Subatomic Particles',
          explanation: 'Protons (+1 charge) and neutrons (neutral) reside in the nucleus; electrons (-1 charge) orbit in quantized shells.',
          importance: 'Determines mass number, atomic number, and nuclear stability.'
        },
        {
          name: 'Aufbau Principle',
          explanation: 'Electrons occupy the lowest energy orbitals available before filling higher ones (1s, 2s, 2p, 3s, 3p, 4s, 3d...).',
          importance: 'Underlies the layout of the periodic table and ground-state stability.'
        },
        {
          name: 'Hund\'s Rule & Pauli Exclusion Principle',
          explanation: 'Orbitals of equal energy are each occupied by one electron with parallel spin before pairing, and no two electrons share identical 4 quantum numbers.',
          importance: 'Explains magnetic properties (paramagnetism vs diamagnetism) and chemical valence.'
        }
      ],
      prerequisites: ['Basic units of matter', 'Elementary charge concepts'],
      misconceptions: [
        'Electrons orbit like solid planets in miniature solar systems rather than probabilistic wavefunctions.',
        'The 3d subshell always fills before the 4s subshell.',
        'Neutrons have a positive charge because they exist in the positive nucleus.'
      ],
      learningObjectives: [
        'Write ground-state electron configurations for elements 1-36.',
        'Explain the significance of valence electrons in bonding.',
        'Apply Hund\'s rule and Pauli exclusion principle to orbital box diagrams.'
      ]
    },
    questions: [
      {
        id: 'q-chem-1',
        topic: 'Atomic Structure',
        subject: 'Chemistry',
        question: 'Why does the 4s subshell fill before the 3d subshell in ground-state neutral transition metals like Scandium (Sc, Z=21)?',
        conceptTargeted: 'Aufbau Principle and Subshell Energy',
        difficulty: 'Intermediate',
        hints: [
          'Consider the (n + l) rule for orbital energies.',
          'Compare (4 + 0) with (3 + 2).'
        ],
        idealAnswer: 'Under the (n + l) rule (Madelung rule), the 4s orbital has n + l = 4 + 0 = 4, whereas the 3d orbital has n + l = 3 + 2 = 5. Lower (n + l) values possess lower energy in neutral atoms, so 4s fills before 3d.',
        rubric: {
          accuracy: 40,
          depth: 30,
          clarity: 30
        }
      },
      {
        id: 'q-chem-2',
        topic: 'Atomic Structure',
        subject: 'Chemistry',
        question: 'What is the physical meaning of an electron orbital in modern quantum chemistry compared to Bohr\'s orbit?',
        conceptTargeted: 'Quantum Mechanical Model',
        difficulty: 'Intermediate',
        hints: [
          'Think about the Heisenberg uncertainty principle and probability densities.',
          'Consider the square of the wave function |Ψ|².'
        ],
        idealAnswer: 'A Bohr orbit is a deterministic, 2D circular path with fixed radius. A quantum orbital is a 3D mathematical probability distribution (|Ψ|²) representing the region where finding an electron is approximately 90-95% probable.',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-chem-1',
        studentAnswer: 'Because 4s has lower energy according to the n+l rule (4 vs 5), so electrons fill 4s first.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 92,
        feedback: 'Excellent! You correctly identified the (n + l) energy ordering principle.'
      },
      {
        questionId: 'q-chem-2',
        studentAnswer: 'They are basically the same thing, just circles where the electron spins around the nucleus.',
        verdict: 'incorrect',
        score: 25,
        confidenceScore: 30,
        feedback: 'This is a classical misconception. Orbitals are 3D probability clouds derived from the wave function, not fixed circular tracks.'
      }
    ]
  },
  {
    id: 'chem-chemical-bonding',
    title: 'Chemical Bonding & Molecular Geometry',
    subject: 'Chemistry',
    domain: 'Inorganic & General Chemistry',
    difficulty: 'Intermediate',
    summary: 'Ionic, covalent, and metallic bonds, Lewis structures, electronegativity differences, and VSEPR theory for 3D molecular shapes.',
    tags: ['Ionic', 'Covalent', 'VSEPR', 'Electronegativity', 'Lewis Structures'],
    explanation: {
      topic: 'Chemical Bonding & Molecular Geometry',
      subject: 'Chemistry',
      summary: 'Atoms bond to achieve stable outer octets, adopting geometries that minimize valence electron pair repulsions.',
      keyConcepts: [
        {
          name: 'Covalent vs Ionic Bonding',
          explanation: 'Electronegativity differences (ΔEN > ~1.7 typically favors ionic transfer; ΔEN < 1.7 forms polar or non-polar covalent shared pairs).',
          importance: 'Governs melting points, electrical conductivity, and solubility.'
        },
        {
          name: 'VSEPR Theory',
          explanation: 'Valence Shell Electron Pair Repulsion theory states that electron pairs around a central atom maximize mutual angular separation.',
          importance: 'Predicts molecular geometries (linear, trigonal planar, tetrahedral, bent, trigonal bipyramidal).'
        },
        {
          name: 'Intermolecular Forces (IMF)',
          explanation: 'London dispersion, dipole-dipole, and hydrogen bonding that occur between separate molecules.',
          importance: 'Explains water\'s anomalously high boiling point and DNA base pairing stability.'
        }
      ],
      prerequisites: ['Atomic structure', 'Valence electrons', 'Periodic trends'],
      misconceptions: [
        'All bonds are either 100% ionic or 100% covalent without spectrum.',
        'Water (H2O) has a linear shape because there are two hydrogen atoms attached to one oxygen atom.',
        'Covalent bonds break when a molecular substance boils or evaporates.'
      ],
      learningObjectives: [
        'Draw valid Lewis electron dot structures including formal charges.',
        'Use VSEPR to deduce electron geometry and molecular shape.',
        'Differentiate intramolecular covalent bonds from intermolecular hydrogen bonds.'
      ]
    },
    questions: [
      {
        id: 'q-chem-3',
        topic: 'Chemical Bonding',
        subject: 'Chemistry',
        question: 'Why does water (H2O) have a bent molecular geometry (~104.5°) rather than a linear geometry (180°)?',
        conceptTargeted: 'VSEPR Theory & Lone Pair Repulsion',
        difficulty: 'Beginner',
        hints: [
          'Count the non-bonding electron pairs on oxygen.',
          'Compare lone pair-lone pair repulsion vs bonding pair repulsion.'
        ],
        idealAnswer: 'Oxygen has 8 valence electrons, forming 2 single bonds with hydrogen and leaving 2 non-bonding lone pairs. The 4 electron domains adopt a tetrahedral arrangement (~109.5°), but the unshared lone pairs exert stronger repulsive forces, compressing the H-O-H bond angle to ~104.5° in a bent molecular geometry.',
        rubric: {
          accuracy: 45,
          depth: 30,
          clarity: 25
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-chem-3',
        studentAnswer: 'Because oxygen has two lone pairs of electrons that repel the bonding hydrogens down, making it bent instead of linear.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 90,
        feedback: 'Accurate and concise! You identified both the two lone pairs and their repulsive effect.'
      }
    ]
  },
  {
    id: 'chem-organic-chemistry',
    title: 'Organic Chemistry & Reaction Mechanisms',
    subject: 'Chemistry',
    domain: 'Organic Chemistry',
    difficulty: 'Advanced',
    summary: 'Carbon chemistry, functional groups (alcohols, aldehydes, carboxylic acids), isomerism, and substitution vs elimination mechanisms (SN1, SN2, E1, E2).',
    tags: ['SN1', 'SN2', 'Functional Groups', 'Chirality', 'Nucleophiles'],
    explanation: {
      topic: 'Organic Chemistry & Reaction Mechanisms',
      subject: 'Chemistry',
      summary: 'Carbon forms versatile sp3, sp2, and sp frameworks yielding vast synthetic architectures characterized by functional groups and electron-pushing mechanisms.',
      keyConcepts: [
        {
          name: 'Nucleophiles and Electrophiles',
          explanation: 'Nucleophiles are electron-rich species with lone pairs or π bonds; electrophiles are electron-deficient with partial positive or empty orbitals.',
          importance: 'Fundamental driving force behind organic bond formation and cleavage.'
        },
        {
          name: 'SN1 vs SN2 Substitution',
          explanation: 'SN2 is a bimolecular concerted backside attack causing stereochemical inversion; SN1 is a unimolecular stepwise process involving a carbocation intermediate.',
          importance: 'Determines stereochemical outcome, reaction kinetics, and solvent dependence.'
        },
        {
          name: 'Stereochemistry and Chirality',
          explanation: 'Non-superimposable mirror image stereoisomers (enantiomers) possessing asymmetric stereocenters.',
          importance: 'Crucial for pharmaceutical efficacy where one enantiomer may be medicinal and the other toxic.'
        }
      ],
      prerequisites: ['Covalent bonding', 'Lewis structures', 'Electronegativity'],
      misconceptions: [
        'Curved arrows represent the movement of atoms or nuclei rather than electron pairs.',
        'SN1 and SN2 reactions only depend on temperature rather than substrate steric hindrance and solvent polarity.',
        'Constitutional isomers and stereoisomers have identical chemical properties in biological systems.'
      ],
      learningObjectives: [
        'Predict SN1 vs SN2 pathways based on substrate hindrance, nucleophile strength, and solvent.',
        'Use curved-arrow formalism to draw mechanistic intermediate steps.',
        'Assign R/S configurations to chiral stereocenters using Cahn-Ingold-Prelog priority rules.'
      ]
    },
    questions: [
      {
        id: 'q-chem-4',
        topic: 'Organic Chemistry',
        subject: 'Chemistry',
        question: 'Explain why a tertiary alkyl halide (e.g., tert-butyl bromide) undergoes substitution predominantly via SN1 rather than SN2.',
        conceptTargeted: 'Steric Hindrance and Carbocation Stability',
        difficulty: 'Advanced',
        hints: [
          'Consider steric hindrance for a backside nucleophilic attack.',
          'Consider hyperconjugation and inductive stabilization of the tertiary carbocation.'
        ],
        idealAnswer: 'In a tertiary alkyl halide, three bulky methyl groups create severe steric hindrance that physically blocks the nucleophile from executing the backside attack required by SN2. Concurrently, upon bromide leaving, the resulting tertiary carbocation is strongly stabilized by hyperconjugation and inductive electron donation from the three alkyl groups, favoring the stepwise SN1 pathway.',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-chem-4',
        studentAnswer: 'Because 3 methyl groups block the nucleophile from attacking the back (steric hindrance), and the 3-degree carbocation is stable.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 94,
        feedback: 'Spot on! You addressed both steric prevention of SN2 and the electronic stabilization of the carbocation in SN1.'
      }
    ]
  },
  {
    id: 'chem-acids-and-bases',
    title: 'Acids, Bases & Chemical Equilibrium',
    subject: 'Chemistry',
    domain: 'Physical Chemistry',
    difficulty: 'Intermediate',
    summary: 'Brønsted-Lowry & Lewis definitions, pH, pKa, buffer solutions, Henderson-Hasselbalch equation, and Le Chatelier’s principle.',
    tags: ['pH', 'pKa', 'Buffers', 'Equilibrium', 'Titration'],
    explanation: {
      topic: 'Acids, Bases & Chemical Equilibrium',
      subject: 'Chemistry',
      summary: 'Acid-base chemistry describes proton and electron pair transfer equilibria governing physiological and environmental systems.',
      keyConcepts: [
        {
          name: 'Brønsted-Lowry Conjugate Pairs',
          explanation: 'Acids are proton (H+) donors; bases are proton acceptors. Every acid forms a conjugate base upon deprotonation.',
          importance: 'Allows systematic tracking of equilibrium shifts and relative acid strengths.'
        },
        {
          name: 'pH and pKa',
          explanation: 'pH = -log[H+]; pKa = -log(Ka). When pH = pKa, acid and conjugate base concentrations are exactly equal.',
          importance: 'Quantifies acidity and ionization states across biological matrices.'
        },
        {
          name: 'Buffer Solutions',
          explanation: 'A solution of a weak acid and its conjugate base that resists drastic pH changes upon addition of small amounts of strong acid or base.',
          importance: 'Maintains blood pH within the narrow life-sustaining 7.35-7.45 window.'
        }
      ],
      prerequisites: ['Chemical equilibrium constants (Keq)', 'Molar concentration'],
      misconceptions: [
        'A strong acid has a lower pH than a weak acid regardless of their concentrations.',
        'At the equivalence point of any acid-base titration, the pH is always strictly 7.0.',
        'Buffers stop any and all pH changes indefinitely.'
      ],
      learningObjectives: [
        'Calculate pH from [H+] and [OH-] using ion-product constant Kw.',
        'Calculate buffer pH using the Henderson-Hasselbalch equation.',
        'Predict the pH at the equivalence point of a weak acid-strong base titration.'
      ]
    },
    questions: [
      {
        id: 'q-chem-5',
        topic: 'Acids and Bases',
        subject: 'Chemistry',
        question: 'Why is the pH at the equivalence point of a weak acid (e.g., acetic acid) titrated with a strong base (e.g., NaOH) greater than 7.0?',
        conceptTargeted: 'Salt Hydrolysis and Conjugate Base Hydrolysis',
        difficulty: 'Intermediate',
        hints: [
          'What species remains in solution at the equivalence point?',
          'How does the conjugate base interact with water?'
        ],
        idealAnswer: 'At the equivalence point, all acetic acid (CH3COOH) has been converted to its conjugate base, acetate (CH3COO-). Acetate reacts with water via hydrolysis (CH3COO- + H2O ⇌ CH3COOH + OH-), generating hydroxide ions and yielding a basic solution (pH > 7.0).',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-chem-5',
        studentAnswer: 'Because all the acid reacted with the base, and acetate is a weak base that reacts with water to produce OH- ions.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 92,
        feedback: 'Superb! You correctly identified the hydrolysis of the conjugate base acetate producing OH-.'
      }
    ]
  },
  {
    id: 'chem-chemical-reactions',
    title: 'Thermodynamics & Reaction Kinetics',
    subject: 'Chemistry',
    domain: 'Physical Chemistry',
    difficulty: 'Advanced',
    summary: 'Enthalpy (ΔH), Entropy (ΔS), Gibbs Free Energy (ΔG = ΔH - TΔS), activation energy (Ea), catalysts, and collision theory.',
    tags: ['Gibbs Free Energy', 'Entropy', 'Activation Energy', 'Catalysis', 'Kinetics'],
    explanation: {
      topic: 'Thermodynamics & Reaction Kinetics',
      subject: 'Chemistry',
      summary: 'Thermodynamics dictates whether a chemical reaction is spontaneous (direction of equilibrium), while kinetics dictates how fast it proceeds.',
      keyConcepts: [
        {
          name: 'Gibbs Free Energy (ΔG)',
          explanation: 'ΔG = ΔH - TΔS. A negative ΔG indicates a thermodynamically spontaneous reaction under standard conditions.',
          importance: 'Distinguishes between endergonic and exergonic metabolic processes.'
        },
        {
          name: 'Activation Energy and Collision Theory',
          explanation: 'Reacting molecules must collide with sufficient kinetic energy exceeding Ea and proper spatial orientation to form the transition state.',
          importance: 'Explains exponential temperature dependence of reaction rates (Arrhenius equation).'
        },
        {
          name: 'Role of Catalysts',
          explanation: 'Catalysts lower the activation energy by providing an alternative transition pathway without shifting equilibrium or altering ΔG.',
          importance: 'Essential for enzymes in biochemistry and catalytic converters in industry.'
        }
      ],
      prerequisites: ['Stoichiometry', 'Heat and temperature concepts'],
      misconceptions: [
        'A spontaneous reaction (ΔG < 0) must occur rapidly (confusing thermodynamics with kinetics; e.g. diamond to graphite).',
        'Catalysts speed up reactions by adding thermal energy or increasing temperature.',
        'Exothermic reactions are always spontaneous regardless of temperature.'
      ],
      learningObjectives: [
        'Differentiate between reaction rate (kinetics) and spontaneity (thermodynamics).',
        'Use Gibbs free energy equation to determine temperature ranges for spontaneity.',
        'Draw and interpret reaction coordinate diagrams showing activation energy and enthalpy.'
      ]
    },
    questions: [
      {
        id: 'q-chem-6',
        topic: 'Chemical Reactions',
        subject: 'Chemistry',
        question: 'Diamond spontaneously converts to graphite under standard conditions (ΔG° < 0), yet diamond rings persist for millennia. Explain this apparent contradiction using thermodynamic and kinetic principles.',
        conceptTargeted: 'Thermodynamic Spontaneity vs Kinetic Barrier',
        difficulty: 'Intermediate',
        hints: [
          'Differentiate ΔG from activation energy Ea.',
          'Consider the energy required to break rigid sp3 covalent carbon bonds.'
        ],
        idealAnswer: 'Thermodynamics states diamond to graphite is spontaneous because ΔG° is negative (graphite is at a lower Gibbs energy state). However, kinetics governs the rate: converting sp3 diamond into sp2 graphite requires cleaving dense, directional covalent bonds, creating an immense activation energy barrier (Ea). At room temperature, essentially zero carbon atoms have thermal energy to surmount Ea, making the reaction kinetically stable (metastable) even though thermodynamically favored.',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-chem-6',
        studentAnswer: 'Because even though the reaction has negative delta G, the activation energy is huge so the rate is practically zero.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 92,
        feedback: 'Concise and mathematically accurate distinction between kinetics and thermodynamics.'
      }
    ]
  }
];
