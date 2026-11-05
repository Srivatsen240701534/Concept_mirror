import { PartBQuestion, SubjectId } from '../../types';
import { CN_PART_B } from './cnPartB';
import { AI_PART_B } from './aiPartB';
import { TOC_PART_B } from './tocPartB';
import { MC_PART_B } from './mcPartB';
import { GK_PART_B } from './gkPartB';

export const ALL_PART_B_QUESTIONS: PartBQuestion[] = [
  ...CN_PART_B,
  ...AI_PART_B,
  ...TOC_PART_B,
  ...MC_PART_B,
  ...GK_PART_B,
];

export function getPartBBySubject(subjectId: SubjectId): PartBQuestion[] {
  return ALL_PART_B_QUESTIONS.filter((q) => q.subjectId === subjectId);
}

export function getPartBById(questionId: string): PartBQuestion | undefined {
  return ALL_PART_B_QUESTIONS.find((q) => q.id === questionId);
}

export function getPartBStats() {
  return {
    total: ALL_PART_B_QUESTIONS.length,
    cn: CN_PART_B.length,
    ai: AI_PART_B.length,
    toc: TOC_PART_B.length,
    mc: MC_PART_B.length,
    gk: GK_PART_B.length,
  };
}
