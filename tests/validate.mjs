import { existsSync, readFileSync } from 'node:fs';

const required = [
  'docs/index.html',
  'docs/app/index.html',
  'docs/study-lab/index.html',
  'docs/study-lab/assets/index-BR7I-zAT.js',
  'docs/study-lab/assets/index-C3XRwkWz.css',
  'docs/study-lab/assets/synapse-enhance.js',
  'docs/seminar/index.html',
  'docs/apps.json',
  'docs/resources/NEUR3301_Study_Playbook_2026.md',
  'docs/resources/NEUR3301_Glia1_Flashcards.csv'
];

for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing required file: ${file}`);
}

const apps = JSON.parse(readFileSync('docs/apps.json', 'utf8'));
if (!Array.isArray(apps) || apps.length < 5) {
  throw new Error('docs/apps.json must register both Synapse builds, the full suite, seminar and playbook');
}

for (const app of apps) {
  if (!app.name || !app.url || !app.description || !Array.isArray(app.tags)) {
    throw new Error(`Invalid app registry entry: ${JSON.stringify(app)}`);
  }
}

for (const file of ['docs/index.html', 'docs/app/index.html', 'docs/study-lab/index.html', 'docs/seminar/index.html']) {
  const html = readFileSync(file, 'utf8');
  if (!/<!doctype html>/i.test(html)) throw new Error(`${file}: missing doctype`);
  if (!html.includes('</html>')) throw new Error(`${file}: missing closing html tag`);
  if (/localhost:\d+|port\/5000\/api\/progress/.test(html)) {
    throw new Error(`${file}: contains a broken local/backend dependency`);
  }
}

const examLab = readFileSync('docs/app/index.html', 'utf8');
if (!examLab.includes('29 content lectures') || examLab.includes('S.done.length/30')) {
  throw new Error('Exam Lab lecture count/progress denominator regressed');
}
if (!examLab.includes('if(num===23)num++')) {
  throw new Error('Exam Lab no longer preserves the official no-class lecture 23 slot');
}

const deepBundle = readFileSync('docs/study-lab/assets/index-BR7I-zAT.js', 'utf8');
if (!deepBundle.includes('synapse-neur3301-progress-v1') || deepBundle.includes('port/5000')) {
  throw new Error('Study Lab progress persistence is missing or regressed');
}

const flashcards = readFileSync('docs/resources/NEUR3301_Glia1_Flashcards.csv', 'utf8');
if (flashcards.trim().split(/\r?\n/).length < 15) {
  throw new Error('Corrected Glia I deck is unexpectedly small');
}

console.log(`Validated ${required.length} required files and ${apps.length} registry entries.`);
