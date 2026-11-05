// src/App.tsx
// ConceptMirror AI - Complete 100% Offline Educational Platform
// 5 Subjects, 25 Units, 75 Topics (3 Difficulties), 750 MCQs, 50 Part B Questions (11 Marks)
// Featuring "MY LEARNING UNIVERSE" 3D Progress Model & Dual Dark/Light Theme Architecture

import React, { useState, useEffect } from 'react';
import { Navbar, NavTabId } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { DashboardView } from './components/views/DashboardView';
import { SubjectsView } from './components/views/SubjectsView';
import { LearnView } from './components/views/LearnView';
import { McqPracticeView } from './components/views/McqPracticeView';
import { PartBEvaluationView } from './components/views/PartBEvaluationView';
import { UnderstandingView } from './components/views/UnderstandingView';
import { RevisionView } from './components/views/RevisionView';
import { PerformanceHistoryView } from './components/views/PerformanceHistoryView';
import { SettingsView } from './components/views/SettingsView';

import { DifficultyLevel, MCQTestAttempt, SubjectId, Topic, UserStudyState } from './types';
import { ALL_TOPICS, getTopicById } from './data/curriculum/topics';
import {
  loadUserStudyState,
  markTopicCompleted,
  recordStudyTime,
  saveMcqAttempt,
  saveUserStudyState,
  toggleTopicBookmark,
} from './services/storage';
import { calculateAllUnderstanding } from './services/understandingEngine';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTabId>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [studyState, setStudyState] = useState<UserStudyState>(() => loadUserStudyState());

  // Dark/Light Theme state (Dark is the polished primary theme)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('conceptmirror_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('conceptmirror_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Current active topic for LearnView
  const [currentTopic, setCurrentTopic] = useState<Topic>(() => {
    if (studyState.lastActiveTopic?.topicId) {
      const found = getTopicById(studyState.lastActiveTopic.topicId);
      if (found) return found;
    }
    return ALL_TOPICS[0];
  });

  // MCQ practice parameters
  const [mcqInitialSubject, setMcqInitialSubject] = useState<SubjectId>('cn');
  const [mcqInitialTopicId, setMcqInitialTopicId] = useState<string | undefined>(undefined);

  // Part B target question
  const [partBInitialQuestionId, setPartBInitialQuestionId] = useState<string | undefined>(undefined);

  // Active study timer ticker: increments study time every 15 seconds if tab is active
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        setStudyState((prev) => {
          const updated: UserStudyState = {
            ...prev,
            totalStudyTimeSeconds: prev.totalStudyTimeSeconds + 15,
            topicStudyTimeSeconds: {
              ...prev.topicStudyTimeSeconds,
              [currentTopic.id]: (prev.topicStudyTimeSeconds[currentTopic.id] || 0) + 15,
            },
          };
          saveUserStudyState(updated);
          return updated;
        });
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [currentTopic.id]);

  // Compute revision counts for sidebar badge & diagnostics
  const understandingMetrics = calculateAllUnderstanding(
    studyState.mcqAttempts,
    studyState.partBSubmissions
  );
  const revisionAlertsCount =
    understandingMetrics.revisionRecommendedTopicIds.length + studyState.bookmarkedTopics.length;

  // Global navigation router
  const handleNavigate = (tab: NavTabId, options?: { subjectId?: SubjectId; topicId?: string }) => {
    if (options?.topicId) {
      const target = getTopicById(options.topicId);
      if (target) {
        setCurrentTopic(target);
      }
    }
    if (options?.subjectId) {
      setMcqInitialSubject(options.subjectId);
    }
    if (options?.topicId) {
      setMcqInitialTopicId(options.topicId);
    } else {
      setMcqInitialTopicId(undefined);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTopicToLearn = (topic: Topic) => {
    setCurrentTopic(topic);
    setActiveTab('learn');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = (topicId: string) => {
    const { state } = toggleTopicBookmark(topicId);
    setStudyState({ ...state });
  };

  const handleToggleCompletion = (topicId: string, difficulty: DifficultyLevel) => {
    const updated = markTopicCompleted(topicId, difficulty);
    setStudyState({ ...updated });
  };

  const handleRecordStudyTime = (topicId: string, seconds: number) => {
    const updated = recordStudyTime(topicId, seconds);
    setStudyState({ ...updated });
  };

  const handleSaveMcqAttempt = (attempt: MCQTestAttempt) => {
    const updated = saveMcqAttempt(attempt);
    setStudyState({ ...updated });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased selection:bg-indigo-500/20 selection:text-indigo-400 transition-colors">
      {/* Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        totalStudyTimeSeconds={studyState.totalStudyTimeSeconds}
        bookmarkedCount={studyState.bookmarkedTopics.length}
        onSelectTopic={handleSelectTopicToLearn}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        isMobileOpen={isMobileMenuOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Persistent Desktop Sidebar & Mobile Drawer */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          isMobileOpen={isMobileMenuOpen}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
          revisionCount={revisionAlertsCount}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-full">
          {activeTab === 'dashboard' && (
            <DashboardView
              studyState={studyState}
              topicMetrics={understandingMetrics.topicMetrics}
              subjectSummaries={understandingMetrics.subjectSummaries}
              overallUnderstandingScore={understandingMetrics.overallScore}
              overallCategory={understandingMetrics.overallCategory}
              onNavigate={handleNavigate}
              onSelectTopicToLearn={handleSelectTopicToLearn}
            />
          )}

          {activeTab === 'subjects' && (
            <SubjectsView
              studyState={studyState}
              onSelectTopic={handleSelectTopicToLearn}
              onNavigate={handleNavigate}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {activeTab === 'learn' && (
            <LearnView
              currentTopic={currentTopic}
              onSelectTopic={setCurrentTopic}
              studyState={studyState}
              onToggleCompletion={handleToggleCompletion}
              onToggleBookmark={handleToggleBookmark}
              onRecordStudyTime={handleRecordStudyTime}
              onNavigate={handleNavigate}
            />
          )}

          {activeTab === 'mcq' && (
            <McqPracticeView
              initialSubjectId={mcqInitialSubject}
              initialTopicId={mcqInitialTopicId}
              onSaveAttempt={handleSaveMcqAttempt}
              onNavigate={handleNavigate}
              onSelectTopicToLearn={handleSelectTopicToLearn}
            />
          )}

          {activeTab === 'partb' && (
            <PartBEvaluationView
              studyState={studyState}
              onUpdateStudyState={setStudyState}
              onNavigateToTopic={(subId, unitId, topicId) => {
                const t = getTopicById(topicId);
                if (t) handleSelectTopicToLearn(t);
              }}
              onNavigateToMcq={(subId, topicId) => {
                handleNavigate('mcq', { subjectId: subId, topicId });
              }}
              initialQuestionId={partBInitialQuestionId}
            />
          )}

          {activeTab === 'understanding' && (
            <UnderstandingView
              studyState={studyState}
              onNavigateToTopic={(subId, unitId, topicId) => {
                const t = getTopicById(topicId);
                if (t) handleSelectTopicToLearn(t);
              }}
              onNavigateToMcq={(subId, topicId) => {
                handleNavigate('mcq', { subjectId: subId, topicId });
              }}
              onNavigateToPartB={(qId) => {
                setPartBInitialQuestionId(qId);
                setActiveTab('partb');
              }}
            />
          )}

          {activeTab === 'revision' && (
            <RevisionView
              studyState={studyState}
              onNavigateToTopic={(subId, unitId, topicId) => {
                const t = getTopicById(topicId);
                if (t) handleSelectTopicToLearn(t);
              }}
              onNavigateToMcq={(subId, topicId) => {
                handleNavigate('mcq', { subjectId: subId, topicId });
              }}
              onNavigateToPartB={(qId) => {
                setPartBInitialQuestionId(qId);
                setActiveTab('partb');
              }}
            />
          )}

          {activeTab === 'history' && (
            <PerformanceHistoryView
              studyState={studyState}
              onNavigateToMcq={() => handleNavigate('mcq')}
              onNavigateToPartB={() => handleNavigate('partb')}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsView
              studyState={studyState}
              onUpdateStudyState={setStudyState}
            />
          )}
        </main>
      </div>
    </div>
  );
}
