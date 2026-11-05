import React from 'react';
import {
  Brain,
  BookOpen,
  Search,
  Bookmark,
  Clock,
  Menu,
  X,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { SubjectId, Topic } from '../../types';
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
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  totalStudyTimeSeconds,
  bookmarkedCount,
  onSelectTopic,
  onOpenMobileMenu,
  isMobileOpen,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            onClick={() => onSelectTab('dashboard')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  ConceptMirror
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  Offline
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Understand what you know. Discover what you don't.
              </p>
            </div>
          </button>
        </div>

        {/* Center: Quick Topic Search */}
        <div className="relative flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 75 topics (e.g. TCP, Turing Machine, A*)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 placeholder:text-slate-400 transition-all outline-none"
            />
          </div>

          {/* Search Dropdown */}
          {isSearchOpen && filteredTopics.length > 0 && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsSearchOpen(false)}
              />
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg z-20 overflow-hidden divide-y divide-slate-100">
                <div className="p-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50">
                  Topics Found ({filteredTopics.length})
                </div>
                {filteredTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => {
                      onSelectTopic(topic);
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-blue-50/60 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-800 group-hover:text-blue-700">
                        {topic.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {topic.unitTitle} &bull; Unit {topic.unitNumber}
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {topic.subjectId.toUpperCase()}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Status & Badges */}
        <div className="flex items-center gap-3">
          {/* Study Time */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{formatTime(totalStudyTimeSeconds)}</span>
          </div>

          {/* Bookmarks quick link */}
          <button
            onClick={() => onSelectTab('revision')}
            title="Bookmarked Topics"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-700 hover:text-blue-700 text-xs font-medium transition-colors cursor-pointer"
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-500/30" />
            <span className="hidden sm:inline">Saved</span>
            <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 text-[10px] flex items-center justify-center font-bold">
              {bookmarkedCount}
            </span>
          </button>

          {/* Offline verification badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Offline</span>
          </div>
        </div>
      </div>
    </header>
  );
};
