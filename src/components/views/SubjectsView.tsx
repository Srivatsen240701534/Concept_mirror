// src/components/views/SubjectsView.tsx
// ConceptMirror AI - Curriculum Subjects & Units Exploration
// 5 Subjects, 25 Units, 75 Topics with full dual-theme support

import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  CheckSquare,
  FileEdit,
  ArrowRight,
  Bookmark,
  Layers,
  Network,
  Cpu,
  Binary,
  Smartphone,
  Compass,
} from 'lucide-react';
import { SubjectId, Topic, UserStudyState } from '../../types';
import { ALL_SUBJECTS, getUnitsBySubject } from '../../data/curriculum/subjects';
import { getTopicsByUnit } from '../../data/curriculum/topics';
import { NavTabId } from '../layout/Navbar';

interface SubjectsViewProps {
  studyState: UserStudyState;
  onSelectTopic: (topic: Topic) => void;
  onNavigate: (tab: NavTabId, options?: { subjectId?: SubjectId; topicId?: string }) => void;
  onToggleBookmark: (topicId: string) => void;
}

const SUBJECT_ICON_MAP: Record<SubjectId, React.ElementType> = {
  cn: Network,
  ai: Cpu,
  toc: Binary,
  mc: Smartphone,
  gk: Compass,
};

export const SubjectsView: React.FC<SubjectsViewProps> = ({
  studyState,
  onSelectTopic,
  onNavigate,
  onToggleBookmark,
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('cn');
  const [expandedUnitId, setExpandedUnitId] = useState<string>('cn-u1');

  const currentSubject = ALL_SUBJECTS.find((s) => s.id === selectedSubjectId) || ALL_SUBJECTS[0];
  const units = getUnitsBySubject(selectedSubjectId);
  const SubjectIcon = SUBJECT_ICON_MAP[selectedSubjectId] || BookOpen;

  const totalSubjectCompleted = Object.keys(studyState.completedTopics).filter((tId) =>
    tId.startsWith(`${selectedSubjectId}-`)
  ).length;

  return (
    <div className="space-y-6 pb-16 max-w-6xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Curriculum Subjects & Units
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Explore all 5 engineering and general knowledge subjects organized into 25 units and 75 topics.
        </p>
      </div>

      {/* Subject Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {ALL_SUBJECTS.map((sub) => {
          const isSelected = sub.id === selectedSubjectId;
          const completedCount = Object.keys(studyState.completedTopics).filter((tId) =>
            tId.startsWith(`${sub.id}-`)
          ).length;
          const Icon = SUBJECT_ICON_MAP[sub.id] || BookOpen;

          return (
            <button
              key={sub.id}
              onClick={() => {
                setSelectedSubjectId(sub.id);
                setExpandedUnitId(`${sub.id}-u1`);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2.5 cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{sub.name}</span>
              <span
                className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {completedCount}/15
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Subject Overview Hero Card */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-colors">
        <div className="flex items-start gap-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0"
            style={{ backgroundColor: currentSubject.accentColor }}
          >
            <SubjectIcon className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                {currentSubject.code}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                5 Units &bull; 15 Topics &bull; 150 MCQs &bull; 10 Part B Questions
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-1">
              {currentSubject.name}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {currentSubject.tagline}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0 self-end md:self-center">
          <button
            onClick={() => onNavigate('mcq', { subjectId: currentSubject.id })}
            className="px-4 py-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Practice MCQs</span>
          </button>
          <button
            onClick={() => onNavigate('partb', { subjectId: currentSubject.id })}
            className="px-4 py-2 bg-violet-50 hover:bg-violet-100 dark:bg-violet-950/40 dark:hover:bg-violet-900/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <FileEdit className="w-4 h-4" />
            <span>Part B (11-M)</span>
          </button>
        </div>
      </div>

      {/* Units Accordion List */}
      <div className="space-y-4">
        {units.map((unit) => {
          const isExpanded = expandedUnitId === unit.id;
          const unitTopics = getTopicsByUnit(unit.id);
          const completedInUnit = unitTopics.filter((t) => studyState.completedTopics[t.id]).length;

          return (
            <div
              key={unit.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden transition-all"
            >
              {/* Unit Header Accordion Trigger */}
              <button
                onClick={() => setExpandedUnitId(isExpanded ? '' : unit.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 font-black text-xs flex items-center justify-center shrink-0">
                    U{unit.unitNumber}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      Unit {unit.unitNumber}: {unit.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {unit.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {completedInUnit}/3 Completed
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Topics List within Unit */}
              {isExpanded && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
                  {unitTopics.map((topic) => {
                    const isCompleted = Boolean(studyState.completedTopics[topic.id]);
                    const isBookmarked = studyState.bookmarkedTopics.includes(topic.id);

                    return (
                      <div
                        key={topic.id}
                        className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <button
                            onClick={() => onToggleBookmark(topic.id)}
                            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Topic'}
                            className="mt-0.5 p-1 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors cursor-pointer"
                          >
                            <Bookmark
                              className={`w-4 h-4 ${
                                isBookmarked ? 'text-amber-500 fill-amber-500' : ''
                              }`}
                            />
                          </button>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {topic.topicNumber}. {topic.title}
                              </span>
                              {isCompleted && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/50">
                                  <CheckCircle2 className="w-3 h-3" />
                                  <span>Done</span>
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                              {topic.content.beginner.summary}
                            </p>
                            <div className="flex items-center gap-1.5 mt-1.5">
                              {topic.keywords.slice(0, 3).map((kw) => (
                                <span
                                  key={kw}
                                  className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                                >
                                  {kw}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Quick action buttons */}
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button
                            onClick={() => onSelectTopic(topic)}
                            className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs shadow-blue-600/30"
                          >
                            <GraduationCap className="w-3.5 h-3.5" />
                            <span>Study</span>
                          </button>
                          <button
                            onClick={() => onNavigate('mcq', { topicId: topic.id })}
                            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                            title="Take 10 MCQs on this topic"
                          >
                            MCQ
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
