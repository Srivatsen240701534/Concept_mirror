import React from 'react';
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
  ShieldCheck,
  ChevronRight,
  Database,
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
  const navItems: Array<{
    id: NavTabId;
    label: string;
    icon: React.ElementType;
    badge?: string | number;
    badgeColor?: string;
  }> = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'subjects', label: 'Subjects (5)', icon: BookOpen, badge: '5' },
    { id: 'learn', label: 'Learn (75 Topics)', icon: GraduationCap },
    { id: 'mcq', label: 'MCQ Practice', icon: CheckSquare, badge: '750', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'partb', label: 'Part B (11-Mark)', icon: FileEdit, badge: '50 Qs', badgeColor: 'bg-violet-100 text-violet-700' },
    { id: 'understanding', label: 'My Understanding', icon: Target },
    {
      id: 'revision',
      label: 'Revision',
      icon: RotateCcw,
      badge: revisionCount > 0 ? revisionCount : undefined,
      badgeColor: 'bg-amber-100 text-amber-800',
    },
    { id: 'history', label: 'Performance History', icon: BarChart3 },
    { id: 'settings', label: 'Settings & Audit', icon: Settings },
  ];

  const handleNavClick = (tabId: NavTabId) => {
    onSelectTab(tabId);
    onCloseMobile();
  };

  const content = (
    <div className="h-full flex flex-col justify-between p-4">
      <div className="space-y-1">
        <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Curriculum & Tools
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs shadow-blue-500/30'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span className="truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`ml-2 px-1.5 py-0.5 rounded-md text-[10px] font-bold shrink-0 ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : item.badgeColor || 'bg-slate-200 text-slate-700'
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

      {/* Offline Status Footer Card */}
      <div className="pt-4 border-t border-slate-200 space-y-2">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
            <Database className="w-3.5 h-3.5 text-blue-600" />
            <span>Local Datasets Active</span>
          </div>
          <div className="text-[11px] text-slate-500 leading-relaxed">
            All 5 subjects, 75 topics, 750 MCQs & 50 Part B questions bundled locally.
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-700 pt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Zero External API Calls</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 shrink-0 hidden lg:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="fixed inset-y-0 left-0 w-72 max-w-full bg-white shadow-xl z-10 flex flex-col">
            <div className="h-16 px-4 border-b border-slate-200 flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Navigation Menu</span>
              <button
                onClick={onCloseMobile}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg"
              >
                &times;
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};
