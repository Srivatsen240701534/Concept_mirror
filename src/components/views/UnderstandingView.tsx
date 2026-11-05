// src/components/views/UnderstandingView.tsx
// Section 6: Student Understanding Analysis Engine View
// Transparent composite score: 30% MCQ accuracy + 30% Part B coverage + 25% Part B marks + 10% consistency + 5% fluency

import React, { useState, useMemo } from 'react';
import {
  Brain,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Award,
  Clock,
  ShieldCheck,
  ChevronRight,
  Activity,
  Layers,
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
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Good Understanding':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Developing Understanding':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Needs Improvement':
        return 'bg-rose-50 text-rose-800 border-rose-200';
      case 'Not Yet Evaluated':
      default:
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 mb-2">
              <Brain className="w-3.5 h-3.5 text-indigo-600" />
              <span>Section 6 · ConceptMirror Innovation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Student Understanding Analysis
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Transparent assessment synthesizing 5 orthogonal dimensions without fabricated data. Discover what you know with precision.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 text-center min-w-[200px] shadow-sm">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
              Overall Understanding
            </span>
            <div className="flex items-baseline justify-center gap-1.5 mt-1">
              <span className="text-4xl font-black text-white">{analysis.overallScore}</span>
              <span className="text-lg font-bold text-slate-400">/ 100</span>
            </div>
            <span className="mt-1.5 inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
              {analysis.overallCategory}
            </span>
          </div>
        </div>

        {/* 5-Dimension Formula Banner */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
            <span className="block font-bold text-slate-900 text-sm">30%</span>
            <span className="text-slate-500 font-medium">MCQ Accuracy</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
            <span className="block font-bold text-slate-900 text-sm">30%</span>
            <span className="text-slate-500 font-medium">Part B Coverage</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
            <span className="block font-bold text-slate-900 text-sm">25%</span>
            <span className="text-slate-500 font-medium">Part B Marks</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
            <span className="block font-bold text-slate-900 text-sm">10%</span>
            <span className="text-slate-500 font-medium">Consistency</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 col-span-2 sm:col-span-1">
            <span className="block font-bold text-slate-900 text-sm">5%</span>
            <span className="text-slate-500 font-medium">Fluency (Pacing)</span>
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
              className={`p-4 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-50/60 shadow-xs ring-1 ring-indigo-500'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase">{sub.code}</span>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                  {summary.evaluatedTopicsCount}/{summary.totalTopicsCount} Evaluated
                </span>
              </div>
              <div className="font-bold text-slate-900 text-sm truncate">{sub.name}</div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-2xl font-black text-slate-900">
                  {summary.overallScore > 0 ? `${summary.overallScore}%` : '—'}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getCategoryBadge(summary.category)}`}>
                  {summary.category === 'Not Yet Evaluated' ? 'Pending' : summary.category.replace(' Understanding', '')}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all 75 topics..."
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Categories ({ALL_TOPICS.length})
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
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{cat.replace(' Understanding', '')}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Topics Understanding Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Topics Understanding Analysis ({filteredTopics.length} of 75)
          </h2>
          <span className="text-xs text-slate-500">
            Click any row for detailed 5-dimension diagnostic
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Topic & Unit</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">MCQ Accuracy (30%)</th>
                <th className="py-3 px-4">Part B Coverage (30%)</th>
                <th className="py-3 px-4">Composite Score</th>
                <th className="py-3 px-4">Understanding Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTopics.map((topic) => {
                const metric = analysis.topicMetrics[topic.id];
                return (
                  <tr
                    key={topic.id}
                    onClick={() => setActiveModalTopic(metric)}
                    className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                  >
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      <div>{topic.title}</div>
                      <div className="text-[11px] font-normal text-slate-400">{topic.unitTitle}</div>
                    </td>

                    <td className="py-3 px-4">
                      <span className="font-bold text-slate-600 uppercase text-[10px] px-2 py-0.5 rounded bg-slate-100">
                        {topic.subjectId}
                      </span>
                    </td>

                    <td className="py-3 px-4">
                      {metric.mcqAttemptsCount > 0 ? (
                        <span className="font-bold text-slate-800">
                          {metric.mcqAverageAccuracy}% ({metric.mcqAttemptsCount} questions)
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      {metric.partBSubmissionsCount > 0 ? (
                        <span className="font-bold text-slate-800">
                          {metric.partBConceptCoverage}% ({metric.partBAverageMarks}/11m)
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-sm text-slate-900">
                          {metric.compositeScore > 0 ? `${metric.compositeScore}%` : '—'}
                        </span>
                        {metric.isProvisional && metric.compositeScore > 0 && (
                          <span
                            title="Provisional score: based on partial evaluation data."
                            className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800"
                          >
                            Provisional
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${getCategoryBadge(metric.category)}`}>
                        {metric.category}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1.5">
                        {onNavigateToTopic && (
                          <button
                            onClick={() => onNavigateToTopic(topic.subjectId, topic.unitId, topic.id)}
                            title="Study Topic Notes"
                            className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {onNavigateToMcq && (
                          <button
                            onClick={() => onNavigateToMcq(topic.subjectId, topic.id)}
                            title="Practice MCQs"
                            className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                          >
                            <Award className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {onNavigateToPartB && (
                          <button
                            onClick={() => onNavigateToPartB()}
                            title="Part B Question"
                            className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                          >
                            <Brain className="w-3.5 h-3.5" />
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
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-slate-200 shadow-xl space-y-5 animate-scaleUp">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase text-indigo-600">
                  {activeModalTopic.subjectId.toUpperCase()} Diagnostic
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                  {activeModalTopic.topicTitle}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalTopic(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-semibold block">Composite Score</span>
                <span className="text-3xl font-black text-slate-900">
                  {activeModalTopic.compositeScore}%
                </span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryBadge(activeModalTopic.category)}`}>
                {activeModalTopic.category}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-700 uppercase tracking-wider block">
                Component Breakdown
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-500 block">MCQ Accuracy (30% wt)</span>
                  <span className="font-bold text-slate-800 text-sm">{activeModalTopic.mcqAverageAccuracy}%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-500 block">Part B Coverage (30% wt)</span>
                  <span className="font-bold text-slate-800 text-sm">{activeModalTopic.partBConceptCoverage}%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-500 block">Part B Marks (25% wt)</span>
                  <span className="font-bold text-slate-800 text-sm">{activeModalTopic.partBAverageMarks}/11m</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-500 block">Consistency (10% wt)</span>
                  <span className="font-bold text-slate-800 text-sm">{activeModalTopic.consistencyScore}%</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 space-y-1">
              <span className="font-bold block flex items-center gap-1.5 text-indigo-900">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                Adaptive Recommendation
              </span>
              <p className="leading-relaxed">{activeModalTopic.recommendation}</p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setActiveModalTopic(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
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
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs"
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
