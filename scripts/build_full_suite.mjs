// scripts/build_full_suite.mjs
import fs from 'fs';
import path from 'path';

import { cnSubject } from './data_cn.mjs';
import { aiSubject } from './data_ai.mjs';
import { tocSubject } from './data_toc.mjs';
import { mcSubject } from './data_mc.mjs';
import { gkSubject } from './data_gk.mjs';

const allSubjects = [cnSubject, aiSubject, tocSubject, mcSubject, gkSubject];

console.log('Building all curriculum files, 750 MCQs, and 50 Part B questions...');

// Function to generate the topic TypeScript file
function generateTopicFile(sub) {
  const topicsArray = [];
  sub.units.forEach((u) => {
    u.topics.forEach((t) => {
      const topicObj = {
        id: `${sub.id}-u${u.unitNumber}-t${t.topicNumber}`,
        subjectId: sub.id,
        unitId: `${sub.id}-u${u.unitNumber}`,
        unitNumber: u.unitNumber,
        unitTitle: u.unitTitle,
        topicNumber: t.topicNumber,
        title: t.title,
        objectives: t.objectives,
        keywords: t.keywords,
        content: {
          beginner: {
            summary: t.beginner?.summary || t.bTheory.slice(0, 150) + '...',
            theory: t.bTheory,
            definitions: t.terms.map(([term, def]) => ({ term, definition: def })),
            keyConcepts: t.concepts.map(([title, exp, ex]) => ({ title, explanation: exp, example: ex })),
            diagram: t.diagram,
            applications: t.apps,
            examImportantPoints: t.examPoints,
            quickRevisionNotes: t.notes,
          },
          intermediate: {
            summary: t.intermediate?.summary || t.iTheory.slice(0, 150) + '...',
            theory: t.iTheory,
            definitions: t.terms.map(([term, def]) => ({ term, definition: def })),
            keyConcepts: t.concepts.map(([title, exp, ex]) => ({ title, explanation: exp, example: ex })),
            diagram: t.diagram,
            applications: t.apps,
            examImportantPoints: t.examPoints,
            quickRevisionNotes: t.notes.slice(0, 3),
          },
          advanced: {
            summary: t.advanced?.summary || t.aTheory.slice(0, 150) + '...',
            theory: t.aTheory,
            definitions: t.terms.map(([term, def]) => ({ term, definition: def })),
            keyConcepts: t.concepts.map(([title, exp, ex]) => ({ title, explanation: exp, example: ex })),
            diagram: t.diagram,
            applications: t.apps,
            examImportantPoints: t.examPoints,
            quickRevisionNotes: t.notes.slice(1, 4),
          },
        },
      };
      topicsArray.push(topicObj);
    });
  });

  const code = `import { Topic } from '../../../types';\n\nexport const ${sub.id.toUpperCase()}_TOPICS: Topic[] = ${JSON.stringify(topicsArray, null, 2)};\n`;
  const filePath = path.resolve(`src/data/curriculum/topics/${sub.id}Topics.ts`);
  fs.writeFileSync(filePath, code, 'utf-8');
  console.log(`Saved ${sub.id.toUpperCase()}_TOPICS (${topicsArray.length} topics) to ${filePath}`);
  return topicsArray;
}

// Generate the 5 topic files
const allGeneratedTopics = allSubjects.map((s) => generateTopicFile(s)).flat();
console.log(`Total topics generated: ${allGeneratedTopics.length}`);

// Generate topics/index.ts
const indexTopicsCode = `import { Topic, SubjectId } from '../../../types';
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
`;
fs.writeFileSync(path.resolve('src/data/curriculum/topics/index.ts'), indexTopicsCode, 'utf-8');
console.log('Saved src/data/curriculum/topics/index.ts');
