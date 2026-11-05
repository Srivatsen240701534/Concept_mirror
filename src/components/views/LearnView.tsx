import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
  Sparkles,
  HelpCircle,
  Lightbulb,
  Layers,
  Terminal,
  Clock,
  ArrowRight,
  CheckSquare,
  FileEdit,
} from 'lucide-react';
import { DifficultyLevel, SubjectId, Topic, UserStudyState } from '../../types';
import { ALL_SUBJECTS, getUnitsBySubject } from '../../data/curriculum/subjects';
import {
  ALL_TOPICS,
  getAdjacentTopics,
  getTopicsByUnit,
} from '../../data/curriculum/topics';
import { NavTabId } from '../layout/Navbar';

interface LearnViewProps {
  currentTopic: Topic;
  onSelectTopic: (topic: Topic) => void;
  studyState: UserStudyState;
  onToggleCompletion: (topicId: string, difficulty: DifficultyLevel) => void;
  onToggleBookmark: (topicId: string) => void;
  onRecordStudyTime: (topicId: string, seconds: number) => void;
  onNavigate: (tab: NavTabId, options?: { subjectId?: SubjectId; topicId?: string }) => void;
}

export const LearnView: React.FC<LearnViewProps> = ({
  currentTopic,
  onSelectTopic,
  studyState,
  onToggleCompletion,
  onToggleBookmark,
  onRecordStudyTime,
  onNavigate,
}) => {
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('intermediate');

  // Track active time spent on this topic (updates every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      onRecordStudyTime(currentTopic.id, 5);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentTopic.id, onRecordStudyTime]);

  const content = currentTopic.content[difficulty];
  const isCompleted = Boolean(studyState.completedTopics[currentTopic.id]);
  const isBookmarked = studyState.bookmarkedTopics.includes(currentTopic.id);
  const { prev, next } = getAdjacentTopics(currentTopic.id);

  const subjectMeta =
    ALL_SUBJECTS.find((s) => s.id === currentTopic.subjectId) || ALL_SUBJECTS[0];
  const unitsInSub = getUnitsBySubject(currentTopic.subjectId);
  const currentUnit = unitsInSub.find((u) => u.id === currentTopic.unitId);
  const topicsInCurrentUnit = getTopicsByUnit(currentTopic.unitId);

  return (
    <div className="space-y-6 pb-16 max-w-5xl mx-auto">
      {/* Top Breadcrumb & Hierarchy Switcher */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        {/* Breadcrumb Hierarchy */}
        <div className="flex items-center gap-2 text-xs flex-wrap">
          <button
            onClick={() => onNavigate('subjects')}
            className="text-slate-500 hover:text-blue-600 font-semibold cursor-pointer"
          >
            {subjectMeta.name}
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-slate-600 font-semibold">
            Unit {currentTopic.unitNumber}: {currentTopic.unitTitle}
          </span>
          <span className="text-slate-300">/</span>
          <span className="text-blue-700 font-bold">
            Topic {currentTopic.topicNumber}
          </span>
        </div>

        {/* Quick Unit Topic Picker */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {topicsInCurrentUnit.map((top) => {
            const isCurrent = top.id === currentTopic.id;
            const isTopDone = Boolean(studyState.completedTopics[top.id]);
            return (
              <button
                key={top.id}
                onClick={() => onSelectTopic(top)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isCurrent
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>T{top.topicNumber}</span>
                {isTopDone && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Topic Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
                Unit {currentTopic.unitNumber} &bull; Topic {currentTopic.topicNumber}
              </span>
              <span className="text-xs text-slate-500 font-semibold">{subjectMeta.name}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {currentTopic.title}
            </h1>
          </div>

          {/* Action buttons: Completed & Bookmark */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleBookmark(currentTopic.id)}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title={isBookmarked ? 'Saved to Bookmarks' : 'Bookmark for Revision'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => onToggleCompletion(currentTopic.id, difficulty)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
                isCompleted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30'
                  : 'bg-slate-900 hover:bg-blue-600 text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
            </button>
          </div>
        </div>

        {/* Difficulty Level Selector Tabs */}
        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Difficulty Depth:
          </div>
          <div className="inline-flex rounded-xl p-1 bg-slate-100 border border-slate-200 self-start sm:self-auto">
            {(['beginner', 'intermediate', 'advanced'] as DifficultyLevel[]).map((level) => {
              const isSelected = difficulty === level;
              return (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {level}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section 1: Objectives & Summary */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-blue-700">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <h2 className="text-base font-bold text-slate-900">Learning Objectives & Summary</h2>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 text-slate-800 text-xs sm:text-sm leading-relaxed">
          {content.summary}
        </div>

        <div>
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Key Objectives to Master:
          </div>
          <ul className="space-y-1.5">
            {currentTopic.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 2: Detailed Theory & Explanations */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-blue-700">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <h2 className="text-base font-bold text-slate-900">
            Detailed Theory & Explanations ({difficulty.toUpperCase()})
          </h2>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 whitespace-pre-line">
          {content.theory}
        </div>
      </div>

      {/* Section 3: Formal Definitions */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          <h2 className="text-base font-bold text-slate-900">Essential Formal Definitions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {content.definitions.map((def, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors space-y-1.5"
            >
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>{def.term}</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">{def.definition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Key Concepts & Real Examples */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-violet-600" />
          <h2 className="text-base font-bold text-slate-900">Core Concepts with Practical Examples</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.keyConcepts.map((concept, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3"
            >
              <div className="text-xs font-bold text-slate-900">{concept.title}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{concept.explanation}</p>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-700">
                <span className="font-bold text-slate-900">Concrete Example: </span>
                {concept.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Structural / Architecture Diagram */}
      {content.diagram && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-slate-700" />
              <h2 className="text-base font-bold text-slate-900">Structural / Flow Diagram</h2>
            </div>
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              ASCII Architecture
            </span>
          </div>

          <pre className="p-4 rounded-xl bg-slate-900 text-emerald-400 text-[11px] font-mono overflow-x-auto leading-relaxed shadow-inner">
            {content.diagram}
          </pre>
        </div>
      )}

      {/* Section 6: Real-World Applications & Important Exam Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Applications */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Real-World Industry Applications
          </h3>
          <ul className="space-y-2">
            {content.applications.map((app, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Exam Points */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Important University Exam Points
          </h3>
          <ul className="space-y-2">
            {content.examImportantPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-5 h-5 rounded-full bg-violet-50 text-violet-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  ★
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 7: Quick Revision Notes */}
      <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/70 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-amber-900">
          <Award className="w-5 h-5 text-amber-600" />
          <h3 className="font-bold text-sm">Quick Revision Notes (High-Yield Memory Hooks)</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-950">
          {content.quickRevisionNotes.map((note, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-white/80 border border-amber-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
              <span>{note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 8: Quick Test Your Understanding Actions */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold text-slate-900">
            Ready to test your comprehension?
          </div>
          <p className="text-xs text-slate-600">
            Practice 10 topic-specific MCQs or test conceptual reasoning with the 11-Mark Part B Analyser.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('mcq', { topicId: currentTopic.id })}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs shadow-blue-600/30"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Practice MCQs</span>
          </button>
          <button
            onClick={() => onNavigate('partb', { topicId: currentTopic.id })}
            className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs shadow-violet-600/30"
          >
            <FileEdit className="w-4 h-4" />
            <span>Evaluate Part B</span>
          </button>
        </div>
      </div>

      {/* Navigation Footer: Previous & Next Topic */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200 gap-4">
        {prev ? (
          <button
            onClick={() => onSelectTopic(prev)}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <div className="text-left hidden sm:block">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Previous</div>
              <div className="truncate max-w-[150px]">{prev.title}</div>
            </div>
            <span className="sm:hidden">Prev</span>
          </button>
        ) : (
          <div />
        )}

        {next ? (
          <button
            onClick={() => onSelectTopic(next)}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <div className="text-right hidden sm:block">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Next</div>
              <div className="truncate max-w-[150px]">{next.title}</div>
            </div>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
