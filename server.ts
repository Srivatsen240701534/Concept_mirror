import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI, Type, ThinkingLevel } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

const hasGeminiKey = Boolean(process.env.GEMINI_API_KEY);
let aiClient: GoogleGenAI | null = null;

if (hasGeminiKey) {
  try {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
  }
}

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    model: 'gemini-3.8-flash',
    platform: 'ConceptMirror AI Server',
    timestamp: new Date().toISOString(),
  });
});

const UNIVERSAL_SYSTEM_INSTRUCTION = `You are ConceptMirror AI, a universal adaptive educational tutor and examiner.
You are not restricted to any particular subject, course, topic, domain or demonstration dataset.
Your purpose is to teach and evaluate the actual topic requested by the user.
You must dynamically understand the user's current subject and topic.
Never assume the user is studying Computer Networks, TCP Congestion Control or any previously studied topic unless the user explicitly requests it.
Never reuse a previous session's subject, questions, explanations, answers or evaluation for a new session.
Generate educational content based on the actual topic and the user's selected difficulty.
Support conceptual explanations, examples, practical applications, problem solving, multiple-choice questions, short-answer questions, scenario-based questions and follow-up questions.
When evaluating answers, examine the student's actual reasoning rather than matching only keywords.
Identify likely misconceptions and explain them constructively.
Adapt subsequent questions based on the student's demonstrated understanding.
If you do not know something or cannot confidently evaluate an answer, say so honestly.
Do not invent facts, references, formulas or explanations.
Do not pretend that an answer is correct when it is not.
Do not claim certainty when the student's answer is ambiguous.
You must handle a new topic independently of previous sessions.`;

// Helper to call Gemini with timeout and error handling
async function callGeminiJson<T>(
  taskInstruction: string,
  userPrompt: string,
  responseSchema?: any
): Promise<{ ok: boolean; data?: T; error?: string }> {
  if (!aiClient || !process.env.GEMINI_API_KEY) {
    return {
      ok: false,
      error: 'GEMINI_API_KEY is not configured on the server. Please switch to Demo Mode.',
    };
  }

  const config: any = {
    systemInstruction: `${UNIVERSAL_SYSTEM_INSTRUCTION}\n\nTask-Specific Directives:\n${taskInstruction}`,
    responseMimeType: 'application/json',
    thinkingConfig: {
      thinkingLevel: ThinkingLevel.LOW,
    },
  };

  if (responseSchema) {
    config.responseSchema = responseSchema;
  }

  let lastError: any = null;

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const generatePromise = aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: userPrompt,
        config,
      });

      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('AI response timed out after 35s.')), 35000);
      });

      const response = (await Promise.race([generatePromise, timeoutPromise])) as any;

      const text = response.text;
      if (!text) {
        continue;
      }

      const parsed = JSON.parse(text) as T;
      return { ok: true, data: parsed };
    } catch (attemptErr: any) {
      lastError = attemptErr;
      console.warn(`gemini-3.8-flash attempt ${attempt} failed:`, attemptErr?.message || attemptErr);
      if (attempt < 2) {
        await new Promise((res) => setTimeout(res, 1500));
      }
    }
  }

  console.error('All gemini-3.8-flash attempts failed:', lastError?.message || lastError);
  return {
    ok: false,
    error: lastError?.message || 'Gemini API call failed.',
  };
}

// 1. Generate Topic Explanation
app.post('/api/learn/explain', async (req: Request, res: Response) => {
  const { topicName, subject, difficulty, style } = req.body;
  if (!topicName) {
    return res.status(400).json({ ok: false, error: 'topicName is required' });
  }

  const taskInstruction = `You are the lead pedagogy architect for ConceptMirror AI.
Your role is to produce a structured, high-clarity learning module for the actual topic entered by the user.
Break the requested topic down into 3-5 core concepts with practical real-world examples, dependencies, and intuitive analogies specifically tailored to "${topicName}".
Avoid generic walls of text. Return valid JSON only.`;

  const userPrompt = `Topic: "${topicName}"
Subject: "${subject || 'General STEM'}"
Difficulty: "${difficulty || 'Intermediate'}"
Explanation Style: "${style || 'Detailed'}"

Generate the learning module with:
- prerequisites (array of strings)
- summary (concise 2-3 sentence overview)
- analogies (array of 2 vivid analogies)
- concepts: array of 3 to 5 objects each having:
  - id (string, e.g. "c-1")
  - title (string)
  - explanation (thorough conceptual breakdown)
  - practicalExample (concrete scenario)
  - relationships (array of related concept titles)`;

  const result = await callGeminiJson(`${UNIVERSAL_SYSTEM_INSTRUCTION}\n\n${taskInstruction}`, userPrompt, {
    type: Type.OBJECT,
    properties: {
      prerequisites: { type: Type.ARRAY, items: { type: Type.STRING } },
      summary: { type: Type.STRING },
      analogies: { type: Type.ARRAY, items: { type: Type.STRING } },
      concepts: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            title: { type: Type.STRING },
            explanation: { type: Type.STRING },
            practicalExample: { type: Type.STRING },
            relationships: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ['id', 'title', 'explanation', 'practicalExample', 'relationships'],
        },
      },
    },
    required: ['prerequisites', 'summary', 'analogies', 'concepts'],
  });

  res.json(result);
});

