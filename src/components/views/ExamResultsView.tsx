import React, { useState } from 'react';
import {
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  XCircle,
  Download,
  Printer,
  RotateCcw,
  CalendarCheck2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { ExamSession } from '../../types';
import { NavTabId } from '../layout/Sidebar';
import { downloadCSV } from '../../utils/storage';

interface ExamResultsViewProps {
  session: ExamSession;
  onNavigate: (tab: NavTabId) => void;
  onRetakeExam: () => void;
}

export const ExamResultsView: React.FC<ExamResultsViewProps> = ({
  session,
  onNavigate,
  onRetakeExam,
}) => {
  const [showAnswerReview, setShowAnswerReview] = useState<boolean>(false);
  const [expandedAnsIdx, setExpandedAnsIdx] = useState<number | null>(null);

  const answers = session.answers || [];
  const correctCount = answers.filter((a) => a.evaluation.verdict === 'correct').length;
  const partialCount = answers.filter(
    (a) => a.evaluation.verdict === 'partially_correct'
  ).length;
  const miscCount = answers.filter(
    (a) => a.evaluation.verdict === 'misconception_detected'
  ).length;
  const incorrectCount = answers.filter((a) => a.evaluation.verdict === 'incorrect').length;

  const summary = session.sessionSummary || {
    overallScore: Math.round(
      answers.reduce((acc, a) => acc + a.evaluation.score, 0) / (answers.length || 1)
    ),
    masteredConcepts: ['Packet Loss Signals', 'AIMD Dynamics'],
    developingConcepts: ['Slow Start Phase'],
    revisionNeededConcepts: ['Congestion Avoidance'],
    misconceptionsIdentified: miscCount,
    strengths: [
      'Accurate understanding of packet loss signals',
      'Solid mathematical intuition for network convergence',
    ],
    keyRecommendations: [
      'Focus on the transition between Slow Start and Congestion Avoidance',
      'Review threshold boundary mechanics in detail',
    ],
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Examination Complete &bull; Diagnostic Assessment Ready</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => downloadCSV()}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition"
            >
              <Download className="w-3.5 h-3.5 text-indigo-400" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Diagnostic Examination Report: {session.topicTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {session.subject} &bull; {session.difficulty} Level &bull; {session.totalQuestionsPlanned} Questions Evaluated
          </p>
        </div>

        {/* Big Score Card */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-1 flex items-center justify-center shadow-lg shadow-indigo-600/30">
              <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center flex-col">
                <span className="text-2xl font-black text-white">{summary.overallScore}%</span>
                <span className="text-[10px] text-slate-400 font-semibold">SCORE</span>
              </div>
            </div>

            <div>
              <span className="text-xs text-slate-400 block font-medium">Cognitive Mastery Index</span>
              <h3 className="text-lg font-bold text-white">
                {summary.overallScore >= 80
                  ? 'Strong Conceptual Mastery'
                  : summary.overallScore >= 60
                  ? 'Developing Foundations with Key Gaps'
                  : 'Critical Misconceptions Detected'}
              </h3>
            </div>
          </div>

          {/* Quick Breakdown Pills */}
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="block text-emerald-400 font-bold text-base">{correctCount}</span>
              <span className="text-[10px] text-slate-400">Correct</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="block text-cyan-400 font-bold text-base">{partialCount}</span>
              <span className="text-[10px] text-slate-400">Partial</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="block text-amber-400 font-bold text-base">{miscCount}</span>
              <span className="text-[10px] text-slate-400">Misconcept</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="block text-rose-400 font-bold text-base">{incorrectCount}</span>
              <span className="text-[10px] text-slate-400">Incorrect</span>
            </div>
          </div>
        </div>
      </div>

      {/* Strengths & Targeted Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Demonstrated Strengths */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
          <h3 className="text-sm font-bold text-emerald-400 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Demonstrated Conceptual Strengths</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {summary.strengths?.map((str, idx) => (
              <li key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>{str}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Targeted Corrective Recommendations */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
          <h3 className="text-sm font-bold text-amber-400 flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>Targeted Corrective Recommendations</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {summary.keyRecommendations?.map((rec, idx) => (
              <li key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start space-x-2">
                <span className="text-amber-400 font-bold">&bull;</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Concept Mastery Status Grid */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white">Concept Mastery Classification</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Mastered */}
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
            <span className="font-bold text-emerald-400 block uppercase tracking-wider text-[11px]">
              Mastered Concepts
            </span>
            <div className="space-y-1">
              {summary.masteredConcepts && summary.masteredConcepts.length > 0 ? (
                summary.masteredConcepts.map((c, i) => (
                  <div key={i} className="text-slate-200 py-0.5">
                    &bull; {c}
                  </div>
                ))
              ) : (
                <div className="text-slate-500 italic">None yet</div>
              )}
            </div>
          </div>

          {/* Developing */}
          <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
            <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">
              Developing
            </span>
            <div className="space-y-1">
              {summary.developingConcepts && summary.developingConcepts.length > 0 ? (
                summary.developingConcepts.map((c, i) => (
                  <div key={i} className="text-slate-200 py-0.5">
                    &bull; {c}
                  </div>
                ))
              ) : (
                <div className="text-slate-500 italic">None yet</div>
              )}
            </div>
          </div>

          {/* Needs Revision */}
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
            <span className="font-bold text-amber-400 block uppercase tracking-wider text-[11px]">
              Needs Revision
            </span>
            <div className="space-y-1">
              {summary.revisionNeededConcepts && summary.revisionNeededConcepts.length > 0 ? (
                summary.revisionNeededConcepts.map((c, i) => (
                  <div key={i} className="text-slate-200 py-0.5">
                    &bull; {c}
                  </div>
                ))
              ) : (
                <div className="text-slate-500 italic">None</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Answers & Evaluations Transcript Review */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Full Examination Transcript</h3>
            <p className="text-xs text-slate-400">
              Inspect questions, your submitted reasoning, and the AI examiner's breakdown.
            </p>
          </div>
          <button
            onClick={() => setShowAnswerReview(!showAnswerReview)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition"
          >
            <span>{showAnswerReview ? 'Collapse Review' : 'Expand Review'}</span>
            {showAnswerReview ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {showAnswerReview && (
          <div className="space-y-4 pt-3">
            {answers.map((ans, idx) => {
              const q = session.questions.find((qu) => qu.id === ans.questionId);
              const isExpanded = expandedAnsIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden text-xs"
                >
                  <button
                    onClick={() => setExpandedAnsIdx(isExpanded ? null : idx)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-900/60 transition"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-white">
                          Question {idx + 1}: {q?.conceptTargeted || 'Concept'}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                            ans.evaluation.verdict === 'correct'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : ans.evaluation.verdict === 'misconception_detected'
                              ? 'bg-amber-500/20 text-amber-400'
                              : 'bg-cyan-500/20 text-cyan-400'
                          }`}
                        >
                          {ans.evaluation.verdict.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px] line-clamp-1">{q?.questionText}</p>
                    </div>

                    <div className="text-right shrink-0 ml-3">
                      <span className="font-extrabold text-white text-sm">{ans.evaluation.score}%</span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 pt-0 space-y-3 border-t border-slate-900 bg-slate-900/40">
                      <div>
                        <span className="text-slate-400 font-semibold block mb-0.5">Question Prompt:</span>
                        <p className="text-slate-200">{q?.questionText}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <span className="text-slate-400 font-semibold block mb-0.5">Your Response:</span>
                        <p className="text-white">{ans.studentResponse}</p>
                        {ans.reasoningText && (
                          <p className="text-indigo-300 text-[11px] mt-1.5 italic">
                            Reasoning: &ldquo;{ans.reasoningText}&rdquo;
                          </p>
                        )}
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <span className="text-emerald-400 font-semibold block mb-0.5">Feedback & Explanation:</span>
                        <p className="text-slate-300">{ans.evaluation.constructiveFeedback}</p>
                        <p className="text-slate-400 text-[11px] mt-1">{ans.evaluation.correctExplanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Navigation & Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-3xl bg-slate-900/90 border border-slate-800">
        <button
          onClick={onRetakeExam}
          className="flex items-center space-x-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake or Start Another Examination</span>
        </button>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('misconceptions')}
            className="flex items-center space-x-1.5 px-4 py-3 rounded-2xl bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/40 text-xs sm:text-sm font-semibold transition"
          >
            <AlertCircle className="w-4 h-4" />
            <span>View Misconception Analysis</span>
          </button>
          <button
            onClick={() => onNavigate('revision')}
            className="flex items-center space-x-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/30 transition"
          >
            <CalendarCheck2 className="w-4 h-4" />
            <span>Generate Revision Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
