import { Topic, SubjectId } from '../../../types';
import { CN_TOPICS } from './cnTopics';
import { AI_TOPICS } from './aiTopics';
import { TOC_TOPICS } from './tocTopics';
import { MC_TOPICS } from './mcTopics';
import { GK_TOPICS } from './gkTopics';

export const ALL_TOPICS: Topic[] = [
  ...CN_TOPICS,
  ...AI_TOPICS,
  ...TOC_TOPICS,
  ...MC_TOPICS,
  ...GK_TOPICS,
];

export function getTopicsBySubject(subjectId: SubjectId): Topic[] {
  return ALL_TOPICS.filter((t) => t.subjectId === subjectId);
}

export function getTopicsByUnit(unitId: string): Topic[] {
  return ALL_TOPICS.filter((t) => t.unitId === unitId);
}

export function getTopicById(topicId: string): Topic | undefined {
  return ALL_TOPICS.find((t) => t.id === topicId);
}

export function searchTopics(query: string): Topic[] {
  const q = query.toLowerCase().trim();
  if (!q) return ALL_TOPICS;
  return ALL_TOPICS.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q)) ||
      t.content.beginner.summary.toLowerCase().includes(q)
  );
}

export function getAdjacentTopics(topicId: string): { prev?: Topic; next?: Topic } {
  const index = ALL_TOPICS.findIndex((t) => t.id === topicId);
  if (index === -1) return {};
  return {
    prev: index > 0 ? ALL_TOPICS[index - 1] : undefined,
    next: index < ALL_TOPICS.length - 1 ? ALL_TOPICS[index + 1] : undefined,
  };
}
