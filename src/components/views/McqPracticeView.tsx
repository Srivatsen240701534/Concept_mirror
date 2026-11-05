import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RotateCcw,
  ArrowRight,
  Filter,
  Award,
  BookOpen,
} from 'lucide-react';
import {
  MCQuestion,
  MCQTestAttempt,
  SubjectId,
  Topic,
  UserStudyState,
} from '../../types';
import { ALL_SUBJECTS, getUnitsBySubject } from '../../data/curriculum/subjects';
import { ALL_TOPICS, getTopicsBySubject, getTopicsByUnit } from '../../data/curriculum/topics';
import {
  ALL_MCQS,
  getMcqsBySubject,
  getMcqsByTopic,
  getMcqsByUnit,
  getRandomMcqs,
} from '../../data/mcq';
import { NavTabId } from '../layout/Navbar';

interface McqPracticeViewProps {
  initialSubjectId?: SubjectId;
  initialTopicId?: string;
  onSaveAttempt: (attempt: MCQTestAttempt) => void;
  onNavigate: (tab: NavTabId, options?: { subjectId?: SubjectId; topicId?: string }) => void;
  onSelectTopicToLearn: (topic: Topic) => void;
}

export const McqPracticeView: React.FC<McqPracticeViewProps> = ({
  initialSubjectId = 'cn',
  initialTopicId,
  onSaveAttempt,
  onNavigate,
  onSelectTopicToLearn,
}) => {
  // Setup state
  const [testMode, setTestMode] = useState<'topic' | 'unit' | 'subject' | 'random'>(
    initialTopicId ? 'topic' : 'subject'
  );
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>(initialSubjectId);
  const [selectedUnitId, setSelectedUnitId] = useState<string>(`${initialSubjectId}-u1`);
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId || `${initialSubjectId}-u1-t1`);
  const [isTimed, setIsTimed] = useState<boolean>(true);
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Active test execution state
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [activeQuestions, setActiveQuestions] = useState<MCQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userSelectedOptions, setUserSelectedOptions] = useState<Record<number, number>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(600); // 10 mins default
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  // Test completed results state
  const [completedAttempt, setCompletedAttempt] = useState<MCQTestAttempt | null>(null);

  const units = getUnitsBySubject(selectedSubjectId);
  const topics = getTopicsByUnit(selectedUnitId);

  // Sync unit when subject changes
  useEffect(() => {
    setSelectedUnitId(`${selectedSubjectId}-u1`);
    setSelectedTopicId(`${selectedSubjectId}-u1-t1`);
  }, [selectedSubjectId]);

  // Sync topic when unit changes
  useEffect(() => {
    const unitTops = getTopicsByUnit(selectedUnitId);
    if (unitTops.length > 0) {
      setSelectedTopicId(unitTops[0].id);
    }
  }, [selectedUnitId]);

  // Countdown timer when test is active
  useEffect(() => {
    if (!isTestActive) return;

    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);

      if (isTimed) {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleFinishTest();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isTestActive, isTimed]);

  // Start test
  const handleStartTest = () => {
    let pool: MCQuestion[] = [];
    let title = 'MCQ Practice Test';

    if (testMode === 'topic') {
      pool = getMcqsByTopic(selectedTopicId);
      const top = ALL_TOPICS.find((t) => t.id === selectedTopicId);
      title = `Topic Quiz: ${top ? top.title : 'Topic'}`;
    } else if (testMode === 'unit') {
      pool = getMcqsByUnit(selectedUnitId);
      const u = units.find((un) => un.id === selectedUnitId);
      title = `Unit Test: ${u ? u.title : 'Unit'}`;
    } else if (testMode === 'subject') {
      pool = getMcqsBySubject(selectedSubjectId);
      const sub = ALL_SUBJECTS.find((s) => s.id === selectedSubjectId);
      title = `Subject Assessment: ${sub ? sub.name : 'Subject'}`;
    } else {
      pool = getRandomMcqs(questionCount, selectedSubjectId);
      title = 'Random Mock Exam';
    }

    // Shuffle and slice to selected count
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, questionCount);
    if (shuffled.length === 0) {
      shuffled.push(...ALL_MCQS.slice(0, questionCount));
    }

    setActiveQuestions(shuffled);
    setCurrentIndex(0);
    setUserSelectedOptions({});
    setElapsedSeconds(0);
    setTimeRemainingSeconds(shuffled.length * 60); // 1 minute per question
    setIsTestActive(true);
    setCompletedAttempt(null);
  };

  // Select an option
  const handleSelectOption = (qIdx: number, optionIdx: number) => {
    setUserSelectedOptions((prev) => ({
      ...prev,
      [qIdx]: optionIdx,
    }));
  };

  // Finish and grade test
  const handleFinishTest = () => {
    setIsTestActive(false);

    let score = 0;
    const userAnswers: MCQTestAttempt['userAnswers'] = [];
    const missedTopicsSet = new Set<string>();

    activeQuestions.forEach((q, idx) => {
      const selected = userSelectedOptions[idx];
      const isCorrect = selected === q.correctIndex;
      if (isCorrect) score++;
      else missedTopicsSet.add(q.topicId);

      userAnswers.push({
        questionId: q.id,
        topicId: q.topicId,
        topicTitle: q.topicTitle,
        selectedOption: selected !== undefined ? selected : -1,
        correctOption: q.correctIndex,
        isCorrect,
      });
    });

    const total = activeQuestions.length;
    const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;

    const attempt: MCQTestAttempt = {
      id: `mcq-attempt-${Date.now()}`,
      timestamp: new Date().toISOString(),
      title: activeQuestions[0]?.topicTitle ? `MCQ: ${activeQuestions[0].topicTitle}` : 'Practice Quiz',
      mode: testMode,
      subjectId: selectedSubjectId,
      unitId: testMode === 'unit' ? selectedUnitId : undefined,
      topicId: testMode === 'topic' ? selectedTopicId : undefined,
      totalQuestions: total,
      score,
      accuracy,
      timeSpentSeconds: elapsedSeconds,
      userAnswers,
      topicsNeedingRevision: Array.from(missedTopicsSet),
    };

    onSaveAttempt(attempt);
    setCompletedAttempt(attempt);
  };

  // Format time mm:ss
  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  // 1. Result View
  if (completedAttempt) {
    return (
      <div className="space-y-6 pb-16 max-w-4xl mx-auto">
        {/* Results Header Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Test Completed
            </span>
            <h1 className="text-2xl font-black text-slate-900 mt-1">
              Score: {completedAttempt.score} / {completedAttempt.totalQuestions} ({completedAttempt.accuracy}%)
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Time taken: {formatTimer(completedAttempt.timeSpentSeconds)} &bull; Mode: {completedAttempt.mode.toUpperCase()}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleStartTest}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-xs shadow-blue-600/30"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Test</span>
            </button>
            <button
              onClick={() => setCompletedAttempt(null)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              New Configuration
            </button>
          </div>
        </div>

        {/* Flagged Topics Needing Revision */}
        {completedAttempt.topicsNeedingRevision.length > 0 && (
          <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <h2 className="text-sm font-bold">Topics Requiring Revision from this Test</h2>
            </div>
            <div className="divide-y divide-amber-200/50">
              {completedAttempt.topicsNeedingRevision.map((tId) => {
                const topic = ALL_TOPICS.find((t) => t.id === tId);
                if (!topic) return null;
                return (
                  <div key={tId} className="py-2.5 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-slate-900">{topic.title}</div>
                      <div className="text-[11px] text-slate-500">
                        {topic.unitTitle} &bull; Unit {topic.unitNumber}
                      </div>
                    </div>
                    <button
                      onClick={() => onSelectTopicToLearn(topic)}
                      className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    >
                      Study Topic
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Question by Question Review */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Detailed Question Breakdown
          </h2>

          <div className="space-y-4">
            {activeQuestions.map((q, qIdx) => {
              const userAns = completedAttempt.userAnswers[qIdx];
              const isCorrect = userAns?.isCorrect;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border shadow-xs space-y-3 bg-white ${
                    isCorrect ? 'border-emerald-200' : 'border-rose-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0">
                        {qIdx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-900">{q.question}</span>
                    </div>
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Correct</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200 shrink-0">
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Incorrect</span>
                      </span>
                    )}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const isOptionCorrect = optIdx === q.correctIndex;
                      const isOptionSelected = optIdx === userAns?.selectedOption;

                      let optClass = 'bg-slate-50 border-slate-200 text-slate-700';
                      if (isOptionCorrect) {
                        optClass = 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold';
                      } else if (isOptionSelected && !isCorrect) {
                        optClass = 'bg-rose-50 border-rose-300 text-rose-900 line-through';
                      }

                      return (
                        <div key={optIdx} className={`p-2.5 rounded-xl border flex items-start gap-2 ${optClass}`}>
                          <span className="font-mono font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation & Reference */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                    <div className="font-bold text-slate-900">Explanation:</div>
                    <p className="leading-relaxed text-[11px]">{q.explanation}</p>
                    {q.referenceExamPoint && (
                      <div className="text-[10px] text-blue-700 font-semibold pt-1">
                        Exam Reference: {q.referenceExamPoint}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 2. Active Test In-Progress Screen
  if (isTestActive && activeQuestions.length > 0) {
    const currentQ = activeQuestions[currentIndex];
    const selectedOpt = userSelectedOptions[currentIndex];
    const isAnswered = selectedOpt !== undefined;

    return (
      <div className="space-y-6 pb-16 max-w-3xl mx-auto">
        {/* Test Control Header */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
              Q {currentIndex + 1} of {activeQuestions.length}
            </span>
            <span className="text-xs text-slate-500 font-semibold truncate hidden sm:inline">
              {currentQ.topicTitle}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {isTimed && (
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold border ${
                  timeRemainingSeconds < 60
                    ? 'bg-rose-50 border-rose-200 text-rose-700 animate-pulse'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTimer(timeRemainingSeconds)}</span>
              </div>
            )}

            <button
              onClick={handleFinishTest}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-xs shadow-emerald-600/30"
            >
              Submit Test
            </button>
          </div>
        </div>

        {/* Current Question Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                {currentQ.difficulty.toUpperCase()} LEVEL
              </span>
              <span className="text-xs text-slate-400">Single Choice</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {currentQ.question}
            </h2>
          </div>

          {/* 4 Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOpt === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(currentIndex, idx)}
                  className={`w-full p-4 rounded-xl text-left text-xs font-semibold border transition-all flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/70 border-blue-500 text-blue-900 shadow-xs ring-2 ring-blue-500/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-relaxed">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Question Stepper Navigation */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Previous
            </button>

            {/* Pagination dots palette */}
            <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-none">
              {activeQuestions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-6 h-6 rounded-md text-[10px] font-bold flex items-center justify-center transition-colors cursor-pointer ${
                    i === currentIndex
                      ? 'bg-blue-600 text-white'
                      : userSelectedOptions[i] !== undefined
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {currentIndex < activeQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-xs shadow-blue-600/30"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleFinishTest}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer shadow-xs shadow-emerald-600/30"
              >
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 3. Test Configuration & Setup View
  return (
    <div className="space-y-6 pb-16 max-w-4xl mx-auto">
      <div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          MCQ Practice Suite (750 Preloaded Questions)
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Select topic-wise, unit-wise, subject-wise, or random test modes with timer options.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
        {/* Test Scope Mode */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
            1. Select Test Scope Mode
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: 'topic', label: 'Topic-Wise', desc: '10 targeted MCQs' },
              { id: 'unit', label: 'Unit-Wise', desc: '30 pooled MCQs' },
              { id: 'subject', label: 'Subject-Wise', desc: '150 pooled MCQs' },
              { id: 'random', label: 'Random Mix', desc: 'Cross-topic exam' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setTestMode(m.id as any)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  testMode === m.id
                    ? 'bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20 text-blue-900'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="text-xs font-bold">{m.label}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{m.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Selectors based on mode */}
        <div className="space-y-4 pt-2 border-t border-slate-100">
          {/* Subject Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Subject</label>
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value as SubjectId)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-900 focus:border-blue-500 outline-none"
            >
              {ALL_SUBJECTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.code}) - 150 MCQs
                </option>
              ))}
            </select>
          </div>

          {/* Unit Selector (if unit or topic mode) */}
          {(testMode === 'unit' || testMode === 'topic') && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Unit</label>
              <select
                value={selectedUnitId}
                onChange={(e) => setSelectedUnitId(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-900 focus:border-blue-500 outline-none"
              >
                {units.map((u) => (
                  <option key={u.id} value={u.id}>
                    Unit {u.unitNumber}: {u.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Topic Selector (if topic mode) */}
          {testMode === 'topic' && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Topic (10 Questions)</label>
              <select
                value={selectedTopicId}
                onChange={(e) => setSelectedTopicId(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-900 focus:border-blue-500 outline-none"
              >
                {topics.map((t) => (
                  <option key={t.id} value={t.id}>
                    Topic {t.topicNumber}: {t.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Question Count & Timer Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Question Count</label>
            <div className="flex items-center gap-2">
              {[5, 10, 15, 20].map((cnt) => (
                <button
                  key={cnt}
                  onClick={() => setQuestionCount(cnt)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    questionCount === cnt
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cnt} Qs
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Timer Mode</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsTimed(true)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  isTimed
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Timed (1m / Q)</span>
              </button>
              <button
                onClick={() => setIsTimed(false)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  !isTimed
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Untimed
              </button>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={handleStartTest}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-blue-600/30"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Launch MCQ Practice Test</span>
          </button>
        </div>
      </div>
    </div>
  );
};
