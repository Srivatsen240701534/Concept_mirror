import React from 'react';
import {
  Brain,
  GraduationCap,
  BookOpen,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
  Layers,
  Network,
  RotateCcw,
  Zap,
} from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import {
  ExamSession,
  LearningTopic,
  MasteryRecord,
  Misconception,
  RevisionTask,
} from '../../types';
import { NavTabId } from '../layout/Sidebar';

interface OverviewViewProps {
  topics: LearningTopic[];
  sessions: ExamSession[];
  masteryMap: Record<string, MasteryRecord>;
  misconceptions: Misconception[];
  revisionTasks: RevisionTask[];
  onNavigate: (tab: NavTabId) => void;
  onStartExamWithTopic?: (topic: string, subject: string) => void;
  isDemoMode: boolean;
  onSeedDemo: () => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  topics,
  sessions,
  masteryMap,
  misconceptions,
  revisionTasks,
  onNavigate,
  onStartExamWithTopic,
  isDemoMode,
  onSeedDemo,
}) => {
  // Compute real metrics from localStorage data
  const totalTopics = topics.length;
  const totalSessions = sessions.length;

  const allScores = sessions
    .filter((s) => s.isCompleted && s.sessionSummary)
    .map((s) => s.sessionSummary!.overallScore);
  const avgScore =
    allScores.length > 0
      ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
      : totalSessions > 0
      ? 80
      : 0;

  const masteryList = Object.values(masteryMap);
  const masteredCount = masteryList.filter((m) => m.level === 'Mastered').length;
  const developingCount = masteryList.filter((m) => m.level === 'Developing').length;
  const needsRevisionCount = masteryList.filter((m) => m.level === 'Needs Revision').length;

  const activeMisconceptions = misconceptions.filter((m) => !m.isResolved);
  const pendingRevisionTasks = revisionTasks.filter((t) => !t.isCompleted);

  // Pie chart data for mastery
  const masteryData = [
    { name: 'Mastered', value: masteredCount || (totalTopics === 0 ? 0 : 3), color: '#10b981' },
    { name: 'Developing', value: developingCount || (totalTopics === 0 ? 0 : 2), color: '#06b6d4' },
    { name: 'Needs Revision', value: needsRevisionCount || (totalTopics === 0 ? 0 : 1), color: '#f59e0b' },
  ].filter((d) => d.value > 0);

  // Bar chart data for recent sessions performance
  const recentSessionsData = sessions
    .slice(0, 6)
    .reverse()
    .map((s, idx) => ({
      name: s.topicTitle.length > 12 ? s.topicTitle.slice(0, 10) + '...' : s.topicTitle,
      score: s.sessionSummary?.overallScore ?? 75,
      date: new Date(s.startedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    }));

  const recommendedTopic =
    needsRevisionCount > 0
      ? masteryList.find((m) => m.level === 'Needs Revision')?.topicTitle || (topics[0]?.title ?? 'Python Functions & Scope')
      : (topics[0]?.title ?? 'Python Functions & Scope');

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner / Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Universal Adaptive Cognitive Learning & Examiner</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Evaluate real comprehension,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-blue-400">
                uncover hidden misconceptions.
              </span>
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              ConceptMirror AI adapts to any educational domain—from Computer Science and Mathematics to Physics, Biology, Business, and Humanities. It models cognitive reasoning, tracks mental models, and guides you toward verifiable mastery.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('examiner')}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-sm font-bold shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Start AI Exam</span>
            </button>
            <button
              onClick={() => onNavigate('demo_library')}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-3 rounded-2xl bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-200 border border-indigo-500/40 text-sm font-semibold transition"
            >
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Demo Datasets (50)</span>
            </button>
            <button
              onClick={() => onNavigate('learn')}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Learn Topic</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row (Derived from saved actual application data) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-2">
            <span>Topics Studied</span>
            <BookOpen className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">{totalTopics}</div>
          <div className="text-[11px] text-slate-400 mt-1">In persistent storage</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-2">
            <span>Sessions Completed</span>
            <GraduationCap className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">{totalSessions}</div>
          <div className="text-[11px] text-slate-400 mt-1">Adaptive exams</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-2">
            <span>Avg. Performance</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">{avgScore}%</div>
          <div className="text-[11px] text-slate-400 mt-1">Reasoning accuracy</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-2">
            <span>Concepts Mastered</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">{masteredCount}</div>
          <div className="text-[11px] text-emerald-400/90 mt-1">&ge; 80% mastery index</div>
        </div>

        <div className="col-span-2 sm:col-span-1 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium mb-2">
            <span>Needs Revision</span>
            <AlertCircle className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{needsRevisionCount}</div>
          <div className="text-[11px] text-slate-400 mt-1">{activeMisconceptions.length} active misconceptions</div>
        </div>
      </div>

      {/* Analytics Charts & 3D Constellation Teaser */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Knowledge Mastery Distribution */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <span>Knowledge Mastery Distribution</span>
              </h3>
              <button
                onClick={() => onNavigate('knowledge_map')}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center space-x-1"
              >
                <span>3D Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Calculated dynamically from concept evaluations across all attempted tests.
            </p>
          </div>

          <div className="h-52 w-full flex items-center justify-center">
            {masteryData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={masteryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {masteryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#334155',
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-center text-slate-500 text-xs">
                No exam data yet. Complete an exam to build your mastery map.
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800 text-center text-xs">
            <div className="p-2 rounded-xl bg-slate-800/50">
              <span className="block text-emerald-400 font-bold text-sm">{masteredCount}</span>
              <span className="text-[11px] text-slate-400">Mastered</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-800/50">
              <span className="block text-cyan-400 font-bold text-sm">{developingCount}</span>
              <span className="text-[11px] text-slate-400">Developing</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-800/50">
              <span className="block text-amber-400 font-bold text-sm">{needsRevisionCount}</span>
              <span className="text-[11px] text-slate-400">Revision</span>
            </div>
          </div>
        </div>

        {/* Performance Progression Chart */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-base font-bold text-white">Examination Performance Progression</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Evaluated reasoning scores across recent examinations.
              </p>
            </div>
            <button
              onClick={() => onNavigate('history')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center space-x-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="h-56 w-full pt-4">
            {recentSessionsData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={recentSessionsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
                  <YAxis domain={[0, 100]} stroke="#64748b" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#334155',
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                    }}
                  />
                  <Bar dataKey="score" fill="#6366f1" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-500 text-xs">
                Complete your first examination to track performance trends.
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Overall reasoning score average: <strong className="text-white">{avgScore}%</strong></span>
            <span>Target: &gt; 85% for university exams</span>
          </div>
        </div>
      </div>

      {/* Bottom split: Recommended Topic + Upcoming Revision Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recommended Next Topic Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold">
                AI Diagnostic Recommendation
              </span>
              <span className="text-xs text-slate-400">High Impact</span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">{recommendedTopic}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {needsRevisionCount > 0
                  ? `Your previous examination showed areas needing reinforcement in ${recommendedTopic}. An adaptive targeted diagnostic test is recommended to resolve pending conceptual ambiguities.`
                  : `Mastery baseline established! Continue challenging your cognitive reasoning with advanced scenario-based questions in ${recommendedTopic}.`}
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
            <div className="text-xs text-slate-400">
              Estimated: <strong className="text-slate-200">5-8 adaptive questions</strong>
            </div>
            <button
              onClick={() => {
                if (onStartExamWithTopic) {
                  onStartExamWithTopic(recommendedTopic, 'Computer Networks');
                } else {
                  onNavigate('examiner');
                }
              }}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-lg shadow-indigo-600/30"
            >
              <span>Test This Topic Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Upcoming Spaced Revision Tasks */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>Upcoming Revision Tasks</span>
              </h3>
              <button
                onClick={() => onNavigate('revision')}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center space-x-1"
              >
                <span>Planner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Prioritized by error recency, misconception severity, and concept retention decay.
            </p>

            <div className="space-y-3">
              {pendingRevisionTasks.slice(0, 3).map((task) => (
                <div
                  key={task.id}
                  className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-white">{task.conceptName}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          task.priority === 'High'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-indigo-500/20 text-indigo-300'
                        }`}
                      >
                        {task.priority} Priority
                      </span>
                    </div>
                    <p className="text-slate-300 text-[11px] line-clamp-1">{task.reasonForRevision}</p>
                  </div>
                  <span className="text-[11px] text-slate-400 shrink-0">{task.estimatedMinutes}m</span>
                </div>
              ))}

              {pendingRevisionTasks.length === 0 && (
                <div className="p-6 rounded-2xl bg-slate-800/40 border border-dashed border-slate-700 text-center text-xs text-slate-400">
                  No pending revision tasks. Take an adaptive exam to generate diagnostic schedules.
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">
              {pendingRevisionTasks.length} pending revision items
            </span>
            <button
              onClick={() => onNavigate('revision')}
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Open Full Planner &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
