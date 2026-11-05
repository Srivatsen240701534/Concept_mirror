// src/components/views/RevisionView.tsx
// ConceptMirror AI - Adaptive Revision Recommendations & Saved Bookmarks View

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

  // Priority Revision Topics
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
        (m.category === 'Needs Improvement' ||
          (m.category === 'Developing Understanding' && m.compositeScore < 60)) &&
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

    return list
      .map((item) => {
        const topic = getTopicById(item.topicId);
        return { ...item, topic };
      })
      .filter((item) => Boolean(item.topic));
  }, [studyState.mcqAttempts, analysis.topicMetrics]);

  // Bookmarked Topics
  const bookmarkedTopics = useMemo(() => {
    return studyState.bookmarkedTopics
      .map((tid) => getTopicById(tid))
      .filter((t): t is NonNullable<typeof t> => Boolean(t));
  }, [studyState.bookmarkedTopics]);

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50 mb-2">
          <RotateCcw className="w-3.5 h-3.5 text-amber-500" />
          <span>Formative Spaced Revision</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Adaptive Revision & Bookmarks
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
          Targets actual weaknesses identified in your MCQ and Part B evaluations. No arbitrary scheduling or synthetic progress.
        </p>
      </div>

      {/* Grid: Needing Revision vs Bookmarked */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recommended Revision Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Recommended Revision ({revisionTopics.length})</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">Based on test data</span>
          </div>

          {revisionTopics.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
              <p className="font-bold text-slate-700 dark:text-slate-200">No Revision Alerts Active</p>
              <p className="leading-relaxed">
                Great job! Either you haven't made errors in recent practice, or all attempted topics have healthy understanding scores.
              </p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {revisionTopics.map(({ topic, reason, score }) => {
                if (!topic) return null;
                return (
                  <div
                    key={topic.id}
                    className="p-4 rounded-2xl border border-amber-200/80 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/20 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400">
                          {topic.subjectId.toUpperCase()} &bull; {topic.unitTitle}
                        </span>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">
                          {topic.title}
                        </h4>
                      </div>
                      {score !== undefined && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-black bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 shrink-0 tabular-nums">
                          {score}%
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
                      {reason}
                    </p>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-amber-200/50 dark:border-amber-800/40">
                      <button
                        onClick={() => onNavigateToTopic(topic.subjectId, topic.unitId, topic.id)}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        <span>Study Notes</span>
                      </button>
                      <button
                        onClick={() => onNavigateToMcq(topic.subjectId, topic.id)}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Practice MCQs</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Bookmarked Topics Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Bookmarked Topics ({bookmarkedTopics.length})</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">Quick reference</span>
          </div>

          {bookmarkedTopics.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs space-y-2">
              <Bookmark className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto" />
              <p className="font-bold text-slate-700 dark:text-slate-200">No Bookmarks Saved Yet</p>
              <p className="leading-relaxed">
                While studying any topic in the Learn section, click the Bookmark icon to pin it here for rapid access.
              </p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {bookmarkedTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400">
                        {topic.subjectId.toUpperCase()} &bull; {topic.unitTitle}
                      </span>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">
                        {topic.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {topic.objectives[0] || 'Core curriculum topic'}
                  </p>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => onNavigateToTopic(topic.subjectId, topic.unitId, topic.id)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Notes</span>
                    </button>
                    <button
                      onClick={() => onNavigateToMcq(topic.subjectId, topic.id)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5 text-slate-400" />
                      <span>10 MCQs</span>
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
