import { DemoDataset } from '../../types';

export const LANGUAGE_DATASETS: DemoDataset[] = [
  {
    id: 'lang-grammar-syntax',
    title: 'English Grammar, Syntax & Sentence Mechanics',
    subject: 'Language',
    domain: 'Linguistics & English Syntax',
    difficulty: 'Beginner',
    summary: 'Parts of speech, independent vs dependent clauses, comma splices, run-on sentences, subject-verb agreement, and active vs passive voice.',
    tags: ['Grammar', 'Syntax', 'Clauses', 'Comma Splice', 'Active Voice'],
    explanation: {
      topic: 'English Grammar, Syntax & Sentence Mechanics',
      subject: 'Language',
      summary: 'Grammar and syntax dictate the architectural rules by which words combine into coherent phrases, clauses, and expressive sentences.',
      keyConcepts: [
        {
          name: 'Clause Hierarchy (Independent vs Dependent)',
          explanation: 'Independent clauses contain a subject and predicate and stand alone as a sentence; dependent (subordinate) clauses lack autonomy.',
          importance: 'Prevents sentence fragments and comma splices in analytical writing.'
        },
        {
          name: 'Comma Splices and Run-on Sentences',
          explanation: 'Joining two independent clauses with only a comma without a coordinating conjunction (FANBOYS) constitutes a comma splice.',
          importance: 'Essential for editorial clarity and formal syntactic precision.'
        },
        {
          name: 'Active vs Passive Voice',
          explanation: 'In active voice, the subject performs the verb action; in passive voice, the subject receives the action (often obscuring agency).',
          importance: 'Enhances vigor, economy, and direct accountability in prose.'
        }
      ],
      prerequisites: ['Basic parts of speech: nouns, verbs, adjectives'],
      misconceptions: [
        'Passive voice is grammatically incorrect (it is syntactically valid and useful when the actor is unknown or unimportant).',
        'You can never begin an English sentence with a coordinating conjunction like "And" or "But".',
        'A long sentence is automatically a run-on sentence (run-ons are grammatical junction errors, not word-count issues).'
      ],
      learningObjectives: [
        'Correct comma splices using semicolons, periods, or coordinating conjunctions.',
        'Resolve complex subject-verb agreement when prepositional phrases intervene.',
        'Convert passive constructions into active voice without losing semantic meaning.'
      ]
    },
    questions: [
      {
        id: 'q-lang-1',
        topic: 'English Grammar',
        subject: 'Language',
        question: 'Identify the grammatical error in this sentence and explain two valid ways to correct it: "The experiment yielded anomalous data, the researchers repeated the trial."',
        conceptTargeted: 'Comma Splice Error & Correction',
        difficulty: 'Beginner',
        hints: [
          'Are both parts of the sentence complete independent clauses?',
          'Can a comma alone link two independent thoughts?'
        ],
        idealAnswer: 'The error is a "comma splice"—two independent clauses joined only by a comma without a coordinating conjunction. It can be corrected by: (1) Replacing the comma with a semicolon: "The experiment yielded anomalous data; the researchers repeated the trial." (2) Adding a coordinating conjunction: "...data, so the researchers repeated..." or (3) Splitting into two distinct sentences with a period.',
        rubric: {
          accuracy: 50,
          depth: 30,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-lang-1',
        studentAnswer: 'It is a comma splice because two independent clauses are connected only by a comma. You can fix it with a semicolon (data; the researchers) or by adding a conjunction like "so" after the comma.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 94,
        feedback: 'Accurate identification of the comma splice and correct solutions offered.'
      }
    ]
  },
  {
    id: 'lang-literature',
    title: 'English Literature: Narrative Analysis & Literary Devices',
    subject: 'Language',
    domain: 'Literary Criticism & Narrative Theory',
    difficulty: 'Intermediate',
    summary: 'Narrative perspective (first, third-person omniscient/limited), symbolism, metaphor vs simile, dramatic irony, and thematic development.',
    tags: ['Symbolism', 'Irony', 'Metaphor', 'Theme', 'Point of View'],
    explanation: {
      topic: 'English Literature: Narrative Analysis & Literary Devices',
      subject: 'Language',
      summary: 'Literary analysis examines how figurative language, narrative framing, and structural motifs construct complex thematic resonance in texts.',
      keyConcepts: [
        {
          name: 'Narrative Point of View',
          explanation: 'First person ("I"), third-person limited (focusing on one character\'s internal consciousness), and third-person omniscient (all-knowing narrator).',
          importance: 'Establishes intimacy, reliability, and distance between reader and character.'
        },
        {
          name: 'Dramatic, Situational & Verbal Irony',
          explanation: 'Dramatic irony occurs when the audience knows critical facts unknown to the characters (e.g. Oedipus, Romeo and Juliet).',
          importance: 'Generates dramatic tension, pathos, and philosophical critique.'
        },
        {
          name: 'Motif vs Theme',
          explanation: 'A motif is a recurring image, phrase, or symbol (e.g. green light in Gatsby); a theme is the broader universal statement about human nature conveyed by the work.',
          importance: 'Enables rigorous distinction between textual evidence and overarching thesis.'
        }
      ],
      prerequisites: ['Basic reading comprehension', 'Plot diagram structure'],
      misconceptions: [
        'A theme is a single word like "love" or "revenge" (themes are complete propositions or arguments, e.g. "Unchecked ambition corrupts moral integrity").',
        'First-person narrators are always truthful and objectively reliable.',
        'Symbols have a single rigid definition set in stone.'
      ],
      learningObjectives: [
        'Distinguish between dramatic, situational, and verbal irony.',
        'Formulate a comprehensive thematic statement supported by recurring motifs.',
        'Analyze how an unreliable narrator shapes reader judgment.'
      ]
    },
    questions: [
      {
        id: 'q-lang-2',
        topic: 'Literature Analysis',
        subject: 'Language',
        question: 'Why is "revenge" not a complete literary theme, and how would you transform it into a legitimate thematic statement?',
        conceptTargeted: 'Theme vs Topic Formulation',
        difficulty: 'Beginner',
        hints: [
          'What is the difference between a subject topic and an authorial argument?',
          'What does a literary work say ABOUT revenge?'
        ],
        idealAnswer: '"Revenge" is merely a subject or topic, not a theme. A literary theme must be an assertive statement, proposition, or argument about life or human nature. For instance, transforming the topic into a theme: "The relentless pursuit of revenge ultimately destroys the seeker\'s own moral humanity" (as demonstrated in Shakespeare\'s Hamlet or Melville\'s Moby-Dick).',
        rubric: {
          accuracy: 50,
          depth: 30,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-lang-2',
        studentAnswer: 'Revenge is just a topic word. A theme has to be a full sentence that expresses a perspective or moral insight about human life, like "Seeking revenge consumes and destroys the person seeking it."',
        verdict: 'correct',
        score: 95,
        confidenceScore: 92,
        feedback: 'Spot on! You made the crucial distinction between a thematic topic and a thematic claim.'
      }
    ]
  },
  {
    id: 'lang-communication',
    title: 'Professional Communication & Classical Rhetoric',
    subject: 'Language',
    domain: 'Rhetoric & Professional Communication',
    difficulty: 'Intermediate',
    summary: 'Aristotle\'s rhetorical appeals (Ethos, Pathos, Logos), audience adaptation, active listening, executive briefing structures (BLUF), and non-verbal cues.',
    tags: ['Ethos', 'Pathos', 'Logos', 'Rhetoric', 'BLUF', 'Executive Presence'],
    explanation: {
      topic: 'Professional Communication & Classical Rhetoric',
      subject: 'Language',
      summary: 'Effective communication synthesizes ethical credibility, logical evidence, emotional resonance, and structured delivery tailored to audience needs.',
      keyConcepts: [
        {
          name: 'The Rhetorical Triangle (Ethos, Pathos, Logos)',
          explanation: 'Ethos establishes authority and integrity; Logos provides empirical reasoning and proof; Pathos connects with audience values and emotional stakes.',
          importance: 'Ensures persuasive messages are credible, logical, and compelling.'
        },
        {
          name: 'BLUF (Bottom Line Up Front)',
          explanation: 'Placing conclusions and requests in the opening sentence, followed by background rationale and supporting details.',
          importance: 'Prevents executive time waste and miscommunication in professional settings.'
        },
        {
          name: 'Active Listening & Mirroring',
          explanation: 'Reflecting the speaker\'s core feelings and paraphrasing content before formulating an answer.',
          importance: 'De-escalates workplace friction and builds collaborative trust.'
        }
      ],
      prerequisites: ['Basic interpersonal skills', 'Writing fundamentals'],
      misconceptions: [
        'Pathos means manipulating people with deceptive tear-jerker stories.',
        'High amounts of data and numbers (Logos) alone are always sufficient to persuade any decision-maker.',
        'Communication success depends only on what you say, not on listening or medium.'
      ],
      learningObjectives: [
        'Apply the BLUF framework to condense a 3-page brief into an executive summary.',
        'Balance Ethos, Pathos, and Logos within a persuasive pitch.',
        'Differentiate between hearing sound and active empathetic listening.'
      ]
    },
    questions: [
      {
        id: 'q-lang-3',
        topic: 'Professional Communication',
        subject: 'Language',
        question: 'Why does an argument that relies exclusively on Logos (hard data, metrics, and logical proofs) often fail to persuade organizational leaders to take action?',
        conceptTargeted: 'Balance of Rhetorical Appeals (Ethos, Pathos, Logos)',
        difficulty: 'Intermediate',
        hints: [
          'What role does trust (Ethos) play in accepting data?',
          'What motivates humans to actually care or change their behavior (Pathos)?'
        ],
        idealAnswer: 'Pure Logos presents raw truth, but numbers alone do not motivate human action. Without Ethos (perceived trustworthiness, track record, and integrity of the presenter), leaders question the veracity and motives behind the data. Without Pathos (connecting the data to organizational values, urgent risks, or vision), stakeholders lack emotional urgency and empathy to overcome inertia and accept political or financial risk.',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-lang-3',
        studentAnswer: 'Because numbers alone do not create emotional urgency (Pathos) to change habits, and without credibility or trust in the presenter (Ethos), leaders won\'t believe or prioritize the data.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 94,
        feedback: 'Insightful synthesis of Ethos, Pathos, and Logos in organizational psychology.'
      }
    ]
  },
  {
    id: 'lang-creative-writing',
    title: 'Creative Writing & Dramatic Narrative Craft',
    subject: 'Language',
    domain: 'Creative Writing & Dramaturgy',
    difficulty: 'Intermediate',
    summary: 'Show, don\'t tell; character arc and flaw; subtext in dialogue; pacing and scene transitions; and sensory world-building.',
    tags: ['Show Don\'t Tell', 'Character Arc', 'Subtext', 'Pacing', 'Sensory Details'],
    explanation: {
      topic: 'Creative Writing & Dramatic Narrative Craft',
      subject: 'Language',
      summary: 'Storytelling engages readers through immersive sensory immersion, layered subtext, and transformative internal character arcs.',
      keyConcepts: [
        {
          name: 'Show, Don\'t Tell',
          explanation: 'Rendering emotional states through concrete physical actions and sensory cues rather than direct abstract exposition.',
          importance: 'Engages reader imagination and allows them to deduce emotional truths organically.'
        },
        {
          name: 'Subtext in Dialogue',
          explanation: 'The unspoken tension, hidden desire, or conflicting motivation beneath the surface words characters speak.',
          importance: 'Prevents on-the-nose melodrama and mirrors realistic human conversation.'
        },
        {
          name: 'The Fatal Flaw (Hamartia) & Character Arc',
          explanation: 'The internal belief or emotional deficit that a protagonist must confront, overcome, or succumb to through plot trials.',
          importance: 'Creates emotional investment and psychological resonance.'
        }
      ],
      prerequisites: ['Literary analysis fundamentals', 'Story structure'],
      misconceptions: [
        '"Show, don\'t tell" means you can never use summary exposition or direct narration for transitions.',
        'Great dialogue is a verbatim transcript of real-world everyday conversation (real talk is full of repetitive filler; fictional dialogue is compressed and charged with intent).',
        'Plot twists are more important than compelling character motivations.'
      ],
      learningObjectives: [
        'Rewrite expository statements into vivid sensory scenes applying "show, don\'t tell".',
        'Write dialogue containing two opposing layers of subtext.',
        'Structure a three-dimensional character change across plot turning points.'
      ]
    },
    questions: [
      {
        id: 'q-lang-4',
        topic: 'Creative Writing',
        subject: 'Language',
        question: 'Transform the telling sentence "David was anxious about the job interview" into a scene that follows the "Show, Don\'t Tell" principle.',
        conceptTargeted: 'Sensory Detail and Behavioral Evocation',
        difficulty: 'Beginner',
        hints: [
          'What physical sensations, gestures, or involuntary ticks demonstrate nervousness?',
          'What is he doing with his hands, breathing, or clothing?'
        ],
        idealAnswer: 'Example revision: "David wiped his clammy palms against the rough fabric of his trousers, checking the brass waiting-room clock for the third time in two minutes. He reached up to straighten his necktie, loosening the collar with a shallow swallow, his knee vibrating like a muted jackhammer on the linoleum."',
        rubric: {
          accuracy: 50,
          depth: 25,
          clarity: 25
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-lang-4',
        studentAnswer: 'David wiped his sweaty hands on his slacks, his heel tapping against the floor as he checked the wall clock again and adjusted his tight tie.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 92,
        feedback: 'Vivid behavioral depiction! Replaced the abstract label "anxious" with concrete physical symptoms.'
      }
    ]
  },
  {
    id: 'lang-critical-thinking',
    title: 'Critical Thinking, Formal Logic & Fallacy Detection',
    subject: 'Language',
    domain: 'Informal Logic & Epistemology',
    difficulty: 'Intermediate',
    summary: 'Deductive vs inductive reasoning, soundness vs validity, cognitive biases, and logical fallacies (ad hominem, straw man, appeal to ignorance, false dilemma).',
    tags: ['Logical Fallacies', 'Deduction', 'Induction', 'Straw Man', 'Ad Hominem'],
    explanation: {
      topic: 'Critical Thinking, Formal Logic & Fallacy Detection',
      subject: 'Language',
      summary: 'Critical thinking cultivates intellectual rigor by evaluating arguments based on structural validity, premises truth, and freedom from formal and informal fallacies.',
      keyConcepts: [
        {
          name: 'Validity vs Soundness (Deductive Logic)',
          explanation: 'An argument is valid if its premises logically guarantee the conclusion; it is sound only if it is both valid AND its premises are factually true.',
          importance: 'Prevents being deceived by logically structured falsehoods.'
        },
        {
          name: 'Common Informal Fallacies',
          explanation: 'Straw Man (misrepresenting opponent\'s view), Ad Hominem (attacking person rather than premise), False Dilemma (forcing two extremes), Post Hoc Ergo Propter Hoc (false correlation-causation).',
          importance: 'Essential for dissecting public debates, media claims, and scientific claims.'
        },
        {
          name: 'Principle of Charity',
          explanation: 'Interpreting an interlocutor\'s argument in its strongest, most rational possible form before attempting critique.',
          importance: 'Elevates intellectual discourse and avoids cheap straw-man refutations.'
        }
      ],
      prerequisites: ['Basic analytical reading skills'],
      misconceptions: [
        'If a conclusion is true, the argument supporting it must have been valid and sound.',
        'Calling out an opponent\'s fallacy automatically proves their ultimate claim is false ("Fallacy Fallacy" or argumentum ad logicam).',
        'Critical thinking means rejecting everything with cynical skepticism.'
      ],
      learningObjectives: [
        'Differentiate validity from soundness in syllogistic logic.',
        'Spot and name 8 common informal logical fallacies in text excerpts.',
        'Apply the Principle of Charity to steel-man an opposing viewpoint.'
      ]
    },
    questions: [
      {
        id: 'q-lang-5',
        topic: 'Critical Thinking',
        subject: 'Language',
        question: 'Can an argument be completely logically valid, yet produce a false conclusion? Provide an example.',
        conceptTargeted: 'Validity vs Soundness in Deductive Reasoning',
        difficulty: 'Beginner',
        hints: [
          'Recall the definition of validity (the structural relationship between premises and conclusion).',
          'What happens if one of the premises is factually untrue?'
        ],
        idealAnswer: 'Yes. Validity means that IF the premises were true, the conclusion would necessarily follow; it describes structural correctness, not factual truth. Example: "Premise 1: All birds can fly. Premise 2: Penguins are birds. Conclusion: Therefore, penguins can fly." The logic is 100% valid, but the argument is unsound and the conclusion is false because Premise 1 is factually false.',
        rubric: {
          accuracy: 50,
          depth: 30,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-lang-5',
        studentAnswer: 'Yes, because validity is just the structure of the logic. If a premise is factually false (like "All mammals live on land, whales are mammals, so whales live on land"), the argument is valid but unsound, leading to a false conclusion.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 95,
        feedback: 'Brilliant! Clear explanation and a perfect illustrative counterexample with whales.'
      }
    ]
  }
];
