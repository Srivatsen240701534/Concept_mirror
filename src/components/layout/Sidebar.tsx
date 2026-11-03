import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  AlertCircle,
  Network,
  CalendarCheck2,
  History,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Database,
  Zap,
} from 'lucide-react';

export type NavTabId =
  | 'overview'
  | 'learn'
  | 'examiner'
  | 'demo_library'
  | 'misconceptions'
  | 'knowledge_map'
  | 'revision'
  | 'history'
  | 'settings';

interface SidebarProps {
  activeTab: NavTabId;
  onSelectTab: (tab: NavTabId) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  misconceptionsCount: number;
  revisionTasksCount: number;
  isDemoMode: boolean;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  isCollapsed,
  onToggleCollapse,
  misconceptionsCount,
  revisionTasksCount,
  isDemoMode,
  isMobileOpen,
  onCloseMobile,
}) => {
  const navItems = [
    {
      id: 'overview' as NavTabId,
      label: 'Overview',
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'learn' as NavTabId,
      label: 'Learn a Topic',
      icon: BookOpen,
      badge: 'Universal',
    },
    {
      id: 'examiner' as NavTabId,
      label: 'AI Examiner',
      icon: GraduationCap,
      badge: 'Live',
    },
    {
      id: 'demo_library' as NavTabId,
      label: 'Demo Datasets',
      icon: Database,
      badge: '50',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    },
    {
      id: 'misconceptions' as NavTabId,
      label: 'Misconception Analysis',
      icon: AlertCircle,
      badge: misconceptionsCount > 0 ? misconceptionsCount : null,
      badgeColor: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    },
    {
      id: 'knowledge_map' as NavTabId,
      label: 'Knowledge Map',
      icon: Network,
      badge: '3D',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30',
    },
    {
      id: 'revision' as NavTabId,
      label: 'Revision Planner',
      icon: CalendarCheck2,
      badge: revisionTasksCount > 0 ? revisionTasksCount : null,
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    },
    {
      id: 'history' as NavTabId,
      label: 'Learning History',
      icon: History,
      badge: null,
    },
    {
      id: 'settings' as NavTabId,
      label: 'Settings',
      icon: Settings,
      badge: null,
    },
  ];

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between p-3.5 bg-[#0b0f19] border-r border-slate-800/80">
      <div className="space-y-6">
        {/* Navigation list */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  onCloseMobile();
                }}
                className={`w-full flex items-center ${
                  isCollapsed ? 'justify-center px-2 py-3' : 'justify-between px-3.5 py-2.5'
                } rounded-xl font-medium text-xs transition duration-150 group relative ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <div className="flex items-center space-x-3">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-cyan-400'
                    }`}
                  />
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </div>

                {!isCollapsed && item.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      item.badgeColor || 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Tooltip in collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-medium text-white shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer controls */}
      <div className="pt-4 border-t border-slate-800/80 space-y-3">
        {/* Current status pill */}
        {!isCollapsed && (
          <div
            className={`p-3 rounded-xl border text-xs ${
              isDemoMode
                ? 'bg-amber-950/20 border-amber-800/40 text-amber-300'
                : 'bg-indigo-950/20 border-indigo-800/40 text-indigo-300'
            }`}
          >
            <div className="flex items-center space-x-2 font-semibold">
              {isDemoMode ? (
                <>
                  <Database className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>DEMO MODE ACTIVE</span>
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>LIVE GEMINI ACTIVE</span>
                </>
              )}
            </div>
            <p className="text-[11px] text-slate-400 mt-1 leading-normal">
              {isDemoMode
                ? 'Using predefined deterministic TCP case studies & offline adaptive engine.'
                : 'Server-side adaptive reasoning with Gemini 3.8 Flash.'}
            </p>
          </div>
        )}

        {/* Collapse toggle (Desktop only) */}
        <button
          onClick={onToggleCollapse}
          className="hidden lg:flex w-full items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs transition"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span>Collapse Sidebar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:block shrink-0 transition-all duration-200 sticky top-16 h-[calc(100vh-4rem)] ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <div className="relative w-72 max-w-[85vw] h-full z-10 shadow-2xl">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
