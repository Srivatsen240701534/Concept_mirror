// src/components/auth/LoginModal.tsx
// ConceptMirror AI - Student Authentication & Profile Management Modal

import React, { useState } from 'react';
import {
  X,
  User,
  GraduationCap,
  Building2,
  Mail,
  ShieldCheck,
  CheckCircle2,
  LogIn,
  LogOut,
  Edit3,
  Sparkles,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { UserProfile } from '../../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile;
  onUpdateUser: (updatedUser: UserProfile) => void;
  onLogout: () => void;
}

const PRESET_ACCOUNTS: Array<Omit<UserProfile, 'id'> & { id: string }> = [
  {
    id: 'usr_srivatsen_2024',
    name: 'Srivatsen S',
    email: 'srivatsen.s.2024.cse@rajalakshmi.edu.in',
    rollNumber: '2024-CSE-01534',
    department: 'Computer Science & Engineering',
    institution: 'Rajalakshmi Engineering College',
    semester: 'Semester 4 / B.E.',
    avatarColor: '#3b82f6',
    isLoggedIn: true,
  },
  {
    id: 'usr_ananya_ai',
    name: 'Ananya R',
    email: 'ananya.ai.2024@annauniv.edu.in',
    rollNumber: '2024-AIDS-042',
    department: 'Artificial Intelligence & Data Science',
    institution: 'College of Engineering, Guindy',
    semester: 'Semester 4 / B.Tech',
    avatarColor: '#8b5cf6',
    isLoggedIn: true,
  },
];

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onUpdateUser,
  onLogout,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSwitching, setIsSwitching] = useState<boolean>(false);

  // Form states
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    rollNumber: currentUser.rollNumber,
    department: currentUser.department,
    institution: currentUser.institution,
    semester: currentUser.semester,
    avatarColor: currentUser.avatarColor,
  });

  if (!isOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    onUpdateUser({
      ...currentUser,
      ...formData,
      isLoggedIn: true,
    });
    setIsEditing(false);
    setIsSwitching(false);
    onClose();
  };

  const handleSelectPreset = (preset: typeof PRESET_ACCOUNTS[0]) => {
    onUpdateUser({
      ...preset,
      isLoggedIn: true,
    });
    setIsSwitching(false);
    setIsEditing(false);
    onClose();
  };

  const handleGuestLogin = () => {
    onUpdateUser({
      id: 'usr_guest',
      name: 'Guest Student',
      email: 'guest@conceptmirror.local',
      rollNumber: 'OFFLINE-GUEST',
      department: 'General Engineering Studies',
      institution: 'Independent Learner',
      semester: 'Self-Paced Study',
      avatarColor: '#64748b',
      isLoggedIn: true,
    });
    setIsSwitching(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white dark:bg-[#0c101b] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 divide-y divide-slate-100 dark:divide-slate-800 animate-scaleUp">
        {/* Modal Top Header */}
        <div className="px-6 py-5 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {currentUser.isLoggedIn && !isSwitching
                    ? 'Student Profile & Academic ID'
                    : 'Student Sign In'}
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Offline Auth
                </span>
              </div>
              <p className="text-xs text-slate-400">
                100% locally verified academic session & progress tracking.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {currentUser.isLoggedIn && !isEditing && !isSwitching ? (
            /* Logged In Active Profile View */
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="relative p-5 rounded-2xl bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 border border-blue-500/20 dark:border-blue-500/15">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg shrink-0"
                    style={{ backgroundColor: currentUser.avatarColor || '#3b82f6' }}
                  >
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-lg font-black text-slate-900 dark:text-white truncate">
                        {currentUser.name}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                        {currentUser.rollNumber}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5 truncate">
                      <Mail className="w-3 h-3 text-slate-400" />
                      {currentUser.email}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                        <Building2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span className="truncate">{currentUser.institution}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                        <BookOpen className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{currentUser.department}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Academic Term: <strong className="text-slate-700 dark:text-slate-200">{currentUser.semester}</strong>
                  </span>
                  <button
                    onClick={() => {
                      setFormData({
                        name: currentUser.name,
                        email: currentUser.email,
                        rollNumber: currentUser.rollNumber,
                        department: currentUser.department,
                        institution: currentUser.institution,
                        semester: currentUser.semester,
                        avatarColor: currentUser.avatarColor,
                      });
                      setIsEditing(true);
                    }}
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-semibold cursor-pointer"
                  >
                    <Edit3 className="w-3 h-3" /> Edit Details
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setIsSwitching(true)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <User className="w-4 h-4 text-blue-500" />
                  Switch Profile
                </button>
                <button
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="px-4 py-2.5 rounded-xl border border-rose-200 dark:border-rose-900/50 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-rose-600 dark:text-rose-400 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogOut className="w-4 h-4 text-rose-500" />
                  Sign Out (Guest Mode)
                </button>
              </div>
            </div>
          ) : (
            /* Sign In or Switch Account Form */
            <div className="space-y-6">
              {/* Preset Quick Login Cards */}
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                  Fast Select Student Identity
                </label>
                <div className="space-y-2">
                  {PRESET_ACCOUNTS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectPreset(preset)}
                      className="w-full p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500/60 bg-slate-50/60 dark:bg-slate-900/50 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 text-left transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow shrink-0"
                          style={{ backgroundColor: preset.avatarColor }}
                        >
                          {preset.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {preset.name}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-400">
                              {preset.rollNumber}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                            {preset.institution} • {preset.department}
                          </p>
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:translate-x-0.5 transition-transform shrink-0">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                </div>
                <span className="relative px-3 bg-white dark:bg-[#0c101b] text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Or Customize Student ID
                </span>
              </div>

              {/* Custom Input Form */}
              <form onSubmit={handleSaveProfile} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Srivatsen S"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 text-slate-900 dark:text-slate-100 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Academic Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="student@institution.edu.in"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 text-slate-900 dark:text-slate-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Roll Number / Reg ID
                    </label>
                    <input
                      type="text"
                      value={formData.rollNumber}
                      onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                      placeholder="e.g. 2024-CSE-01534"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 text-slate-900 dark:text-slate-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Institution / College
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="e.g. Rajalakshmi Engineering College"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 text-slate-900 dark:text-slate-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Department & Term
                    </label>
                    <input
                      type="text"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      placeholder="e.g. Computer Science (Sem 4)"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 text-slate-900 dark:text-slate-100 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Avatar Color selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Profile Accent Tone
                  </label>
                  <div className="flex items-center gap-2">
                    {['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'].map((col) => (
                      <button
                        key={col}
                        type="button"
                        onClick={() => setFormData({ ...formData, avatarColor: col })}
                        className={`w-7 h-7 rounded-xl transition-all cursor-pointer flex items-center justify-center text-white ${
                          formData.avatarColor === col ? 'ring-2 ring-offset-2 ring-blue-500 scale-110' : 'opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: col }}
                      >
                        {formData.avatarColor === col && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  {currentUser.isLoggedIn && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setIsSwitching(false);
                      }}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium cursor-pointer"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleGuestLogin}
                    className="px-4 py-2.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-semibold cursor-pointer"
                  >
                    Use Guest Mode
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2 ml-auto cursor-pointer"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    {isEditing ? 'Save Profile' : 'Sign In Now'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
