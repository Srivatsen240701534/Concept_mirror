// src/components/layout/Sidebar.tsx
// ConceptMirror AI - Collapsible Desktop Sidebar & Mobile Drawer

import React, { useState } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  CheckSquare,
  FileEdit,
  Target,
  RotateCcw,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Database,
  Sparkles,
} from 'lucide-react';
import { NavTabId } from './Navbar';

interface SidebarProps {
  activeTab: NavTabId;
  onSelectTab: (tab: NavTabId) => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  revisionCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  isMobileOpen,
  onCloseMobile,
  revisionCount,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems: Array<{
    id: NavTabId;
    label: string;
    icon: React.ElementType;
    badge?: string | number;
    badgeColor?: string;
  }> = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'subjects', label: 'Curriculum Subjects', icon: BookOpen, badge: '5' },
    { id: 'learn', label: 'Study Topics', icon: GraduationCap, badge: '75' },
    {
      id: 'mcq',
      label: 'Practice MCQs',
      icon: CheckSquare,
      badge: '750',
      badgeColor: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    },
    {
      id: 'partb',
      label: 'Part B Evaluation',
      icon: FileEdit,
      badge: '11-M',
      badgeColor: 'bg-violet-500/20 text-violet-400 border border-violet-500/30',
    },
    { id: 'understanding', label: 'My Understanding', icon: Target },
    {
      id: 'revision',
      label: 'Revision & Alerts',
      icon: RotateCcw,
      badge: revisionCount > 0 ? revisionCount : undefined,
      badgeColor: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    },
    { id: 'history', label: 'Performance History', icon: BarChart3 },
    { id: 'settings', label: 'Settings & Audit', icon: Settings },
  ];

  const handleNavClick = (tabId: NavTabId) => {
    onSelectTab(tabId);
    onCloseMobile();
  };

  const navContent = (
    <div className="h-full flex flex-col justify-between p-3 sm:p-4">
      <div className="space-y-4">
        {/* Collapse toggle header on desktop */}
        <div className="flex items-center justify-between px-2">
          {!isCollapsed && (
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Navigation
            </span>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-auto cursor-pointer"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation list */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                title={isCollapsed ? item.label : undefined}
                className={`w-full flex items-center ${
                  isCollapsed ? 'justify-center p-2.5' : 'justify-between px-3.5 py-2.5'
                } rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </div>

                {!isCollapsed && item.badge && (
                  <span
                    className={`ml-2 px-2 py-0.5 rounded-md text-[10px] font-extrabold shrink-0 ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : item.badgeColor || 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Offline Status Badge in Footer */}
      {!isCollapsed ? (
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
              <Database className="w-3.5 h-3.5 text-blue-500" />
              <span>Offline Datasets</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              5 subjects, 750 MCQs & 50 Part B evaluations stored in local browser memory.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 pt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Zero External API Calls</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" title="Offline Mode Active" />
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside
        className={`${
          isCollapsed ? 'w-18' : 'w-64'
        } bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 shrink-0 hidden lg:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto transition-all duration-200`}
      >
        {navContent}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="fixed inset-y-0 left-0 w-72 max-w-full bg-white dark:bg-slate-950 shadow-2xl z-10 flex flex-col border-r border-slate-200 dark:border-slate-800 animate-slideRight">
            <div className="h-16 px-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="font-extrabold text-slate-900 dark:text-white text-sm">
                ConceptMirror Menu
              </span>
              <button
                onClick={onCloseMobile}
                className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg cursor-pointer"
              >
                &times;
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">{navContent}</div>
          </div>
        </div>
      )}
    </>
  );
};
