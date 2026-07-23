// Enterprise Multi-Agent SDLC Dashboard Application Controller

document.addEventListener('DOMContentLoaded', () => {
  let activeFilter = 'all';
  let searchQuery = '';
  let activeView = 'table1';

  // Initialize UI
  renderTable1Header();
  renderTable1Body();
  renderTable2Header();
  renderTable2Body();
  renderFrameworkCards();
  setupEventListeners();

  // Render Table 1 Headers (Questions)
  function renderTable1Header() {
    const headerRow = document.getElementById('table1-header-row');
    if (!headerRow) return;

    // Reset except first framework col
    headerRow.innerHTML = '<th class="framework-col-header">Framework</th>';

    QUESTIONS.forEach(q => {
      const th = document.createElement('th');
      th.innerHTML = `
        <div class="th-content">
          <span class="th-question-title">${q.title}</span>
          <span class="th-question-badge" style="background: ${q.color}20; color: ${q.color}; border: 1px solid ${q.color}40;">
            ${q.shortTitle}
          </span>
        </div>
      `;
      headerRow.appendChild(th);
    });
  }

  // Render Table 1 Body
  function renderTable1Body() {
    const tbody = document.getElementById('table1-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    FRAMEWORKS.forEach(fw => {
      // Check filter
      if (activeFilter !== 'all' && fw.id !== activeFilter) return;

      const tr = document.createElement('tr');
      tr.setAttribute('data-framework-id', fw.id);

      // Sticky Framework Cell
      const tdSticky = document.createElement('td');
      tdSticky.className = 'sticky-col';
      tdSticky.innerHTML = `
        <div class="framework-cell-title">
          <div class="framework-badge-pill" style="background: ${fw.badgeBg}; color: ${fw.badgeColor}; border: 1px solid ${fw.badgeBorder};" onclick="openFrameworkDrawer('${fw.id}')">
            <span style="font-size: 14px;">●</span> ${fw.name}
          </div>
          <p class="framework-cell-desc">${fw.tagline}</p>
          <span class="view-details-link" onclick="openFrameworkDrawer('${fw.id}')">
            View Overview →
          </span>
        </div>
      `;
      tr.appendChild(tdSticky);

      // Question Cells
      QUESTIONS.forEach(q => {
        const cellData = TABLE1_DATA[fw.id]?.[q.id];
        const td = document.createElement('td');

        if (!cellData) {
          td.innerHTML = `<span style="color: var(--text-muted); font-size: 12px;">N/A</span>`;
          tr.appendChild(td);
          return;
        }

        const summaryHighlighted = highlightMatch(cellData.summary, searchQuery);
        const sourceHighlighted = highlightMatch(cellData.source, searchQuery);

        td.innerHTML = `
          <div class="cell-card">
            <div class="cell-expandable-content collapsed">
              <p class="cell-summary">${summaryHighlighted}</p>
            </div>
            ${cellData.summary.length > 90 ? `<button class="btn-read-more">▼ Read More</button>` : ''}
            <a href="${cellData.url}" target="_blank" rel="noopener noreferrer" class="source-badge" title="${cellData.url}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>${sourceHighlighted}</span>
            </a>
          </div>
        `;

        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    attachCellExpandListeners();
  }

  // Render Table 2 Header (Capabilities Matrix)
  function renderTable2Header() {
    const headerRow = document.getElementById('table2-header-row');
    if (!headerRow) return;

    headerRow.innerHTML = '<th class="framework-col-header">Capability Dimension</th>';

    FRAMEWORKS.forEach(fw => {
      if (activeFilter !== 'all' && fw.id !== activeFilter) return;

      const th = document.createElement('th');
      th.innerHTML = `
        <div class="th-content">
          <span class="framework-badge-pill" style="background: ${fw.badgeBg}; color: ${fw.badgeColor}; border: 1px solid ${fw.badgeBorder};" onclick="openFrameworkDrawer('${fw.id}')">
            ${fw.name}
          </span>
        </div>
      `;
      headerRow.appendChild(th);
    });
  }

  // Render Table 2 Body (Capability Heatmap & Detailed Comparison)
  function renderTable2Body() {
    const tbody = document.getElementById('table2-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    CAPABILITIES.forEach(cap => {
      const tr = document.createElement('tr');

      // Sticky Capability Header
      const tdSticky = document.createElement('td');
      tdSticky.className = 'sticky-col';
      tdSticky.innerHTML = `
        <div style="font-weight: 700; font-size: 14px; color: var(--text-primary);">
          ${cap}
        </div>
      `;
      tr.appendChild(tdSticky);

      // Framework Capability Cells
      FRAMEWORKS.forEach(fw => {
        if (activeFilter !== 'all' && fw.id !== activeFilter) return;

        const capData = TABLE2_DATA[cap]?.[fw.id];
        const maturityScore = fw.maturity[cap] || 3;
        const td = document.createElement('td');

        if (!capData) {
          td.innerHTML = `<span style="color: var(--text-muted); font-size: 12px;">No documentation available</span>`;
          tr.appendChild(td);
          return;
        }

        const summaryHighlighted = highlightMatch(capData.summary, searchQuery);
        const detailHighlighted = highlightMatch(capData.detail, searchQuery);
        const sourceHighlighted = highlightMatch(capData.source, searchQuery);

        // Fill width percentage (out of 5)
        const pct = (maturityScore / 5) * 100;

        td.innerHTML = `
          <div class="cell-card">
            <div class="maturity-bar-wrapper" title="Maturity Rating: ${maturityScore}/5">
              <span class="maturity-score" style="color: ${fw.badgeColor};">${maturityScore}/5</span>
              <div class="maturity-track">
                <div class="maturity-fill" style="width: ${pct}%; background: ${fw.badgeColor};"></div>
              </div>
            </div>
            <div class="cell-expandable-content collapsed">
              <p class="cell-summary">${summaryHighlighted}</p>
              ${capData.detail ? `<p class="cell-detail">${detailHighlighted}</p>` : ''}
            </div>
            <button class="btn-read-more">▼ Read More</button>
            <a href="${capData.url}" target="_blank" rel="noopener noreferrer" class="source-badge" title="${capData.url}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>${sourceHighlighted}</span>
            </a>
          </div>
        `;

        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    attachCellExpandListeners();
  }

  // Render Framework Cards
  function renderFrameworkCards() {
    const container = document.getElementById('framework-cards-container');
    if (!container) return;

    container.innerHTML = '';

    FRAMEWORKS.forEach(fw => {
      if (activeFilter !== 'all' && fw.id !== activeFilter) return;

      const card = document.createElement('div');
      card.className = 'summary-card';
      card.innerHTML = `
        <div class="summary-card-header">
          <div class="framework-badge-pill" style="background: ${fw.badgeBg}; color: ${fw.badgeColor}; border: 1px solid ${fw.badgeBorder};">
            ${fw.name}
          </div>
        </div>
        <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.4;">${fw.tagline}</p>
        
        <div class="summary-card-body">
          <h4>Key Advantages</h4>
          <ul class="bullet-list">
            ${fw.pros.map(pro => `<li class="pro">${pro}</li>`).join('')}
          </ul>
        </div>

        <div class="summary-card-body">
          <h4>Tradeoffs & Limitations</h4>
          <ul class="bullet-list">
            ${fw.cons.map(con => `<li class="con">${con}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-top: auto; padding-top: 12px; display: flex; justify-content: space-between; align-items: center;">
          <span class="view-details-link" onclick="openFrameworkDrawer('${fw.id}')">Explore Full Blueprint →</span>
          <a href="${fw.docsUrl}" target="_blank" rel="noopener noreferrer" class="source-badge">Official Docs ↗</a>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // Expand / Collapse Cell Listeners
  function attachCellExpandListeners() {
    document.querySelectorAll('.btn-read-more').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const content = e.target.previousElementSibling;
        if (content.classList.contains('collapsed')) {
          content.classList.remove('collapsed');
          e.target.textContent = '▲ Show Less';
        } else {
          content.classList.add('collapsed');
          e.target.textContent = '▼ Read More';
        }
      });
    });
  }

  // Event Listeners (Search, Filter, View Tabs)
  function setupEventListeners() {
    // Live Search Input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderTable1Body();
        renderTable2Body();
      });
    }

    // Filter Chips
    const filterContainer = document.getElementById('filter-chips');
    if (filterContainer) {
      filterContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;

        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        activeFilter = chip.getAttribute('data-filter');
        renderTable1Body();
        renderTable2Header();
        renderTable2Body();
        renderFrameworkCards();
      });
    }

    // View Switcher Tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        activeView = tab.getAttribute('data-view');
        document.getElementById('view-table1').classList.toggle('hidden', activeView !== 'table1');
        document.getElementById('view-table2').classList.toggle('hidden', activeView !== 'table2');
        document.getElementById('view-cards').classList.toggle('hidden', activeView !== 'cards');
      });
    });

    // Modal Drawer Close
    const closeBtn = document.getElementById('btn-close-drawer');
    const modalOverlay = document.getElementById('detail-modal');
    if (closeBtn && modalOverlay) {
      closeBtn.addEventListener('click', closeFrameworkDrawer);
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeFrameworkDrawer();
      });
    }
  }

  // Highlight Text Matches
  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Open Drawer Modal
  window.openFrameworkDrawer = function(frameworkId) {
    const fw = FRAMEWORKS.find(f => f.id === frameworkId);
    if (!fw) return;

    const modal = document.getElementById('detail-modal');
    const titleGroup = document.getElementById('drawer-title-group');
    const bodyContent = document.getElementById('drawer-body-content');

    titleGroup.innerHTML = `
      <div class="framework-badge-pill" style="background: ${fw.badgeBg}; color: ${fw.badgeColor}; border: 1px solid ${fw.badgeBorder}; font-size: 16px;">
        ${fw.name}
      </div>
      <p style="font-size: 13px; color: var(--text-secondary); margin-top: 6px;">${fw.tagline}</p>
    `;

    bodyContent.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h4 style="font-size: 12px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px;">Capability Maturity Scores</h4>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${CAPABILITIES.map(cap => {
              const score = fw.maturity[cap] || 3;
              const pct = (score / 5) * 100;
              return `
                <div style="display: flex; align-items: center; justify-content: space-between; font-size: 12px;">
                  <span style="color: var(--text-secondary); font-weight: 500;">${cap}</span>
                  <div style="display: flex; align-items: center; gap: 8px; width: 140px;">
                    <div class="maturity-track" style="height: 6px;">
                      <div class="maturity-fill" style="width: ${pct}%; background: ${fw.badgeColor};"></div>
                    </div>
                    <span style="font-weight: 700; color: ${fw.badgeColor}; font-size: 11px;">${score}/5</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div>
          <h4 style="font-size: 12px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px;">Core Strengths</h4>
          <ul class="bullet-list">
            ${fw.pros.map(pro => `<li class="pro">${pro}</li>`).join('')}
          </ul>
        </div>

        <div>
          <h4 style="font-size: 12px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px;">Limitations</h4>
          <ul class="bullet-list">
            ${fw.cons.map(con => `<li class="con">${con}</li>`).join('')}
          </ul>
        </div>

        <div style="padding-top: 16px; border-top: 1px solid var(--border-color);">
          <a href="${fw.docsUrl}" target="_blank" rel="noopener noreferrer" class="source-badge" style="width: 100%; justify-content: center; padding: 10px;">
            Open Official ${fw.name} Documentation ↗
          </a>
        </div>
      </div>
    `;

    modal.classList.add('open');
  };

  function closeFrameworkDrawer() {
    const modal = document.getElementById('detail-modal');
    if (modal) modal.classList.remove('open');
  }
});
