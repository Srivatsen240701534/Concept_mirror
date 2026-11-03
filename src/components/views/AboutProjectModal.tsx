import React from 'react';
import {
  Brain,
  Sparkles,
  Zap,
  CheckCircle2,
  Layers,
  Network,
  X,
  ExternalLink,
  Code2,
  GraduationCap,
  AlertCircle,
  Database,
} from 'lucide-react';

interface AboutProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchDemoExam: () => void;
}

export const AboutProjectModal: React.FC<AboutProjectModalProps> = ({
  isOpen,
  onClose,
  onLaunchDemoExam,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto text-slate-100 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] flex items-center justify-center shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Brain className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-extrabold text-white">ConceptMirror AI</h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                  College Capstone Project
                </span>
              </div>
              <p className="text-xs text-slate-400">
                &ldquo;Understand what you know. Discover what you don’t.&rdquo;
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Vision */}
        <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-800/40 space-y-2 text-xs leading-relaxed">
          <h3 className="font-bold text-sm text-cyan-300 flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>The Pedagogical Innovation: Beyond Traditional Quizzes</span>
          </h3>
          <p className="text-slate-300">
            Standard multiple-choice tests measure binary correctness: a student either clicks A or B.
            However, students frequently arrive at correct answers via flawed reasoning (lucky guesses), or
            fail questions due to specific, systematic conceptual misunderstandings (such as confusing exponential
            Slow Start with linear Congestion Avoidance).
          </p>
          <p className="text-slate-300">
            <strong>ConceptMirror AI</strong> acts as a cognitive mirror. It models the reasoning step by step,
            detects flawed mental models without claiming mind-reading certainty, dynamically pivots the examination
            to test boundary conditions, and updates a 3D procedural neural constellation.
          </p>
        </div>

        {/* 5-Stage Cognitive Evaluation Pipeline */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center space-x-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>The 5-Stage Adaptive Evaluation Architecture</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="w-5 h-5 rounded-md bg-indigo-600/30 text-indigo-300 font-bold text-[10px] flex items-center justify-center">
                1
              </span>
              <h4 className="font-bold text-white">Reasoning Capture</h4>
              <p className="text-[11px] text-slate-400">
                Prompts students for underlying justification alongside their answer.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="w-5 h-5 rounded-md bg-indigo-600/30 text-indigo-300 font-bold text-[10px] flex items-center justify-center">
                2
              </span>
              <h4 className="font-bold text-white">Schema Analysis</h4>
              <p className="text-[11px] text-slate-400">
                Deconstructs sound logical steps vs invalid physical assumptions.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="w-5 h-5 rounded-md bg-indigo-600/30 text-indigo-300 font-bold text-[10px] flex items-center justify-center">
                3
              </span>
              <h4 className="font-bold text-white">Misconception Detection</h4>
              <p className="text-[11px] text-slate-400">
                Infers flawed mental model, scientific correction, and real-world analogy.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="w-5 h-5 rounded-md bg-indigo-600/30 text-indigo-300 font-bold text-[10px] flex items-center justify-center">
                4
              </span>
              <h4 className="font-bold text-white">Adaptive Trajectory</h4>
              <p className="text-[11px] text-slate-400">
                Selects the next question specifically targeted at resolving diagnosed flaws.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="w-5 h-5 rounded-md bg-indigo-600/30 text-indigo-300 font-bold text-[10px] flex items-center justify-center">
                5
              </span>
              <h4 className="font-bold text-white">Spatial Mastery Map</h4>
              <p className="text-[11px] text-slate-400">
                Updates 3D WebGL neural constellation and computes spaced revision tasks.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
          <h3 className="font-bold text-sm text-white flex items-center space-x-2">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Technical Architecture & Compliance</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-slate-300">
            <div>
              <strong className="text-white block">Frontend:</strong>
              React 19, TypeScript, Tailwind CSS, Recharts
            </div>
            <div>
              <strong className="text-white block">3D Graphics:</strong>
              Three.js PBR, ACES ToneMapping, Procedural Models
            </div>
            <div>
              <strong className="text-white block">Server & AI:</strong>
              Node.js Express, Google GenAI (gemini-3.8-flash)
            </div>
            <div>
              <strong className="text-white block">Data & Privacy:</strong>
              Browser LocalStorage, Zero 3P Telemetry, CSV/PDF Export
            </div>
          </div>
        </div>

        {/* Faculty Demonstration Script */}
        <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40 text-xs space-y-2">
          <span className="font-bold text-amber-300 flex items-center space-x-1.5">
            <GraduationCap className="w-4 h-4" />
            <span>Recommended Demonstration Script for College Faculty:</span>
          </span>
          <ol className="list-decimal list-inside space-y-1 text-slate-300">
            <li>Show the <strong>Overview Dashboard</strong> demonstrating dynamically computed statistics.</li>
            <li>Launch <strong>AI Examiner</strong> with topic &ldquo;TCP Congestion Control&rdquo;.</li>
            <li>Submit an answer with a deliberate misconception (e.g., stating Slow Start grows slowly by 1 packet).</li>
            <li>Show how the evaluation catches the inverted mental model and adapts Question 2 immediately!</li>
            <li>Open the <strong>3D Knowledge Map</strong> and rotate the interactive neural constellation.</li>
            <li>Navigate to <strong>Misconception Analysis</strong> and solve the Verification Challenge to recalibrate.</li>
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Ready to export to GitHub or run locally with standard <code className="text-indigo-300">npm run dev</code>.
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onLaunchDemoExam();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-95 text-white text-xs font-bold transition shadow-lg shadow-indigo-600/30"
            >
              Launch Live Faculty Demo
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
