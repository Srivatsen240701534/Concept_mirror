import React, { useState } from 'react';
import {
  History,
  Download,
  Printer,
  Calendar,
  Filter,
  Eye,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  BookOpen,
  GraduationCap,
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { ExamSession, LearningTopic } from '../../types';
import { downloadCSV } from '../../utils/storage';

interface LearningHistoryViewProps {
  sessions: ExamSession[];
  topics: LearningTopic[];
  onOpenSession: (session: ExamSession) => void;
}

export const LearningHistoryView: React.FC<LearningHistoryViewProps> = ({
  sessions,
  topics,
  onOpenSession,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedInspectSession, setSelectedInspectSession] = useState<ExamSession | null>(null);

  const subjects = Array.from(new Set(sessions.map((s) => s.subject)));

  const filteredSessions = sessions.filter((s) => {
    if (selectedSubject !== 'all' && s.subject !== selectedSubject) return false;
    return true;
  });

  // Chart data: chronological performance
  const chartData = [...filteredSessions]
    .reverse()
    .map((s, idx) => ({
      name: `Session ${idx + 1}`,
      topic: s.topicTitle,
      score: s.sessionSummary?.overallScore ?? 75,
      date: new Date(s.startedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    }));

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
            <History className="w-3.5 h-3.5" />
            <span>Learning History & Longitudinal Analytics</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Examination Log & Mastery Progression
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Reopen previous diagnostic transcripts, monitor score stability, and export compliance reports.
          </p>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => window.print()}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400" />
            <span>Print Report</span>
          </button>
          <button
            onClick={() => downloadCSV()}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-lg shadow-indigo-600/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Longitudinal Performance Trend Chart */}
      {chartData.length > 0 && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <h3 className="text-base font-bold text-white">Score Trajectory Over Time</h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
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
                  formatter={(value: any, name: any, item: any) => [
                    `${value}%`,
                    item.payload.topic,
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#38bdf8"
                  strokeWidth={3}
                  dot={{ fill: '#6366f1', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Filter Row */}
      <div className="flex items-center space-x-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs">
        <Filter className="w-4 h-4 text-slate-400" />
        <span className="font-semibold text-slate-300">Filter by Subject:</span>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-indigo-500"
        >
          <option value="all">All Subjects ({sessions.length})</option>
          {subjects.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>

      {/* Sessions History Table / List */}
      <div className="space-y-3">
        {filteredSessions.map((session) => {
          const score = session.sessionSummary?.overallScore ?? 75;
          const dateStr = new Date(session.startedAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });
          return (
            <div
              key={session.id}
              className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold">
                    {session.subject}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-[10px]">
                    {session.difficulty}
                  </span>
                  {session.isDemo && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                      DEMO DATA
                    </span>
                  )}
                  <span className="text-[11px] text-slate-500">{dateStr}</span>
                </div>

                <h3 className="text-base font-bold text-white">{session.topicTitle}</h3>

                <p className="text-xs text-slate-400">
                  {session.answers.length} questions attempted &bull;{' '}
                  {session.answers.filter((a) => a.evaluation.verdict === 'correct').length} correct &bull;{' '}
                  {session.answers.filter((a) => a.evaluation.verdict === 'misconception_detected').length}{' '}
                  misconceptions identified
                </p>
              </div>

              <div className="flex items-center space-x-4 self-end sm:self-auto">
                <div className="text-right">
                  <span className="text-2xl font-black text-white">{score}%</span>
                  <span className="text-[10px] text-slate-400 block font-semibold">OVERALL SCORE</span>
                </div>

                <button
                  onClick={() => onOpenSession(session)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center space-x-1.5 border border-slate-700"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Inspect Diagnostic</span>
                </button>
              </div>
            </div>
          );
        })}

        {filteredSessions.length === 0 && (
          <div className="p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center text-xs text-slate-400">
            No examination history recorded in this subject.
          </div>
        )}
      </div>
    </div>
  );
};
