import { DemoDataset } from '../../types';

export const HUMANITIES_DATASETS: DemoDataset[] = [
  {
    id: 'hum-world-history',
    title: 'World History: The Industrial Revolution & Modernity',
    subject: 'Humanities',
    domain: 'World History & Historical Analysis',
    difficulty: 'Intermediate',
    summary: 'The shift from agrarian handicrafts to machine manufacturing in Britain, steam power, urbanization, labor movements, and global trade dynamics.',
    tags: ['Industrial Revolution', 'Urbanization', 'Steam Power', 'Labor', 'Capitalism'],
    explanation: {
      topic: 'World History: The Industrial Revolution & Modernity',
      subject: 'Humanities',
      summary: 'Beginning in late 18th-century Britain, mechanization transformed human demography, social hierarchies, and global geopolitical power.',
      keyConcepts: [
        {
          name: 'Technological Innovations (Coal & Steam)',
          explanation: 'Watt\'s refined steam engine, spinning jenny, and smelting coal revolutionized mechanical energy conversion and metallurgy.',
          importance: 'Liberated production from reliance on draft animals, wind, and seasonal watercourses.'
        },
        {
          name: 'Urbanization & Social Stratification',
          explanation: 'Rapid migration from rural enclosures to factory towns created an urban industrial working class (proletariat) alongside an industrial bourgeoisie.',
          importance: 'Prompted modern labor unions, sanitation regulations, and socialist political philosophy.'
        },
        {
          name: 'Global Imperialism and Raw Materials',
          explanation: 'Industrial demand for cotton, rubber, and minerals drove new waves of 19th-century colonial expansion into Africa and Asia.',
          importance: 'Connected worldwide commodity supply chains to European textile mills.'
        }
      ],
      prerequisites: ['Basic world geography', 'Pre-industrial feudalism concepts'],
      misconceptions: [
        'The Industrial Revolution occurred overnight in a single decade rather than spanning over a century.',
        'Living standards for urban factory workers immediately improved compared to rural peasantry.',
        'Britain industrialised first solely due to scientific genius without imperial trade access or domestic coal deposits.'
      ],
      learningObjectives: [
        'Analyze the domestic and geopolitical factors that enabled Britain to industrialize first.',
        'Trace the social consequences of urbanization on public health and family structures.',
        'Evaluate the rise of classical economics (Adam Smith) and socialist critique (Karl Marx).'
      ]
    },
    questions: [
      {
        id: 'q-hum-1',
        topic: 'World History',
        subject: 'Humanities',
        question: 'Why did the Industrial Revolution begin first in Great Britain rather than in other wealthy 18th-century empires like France or Qing China?',
        conceptTargeted: 'Prerequisites for Industrialization',
        difficulty: 'Intermediate',
        hints: [
          'Consider Britain\'s geographical resource endowments (coal and iron deposits).',
          'Consider labor costs, capital markets, and naval trade networks.'
        ],
        idealAnswer: 'Britain possessed a unique convergence of factors: abundant, easily accessible surface coal and iron ore located near navigable waterways; a high-wage economy that incentivized labor-saving machinery; strong institutional property rights and capital markets (Bank of England); and an empire providing cheap colonial raw materials (such as American slave-grown cotton) and captive export markets.',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-hum-1',
        studentAnswer: 'Britain had accessible coal and iron close to water, high wages that encouraged inventing labor-saving machines, strong banking and property rights, and imperial trade for raw cotton.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 92,
        feedback: 'Comprehensive and historically nuanced summary of British comparative advantages!'
      }
    ]
  },
  {
    id: 'hum-geography',
    title: 'Physical Geography & Plate Tectonics',
    subject: 'Humanities',
    domain: 'Physical Geography & Earth Systems',
    difficulty: 'Beginner',
    summary: 'Earth\'s lithospheric plates, divergent/convergent/transform boundaries, continental drift, subduction zones, and seismic volcanic phenomena.',
    tags: ['Tectonic Plates', 'Subduction', 'Earthquakes', 'Volcanoes', 'Continental Drift'],
    explanation: {
      topic: 'Physical Geography & Plate Tectonics',
      subject: 'Humanities',
      summary: 'The dynamic movement of rigid lithospheric plates driven by mantle convection currents continuously reshapes Earth\'s continents and ocean basins.',
      keyConcepts: [
        {
          name: 'Plate Boundary Types',
          explanation: 'Divergent (spreading ridges, rift valleys), Convergent (subduction trenches, collisional mountain belts), Transform (lateral fault sliding).',
          importance: 'Localizes global earthquake epicenters, volcanic arcs, and mountain building.'
        },
        {
          name: 'Mantle Convection & Slab Pull',
          explanation: 'Heat transfer in the asthenosphere coupled with dense sinking oceanic crust (slab pull) provides the primary kinetic driving force.',
          importance: 'Drives continental drift over hundreds of millions of years (Wegener\'s supercontinents).'
        },
        {
          name: 'The Pacific Ring of Fire',
          explanation: 'A horseshoe-shaped belt of subduction zones around the Pacific Basin responsible for over 75% of Earth\'s volcanoes and 90% of earthquakes.',
          importance: 'Underlies natural hazard zones impacting billions of coastal inhabitants.'
        }
      ],
      prerequisites: ['Basic Earth internal structure: crust, mantle, core'],
      misconceptions: [
        'Continents plow through the ocean floor like icebreakers (entire plates composed of continental and oceanic crust move together).',
        'Earthquakes occur only in warm climates or during specific weather.',
        'Volcanoes only erupt along tectonic boundaries (hotspot volcanism occurs mid-plate, e.g. Hawaii).'
      ],
      learningObjectives: [
        'Differentiate landforms created by oceanic-continental vs continental-continental convergence.',
        'Explain evidence for continental drift (fossil correlations, paleomagnetism, seafloor spreading).',
        'Map major tectonic boundaries and associate them with hazard risks.'
      ]
    },
    questions: [
      {
        id: 'q-hum-2',
        topic: 'Geography',
        subject: 'Humanities',
        question: 'Why does continental crust never subduct beneath oceanic crust when two plates collide?',
        conceptTargeted: 'Crustal Density and Buoyancy',
        difficulty: 'Beginner',
        hints: [
          'Compare the rock composition and density of granite vs basalt.',
          'Consider which plate is more buoyant.'
        ],
        idealAnswer: 'Continental crust is composed primarily of felsic rocks (such as granite) which have a lower density (~2.7 g/cm³), making it thick and buoyant. Oceanic crust consists of mafic rocks (basalt and gabbro) with higher density (~3.0 g/cm³). Because of this density contrast, the denser oceanic plate is forced downward into the asthenosphere (subduction), while the more buoyant continental plate remains on top.',
        rubric: {
          accuracy: 50,
          depth: 30,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-hum-2',
        studentAnswer: 'Because continental crust is made of granite which is lighter and less dense than the basalt oceanic crust, so the heavier oceanic plate sinks down while the lighter continental crust floats.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 94,
        feedback: 'Accurate and concise! You highlighted the exact density contrast and rock types.'
      }
    ]
  },
  {
    id: 'hum-psychology',
    title: 'Cognitive & Behavioral Psychology',
    subject: 'Humanities',
    domain: 'Psychology & Cognitive Science',
    difficulty: 'Intermediate',
    summary: 'Classical conditioning (Pavlov), operant conditioning (Skinner), cognitive heuristics, memory encoding/retrieval, and biases (confirmation bias).',
    tags: ['Conditioning', 'Cognitive Bias', 'Working Memory', 'Heuristics', 'Neuroplasticity'],
    explanation: {
      topic: 'Cognitive & Behavioral Psychology',
      subject: 'Humanities',
      summary: 'Psychology investigates how mental representations, memory structures, and environmental stimuli interact to govern perception and action.',
      keyConcepts: [
        {
          name: 'Classical vs Operant Conditioning',
          explanation: 'Classical pairs involuntary physiological reflexes with conditioned stimuli; operant pairs voluntary behaviors with reinforcements or punishments.',
          importance: 'Foundational framework for behavior modification, phobia treatment, and habit formation.'
        },
        {
          name: 'Working Memory & Atkinson-Shiffrin Model',
          explanation: 'Sensory memory passes through working memory (limited capacity ~7±2 items / 4 chunks) to long-term storage via consolidation.',
          importance: 'Explains cognitive load limits and effective instructional design.'
        },
        {
          name: 'Cognitive Heuristics and Biases',
          explanation: 'Fast, automatic mental shortcuts (System 1) that introduce systematic errors like confirmation bias, availability heuristic, and framing effects.',
          importance: 'Crucial for analyzing clinical decision-making, behavioral economics, and jury trials.'
        }
      ],
      prerequisites: ['Basic human nervous system overview'],
      misconceptions: [
        'Negative reinforcement is the same as punishment (negative reinforcement removes an aversive stimulus to INCREASE behavior; punishment aims to DECREASE behavior).',
        'People use only 10% of their brains.',
        'Human memory acts like a video recorder accurately storing past scenes.'
      ],
      learningObjectives: [
        'Distinguish negative reinforcement from positive punishment with concrete examples.',
        'Apply cognitive load theory to multimedia learning.',
        'Identify cognitive heuristics in experimental judgment tasks.'
      ]
    },
    questions: [
      {
        id: 'q-hum-3',
        topic: 'Psychology',
        subject: 'Humanities',
        question: 'What is the precise psychological difference between "negative reinforcement" and "punishment" in operant conditioning?',
        conceptTargeted: 'Operant Conditioning Terminology',
        difficulty: 'Intermediate',
        hints: [
          'Does reinforcement increase or decrease future behavior?',
          'What does the word "negative" mean in behavioral psychology (bad, or subtraction)?'
        ],
        idealAnswer: 'In operant conditioning, the target outcome separates them: reinforcement always INCREASES the frequency of a behavior, while punishment always DECREASES it. The word "negative" means the removal or subtraction of a stimulus. Thus, negative reinforcement strengthens a behavior by removing an unpleasant stimulus (e.g. fastening a seatbelt to silence an annoying chime), whereas punishment weakens a behavior by either adding an unpleasant stimulus or removing a pleasant one.',
        rubric: {
          accuracy: 50,
          depth: 30,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-hum-3',
        studentAnswer: 'Reinforcement always increases behavior, while punishment decreases it. Negative reinforcement increases behavior by removing an unpleasant thing, while punishment tries to stop a behavior.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 95,
        feedback: 'Spot on! You nailed one of the most widely misunderstood distinctions in behavioral psychology.'
      }
    ]
  },
  {
    id: 'hum-sociology',
    title: 'Sociology & Social Stratification',
    subject: 'Humanities',
    domain: 'Sociology & Social Theory',
    difficulty: 'Intermediate',
    summary: 'Social class, socioeconomic status (SES), structural functionalism vs conflict theory, socialization agents, and institutional inequality.',
    tags: ['Social Stratification', 'Conflict Theory', 'Functionalism', 'Social Mobility', 'Institutions'],
    explanation: {
      topic: 'Sociology & Social Stratification',
      subject: 'Humanities',
      summary: 'Sociology explores how social structures, institutions, and cultural norms organize human groups and sustain patterns of inequality.',
      keyConcepts: [
        {
          name: 'Structural Functionalism vs Conflict Theory',
          explanation: 'Functionalism views society as a cooperative system of interrelated organs maintaining stability; Conflict theory views it as competing classes struggling for scarce resources.',
          importance: 'Provides divergent theoretical lenses for interpreting institutions like schools, law, and family.'
        },
        {
          name: 'Social Stratification & Capital Types',
          explanation: 'Bourdieu\'s tripartite capital: economic (money/assets), cultural (credentials, speech patterns, taste), and social (networks and connections).',
          importance: 'Explains intergenerational reproduction of advantage beyond raw bank balances.'
        },
        {
          name: 'Social Mobility',
          explanation: 'Movement of individuals or groups between strata (intergenerational vs intragenerational, upward vs downward).',
          importance: 'Measures meritocratic openness versus institutional rigidity in modern societies.'
        }
      ],
      prerequisites: ['Basic social institutions (family, education, state)'],
      misconceptions: [
        'Poverty is purely the result of individual moral choices or lack of work ethic rather than systemic economic structures.',
        'Social class is defined solely by immediate cash income rather than accumulated wealth and social capital.',
        'Modern post-industrial democracies have achieved frictionless, purely meritocratic mobility.'
      ],
      learningObjectives: [
        'Compare structural functionalist and Marxist conflict perspectives on education.',
        'Distinguish economic, cultural, and social capital with empirical examples.',
        'Analyze factors influencing upward intergenerational mobility.'
      ]
    },
    questions: [
      {
        id: 'q-hum-4',
        topic: 'Sociology',
        subject: 'Humanities',
        question: 'How does Pierre Bourdieu\'s concept of "cultural capital" explain why children from affluent families often excel academically even in public schools with equal per-student funding?',
        conceptTargeted: 'Bourdieu\'s Cultural Capital and Educational Reproduction',
        difficulty: 'Intermediate',
        hints: [
          'Think about language codes, familiarity with museum/art culture, and parental familiarity with academic expectations.',
          'How does institutional schooling reward implicit cultural habits?'
        ],
        idealAnswer: 'Cultural capital consists of linguistic fluency, aesthetic sensibilities, manners, and academic habits internalized through family socialization. School curricula and teachers implicitly reward middle- and upper-class communicative styles and cultural references as signs of "natural intelligence." Even in equally funded schools, students equipped with this implicit cultural capital navigate academic testing and teacher expectations far more effortlessly, reproducing social stratification.',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-hum-4',
        studentAnswer: 'Cultural capital refers to vocabulary, manners, and habits learned at home that schools value. Because schools evaluate these upper-class cultural traits as natural intelligence, children who have them perform better regardless of school funding.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 92,
        feedback: 'Insightful and sociologically accurate application of Bourdieu\'s theory.'
      }
    ]
  },
  {
    id: 'hum-political-science',
    title: 'Political Science & Democratic Institutions',
    subject: 'Humanities',
    domain: 'Political Science & Comparative Politics',
    difficulty: 'Beginner',
    summary: 'Separation of powers, checks and balances, parliamentary vs presidential systems, electoral systems (first-past-the-post vs proportional representation), and civil liberties.',
    tags: ['Democracy', 'Separation of Powers', 'Electoral Systems', 'Constitutional Law', 'Checks & Balances'],
    explanation: {
      topic: 'Political Science & Democratic Institutions',
      subject: 'Humanities',
      summary: 'Political systems design formal institutions, constitutional safeguards, and voting rules to structure authority, accountability, and citizen representation.',
      keyConcepts: [
        {
          name: 'Separation of Powers & Checks/Balances',
          explanation: 'Montesquieu\'s doctrine distributing executive, legislative, and judicial authorities into distinct branches to prevent tyranny.',
          importance: 'Restrains unilateral concentration of power in democratic republics.'
        },
        {
          name: 'Parliamentary vs Presidential Systems',
          explanation: 'In presidential systems, executive and legislature are independently elected; in parliamentary systems, the executive (prime minister) emerges from and remains accountable to parliament.',
          importance: 'Affects legislative efficiency, gridlock risk, and stability during political crises.'
        },
        {
          name: 'Electoral Rules (FPTP vs PR)',
          explanation: 'First-Past-The-Post tends toward two-party systems (Duverger\'s Law); Proportional Representation fosters multiparty coalition governments.',
          importance: 'Shapes voter choice, ideological representation, and coalition governance.'
        }
      ],
      prerequisites: ['Basic concept of government and law'],
      misconceptions: [
        'A democracy and a republic are mutually exclusive systems (most modern republics are constitutional representative democracies).',
        'Separation of powers means branches never interact or negotiate with each other.',
        'Proportional representation systems always produce extreme instability.'
      ],
      learningObjectives: [
        'Differentiate presidential from parliamentary systems regarding executive legitimacy.',
        'Apply Duverger\'s Law to explain the two-party system in single-member plurality districts.',
        'Identify specific institutional checks between executive, legislative, and judicial branches.'
      ]
    },
    questions: [
      {
        id: 'q-hum-5',
        topic: 'Political Science',
        subject: 'Humanities',
        question: 'Explain "Duverger\'s Law" and why First-Past-The-Post (FPTP) voting systems almost always lead to a two-party system.',
        conceptTargeted: 'Duverger\'s Law & Strategic Voting',
        difficulty: 'Beginner',
        hints: [
          'What happens to votes cast for a third-party candidate who places third in a winner-take-all district?',
          'How do voters vote strategically to avoid wasting their ballot?'
        ],
        idealAnswer: 'Duverger\'s Law states that single-member district plurality elections (first-past-the-post) tend to produce two-party systems due to two effects: (1) Mechanical effect: third parties winning substantial national percentages (e.g. 15%) win almost zero parliamentary seats because they rarely come in first in any single district. (2) Psychological/strategic effect: voters realize voting for a third party "wastes" their ballot or acts as a spoiler, so they strategically vote for their preferred candidate among the top two contenders.',
        rubric: {
          accuracy: 50,
          depth: 30,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-hum-5',
        studentAnswer: 'In winner-take-all single districts, third parties get no seats even with lots of votes, so voters strategically abandon third parties to avoid wasting votes on spoilers, collapsing politics into two main parties.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 94,
        feedback: 'Accurate description of both mechanical seat penalties and psychological strategic voting.'
      }
    ]
  }
];
