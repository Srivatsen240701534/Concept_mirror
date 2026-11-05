// src/components/views/UnderstandingView.tsx
// ConceptMirror AI - Transparent Student Understanding Engine Visualisation
// Transparent composite formula: 30% MCQ accuracy + 30% Part B coverage + 25% Part B marks + 10% consistency + 5% fluency

import React, { useState, useMemo } from 'react';
import {
  Brain,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Award,
  Clock,
  ShieldCheck,
  Activity,
  Layers,
  HelpCircle,
} from 'lucide-react';
import {
  SubjectId,
  TopicUnderstandingMetric,
  UnderstandingCategory,
  UserStudyState,
} from '../../types';
import { ALL_SUBJECTS } from '../../data/curriculum/subjects';
import { ALL_TOPICS } from '../../data/curriculum/topics';
import { calculateAllUnderstanding } from '../../services/understandingEngine';

interface UnderstandingViewProps {
  studyState: UserStudyState;
  onNavigateToTopic?: (subjectId: SubjectId, unitId: string, topicId: string) => void;
  onNavigateToMcq?: (subjectId?: SubjectId, topicId?: string) => void;
  onNavigateToPartB?: (questionId?: string) => void;
}

export const UnderstandingView: React.FC<UnderstandingViewProps> = ({
  studyState,
  onNavigateToTopic,
  onNavigateToMcq,
  onNavigateToPartB,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<UnderstandingCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalTopic, setActiveModalTopic] = useState<TopicUnderstandingMetric | null>(null);

  // Calculate comprehensive metrics
  const analysis = useMemo(() => {
    return calculateAllUnderstanding(studyState.mcqAttempts, studyState.partBSubmissions);
  }, [studyState.mcqAttempts, studyState.partBSubmissions]);

  // Filter topics
  const filteredTopics = useMemo(() => {
    return ALL_TOPICS.filter((t) => {
      const metric = analysis.topicMetrics[t.id];
      if (selectedSubject !== 'all' && t.subjectId !== selectedSubject) return false;
      if (selectedCategory !== 'all' && metric?.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          t.title.toLowerCase().includes(q) ||
          t.unitTitle.toLowerCase().includes(q) ||
          t.subjectId.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedSubject, selectedCategory, searchQuery, analysis.topicMetrics]);

  const getCategoryBadge = (cat: UnderstandingCategory) => {
    switch (cat) {
      case 'Strong Understanding':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50';
      case 'Good Understanding':
        return 'bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/50';
      case 'Developing Understanding':
        return 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/50';
      case 'Needs Improvement':
        return 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/50';
      case 'Not Yet Evaluated':
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs relative overflow-hidden transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 mb-2">
              <Brain className="w-3.5 h-3.5 text-blue-500" />
              <span>Diagnostic Learning Analytics</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Student Understanding Analysis
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Transparent multi-factor assessment synthesizing 5 orthogonal academic dimensions without fabricated data. Discover what you know with precision.
            </p>
          </div>

          <div className="bg-slate-950 text-white rounded-3xl p-6 border border-slate-800 text-center min-w-[220px] shadow-lg">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
              Overall Understanding
            </span>
            <div className="flex items-baseline justify-center gap-1.5 mt-1">
              <span className="text-4xl sm:text-5xl font-black text-white tabular-nums">
                {analysis.overallScore}
              </span>
              <span className="text-lg font-bold text-slate-400">/ 100</span>
            </div>
            <span className="mt-2 inline-block text-xs font-bold px-3 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
              {analysis.overallCategory}
            </span>
          </div>
        </div>

        {/* 5-Dimension Transparent Formula Breakdown */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <span className="block font-black text-blue-600 dark:text-blue-400 text-base tabular-nums">
              30%
            </span>
            <span className="text-slate-700 dark:text-slate-300 font-bold block mt-0.5">MCQ Accuracy</span>
            <span className="text-[10px] text-slate-400">Objective recall</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <span className="block font-black text-violet-600 dark:text-violet-400 text-base tabular-nums">
              30%
            </span>
            <span className="text-slate-700 dark:text-slate-300 font-bold block mt-0.5">Part B Coverage</span>
            <span className="text-[10px] text-slate-400">Keyword breadth</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <span className="block font-black text-emerald-600 dark:text-emerald-400 text-base tabular-nums">
              25%
            </span>
            <span className="text-slate-700 dark:text-slate-300 font-bold block mt-0.5">Part B Marks</span>
            <span className="text-[10px] text-slate-400">Rubric quality (/11)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <span className="block font-black text-amber-600 dark:text-amber-400 text-base tabular-nums">
              10%
            </span>
            <span className="text-slate-700 dark:text-slate-300 font-bold block mt-0.5">Consistency</span>
            <span className="text-[10px] text-slate-400">Stability variance</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 col-span-2 sm:col-span-1">
            <span className="block font-black text-cyan-600 dark:text-cyan-400 text-base tabular-nums">
              5%
            </span>
            <span className="text-slate-700 dark:text-slate-300 font-bold block mt-0.5">Response Fluency</span>
            <span className="text-[10px] text-slate-400">Optimal pace</span>
          </div>
        </div>
      </div>

      {/* Subject Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {ALL_SUBJECTS.map((sub) => {
          const summary = analysis.subjectSummaries[sub.id];
          const isSelected = selectedSubject === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => setSelectedSubject(isSelected ? 'all' : sub.id)}
              className={`p-4 rounded-3xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 shadow-xs ring-2 ring-blue-500/20'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">{sub.code}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {summary.evaluatedTopicsCount}/{summary.totalTopicsCount}
                </span>
              </div>
              <div className="font-bold text-slate-900 dark:text-white text-xs truncate">{sub.name}</div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                  {summary.overallScore > 0 ? `${summary.overallScore}%` : '—'}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getCategoryBadge(
                    summary.category
                  )}`}
                >
                  {summary.category === 'Not Yet Evaluated'
                    ? 'Pending'
                    : summary.category.replace(' Understanding', '')}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter 75 topics by name or concept..."
            className="w-full pl-9 pr-4 py-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All ({ALL_TOPICS.length})
          </button>
          {(
            [
              'Strong Understanding',
              'Good Understanding',
              'Developing Understanding',
              'Needs Improvement',
              'Not Yet Evaluated',
            ] as UnderstandingCategory[]
          ).map((cat) => {
            const count = ALL_TOPICS.filter((t) => analysis.topicMetrics[t.id]?.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{cat.replace(' Understanding', '')}</span>
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

      {/* Topics Understanding Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden transition-colors">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h2 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
            Topics Understanding Analysis ({filteredTopics.length} of 75)
          </h2>
          <span className="text-xs text-slate-400">Click any row for 5-dimension diagnostic</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4">Topic & Unit</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">MCQ Accuracy (30%)</th>
                <th className="py-3 px-4">Part B Coverage (30%)</th>
                <th className="py-3 px-4">Composite Score</th>
                <th className="py-3 px-4">Understanding Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredTopics.map((topic) => {
                const metric = analysis.topicMetrics[topic.id];
                return (
                  <tr
                    key={topic.id}
                    onClick={() => setActiveModalTopic(metric)}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                      <div>{topic.title}</div>
                      <div className="text-[11px] font-normal text-slate-400">{topic.unitTitle}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="font-bold text-slate-600 dark:text-slate-300 uppercase text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800">
                        {topic.subjectId}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      {metric.mcqAttemptsCount > 0 ? (
                        <span className="font-bold text-slate-800 dark:text-slate-200 tabular-nums">
                          {metric.mcqAverageAccuracy}% ({metric.mcqAttemptsCount} Qs)
                        </span>
                      ) : (
                        <span className="text-slate-400">&mdash;</span>
                      )}
                    </td>

                    <td className="py-3.5 px-4">
                      {metric.partBSubmissionsCount > 0 ? (
                        <span className="font-bold text-slate-800 dark:text-slate-200 tabular-nums">
                          {metric.partBConceptCoverage}% ({metric.partBAverageMarks}/11m)
                        </span>
                      ) : (
                        <span className="text-slate-400">&mdash;</span>
                      )}
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-sm text-slate-900 dark:text-white tabular-nums">
                          {metric.compositeScore > 0 ? `${metric.compositeScore}%` : '—'}
                        </span>
                        {metric.isProvisional && metric.compositeScore > 0 && (
                          <span
                            title="Provisional score: partial evaluation data."
                            className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300"
                          >
                            Provisional
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${getCategoryBadge(
                          metric.category
                        )}`}
                      >
                        {metric.category}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1.5">
                        {onNavigateToTopic && (
                          <button
                            onClick={() => onNavigateToTopic(topic.subjectId, topic.unitId, topic.id)}
                            title="Study Topic Notes"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {onNavigateToMcq && (
                          <button
                            onClick={() => onNavigateToMcq(topic.subjectId, topic.id)}
                            title="Practice MCQs"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                          >
                            <Award className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Diagnostic Topic Modal */}
      {activeModalTopic && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-5 animate-scaleUp">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400">
                  {activeModalTopic.subjectId.toUpperCase()} Diagnostic
                </span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                  {activeModalTopic.topicTitle}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalTopic(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-lg cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-semibold block">Composite Score</span>
                <span className="text-3xl font-black text-slate-900 dark:text-white tabular-nums">
                  {activeModalTopic.compositeScore}%
                </span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryBadge(
                  activeModalTopic.category
                )}`}
              >
                {activeModalTopic.category}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                Component Breakdown
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-400 block text-[11px]">MCQ Accuracy (30% wt)</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-sm tabular-nums">
                    {activeModalTopic.mcqAverageAccuracy}%
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-400 block text-[11px]">Part B Coverage (30% wt)</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-sm tabular-nums">
                    {activeModalTopic.partBConceptCoverage}%
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-400 block text-[11px]">Part B Marks (25% wt)</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-sm tabular-nums">
                    {activeModalTopic.partBAverageMarks}/11m
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-400 block text-[11px]">Consistency (10% wt)</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-sm tabular-nums">
                    {activeModalTopic.consistencyScore}%
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-800/40 text-xs text-indigo-950 dark:text-indigo-200 space-y-1">
              <span className="font-bold block flex items-center gap-1.5 text-indigo-900 dark:text-indigo-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                Adaptive Learning Recommendation
              </span>
              <p className="leading-relaxed">{activeModalTopic.recommendation}</p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setActiveModalTopic(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Close
              </button>
              {onNavigateToTopic && (
                <button
                  onClick={() => {
                    const tid = activeModalTopic.topicId;
                    const subId = activeModalTopic.subjectId;
                    const uId = activeModalTopic.unitId;
                    setActiveModalTopic(null);
                    onNavigateToTopic(subId, uId, tid);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 cursor-pointer"
                >
                  Study This Topic
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
