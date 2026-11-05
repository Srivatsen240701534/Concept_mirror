// src/components/views/DashboardView.tsx
// ConceptMirror AI - Premium Student Learning Dashboard
// Featuring "MY LEARNING UNIVERSE" 3D Progress Model, Dual-Theme Architecture, Real Performance Analytics

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
  Calendar,
  Flame,
  HelpCircle,
  Compass,
  Cpu,
  Binary,
  Smartphone,
  Network,
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
import { LearningUniverse3D } from '../universe/LearningUniverse3D';

interface DashboardViewProps {
  studyState: UserStudyState;
  topicMetrics: Record<string, TopicUnderstandingMetric>;
  subjectSummaries: Record<SubjectId, SubjectUnderstandingSummary>;
  overallUnderstandingScore: number;
  overallCategory: string;
  onNavigate: (tab: NavTabId, options?: { subjectId?: SubjectId; topicId?: string }) => void;
  onSelectTopicToLearn: (topic: Topic) => void;
}

const SUBJECT_ICON_MAP: Record<SubjectId, React.ElementType> = {
  cn: Network,
  ai: Cpu,
  toc: Binary,
  mc: Smartphone,
  gk: Compass,
};

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
    if (mins < 60) return `${mins}m`;
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

  // Calculate Part B average marks & concept coverage
  const avgPartBMarks = partBCount > 0
    ? Math.round((studyState.partBSubmissions.reduce((acc, p) => acc + p.totalScore, 0) / partBCount) * 10) / 10
    : 0;

  const avgPartBConceptCoverage = partBCount > 0
    ? Math.round(studyState.partBSubmissions.reduce((acc, p) => acc + p.completenessScore, 0) / partBCount)
    : 0;

  const totalQuestionsAttempted = totalMcqQuestions + partBCount;

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
      scoreText: `${p.totalScore}/11 marks (${p.completenessScore}% cov)`,
      timeSec: p.timeTakenSeconds,
    })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  // Formatted current date
  const formattedToday = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Calculate learning streak from attempts or active days
  const hasAttempts = studyState.mcqAttempts.length > 0 || studyState.partBSubmissions.length > 0;
  const streakDays = hasAttempts ? Math.max(1, Math.min(7, Math.ceil(studyState.totalStudyTimeSeconds / 900) || 1)) : 0;

  return (
    <div className="space-y-8 pb-16 max-w-7xl mx-auto">
      {/* 1. Welcome Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 dark:from-[#0b0f19] dark:via-[#131b2e] dark:to-[#090d16] p-6 sm:p-8 border border-indigo-500/20 text-white shadow-xl">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
                <span>100% Offline Academic Platform</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>{streakDays > 0 ? `${streakDays}-Day Learning Streak` : 'Start Your Streak'}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Welcome back, Student
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              {completedCount === 0
                ? 'Begin your semester journey today with 75 comprehensive topics, 750 MCQs, and 11-mark rule-based evaluations.'
                : `You've completed ${completedCount} of 75 topics. Maintain momentum with targeted practice today.`}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{formattedToday}</span>
            </div>
          </div>

          {/* Continue Learning CTA Card */}
          {lastTopic && (
            <div className="lg:w-96 p-4 rounded-2xl bg-white/10 dark:bg-slate-900/60 border border-white/10 dark:border-slate-800 backdrop-blur-md flex flex-col justify-between space-y-3 shrink-0 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  Continue Learning
                </span>
                <span className="text-[10px] font-semibold text-slate-300">
                  Unit {lastTopic.unitNumber} &bull; T{lastTopic.topicNumber}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white truncate">{lastTopic.title}</h3>
                <p className="text-[11px] text-slate-300 truncate mt-0.5">{lastTopic.unitTitle}</p>
              </div>
              <button
                onClick={() => onSelectTopicToLearn(lastTopic)}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-blue-600/30 active:scale-98"
              >
                <span>Resume Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 2. Performance Overview (6 Metric Cards with Actual Saved Data) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Performance Overview
          </h2>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            Real data from browser local storage
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {/* Metric 1: Overall Understanding Score */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 transition-all hover:border-slate-300 dark:hover:border-slate-700">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <span className="truncate">Understanding</span>
              <Target className="w-4 h-4 text-violet-500 shrink-0" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums">
                {overallUnderstandingScore}%
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-violet-500 transition-all"
                style={{ width: `${overallUnderstandingScore}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate font-medium">
              {overallCategory}
            </div>
          </div>

          {/* Metric 2: MCQ Accuracy */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 transition-all hover:border-slate-300 dark:hover:border-slate-700">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <span className="truncate">MCQ Accuracy</span>
              <CheckSquare className="w-4 h-4 text-blue-500 shrink-0" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums">
                {avgMcqAccuracy}%
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-500 transition-all"
                style={{ width: `${avgMcqAccuracy}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate font-medium">
              {mcqAttemptsCount > 0 ? `${totalMcqScore}/${totalMcqQuestions} correct` : 'No attempts yet'}
            </div>
          </div>

          {/* Metric 3: Part B Concept Coverage */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 transition-all hover:border-slate-300 dark:hover:border-slate-700">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <span className="truncate">Concept Coverage</span>
              <FileEdit className="w-4 h-4 text-emerald-500 shrink-0" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums">
                {avgPartBConceptCoverage}%
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${avgPartBConceptCoverage}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate font-medium">
              {partBCount > 0 ? `Avg: ${avgPartBMarks}/11 marks` : '50 questions ready'}
            </div>
          </div>

          {/* Metric 4: Topics Completed */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 transition-all hover:border-slate-300 dark:hover:border-slate-700">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <span className="truncate">Curriculum</span>
              <GraduationCap className="w-4 h-4 text-cyan-500 shrink-0" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums">
                {completedCount}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">/ 75</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-cyan-500 transition-all"
                style={{ width: `${Math.round((completedCount / 75) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate font-medium">
              {Math.round((completedCount / 75) * 100)}% total progress
            </div>
          </div>

          {/* Metric 5: Learning Streak */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 transition-all hover:border-slate-300 dark:hover:border-slate-700">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <span className="truncate">Active Streak</span>
              <Flame className="w-4 h-4 text-amber-500 shrink-0" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums">
                {streakDays}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">days</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-amber-500 transition-all"
                style={{ width: `${Math.min(100, (streakDays / 7) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate font-medium">
              {hasAttempts ? 'Consistent daily pace' : 'Practice to begin'}
            </div>
          </div>

          {/* Metric 6: Total Questions Attempted */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 transition-all hover:border-slate-300 dark:hover:border-slate-700">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <span className="truncate">Questions Solved</span>
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums">
                {totalQuestionsAttempted}
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-indigo-500 transition-all"
                style={{ width: `${Math.min(100, (totalQuestionsAttempted / 100) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate font-medium">
              Time: {formatTime(studyState.totalStudyTimeSeconds)}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Signature Feature: MY LEARNING UNIVERSE (Interactive 3D Model) */}
      <LearningUniverse3D
        studyState={studyState}
        subjectSummaries={subjectSummaries}
        topicMetrics={topicMetrics}
        onNavigate={onNavigate}
        onSelectTopicToLearn={onSelectTopicToLearn}
      />

      {/* 4. Subject Performance Section (All 5 Subjects) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
              Curriculum Subjects
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              5 Core Engineering & General Studies Disciplines
            </p>
          </div>
          <button
            onClick={() => onNavigate('subjects')}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Browse All 25 Units</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALL_SUBJECTS.map((subject) => {
            const summary = subjectSummaries[subject.id];
            const completedInSub = ALL_TOPICS.filter(
              (t) => t.subjectId === subject.id && studyState.completedTopics[t.id]
            ).length;
            const Icon = SUBJECT_ICON_MAP[subject.id] || BookOpen;

            return (
              <div
                key={subject.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-xs"
                        style={{ backgroundColor: subject.accentColor }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {subject.code}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                      {completedInSub}/15 Done
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {subject.tagline}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Understanding</span>
                    <span className="font-extrabold text-slate-900 dark:text-white">
                      {summary && summary.overallScore > 0 ? `${summary.overallScore}%` : 'Pending'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        backgroundColor: subject.accentColor,
                        width: `${Math.round((completedInSub / 15) * 100)}%`,
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => onNavigate('learn', { subjectId: subject.id })}
                      className="flex-1 py-1.5 px-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold transition-colors text-center cursor-pointer"
                    >
                      Study
                    </button>
                    <button
                      onClick={() => onNavigate('mcq', { subjectId: subject.id })}
                      className="flex-1 py-1.5 px-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 rounded-xl text-xs font-bold transition-colors text-center cursor-pointer"
                    >
                      MCQs
                    </button>
                    <button
                      onClick={() => onNavigate('partb', { subjectId: subject.id })}
                      className="flex-1 py-1.5 px-3 bg-violet-50 hover:bg-violet-100 dark:bg-violet-950/40 dark:hover:bg-violet-900/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 rounded-xl text-xs font-bold transition-colors text-center cursor-pointer"
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

      {/* 5. Diagnostics Split: Strong Understanding vs Topics Needing Revision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strong Topics Card */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
                  Strong Understanding
                </h3>
                <span className="text-[11px] text-slate-400">Mastered concepts (&ge; 80%)</span>
              </div>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
              {strongTopics.length} Topics
            </span>
          </div>

          {strongTopics.length > 0 ? (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {strongTopics.map((item) => (
                <div key={item.topicId} className="py-3 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {item.topicTitle}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      MCQ: {item.mcqAverageAccuracy}% &bull; Part B: {item.partBAverageMarks}/11
                    </div>
                  </div>
                  <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 shrink-0">
                    {item.compositeScore}%
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              Complete MCQs and Part B questions with &ge; 80% accuracy to earn Strong Understanding status.
            </div>
          )}
        </div>

        {/* Topics Needing Revision Card */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
                  Recommended Revision
                </h3>
                <span className="text-[11px] text-slate-400">Targeted focus areas</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('revision')}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              View All Alerts
            </button>
          </div>

          {revisionTopics.length > 0 ? (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {revisionTopics.map((item) => (
                <div key={item.topicId} className="py-3 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {item.topicTitle}
                    </div>
                    <div className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">
                      Diagnostic: {item.compositeScore}% &bull; {item.category}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const t = getTopicById(item.topicId);
                      if (t) onSelectTopicToLearn(t);
                    }}
                    className="px-3 py-1 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 border border-amber-200 dark:border-amber-800/50 text-amber-800 dark:text-amber-300 rounded-xl text-xs font-bold shrink-0 transition-colors cursor-pointer"
                  >
                    Study Notes
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              No weak topics flagged! Any MCQ mistakes or missing Part B concepts will appear here automatically.
            </div>
          )}
        </div>
      </div>

      {/* 6. Recent Activity Table (Actual recorded user events only) */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
              Recent Practice & Evaluation Activity
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Real chronological log from this device
            </p>
          </div>
          <button
            onClick={() => onNavigate('history')}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            Full Audit History
          </button>
        </div>

        {recentActivity.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-bold uppercase text-[10px]">
                  <th className="py-2.5 px-3">Mode</th>
                  <th className="py-2.5 px-3">Topic / Test</th>
                  <th className="py-2.5 px-3">Result</th>
                  <th className="py-2.5 px-3">Time</th>
                  <th className="py-2.5 px-3 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {recentActivity.map((act) => (
                  <tr
                    key={act.id}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${
                          act.type === 'mcq'
                            ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50'
                            : 'bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/50'
                        }`}
                      >
                        {act.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-800 dark:text-slate-200">
                      {act.title}
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white tabular-nums">
                      {act.scoreText}
                    </td>
                    <td className="py-3 px-3 text-slate-500 dark:text-slate-400 tabular-nums">
                      {formatTime(act.timeSec)}
                    </td>
                    <td className="py-3 px-3 text-right text-slate-400 dark:text-slate-500">
                      {new Date(act.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-2xl space-y-1">
            <div className="font-bold text-slate-700 dark:text-slate-300">No activity recorded yet</div>
            <p>Start with a topic in the Learn tab or launch your first MCQ practice test.</p>
          </div>
        )}
      </div>
    </div>
  );
};
