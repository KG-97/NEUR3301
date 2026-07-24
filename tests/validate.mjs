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
  'docs/sw.js',
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
if (!examLab.includes('styles.css?v=4') || !examLab.includes('app.js?v=4')) {
  throw new Error('Exam Lab HTML and assets must share a cache-busting deployment version');
}
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

const answersOpen = examLabScript.indexOf('const answerPrompts = [');
const answersStart = examLabScript.indexOf('[', answersOpen);
const answersEnd = examLabScript.indexOf('\n];', answersOpen);
if (answersOpen === -1 || answersEnd === -1) throw new Error('Could not locate the long-answer prompt array in app.js');
const parsedAnswers = Function(`"use strict"; return (${examLabScript.slice(answersStart, answersEnd + 2)});`)();
if (!Array.isArray(parsedAnswers) || parsedAnswers.length !== 12) {
  throw new Error(`Expected 12 integrated long-answer prompts; found ${Array.isArray(parsedAnswers) ? parsedAnswers.length : 'a non-array'}`);
}
const answerIds = new Set();
const answerLectureCoverage = new Set();
for (const prompt of parsedAnswers) {
  if (!prompt || typeof prompt !== 'object' || answerIds.has(prompt.id)) throw new Error(`Invalid or duplicate long-answer prompt: ${prompt?.id}`);
  answerIds.add(prompt.id);
  for (const field of ['id', 'domain', 'question', 'thesis', 'experiment', 'limitation']) {
    if (typeof prompt[field] !== 'string' || !prompt[field].trim()) throw new Error(`Long-answer prompt ${prompt.id} has an empty ${field}`);
  }
  if (!Array.isArray(prompt.lectures) || !prompt.lectures.length || prompt.lectures.some(id => !Number.isInteger(id))) {
    throw new Error(`Long-answer prompt ${prompt.id} has invalid lecture coverage`);
  }
  prompt.lectures.forEach(id => answerLectureCoverage.add(id));
  if (!Array.isArray(prompt.points) || prompt.points.length !== 5 || prompt.points.some(point => typeof point !== 'string' || !point.trim())) {
    throw new Error(`Long-answer prompt ${prompt.id} must have exactly five blueprint points`);
  }
}
for (const id of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30]) {
  if (!answerLectureCoverage.has(id)) throw new Error(`Long-answer prompts do not cover taught Lecture ${id}`);
}
if (answerLectureCoverage.has(23)) throw new Error('Long-answer prompts incorrectly treat Lecture 23 as taught content');

if (!examLabScript.includes('button.dataset.index = String(originalIndex)') ||
    !examLabScript.includes('const optionIndex = Number(button.dataset.index)')) {
  throw new Error('Shuffled MCQ options no longer preserve their original answer-key mapping');
}
for (const control of ['id="again-card"', 'id="hard-card"', 'id="good-card"', 'id="card-due-stat"']) {
  if (!examLab.includes(control)) throw new Error(`Spaced-review control missing from Exam Lab: ${control}`);
}
for (const control of ['data-view="answers"', 'id="answer-draft"', 'id="answer-timer"', 'id="answer-stat"']) {
  if (!examLab.includes(control)) throw new Error(`Long Answer Lab control missing from Exam Lab: ${control}`);
}
for (const schedulerInvariant of [
  "const STORAGE_KEY = 'neur3301-exam-lab-v4'",
  "LEGACY_KEYS = ['neur3301-exam-lab-v3', 'neur3301-exam-lab-v2', 'neur3301-exam-lab-v1']",
  "new Date(now + 10 * MINUTE_MS)",
  "rateCard('hard')",
  "rateCard('good')"
]) {
  if (!examLabScript.includes(schedulerInvariant)) throw new Error(`Spaced-review scheduler regressed: ${schedulerInvariant}`);
}

const deepBundle = readFileSync('docs/study-lab/assets/index-BR7I-zAT.js', 'utf8');
if (!deepBundle.includes('synapse-neur3301-progress-v1') || deepBundle.includes('port/5000')) {
  throw new Error('Study Lab progress persistence is missing or regressed');
}

