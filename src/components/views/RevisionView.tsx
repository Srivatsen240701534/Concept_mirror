// src/components/views/RevisionView.tsx
// Section 6 & 7: Revision Recommendations & Bookmarks View

import React, { useMemo } from 'react';
import {
  RotateCcw,
  Bookmark,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  Award,
  Brain,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SubjectId, UserStudyState } from '../../types';
import { ALL_TOPICS, getTopicById } from '../../data/curriculum/topics';
import { calculateAllUnderstanding } from '../../services/understandingEngine';

interface RevisionViewProps {
  studyState: UserStudyState;
  onNavigateToTopic: (subjectId: SubjectId, unitId: string, topicId: string) => void;
  onNavigateToMcq: (subjectId?: SubjectId, topicId?: string) => void;
  onNavigateToPartB: (questionId?: string) => void;
}

export const RevisionView: React.FC<RevisionViewProps> = ({
  studyState,
  onNavigateToTopic,
  onNavigateToMcq,
  onNavigateToPartB,
}) => {
  const analysis = useMemo(() => {
    return calculateAllUnderstanding(studyState.mcqAttempts, studyState.partBSubmissions);
  }, [studyState.mcqAttempts, studyState.partBSubmissions]);

  // Priority Revision Topics:
  // Topics flagged in MCQ attempts or with understanding category = Needs Improvement or Developing with score < 60
  const revisionTopics = useMemo(() => {
    const list: Array<{ topicId: string; reason: string; score?: number }> = [];
    const seen = new Set<string>();

    // From MCQ mistakes
    studyState.mcqAttempts.forEach((attempt) => {
      attempt.topicsNeedingRevision.forEach((tid) => {
        if (!seen.has(tid)) {
          seen.add(tid);
          list.push({ topicId: tid, reason: 'Incorrect responses in recent MCQ practice.' });
        }
      });
    });

    // From low composite understanding
    Object.values(analysis.topicMetrics).forEach((m) => {
      if (
        (m.category === 'Needs Improvement' || (m.category === 'Developing Understanding' && m.compositeScore < 60)) &&
        !seen.has(m.topicId)
      ) {
        seen.add(m.topicId);
        list.push({
          topicId: m.topicId,
          reason: `Understanding diagnostic is at ${m.compositeScore}% (${m.category}).`,
          score: m.compositeScore,
        });
      }
    });

    return list.map((item) => {
      const topic = getTopicById(item.topicId);
      return { ...item, topic };
    }).filter((item) => Boolean(item.topic));
  }, [studyState.mcqAttempts, analysis.topicMetrics]);

  // Bookmarked Topics
  const bookmarkedTopics = useMemo(() => {
    return studyState.bookmarkedTopics
      .map((tid) => getTopicById(tid))
      .filter((t): t is NonNullable<typeof t> => Boolean(t));
  }, [studyState.bookmarkedTopics]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 mb-2">
          <RotateCcw className="w-3.5 h-3.5 text-amber-600" />
          <span>Formative Spaced Revision</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Adaptive Revision & Bookmarks
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Targets actual weaknesses identified in your MCQ and Part B evaluations. No arbitrary scheduling or synthetic progress.
        </p>
      </div>

      {/* Grid: Needing Revision vs Bookmarked */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recommended Revision Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Recommended Revision ({revisionTopics.length})</span>
            </div>
            <span className="text-xs text-slate-500 font-medium">Based on test data</span>
          </div>

          {revisionTopics.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-500 text-xs space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
              <p className="font-bold text-slate-700">No Revision Alerts Active</p>
              <p>Great job! Either you haven't made errors in recent practice, or all attempted topics have healthy understanding scores.</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {revisionTopics.map(({ topic, reason, score }) => {
                if (!topic) return null;
                return (
                  <div
                    key={topic.id}
                    className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/40 hover:bg-amber-50 transition-colors space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-500">
                          {topic.subjectId.toUpperCase()} · {topic.unitTitle}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm">{topic.title}</h4>
                      </div>
                      {score !== undefined && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-black bg-amber-100 text-amber-900 shrink-0">
                          {score}%
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-amber-900/80">{reason}</p>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-amber-200/50">
                      <button
                        onClick={() => onNavigateToTopic(topic.subjectId, topic.unitId, topic.id)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors flex items-center gap-1"
                      >
                        <BookOpen className="w-3 h-3 text-slate-500" />
                        Notes
                      </button>
                      <button
                        onClick={() => onNavigateToMcq(topic.subjectId, topic.id)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 shadow-2xs"
                      >
                        <Award className="w-3 h-3" />
                        Practice
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Bookmarked Topics Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm uppercase tracking-wider">
              <Bookmark className="w-4 h-4 text-indigo-600" />
              <span>Bookmarked Topics ({bookmarkedTopics.length})</span>
            </div>
            <span className="text-xs text-slate-500 font-medium">Quick reference</span>
          </div>

          {bookmarkedTopics.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-500 text-xs space-y-2">
              <Bookmark className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="font-bold text-slate-700">No Bookmarks Saved Yet</p>
              <p>While studying any topic in the Learn section, click the Bookmark icon to pin it here for rapid access.</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {bookmarkedTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-500">
                        {topic.subjectId.toUpperCase()} · {topic.unitTitle}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm">{topic.title}</h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 line-clamp-1">
                    {topic.objectives[0] || 'Core curriculum topic'}
                  </p>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => onNavigateToTopic(topic.subjectId, topic.unitId, topic.id)}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <BookOpen className="w-3 h-3" />
                      Read Study Notes
                    </button>
                    <button
                      onClick={() => onNavigateToMcq(topic.subjectId, topic.id)}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors flex items-center gap-1"
                    >
                      <Award className="w-3 h-3 text-slate-500" />
                      10 MCQs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