// 2. Generate Adaptive Exam Question
app.post('/api/exam/generate-question', async (req: Request, res: Response) => {
  const {
    topicTitle,
    subject,
    difficulty,
    questionNumber,
    questionTypeCategory,
    previousAnswers,
    misconceptionsDetected,
    targetConcept,
  } = req.body;

  const systemInstruction = `You are an adaptive AI examiner on ConceptMirror AI.
You test real understanding, not just rote memorization.
Adapt the question based on the student's previous answers:
- If they struggled with a foundational concept, generate a diagnostic breakdown question.
- If they mastered the previous question, escalate to a deeper scenario or edge case.
- Support formats: multiple_choice, short_answer, explain_reasoning, or scenario.
Return structured JSON only.`;

  const userPrompt = `Topic: "${topicTitle}"
Subject: "${subject}"
Difficulty: "${difficulty}"
Question Number: ${questionNumber}
Category: "${questionTypeCategory || 'Mixed'}"
Target Concept: "${targetConcept || 'Core concept'}"
Prior Answers Summary: ${JSON.stringify(previousAnswers || []).slice(0, 1000)}
Detected Misconceptions So Far: ${JSON.stringify(misconceptionsDetected || [])}

Generate an adaptive question:
- questionNumber (number)
- conceptTargeted (string)
- questionType (one of: "multiple_choice", "short_answer", "explain_reasoning", "scenario")
- difficulty (Beginner, Intermediate, or Advanced)
- questionText (clear, thought-provoking question)
- contextScenario (optional string if scenario type)
- options (array of 4 options if multiple_choice, otherwise empty)
- correctAnswerSummary (reference benchmark for evaluation)
- evaluationCriteria (array of 2-3 key points needed)
- adaptiveReason (explicit sentence explaining WHY this question was chosen based on prior trajectory)`;

  const result = await callGeminiJson(systemInstruction, userPrompt, {
    type: Type.OBJECT,
    properties: {
      questionNumber: { type: Type.INTEGER },
      conceptTargeted: { type: Type.STRING },
      questionType: { type: Type.STRING },
      difficulty: { type: Type.STRING },
      questionText: { type: Type.STRING },
      contextScenario: { type: Type.STRING },
      options: { type: Type.ARRAY, items: { type: Type.STRING } },
      correctAnswerSummary: { type: Type.STRING },
      evaluationCriteria: { type: Type.ARRAY, items: { type: Type.STRING } },
      adaptiveReason: { type: Type.STRING },
    },
    required: [
      'questionNumber',
      'conceptTargeted',
      'questionType',
      'difficulty',
      'questionText',
      'correctAnswerSummary',
      'evaluationCriteria',
      'adaptiveReason',
    ],
  });

  res.json(result);
});

