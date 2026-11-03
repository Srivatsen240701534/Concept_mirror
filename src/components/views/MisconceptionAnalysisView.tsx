import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Filter,
  Lightbulb,
  Check,
  RotateCcw,
  BookOpen,
} from 'lucide-react';
import { Misconception } from '../../types';
import { NavTabId } from '../layout/Sidebar';

interface MisconceptionAnalysisViewProps {
  misconceptions: Misconception[];
  onResolveMisconception: (id: string) => void;
  onNavigate: (tab: NavTabId) => void;
}

export const MisconceptionAnalysisView: React.FC<MisconceptionAnalysisViewProps> = ({
  misconceptions,
  onResolveMisconception,
  onNavigate,
}) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'resolved'>('all');
  const [activeChallengeId, setActiveChallengeId] = useState<string | null>(null);
  const [selectedChallengeOption, setSelectedChallengeOption] = useState<number | null>(null);
  const [challengeResult, setChallengeResult] = useState<{
    correct: boolean;
    feedback: string;
  } | null>(null);

  const totalIdentified = misconceptions.length;
  const resolvedCount = misconceptions.filter((m) => m.isResolved).length;
  const activeCount = totalIdentified - resolvedCount;

  const filteredMisconceptions = misconceptions.filter((m) => {
    if (filter === 'active') return !m.isResolved;
    if (filter === 'resolved') return m.isResolved;
    return true;
  });

  const handleStartChallenge = (m: Misconception) => {
    setActiveChallengeId(m.id);
    setSelectedChallengeOption(null);
    setChallengeResult(null);
  };

  const handleSubmitChallenge = (m: Misconception) => {
    if (selectedChallengeOption === null) return;
    const isCorrect = selectedChallengeOption === m.verificationChallenge.correctIndex;

    setChallengeResult({
      correct: isCorrect,
      feedback: isCorrect
        ? 'Verification challenge solved! You have demonstrated the correct mental model.'
        : `Not quite. ${m.verificationChallenge.explanation}`,
    });

    if (isCorrect) {
      onResolveMisconception(m.id);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Diagnostic Misconception Detector</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Inferred Cognitive Misconceptions
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          Unlike simple factual errors, misconceptions represent persistent, flawed mental models.
          Solve the verification challenges below to recalibrate your conceptual schema.
        </p>
      </div>

      {/* Summary KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <span className="text-xs font-medium text-slate-400 block mb-1">Total Inferred</span>
          <div className="text-3xl font-extrabold text-white">{totalIdentified}</div>
          <span className="text-[11px] text-slate-400">Systemic errors captured</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <span className="text-xs font-medium text-slate-400 block mb-1">Active Misconceptions</span>
          <div className="text-3xl font-extrabold text-amber-400">{activeCount}</div>
          <span className="text-[11px] text-amber-400/90">Requires verification challenge</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <span className="text-xs font-medium text-slate-400 block mb-1">Resolved Schema</span>
          <div className="text-3xl font-extrabold text-emerald-400">{resolvedCount}</div>
          <span className="text-[11px] text-emerald-400/90">Recalibrated successfully</span>
        </div>
      </div>

      {/* Filters & Notice */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-semibold text-slate-300">Filter:</span>
          {(['all', 'active', 'resolved'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setFilter(mode)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold capitalize transition ${
                filter === mode
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        <div className="text-[11px] text-slate-400 italic">
          *Described as likely misconceptions inferred from submitted student responses.
        </div>
      </div>

      {/* Misconceptions List */}
      <div className="space-y-6">
        {filteredMisconceptions.map((item) => {
          const isChallengeOpen = activeChallengeId === item.id;
          return (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-3xl border transition shadow-xl space-y-5 ${
                item.isResolved
                  ? 'bg-slate-900/60 border-emerald-500/30'
                  : 'bg-slate-900/90 border-amber-500/40'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        item.isResolved
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {item.isResolved ? 'Resolved' : 'Active Inferred Misconception'}
                    </span>
                    <span className="text-xs text-slate-400">
                      {item.subject} &bull; {item.topicTitle}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.conceptName}</h3>
                </div>

                {!item.isResolved && (
                  <button
                    onClick={() => handleStartChallenge(item)}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-lg shadow-indigo-600/30 flex items-center space-x-1.5 self-start sm:self-auto"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Launch Verification Challenge</span>
                  </button>
                )}
              </div>

              {/* Inferred Reasoning vs Reality Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-rose-400 block uppercase tracking-wider text-[10px]">
                    Your Submitted Reasoning:
                  </span>
                  <p className="text-slate-200 italic">&ldquo;{item.studentReasoning}&rdquo;</p>
                  <p className="text-slate-400 text-[11px] pt-1 border-t border-slate-800/80">
                    <strong>Why Flawed:</strong> {item.whyIncorrect}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-emerald-400 block uppercase tracking-wider text-[10px]">
                    Scientific & Technical Reality:
                  </span>
                  <p className="text-slate-200">{item.correctExplanation}</p>
                  {item.simpleAnalogy && (
                    <p className="text-cyan-300 text-[11px] pt-1 border-t border-slate-800/80 italic">
                      <strong>Analogy:</strong> {item.simpleAnalogy}
                    </p>
                  )}
                </div>
              </div>

              {/* Interactive Verification Challenge Modal/Drawer */}
              {isChallengeOpen && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-indigo-500/50 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-cyan-300 flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Quick Recalibration Verification Challenge</span>
                    </span>
                    <button
                      onClick={() => setActiveChallengeId(null)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      Close
                    </button>
                  </div>

                  <p className="text-xs font-semibold text-white">
                    {item.verificationChallenge.question}
                  </p>

                  <div className="space-y-2">
                    {item.verificationChallenge.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => setSelectedChallengeOption(oIdx)}
                        className={`w-full p-3 rounded-xl text-left text-xs font-medium transition border ${
                          selectedChallengeOption === oIdx
                            ? 'bg-indigo-600/30 border-indigo-500 text-white'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {challengeResult && (
                    <div
                      className={`p-3.5 rounded-xl text-xs font-medium ${
                        challengeResult.correct
                          ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/40'
                          : 'bg-rose-950/40 text-rose-300 border border-rose-500/40'
                      }`}
                    >
                      {challengeResult.feedback}
                    </div>
                  )}

                  <div className="pt-2 flex justify-end space-x-2">
                    <button
                      type="button"
                      disabled={selectedChallengeOption === null}
                      onClick={() => handleSubmitChallenge(item)}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md transition disabled:opacity-50"
                    >
                      Verify My Mental Model
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredMisconceptions.length === 0 && (
          <div className="p-12 rounded-3xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-base font-bold text-white">No active misconceptions found</h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Your previous answer evaluations showed consistent mental models. Continue testing other
              topics to stress-test your knowledge!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
