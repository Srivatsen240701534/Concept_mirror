// scripts/build_full_database.js
// Generates all 75 Topics, 750 MCQs, and 50 Part B questions with exact 11-mark rubrics
import fs from 'fs';
import path from 'path';

console.log('Starting full offline educational curriculum generator...');

// Helper to escape strings in TS
function escapeStr(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');
}

// We will construct curriculum data for all 5 subjects:
// cn (Computer Networks), ai (Fundamentals of AI), toc (Theory of Computation), mc (Mobile Computing), gk (General Knowledge)
