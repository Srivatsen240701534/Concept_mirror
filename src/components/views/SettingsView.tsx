import React, { useState, useEffect } from 'react';
import {
  Settings as SettingsIcon,
  Zap,
  Database,
  RotateCcw,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Server,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';
import { DifficultyLevel, ExplanationStyle, UserPreferences } from '../../types';
import { checkServerHealth, HealthCheckResponse } from '../../services/api';

interface SettingsViewProps {
  preferences: UserPreferences;
  onUpdatePreferences: (prefs: Partial<UserPreferences>) => void;
  onSeedDemo: () => void;
  onClearAllData: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  preferences,
  onUpdatePreferences,
  onSeedDemo,
  onClearAllData,
}) => {
  const [healthStatus, setHealthStatus] = useState<HealthCheckResponse | null>(null);
  const [isCheckingHealth, setIsCheckingHealth] = useState<boolean>(false);
  const [confirmClear, setConfirmClear] = useState<boolean>(false);
  const [notice, setNotice] = useState<string | null>(null);

  const fetchHealth = async () => {
    setIsCheckingHealth(true);
    const health = await checkServerHealth();
    setHealthStatus(health);
    setIsCheckingHealth(false);
  };

  useEffect(() => {
    fetchHealth();
  }, []);

  const handleSeedDemo = () => {
    onSeedDemo();
    setNotice('Sample TCP Congestion Control session and mastery map restored successfully.');
    setTimeout(() => setNotice(null), 3500);
  };

  const handleClear = () => {
    onClearAllData();
    setConfirmClear(false);
    setNotice('All stored sessions, topics, and mastery records cleared.');
    setTimeout(() => setNotice(null), 3500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold">
          <SettingsIcon className="w-3.5 h-3.5 text-cyan-400" />
          <span>Platform Settings & Architecture</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          System Preferences & AI Mode Controls
        </h1>
        <p className="text-sm text-slate-300 max-w-xl">
          Toggle between Live Gemini server-side reasoning and deterministic offline Demo Mode, or manage local data.
        </p>
      </div>

      {notice && (
        <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 text-xs text-indigo-300 flex items-center justify-between">
          <span>{notice}</span>
          <button onClick={() => setNotice(null)} className="text-slate-400 hover:text-white">✕</button>
        </div>
      )}

      {/* Mode Switch Card */}
      <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
        <div>
          <h3 className="text-base font-bold text-white flex items-center space-x-2">
            <span>Execution Runtime Mode</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Choose whether to query Gemini 3.8 Flash server-side or run locally on deterministic sample models.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Live AI Mode */}
          <div
            onClick={() => onUpdatePreferences({ aiMode: 'live' })}
            className={`p-5 rounded-2xl border cursor-pointer transition ${
              preferences.aiMode === 'live'
                ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-500/20'
                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center space-x-2 font-bold text-sm text-white">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>LIVE AI MODE</span>
              </span>
              {preferences.aiMode === 'live' && (
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
              )}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Uses server-side Gemini 3.8 Flash via @google/genai SDK. Real-time reasoning evaluation and adaptive questions for any input topic.
            </p>
          </div>

          {/* Demo Mode */}
          <div
            onClick={() => onUpdatePreferences({ aiMode: 'demo' })}
            className={`p-5 rounded-2xl border cursor-pointer transition ${
              preferences.aiMode === 'demo'
                ? 'bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-500/20'
                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center space-x-2 font-bold text-sm text-white">
                <Database className="w-4 h-4 text-amber-400" />
                <span>DEMO MODE</span>
              </span>
              {preferences.aiMode === 'demo' && (
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
              )}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              100% deterministic local execution. Requires zero API keys or network connection. Includes complete TCP Congestion Control diagnostic data.
            </p>
          </div>
        </div>

        {/* Server Health Status */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2.5">
            <Server className="w-4 h-4 text-indigo-400" />
            <div>
              <span className="text-slate-300 font-semibold">Backend Status: </span>
              <span className="text-slate-400">
                {healthStatus?.status === 'ok' ? 'Online (Node.js runtime)' : 'Offline / Checking...'}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                healthStatus?.hasGeminiKey
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
              }`}
            >
              {healthStatus?.hasGeminiKey
                ? 'Gemini Key Auto-Configured'
                : 'Demo Mode Ready'}
            </span>
            <button
              onClick={fetchHealth}
              disabled={isCheckingHealth}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
            >
              {isCheckingHealth ? 'Pinging...' : 'Refresh'}
            </button>
          </div>
        </div>
      </div>

      {/* Default Examination Preferences */}
      <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
        <h3 className="text-base font-bold text-white">Default Pedagogy Parameters</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2">
            <label className="font-semibold text-slate-300 block">Default Question Count</label>
            <select
              value={preferences.defaultQuestionCount}
              onChange={(e) =>
                onUpdatePreferences({ defaultQuestionCount: parseInt(e.target.value, 10) })
              }
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-indigo-500"
            >
              <option value={5}>5 Questions (Standard Diagnostic)</option>
              <option value={10}>10 Questions (Comprehensive)</option>
              <option value={15}>15 Questions (Deep Stress-Test)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-semibold text-slate-300 block">Default Explanation Style</label>
            <select
              value={preferences.defaultExplanationStyle}
              onChange={(e) =>
                onUpdatePreferences({ defaultExplanationStyle: e.target.value as ExplanationStyle })
              }
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-indigo-500"
            >
              <option value="Detailed">Detailed (Step-by-step mechanisms)</option>
              <option value="Simple">Simple (Accessible plain English)</option>
              <option value="Example-based">Example-based (Case scenarios)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Demonstration & Data Management */}
      <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
        <h3 className="text-base font-bold text-white">Data Management & College Presentation</h3>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          <div>
            <h4 className="text-sm font-bold text-white">Sample Demonstration Session</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Restores the complete TCP Congestion Control examination, misconceptions, and 3D map.
            </p>
          </div>
          <button
            onClick={handleSeedDemo}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center justify-center space-x-2 shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Load TCP Demo Session</span>
          </button>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-rose-400">Clear Stored Application Data</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Purges all local sessions, topics, and records from browser localStorage.
            </p>
          </div>

          {!confirmClear ? (
            <button
              onClick={() => setConfirmClear(true)}
              className="px-5 py-2.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800 text-xs font-bold transition flex items-center justify-center space-x-2 shrink-0"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All Data</span>
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleClear}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition"
              >
                Confirm Delete
              </button>
              <button
                onClick={() => setConfirmClear(false)}
                className="px-3 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
