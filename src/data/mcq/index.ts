import { MCQuestion, SubjectId } from '../../types';
import { CN_MCQS } from './cnMcq';
import { AI_MCQS } from './aiMcq';
import { TOC_MCQS } from './tocMcq';
import { MC_MCQS } from './mcMcq';
import { GK_MCQS } from './gkMcq';

export const ALL_MCQS: MCQuestion[] = [
  ...CN_MCQS,
  ...AI_MCQS,
  ...TOC_MCQS,
  ...MC_MCQS,
  ...GK_MCQS,
];

export function getMcqsBySubject(subjectId: SubjectId): MCQuestion[] {
  return ALL_MCQS.filter((q) => q.subjectId === subjectId);
}

export function getMcqsByUnit(unitId: string): MCQuestion[] {
  return ALL_MCQS.filter((q) => q.unitId === unitId);
}

export function getMcqsByTopic(topicId: string): MCQuestion[] {
  return ALL_MCQS.filter((q) => q.topicId === topicId);
}

export function getRandomMcqs(count: number, subjectId?: SubjectId): MCQuestion[] {
  const pool = subjectId ? getMcqsBySubject(subjectId) : ALL_MCQS;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getMcqStats() {
  return {
    total: ALL_MCQS.length,
    cn: CN_MCQS.length,
    ai: AI_MCQS.length,
    toc: TOC_MCQS.length,
    mc: MC_MCQS.length,
    gk: GK_MCQS.length,
  };
}
