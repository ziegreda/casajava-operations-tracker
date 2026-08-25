const units = [
  { id: '01', tenant: 'Juan Dela Cruz', rent: 10000, status: 'occupied', payment: 'Paid', balance: 0 },
  { id: '02', tenant: 'Maria Santos', rent: 10000, status: 'occupied', payment: 'Partial', balance: 5000 },
  { id: '03', tenant: 'Pedro Reyes', rent: 10000, status: 'occupied', payment: 'Paid', balance: 0 },
  { id: '04', tenant: 'Ana Bautista', rent: 10000, status: 'maintenance', payment: 'Paid', balance: 0 },
  { id: '05', tenant: 'Liza Garcia', rent: 10000, status: 'occupied', payment: 'Unpaid', balance: 10000 },
  { id: '06', tenant: 'Carlo Mendoza', rent: 10000, status: 'occupied', payment: 'Paid', balance: 0 },
  { id: '07', tenant: 'Ramon Flores', rent: 10000, status: 'occupied', payment: 'Partial', balance: 5000 },
  { id: '08', tenant: 'Nina Cruz', rent: 10000, status: 'occupied', payment: 'Paid', balance: 0 },
  { id: '09', tenant: 'Available', rent: 10000, status: 'available', payment: 'Unpaid', balance: 0 },
  { id: '10', tenant: 'Available', rent: 10000, status: 'available', payment: 'Unpaid', balance: 0 }
];

const activities = [
  { type: 'paid', icon: '✓', title: 'Unit 03 paid rent', detail: '₱10,000 received via GCash', time: 'Today, 10:42 AM' },
  { type: 'warning', icon: '!', title: 'Unit 07 reported a leaking faucet', detail: 'Priority: High · Assigned to Mang Tony', time: 'Yesterday' },
  { type: 'info', icon: 'i', title: 'Unit 05 contract expires soon', detail: 'Contract ends on September 15, 2026', time: '2 days ago' },
  { type: 'paid', icon: '✓', title: 'Unit 08 paid rent', detail: '₱10,000 received via Bank transfer', time: '3 days ago' }
];

const views = {
  dashboard: renderDashboard,
  units: renderUnits,
  payments: renderPayments,
  maintenance: renderMaintenance,
  expenses: renderExpenses,
  reports: renderReports
};

const appContent = document.getElementById('appContent');
const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
const toast = document.getElementById('toast');

function peso(amount) {
  return `₱${amount.toLocaleString('en-PH')}`;
}

