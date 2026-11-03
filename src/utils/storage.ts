import {
  DEMO_COMPLETED_SESSION,
  DEMO_MASTERY_MAP,
  DEMO_PREFERENCES,
  DEMO_REVISION_TASKS,
  DEMO_SAMPLE_MISCONCEPTION,
  DEMO_TCP_TOPIC,
} from '../data/demoData';
import {
  ExamSession,
  LearningHistory,
  LearningTopic,
  MasteryLevel,
  MasteryRecord,
  Misconception,
  RevisionTask,
  UserPreferences,
} from '../types';

const STORAGE_KEYS = {
  PREFERENCES: 'conceptmirror_preferences',
  HAS_SEEDED_DEMO: 'conceptmirror_has_seeded_demo_v2',
  // Live keys
  LIVE_SESSIONS: 'conceptmirror_live_sessions',
  LIVE_TOPICS: 'conceptmirror_live_topics',
  LIVE_MISCONCEPTIONS: 'conceptmirror_live_misconceptions',
  LIVE_MASTERY: 'conceptmirror_live_mastery',
  LIVE_REVISION: 'conceptmirror_live_revision_tasks',
  // Demo keys
  DEMO_SESSIONS: 'conceptmirror_demo_sessions',
  DEMO_TOPICS: 'conceptmirror_demo_topics',
  DEMO_MISCONCEPTIONS: 'conceptmirror_demo_misconceptions',
  DEMO_MASTERY: 'conceptmirror_demo_mastery',
  DEMO_REVISION: 'conceptmirror_demo_revision_tasks',
};

function safeGetItem<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw) as T;
  } catch (err) {
    console.error(`Error reading ${key} from localStorage:`, err);
    return defaultValue;
  }
}

function safeSetItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error writing ${key} to localStorage:`, err);
  }
}

export function getCurrentStorageMode(): 'live' | 'demo' {
  const prefs = getPreferences();
  return prefs.aiMode === 'live' ? 'live' : 'demo';
}

function getKeyForMode(entity: 'sessions' | 'topics' | 'misconceptions' | 'mastery' | 'revision', mode?: 'live' | 'demo'): string {
  const activeMode = mode || getCurrentStorageMode();
  if (activeMode === 'live') {
    switch (entity) {
      case 'sessions': return STORAGE_KEYS.LIVE_SESSIONS;
      case 'topics': return STORAGE_KEYS.LIVE_TOPICS;
      case 'misconceptions': return STORAGE_KEYS.LIVE_MISCONCEPTIONS;
      case 'mastery': return STORAGE_KEYS.LIVE_MASTERY;
      case 'revision': return STORAGE_KEYS.LIVE_REVISION;
    }
  } else {
    switch (entity) {
      case 'sessions': return STORAGE_KEYS.DEMO_SESSIONS;
      case 'topics': return STORAGE_KEYS.DEMO_TOPICS;
      case 'misconceptions': return STORAGE_KEYS.DEMO_MISCONCEPTIONS;
      case 'mastery': return STORAGE_KEYS.DEMO_MASTERY;
      case 'revision': return STORAGE_KEYS.DEMO_REVISION;
    }
  }
}

export function initializeStorageIfNeeded(): void {
  try {
    const hasSeeded = localStorage.getItem(STORAGE_KEYS.HAS_SEEDED_DEMO);
    if (!hasSeeded) {
      // Seed initial demo data in DEMO storage partition
      safeSetItem(STORAGE_KEYS.DEMO_TOPICS, [DEMO_TCP_TOPIC]);
      safeSetItem(STORAGE_KEYS.DEMO_SESSIONS, [DEMO_COMPLETED_SESSION]);
      safeSetItem(STORAGE_KEYS.DEMO_MISCONCEPTIONS, [DEMO_SAMPLE_MISCONCEPTION]);
      safeSetItem(STORAGE_KEYS.DEMO_MASTERY, DEMO_MASTERY_MAP);
      safeSetItem(STORAGE_KEYS.DEMO_REVISION, DEMO_REVISION_TASKS);

      // Live partition starts pristine
      if (!localStorage.getItem(STORAGE_KEYS.LIVE_SESSIONS)) {
        safeSetItem(STORAGE_KEYS.LIVE_SESSIONS, []);
        safeSetItem(STORAGE_KEYS.LIVE_TOPICS, []);
        safeSetItem(STORAGE_KEYS.LIVE_MISCONCEPTIONS, []);
        safeSetItem(STORAGE_KEYS.LIVE_MASTERY, {});
        safeSetItem(STORAGE_KEYS.LIVE_REVISION, []);
      }

      localStorage.setItem(STORAGE_KEYS.HAS_SEEDED_DEMO, 'true');
    }
  } catch (err) {
    console.error('Failed to initialize storage:', err);
  }
}

export function seedDemoData(): void {
  safeSetItem(STORAGE_KEYS.DEMO_TOPICS, [DEMO_TCP_TOPIC]);
  safeSetItem(STORAGE_KEYS.DEMO_SESSIONS, [DEMO_COMPLETED_SESSION]);
  safeSetItem(STORAGE_KEYS.DEMO_MISCONCEPTIONS, [DEMO_SAMPLE_MISCONCEPTION]);
  safeSetItem(STORAGE_KEYS.DEMO_MASTERY, DEMO_MASTERY_MAP);
  safeSetItem(STORAGE_KEYS.DEMO_REVISION, DEMO_REVISION_TASKS);
}

export function clearAllStorageData(): void {
  try {
    Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
  } catch (err) {
    console.error('Error clearing localStorage:', err);
  }
}

export function getPreferences(): UserPreferences {
  return safeGetItem<UserPreferences>(STORAGE_KEYS.PREFERENCES, DEMO_PREFERENCES);
}

export function savePreferences(prefs: Partial<UserPreferences>): UserPreferences {
  const current = getPreferences();
  const updated = { ...current, ...prefs };
  safeSetItem(STORAGE_KEYS.PREFERENCES, updated);
  return updated;
}

export function getTopics(mode?: 'live' | 'demo'): LearningTopic[] {
  const key = getKeyForMode('topics', mode);
  return safeGetItem<LearningTopic[]>(key, []);
}

export function saveTopic(topic: LearningTopic, mode?: 'live' | 'demo'): void {
  const key = getKeyForMode('topics', mode ?? (topic.isDemo ? 'demo' : 'live'));
  const topics = safeGetItem<LearningTopic[]>(key, []);
  const existingIdx = topics.findIndex((t) => t.id === topic.id);
  if (existingIdx >= 0) {
    topics[existingIdx] = topic;
  } else {
    topics.unshift(topic);
  }
  safeSetItem(key, topics);
}

export function getSessions(mode?: 'live' | 'demo'): ExamSession[] {
  const key = getKeyForMode('sessions', mode);
  return safeGetItem<ExamSession[]>(key, []);
}

export function saveSession(session: ExamSession, mode?: 'live' | 'demo'): void {
  const activeMode = mode ?? (session.mode === 'demo' ? 'demo' : 'live');
  const key = getKeyForMode('sessions', activeMode);
  const sessions = safeGetItem<ExamSession[]>(key, []);
  const idx = sessions.findIndex((s) => s.id === session.id);
  if (idx >= 0) {
    sessions[idx] = session;
  } else {
    sessions.unshift(session);
  }
  safeSetItem(key, sessions);

  // If completed, update mastery records and tasks automatically
  if (session.isCompleted) {
    updateMasteryFromSession(session, activeMode);
  }
}

export function getSessionById(id: string, mode?: 'live' | 'demo'): ExamSession | undefined {
  const sessions = getSessions(mode);
  const found = sessions.find((s) => s.id === id);
  if (found) return found;
  // If not found in specified mode, check other partition
  const otherMode = (mode || getCurrentStorageMode()) === 'live' ? 'demo' : 'live';
  return getSessions(otherMode).find((s) => s.id === id);
}

export function getMisconceptions(mode?: 'live' | 'demo'): Misconception[] {
  const key = getKeyForMode('misconceptions', mode);
  return safeGetItem<Misconception[]>(key, []);
}

export function saveMisconception(misc: Misconception, mode?: 'live' | 'demo'): void {
  const key = getKeyForMode('misconceptions', mode);
  const list = safeGetItem<Misconception[]>(key, []);
  const idx = list.findIndex((m) => m.id === misc.id);
  if (idx >= 0) {
    list[idx] = misc;
  } else {
    list.unshift(misc);
  }
  safeSetItem(key, list);
}

export function resolveMisconception(id: string, mode?: 'live' | 'demo'): void {
  const activeMode = mode || getCurrentStorageMode();
  const key = getKeyForMode('misconceptions', activeMode);
  const list = safeGetItem<Misconception[]>(key, []);
  const item = list.find((m) => m.id === id);
  if (item) {
    item.isResolved = true;
    item.resolvedDate = new Date().toISOString();
    safeSetItem(key, list);

    // Also update associated mastery record if present
    const masteryKey = getKeyForMode('mastery', activeMode);
    const mastery = safeGetItem<Record<string, MasteryRecord>>(masteryKey, {});
    if (mastery[item.conceptName]) {
      const rec = mastery[item.conceptName];
      rec.score = Math.min(100, rec.score + 25);
      if (rec.score >= 80) rec.level = 'Mastered';
      else if (rec.score >= 55) rec.level = 'Developing';
      safeSetItem(masteryKey, mastery);
    }
  }
}

export function getMasteryMap(mode?: 'live' | 'demo'): Record<string, MasteryRecord> {
  const key = getKeyForMode('mastery', mode);
  return safeGetItem<Record<string, MasteryRecord>>(key, {});
}

export function updateMasteryFromSession(session: ExamSession, mode?: 'live' | 'demo'): void {
  const activeMode = mode ?? (session.mode === 'demo' ? 'demo' : 'live');
  const masteryKey = getKeyForMode('mastery', activeMode);
  const mastery = safeGetItem<Record<string, MasteryRecord>>(masteryKey, {});
  const now = new Date().toISOString();

  session.answers.forEach((ans) => {
    const q = session.questions.find((question) => question.id === ans.questionId);
    if (!q) return;

    const conceptName = q.conceptTargeted;
    const score = ans.evaluation.score;
    const existing = mastery[conceptName];

    let newAnswersCount = 1;
    let newCorrectCount = score >= 75 ? 1 : 0;
    let newScore = score;

    if (existing) {
      newAnswersCount = existing.answersCount + 1;
      newCorrectCount = existing.correctCount + (score >= 75 ? 1 : 0);
      newScore = Math.round(existing.score * 0.4 + score * 0.6);
    }

    let level: MasteryLevel = 'Developing';
    if (newScore >= 80) level = 'Mastered';
    else if (newScore < 50) level = 'Needs Revision';

    mastery[conceptName] = {
      conceptId: existing?.conceptId || `c-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      conceptName,
      subject: session.subject,
      topicTitle: session.topicTitle,
      level,
      score: newScore,
      lastTested: now,
      answersCount: newAnswersCount,
      correctCount: newCorrectCount,
    };

    // If a misconception was detected, log to mode-specific misconceptions store
    if (ans.evaluation.verdict === 'misconception_detected' && ans.evaluation.detectedMisconception) {
      const miscInfo = ans.evaluation.detectedMisconception;
      const miscKey = getKeyForMode('misconceptions', activeMode);
      const miscList = safeGetItem<Misconception[]>(miscKey, []);
      const alreadyHas = miscList.some(
        (m) => m.conceptName === miscInfo.conceptName && !m.isResolved
      );
      if (!alreadyHas) {
        const newMisc: Misconception = {
          id: `misc-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          topicTitle: session.topicTitle,
          conceptName: miscInfo.conceptName,
          subject: session.subject,
          detectedDate: now,
          studentReasoning: ans.reasoningText || ans.studentResponse,
          whyIncorrect: miscInfo.studentMentalModel,
          correctExplanation: miscInfo.scientificCorrection,
          simpleAnalogy: miscInfo.concreteAnalogy,
          verificationChallenge: {
            question: `Verification check: ${miscInfo.followUpPrompt || 'Which statement accurately describes this concept?'}`,
            options: [
              miscInfo.scientificCorrection.slice(0, 80) + '...',
              miscInfo.studentMentalModel.slice(0, 80) + '...',
              'Neither of the above statements is scientifically accurate.',
              'The outcome depends purely on random variation.',
            ],
            correctIndex: 0,
            explanation: miscInfo.scientificCorrection,
          },
          isResolved: false,
          sessionId: session.id,
        };
        miscList.unshift(newMisc);
        safeSetItem(miscKey, miscList);

        // Add a high priority revision task
        addRevisionTask({
          id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          topicTitle: session.topicTitle,
          conceptName: miscInfo.conceptName,
          subject: session.subject,
          reasonForRevision: `Misconception detected: ${miscInfo.conceptName}`,
          recommendedActivity: `Review scientific correction and complete verification challenge.`,
          estimatedMinutes: 10,
          priority: 'High',
          scheduledDate: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 10),
          isCompleted: false,
        }, activeMode);
      }
    }
  });

  safeSetItem(masteryKey, mastery);
}

export function getRevisionTasks(mode?: 'live' | 'demo'): RevisionTask[] {
  const key = getKeyForMode('revision', mode);
  return safeGetItem<RevisionTask[]>(key, []);
}

export function addRevisionTask(task: RevisionTask, mode?: 'live' | 'demo'): void {
  const key = getKeyForMode('revision', mode);
  const list = safeGetItem<RevisionTask[]>(key, []);
  list.unshift(task);
  safeSetItem(key, list);
}

export function toggleRevisionTask(id: string, mode?: 'live' | 'demo'): void {
  const key = getKeyForMode('revision', mode);
  const list = safeGetItem<RevisionTask[]>(key, []);
  const task = list.find((t) => t.id === id);
  if (task) {
    task.isCompleted = !task.isCompleted;
    task.completedAt = task.isCompleted ? new Date().toISOString() : undefined;
    safeSetItem(key, list);
  }
}

export function rescheduleRevisionTask(id: string, daysAhead: number, mode?: 'live' | 'demo'): void {
  const key = getKeyForMode('revision', mode);
  const list = safeGetItem<RevisionTask[]>(key, []);
  const task = list.find((t) => t.id === id);
  if (task) {
    const target = new Date();
    target.setDate(target.getDate() + daysAhead);
    task.scheduledDate = target.toISOString().slice(0, 10);
    task.isCompleted = false;
    safeSetItem(key, list);
  }
}

export function getLearningHistory(mode?: 'live' | 'demo'): LearningHistory {
  const activeMode = mode || getCurrentStorageMode();
  return {
    sessions: getSessions(activeMode),
    topicsStudied: getTopics(activeMode),
    misconceptions: getMisconceptions(activeMode),
    masteryMap: getMasteryMap(activeMode),
    revisionTasks: getRevisionTasks(activeMode),
    preferences: getPreferences(),
  };
}

export function exportHistoryAsCSV(mode?: 'live' | 'demo'): string {
  const sessions = getSessions(mode);
  const rows: string[][] = [
    [
      'Session ID',
      'Topic',
      'Subject',
      'Difficulty',
      'Date',
      'Question #',
      'Concept',
      'Student Response',
      'Verdict',
      'Score',
      'Feedback',
    ],
  ];

  sessions.forEach((s) => {
    s.answers.forEach((ans) => {
      const q = s.questions.find((qu) => qu.id === ans.questionId);
      rows.push([
        s.id,
        `"${s.topicTitle.replace(/"/g, '""')}"`,
        `"${s.subject.replace(/"/g, '""')}"`,
        s.difficulty,
        s.startedAt,
        String(q?.questionNumber ?? ''),
        `"${(q?.conceptTargeted || '').replace(/"/g, '""')}"`,
        `"${ans.studentResponse.replace(/"/g, '""')}"`,
        ans.evaluation.verdict,
        String(ans.evaluation.score),
        `"${ans.evaluation.constructiveFeedback.replace(/"/g, '""')}"`,
      ]);
    });
  });

  return rows.map((r) => r.join(',')).join('\n');
}

export function downloadCSV(filename: string = 'conceptmirror-learning-history.csv', mode?: 'live' | 'demo'): void {
  const csvContent = exportHistoryAsCSV(mode);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
