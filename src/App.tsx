import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Sidebar, NavTabId } from './components/layout/Sidebar';
import { OverviewView } from './components/views/OverviewView';
import { LearnTopicView } from './components/views/LearnTopicView';
import { AiExaminer } from './components/views/AiExaminer';
import { ExamResultsView } from './components/views/ExamResultsView';
import { MisconceptionAnalysisView } from './components/views/MisconceptionAnalysisView';
import { KnowledgeMapView } from './components/views/KnowledgeMapView';
import { RevisionPlannerView } from './components/views/RevisionPlannerView';
import { LearningHistoryView } from './components/views/LearningHistoryView';
import { SettingsView } from './components/views/SettingsView';
import { AboutProjectModal } from './components/views/AboutProjectModal';
import { DemoLibraryView } from './components/views/DemoLibraryView';
import {
  clearAllStorageData,
  getLearningHistory,
  initializeStorageIfNeeded,
  rescheduleRevisionTask,
  resolveMisconception,
  savePreferences,
  saveSession,
  saveTopic,
  seedDemoData,
  toggleRevisionTask,
} from './utils/storage';
import {
  DemoDataset,
  ExamSession,
  LearningTopic,
  MasteryRecord,
  Misconception,
  RevisionTask,
  UserPreferences,
} from './types';
import { checkServerHealth, demoDatasetToLearningTopic } from './services/api';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTabId>('overview');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState<boolean>(false);

  // Stored state
  const [preferences, setPreferences] = useState<UserPreferences>({
    aiMode: 'live',
    defaultSubject: 'Computer Science',
    defaultDifficulty: 'Intermediate',
    defaultQuestionCount: 5,
    defaultExplanationStyle: 'Detailed',
    soundEnabled: true,
  });
  const [topics, setTopics] = useState<LearningTopic[]>([]);
  const [sessions, setSessions] = useState<ExamSession[]>([]);
  const [masteryMap, setMasteryMap] = useState<Record<string, MasteryRecord>>({});
  const [misconceptions, setMisconceptions] = useState<Misconception[]>([]);
  const [revisionTasks, setRevisionTasks] = useState<RevisionTask[]>([]);
  const [serverHasKey, setServerHasKey] = useState<boolean>(false);

  // Active examination state
  const [activeExamConfig, setActiveExamConfig] = useState<{
    topic: string;
    subject: string;
  }>({
    topic: '',
    subject: '',
  });
  const [viewingResultSession, setViewingResultSession] = useState<ExamSession | null>(null);

  // Load storage data on mount and on mode change
  const reloadDataFromStorage = (targetMode?: 'live' | 'demo') => {
    initializeStorageIfNeeded();
    const data = getLearningHistory(targetMode);
    setPreferences(data.preferences);
    setTopics(data.topicsStudied);
    setSessions(data.sessions);
    setMasteryMap(data.masteryMap);
    setMisconceptions(data.misconceptions);
    setRevisionTasks(data.revisionTasks);
  };

  useEffect(() => {
    reloadDataFromStorage();
    checkServerHealth().then((res) => {
      setServerHasKey(res.hasGeminiKey);
      if (res.hasGeminiKey) {
        // If Gemini is available on server, default to live mode
        setPreferences((prev) => ({ ...prev, aiMode: 'live' }));
      }
    });
  }, []);

  const handleUpdatePreferences = (partial: Partial<UserPreferences>) => {
    const updated = savePreferences(partial);
    setPreferences(updated);
    if (partial.aiMode) {
      reloadDataFromStorage(partial.aiMode);
    }
  };

  const handleSaveTopic = (topic: LearningTopic) => {
    saveTopic(topic, preferences.aiMode);
    reloadDataFromStorage();
  };

  const handleFinishExam = (session: ExamSession) => {
    saveSession(session, preferences.aiMode);
    reloadDataFromStorage();
    setViewingResultSession(session);
  };

  const handleStartExamWithTopic = (topic: string, subject: string) => {
    setActiveExamConfig({ topic, subject });
    setViewingResultSession(null);
    setActiveTab('examiner');
  };

  const handleSelectDatasetForExam = (dataset: any) => {
    const topic = dataset.title || dataset.topic || 'Untitled Topic';
    setActiveExamConfig({ topic, subject: dataset.subject || 'General' });
    setViewingResultSession(null);
    setActiveTab('examiner');
  };

  const handleSelectDatasetForLearn = (dataset: any) => {
    const topic = dataset.title || dataset.topic || 'Untitled Topic';
    const topicObj = demoDatasetToLearningTopic(dataset);
    saveTopic(topicObj, 'demo');
    reloadDataFromStorage();
    setActiveExamConfig({ topic, subject: dataset.subject || 'General' });
    setActiveTab('learn');
  };

  const handleToggleRevisionTask = (id: string) => {
    toggleRevisionTask(id, preferences.aiMode);
    reloadDataFromStorage();
  };

  const handleRescheduleRevisionTask = (id: string, days: number) => {
    rescheduleRevisionTask(id, days, preferences.aiMode);
    reloadDataFromStorage();
  };

  const handleResolveMisconception = (id: string) => {
    resolveMisconception(id, preferences.aiMode);
    reloadDataFromStorage();
  };

  const handleSeedDemo = () => {
    seedDemoData();
    reloadDataFromStorage('demo');
  };

  const handleClearAllData = () => {
    clearAllStorageData();
    reloadDataFromStorage();
  };

  const activeMisconceptionsCount = misconceptions.filter((m) => !m.isResolved).length;
  const pendingRevisionTasksCount = revisionTasks.filter((t) => !t.isCompleted).length;

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navbar */}
      <Navbar
        preferences={preferences}
        onUpdatePreferences={handleUpdatePreferences}
        serverHasKey={serverHasKey}
        onOpenAbout={() => setIsAboutModalOpen(true)}
        onResetData={handleSeedDemo}
        onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
        activeTab={activeTab}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Collapsible Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={(tab) => {
            setActiveTab(tab);
            setViewingResultSession(null);
          }}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          misconceptionsCount={activeMisconceptionsCount}
          revisionTasksCount={pendingRevisionTasksCount}
          isDemoMode={preferences.aiMode === 'demo'}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto">
          {/* If viewing completed examination result */}
          {viewingResultSession ? (
            <ExamResultsView
              session={viewingResultSession}
              onNavigate={(tab) => {
                setViewingResultSession(null);
                setActiveTab(tab);
              }}
              onRetakeExam={() => {
                setViewingResultSession(null);
                setActiveTab('examiner');
              }}
            />
          ) : activeTab === 'overview' ? (
            <OverviewView
              topics={topics}
              sessions={sessions}
              masteryMap={masteryMap}
              misconceptions={misconceptions}
              revisionTasks={revisionTasks}
              onNavigate={setActiveTab}
              onStartExamWithTopic={handleStartExamWithTopic}
              isDemoMode={preferences.aiMode === 'demo'}
              onSeedDemo={handleSeedDemo}
            />
          ) : activeTab === 'learn' ? (
            <LearnTopicView
              onStartExamWithTopic={handleStartExamWithTopic}
              onSaveTopic={handleSaveTopic}
              savedTopics={topics}
              isDemoMode={preferences.aiMode === 'demo'}
            />
          ) : activeTab === 'examiner' ? (
            <AiExaminer
              initialTopic={activeExamConfig.topic}
              initialSubject={activeExamConfig.subject}
              onFinishExam={handleFinishExam}
              isDemoMode={preferences.aiMode === 'demo'}
            />
          ) : activeTab === 'demo_library' ? (
            <DemoLibraryView
              onSelectDatasetForExam={handleSelectDatasetForExam}
              onSelectDatasetForLearn={handleSelectDatasetForLearn}
            />
          ) : activeTab === 'misconceptions' ? (
            <MisconceptionAnalysisView
              misconceptions={misconceptions}
              onResolveMisconception={handleResolveMisconception}
              onNavigate={setActiveTab}
            />
          ) : activeTab === 'knowledge_map' ? (
            <KnowledgeMapView
              masteryMap={masteryMap}
              onPracticeConcept={(name) => handleStartExamWithTopic(name, activeExamConfig.subject || 'General STEM')}
              onSeedDemo={handleSeedDemo}
            />
          ) : activeTab === 'revision' ? (
            <RevisionPlannerView
              revisionTasks={revisionTasks}
              onToggleTask={handleToggleRevisionTask}
              onRescheduleTask={handleRescheduleRevisionTask}
              onStartRevisionExam={(concept, topic) => handleStartExamWithTopic(topic, 'General STEM')}
            />
          ) : activeTab === 'history' ? (
            <LearningHistoryView
              sessions={sessions}
              topics={topics}
              onOpenSession={(sess) => setViewingResultSession(sess)}
            />
          ) : (
            <SettingsView
              preferences={preferences}
              onUpdatePreferences={handleUpdatePreferences}
              onSeedDemo={handleSeedDemo}
              onClearAllData={handleClearAllData}
            />
          )}
        </main>
      </div>

      {/* About / Faculty Presentation Modal */}
      <AboutProjectModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onLaunchDemoExam={() => {
          handleStartExamWithTopic('TCP Congestion Control', 'Computer Networks');
        }}
      />
    </div>
  );
}
