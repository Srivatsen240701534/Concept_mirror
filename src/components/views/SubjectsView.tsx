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

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Curriculum Subjects & Units
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Explore all 5 engineering and general knowledge subjects organized into 25 units and 75 topics.
        </p>
      </div>

      {/* Subject Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {ALL_SUBJECTS.map((sub) => {
          const isSelected = sub.id === selectedSubjectId;
          const completedCount = Object.keys(studyState.completedTopics).filter((tId) =>
            tId.startsWith(`${sub.id}-`)
          ).length;

          return (
            <button
              key={sub.id}
              onClick={() => {
                setSelectedSubjectId(sub.id);
                setExpandedUnitId(`${sub.id}-u1`);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-xs shadow-blue-600/30'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span>{sub.name}</span>
              <span
                className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                {completedCount}/15
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Subject Overview Card */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
              {currentSubject.code}
            </span>
            <span className="text-xs text-slate-500 font-medium">5 Units &bull; 15 Topics &bull; 150 MCQs &bull; 10 Part B Questions</span>
          </div>
          <h2 className="text-lg font-extrabold text-slate-900 mt-1">{currentSubject.name}</h2>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
            {currentSubject.tagline}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('mcq', { subjectId: currentSubject.id })}
            className="px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Practice MCQs</span>
          </button>
          <button
            onClick={() => onNavigate('partb', { subjectId: currentSubject.id })}
            className="px-3.5 py-2 bg-violet-50 hover:bg-violet-100 text-violet-700 border border-violet-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
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
          const completedInUnit = unitTopics.filter(
            (t) => studyState.completedTopics[t.id]
          ).length;

          return (
            <div
              key={unit.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
            >
              {/* Unit Header Accordion Trigger */}
              <button
                onClick={() => setExpandedUnitId(isExpanded ? '' : unit.id)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-extrabold text-xs flex items-center justify-center shrink-0">
                    U{unit.unitNumber}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Unit {unit.unitNumber}: {unit.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1">{unit.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
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
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-slate-100 divide-y divide-slate-100">
                  {unitTopics.map((topic) => {
                    const isCompleted = Boolean(studyState.completedTopics[topic.id]);
                    const isBookmarked = studyState.bookmarkedTopics.includes(topic.id);

                    return (
                      <div
                        key={topic.id}
                        className="py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <button
                            onClick={() => onToggleBookmark(topic.id)}
                            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Topic'}
                            className="mt-0.5 p-1 rounded-md text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition-colors cursor-pointer"
                          >
                            <Bookmark
                              className={`w-4 h-4 ${
                                isBookmarked ? 'text-amber-500 fill-amber-500' : ''
                              }`}
                            />
                          </button>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {topic.topicNumber}. {topic.title}
                              </span>
                              {isCompleted && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                                  <CheckCircle2 className="w-3 h-3" />
                                  <span>Done</span>
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {topic.content.beginner.summary}
                            </p>
                            <div className="flex items-center gap-1.5 mt-1">
                              {topic.keywords.slice(0, 3).map((kw) => (
                                <span
                                  key={kw}
                                  className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
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
                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer shadow-xs shadow-blue-600/30"
                          >
                            <GraduationCap className="w-3.5 h-3.5" />
                            <span>Study</span>
                          </button>
                          <button
                            onClick={() => onNavigate('mcq', { topicId: topic.id })}
                            className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-colors cursor-pointer"
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
