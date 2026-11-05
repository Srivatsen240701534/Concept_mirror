// scripts/generator.js
// Automated generator for ConceptMirror AI curriculum, MCQs (750), and Part B (50) datasets
import fs from 'fs';
import path from 'path';

const outTopicsDir = path.resolve('src/data/curriculum/topics');
const outMcqDir = path.resolve('src/data/mcq');
const outPartBDir = path.resolve('src/data/partB');

fs.mkdirSync(outTopicsDir, { recursive: true });
fs.mkdirSync(outMcqDir, { recursive: true });
fs.mkdirSync(outPartBDir, { recursive: true });

console.log('Building full offline educational dataset...');
