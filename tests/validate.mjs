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
  'docs/resources/NEUR3301_Glia1_Flashcards.csv',
  'docs/resources/lectures/L01_Glia_I.md',
  'docs/resources/lectures/L02_Growth_and_Trophic_Factors.md',
  'docs/resources/lectures/L03_Axon_Outgrowth_Target_Recognition_Maps.md',
  'docs/resources/lectures/L04_Regressive_Events_and_Cell_Death.md'
];

for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing required file: ${file}`);
}

const legacyComplementWording = ['C1q', 'C3b'].join('/');
for (const file of [
  ...required,
  'docs/resources/MDMA_Seminar_Full_Script_15min.md',
  'apps/synapse/BUILD_PROVENANCE.md',
  'apps/synapse/ALIGNMENT.md'
]) {
  if (readFileSync(file, 'utf8').includes(legacyComplementWording)) {
    throw new Error(`${file} reintroduced the legacy complement shorthand`);
  }
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

const seminarStudio = readFileSync('docs/seminar/index.html', 'utf8');
const seminarFullScript = readFileSync('docs/resources/MDMA_Seminar_Full_Script_15min.md', 'utf8');
if (!seminarStudio.includes("const EVIDENCE_AS_OF='30 July 2026';") || seminarStudio.includes("const EVIDENCE_AS_OF='24 July 2026';")) {
  throw new Error('Seminar evidence stamp must preserve the 30 July 2026 review date');
}
const seminarSlidesOpen = seminarStudio.indexOf('const slides=[');
const seminarSlidesStart = seminarStudio.indexOf('[', seminarSlidesOpen);
const seminarSlidesEnd = seminarStudio.indexOf('\n];', seminarSlidesOpen);
if (seminarSlidesOpen === -1 || seminarSlidesEnd === -1) throw new Error('Could not locate the Seminar Studio slide array');
const seminarSlides = Function(`"use strict"; return (${seminarStudio.slice(seminarSlidesStart, seminarSlidesEnd + 2)});`)();
const expectedSeminarTimes = [
  '0:00–0:40', '0:40–1:25', '1:25–3:20', '3:20–4:40',
  '4:40–6:10', '6:10–7:40', '7:40–9:30', '9:30–11:10',
  '11:10–12:30', '12:30–13:40', '13:40–14:30', '14:30–15:00'
];
if (!Array.isArray(seminarSlides) || seminarSlides.length !== 12 || seminarSlides.map(slide => slide.time).join('|') !== expectedSeminarTimes.join('|')) {
  throw new Error('Seminar must retain its 12-slide 15:00 structure and timing spine');
}
if (!seminarStudio.includes('let remaining=900')) {
  throw new Error('Seminar rehearsal timer must remain exactly 15:00');
}
for (const invariant of [
  'Release potency and uptake-inhibition potency are separate pharmacological measurements',
  'release profile is 5-HT ≈ noradrenaline > dopamine',
  'uptake inhibition ranks NET > SERT ≫ DAT',
  'Young et al. (2015) used mice and a BDNF-neutralising antibody',
  'TrkB was not measured or manipulated, so receptor involvement remains inferred',
  '5-HT2A involvement therefore means indirect downstream engagement through serotonin efflux, not direct agonism'
]) {
  if (!seminarStudio.includes(invariant)) throw new Error(`Seminar evidence correction regressed: ${invariant}`);
}
for (const invariant of [
  'In release assays, MDMA is roughly equipotent for serotonin and noradrenaline and weaker for dopamine',
  'In uptake-inhibition assays at cloned human transporters, potency ranks NET, then SERT, then DAT',
  'Young et al. (2015), used a BDNF-neutralising antibody',
  'Young did not measure or manipulate TrkB, so receptor involvement remains inferred',
  'not direct agonism by MDMA of the kind that defines a classic psychedelic'
]) {
  if (!seminarFullScript.includes(invariant)) throw new Error(`Canonical seminar script correction regressed: ${invariant}`);
}
for (const legacy of [
  'Direct receptor actions beyond release',
  'It also binds or modulates 5-HT2A',
  'Young et al. (2015) used rats',
  'TrkB involvement was directly measured'
]) {
  if (seminarStudio.includes(legacy) || seminarFullScript.includes(legacy)) {
    throw new Error(`Seminar reintroduced legacy evidence wording: ${legacy}`);
  }
}
for (const [file, content] of [
  ['docs/seminar/index.html', seminarStudio],
  ['docs/resources/MDMA_Seminar_Full_Script_15min.md', seminarFullScript]
]) {
  const orderedVoteWording = /two yes to nine no[^.]{0,80}efficacy[^.]{0,80}one yes to ten no[^.]{0,80}benefit/i;
  if (!orderedVoteWording.test(content) || /\b(?:1|2|9|10)\s+(?:yes|no)\b/i.test(content)) {
    throw new Error(`${file} must preserve the correctly ordered FDA votes spelled out in words`);
  }
}
const lecture4Brief = readFileSync('docs/resources/lectures/L04_Regressive_Events_and_Cell_Death.md', 'utf8');
if (!lecture4Brief.includes('Timetable attribution — unconfirmed') || lecture4Brief.includes('**Official timetable:** 28 July 2026')) {
  throw new Error('Lecture 4 date and lecturer must remain explicitly unconfirmed');
}

const examLab = readFileSync('docs/app/index.html', 'utf8');
const examLabScript = readFileSync('docs/app/app.js', 'utf8');
const examLabStyles = readFileSync('docs/app/styles.css', 'utf8');
if (!examLab.includes('styles.css?v=10') || !examLab.includes('app.js?v=10')) {
  throw new Error('Exam Lab HTML and assets must share a cache-busting deployment version');
}
const serviceWorker = readFileSync('docs/sw.js', 'utf8');
for (const asset of ['styles.css', 'app.js']) {
  const escapedAsset = asset.replace('.', '\\.');
  const htmlVersion = examLab.match(new RegExp(`${escapedAsset}\\?v=(\\d+)`))?.[1];
  const precacheVersions = [
    ...serviceWorker.matchAll(new RegExp(`['"]\\./app/${escapedAsset}\\?v=(\\d+)['"]`, 'g'))
  ].map(match => match[1]);
  if (!htmlVersion || precacheVersions.length !== 1 || precacheVersions[0] !== htmlVersion) {
    throw new Error(`Exam Lab ${asset} version must match its single service-worker precache entry`);
  }
}
if (!examLab.includes('<option value="Weak">')) {
  throw new Error('Weak-item MCQ filter value regressed');
}
const mobileMenuStart = examLab.indexOf('<details class="mobile-menu">');
const mobileMenuEnd = examLab.indexOf('</details>', mobileMenuStart);
const mobileMenu = examLab.slice(mobileMenuStart, mobileMenuEnd);
if (
  mobileMenuStart < 0
  || mobileMenuEnd < 0
  || !mobileMenu.includes('<summary>Menu</summary>')
  || !mobileMenu.includes('aria-label="Mobile project links"')
  || examLab.includes('<details class="mobile-menu" open')
) {
  throw new Error('Exam Lab mobile project navigation is missing or open by default');
}
for (const destination of ['href="../"', 'href="../study-lab/"', 'href="../seminar/"', 'href="https://github.com/KG-97/NEUR3301"']) {
  if (!mobileMenu.includes(destination)) throw new Error(`Exam Lab mobile navigation lost ${destination}`);
}
const mobileBreakpointStart = examLabStyles.indexOf('@media (max-width: 620px)');
const nextBreakpointStart = examLabStyles.indexOf('@media', mobileBreakpointStart + 1);
const mobileBreakpoint = examLabStyles.slice(
  mobileBreakpointStart,
  nextBreakpointStart < 0 ? examLabStyles.length : nextBreakpointStart
);
for (const invariant of ['.links { display: none;', '.mobile-menu { display: block;']) {
  if (!mobileBreakpoint.includes(invariant)) throw new Error(`Exam Lab mobile breakpoint regressed: ${invariant}`);
}
for (const invariant of ['.mobile-menu { display: none;', '.mobile-menu-links {']) {
  if (!examLabStyles.includes(invariant)) throw new Error(`Exam Lab mobile navigation styling regressed: ${invariant}`);
}
const dataToolsStart = examLab.indexOf('<details class="data-tools panel">');
const errorViewStart = examLab.indexOf('<section id="errors"');
const errorViewEnd = examLab.indexOf('</section>', errorViewStart);
const mainEnd = examLab.indexOf('</main>');
if (dataToolsStart < errorViewEnd || dataToolsStart > mainEnd || examLab.includes('<details class="data-tools panel" open')) {
  throw new Error('Global Exam Lab data controls must be collapsed by default below every tabpanel');
}
for (const control of ['id="export-data"', 'id="import-data"', 'id="reset-all"']) {
  const position = examLab.indexOf(control);
  if (position < dataToolsStart || position > mainEnd || examLab.slice(errorViewStart, errorViewEnd).includes(control)) {
    throw new Error(`Global Exam Lab data control is not in the collapsed footer strip: ${control}`);
  }
}
for (const wording of [
  'answer plans self-rated',
  'Save draft only',
  'Saving a draft does not count as an attempt. Self-rating does.',
  'id="error-validation"',
  'novalidate'
]) {
  if (!examLab.includes(wording)) throw new Error(`Exam Lab UX clarification regressed: ${wording}`);
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
if (questionRows.length !== 54 || new Set(questionRows.map(match => match[1])).size !== questionRows.length) {
  throw new Error(`Exam Lab must contain 54 uniquely identified questions; found ${questionRows.length}`);
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
if (!Array.isArray(parsedQuestions) || parsedQuestions.length !== 54) {
  throw new Error(`Expected 54 parsable question objects; found ${Array.isArray(parsedQuestions) ? parsedQuestions.length : 'a non-array'}`);
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
for (const control of ['data-view="briefs"', 'id="lecture-brief-list"', 'Evidence boundary']) {
  if (!examLab.includes(control)) throw new Error(`Lecture brief control missing from Exam Lab: ${control}`);
}
for (const filter of ['value="Lecture 1"', 'value="Lecture 2"', 'value="Lecture 3"', 'value="Lecture 4"']) {
  if (!examLab.includes(filter)) throw new Error(`Lecture-specific MCQ filter missing: ${filter}`);
}
if (!examLabScript.includes("filter.startsWith('Lecture ')") || !examLabScript.includes('`Lecture ${brief.id}`')) {
  throw new Error('Lecture brief practice no longer stays inside the selected lecture pool');
}
const dataGoStart = examLabScript.indexOf('function followDataGo(button)');
const dataGoEnd = examLabScript.indexOf('\n}', dataGoStart);
const dataGoHandler = examLabScript.slice(dataGoStart, dataGoEnd);
for (const invariant of [
  "button.id === 'next-action-button'",
  "button.dataset.go === 'quiz'",
  "document.querySelector('#quiz-block').value = 'Weak'",
  'activeQuestion = null',
  'questionAnswered = false',
  'switchView(button.dataset.go)'
]) {
  if (!dataGoHandler.includes(invariant)) throw new Error(`Weak-item retest action regressed: ${invariant}`);
}
if (!examLabScript.includes("addEventListener('click', () => followDataGo(button))")) {
  throw new Error('Dashboard data-go controls no longer use the weak-item-aware navigation handler');
}
const addErrorStart = examLabScript.indexOf('function addError(event)');
const addErrorEnd = examLabScript.indexOf('\nfunction renderLedger()', addErrorStart);
const addErrorHandler = examLabScript.slice(addErrorStart, addErrorEnd);
for (const invariant of [
  "document.querySelector('#error-validation')",
  'validation.hidden = false',
  'aria-invalid',
  'announce(validation.textContent)',
  'Add the failed claim or question and the corrected mechanism before saving.'
]) {
  if (!addErrorHandler.includes(invariant)) throw new Error(`Visible ledger validation regressed: ${invariant}`);
}
for (const wording of [
  'Draft saved. Rate it to count an attempt.',
  "rated ${record.attempts === 1 ? 'attempt' : 'attempts'}"
]) {
  if (!examLabScript.includes(wording)) throw new Error(`Answer draft/attempt wording regressed: ${wording}`);
}
const briefsOpen = examLabScript.indexOf('const lectureBriefs = [');
const briefsStart = examLabScript.indexOf('[', briefsOpen);
const briefsEnd = examLabScript.indexOf('\n];', briefsOpen);
if (briefsOpen === -1 || briefsEnd === -1) throw new Error('Could not locate the lecture brief array in app.js');
const parsedBriefs = Function(`"use strict"; return (${examLabScript.slice(briefsStart, briefsEnd + 2)});`)();
if (!Array.isArray(parsedBriefs) || parsedBriefs.map(brief => brief.id).join(',') !== '1,2,3,4') {
  throw new Error('Lecture briefs must cover exactly official Lectures 1, 2, 3 and 4');
}
for (const brief of parsedBriefs) {
  for (const field of ['title', 'date', 'lecturer', 'scope', 'download']) {
    if (typeof brief[field] !== 'string' || !brief[field].trim()) throw new Error(`Lecture ${brief.id} brief has an empty ${field}`);
  }
  for (const [field, minimum] of [['outcomes', 4], ['chains', 3], ['distinctions', 5], ['experiments', 2], ['traps', 4], ['recall', 4], ['references', 3]]) {
    if (!Array.isArray(brief[field]) || brief[field].length < minimum) {
      throw new Error(`Lecture ${brief.id} brief needs at least ${minimum} ${field}`);
    }
  }
  const questionCount = parsedQuestions.filter(question => question.lecture === brief.id).length;
  if (questionCount < 6) throw new Error(`Lecture ${brief.id} needs at least six MCQs after LMS intake; found ${questionCount}`);
}
if (parsedBriefs.find(brief => brief.id === 3)?.scope.includes('Pre-lecture')) {
  throw new Error('Lecture 3 still claims to be a pre-lecture reconstruction after released-slide reconciliation');
}
for (const invariant of [
  'Proteoglycan gradient versus hurdle',
  'Local NGF tropism',
  'Oligodendrocyte contact inhibition',
  'Ephrin-A map perturbation',
  'Target-to-map hierarchy'
]) {
  if (!examLabScript.includes(invariant)) throw new Error(`Lecture 3 released-slide alignment regressed: ${invariant}`);
}
for (const invariant of [
  'Target-dependent survival competition',
  'Intrinsic apoptotic execution',
  'BAX/BAK drive mitochondrial outer-membrane permeabilisation',
  'Autophagy',
  'Necroptosis',
  'Ferroptosis',
  'Pyroptosis',
  'Parthanatos'
]) {
  if (!examLabScript.includes(invariant)) throw new Error(`Lecture 4 mechanism coverage regressed: ${invariant}`);
}
if (!examLabScript.includes('deposits iC3b, which can engage microglial CR3') || examLabScript.includes(`${legacyComplementWording} tag engaged`)) {
  throw new Error('Exam Lab complement wording must preserve the iC3b-CR3 correction');
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

const importValidatorStart = examLabScript.indexOf('function importValidationError(');
const importValidatorEnd = examLabScript.indexOf('\nfunction normaliseState(', importValidatorStart);
if (importValidatorStart === -1 || importValidatorEnd === -1) {
  throw new Error('Could not locate strict import validation in app.js');
}
const validateImportedState = Function(
  'validLectureIds',
  'questions',
  'cards',
  'answerPrompts',
  `"use strict";\n${examLabScript.slice(importValidatorStart, importValidatorEnd)}\nreturn validateImportedState;`
)(
  new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30]),
  parsedQuestions,
  parsedCards,
  parsedAnswers
);
const importDate = '2026-07-26T12:00:00.000Z';
const validImportState = {
  version: 4,
  done: [1],
  quiz: {
    correct: 1,
    attempts: 2,
    items: { [parsedQuestions[0].id]: { attempts: 2, correct: 1 } }
  },
  cards: {
    0: { rating: 'good', due: importDate, intervalDays: 3, ease: 2.5, reviews: 1, lapses: 0 }
  },
  answers: {
    [parsedAnswers[0].id]: { draft: 'Mechanism draft', checks: [0], rating: 'solid', attempts: 1, updated: importDate }
  },
  errors: [{
    question: 'What failed?',
    type: 'Knowledge gap',
    fix: 'Corrected mechanism',
    date: importDate,
    resolved: false
  }]
};
validateImportedState(structuredClone(validImportState));
const rejectedImports = [
  ['truncated state', state => { delete state.cards; }, 'state is missing required cards data'],
  ['non-array lecture progress', state => { state.done = 'not-an-array'; }, 'state.done must be an array'],
  ['impossible quiz totals', state => { state.quiz = { attempts: -5, correct: 999, items: {} }; }, 'state.quiz.attempts must be an integer from 0 to 1000000'],
  ['unknown question record', state => { state.quiz.items.unknown = { attempts: 1, correct: 0 }; }, 'uses an unknown question ID'],
  ['invalid scheduled-card date', state => { state.cards[0].due = 'not-a-date'; }, 'must be a valid date string'],
  ['coercible answer attempt', state => { state.answers[parsedAnswers[0].id].attempts = '1'; }, 'must be an integer'],
  ['truncated ledger entry', state => { delete state.errors[0].fix; }, 'is missing required fix data']
];
for (const [label, corrupt, expectedMessage] of rejectedImports) {
  const candidate = structuredClone(validImportState);
  corrupt(candidate);
  let message = '';
  try {
    validateImportedState(candidate);
  } catch (error) {
    message = error.message;
  }
  if (!message.includes(expectedMessage)) {
    throw new Error(`Strict import validator accepted ${label} or returned the wrong error: ${message}`);
  }
}
const importHandlerStart = examLabScript.indexOf('function importData(event)');
const importHandlerEnd = examLabScript.indexOf('\nfunction resetAll()', importHandlerStart);
const importHandler = examLabScript.slice(importHandlerStart, importHandlerEnd);
if (!importHandler.includes('normaliseState(validateImportedState(unwrapEnvelope(JSON.parse(reader.result))))') ||
    importHandler.indexOf('const importedState =') > importHandler.indexOf('state = importedState;')) {
  throw new Error('Exam Lab import must validate the full payload before replacing in-memory or stored progress');
}

const deepBundle = readFileSync('docs/study-lab/assets/index-BR7I-zAT.js', 'utf8');
if (!deepBundle.includes('synapse-neur3301-progress-v1') || deepBundle.includes('port/5000')) {
  throw new Error('Study Lab progress persistence is missing or regressed');
}
for (const invariant of [
  'initialData:__readSynapseProgress',
  's.status==="unset"?u>=0&&a.splice(u,1)',
  'localStorage.setItem("synapse-neur3301-theme"',
  'status:O==="known"?"review":O==="review"?"unset":"known"',
  'status cycles Known → Review → Clear',
  'aria-selected":re',
  'That study page does not exist or may have moved.',
  'Return to dashboard'
]) {
  if (!deepBundle.includes(invariant)) {
    throw new Error(`Study Lab audit fix regressed: ${invariant}`);
  }
}
if (deepBundle.includes('Did you forget to add the page to the router?') ||
    deepBundle.includes('document.documentElement.classList.add("dark")')) {
  throw new Error('Study Lab still contains developer-facing 404 text or forced-dark startup');
}
const deepLabHtml = readFileSync('docs/study-lab/index.html', 'utf8');
const deepEnhancements = readFileSync('docs/study-lab/assets/synapse-enhance.js', 'utf8');
for (const invariant of [
  'synapse-enhance.js?v=6',
  'localStorage.getItem("synapse-neur3301-theme")',
  'min-height:44px',
  'max-height:min(70vh,520px)',
  'overflow-y:auto',
  'aria-controls="se-card"',
  'aria-hidden="true"',
  'role="region"'
]) {
  if (!deepLabHtml.includes(invariant) && !deepEnhancements.includes(invariant)) {
    throw new Error(`Study Lab mobile maintenance panel regressed: ${invariant}`);
  }
}
for (const invariant of [
  'function enhanceProgressBars()',
  'aria-valuenow',
  'aria-valuetext',
  'aria-label',
  'new MutationObserver(refresh).observe(root',
  'attributeFilter: ["style"]'
]) {
  if (!deepEnhancements.includes(invariant)) {
    throw new Error(`Study Lab progress-bar accessibility regressed: ${invariant}`);
  }
}
if (!deepEnhancements.includes('parentText.match(/(100|[0-9]{1,2})%/)')) {
  throw new Error('Study Lab progress parser must support React text with no space before the percentage');
}
if (!serviceWorker.includes("'./study-lab/assets/synapse-enhance.js?v=6'")) {
  throw new Error('Study Lab enhancement version must match its service-worker precache entry');
}

const progressValidatorStart = deepEnhancements.indexOf('  const PROGRESS_IMPORT_LIMIT = 600;');
const progressValidatorEnd = deepEnhancements.indexOf('\n  function importProgress(', progressValidatorStart);
if (progressValidatorStart === -1 || progressValidatorEnd === -1) {
  throw new Error('Could not locate strict Study Lab import validation');
}
const validateStudyProgress = Function(
  `"use strict";\n${deepEnhancements.slice(progressValidatorStart, progressValidatorEnd)}\nreturn validateProgressItems;`
)();
const validSchedule = JSON.stringify({
  ease: 2.5,
  reps: 2,
  interval: 6,
  due: '2026-08-04',
  last: 'good'
});
const validStudyProgress = [
  { itemKey: 'kw:2:Neurotrophic hypothesis', status: 'known' },
  { itemKey: 'concept:2:0', status: 'mastered' },
  { itemKey: 'quiz:3:1', status: 'got' },
  { itemKey: 'srs:3:Growth cone', status: validSchedule },
  { itemKey: 'seminar:0', status: 'mastered' }
];
const validatedStudyProgress = validateStudyProgress(validStudyProgress);
if (
  validatedStudyProgress.length !== validStudyProgress.length
  || validatedStudyProgress.some((item, index) => item.itemKey !== validStudyProgress[index].itemKey)
) {
  throw new Error('Study Lab import validator changed a valid progress payload');
}
for (const [label, items, expected] of [
  ['empty payload', [], 'No progress items'],
  ['duplicate key', [...validStudyProgress, validStudyProgress[0]], 'duplicates an earlier progress record'],
  ['no-class lecture', [{ itemKey: 'kw:23:Not taught', status: 'known' }], 'does not identify a taught lecture'],
  ['unknown status', [{ itemKey: 'quiz:3:0', status: 'perfect' }], 'is not a valid quiz status'],
  ['bad schedule', [{ itemKey: 'srs:3:Growth cone', status: '{"ease":99}' }], 'incomplete or unsupported'],
  ['unknown key family', [{ itemKey: 'admin:1:x', status: 'known' }], 'unsupported progress-key format']
]) {
  let message = '';
  try {
    validateStudyProgress(items);
  } catch (error) {
    message = error.message;
  }
  if (!message.includes(expected)) {
    throw new Error(`Study Lab import validator accepted ${label} or returned the wrong error: ${message}`);
  }
}
const studyImportStart = deepEnhancements.indexOf('  function importProgress(file)');
const studyImportEnd = deepEnhancements.indexOf('\n  function resetProgress()', studyImportStart);
const studyImportHandler = deepEnhancements.slice(studyImportStart, studyImportEnd);
if (
  !studyImportHandler.includes('const cleaned = validateProgressItems(items);')
  || studyImportHandler.includes('.filter((x) => x && typeof x.itemKey')
) {
  throw new Error('Study Lab import must validate the complete payload before replacing progress');
}

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
if (deepTotals.keywords !== 176) {
  throw new Error(`Study Lab keyword count must remain 176; found ${deepTotals.keywords}`);
}
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
