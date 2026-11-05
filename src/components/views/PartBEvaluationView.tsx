// src/components/views/PartBEvaluationView.tsx
// Section 5: Part B — 11-Mark Answer Analyser (Highest Priority Feature)
// Local rule-based evaluation engine matching keywords, phrases, synonyms, and concept groups.

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

  const activeQuestion = ALL_PART_B_QUESTIONS.find((q) => q.id === selectedQuestionId) || ALL_PART_B_QUESTIONS[0];

  // Filter questions by subject
  const availableQuestions = selectedSubject === 'all'
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

  const wordCount = studentAnswer.trim() ? studentAnswer.trim().split(/\s+/).filter(Boolean).length : 0;

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
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Section 5 · Local Heuristic Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Part B — 11-Mark Answer Analyser
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Write comprehensive university-level answers and receive instant, rule-based grading across 11 rubric marks, keyword matching, and concept coverage without external cloud APIs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-center">
              <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider">Total Questions</span>
              <span className="text-xl font-bold text-slate-900">50 Questions</span>
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-xl px-4 py-2.5 text-center">
              <span className="block text-xs font-medium text-violet-600 uppercase tracking-wider">Per Question</span>
              <span className="text-xl font-bold text-violet-900">11 Marks</span>
            </div>
          </div>
        </div>

        {/* Subject Filter Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100">
          <button
            onClick={() => setSelectedSubject('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedSubject === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{sub.shortName}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'}`}>
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
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                Select Question ({availableQuestions.length})
              </h2>
              <span className="text-xs text-slate-500 font-medium">11 Marks each</span>
            </div>

            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {availableQuestions.map((q, idx) => {
                const isSelected = q.id === selectedQuestionId;
                const pastAtt = studyState.partBSubmissions.find((s) => s.questionId === q.id);
                return (
                  <button
                    key={q.id}
                    onClick={() => handleSelectQuestion(q.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all text-xs ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50/70 shadow-xs ring-1 ring-indigo-500'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-semibold text-slate-500 text-[11px]">
                        {q.subjectId.toUpperCase()} · Q{idx + 1}
                      </span>
                      {pastAtt ? (
                        <span className="inline-flex items-center gap-1 font-bold px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          {pastAtt.totalScore}/11
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400">Unattempted</span>
                      )}
                    </div>
                    <div className="font-medium text-slate-800 line-clamp-2 leading-relaxed">
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
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
              {/* Question Header */}
              <div className="space-y-2 pb-4 border-b border-slate-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.8 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                    <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                    {activeQuestion.topicTitle}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.8 rounded-md text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      Max Marks: 11
                    </span>
                    <button
                      onClick={() => setShowRubricPreview(!showRubricPreview)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      {showRubricPreview ? 'Hide Rubric' : 'View Rubric'}
                    </button>
                  </div>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {activeQuestion.question}
                </h2>
              </div>

              {/* Collapsible Rubric Guidance */}
              {showRubricPreview && (
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3 text-xs">
                  <div className="font-bold text-slate-800 flex items-center justify-between">
                    <span>11-Mark Evaluation Rubric Breakdown</span>
                    <span className="text-indigo-600 font-semibold">Total: 11.0 Marks</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeQuestion.expectedConcepts.map((c, i) => (
                      <div key={c.id} className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
                        <div className="flex justify-between items-center font-semibold text-slate-800 mb-1">
                          <span className="line-clamp-1">{i + 1}. {c.name}</span>
                          <span className="px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold shrink-0">
                            {c.weight}m
                          </span>
                        </div>
                        <p className="text-slate-500 line-clamp-2">{c.description}</p>
                        <div className="mt-1 text-[11px] text-slate-400">
                          Keywords: {c.requiredKeywords.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Student Answer Box */}
              {!evaluationResult ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-slate-600 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-indigo-600" />
                        Time: {formatTimer(elapsedSeconds)}
                      </span>
                      <span className={`px-2 py-0.5 rounded font-semibold ${
                        wordCount >= 100 ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        Word Count: {wordCount} (Target: 150-350)
                      </span>
                    </div>
                    {isTimerRunning && (
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Recording Response
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      value={studentAnswer}
                      onChange={handleAnswerChange}
                      rows={12}
                      placeholder="Type your complete 11-mark university response here...&#10;&#10;Recommended Structure:&#10;1. Formal Definition & Architectural Overview&#10;2. Operational Mechanics & Formulas / Protocols&#10;3. ASCII Architecture / State Diagram (e.g. Node A -> Hub -> Node B)&#10;4. Boundary Constraints, Fault Tolerance & Error Handling&#10;5. Real-World Applications & Trade-off Comparison..."
                      className="w-full p-4 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-slate-800 text-sm leading-relaxed resize-y font-normal shadow-inner outline-hidden"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <div className="text-xs text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>100% Offline Rule-Based Evaluation. Model answer shown only after submission.</span>
                    </div>

                    <button
                      onClick={handleSubmitEvaluation}
                      disabled={wordCount < 15 || isSubmitting}
                      className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 ${
                        wordCount >= 15 && !isSubmitting
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md cursor-pointer'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
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
                /* Evaluation Results Display (Section 5) */
                <div className="space-y-6 animate-fadeIn">
                  {/* Score Card Header */}
                  <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-md">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                          Offline Formative Assessment
                        </span>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-4xl sm:text-5xl font-black text-white">
                            {evaluationResult.totalScore}
                          </span>
                          <span className="text-xl sm:text-2xl font-bold text-slate-400">/ 11 Marks</span>
                          <span className="ml-2 text-sm font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                            {evaluationResult.percentage}% Score
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                          {evaluationResult.overallFeedback}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 text-xs w-full sm:w-auto">
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Word Count:</span>
                          <span className="font-bold text-white">{evaluationResult.wordCount} words</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Time Taken:</span>
                          <span className="font-bold text-white">{formatTimer(evaluationResult.timeTakenSeconds)}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-400">Concept Coverage:</span>
                          <span className="font-bold text-emerald-400">{evaluationResult.completenessScore}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Offline Disclaimer Banner */}
                    <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{evaluationResult.disclaimer}</span>
                    </div>
                  </div>

                  {/* Rubric Concept Breakdown with Green / Yellow / Red Indicators */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                      <span>Concept Rubric Breakdown</span>
                      <span className="text-xs font-normal text-slate-500">
                        Weights sum to exactly 11 Marks
                      </span>
                    </h3>

                    <div className="space-y-3">
                      {evaluationResult.conceptEvaluations.map((c) => {
                        let badgeColor = 'bg-rose-50 text-rose-700 border-rose-200';
                        let icon = <XCircle className="w-4 h-4 text-rose-500 shrink-0" />;
                        let statusText = 'Missing Concept (0 Marks)';

                        if (c.status === 'covered') {
                          badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
                          icon = <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />;
                          statusText = `Fully Covered (${c.awardedMarks}/${c.weight}m)`;
                        } else if (c.status === 'partial') {
                          badgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
                          icon = <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />;
                          statusText = `Partially Covered (${c.awardedMarks}/${c.weight}m)`;
                        }

                        return (
                          <div
                            key={c.conceptId}
                            className={`p-4 rounded-xl border transition-all ${badgeColor}`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                              <div className="flex items-center gap-2 font-bold text-sm">
                                {icon}
                                <span>{c.conceptName}</span>
                              </div>
                              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-white/70 shadow-2xs">
                                {statusText}
                              </span>
                            </div>

                            <p className="text-xs leading-relaxed mb-2 opacity-90">
                              {c.feedback}
                            </p>

                            <div className="flex flex-wrap gap-2 text-[11px] pt-1 border-t border-black/5">
                              {c.matchedKeywords.length > 0 && (
                                <div className="flex items-center gap-1 text-emerald-800">
                                  <span className="font-semibold">Matched:</span>
                                  <span>{c.matchedKeywords.join(', ')}</span>
                                </div>
                              )}
                              {c.missingKeywords.length > 0 && (
                                <div className="flex items-center gap-1 text-rose-700">
                                  <span className="font-semibold">Missing Keywords:</span>
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
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        Specific Suggestions for Improvement
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {evaluationResult.improvementSuggestions.map((sug, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                            <span>{sug}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Reference Model Answer (Shown Strictly After Submission) */}
                  <div className="border border-indigo-200 rounded-xl overflow-hidden bg-indigo-50/40">
                    <button
                      onClick={() => setShowModelAnswer(!showModelAnswer)}
                      className="w-full px-5 py-3.5 flex items-center justify-between text-left font-bold text-sm text-indigo-950 hover:bg-indigo-100/50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-indigo-600" />
                        Reference 11-Mark Model Answer (Offline Curriculum)
                      </span>
                      {showModelAnswer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {showModelAnswer && (
                      <div className="p-5 border-t border-indigo-200 bg-white space-y-4">
                        <div className="prose prose-sm max-w-none text-slate-800 whitespace-pre-line leading-relaxed font-normal text-xs sm:text-sm">
                          {evaluationResult.modelAnswer}
                        </div>

                        {activeQuestion.examTips.length > 0 && (
                          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 space-y-1">
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
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
                    <button
                      onClick={handleResetForRetry}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Try Another Attempt
                    </button>

                    <div className="flex flex-wrap items-center gap-2">
                      {onNavigateToTopic && (
                        <button
                          onClick={() => onNavigateToTopic(activeQuestion.subjectId, activeQuestion.unitId, activeQuestion.topicId)}
                          className="px-4 py-2 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors flex items-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Revise Topic Notes
                        </button>
                      )}
                      {onNavigateToMcq && (
                        <button
                          onClick={() => onNavigateToMcq(activeQuestion.subjectId, activeQuestion.topicId)}
                          className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs transition-colors flex items-center gap-1.5"
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
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                Previous Submissions for This Question ({pastSubmissions.length})
              </h4>
              <div className="space-y-2">
                {pastSubmissions.map((sub, i) => (
                  <div
                    key={sub.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-800">Attempt {pastSubmissions.length - i}</span>
                      <span className="text-slate-500 ml-2">
                        {new Date(sub.submittedAt).toLocaleDateString()} · {sub.wordCount} words
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-indigo-700">
                        {sub.totalScore} / 11 Marks
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
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