// 3. Evaluate Student Answer & Detect Misconceptions
app.post('/api/exam/evaluate-answer', async (req: Request, res: Response) => {
  const { question, studentResponse, reasoningText, topicTitle, subject } = req.body;

  if (!question || !studentResponse) {
    return res.status(400).json({ ok: false, error: 'Question and student response are required.' });
  }

  const taskInstruction = `You are the diagnostic evaluation engine of ConceptMirror AI.
Your purpose is to look past superficial keywords and analyze the student's underlying mental model specifically for the domain "${subject || 'General'}" and topic "${topicTitle}".
Do not confuse or cross-contaminate this evaluation with unrelated subjects.
Classify the response into:
- "correct" (sound reasoning, accurate model)
- "partially_correct" (some sound reasoning, but incomplete or missed key constraints)
- "incorrect" (wrong facts or wrong calculation)
- "misconception_detected" (student holds a systematic, specific incorrect mental model or swaps concepts)

When a misconception is detected:
- Clearly formulate what the student believes (mental model)
- State why it violates physical/scientific/logical reality for "${topicTitle}"
- Provide an intuitive correction and concrete everyday analogy
- Provide a follow-up verification prompt
Never assume certainty; describe inferred misconceptions from the answer text.
Return valid JSON only.`;

  const userPrompt = `Subject/Domain: "${subject || 'General'}"
Topic: "${topicTitle}"
Question Targeted Concept: "${question.conceptTargeted}"
Question Text: "${question.questionText}"
Reference Criteria: ${JSON.stringify(question.evaluationCriteria || [])}
Correct Answer Summary: "${question.correctAnswerSummary || ''}"

Student's Answer: "${studentResponse}"
Student's Stated Reasoning: "${reasoningText || 'None provided'}"`;

  const result = await callGeminiJson(taskInstruction, userPrompt, {
    type: Type.OBJECT,
    properties: {
      verdict: { type: Type.STRING },
      score: { type: Type.INTEGER },
      reasoningAnalysis: {
        type: Type.OBJECT,
        properties: {
          soundReasoning: { type: Type.ARRAY, items: { type: Type.STRING } },
          gapsOrFlaws: { type: Type.ARRAY, items: { type: Type.STRING } },
        },
        required: ['soundReasoning', 'gapsOrFlaws'],
      },
      detectedMisconception: {
        type: Type.OBJECT,
        properties: {
          conceptName: { type: Type.STRING },
          studentMentalModel: { type: Type.STRING },
          scientificCorrection: { type: Type.STRING },
          concreteAnalogy: { type: Type.STRING },
          followUpPrompt: { type: Type.STRING },
        },
      },
      confidenceScore: { type: Type.INTEGER },
      constructiveFeedback: { type: Type.STRING },
      correctExplanation: { type: Type.STRING },
      practicalExample: { type: Type.STRING },
      adaptiveNextStep: { type: Type.STRING },
    },
    required: [
      'verdict',
      'score',
      'reasoningAnalysis',
      'confidenceScore',
      'constructiveFeedback',
      'correctExplanation',
      'practicalExample',
      'adaptiveNextStep',
    ],
  });

  res.json(result);
});

// 4. Generate Session Summary
app.post('/api/summary/generate', async (req: Request, res: Response) => {
  const { session } = req.body;
  if (!session) {
    return res.status(400).json({ ok: false, error: 'Session is required.' });
  }

  const systemInstruction = `You are the diagnostic review engine for ConceptMirror AI.
Analyze the completed examination session and produce an executive learning report.`;

  const userPrompt = `Topic: "${session.topicTitle}"
Answers & Evaluations: ${JSON.stringify(session.answers || []).slice(0, 3000)}

Generate:
- overallScore (0-100)
- masteredConcepts (array of concept names)
- developingConcepts (array of concept names)
- revisionNeededConcepts (array of concept names)
- misconceptionsIdentified (count)
- strengths (array of 3 distinct positive competencies observed)
- keyRecommendations (array of 3 targeted, actionable revision recommendations)`;

  const result = await callGeminiJson(systemInstruction, userPrompt, {
    type: Type.OBJECT,
    properties: {
      overallScore: { type: Type.INTEGER },
      masteredConcepts: { type: Type.ARRAY, items: { type: Type.STRING } },
      developingConcepts: { type: Type.ARRAY, items: { type: Type.STRING } },
      revisionNeededConcepts: { type: Type.ARRAY, items: { type: Type.STRING } },
      misconceptionsIdentified: { type: Type.INTEGER },
      strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
      keyRecommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
    },
    required: [
      'overallScore',
      'masteredConcepts',
      'developingConcepts',
      'revisionNeededConcepts',
      'misconceptionsIdentified',
      'strengths',
      'keyRecommendations',
    ],
  });

  res.json(result);
});

// 5. Generate Knowledge Map Graph data for any topic
app.post('/api/map/generate-concepts', async (req: Request, res: Response) => {
  const { topicTitle, subject } = req.body;
  const systemInstruction = `Generate a concept dependency hierarchy for ConceptMirror AI knowledge visualization.`;
  const userPrompt = `Topic: "${topicTitle}" (Subject: "${subject || 'STEM'}")
Provide 5 to 8 interdependent concepts that form the knowledge graph for this topic.
Include id, name, description, and prerequisites (ids of prerequisites).`;

  const result = await callGeminiJson(systemInstruction, userPrompt, {
    type: Type.OBJECT,
    properties: {
      concepts: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            prerequisites: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ['id', 'name', 'description'],
        },
      },
    },
    required: ['concepts'],
  });

  res.json(result);
});

// Mount Vite or static files
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'));
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ConceptMirror AI server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
