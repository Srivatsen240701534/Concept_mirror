import React, { useState } from 'react';
import {
  CalendarCheck2,
  Clock,
  CheckCircle2,
  AlertCircle,
  Play,
  RotateCcw,
  Sparkles,
  Calendar,
  Check,
  Plus,
} from 'lucide-react';
import { RevisionTask } from '../../types';

interface RevisionPlannerViewProps {
  revisionTasks: RevisionTask[];
  onToggleTask: (id: string) => void;
  onRescheduleTask: (id: string, daysAhead: number) => void;
  onStartRevisionExam: (conceptName: string, topicTitle: string) => void;
}

export const RevisionPlannerView: React.FC<RevisionPlannerViewProps> = ({
  revisionTasks,
  onToggleTask,
  onRescheduleTask,
  onStartRevisionExam,
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('pending');

  const pendingTasks = revisionTasks.filter((t) => !t.isCompleted);
  const completedTasks = revisionTasks.filter((t) => t.isCompleted);

  const displayedTasks = revisionTasks.filter((t) => {
    if (filter === 'pending') return !t.isCompleted;
    if (filter === 'completed') return t.isCompleted;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
          <CalendarCheck2 className="w-3.5 h-3.5" />
          <span>Cognitive Spaced Revision Planner</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Personalized Adaptive Revision Schedule
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          Derived automatically from your misconception detections, partial-credit responses, and memory decay
          thresholds to reinforce long-term mastery.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <span className="text-xs font-medium text-slate-400 block mb-1">Due for Revision</span>
          <div className="text-3xl font-extrabold text-amber-400">{pendingTasks.length}</div>
          <span className="text-[11px] text-slate-400">Scheduled priority tasks</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <span className="text-xs font-medium text-slate-400 block mb-1">Completed Reviews</span>
          <div className="text-3xl font-extrabold text-emerald-400">{completedTasks.length}</div>
          <span className="text-[11px] text-emerald-400/90">Reinforced concepts</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <span className="text-xs font-medium text-slate-400 block mb-1">Est. Study Commitment</span>
          <div className="text-3xl font-extrabold text-white">
            {pendingTasks.reduce((acc, t) => acc + t.estimatedMinutes, 0)} mins
          </div>
          <span className="text-[11px] text-slate-400">Targeted micro-sessions</span>
        </div>
      </div>

      {/* Spaced Retrieval Disclaimer Banner */}
      <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed flex items-start space-x-3">
        <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <p>
          <strong className="text-slate-200">Scientific Methodology:</strong> ConceptMirror AI leverages
          spaced-retrieval intervals and error-contingent testing. Note: Spaced revision is an evidence-based
          pedagogical scheduling aid; individual cognitive retention varies with sleep, prior background, and depth of practice.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
        {(['pending', 'completed', 'all'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition ${
              filter === tab
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {tab} ({tab === 'pending' ? pendingTasks.length : tab === 'completed' ? completedTasks.length : revisionTasks.length})
          </button>
        ))}
      </div>

      {/* Task Cards */}
      <div className="space-y-4">
        {displayedTasks.map((task) => (
          <div
            key={task.id}
            className={`p-6 rounded-3xl border transition shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-5 ${
              task.isCompleted
                ? 'bg-slate-900/40 border-slate-800/80 opacity-70'
                : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    task.priority === 'High'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  }`}
                >
                  {task.priority} Priority
                </span>
                <span className="text-xs text-slate-400">
                  {task.subject} &bull; {task.topicTitle}
                </span>
                <span className="text-xs text-slate-500">
                  Target Date: {task.scheduledDate}
                </span>
              </div>

              <h3 className={`text-base font-bold ${task.isCompleted ? 'line-through text-slate-400' : 'text-white'}`}>
                {task.conceptName}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-amber-400 mr-1">Diagnostic Trigger:</strong>
                {task.reasonForRevision}
              </p>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-cyan-300">
                <strong>Recommended Practice:</strong> {task.recommendedActivity}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
              <button
                onClick={() => onToggleTask(task.id)}
                className={`flex-1 sm:flex-none flex items-center justify-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition ${
                  task.isCompleted
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>{task.isCompleted ? 'Completed' : 'Mark Done'}</span>
              </button>

              {!task.isCompleted && (
                <>
                  <button
                    onClick={() => onRescheduleTask(task.id, 2)}
                    className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition"
                    title="Reschedule +2 days"
                  >
                    +2d
                  </button>

                  <button
                    onClick={() => onStartRevisionExam(task.conceptName, task.topicTitle)}
                    className="flex-1 sm:flex-none flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-lg shadow-indigo-600/30"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Practice ({task.estimatedMinutes}m)</span>
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        {displayedTasks.length === 0 && (
          <div className="p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-base font-bold text-white">No tasks in this category</h4>
            <p className="text-xs text-slate-400">
              Take examinations in AI Examiner to automatically populate your revision queue.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
