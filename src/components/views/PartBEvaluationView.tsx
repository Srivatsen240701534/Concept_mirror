// src/components/views/PartBEvaluationView.tsx
// ConceptMirror AI - Part B: 11-Mark Rule-Based Answer Analyser
// Local heuristic rubric evaluation matching concepts, keywords, and phrases without external cloud APIs

import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Award,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Eye,
  Info,
  CheckSquare,
} from 'lucide-react';
import {
  PartBQuestion,
  PartBEvaluationResult,
  SubjectId,
  UserStudyState,
} from '../../types';
import { ALL_SUBJECTS } from '../../data/curriculum/subjects';
import { ALL_PART_B_QUESTIONS, getPartBBySubject, getPartBById } from '../../data/partB';
import { evaluatePartBAnswer } from '../../services/evaluator';
import { savePartBSubmission } from '../../services/storage';

interface PartBEvaluationViewProps {
  studyState: UserStudyState;
  onUpdateStudyState: (newState: UserStudyState) => void;
  onNavigateToTopic?: (subjectId: SubjectId, unitId: string, topicId: string) => void;
  onNavigateToMcq?: (subjectId?: SubjectId, topicId?: string) => void;
  initialQuestionId?: string;
}

export const PartBEvaluationView: React.FC<PartBEvaluationViewProps> = ({
  studyState,
  onUpdateStudyState,
  onNavigateToTopic,
  onNavigateToMcq,
  initialQuestionId,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>('all');
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(
    initialQuestionId || ALL_PART_B_QUESTIONS[0]?.id || ''
  );
  const [studentAnswer, setStudentAnswer] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<PartBEvaluationResult | null>(null);
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [showRubricPreview, setShowRubricPreview] = useState(false);

  // Timer tracking
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeQuestion =
    ALL_PART_B_QUESTIONS.find((q) => q.id === selectedQuestionId) || ALL_PART_B_QUESTIONS[0];

  // Filter questions by subject
  const availableQuestions =
    selectedSubject === 'all'
      ? ALL_PART_B_QUESTIONS
      : getPartBBySubject(selectedSubject);

  // If question ID passed via props changes, update selection
  useEffect(() => {
    if (initialQuestionId) {
      setSelectedQuestionId(initialQuestionId);
      const target = getPartBById(initialQuestionId);
      if (target) {
        setSelectedSubject(target.subjectId);
      }
    }
  }, [initialQuestionId]);

  // Manage timer
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  // Start timer on first keystroke
  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setStudentAnswer(val);
    if (!isTimerRunning && val.trim().length > 0 && !evaluationResult) {
      setIsTimerRunning(true);
    }
  };

  const wordCount = studentAnswer.trim()
    ? studentAnswer.trim().split(/\s+/).filter(Boolean).length
    : 0;

  const handleSelectQuestion = (qId: string) => {
    setSelectedQuestionId(qId);
    setStudentAnswer('');
    setEvaluationResult(null);
    setShowModelAnswer(false);
    setElapsedSeconds(0);
    setIsTimerRunning(false);
  };

  const handleSubmitEvaluation = () => {
    if (!activeQuestion || wordCount < 10) return;
    setIsSubmitting(true);
    setIsTimerRunning(false);

    // Run local rule-based evaluation
    setTimeout(() => {
      const result = evaluatePartBAnswer(activeQuestion, studentAnswer, elapsedSeconds || 45);
      setEvaluationResult(result);
      const updated = savePartBSubmission(result);
      onUpdateStudyState(updated);
      setIsSubmitting(false);
    }, 300);
  };

  const handleResetForRetry = () => {
    setEvaluationResult(null);
    setShowModelAnswer(false);
    setElapsedSeconds(0);
    setIsTimerRunning(false);
  };

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Find past submissions for active question
  const pastSubmissions = studyState.partBSubmissions.filter(
    (s) => s.questionId === activeQuestion?.id
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs relative overflow-hidden transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-violet-500" />
              <span>Offline Rule-Based Heuristic Evaluation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Part B &mdash; 11-Mark Answer Analyser
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Write university-grade descriptive answers evaluated instantly across 11 rubric marks, keyword matching, and concept coverage without external cloud APIs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 text-center">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Question Bank
              </span>
              <span className="text-xl font-black text-slate-900 dark:text-white">50 Questions</span>
            </div>
            <div className="bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/60 rounded-2xl px-4 py-3 text-center">
              <span className="block text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                Target Marks
              </span>
              <span className="text-xl font-black text-violet-900 dark:text-violet-200">11 Marks</span>
            </div>
          </div>
        </div>

        {/* Subject Filter Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setSelectedSubject('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedSubject === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Subjects (50)
          </button>
          {ALL_SUBJECTS.map((sub) => {
            const count = getPartBBySubject(sub.id).length;
            const isSelected = selectedSubject === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubject(sub.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs shadow-blue-600/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{sub.shortName}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-blue-700 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Question Picker & Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Questions List (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Select Question ({availableQuestions.length})
              </h2>
              <span className="text-[11px] text-slate-400">11 Marks each</span>
            </div>

            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {availableQuestions.map((q, idx) => {
                const isSelected = q.id === selectedQuestionId;
                const pastAtt = studyState.partBSubmissions.find((s) => s.questionId === q.id);
                return (
                  <button
                    key={q.id}
                    onClick={() => handleSelectQuestion(q.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all text-xs cursor-pointer ${
                      isSelected
                        ? 'border-violet-500 bg-violet-50/70 dark:bg-violet-950/40 shadow-xs ring-1 ring-violet-500'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-bold text-slate-400 text-[10px] uppercase">
                        {q.subjectId.toUpperCase()} &bull; Q{idx + 1}
                      </span>
                      {pastAtt ? (
                        <span className="inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          {pastAtt.totalScore}/11m
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400">Unattempted</span>
                      )}
                    </div>
                    <div className="font-bold text-slate-800 dark:text-slate-200 line-clamp-2 leading-relaxed">
                      {q.topicTitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Question Workspace & Evaluator (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {activeQuestion && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6 transition-colors">
              {/* Question Header */}
              <div className="space-y-3 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    {activeQuestion.topicTitle}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
                      Rubric: 11 Marks
                    </span>
                    <button
                      onClick={() => setShowRubricPreview(!showRubricPreview)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      {showRubricPreview ? 'Hide Rubric' : 'View Rubric'}
                    </button>
                  </div>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                  {activeQuestion.question}
                </h2>
              </div>

              {/* Collapsible Rubric Guidance */}
              {showRubricPreview && (
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
                  <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                    <span>11-Mark Evaluation Rubric Breakdown</span>
                    <span className="text-blue-600 dark:text-blue-400 font-extrabold">Total: 11.0 Marks</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeQuestion.expectedConcepts.map((c, i) => (
                      <div
                        key={c.id}
                        className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-2xs space-y-1"
                      >
                        <div className="flex justify-between items-center font-bold text-slate-800 dark:text-slate-200">
                          <span className="line-clamp-1">
                            {i + 1}. {c.name}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-extrabold shrink-0">
                            {c.weight}m
                          </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {c.description}
                        </p>
                        <div className="text-[11px] text-slate-400 pt-1">
                          Key Terms: {c.requiredKeywords.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Student Answer Box */}
              {!evaluationResult ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        Time: {formatTimer(elapsedSeconds)}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-xl font-bold ${
                          wordCount >= 100
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        Word Count: {wordCount} (Target: 150&ndash;350)
                      </span>
                    </div>
                    {isTimerRunning && (
                      <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Timer Active
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      value={studentAnswer}
                      onChange={handleAnswerChange}
                      rows={12}
                      placeholder="Type your comprehensive 11-mark university examination answer here...&#10;&#10;Structured Rubric Recommendations:&#10;1. Formal Definition & Architecture Overview&#10;2. Operational Mechanics & Formulas / Protocol Sequences&#10;3. ASCII System / Flow Architecture Diagram&#10;4. Boundary Constraints, Error Handling & Fault Tolerance&#10;5. Real-World Applications & Industry Comparison..."
                      className="w-full p-5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-xs sm:text-sm leading-relaxed resize-y shadow-inner outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>
                        100% Offline Rule-Based Rubric Engine. Model answer unlocked after grading.
                      </span>
                    </div>

                    <button
                      onClick={handleSubmitEvaluation}
                      disabled={wordCount < 15 || isSubmitting}
                      className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                        wordCount >= 15 && !isSubmitting
                          ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 cursor-pointer'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Evaluating Concepts...</span>
                        </>
                      ) : (
                        <>
                          <Award className="w-4 h-4" />
                          <span>Submit for 11-Mark Evaluation</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                /* Evaluation Results Display */
                <div className="space-y-6">
                  {/* Score Card Header */}
                  <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden shadow-xl">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                          Formative Evaluation Complete
                        </span>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-4xl sm:text-5xl font-black text-white tabular-nums">
                            {evaluationResult.totalScore}
                          </span>
                          <span className="text-xl sm:text-2xl font-bold text-slate-400">/ 11 Marks</span>
                          <span className="ml-2 text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                            {evaluationResult.percentage}% Score
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                          {evaluationResult.overallFeedback}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 text-xs w-full sm:w-auto shrink-0">
                        <div className="flex justify-between gap-6">
                          <span className="text-slate-400">Word Count:</span>
                          <span className="font-bold text-white tabular-nums">
                            {evaluationResult.wordCount} words
                          </span>
                        </div>
                        <div className="flex justify-between gap-6">
                          <span className="text-slate-400">Time Taken:</span>
                          <span className="font-bold text-white tabular-nums">
                            {formatTimer(evaluationResult.timeTakenSeconds)}
                          </span>
                        </div>
                        <div className="flex justify-between gap-6">
                          <span className="text-slate-400">Concept Coverage:</span>
                          <span className="font-bold text-emerald-400 tabular-nums">
                            {evaluationResult.completenessScore}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Offline Disclaimer Banner */}
                    <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{evaluationResult.disclaimer}</span>
                    </div>
                  </div>

                  {/* Rubric Concept Breakdown with Color-Coded Indicators */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider flex items-center justify-between">
                      <span>Concept Rubric Breakdown</span>
                      <span className="text-slate-400 font-normal">Weights sum to 11.0 Marks</span>
                    </h3>

                    <div className="space-y-3">
                      {evaluationResult.conceptEvaluations.map((c) => {
                        let badgeColor =
                          'bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/50';
                        let icon = <XCircle className="w-4 h-4 text-rose-500 shrink-0" />;
                        let statusText = 'Missing Concept (0 Marks)';

                        if (c.status === 'covered') {
                          badgeColor =
                            'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50';
                          icon = <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />;
                          statusText = `Fully Covered (${c.awardedMarks}/${c.weight}m)`;
                        } else if (c.status === 'partial') {
                          badgeColor =
                            'bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/50';
                          icon = <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />;
                          statusText = `Partially Covered (${c.awardedMarks}/${c.weight}m)`;
                        }

                        return (
                          <div key={c.conceptId} className={`p-4 rounded-2xl border transition-all ${badgeColor}`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                                {icon}
                                <span>{c.conceptName}</span>
                              </div>
                              <span className="text-[11px] font-black px-2 py-0.5 rounded-lg bg-white/80 dark:bg-slate-900/80 shadow-2xs">
                                {statusText}
                              </span>
                            </div>

                            <p className="text-xs leading-relaxed mb-2 opacity-90">{c.feedback}</p>

                            <div className="flex flex-wrap gap-2 text-[11px] pt-2 border-t border-black/5 dark:border-white/5">
                              {c.matchedKeywords.length > 0 && (
                                <div className="flex items-center gap-1 text-emerald-800 dark:text-emerald-300">
                                  <span className="font-bold">Matched:</span>
                                  <span>{c.matchedKeywords.join(', ')}</span>
                                </div>
                              )}
                              {c.missingKeywords.length > 0 && (
                                <div className="flex items-center gap-1 text-rose-700 dark:text-rose-400">
                                  <span className="font-bold">Missing Keywords:</span>
                                  <span>{c.missingKeywords.join(', ')}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Suggestions for Improvement */}
                  {evaluationResult.improvementSuggestions.length > 0 && (
                    <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-blue-500" />
                        Specific Suggestions for Improvement
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                        {evaluationResult.improvementSuggestions.map((sug, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span>{sug}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Reference Model Answer (Shown Strictly After Submission) */}
                  <div className="border border-indigo-200 dark:border-indigo-800/60 rounded-3xl overflow-hidden bg-indigo-50/40 dark:bg-indigo-950/20">
                    <button
                      onClick={() => setShowModelAnswer(!showModelAnswer)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-blue-500" />
                        Reference 11-Mark Model Answer (Offline Curriculum)
                      </span>
                      {showModelAnswer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {showModelAnswer && (
                      <div className="p-6 border-t border-indigo-200 dark:border-indigo-800/60 bg-white dark:bg-slate-900 space-y-4">
                        <div className="prose prose-sm dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed text-xs sm:text-sm">
                          {evaluationResult.modelAnswer}
                        </div>

                        {activeQuestion.examTips.length > 0 && (
                          <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-300/40 text-xs text-amber-950 dark:text-amber-200 space-y-1">
                            <span className="font-bold block">Examiner Tips:</span>
                            <ul className="list-disc pl-4 space-y-0.5">
                              {activeQuestion.examTips.map((tip, i) => (
                                <li key={i}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={handleResetForRetry}
                      className="px-4 py-2.5 rounded-2xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Try Another Attempt
                    </button>

                    <div className="flex flex-wrap items-center gap-2">
                      {onNavigateToTopic && (
                        <button
                          onClick={() =>
                            onNavigateToTopic(
                              activeQuestion.subjectId,
                              activeQuestion.unitId,
                              activeQuestion.topicId
                            )
                          }
                          className="px-4 py-2.5 rounded-2xl text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-800/60 transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Revise Topic Notes
                        </button>
                      )}
                      {onNavigateToMcq && (
                        <button
                          onClick={() =>
                            onNavigateToMcq(activeQuestion.subjectId, activeQuestion.topicId)
                          }
                          className="px-4 py-2.5 rounded-2xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Practice 10 MCQs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Past Submissions for this Question */}
          {pastSubmissions.length > 1 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 transition-colors">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                Previous Submissions for This Question ({pastSubmissions.length})
              </h4>
              <div className="space-y-2">
                {pastSubmissions.map((sub, i) => (
                  <div
                    key={sub.id}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        Attempt {pastSubmissions.length - i}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 ml-2">
                        {new Date(sub.submittedAt).toLocaleDateString()} &bull; {sub.wordCount} words
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-black text-blue-600 dark:text-blue-400">
                        {sub.totalScore} / 11 Marks
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                        {sub.completenessScore}% Coverage
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
