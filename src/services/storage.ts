// src/services/storage.ts
// LocalStorage Manager for ConceptMirror AI Offline Educational Platform
// Never fabricates student progress; guarantees persistent offline state.

import {
  DifficultyLevel,
  MCQTestAttempt,
  PartBEvaluationResult,
  SubjectId,
  UserStudyState,
} from '../types';

const STORAGE_KEY = 'conceptmirror_offline_v1';

const DEFAULT_STATE: UserStudyState = {
  completedTopics: {},
  bookmarkedTopics: [],
  mcqAttempts: [],
  partBSubmissions: [],
  topicStudyTimeSeconds: {},
  totalStudyTimeSeconds: 0,
  lastActiveTopic: null,
};

export function loadUserStudyState(): UserStudyState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return DEFAULT_STATE;
    }
    const parsed = JSON.parse(raw);
    return {
      completedTopics: parsed.completedTopics || {},
      bookmarkedTopics: Array.isArray(parsed.bookmarkedTopics) ? parsed.bookmarkedTopics : [],
      mcqAttempts: Array.isArray(parsed.mcqAttempts) ? parsed.mcqAttempts : [],
      partBSubmissions: Array.isArray(parsed.partBSubmissions) ? parsed.partBSubmissions : [],
      topicStudyTimeSeconds: parsed.topicStudyTimeSeconds || {},
      totalStudyTimeSeconds: typeof parsed.totalStudyTimeSeconds === 'number' ? parsed.totalStudyTimeSeconds : 0,
      lastActiveTopic: parsed.lastActiveTopic || null,
    };
  } catch (err) {
    console.error('Failed to parse study state from localStorage:', err);
    return DEFAULT_STATE;
  }
}

export function saveUserStudyState(state: UserStudyState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save study state to localStorage:', err);
  }
}

export function markTopicCompleted(
  topicId: string,
  difficulty: DifficultyLevel = 'intermediate'
): UserStudyState {
  const state = loadUserStudyState();
  state.completedTopics[topicId] = {
    completedAt: new Date().toISOString(),
    difficulty,
  };
  saveUserStudyState(state);
  return state;
}

export function toggleTopicBookmark(topicId: string): { state: UserStudyState; isBookmarked: boolean } {
  const state = loadUserStudyState();
  const index = state.bookmarkedTopics.indexOf(topicId);
  let isBookmarked = false;
  if (index >= 0) {
    state.bookmarkedTopics.splice(index, 1);
    isBookmarked = false;
  } else {
    state.bookmarkedTopics.push(topicId);
    isBookmarked = true;
  }
  saveUserStudyState(state);
  return { state, isBookmarked };
}

export function saveMcqAttempt(attempt: MCQTestAttempt): UserStudyState {
  const state = loadUserStudyState();
  state.mcqAttempts.unshift(attempt); // newest first
  // add study time
  state.totalStudyTimeSeconds += attempt.timeSpentSeconds;
  if (attempt.topicId) {
    state.topicStudyTimeSeconds[attempt.topicId] =
      (state.topicStudyTimeSeconds[attempt.topicId] || 0) + attempt.timeSpentSeconds;
  }
  saveUserStudyState(state);
  return state;
}

export function savePartBSubmission(submission: PartBEvaluationResult): UserStudyState {
  const state = loadUserStudyState();
  state.partBSubmissions.unshift(submission); // newest first
  state.totalStudyTimeSeconds += submission.timeTakenSeconds;
  state.topicStudyTimeSeconds[submission.topicId] =
    (state.topicStudyTimeSeconds[submission.topicId] || 0) + submission.timeTakenSeconds;
  saveUserStudyState(state);
  return state;
}

export function recordStudyTime(topicId: string, seconds: number): UserStudyState {
  const state = loadUserStudyState();
  state.totalStudyTimeSeconds += seconds;
  state.topicStudyTimeSeconds[topicId] =
    (state.topicStudyTimeSeconds[topicId] || 0) + seconds;
  saveUserStudyState(state);
  return state;
}

export function setLastActiveTopic(
  subjectId: SubjectId,
  unitId: string,
  topicId: string
): UserStudyState {
  const state = loadUserStudyState();
  state.lastActiveTopic = { subjectId, unitId, topicId };
  saveUserStudyState(state);
  return state;
}

export function exportProgressJson(): string {
  const state = loadUserStudyState();
  const exportPayload = {
    app: 'ConceptMirror AI',
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    data: state,
  };
  return JSON.stringify(exportPayload, null, 2);
}

export function importProgressJson(jsonString: string): { success: boolean; message: string; state?: UserStudyState } {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || !parsed.data) {
      return { success: false, message: 'Invalid JSON backup format: missing root "data" object.' };
    }
    const incoming = parsed.data;
    const validatedState: UserStudyState = {
      completedTopics: incoming.completedTopics || {},
      bookmarkedTopics: Array.isArray(incoming.bookmarkedTopics) ? incoming.bookmarkedTopics : [],
      mcqAttempts: Array.isArray(incoming.mcqAttempts) ? incoming.mcqAttempts : [],
      partBSubmissions: Array.isArray(incoming.partBSubmissions) ? incoming.partBSubmissions : [],
      topicStudyTimeSeconds: incoming.topicStudyTimeSeconds || {},
      totalStudyTimeSeconds: typeof incoming.totalStudyTimeSeconds === 'number' ? incoming.totalStudyTimeSeconds : 0,
      lastActiveTopic: incoming.lastActiveTopic || null,
    };
    saveUserStudyState(validatedState);
    return { success: true, message: 'Progress successfully restored from backup!', state: validatedState };
  } catch (err: any) {
    return { success: false, message: `Import failed: ${err.message || 'Corrupted JSON file.'}` };
  }
}

export function resetAllStorageData(): UserStudyState {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Error clearing storage:', err);
  }
  return DEFAULT_STATE;
}
