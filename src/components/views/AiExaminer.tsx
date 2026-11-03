import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Clock,
  Layers,
  Send,
  Zap,
  Database,
  RefreshCw,
  Lightbulb,
  FileCheck,
  RotateCcw,
} from 'lucide-react';
import {
  AnswerEvaluation,
  DifficultyLevel,
  ExamQuestion,
  ExamSession,
  QuestionType,
  StudentAnswer,
} from '../../types';
import {
  evaluateStudentAnswerApi,
  generateAdaptiveQuestionApi,
  generateSessionSummaryApi,
} from '../../services/api';
import { findDemoDataset, ALL_DEMO_DATASETS } from '../../data/demoDatasets';

interface AiExaminerProps {
  initialTopic?: string;
  initialSubject?: string;
  onFinishExam: (session: ExamSession) => void;
  isDemoMode: boolean;
}

export const AiExaminer: React.FC<AiExaminerProps> = ({
  initialTopic = '',
  initialSubject = '',
  onFinishExam,
  isDemoMode,
}) => {
  // Pre-exam configuration state
  const [inSetup, setInSetup] = useState<boolean>(true);
  const [topicTitle, setTopicTitle] = useState<string>(initialTopic || 'Python Functions & Scope');
  const [subject, setSubject] = useState<string>(initialSubject || 'Computer Science');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('Intermediate');
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [questionType, setQuestionType] = useState<QuestionType>('Mixed');

  // Active exam session state
  const [currentSession, setCurrentSession] = useState<ExamSession | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<ExamQuestion | null>(null);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [studentResponse, setStudentResponse] = useState<string>('');
  const [reasoningText, setReasoningText] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Evaluation & submission state
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [isGeneratingNext, setIsGeneratingNext] = useState<boolean>(false);
  const [currentEvaluation, setCurrentEvaluation] = useState<AnswerEvaluation | null>(null);
  const [detectedMisconceptionsList, setDetectedMisconceptionsList] = useState<string[]>([]);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  // Sync if props change
  useEffect(() => {
    if (initialTopic) setTopicTitle(initialTopic);
    if (initialSubject) setSubject(initialSubject);
  }, [initialTopic, initialSubject]);

  // Start examination
  const handleStartExam = async () => {
    if (!topicTitle.trim()) {
      setErrorNotice('Please enter a topic title to begin examination.');
      return;
    }
    setErrorNotice(null);
    setIsGeneratingNext(true);

    const firstQResult = await generateAdaptiveQuestionApi(
      topicTitle.trim(),
      subject.trim(),
      difficulty,
      1,
      questionType,
      [],
      [],
      isDemoMode
    );

    setIsGeneratingNext(false);

    if (firstQResult.ok && firstQResult.question) {
      const newSession: ExamSession = {
        id: `session-${Date.now()}`,
        topicTitle: topicTitle.trim(),
        subject: subject.trim(),
        difficulty,
        questionTypeCategory: questionType,
        totalQuestionsPlanned: questionCount,
        currentQuestionIndex: 1,
        questions: [firstQResult.question],
        answers: [],
        startedAt: new Date().toISOString(),
        isCompleted: false,
        isDemo: firstQResult.isDemo,
      };

      setCurrentSession(newSession);
      setCurrentQuestion(firstQResult.question);
      setQuestionNumber(1);
      setStudentResponse('');
      setReasoningText('');
      setSelectedOption(null);
      setCurrentEvaluation(null);
      setDetectedMisconceptionsList([]);
      setInSetup(false);
    } else {
      setErrorNotice(
        firstQResult.error ||
          'Failed to generate adaptive question for this topic. Please verify server connection or switch to Demo Mode in the top bar.'
      );
    }
  };

  // Submit answer for adaptive evaluation
  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuestion || !currentSession) return;

    const answerToEvaluate =
      currentQuestion.questionType === 'multiple_choice' && selectedOption
        ? selectedOption
        : studentResponse.trim();

    if (!answerToEvaluate) return;

    setIsEvaluating(true);
    setErrorNotice(null);

    const result = await evaluateStudentAnswerApi(
      topicTitle,
      subject,
      currentQuestion,
      answerToEvaluate,
      reasoningText.trim(),
      isDemoMode || Boolean(currentSession.isDemo)
    );

    setIsEvaluating(false);

    if (result.ok && result.evaluation) {
      const evaluation = result.evaluation;
      setCurrentEvaluation(evaluation);

      // Track misconception if detected
      if (
        evaluation.verdict === 'misconception_detected' &&
        evaluation.detectedMisconception
      ) {
        setDetectedMisconceptionsList((prev) => [
          ...prev,
          evaluation.detectedMisconception!.conceptName,
        ]);
      }

      // Record answer in session
      const studentAns: StudentAnswer = {
        questionId: currentQuestion.id,
        studentResponse: answerToEvaluate,
        reasoningText: reasoningText.trim(),
        submittedAt: new Date().toISOString(),
        evaluation: evaluation,
      };

      setCurrentSession((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          answers: [...prev.answers, studentAns],
        };
      });
    } else {
      setErrorNotice(
        result.error || 'Evaluation failed. Please try again or switch to Demo Mode in the top bar.'
      );
    }
  };

  // Proceed to next question or complete exam
  const handleNextQuestion = async () => {
    if (!currentSession) return;

    // Check if exam completed
    if (questionNumber >= questionCount) {
      setIsGeneratingNext(true);
      const summaryResult = await generateSessionSummaryApi(
        currentSession,
        isDemoMode || Boolean(currentSession.isDemo)
      );
      setIsGeneratingNext(false);

      const completedSession: ExamSession = {
        ...currentSession,
        isCompleted: true,
        completedAt: new Date().toISOString(),
        sessionSummary: summaryResult.summary,
      };

      onFinishExam(completedSession);
      return;
    }

    // Generate next adaptive question
    setIsGeneratingNext(true);
    setErrorNotice(null);

    const nextQNum = questionNumber + 1;
    const nextQResult = await generateAdaptiveQuestionApi(
      topicTitle,
      subject,
      difficulty,
      nextQNum,
      questionType,
      currentSession.answers,
      detectedMisconceptionsList,
      isDemoMode || Boolean(currentSession.isDemo)
    );

    setIsGeneratingNext(false);

    if (nextQResult.ok && nextQResult.question) {
      const nextQ = nextQResult.question;
      setCurrentQuestion(nextQ);
      setQuestionNumber(nextQNum);
      setStudentResponse('');
      setReasoningText('');
      setSelectedOption(null);
      setCurrentEvaluation(null);

      setCurrentSession((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          currentQuestionIndex: nextQNum,
          questions: [...prev.questions, nextQ],
        };
      });
    } else {
      // In demo mode or if dataset is available, pick question from matching dataset
      const dataset = findDemoDataset(topicTitle) || ALL_DEMO_DATASETS[0];
      const rawQ = dataset.questions[(nextQNum - 1) % dataset.questions.length];
      const fallbackQ: ExamQuestion = {
        id: `demo-q-${dataset.id}-${nextQNum}`,
        questionNumber: nextQNum,
        conceptTargeted: rawQ.conceptTargeted,
        questionType: 'short_answer',
        difficulty: rawQ.difficulty || difficulty,
        questionText: rawQ.question,
        correctAnswerSummary: rawQ.idealAnswer,
        evaluationCriteria: [`Demonstrate clear understanding of ${rawQ.conceptTargeted}`],
        adaptiveReason: `Adaptive progression targeting ${rawQ.conceptTargeted}.`,
      };

      setCurrentQuestion(fallbackQ);
      setQuestionNumber(nextQNum);
      setStudentResponse('');
      setReasoningText('');
      setSelectedOption(null);
      setCurrentEvaluation(null);
    }
  };

  // -------------------------------------------------------------
  // 1. Setup Screen
  // -------------------------------------------------------------
  if (inSetup) {
    return (
      <div className="max-w-3xl mx-auto space-y-8 pb-12">
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-300 border border-indigo-500/30 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Interactive Cognitive Examiner</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Configure Your Adaptive AI Examination
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            ConceptMirror AI evaluates the true reasoning behind each answer, adapts question difficulty dynamically,
            and detects subtle conceptual gaps.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Examination Topic
              </label>
              <input
                type="text"
                value={topicTitle}
                onChange={(e) => setTopicTitle(e.target.value)}
                placeholder="e.g. Python Functions, Calculus, DNA Replication, Macroeconomics..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Subject Domain
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Computer Science, Mathematics, Biology, Business..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Quick topic suggestion chips */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-slate-400">Quick suggestions across disciplines:</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { title: 'Python Functions & Scope', subj: 'Computer Science' },
                { title: 'Calculus: Derivatives & Chain Rule', subj: 'Mathematics' },
                { title: 'DNA Replication & Inheritance', subj: 'Biology' },
                { title: 'Supply & Demand Equilibrium', subj: 'Business' },
                { title: 'Newtonian Mechanics & Force', subj: 'Physics' },
                { title: 'World History: Industrial Revolution', subj: 'Humanities' },
                { title: 'Critical Thinking & Fallacies', subj: 'Language' },
              ].map((chip) => (
                <button
                  type="button"
                  key={chip.title}
                  onClick={() => {
                    setTopicTitle(chip.title);
                    setSubject(chip.subj);
                  }}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition"
                >
                  {chip.title}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Starting Difficulty Level
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['Beginner', 'Intermediate', 'Advanced'] as DifficultyLevel[]).map((d) => (
                <button
                  type="button"
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition border ${
                    difficulty === d
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Number of Questions */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Question Count
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[5, 10, 15].map((count) => (
                <button
                  type="button"
                  key={count}
                  onClick={() => setQuestionCount(count)}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition border ${
                    questionCount === count
                      ? 'bg-cyan-600 border-cyan-500 text-white shadow-lg shadow-cyan-600/30'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {count} Questions
                </button>
              ))}
            </div>
          </div>

          {/* Question Type */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Question Style Focus
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['Conceptual', 'Application-based', 'Mixed'] as QuestionType[]).map((qt) => (
                <button
                  type="button"
                  key={qt}
                  onClick={() => setQuestionType(qt)}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition border ${
                    questionType === qt
                      ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-600/30'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {qt}
                </button>
              ))}
            </div>
          </div>

          {/* Pre-Exam Information Banner */}
          <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-800/40 text-xs text-indigo-300 space-y-1">
            <span className="font-bold flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>How the AI Examiner Evaluates You:</span>
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Unlike ordinary tests, the AI examiner analyzes your reasoning explanation for incomplete models,
              detects swapped concepts, calculates confidence score, and actively pivots subsequent questions based
              on your weaknesses.
            </p>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              onClick={handleStartExam}
              disabled={isGeneratingNext || !topicTitle.trim()}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:opacity-95 text-white text-sm font-bold shadow-xl shadow-indigo-600/30 transition flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isGeneratingNext ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Synthesizing First Adaptive Question...</span>
                </>
              ) : (
                <>
                  <GraduationCap className="w-5 h-5" />
                  <span>Begin Adaptive Examination</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. Active Examination Screen
  // -------------------------------------------------------------
  if (!currentQuestion) return null;

  const progressPercent = Math.round((questionNumber / questionCount) * 100);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Top Header & Progress Bar */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-300 font-bold text-xs flex items-center justify-center border border-indigo-500/30">
              {questionNumber} / {questionCount}
            </span>
            <div>
              <h2 className="text-sm font-bold text-white">{topicTitle}</h2>
              <span className="text-[11px] text-slate-400">
                Targeted: {currentQuestion.conceptTargeted}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700">
              {currentQuestion.difficulty}
            </span>
            <span className="px-2.5 py-1 rounded-xl bg-indigo-500/10 text-indigo-300 text-xs font-semibold border border-indigo-500/20">
              {(currentQuestion.questionType || 'short_answer').replace('_', ' ').toUpperCase()}
            </span>
            {isDemoMode && (
              <span className="px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                DEMO DATA
              </span>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Adaptive rationale note */}
        {currentQuestion.adaptiveReason && (
          <div className="text-[11px] text-slate-400 flex items-center space-x-1.5 italic bg-slate-950/40 px-3 py-1.5 rounded-xl border border-slate-800/60">
            <span className="text-indigo-400 font-semibold not-italic">Adaptive Rationale:</span>
            <span>{currentQuestion.adaptiveReason}</span>
          </div>
        )}
      </div>

      {/* Main Question Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
        {/* Scenario context if present */}
        {currentQuestion.contextScenario && (
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200 leading-relaxed">
            <span className="font-bold text-cyan-300 block mb-1">Scenario Context:</span>
            {currentQuestion.contextScenario}
          </div>
        )}

        {/* Question Text */}
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {currentQuestion.questionText}
          </h3>
        </div>

        {/* Answer Form */}
        {!currentEvaluation ? (
          <form onSubmit={handleSubmitAnswer} className="space-y-5">
            {/* Multiple Choice Options */}
            {currentQuestion.questionType === 'multiple_choice' && currentQuestion.options ? (
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Select Your Answer:
                </span>
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setSelectedOption(opt)}
                    className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm font-medium transition border flex items-start space-x-3 ${
                      selectedOption === opt
                        ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800/50'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                        selectedOption === opt
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{opt}</span>
                  </button>
                ))}
              </div>
            ) : (
              /* Text Response Input */
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Your Answer:
                </label>
                <textarea
                  rows={4}
                  value={studentResponse}
                  onChange={(e) => setStudentResponse(e.target.value)}
                  placeholder="Explain the mechanism, principle, or calculate the values..."
                  className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                  required
                />
              </div>
            )}

            {/* Cognitive Reasoning Capture (The Key Feature of ConceptMirror AI!) */}
            <div className="space-y-2 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <label className="block text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center space-x-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                <span>Explain Your Underlying Reasoning (Crucial for Misconception Detection):</span>
              </label>
              <p className="text-[11px] text-slate-400">
                Why did you choose this answer? What mental rule, physical law, or sequence did you apply?
              </p>
              <textarea
                rows={2}
                value={reasoningText}
                onChange={(e) => setReasoningText(e.target.value)}
                placeholder="e.g. 'I assumed that once packets are lost, the window resets to 1, because...'"
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-between">
              <div className="text-[11px] text-slate-400">
                Correct answers are evaluated with depth analysis upon submission.
              </div>

              <button
                type="submit"
                disabled={
                  isEvaluating ||
                  (currentQuestion.questionType === 'multiple_choice'
                    ? !selectedOption
                    : !studentResponse.trim())
                }
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-95 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/30 transition flex items-center space-x-2 disabled:opacity-50"
              >
                {isEvaluating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing Mental Model...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit & Evaluate Reasoning</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* ========================================================
             Post-Submission Evaluation & Misconception Breakdown Card
             ======================================================== */
          <div className="space-y-6 pt-4 border-t border-slate-800 animate-fadeIn">
            {/* Verdict Header */}
            <div
              className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                currentEvaluation.verdict === 'correct'
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                  : currentEvaluation.verdict === 'misconception_detected'
                  ? 'bg-amber-950/30 border-amber-500/40 text-amber-300'
                  : currentEvaluation.verdict === 'partially_correct'
                  ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-300'
                  : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                {currentEvaluation.verdict === 'correct' ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                ) : currentEvaluation.verdict === 'misconception_detected' ? (
                  <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
                ) : (
                  <HelpCircle className="w-6 h-6 text-cyan-400 shrink-0" />
                )}
                <div>
                  <h4 className="text-base font-bold capitalize">
                    {currentEvaluation.verdict.replace('_', ' ')}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {currentEvaluation.constructiveFeedback}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 shrink-0">
                <div className="text-right">
                  <span className="block text-2xl font-black text-white leading-none">
                    {currentEvaluation.score}/100
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Confidence: {currentEvaluation.confidenceScore}%
                  </span>
                </div>
              </div>
            </div>

            {/* Inferred Misconception Card (Flagship Value!) */}
            {currentEvaluation.detectedMisconception && (
              <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/40 space-y-3">
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Cognitive Misconception Inferred:</span>
                  <span className="text-white underline">
                    {currentEvaluation.detectedMisconception.conceptName}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-rose-400 block mb-1">
                      Your Inferred Mental Model:
                    </span>
                    <p className="text-slate-300">
                      {currentEvaluation.detectedMisconception.studentMentalModel}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-emerald-400 block mb-1">
                      Scientific & Technical Reality:
                    </span>
                    <p className="text-slate-300">
                      {currentEvaluation.detectedMisconception.scientificCorrection}
                    </p>
                  </div>
                </div>

                {currentEvaluation.detectedMisconception.concreteAnalogy && (
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs italic text-slate-300">
                    <strong className="not-italic text-amber-300 mr-1.5">Everyday Analogy:</strong>
                    &ldquo;{currentEvaluation.detectedMisconception.concreteAnalogy}&rdquo;
                  </div>
                )}
              </div>
            )}

            {/* Reasoning Analysis Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Sound Reasoning */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="font-bold text-emerald-400 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Sound Conceptual Steps:</span>
                </span>
                <ul className="space-y-1.5 text-slate-300">
                  {currentEvaluation.reasoningAnalysis.soundReasoning.map((step, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-bold">&bull;</span>
                      <span>{step}</span>
                    </li>
                  ))}
                  {currentEvaluation.reasoningAnalysis.soundReasoning.length === 0 && (
                    <li className="text-slate-500 italic">No verified sound steps identified.</li>
                  )}
                </ul>
              </div>

              {/* Missing Elements or Gaps */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400 flex items-center space-x-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Gaps or Flawed Assumptions:</span>
                </span>
                <ul className="space-y-1.5 text-slate-300">
                  {currentEvaluation.reasoningAnalysis.gapsOrFlaws.map((gap, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-amber-500 font-bold">&bull;</span>
                      <span>{gap}</span>
                    </li>
                  ))}
                  {currentEvaluation.reasoningAnalysis.gapsOrFlaws.length === 0 && (
                    <li className="text-slate-500 italic">No flaws or missing constraints.</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Canonical Correct Explanation */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
              <span className="font-bold text-indigo-300 block">
                Canonical Concept Explanation:
              </span>
              <p className="text-slate-300 leading-relaxed">
                {currentEvaluation.correctExplanation}
              </p>
              {currentEvaluation.practicalExample && (
                <p className="text-cyan-300 text-[11px] mt-1 pt-1 border-t border-slate-850">
                  <strong>Example:</strong> {currentEvaluation.practicalExample}
                </p>
              )}
            </div>

            {/* Adaptive Next Step Note */}
            <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-300 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                <strong>Adaptive Examiner Decision:</strong> {currentEvaluation.adaptiveNextStep}
              </span>
            </div>

            {/* Next Question / Finish Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNextQuestion}
                disabled={isGeneratingNext}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-95 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/30 transition flex items-center space-x-2 disabled:opacity-50"
              >
                {isGeneratingNext ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Preparing Adaptive Question...</span>
                  </>
                ) : questionNumber >= questionCount ? (
                  <>
                    <FileCheck className="w-4 h-4" />
                    <span>Finish Examination & View Diagnostic Report</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Next Adaptive Question</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Error notice if any */}
      {errorNotice && (
        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800 text-xs text-amber-300">
          {errorNotice}
        </div>
      )}
    </div>
  );
};
