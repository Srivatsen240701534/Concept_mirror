import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Bookmark,
  Layers,
  HelpCircle,
  Database,
  Zap,
} from 'lucide-react';
import { DifficultyLevel, ExplanationStyle, LearningTopic } from '../../types';
import { generateTopicExplanationApi } from '../../services/api';

interface LearnTopicViewProps {
  onStartExamWithTopic: (topicTitle: string, subject: string) => void;
  onSaveTopic: (topic: LearningTopic) => void;
  savedTopics: LearningTopic[];
  isDemoMode: boolean;
}

export const LearnTopicView: React.FC<LearnTopicViewProps> = ({
  onStartExamWithTopic,
  onSaveTopic,
  savedTopics,
  isDemoMode,
}) => {
  const [topicName, setTopicName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('Intermediate');
  const [style, setStyle] = useState<ExplanationStyle>('Detailed');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentTopic, setCurrentTopic] = useState<LearningTopic | null>(
    savedTopics.length > 0 ? savedTopics[0] : null
  );
  const [expandedConceptIdx, setExpandedConceptIdx] = useState<number | null>(0);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const sampleSuggestions = [
    { title: 'Python Functions & Scope', subject: 'Computer Science', diff: 'Beginner' },
    { title: 'Calculus: Derivatives & Chain Rule', subject: 'Mathematics', diff: 'Intermediate' },
    { title: 'Photosynthesis & Light Reactions', subject: 'Biology', diff: 'Beginner' },
    { title: 'Supply & Demand Equilibrium', subject: 'Business', diff: 'Beginner' },
    { title: 'Newtonian Gravitation & Orbits', subject: 'Physics', diff: 'Intermediate' },
    { title: 'World History: Industrial Revolution', subject: 'Humanities', diff: 'Intermediate' },
  ];

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!topicName.trim()) return;

    setIsLoading(true);
    setStatusMessage(null);

    const result = await generateTopicExplanationApi(
      topicName.trim(),
      subject.trim(),
      difficulty,
      style,
      isDemoMode
    );

    setIsLoading(false);
    if (result.ok && result.topic) {
      setCurrentTopic(result.topic);
      onSaveTopic(result.topic);
      if (result.isDemo) {
        setStatusMessage(
          result.error
            ? `Offline/Demo mode active (${result.error}). Showing structured benchmark module.`
            : 'Generated using deterministic Demo Knowledge Module.'
        );
      } else {
        setStatusMessage('Module generated live via server-side Gemini 3.8 Flash.');
      }
    } else {
      setStatusMessage('Failed to generate topic explanation. Please check your connection or switch to Demo Mode.');
    }
  };

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Smart Learning Mode</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Deconstruct Any Topic Into Clear Mental Models
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          Enter any academic subject. ConceptMirror AI analyzes the concept graph, extracts foundational
          prerequisites, and breaks down the core mechanisms before examining you.
        </p>
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleGenerate}
        className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Topic Name
            </label>
            <input
              type="text"
              value={topicName}
              onChange={(e) => setTopicName(e.target.value)}
              placeholder="e.g. TCP Congestion Control, Quantum Superposition..."
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Subject Domain
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Computer Networks, Physics, Chemistry..."
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Difficulty */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Difficulty Depth
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Beginner', 'Intermediate', 'Advanced'] as DifficultyLevel[]).map((d) => (
                <button
                  type="button"
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition border ${
                    difficulty === d
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Explanation Style */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Explanation Style
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Simple', 'Detailed', 'Example-based'] as ExplanationStyle[]).map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition border ${
                    style === s
                      ? 'bg-cyan-600 border-cyan-500 text-white shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="pt-2">
          <span className="text-[11px] font-medium text-slate-400 block mb-2">
            Quick Academic Suggestions:
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleSuggestions.map((item) => (
              <button
                type="button"
                key={item.title}
                onClick={() => {
                  setTopicName(item.title);
                  setSubject(item.subject);
                  setDifficulty(item.diff as any);
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 text-xs font-medium transition"
              >
                {item.title} <span className="text-slate-500 text-[10px]">({item.subject})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center space-x-2">
            {isDemoMode ? (
              <>
                <Database className="w-4 h-4 text-amber-400" />
                <span>Deterministic Demo Mode Active</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Live Gemini 3.8 Flash Active</span>
              </>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:opacity-95 text-white text-sm font-bold shadow-lg shadow-indigo-600/30 transition flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Analyzing Cognitive Structure...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Learning Module</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Status Notice */}
      {statusMessage && (
        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
          <span>{statusMessage}</span>
          <span className="text-[10px] text-slate-500 font-mono">Status Verified</span>
        </div>
      )}

      {/* Generated Topic Learning Display */}
      {currentTopic && (
        <div className="space-y-6 animate-fadeIn">
          {/* Top Banner of Topic */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0f172a] border border-indigo-500/40 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
                    {currentTopic.subject}
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold">
                    {currentTopic.difficulty}
                  </span>
                  {currentTopic.isDemo && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold">
                      DEMO DATA
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentTopic.title}
                </h2>
                <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
                  {currentTopic.summary}
                </p>
              </div>

              {/* Direct Launch to AI Examiner */}
              <div className="shrink-0 w-full md:w-auto">
                <button
                  onClick={() => onStartExamWithTopic(currentTopic.title, currentTopic.subject)}
                  className="w-full md:w-auto flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 transition transform hover:-translate-y-0.5"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Test My Understanding</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Prerequisites */}
            {currentTopic.prerequisites && currentTopic.prerequisites.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Prerequisite Foundations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentTopic.prerequisites.map((pre, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200 flex items-center space-x-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{pre}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Analogies Section */}
          {currentTopic.analogies && currentTopic.analogies.length > 0 && (
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Intuitive Physical Analogies</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentTopic.analogies.map((analogy, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed italic"
                  >
                    &ldquo;{analogy}&rdquo;
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Concepts Breakdown Accordion Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Deconstructed Concepts ({currentTopic.concepts.length})</span>
              </h3>
              <span className="text-xs text-slate-400">Expand cards to view details & examples</span>
            </div>

            <div className="space-y-3">
              {currentTopic.concepts.map((concept, idx) => {
                const isExpanded = expandedConceptIdx === idx;
                return (
                  <div
                    key={concept.id || idx}
                    className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedConceptIdx(isExpanded ? null : idx)}
                      className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-7 h-7 rounded-xl bg-indigo-500/20 text-indigo-300 font-bold text-xs flex items-center justify-center border border-indigo-500/30">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-white">{concept.title}</h4>
                          <span className="text-[11px] text-slate-400">
                            {concept.relationships?.length || 0} interconnected concepts
                          </span>
                        </div>
                      </div>

                      <div className="text-slate-400">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-5 pt-0 space-y-4 border-t border-slate-800/60 bg-slate-950/40">
                        <div>
                          <span className="text-xs font-semibold text-indigo-300 block mb-1">
                            Conceptual Mechanism:
                          </span>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {concept.explanation}
                          </p>
                        </div>

                        {concept.practicalExample && (
                          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                            <span className="font-bold text-cyan-400 block mb-1">
                              Practical Concrete Scenario:
                            </span>
                            <p className="text-slate-300 leading-relaxed">
                              {concept.practicalExample}
                            </p>
                          </div>
                        )}

                        {concept.relationships && concept.relationships.length > 0 && (
                          <div className="flex items-center space-x-2 text-xs">
                            <span className="text-slate-400">Directly interacts with:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {concept.relationships.map((rel, rIdx) => (
                                <span
                                  key={rIdx}
                                  className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-indigo-300 text-[11px] font-medium"
                                >
                                  {rel}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
