import { existsSync, readFileSync } from 'node:fs';

const required = [
  'docs/index.html',
  'docs/app/index.html',
  'docs/app/app.js',
  'docs/app/styles.css',
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
const examLabScript = readFileSync('docs/app/app.js', 'utf8');
if (!examLab.includes('29 taught topics') || !examLabScript.includes("[30, 'Spinal cord injury and regeneration'")) {
  throw new Error('Exam Lab lecture count/progress denominator regressed');
}
if (examLabScript.includes("[23,") || !examLabScript.includes("[24, 'Motor cortex")) {
  throw new Error('Exam Lab no longer preserves the official no-class lecture 23 slot');
}
if (!examLab.includes('4 of 8–10 long answers') || !examLab.includes('2026-08-24T10:00:00+08:00')) {
  throw new Error('Exam Lab official assessment facts regressed');
}
const questionRows = [...examLabScript.matchAll(/id: '([^']+)', lecture: (\d+), block: '([^']+)'/g)];
if (questionRows.length !== 36 || new Set(questionRows.map(match => match[1])).size !== questionRows.length) {
  throw new Error(`Exam Lab must contain 36 uniquely identified questions; found ${questionRows.length}`);
}
for (const [from, to, block] of [[1, 7, 'Test 1'], [8, 13, 'Test 2']]) {
  for (let lecture = from; lecture <= to; lecture += 1) {
    const count = questionRows.filter(match => Number(match[2]) === lecture && match[3] === block).length;
    if (count < 2) throw new Error(`Exam Lab needs at least two ${block} questions for Lecture ${lecture}`);
  }
}

// Parse literal question data so malformed options, answer keys and duplicate stems fail CI.
const questionsOpen = examLabScript.indexOf('const questions = [');
if (questionsOpen === -1) throw new Error('Could not locate the questions array in app.js');
const literalStart = examLabScript.indexOf('[', questionsOpen);
const literalEnd = examLabScript.indexOf('\n];', questionsOpen);
if (literalEnd === -1) throw new Error('Could not locate the end of the questions array');
let parsedQuestions;
try {
  parsedQuestions = Function(`"use strict"; return (${examLabScript.slice(literalStart, literalEnd + 2)});`)();
} catch (error) {
  throw new Error(`Questions array is not valid literal data: ${error.message}`);
}
if (!Array.isArray(parsedQuestions) || parsedQuestions.length !== 36) {
  throw new Error(`Expected 36 parsable question objects; found ${Array.isArray(parsedQuestions) ? parsedQuestions.length : 'a non-array'}`);
}
const seenStems = new Set();
for (const question of parsedQuestions) {
  const label = question && question.id ? question.id : '(missing id)';
  for (const field of ['id', 'topic', 'stem', 'explanation', 'trap']) {
    if (typeof question[field] !== 'string' || !question[field].trim()) throw new Error(`Question ${label} has an empty ${field}`);
  }
  if (!Array.isArray(question.options) || question.options.length !== 4) {
    throw new Error(`Question ${label} must have exactly four options; keyboard shortcuts 1-4 depend on it`);
  }
  if (question.options.some(option => typeof option !== 'string' || !option.trim())) {
    throw new Error(`Question ${label} has an empty option`);
  }
  if (new Set(question.options.map(option => option.trim())).size !== question.options.length) {
    throw new Error(`Question ${label} has duplicate options`);
  }
  if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.options.length) {
    throw new Error(`Question ${label} has an out-of-range answer index (${question.answer})`);
  }
  const stemKey = question.stem.trim().toLowerCase();
  if (seenStems.has(stemKey)) throw new Error(`Duplicate question stem detected: ${question.stem}`);
  seenStems.add(stemKey);
}

const cardsOpen = examLabScript.indexOf('const cards = [');
const cardsStart = examLabScript.indexOf('[', cardsOpen);
const cardsEnd = examLabScript.indexOf('\n];', cardsOpen);
if (cardsOpen === -1 || cardsEnd === -1) throw new Error('Could not locate the flashcard array in app.js');
const parsedCards = Function(`"use strict"; return (${examLabScript.slice(cardsStart, cardsEnd + 2)});`)();
if (!Array.isArray(parsedCards) || parsedCards.length !== 29) {
  throw new Error(`Expected 29 mechanism cards; found ${Array.isArray(parsedCards) ? parsedCards.length : 'a non-array'}`);
}
const cardFronts = new Set();
for (const [index, card] of parsedCards.entries()) {
  if (!Array.isArray(card) || card.length !== 2 || card.some(side => typeof side !== 'string' || !side.trim())) {
    throw new Error(`Flashcard ${index + 1} must contain a non-empty front and back`);
  }
  const frontKey = card[0].trim().toLowerCase();
  if (cardFronts.has(frontKey)) throw new Error(`Duplicate flashcard front detected: ${card[0]}`);
  cardFronts.add(frontKey);
}
if (!examLabScript.includes('button.dataset.index = String(originalIndex)') ||
    !examLabScript.includes('const optionIndex = Number(button.dataset.index)')) {
  throw new Error('Shuffled MCQ options no longer preserve their original answer-key mapping');
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
