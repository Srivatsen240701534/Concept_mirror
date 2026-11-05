// src/components/views/PerformanceHistoryView.tsx
// Section 7: Performance History View
// Full audit log of all completed MCQ test attempts and Part B 11-Mark answer submissions.

import React, { useState } from 'react';
import {
  History,
  CheckCircle2,
  XCircle,
  Clock,
  Award,
  BookOpen,
  Calendar,
  Eye,
  FileText,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';
import { MCQTestAttempt, PartBEvaluationResult, UserStudyState } from '../../types';

interface PerformanceHistoryViewProps {
  studyState: UserStudyState;
  onNavigateToMcq?: () => void;
  onNavigateToPartB?: () => void;
}

export const PerformanceHistoryView: React.FC<PerformanceHistoryViewProps> = ({
  studyState,
  onNavigateToMcq,
  onNavigateToPartB,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'mcq' | 'partb'>('all');
  const [selectedMcqAttempt, setSelectedMcqAttempt] = useState<MCQTestAttempt | null>(null);
  const [selectedPartBSubmission, setSelectedPartBSubmission] = useState<PartBEvaluationResult | null>(null);

  const mcqAttempts = studyState.mcqAttempts || [];
  const partBSubmissions = studyState.partBSubmissions || [];

  // Combine chronological items
  const combinedHistory = [
    ...mcqAttempts.map((item) => ({ type: 'mcq' as const, date: new Date(item.timestamp).getTime(), item })),
    ...partBSubmissions.map((item) => ({ type: 'partb' as const, date: new Date(item.submittedAt).getTime(), item })),
  ].sort((a, b) => b.date - a.date);

  const filteredHistory = combinedHistory.filter((entry) => {
    if (filterType === 'mcq') return entry.type === 'mcq';
    if (filterType === 'partb') return entry.type === 'partb';
    return true;
  });

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
              <History className="w-3.5 h-3.5 text-blue-600" />
              <span>Section 7 · Comprehensive Evaluation Audit</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Performance History
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Chronological log of your MCQ practice exams and Part B 11-mark evaluations stored in your browser's local memory.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-center">
              <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider">MCQ Tests</span>
              <span className="text-xl font-bold text-slate-900">{mcqAttempts.length}</span>
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-xl px-4 py-2.5 text-center">
              <span className="block text-xs font-medium text-violet-600 uppercase tracking-wider">Part B Submissions</span>
              <span className="text-xl font-bold text-violet-900">{partBSubmissions.length}</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Activity ({combinedHistory.length})
          </button>
          <button
            onClick={() => setFilterType('mcq')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'mcq'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            MCQ Tests ({mcqAttempts.length})
          </button>
          <button
            onClick={() => setFilterType('partb')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'partb'
                ? 'bg-violet-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Part B Submissions ({partBSubmissions.length})
          </button>
        </div>
      </div>

      {/* History Feed */}
      {filteredHistory.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center space-y-4">
          <History className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No Assessment Records Found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Take a 10-question MCQ practice exam or write a Part B 11-mark answer to begin recording persistent performance history.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            {onNavigateToMcq && (
              <button
                onClick={onNavigateToMcq}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs"
              >
                Start MCQ Practice
              </button>
            )}
            {onNavigateToPartB && (
              <button
                onClick={onNavigateToPartB}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                Attempt Part B Question
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredHistory.map((entry) => {
            if (entry.type === 'mcq') {
              const attempt = entry.item as MCQTestAttempt;
              return (
                <div
                  key={attempt.id}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 shadow-2xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-indigo-50 text-indigo-700 border border-indigo-200">
                        MCQ Practice ({attempt.mode})
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(attempt.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">{attempt.title}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                      <span>Questions: <strong>{attempt.totalQuestions}</strong></span>
                      <span>Correct: <strong className="text-emerald-600">{attempt.score}</strong></span>
                      <span>Time: <strong>{formatTimer(attempt.timeSpentSeconds)}</strong></span>
                      {attempt.topicsNeedingRevision.length > 0 && (
                        <span className="text-amber-700 font-semibold flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3 text-amber-500" />
                          {attempt.topicsNeedingRevision.length} revision alert(s)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <div className="text-right">
                      <span className="text-2xl font-black text-slate-900">{attempt.accuracy}%</span>
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase">Accuracy</span>
                    </div>
                    <button
                      onClick={() => setSelectedMcqAttempt(attempt)}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Review
                    </button>
                  </div>
                </div>
              );
            } else {
              const submission = entry.item as PartBEvaluationResult;
              return (
                <div
                  key={submission.id}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 shadow-2xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-violet-50 text-violet-700 border border-violet-200">
                        Part B 11-Mark Evaluation
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(submission.submittedAt).toLocaleString()}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">{submission.topicTitle}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                      <span>Word Count: <strong>{submission.wordCount} words</strong></span>
                      <span>Concept Coverage: <strong className="text-emerald-600">{submission.completenessScore}%</strong></span>
                      <span>Time: <strong>{formatTimer(submission.timeTakenSeconds)}</strong></span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <div className="text-right">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-indigo-700">{submission.totalScore}</span>
                        <span className="text-xs font-bold text-slate-400">/ 11m</span>
                      </div>
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase">Score ({submission.percentage}%)</span>
                    </div>
                    <button
                      onClick={() => setSelectedPartBSubmission(submission)}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Diagnostics
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}

      {/* Review Modal for MCQ Attempt */}
      {selectedMcqAttempt && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 border border-slate-200 shadow-xl space-y-5 max-h-[85vh] flex flex-col">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold uppercase text-indigo-600">
                  MCQ Attempt Review · {selectedMcqAttempt.mode}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                  {selectedMcqAttempt.title}
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  Accuracy: <strong>{selectedMcqAttempt.accuracy}%</strong> ({selectedMcqAttempt.score}/{selectedMcqAttempt.totalQuestions}) · Time: {formatTimer(selectedMcqAttempt.timeSpentSeconds)}
                </div>
              </div>
              <button
                onClick={() => setSelectedMcqAttempt(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 overflow-y-auto pr-1 flex-1 text-xs">
              {selectedMcqAttempt.userAnswers.map((ans, idx) => (
                <div
                  key={ans.questionId + idx}
                  className={`p-3.5 rounded-xl border ${
                    ans.isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-700">Question {idx + 1}</span>
                    <span className={`font-bold flex items-center gap-1 ${ans.isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {ans.isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      {ans.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="text-slate-600 font-medium">Topic: {ans.topicTitle}</p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedMcqAttempt(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                Close Review
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal for Part B Submission */}
      {selectedPartBSubmission && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 border border-slate-200 shadow-xl space-y-5 max-h-[85vh] flex flex-col">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold uppercase text-violet-600">
                  Part B Assessment Diagnostic
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                  {selectedPartBSubmission.topicTitle}
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  Marks Awarded: <strong className="text-indigo-600">{selectedPartBSubmission.totalScore}/11</strong> · Words: {selectedPartBSubmission.wordCount} · Time: {formatTimer(selectedPartBSubmission.timeTakenSeconds)}
                </div>
              </div>
              <button
                onClick={() => setSelectedPartBSubmission(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 overflow-y-auto pr-1 flex-1 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-700 block mb-1">Your Submission</span>
                <p className="text-slate-600 leading-relaxed max-h-40 overflow-y-auto whitespace-pre-line">
                  {selectedPartBSubmission.studentAnswer}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-slate-800 uppercase tracking-wider block">
                  Concept Rubric Evaluations
                </span>
                {selectedPartBSubmission.conceptEvaluations.map((c) => (
                  <div key={c.conceptId} className="p-3 rounded-lg border border-slate-200 bg-white">
                    <div className="flex items-center justify-between font-bold text-slate-800 mb-1">
                      <span>{c.conceptName}</span>
                      <span className="text-indigo-600">{c.awardedMarks}/{c.weight}m</span>
                    </div>
                    <p className="text-slate-500">{c.feedback}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedPartBSubmission(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
