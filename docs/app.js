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
