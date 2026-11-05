// src/components/layout/Navbar.tsx
// ConceptMirror AI - Top Navigation Bar
// Includes Brand Wordmark, Global 75-Topic Search, Active Study Timer, Bookmarks, and Light/Dark Theme Switch

import React, { useState, useEffect } from 'react';
import {
  Brain,
  Search,
  Bookmark,
  Clock,
  Menu,
  X,
  ShieldCheck,
  Sun,
  Moon,
  Sparkles,
} from 'lucide-react';
import { Topic, UserProfile } from '../../types';
import { ALL_TOPICS } from '../../data/curriculum/topics';

export type NavTabId =
  | 'dashboard'
  | 'subjects'
  | 'learn'
  | 'mcq'
  | 'partb'
  | 'understanding'
  | 'revision'
  | 'history'
  | 'settings';

interface NavbarProps {
  activeTab: NavTabId;
  onSelectTab: (tab: NavTabId) => void;
  totalStudyTimeSeconds: number;
  bookmarkedCount: number;
  onSelectTopic: (topic: Topic) => void;
  onOpenMobileMenu: () => void;
  isMobileOpen: boolean;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  currentUser: UserProfile;
  onOpenLoginModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  totalStudyTimeSeconds,
  bookmarkedCount,
  onSelectTopic,
  onOpenMobileMenu,
  isMobileOpen,
  theme,
  onToggleTheme,
  currentUser,
  onOpenLoginModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Format study time nicely (e.g. 42m or 2h 15m)
  const formatTime = (totalSec: number) => {
    if (totalSec < 60) return `${totalSec}s`;
    const mins = Math.floor(totalSec / 60);
    if (mins < 60) return `${mins}m`;
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;
    return `${hrs}h ${remMins}m`;
  };

  const filteredTopics = searchQuery.trim()
    ? ALL_TOPICS.filter(
        (t) =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 6)
    : [];

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile Menu Toggle & Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            onClick={() => onSelectTab('dashboard')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  ConceptMirror<span className="text-blue-600 dark:text-blue-400">.ai</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                  Offline
                </span>
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 font-medium hidden sm:block">
                Understand what you know · Discover what you don't
              </p>
            </div>
          </button>
        </div>

        {/* Center: Quick 75-Topic Autocomplete Search */}
        <div className="relative flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 75 curriculum topics (TCP, Turing Machine, A*)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 transition-all outline-none"
            />
          </div>

          {/* Search Dropdown */}
          {isSearchOpen && filteredTopics.length > 0 && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsSearchOpen(false)} />
              <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-20 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 animate-fadeIn">
                <div className="p-2.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 dark:bg-slate-800/60">
                  Found Topics ({filteredTopics.length})
                </div>
                {filteredTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => {
                      onSelectTopic(topic);
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="w-full px-4 py-2.5 text-left hover:bg-blue-50/60 dark:hover:bg-slate-800 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {topic.title}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {topic.unitTitle} &bull; Unit {topic.unitNumber}
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {topic.subjectId.toUpperCase()}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Status Actions & Theme Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Active Study Time Counter */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold tabular-nums">
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            <span>{formatTime(totalStudyTimeSeconds)}</span>
          </div>

          {/* Bookmarks quick link */}
          <button
            onClick={() => onSelectTab('revision')}
            title="Bookmarked Topics for Revision"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-400 hover:bg-amber-500/10 text-slate-700 dark:text-slate-300 hover:text-amber-500 text-xs font-medium transition-colors cursor-pointer"
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-500/30" />
            <span className="hidden sm:inline">Saved</span>
            <span className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] flex items-center justify-center font-bold">
              {bookmarkedCount}
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Student Profile / Login Button */}
          <button
            onClick={onOpenLoginModal}
            title={
              currentUser.isLoggedIn
                ? `Academic Profile: ${currentUser.name} (${currentUser.rollNumber})`
                : 'Sign In with Student ID'
            }
            className="flex items-center gap-2 pl-1.5 pr-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 bg-slate-100 dark:bg-slate-900 hover:bg-blue-50/50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-all cursor-pointer group"
          >
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[11px] font-black shadow-xs shrink-0"
              style={{ backgroundColor: currentUser.avatarColor || '#3b82f6' }}
            >
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-[11px] font-bold leading-tight group-hover:text-blue-500 transition-colors truncate max-w-[105px]">
                {currentUser.name}
              </div>
              <div className="text-[9px] text-slate-400 leading-tight truncate max-w-[105px]">
                {currentUser.isLoggedIn ? currentUser.rollNumber : 'Sign In'}
              </div>
            </div>
          </button>

          {/* Offline verification badge */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% Offline</span>
          </div>
        </div>
      </div>
    </header>
  );
};
