import React from 'react';
import {
  BookOpen,
  GraduationCap,
  CheckSquare,
  FileEdit,
  Clock,
  Target,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Award,
  TrendingUp,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import {
  SubjectId,
  Topic,
  UserStudyState,
  TopicUnderstandingMetric,
  SubjectUnderstandingSummary,
} from '../../types';
import { ALL_SUBJECTS } from '../../data/curriculum/subjects';
import { ALL_TOPICS, getTopicById } from '../../data/curriculum/topics';
import { NavTabId } from '../layout/Navbar';

interface DashboardViewProps {
  studyState: UserStudyState;
  topicMetrics: Record<string, TopicUnderstandingMetric>;
  subjectSummaries: Record<SubjectId, SubjectUnderstandingSummary>;
  overallUnderstandingScore: number;
  overallCategory: string;
  onNavigate: (tab: NavTabId, options?: { subjectId?: SubjectId; topicId?: string }) => void;
  onSelectTopicToLearn: (topic: Topic) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  studyState,
  topicMetrics,
  subjectSummaries,
  overallUnderstandingScore,
  overallCategory,
  onNavigate,
  onSelectTopicToLearn,
}) => {
  // Format study time (e.g. 1h 45m or 32m)
  const formatTime = (totalSec: number) => {
    if (totalSec < 60) return `${totalSec}s`;
    const mins = Math.floor(totalSec / 60);
    if (mins < 60) return `${mins} mins`;
    const hrs = Math.floor(mins / 60);
    const rem = mins % 60;
    return `${hrs}h ${rem}m`;
  };

  // Find last active topic or default to first topic
  const lastTopic = studyState.lastActiveTopic
    ? getTopicById(studyState.lastActiveTopic.topicId)
    : ALL_TOPICS[0];

  const completedCount = Object.keys(studyState.completedTopics).length;
  const mcqAttemptsCount = studyState.mcqAttempts.length;
  const partBCount = studyState.partBSubmissions.length;

  // Calculate MCQ average accuracy
  const totalMcqQuestions = studyState.mcqAttempts.reduce((acc, a) => acc + a.totalQuestions, 0);
  const totalMcqScore = studyState.mcqAttempts.reduce((acc, a) => acc + a.score, 0);
  const avgMcqAccuracy = totalMcqQuestions > 0 ? Math.round((totalMcqScore / totalMcqQuestions) * 100) : 0;

  // Calculate Part B average marks out of 11
  const avgPartBMarks = partBCount > 0
    ? Math.round((studyState.partBSubmissions.reduce((acc, p) => acc + p.totalScore, 0) / partBCount) * 10) / 10
    : 0;

  // Identify strong topics and topics needing revision from metrics
  const allMetrics = Object.values(topicMetrics);
  const strongTopics = allMetrics.filter((m) => m.category === 'Strong Understanding').slice(0, 4);
  const revisionTopics = allMetrics
    .filter((m) => m.category === 'Needs Improvement' || (m.category === 'Developing Understanding' && m.compositeScore < 60))
    .slice(0, 4);

  // Combine recent activity (MCQs and Part B)
  const recentActivity = [
    ...studyState.mcqAttempts.map((a) => ({
      type: 'mcq' as const,
      id: a.id,
      title: a.title,
      date: a.timestamp,
      scoreText: `${a.score}/${a.totalQuestions} (${a.accuracy}%)`,
      timeSec: a.timeSpentSeconds,
    })),
    ...studyState.partBSubmissions.map((p) => ({
      type: 'partb' as const,
      id: p.id,
      title: `Part B: ${p.topicTitle}`,
      date: p.submittedAt,
      scoreText: `${p.totalScore}/11 marks`,
      timeSec: p.timeTakenSeconds,
    })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner / Welcome */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-blue-500/10 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>100% Offline Educational Platform</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Welcome to ConceptMirror AI
          </h1>
          <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
            Master 75 undergraduate topics across 5 engineering & general knowledge subjects.
            Evaluate your reasoning with 750 MCQs and the rule-based 11-Mark Part B Answer Analyser.
          </p>
        </div>
      </div>

      {/* Primary KPI Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Understanding Score */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Understanding Score</span>
            <Target className="w-4 h-4 text-violet-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-900">
              {overallUnderstandingScore}%
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-violet-50 text-violet-700 border border-violet-200">
              {overallCategory}
            </span>
          </div>
          <div className="text-[11px] text-slate-500">
            Weighted composite: 30% MCQ, 30% Coverage, 25% Part B
          </div>
        </div>

        {/* Metric 2: Completed Topics */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Curriculum Progress</span>
            <GraduationCap className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-900">
              {completedCount}
            </span>
            <span className="text-xs text-slate-400 font-medium">/ 75 Topics</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all"
              style={{ width: `${Math.round((completedCount / 75) * 100)}%` }}
            />
          </div>
        </div>

        {/* Metric 3: MCQ Accuracy */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>MCQ Performance</span>
            <CheckSquare className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-900">
              {avgMcqAccuracy}%
            </span>
            <span className="text-xs text-slate-400 font-medium">({mcqAttemptsCount} tests)</span>
          </div>
          <div className="text-[11px] text-slate-500">
            {totalMcqQuestions > 0 ? `${totalMcqScore}/${totalMcqQuestions} correct questions` : 'No attempts yet'}
          </div>
        </div>

        {/* Metric 4: Total Study Time */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Active Study Time</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-900">
              {formatTime(studyState.totalStudyTimeSeconds)}
            </span>
          </div>
          <div className="text-[11px] text-slate-500">
            Logged across learning, MCQs & Part B
          </div>
        </div>
      </div>

      {/* Continue Learning Callout */}
      {lastTopic && (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Continue Learning
              </div>
              <div className="text-base font-bold text-slate-900">
                {lastTopic.title}
              </div>
              <div className="text-xs text-slate-500">
                {lastTopic.unitTitle} &bull; Unit {lastTopic.unitNumber}
              </div>
            </div>
          </div>
          <button
            onClick={() => onSelectTopicToLearn(lastTopic)}
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs shadow-blue-600/30 shrink-0"
          >
            <span>Resume Topic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 5 Subjects Cards Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Curriculum Subjects (5)
          </h2>
          <button
            onClick={() => onNavigate('subjects')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Units</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALL_SUBJECTS.map((subject) => {
            const summary = subjectSummaries[subject.id];
            const completedInSub = ALL_TOPICS.filter(
              (t) => t.subjectId === subject.id && studyState.completedTopics[t.id]
            ).length;

            return (
              <div
                key={subject.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {subject.code}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      5 Units &bull; 15 Topics
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{subject.name}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {subject.tagline}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-600">
                    <span>Progress</span>
                    <span>{completedInSub} / 15 completed</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        backgroundColor: subject.accentColor,
                        width: `${Math.round((completedInSub / 15) * 100)}%`,
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => onNavigate('learn', { subjectId: subject.id })}
                      className="flex-1 py-1.5 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 transition-colors text-center cursor-pointer"
                    >
                      Learn
                    </button>
                    <button
                      onClick={() => onNavigate('mcq', { subjectId: subject.id })}
                      className="flex-1 py-1.5 px-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg text-xs font-bold text-blue-700 transition-colors text-center cursor-pointer"
                    >
                      MCQ
                    </button>
                    <button
                      onClick={() => onNavigate('partb', { subjectId: subject.id })}
                      className="flex-1 py-1.5 px-3 bg-violet-50 hover:bg-violet-100 border border-violet-200 rounded-lg text-xs font-bold text-violet-700 transition-colors text-center cursor-pointer"
                    >
                      Part B
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Analytics Split: Strong Topics vs Topics Needing Revision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strong Topics Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-sm">Strong Understanding</h3>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
              {strongTopics.length} Topics
            </span>
          </div>

          {strongTopics.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {strongTopics.map((item) => (
                <div key={item.topicId} className="py-2.5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">{item.topicTitle}</div>
                    <div className="text-[11px] text-slate-500">
                      MCQ: {item.mcqAverageAccuracy}% &bull; Part B: {item.partBAverageMarks}/11
                    </div>
                  </div>
                  <div className="text-xs font-extrabold text-emerald-600">
                    {item.compositeScore}%
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl">
              Complete MCQs and Part B questions with &gt;= 80% accuracy to earn Strong Understanding status.
            </div>
          )}
        </div>

        {/* Topics Needing Revision Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-slate-900 text-sm">Topics Needing Revision</h3>
            </div>
            <button
              onClick={() => onNavigate('revision')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              View All
            </button>
          </div>

          {revisionTopics.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {revisionTopics.map((item) => (
                <div key={item.topicId} className="py-2.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">{item.topicTitle}</div>
                    <div className="text-[11px] text-amber-600 font-medium">
                      Score: {item.compositeScore}% &bull; {item.category}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const t = getTopicById(item.topicId);
                      if (t) onSelectTopicToLearn(t);
                    }}
                    className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 rounded-lg text-xs font-bold shrink-0 transition-colors cursor-pointer"
                  >
                    Revise
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl">
              No flagged topics yet! As you practice, any mistakes or missing rubric concepts will appear here automatically.
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity Table (Actual recorded data, never fabricated) */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">Recent Activity</h3>
          <button
            onClick={() => onNavigate('history')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            View Full History
          </button>
        </div>

        {recentActivity.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase text-[10px]">
                  <th className="py-2 px-3">Type</th>
                  <th className="py-2 px-3">Title</th>
                  <th className="py-2 px-3">Result</th>
                  <th className="py-2 px-3">Time</th>
                  <th className="py-2 px-3 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentActivity.map((act) => (
                  <tr key={act.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-2.5 px-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          act.type === 'mcq'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-violet-50 text-violet-700 border border-violet-200'
                        }`}
                      >
                        {act.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-slate-800">{act.title}</td>
                    <td className="py-2.5 px-3 font-bold text-slate-900">{act.scoreText}</td>
                    <td className="py-2.5 px-3 text-slate-500">{formatTime(act.timeSec)}</td>
                    <td className="py-2.5 px-3 text-right text-slate-400">
                      {new Date(act.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-xs text-slate-500 bg-slate-50 rounded-xl space-y-1">
            <div className="font-bold text-slate-700">No activity recorded yet</div>
            <p>Start with a topic in the Learn tab or take your first MCQ Practice test.</p>
          </div>
        )}
      </div>
    </div>
  );
};
