import { DemoDataset } from '../../types';

export const BUSINESS_DATASETS: DemoDataset[] = [
  {
    id: 'biz-entrepreneurship',
    title: 'Entrepreneurship & Lean Startup Methodology',
    subject: 'Business',
    domain: 'Venture Creation & Innovation Management',
    difficulty: 'Beginner',
    summary: 'The build-measure-learn feedback loop, Minimum Viable Product (MVP), product-market fit, customer discovery, and pivot strategies.',
    tags: ['MVP', 'Lean Startup', 'Product-Market Fit', 'Unit Economics', 'Pivoting'],
    explanation: {
      topic: 'Entrepreneurship & Lean Startup Methodology',
      subject: 'Business',
      summary: 'Lean startup philosophy minimizes wasted capital by testing core business hypotheses early through rapid iteration and customer validation.',
      keyConcepts: [
        {
          name: 'Minimum Viable Product (MVP)',
          explanation: 'The version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.',
          importance: 'Prevents building features or whole products nobody wants.'
        },
        {
          name: 'Build-Measure-Learn Loop',
          explanation: 'A continuous cycle: turn ideas into products, measure customer behavior with actionable metrics, and learn whether to pivot or persevere.',
          importance: 'Accelerates the speed of organizational learning and reduces runway consumption.'
        },
        {
          name: 'Vanity Metrics vs Actionable Metrics',
          explanation: 'Vanity metrics (e.g., total registered users, page hits) give false confidence; actionable metrics (retention, cohort churn, LTV/CAC) reflect true customer value.',
          importance: 'Protects startups from premature scaling based on superficial growth.'
        }
      ],
      prerequisites: ['Basic business concepts', 'Customer problem definition'],
      misconceptions: [
        'An MVP means releasing a buggy, low-quality, incomplete version of the final software.',
        'A comprehensive 50-page business plan guarantees startup success.',
        'A pivot means acknowledging total failure rather than an informed course correction.'
      ],
      learningObjectives: [
        'Design a testable hypothesis for a value proposition.',
        'Define appropriate MVP experiments (concierge, wizard-of-oz, landing page).',
        'Distinguish between vanity and actionable retention metrics.'
      ]
    },
    questions: [
      {
        id: 'q-biz-1',
        topic: 'Entrepreneurship',
        subject: 'Business',
        question: 'What is the primary objective of a Minimum Viable Product (MVP), and how does it differ from a prototype or beta version?',
        conceptTargeted: 'Validated Learning vs Feature Completeness',
        difficulty: 'Beginner',
        hints: [
          'Focus on what the team learns rather than what the engineering team builds.',
          'Think about Eric Ries\' definition regarding validated learning.'
        ],
        idealAnswer: 'The primary objective of an MVP is to test fundamental business hypotheses and achieve maximum validated learning about real customer behavior with the least amount of effort and capital. Unlike a technical prototype (which tests technical feasibility) or a beta release (which tests bugs and polish), an MVP tests market demand and value propositions.',
        rubric: {
          accuracy: 45,
          depth: 30,
          clarity: 25
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-biz-1',
        studentAnswer: 'The MVP is designed to test business hypotheses with real customers using the least amount of effort, unlike a prototype which just checks if the code works.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 92,
        feedback: 'Accurate and concise! You captured the essence of validated learning versus engineering tests.'
      }
    ]
  },
  {
    id: 'biz-marketing',
    title: 'Marketing Strategy & Customer Acquisition Funnel',
    subject: 'Business',
    domain: 'Marketing & Growth Strategy',
    difficulty: 'Intermediate',
    summary: 'The 4 Ps (Product, Price, Place, Promotion), customer acquisition funnels (AARRR), CAC, LTV, and digital targeting channels.',
    tags: ['AARRR Funnel', 'CAC', 'LTV', 'Brand Positioning', 'Inbound Marketing'],
    explanation: {
      topic: 'Marketing Strategy & Customer Acquisition Funnel',
      subject: 'Business',
      summary: 'Marketing aligns consumer needs with value propositions, optimizing acquisition, conversion, and retention metrics across channels.',
      keyConcepts: [
        {
          name: 'The AARRR Pirate Metrics Funnel',
          explanation: 'Acquisition (visitors), Activation (first value moment), Retention (repeat usage), Referral (word of mouth), Revenue (monetization).',
          importance: 'Diagnoses specific leakages in customer lifecycle journeys.'
        },
        {
          name: 'LTV to CAC Ratio',
          explanation: 'Lifetime Value (total gross profit from a customer) divided by Customer Acquisition Cost. Healthy benchmark is typically ≥ 3:1.',
          importance: 'Determines whether a go-to-market model is financially sustainable and scalable.'
        },
        {
          name: 'Segmentation, Targeting & Positioning (STP)',
          explanation: 'Dividing heterogeneous markets into homogeneous cohorts, choosing priority segments, and establishing clear competitive differentiation.',
          importance: 'Ensures advertising spend and messaging resonate deeply with specific buyer personas.'
        }
      ],
      prerequisites: ['Basic revenue concepts', 'Buyer demographics'],
      misconceptions: [
        'Marketing is simply advertising and social media posts rather than product, price, and channel positioning.',
        'Acquiring new customers is more cost-effective than retaining existing ones.',
        'High conversion rates at top of funnel matter more than retention at the bottom.'
      ],
      learningObjectives: [
        'Calculate CAC, LTV, and payback periods for a recurring business model.',
        'Identify stage bottlenecks in an acquisition funnel using analytics.',
        'Formulate a positioning statement using target audience, category, and key benefit.'
      ]
    },
    questions: [
      {
        id: 'q-biz-2',
        topic: 'Marketing Strategy',
        subject: 'Business',
        question: 'Why is an LTV:CAC ratio of 1:1 unsustainable for a growing business, even if revenue equals acquisition cost?',
        conceptTargeted: 'Unit Economics and Overhead Costs',
        difficulty: 'Intermediate',
        hints: [
          'Does acquisition cost represent the only expense a company incurs?',
          'What about cost of goods sold (COGS), research, support, and salaries?'
        ],
        idealAnswer: 'An LTV:CAC ratio of 1:1 means that 100% of the lifetime revenue generated by a customer is consumed solely by the cost to acquire them. This leaves zero margin to cover cost of goods sold (COGS), hosting, customer support, product development, administrative overhead, or profit, leading directly to cash insolvency.',
        rubric: {
          accuracy: 50,
          depth: 30,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-biz-2',
        studentAnswer: 'Because if LTV equals CAC, all customer money goes to marketing. You have nothing left over to pay for server costs, salaries, customer support, or product development.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 94,
        feedback: 'Spot on! You accurately identified that marketing is only one cost component among COGS and OPEX.'
      }
    ]
  },
  {
    id: 'biz-accounting',
    title: 'Financial Accounting & The Three Financial Statements',
    subject: 'Business',
    domain: 'Accounting & Corporate Reporting',
    difficulty: 'Intermediate',
    summary: 'The fundamental accounting equation (Assets = Liabilities + Equity), Balance Sheet, Income Statement, Cash Flow Statement, and accrual accounting.',
    tags: ['Balance Sheet', 'Income Statement', 'Cash Flow', 'Accrual Accounting', 'Assets'],
    explanation: {
      topic: 'Financial Accounting & The Three Financial Statements',
      subject: 'Business',
      summary: 'Financial accounting provides standardized quantitative transparency into economic activities via interconnected balance, income, and cash statements.',
      keyConcepts: [
        {
          name: 'The Fundamental Accounting Equation',
          explanation: 'Assets = Liabilities + Owner\'s / Shareholder\'s Equity. Every transaction has equal and offsetting debit and credit entries.',
          importance: 'Maintains double-entry structural integrity across financial ledgers.'
        },
        {
          name: 'Accrual vs Cash Accounting',
          explanation: 'Revenue is recognized when earned and expenses when incurred, regardless of when cash transfers occur (matching principle).',
          importance: 'Presents an accurate economic picture of quarterly operating performance.'
        },
        {
          name: 'Interconnection of the Three Statements',
          explanation: 'Net income from the Income Statement flows into Retained Earnings on the Balance Sheet and starts the Cash Flow Statement (operating activities).',
          importance: 'Enables auditability and comprehensive financial health diagnosis.'
        }
      ],
      prerequisites: ['Basic arithmetic', 'Understanding revenue and expenses'],
      misconceptions: [
        'Net income is identical to cash generated in the bank account.',
        'A company that is profitable on paper can never go bankrupt from liquidity crises.',
        'Assets are always recorded at their current fair market replacement value (GAAP uses historical cost convention).'
      ],
      learningObjectives: [
        'Demonstrate how a transaction impacts all three financial statements.',
        'Explain non-cash expenses like depreciation and amortization.',
        'Reconcile net income to operating cash flow.'
      ]
    },
    questions: [
      {
        id: 'q-biz-3',
        topic: 'Financial Accounting',
        subject: 'Business',
        question: 'How can a company report positive net income on its income statement for several consecutive quarters and yet run out of cash and go bankrupt?',
        conceptTargeted: 'Accrual Accounting vs Cash Flow',
        difficulty: 'Intermediate',
        hints: [
          'Consider accounts receivable and inventory buildup.',
          'Consider the timing difference between recognizing revenue and collecting cash.'
        ],
        idealAnswer: 'Under accrual accounting, revenue is recognized when goods or services are delivered, not when cash is received. If a company sells aggressively on credit (bloating accounts receivable) or stockpiles massive unsold inventory, it reports healthy accounting profits while experiencing net cash drain. If cash inflows cannot service immediate operating obligations or debt maturities, the firm suffers an insolvency bankruptcy despite paper profitability.',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-biz-3',
        studentAnswer: 'Accrual accounting recognizes profit when sales are made, but if customers buy on credit and have not paid cash yet, or money is tied up in inventory, the company runs out of cash to pay bills.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 92,
        feedback: 'Clear, concise, and accurate explanation of the working capital cash drag.'
      }
    ]
  },
  {
    id: 'biz-microeconomics',
    title: 'Microeconomics: Supply, Demand & Market Equilibrium',
    subject: 'Business',
    domain: 'Economics & Price Theory',
    difficulty: 'Beginner',
    summary: 'The laws of supply and demand, price elasticity, consumer and producer surplus, price ceilings/floors, and deadweight loss.',
    tags: ['Supply & Demand', 'Equilibrium', 'Elasticity', 'Surplus', 'Deadweight Loss'],
    explanation: {
      topic: 'Microeconomics: Supply, Demand & Market Equilibrium',
      subject: 'Business',
      summary: 'Markets allocate scarce resources through decentralized price signals balancing marginal consumer willingness to pay with marginal supplier costs.',
      keyConcepts: [
        {
          name: 'Law of Demand and Supply',
          explanation: 'Ceteris paribus, higher prices decrease quantity demanded and increase quantity supplied until market-clearing equilibrium is reached.',
          importance: 'Forms the foundational model of price formation across competitive markets.'
        },
        {
          name: 'Price Elasticity of Demand (PED)',
          explanation: 'The percentage change in quantity demanded divided by the percentage change in price (%ΔQd / %ΔP).',
          importance: 'Determines pricing power and total revenue effects when firms raise prices.'
        },
        {
          name: 'Deadweight Loss',
          explanation: 'The loss of total economic welfare (consumer + producer surplus) caused by market distortions like taxes, tariffs, or price ceilings.',
          importance: 'Quantifies economic inefficiency introduced by non-market interventions.'
        }
      ],
      prerequisites: ['Basic graphing (slopes, intercepts)', 'Scarcity concept'],
      misconceptions: [
        'A change in the price of a good shifts the entire demand curve (price change causes movement along the curve; only external variables shift the curve).',
        'Elasticity and slope of a linear demand curve are identical constants.',
        'Price ceilings always benefit consumers without side effects like shortages.'
      ],
      learningObjectives: [
        'Differentiate between shifts in the demand curve versus movements along the curve.',
        'Calculate price elasticity of demand using midpoint formula.',
        'Graph the welfare effects of price controls and identify deadweight loss.'
      ]
    },
    questions: [
      {
        id: 'q-biz-4',
        topic: 'Microeconomics',
        subject: 'Business',
        question: 'What is the precise difference between a "change in demand" and a "change in quantity demanded"?',
        conceptTargeted: 'Curve Shift vs Movement Along Curve',
        difficulty: 'Beginner',
        hints: [
          'What happens when the product\'s own price changes?',
          'What happens when consumer income, tastes, or substitute prices change?'
        ],
        idealAnswer: 'A "change in quantity demanded" refers to a movement along an existing demand curve caused strictly by a change in the good\'s own price. A "change in demand" refers to an entire shift of the curve left or right, caused by non-price determinants such as shifts in consumer income, consumer preferences, prices of related goods, or demographic changes.',
        rubric: {
          accuracy: 50,
          depth: 30,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-biz-4',
        studentAnswer: 'Quantity demanded is moving along the same curve because the price changed. Change in demand is the whole curve shifting because of other factors like income or tastes.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 95,
        feedback: 'Crystal clear and economically precise definition!'
      }
    ]
  },
  {
    id: 'biz-finance',
    title: 'Corporate Finance & Capital Budgeting',
    subject: 'Business',
    domain: 'Managerial Finance & Valuation',
    difficulty: 'Advanced',
    summary: 'Time value of money (TVM), Discounted Cash Flow (DCF), Net Present Value (NPV), Internal Rate of Return (IRR), and Weighted Average Cost of Capital (WACC).',
    tags: ['NPV', 'IRR', 'WACC', 'DCF', 'Time Value of Money'],
    explanation: {
      topic: 'Corporate Finance & Capital Budgeting',
      subject: 'Business',
      summary: 'Capital budgeting evaluates long-term investment opportunities by discounting projected future cash flows at the firm\'s hurdle rate.',
      keyConcepts: [
        {
          name: 'Time Value of Money (TVM)',
          explanation: 'A dollar today is worth more than a dollar tomorrow due to its potential earning capacity, inflation, and risk.',
          importance: 'Underlies all asset valuation, debt structuring, and capital allocation.'
        },
        {
          name: 'Net Present Value (NPV)',
          explanation: 'NPV = ∑ [CF_t / (1 + r)^t] - Initial Investment. Projects with NPV > 0 add economic value to the enterprise.',
          importance: 'Gold standard decision criterion for corporate investment decisions.'
        },
        {
          name: 'Weighted Average Cost of Capital (WACC)',
          explanation: 'The blended expected rate of return required by debt and equity providers weighted by capital structure proportion.',
          importance: 'Serves as the discount rate (hurdle rate) for assessing project profitability.'
        }
      ],
      prerequisites: ['Compound interest', 'Basic financial statements'],
      misconceptions: [
        'Payback period is a better investment criterion than NPV (payback ignores TVM and cash flows beyond cut-off).',
        'NPV and IRR always rank mutually exclusive projects identically.',
        'Debt financing is always bad because companies should never have liabilities.'
      ],
      learningObjectives: [
        'Calculate Net Present Value and Internal Rate of Return for capital projects.',
        'Explain why NPV is theoretically superior to IRR in mutually exclusive investments.',
        'Derive WACC considering tax shields on debt interest payments.'
      ]
    },
    questions: [
      {
        id: 'q-biz-5',
        topic: 'Corporate Finance',
        subject: 'Business',
        question: 'When evaluating mutually exclusive capital projects with conflicting rankings between NPV and IRR, why should managers always prioritize the project with the higher NPV?',
        conceptTargeted: 'NPV vs IRR Reinvestment Rate Assumption',
        difficulty: 'Advanced',
        hints: [
          'What reinvestment rate does IRR implicitly assume compared to NPV?',
          'Does IRR account for the absolute dollar scale of the project?'
        ],
        idealAnswer: 'Managers should prioritize NPV for two reasons: (1) Reinvestment rate assumption: NPV realistically assumes intermediate cash flows are reinvested at the cost of capital (WACC), whereas IRR unrealistically assumes reinvestment at the project\'s internal rate of return. (2) Scale problem: IRR is a relative percentage and ignores project size, while NPV measures total net dollar wealth added to equity shareholders.',
        rubric: {
          accuracy: 45,
          depth: 35,
          clarity: 20
        }
      }
    ],
    sampleAnswers: [
      {
        questionId: 'q-biz-5',
        studentAnswer: 'Because NPV assumes reinvestment at the actual cost of capital, whereas IRR assumes reinvestment at the IRR rate which is unrealistic. Also NPV measures total wealth added in real dollars.',
        verdict: 'correct',
        score: 95,
        confidenceScore: 93,
        feedback: 'Superb! You cited both the realistic reinvestment rate and the absolute wealth creation arguments.'
      }
    ]
  }
];
