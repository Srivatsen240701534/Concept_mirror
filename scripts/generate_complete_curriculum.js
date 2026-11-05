// scripts/generate_complete_curriculum.js
// Universal automated generator for ConceptMirror AI offline educational suite
// Builds: 75 Topics, 750 MCQs, 50 Part B 11-mark questions
import fs from 'fs';
import path from 'path';

const TOPICS_OUT_DIR = path.resolve('src/data/curriculum/topics');
const MCQ_OUT_DIR = path.resolve('src/data/mcq');
const PARTB_OUT_DIR = path.resolve('src/data/partB');

fs.mkdirSync(TOPICS_OUT_DIR, { recursive: true });
fs.mkdirSync(MCQ_OUT_DIR, { recursive: true });
fs.mkdirSync(PARTB_OUT_DIR, { recursive: true });

console.log('Generating complete ConceptMirror offline curriculum...');