function statusLabel(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function renderDashboard() {
  appContent.innerHTML = `<div class="view-section">
    <div class="page-heading">
      <div><p class="eyebrow">Tuesday, August 25, 2026</p><h1>Good morning, Admin.</h1><p class="page-description">Here is what is happening at Casa Java today.</p></div>
      <div class="date-badge">AUGUST 2026 · MONTHLY VIEW</div>
    </div>
    <div class="metrics-grid">
      ${metric('Total units', '10', 'Apartment capacity', '▦')}
      ${metric('Occupied', '8', '80% occupancy rate', '⌂', 'featured')}
      ${metric('Available', '2', 'Ready for move-in', '○', 'accent')}
      ${metric('Maintenance', '2', '1 high priority', '⌁')}
      ${metric('Rent collected', peso(80000), '+ ₱5,000 this month', '₱', 'featured')}
      ${metric('Outstanding', peso(15000), '2 tenants with balance', '!', 'warning')}
      ${metric('Pending tasks', '5', '3 due this week', '☷')}
      ${metric('Net income', peso(67500), 'After recorded expenses', '↗', 'accent')}
    </div>
    <div class="content-grid">
      <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Recent activity</h2><p class="panel-subtitle">Latest updates across your property</p></div><button class="text-button" data-action="activity">View all →</button></div><div class="activity-list">${activities.map(activityTemplate).join('')}</div></section>
      <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Occupancy</h2><p class="panel-subtitle">Current unit distribution</p></div><button class="text-button" data-view-link="units">Details →</button></div><div class="occupancy-wrap"><div class="donut"><div class="donut-center"><strong>80%</strong><span>occupied</span></div></div><div class="occupancy-legend"><div class="legend-row"><span class="legend-name"><i class="legend-dot"></i>Occupied</span><strong>8 units</strong></div><div class="legend-row"><span class="legend-name"><i class="legend-dot available"></i>Available</span><strong>2 units</strong></div><div class="legend-row"><span class="legend-name"><i class="legend-dot" style="background: var(--orange)"></i>Maintenance</span><strong>1 unit</strong></div></div></div></section>
    </div>
    <section class="panel table-panel"><div class="panel-header"><div><h2 class="panel-title">Unit snapshot</h2><p class="panel-subtitle">Payment status for August 2026</p></div><button class="text-button" data-view-link="units">Manage units →</button></div>${unitTable(units.slice(0, 5), true)}</section>
  </div>`;
}

function metric(label, value, meta, icon, kind = '') { return `<article class="metric-card ${kind}"><span class="metric-icon">${icon}</span><div class="metric-label">${label}</div><div class="metric-value">${value}</div><div class="metric-meta">${meta}</div></article>`; }
function activityTemplate(item) { return `<div class="activity"><span class="activity-icon ${item.type}">${item.icon}</span><div class="activity-copy"><strong>${item.title}</strong><span>${item.detail}</span></div><span class="activity-time">${item.time}</span></div>`; }
function unitTable(list, compact = false) { return `<table class="table"><thead><tr><th>Unit</th><th>Tenant</th><th>Status</th><th>Monthly rent</th><th>${compact ? 'Payment' : 'Balance'}</th></tr></thead><tbody>${list.map(unit => `<tr><td class="unit-cell">Unit ${unit.id}</td><td class="tenant-cell">${unit.tenant}</td><td><span class="status-pill ${unit.status}">${statusLabel(unit.status)}</span></td><td class="money">${peso(unit.rent)}</td><td class="${unit.balance ? 'money' : ''}">${compact ? paymentLabel(unit.payment) : (unit.balance ? peso(unit.balance) : '—')}</td></tr>`).join('')}</tbody></table>`; }
function paymentLabel(payment) { const color = payment === 'Paid' ? 'occupied' : payment === 'Partial' ? 'maintenance' : 'available'; return `<span class="status-pill ${color}">${payment}</span>`; }
function simpleView(title, eyebrow, description, content) { appContent.innerHTML = `<div class="view-section"><div class="page-heading"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="page-description">${description}</p></div><button class="date-badge text-button" data-action="comingSoon">+ Add record</button></div>${content}</div>`; }
function renderUnits() { simpleView('Units', 'Property directory', 'All ten apartment units in one place.', `<section class="panel table-panel">${unitTable(units)}</section>`); }
function renderPayments() { simpleView('Payments', 'Cash flow', 'Track rent collection and outstanding balances.', `<div class="metrics-grid">${metric('Collected this month', peso(80000), '8 paid records', '₱', 'featured')}${metric('Outstanding balance', peso(15000), '2 partial or unpaid', '!', 'warning')}${metric('Collection rate', '84%', 'Compared with billed rent', '↗', 'accent')}${metric('Next due date', 'Sep 01', '7 days from now', '◷')}</div><section class="panel table-panel">${unitTable(units.filter(unit => unit.status !== 'available'))}</section>`); }
function renderMaintenance() { simpleView('Maintenance', 'Work orders', 'Keep repairs moving from reported to completed.', `<section class="panel"><div class="panel-header"><div><h2 class="panel-title">Open requests</h2><p class="panel-subtitle">2 active maintenance items</p></div></div><div class="activity-list">${activities.filter(item => item.type === 'warning').map(activityTemplate).join('')}<div class="activity"><span class="activity-icon info">i</span><div class="activity-copy"><strong>Unit 04 · Replace hallway light</strong><span>Priority: Medium · Estimated cost ₱650</span></div><span class="status-pill maintenance">Pending</span></div></div></section>`); }
function renderExpenses() { simpleView('Expenses', 'Property costs', 'Monitor where the monthly budget goes.', `<section class="panel"><div class="panel-header"><div><h2 class="panel-title">August expenses</h2><p class="panel-subtitle">Recorded operating costs</p></div></div>${unitTable([{ id: '—', tenant: 'Electricity · common area', status: 'maintenance', rent: 4200, balance: 4200 }, { id: '—', tenant: 'Water · property supply', status: 'occupied', rent: 1800, balance: 1800 }, { id: '—', tenant: 'Repair · Unit 04 faucet', status: 'maintenance', rent: 1500, balance: 1500 }])}</section>`); }
function renderReports() { simpleView('Reports', 'Performance', 'A quick read on Casa Java financial health.', `<div class="metrics-grid">${metric('Gross rent', peso(80000), 'August 2026', '₱', 'featured')}${metric('Expenses', peso(12500), '3 recorded categories', '◌')}${metric('Net income', peso(67500), '84% collection rate', '↗', 'accent')}${metric('Occupancy', '80%', '8 of 10 units', '⌂')}</div><section class="panel"><div class="panel-header"><div><h2 class="panel-title">Monthly summary</h2><p class="panel-subtitle">Income and expenses at a glance</p></div></div><p class="empty-note">Detailed charts will appear here as more monthly records are added.</p></section>`); }

function showToast(message) { toast.textContent = message; toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 2600); }
function navigate(view) { const render = views[view] || renderDashboard; render(); breadcrumbCurrent.textContent = view.charAt(0).toUpperCase() + view.slice(1); document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === view)); document.getElementById('sidebar').classList.remove('open'); window.scrollTo({ top: 0, behavior: 'smooth' }); }

document.addEventListener('click', event => {
  const nav = event.target.closest('[data-view]');
  const link = event.target.closest('[data-view-link]');
  const action = event.target.closest('[data-action]');
  if (nav) navigate(nav.dataset.view);
  if (link) navigate(link.dataset.viewLink);
  if (action) showToast(action.dataset.action === 'comingSoon' ? 'Record forms are coming in the next build.' : 'Activity history will be available soon.');
});
document.getElementById('mobileMenu').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));
document.getElementById('notificationButton').addEventListener('click', () => showToast('You have 3 reminders: rent, contract, and maintenance.'));

renderDashboard();
