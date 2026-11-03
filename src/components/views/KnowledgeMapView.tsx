import React, { useState } from 'react';
import {
  Network,
  Sparkles,
  Layers,
  ArrowRight,
  Play,
  RotateCw,
  Box,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Clock,
  BookOpen,
} from 'lucide-react';
import { MasteryLevel, MasteryRecord } from '../../types';
import { KnowledgeNeuralMirror } from '../three/KnowledgeNeuralMirror';

interface KnowledgeMapViewProps {
  masteryMap: Record<string, MasteryRecord>;
  onPracticeConcept: (conceptName: string) => void;
  onSeedDemo: () => void;
}

export const KnowledgeMapView: React.FC<KnowledgeMapViewProps> = ({
  masteryMap,
  onPracticeConcept,
  onSeedDemo,
}) => {
  const [viewMode, setViewMode] = useState<'3D' | '2D'>('3D');
  const [selectedConceptName, setSelectedConceptName] = useState<string | null>(null);

  const entries = Object.entries(masteryMap);
  const selectedRecord = selectedConceptName ? masteryMap[selectedConceptName] : null;

  const getMasteryBadgeClass = (level: MasteryLevel) => {
    switch (level) {
      case 'Mastered':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Developing':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'Needs Revision':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      default:
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
    }
  };

  return (
    <div className="space-y-6 pb-16 max-w-6xl mx-auto">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold">
            <Network className="w-3.5 h-3.5" />
            <span>Interactive Knowledge Graph</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Cognitive Knowledge Map & Neural Constellation
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Real-time visualization of concept dependencies mapped against your personal reasoning history.
          </p>
        </div>

        {/* 2D / 3D Toggle */}
        <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl shadow-inner shrink-0">
          <button
            onClick={() => setViewMode('3D')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              viewMode === '3D'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>3D Constellation</span>
          </button>
          <button
            onClick={() => setViewMode('2D')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              viewMode === '2D'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>2D Topological Map</span>
          </button>
        </div>
      </div>

      {/* Main Visualizer Area */}
      {entries.length === 0 ? (
        <div className="p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
          <Network className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">No concept mastery data recorded yet</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Take an adaptive examination or load the sample TCP Congestion Control session to visualize your
            cognitive neural map.
          </p>
          <button
            onClick={onSeedDemo}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-lg shadow-indigo-600/30"
          >
            Load Sample Demonstration Data
          </button>
        </div>
      ) : viewMode === '3D' ? (
        /* Three.js 3D Knowledge Neural Mirror Scene */
        <div className="space-y-4">
          <KnowledgeNeuralMirror
            masteryMap={masteryMap}
            onSelectConcept={(name) => setSelectedConceptName(name)}
            onPracticeConcept={(name) => onPracticeConcept(name)}
            height="640px"
          />

          {/* Quick instructions strip */}
          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-white">3D Navigation:</span>
              <span>Click + drag to rotate constellation &bull; Click any node to focus camera</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-300">Mastered (&ge;80%)</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-slate-300">Developing (50-79%)</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-slate-300">Needs Revision (&lt;50%)</span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* 2D Topological Concept Network */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {entries.map(([name, record]) => (
            <div
              key={name}
              onClick={() => setSelectedConceptName(name)}
              className={`p-5 rounded-2xl border cursor-pointer transition shadow-lg ${
                selectedConceptName === name
                  ? 'bg-slate-800/90 border-indigo-500 shadow-indigo-500/20'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${getMasteryBadgeClass(
                    record.level
                  )}`}
                >
                  {record.level}
                </span>
                <span className="text-sm font-extrabold text-white">{record.score}%</span>
              </div>

              <h4 className="text-sm font-bold text-white mt-3">{name}</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                {record.subject} &bull; {record.topicTitle}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  {record.correctCount} / {record.answersCount} accurate
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPracticeConcept(name);
                  }}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center space-x-1"
                >
                  <span>Practice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Concept Deep Inspection Card */}
      {selectedRecord && (
        <div className="p-6 rounded-3xl bg-slate-900 border border-indigo-500/40 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${getMasteryBadgeClass(
                    selectedRecord.level
                  )}`}
                >
                  {selectedRecord.level}
                </span>
                <span className="text-xs text-slate-400">
                  Last tested: {new Date(selectedRecord.lastTested).toLocaleDateString()}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1.5">
                {selectedRecord.conceptName}
              </h3>
              <p className="text-xs text-slate-400">
                {selectedRecord.subject} &bull; {selectedRecord.topicTitle}
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => onPracticeConcept(selectedRecord.conceptName)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-lg shadow-indigo-600/30 flex items-center space-x-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Launch Adaptive Practice</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-3 border-t border-slate-800">
            <div className="p-3 rounded-xl bg-slate-950">
              <span className="text-slate-400 block text-[11px]">Mastery Score</span>
              <span className="text-lg font-bold text-white">{selectedRecord.score}%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950">
              <span className="text-slate-400 block text-[11px]">Examinations Attempted</span>
              <span className="text-lg font-bold text-white">{selectedRecord.answersCount}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950">
              <span className="text-slate-400 block text-[11px]">Reasoning Accuracy</span>
              <span className="text-lg font-bold text-emerald-400">
                {Math.round((selectedRecord.correctCount / (selectedRecord.answersCount || 1)) * 100)}%
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950">
              <span className="text-slate-400 block text-[11px]">Suggested Action</span>
              <span className="text-xs font-semibold text-cyan-300">
                {selectedRecord.level === 'Needs Revision'
                  ? 'Recalibrate Misconception'
                  : 'Maintain Spaced Practice'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
