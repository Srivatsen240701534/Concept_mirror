import React from 'react';
import {
  Brain,
  Sparkles,
  Zap,
  Info,
  Menu,
  X,
  Database,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';
import { UserPreferences } from '../../types';

interface NavbarProps {
  preferences: UserPreferences;
  onUpdatePreferences: (prefs: Partial<UserPreferences>) => void;
  serverHasKey: boolean;
  onOpenAbout: () => void;
  onResetData: () => void;
  onOpenMobileSidebar: () => void;
  activeTab: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  preferences,
  onUpdatePreferences,
  serverHasKey,
  onOpenAbout,
  onResetData,
  onOpenMobileSidebar,
  activeTab,
}) => {
  const isDemo = preferences.aiMode === 'demo';

  const toggleMode = () => {
    onUpdatePreferences({
      aiMode: isDemo ? 'live' : 'demo',
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0f19]/90 border-b border-slate-800/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Mobile hamburger + Brand */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3">
            {/* Geometric Brain/Mirror Logo */}
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Brain className="w-5 h-5 text-indigo-400" />
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base tracking-tight text-white font-mono">
                  Concept<span className="text-cyan-400">Mirror</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  AI
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-slate-400 leading-none mt-0.5">
                Understand what you know. Discover what you don’t.
              </p>
            </div>
          </div>
        </div>

        {/* Center / Right controls */}
        <div className="flex items-center space-x-2.5 sm:space-x-4">
          {/* Mode Switch: LIVE AI MODE / DEMO MODE */}
          <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-xl p-1 shadow-inner">
            <button
              onClick={() => onUpdatePreferences({ aiMode: 'live' })}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition ${
                !isDemo
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Uses Gemini 3.8 Flash automatically on server"
            >
              <Zap className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">LIVE AI MODE</span>
              <span className="sm:hidden">LIVE</span>
            </button>

            <button
              onClick={() => onUpdatePreferences({ aiMode: 'demo' })}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition ${
                isDemo
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Uses pre-configured deterministic demo questions and TCP case studies"
            >
              <Database className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">DEMO MODE</span>
              <span className="sm:hidden">DEMO</span>
            </button>
          </div>

          {/* About / College Project button */}
          <button
            onClick={onOpenAbout}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition shadow-sm"
          >
            <Info className="w-4 h-4 text-cyan-400" />
            <span className="hidden md:inline">Project Details</span>
          </button>
        </div>
      </div>
    </header>
  );
};