const serviceWorker = readFileSync('docs/sw.js', 'utf8');
const precacheOpen = serviceWorker.indexOf('const PRECACHE_URLS = [');
const precacheStart = serviceWorker.indexOf('[', precacheOpen);
const precacheEnd = serviceWorker.indexOf('];', precacheStart);
if (precacheOpen === -1 || precacheEnd === -1) throw new Error('Could not locate the service-worker precache list');
const precacheUrls = Function(`"use strict"; return (${serviceWorker.slice(precacheStart, precacheEnd + 1)});`)();
if (!Array.isArray(precacheUrls) || new Set(precacheUrls).size !== precacheUrls.length) {
  throw new Error('Service-worker precache URLs must be a unique literal array');
}
for (const url of precacheUrls) {
  if (typeof url !== 'string' || !url.startsWith('./')) throw new Error(`Invalid service-worker precache URL: ${url}`);
  const relativePath = url.slice(2).split('?')[0] || 'index.html';
  if (!existsSync(`docs/${relativePath}`)) throw new Error(`Service worker precaches a missing file: ${url}`);
}
const networkLookup = serviceWorker.indexOf('const networkResponse = await fetch(request)');
const cacheFallback = serviceWorker.indexOf('const cachedResponse = await caches.match(request)');
if (!/const CACHE_NAME = 'neur3301-offline-v\d+'/.test(serviceWorker) ||
    networkLookup === -1 || cacheFallback === -1 || networkLookup > cacheFallback) {
  throw new Error('Service worker must prefer matched current-deployment assets online and use cache only as fallback');
}

// Recover the compiled Study Lab's literal lecture dataset and keep public
// content totals aligned with what the live dashboard actually computes.
const deepDataMarker = deepBundle.match(/\b\w+=\[\{id:1,lecture:1,moduleId:/);
if (!deepDataMarker || deepDataMarker.index === undefined) {
  throw new Error('Could not locate the Study Lab lecture dataset');
}
const deepDataStart = deepBundle.indexOf('[', deepDataMarker.index);
let deepDataEnd = -1;
let bracketDepth = 0;
let quote = null;
let escaped = false;
for (let index = deepDataStart; index < deepBundle.length; index += 1) {
  const character = deepBundle[index];
  if (quote) {
    if (escaped) escaped = false;
    else if (character === '\\') escaped = true;
    else if (character === quote) quote = null;
    continue;
  }
  if (character === '"' || character === "'" || character === '`') {
    quote = character;
  } else if (character === '[') {
    bracketDepth += 1;
  } else if (character === ']') {
    bracketDepth -= 1;
    if (bracketDepth === 0) {
      deepDataEnd = index + 1;
      break;
    }
  }
}
if (deepDataEnd === -1) throw new Error('Could not locate the end of the Study Lab lecture dataset');
let deepTopics;
try {
  deepTopics = Function(`"use strict"; return (${deepBundle.slice(deepDataStart, deepDataEnd)});`)();
} catch (error) {
  throw new Error(`Study Lab lecture dataset is not valid literal data: ${error.message}`);
}
if (!Array.isArray(deepTopics) || deepTopics.length !== 29) {
  throw new Error(`Study Lab must contain 29 taught topics; found ${Array.isArray(deepTopics) ? deepTopics.length : 'a non-array'}`);
}
if (deepTopics.some(topic => topic.lecture === 23)) {
  throw new Error('Study Lab incorrectly treats official no-class Lecture 23 as taught content');
}
const deepTotals = deepTopics.reduce((totals, topic) => {
  for (const field of ['keywords', 'concepts', 'questions']) {
    if (!Array.isArray(topic[field])) throw new Error(`Study Lab Lecture ${topic.lecture} has invalid ${field}`);
    totals[field] += topic[field].length;
  }
  return totals;
}, { keywords: 0, concepts: 0, questions: 0 });
const countClaims = [
  `${deepTotals.keywords} keywords`,
  `${deepTotals.concepts} concepts`,
  `${deepTotals.questions} experiment prompts`
];
for (const file of ['README.md', 'apps/synapse/README.md', 'docs/index.html', 'docs/apps.json']) {
  const content = readFileSync(file, 'utf8');
  for (const claim of countClaims) {
    if (!content.includes(claim)) throw new Error(`${file} does not match the Study Lab dataset total: ${claim}`);
  }
}

const flashcards = readFileSync('docs/resources/NEUR3301_Glia1_Flashcards.csv', 'utf8');
if (flashcards.trim().split(/\r?\n/).length < 15) {
  throw new Error('Corrected Glia I deck is unexpectedly small');
}

console.log(`Validated ${required.length} required files and ${apps.length} registry entries.`);
