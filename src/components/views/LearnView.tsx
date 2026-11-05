// src/components/views/LearnView.tsx
// ConceptMirror AI - Interactive Study & Theory Deep-Dive View
// 75 Topics across 3 Difficulty Levels with full dual-theme support

import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
  Sparkles,
  Lightbulb,
  Layers,
  Terminal,
  Clock,
  ArrowRight,
  CheckSquare,
  FileEdit,
  Flame,
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
  const topicsInCurrentUnit = getTopicsByUnit(currentTopic.unitId);

  return (
    <div className="space-y-6 pb-20 max-w-5xl mx-auto">
      {/* Top Breadcrumb & Quick Unit Topic Stepper */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-wrap items-center justify-between gap-4 transition-colors">
        {/* Breadcrumb Hierarchy */}
        <div className="flex items-center gap-2 text-xs flex-wrap">
          <button
            onClick={() => onNavigate('subjects')}
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold cursor-pointer"
          >
            {subjectMeta.name}
          </button>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-600 dark:text-slate-300 font-semibold">
            Unit {currentTopic.unitNumber}: {currentTopic.unitTitle}
          </span>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-blue-600 dark:text-blue-400 font-extrabold">
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
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isCurrent
                    ? 'bg-blue-600 text-white shadow-xs shadow-blue-600/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>T{top.topicNumber}</span>
                {isTopDone && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Topic Header & Controls */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-5 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                Unit {currentTopic.unitNumber} &bull; Topic {currentTopic.topicNumber}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                {subjectMeta.name}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {currentTopic.title}
            </h1>
          </div>

          {/* Action buttons: Completed & Bookmark */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onToggleBookmark(currentTopic.id)}
              className={`p-2.5 rounded-2xl border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700/60 text-amber-800 dark:text-amber-300'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title={isBookmarked ? 'Saved to Bookmarks' : 'Bookmark for Revision'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => onToggleCompletion(currentTopic.id, difficulty)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
                isCompleted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30'
                  : 'bg-slate-900 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white shadow-blue-600/30'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Topic Completed' : 'Mark Completed'}</span>
            </button>
          </div>
        </div>

        {/* Difficulty Level Switcher Tabs */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
            Depth Level:
          </div>
          <div className="inline-flex rounded-2xl p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
            {(['beginner', 'intermediate', 'advanced'] as DifficultyLevel[]).map((level) => {
              const isSelected = difficulty === level;
              return (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
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
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
            Learning Objectives & Executive Summary
          </h2>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/40 text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
          {content.summary}
        </div>

        <div>
          <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Target Learning Competencies:
          </div>
          <ul className="space-y-2">
            {currentTopic.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 shrink-0" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 2: Detailed Theory */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
          <BookOpen className="w-5 h-5" />
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
            Comprehensive Theory & Mechanics ({difficulty.toUpperCase()})
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
          {content.theory}
        </div>
      </div>

      {/* Section 3: Essential Formal Definitions */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <Layers className="w-5 h-5" />
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
            Formal Definitions & Technical Glossary
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {content.definitions.map((def, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all space-y-2"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span>{def.term}</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {def.definition}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Key Concepts & Practical Examples */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
          <Sparkles className="w-5 h-5" />
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
            Core Concepts with Practical Real-World Scenarios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.keyConcepts.map((concept, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white">{concept.title}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {concept.explanation}
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 text-[11px] text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white">Applied Example: </span>
                {concept.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Structural / Architecture ASCII Diagram */}
      {content.diagram && (
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Terminal className="w-5 h-5" />
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                Structural & Flow Architecture Diagram
              </h2>
            </div>
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              ASCII Schematic
            </span>
          </div>

          <pre className="p-5 rounded-2xl bg-slate-950 text-emerald-400 text-[11px] font-mono overflow-x-auto leading-relaxed border border-slate-800 shadow-inner">
            {content.diagram}
          </pre>
        </div>
      )}

      {/* Section 6: Applications & Exam Points Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 transition-colors">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Industry Applications
          </h3>
          <ul className="space-y-2">
            {content.applications.map((app, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <span className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 transition-colors">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            High-Yield Exam Focus Points
          </h3>
          <ul className="space-y-2">
            {content.examImportantPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <span className="w-5 h-5 rounded-full bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  ★
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 7: Quick Revision Notes */}
      <div className="bg-amber-500/10 dark:bg-amber-500/5 p-6 rounded-3xl border border-amber-300/40 dark:border-amber-500/20 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
          <Award className="w-5 h-5" />
          <h3 className="font-bold text-sm">Quick Revision Notes (Memory Hooks)</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-amber-950 dark:text-amber-200">
          {content.quickRevisionNotes.map((note, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-700/40"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
              <span>{note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 8: Test Comprehension Banner */}
      <div className="bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-violet-900/30 p-6 sm:p-7 rounded-3xl border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Ready to test your comprehension?
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Practice 10 topic-specific MCQs or test deep conceptual understanding with the 11-Mark Analyser.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => onNavigate('mcq', { topicId: currentTopic.id })}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-blue-600/30"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Practice MCQs</span>
          </button>
          <button
            onClick={() => onNavigate('partb', { topicId: currentTopic.id })}
            className="px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-violet-600/30"
          >
            <FileEdit className="w-4 h-4" />
            <span>Evaluate Part B</span>
          </button>
        </div>
      </div>

      {/* Navigation Footer: Previous & Next Topic */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 gap-4">
        {prev ? (
          <button
            onClick={() => onSelectTopic(prev)}
            className="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
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
            className="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
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
