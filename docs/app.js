const grid = document.querySelector('#app-grid');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function loadApps() {
  try {
    const response = await fetch('apps.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const apps = await response.json();

    grid.innerHTML = apps.map((app) => `
      <article class="app-card">
        <span class="status">${escapeHtml(app.status)}</span>
        <h3>${escapeHtml(app.name)}</h3>
        <strong>${escapeHtml(app.subtitle)}</strong>
        <p>${escapeHtml(app.description)}</p>
        <div class="tags">
          ${app.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
        </div>
        <a href="${escapeHtml(app.url)}" target="_blank" rel="noopener noreferrer">Open app →</a>
      </article>
    `).join('');
  } catch (error) {
    console.error('Unable to load app registry:', error);
    grid.innerHTML = '<p class="loading">The app directory could not be loaded. Launch Synapse from the button above.</p>';
  }
}

loadApps();

function readLocalJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
}

// Read-only readiness snapshot: reads the known per-app localStorage keys
// (shared across the same origin on GitHub Pages) and never writes.
function readinessCards() {
  const cards = [];

  const exam = readLocalJson('neur3301-exam-lab-v4');
  if (exam && typeof exam === 'object' && !Array.isArray(exam)) {
    const done = Array.isArray(exam.done) ? exam.done.length : 0;
    const attempts = (exam.quiz && Number(exam.quiz.attempts)) || 0;
    const correct = (exam.quiz && Number(exam.quiz.correct)) || 0;
    const accuracy = attempts ? Math.round((correct / attempts) * 100) : 0;
    cards.push({ name: 'Exam Lab', url: 'app/', lines: [`${done}/29 lectures processed`, `${accuracy}% MCQ accuracy · ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'}`] });
  } else {
    cards.push({ name: 'Exam Lab', url: 'app/', lines: ['Not started in this browser'] });
  }

  const lab = readLocalJson('synapse-neur3301-progress-v1');
  if (Array.isArray(lab) && lab.length) {
    const counts = {};
    lab.forEach((item) => {
      const status = item && item.status ? String(item.status) : 'seen';
      counts[status] = (counts[status] || 0) + 1;
    });
    const breakdown = Object.keys(counts).sort().map((key) => `${counts[key]} ${key}`).join(' · ');
    cards.push({ name: 'Study Lab', url: 'study-lab/', lines: [`${lab.length} items tracked`, breakdown] });
  } else {
    cards.push({ name: 'Study Lab', url: 'study-lab/', lines: ['Not started in this browser'] });
  }

  const seminar = readLocalJson('neur3301-mdma-rehearsal');
  if (Array.isArray(seminar) && seminar.length) {
    const checked = seminar.filter(Boolean).length;
    cards.push({ name: 'Seminar rehearsal', url: 'seminar/', lines: [`${checked}/${seminar.length} checklist items complete`] });
  } else {
    cards.push({ name: 'Seminar rehearsal', url: 'seminar/', lines: ['Not started in this browser'] });
  }

  return cards;
}

function renderReadiness() {
  const host = document.querySelector('#readiness-grid');
  if (!host) return;
  host.innerHTML = readinessCards().map((card) => `
    <article class="readiness-card">
      <h3>${escapeHtml(card.name)}</h3>
      ${card.lines.map((line) => `<p>${escapeHtml(line)}</p>`).join('')}
      <a href="${escapeHtml(card.url)}">Open ${escapeHtml(card.name)} →</a>
    </article>
  `).join('');
}

renderReadiness();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

