import { existsSync, readFileSync } from 'node:fs';

const required = [
  'docs/index.html',
  'docs/app/index.html',
  'docs/seminar/index.html',
  'docs/apps.json',
  'docs/resources/NEUR3301_Study_Playbook_2026.md',
  'docs/resources/NEUR3301_Glia1_Flashcards.csv'
];

for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing required file: ${file}`);
}

const apps = JSON.parse(readFileSync('docs/apps.json', 'utf8'));
if (!Array.isArray(apps) || apps.length < 4) {
  throw new Error('docs/apps.json must register at least four tools/resources');
}

for (const app of apps) {
  if (!app.name || !app.url || !app.description) {
    throw new Error(`Invalid app registry entry: ${JSON.stringify(app)}`);
  }
}

for (const file of ['docs/index.html', 'docs/app/index.html', 'docs/seminar/index.html']) {
  const html = readFileSync(file, 'utf8');
  if (!/<!doctype html>/i.test(html)) throw new Error(`${file}: missing doctype`);
  if (!html.includes('</html>')) throw new Error(`${file}: missing closing html tag`);
  if (/localhost:\d+|port\/5000\/api\/progress/.test(html)) {
    throw new Error(`${file}: contains a broken local/backend dependency`);
  }
}

const flashcards = readFileSync('docs/resources/NEUR3301_Glia1_Flashcards.csv', 'utf8');
if (flashcards.trim().split(/\r?\n/).length < 15) {
  throw new Error('Corrected Glia I deck is unexpectedly small');
}

console.log(`Validated ${required.length} required files and ${apps.length} registry entries.`);