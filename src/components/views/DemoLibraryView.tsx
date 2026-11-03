import React, { useState, useMemo } from 'react';
import {
  ALL_DEMO_DATASETS,
  DEMO_SUBJECTS,
  filterDemoDatasets,
  NormalizedDemoDataset,
} from '../../data/demoDatasets';
import {
  BookOpen,
  Search,
  Filter,
  Sparkles,
  ArrowRight,
  Brain,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  FileQuestion,
  GraduationCap,
  Eye,
  X,
  Play,
  Layers,
  Award
} from 'lucide-react';

interface DemoLibraryViewProps {
  onSelectDatasetForExam: (dataset: NormalizedDemoDataset) => void;
  onSelectDatasetForLearn: (dataset: NormalizedDemoDataset) => void;
}

export const DemoLibraryView: React.FC<DemoLibraryViewProps> = ({
  onSelectDatasetForExam,
  onSelectDatasetForLearn,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('All Subjects');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [previewDataset, setPreviewDataset] = useState<NormalizedDemoDataset | null>(null);

  const filteredDatasets = useMemo(() => {
    return filterDemoDatasets(selectedSubject, searchQuery, selectedDifficulty);
  }, [selectedSubject, searchQuery, selectedDifficulty]);

  // Subject counts
  const subjectCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Subjects': ALL_DEMO_DATASETS.length };
    ALL_DEMO_DATASETS.forEach(d => {
      counts[d.subject] = (counts[d.subject] || 0) + 1;
    });
    return counts;
  }, []);

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'Computer Science':
        return 'from-blue-500/20 to-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'Mathematics':
        return 'from-purple-500/20 to-indigo-500/10 text-purple-400 border-purple-500/30';
      case 'Physics':
        return 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30';
      case 'Chemistry':
        return 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30';
      case 'Biology':
        return 'from-green-500/20 to-emerald-500/10 text-green-400 border-green-500/30';
      case 'Business':
        return 'from-rose-500/20 to-pink-500/10 text-rose-400 border-rose-500/30';
      case 'Humanities':
        return 'from-yellow-500/20 to-amber-500/10 text-yellow-400 border-yellow-500/30';
      case 'Language':
        return 'from-violet-500/20 to-fuchsia-500/10 text-violet-400 border-violet-500/30';
      default:
        return 'from-slate-500/20 to-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Advanced':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/20 p-6 md:p-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>50 Standardized Curated Datasets</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Demonstration Dataset Library
            </h1>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Explore 50 complete educational curricula spanning 8 academic domains. Each dataset includes canonical explanations, prerequisite maps, targeted cognitive misconceptions, adaptive assessment questions, and ideal rubrics.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700/60 p-4 rounded-xl">
            <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{ALL_DEMO_DATASETS.length}</div>
              <div className="text-xs text-slate-400">Total Pre-baked Modules</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-4">
        {/* Search bar & Difficulty dropdown */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search across 50 datasets by topic, keyword, or concept (e.g., Python, Calculus, DNA, Market)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/90 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              aria-label="Filter by difficulty"
              className="w-full sm:w-44 px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Subject Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-700">
          {DEMO_SUBJECTS.map((subj) => {
            const count = subjectCounts[subj] || 0;
            const isSelected = selectedSubject === subj;
            return (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-2 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-slate-700/60'
                }`}
              >
                <span>{subj}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    isSelected ? 'bg-indigo-700 text-white' : 'bg-slate-700 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dataset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDatasets.map((dataset) => {
          const subjectColor = getSubjectColor(dataset.subject);
          const diffBadge = getDifficultyBadge(dataset.difficulty);

          return (
            <div
              key={dataset.id}
              className="group relative flex flex-col justify-between rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/40 transition duration-200 p-5 overflow-hidden"
            >
              <div className="space-y-3">
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border bg-gradient-to-r ${subjectColor}`}
                  >
                    {dataset.subject}
                  </span>
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded border ${diffBadge}`}
                  >
                    {dataset.difficulty}
                  </span>
                </div>

                {/* Title & Domain */}
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition line-clamp-1">
                    {dataset.title}
                  </h3>
                  <p className="text-xs text-indigo-400/90 font-medium">
                    {dataset.domain}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {dataset.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {dataset.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700/50"
                    >
                      #{tag}
                    </span>
                  ))}
                  {dataset.tags.length > 3 && (
                    <span className="text-[10px] text-slate-500 self-center">
                      +{dataset.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setPreviewDataset(dataset)}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onSelectDatasetForLearn(dataset)}
                    title="Read Lesson & Concepts"
                    className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Study</span>
                  </button>

                  <button
                    onClick={() => onSelectDatasetForExam(dataset)}
                    title="Launch AI Examiner Session"
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition flex items-center gap-1"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Examine</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredDatasets.length === 0 && (
        <div className="text-center py-16 bg-slate-900/50 border border-slate-800 rounded-xl space-y-3">
          <FileQuestion className="w-10 h-10 text-slate-500 mx-auto" />
          <h4 className="text-base font-semibold text-white">No datasets match your filters</h4>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search terms or clearing the difficulty/subject filters.
          </p>
          <button
            onClick={() => {
              setSelectedSubject('All Subjects');
              setSelectedDifficulty('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-lg text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Dataset Preview Modal */}
      {previewDataset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-indigo-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-900/80">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {previewDataset.subject}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {previewDataset.domain}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  {previewDataset.title}
                </h2>
              </div>
              <button
                onClick={() => setPreviewDataset(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              {/* Summary */}
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider">
                  <Brain className="w-4 h-4" />
                  <span>Module Overview</span>
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  {previewDataset.explanation.summary}
                </p>
              </div>

              {/* Learning Objectives */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>Learning Objectives</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {previewDataset.explanation.learningObjectives.map((obj, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 bg-slate-800/40 border border-slate-800 p-2.5 rounded-lg text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Concepts */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>Key Concepts ({previewDataset.explanation.keyConcepts.length})</span>
                </h4>
                <div className="space-y-2">
                  {previewDataset.explanation.keyConcepts.map((kc, i) => (
                    <div
                      key={i}
                      className="bg-slate-800/40 border border-slate-700/40 rounded-lg p-3 space-y-1"
                    >
                      <div className="font-semibold text-xs text-white">{kc.name}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{kc.explanation}</p>
                      <p className="text-[11px] text-indigo-400/90 pt-0.5">
                        <span className="font-medium">Why it matters:</span> {kc.importance}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Misconceptions */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>Cognitive Misconceptions Targeted</span>
                </h4>
                <div className="space-y-1.5">
                  {previewDataset.explanation.misconceptions.map((misc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 bg-rose-950/20 border border-rose-900/30 p-2.5 rounded-lg text-xs text-rose-200"
                    >
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{misc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Questions Sample */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FileQuestion className="w-4 h-4 text-cyan-400" />
                  <span>Assessment Questions ({previewDataset.questions.length})</span>
                </h4>
                <div className="space-y-2">
                  {previewDataset.questions.map((q, idx) => (
                    <div
                      key={q.id}
                      className="bg-slate-800/40 border border-slate-700/40 p-3 rounded-lg space-y-2"
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-cyan-400">
                          Question #{idx + 1} — {q.conceptTargeted}
                        </span>
                        <span className="text-slate-400">{q.difficulty}</span>
                      </div>
                      <p className="text-xs text-slate-200">{q.questionText || q.question}</p>
                      <div className="bg-slate-900/70 p-2 rounded text-[11px] text-slate-400 border border-slate-800">
                        <span className="text-emerald-400 font-medium">Ideal Answer: </span>
                        {q.correctAnswerSummary || q.idealAnswer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-end gap-3">
              <button
                onClick={() => setPreviewDataset(null)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  const ds = previewDataset;
                  setPreviewDataset(null);
                  onSelectDatasetForLearn(ds);
                }}
                className="px-4 py-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>Study Concept Map</span>
              </button>
              <button
                onClick={() => {
                  const ds = previewDataset;
                  setPreviewDataset(null);
                  onSelectDatasetForExam(ds);
                }}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Launch Adaptive Exam</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
