// Simple filter + search for static cards
const chips = Array.from(document.querySelectorAll('.chip'));
const cards = Array.from(document.querySelectorAll('#cardGrid .card'));
const searchInput = document.getElementById('searchInput');
const empty = document.getElementById('empty');

let activeRole = 'all';
let query = '';

function applyFilters(){
  let visible = 0;
  cards.forEach(card => {
    const role = card.dataset.role;
    const name = (card.dataset.name || '').toLowerCase();
    const text = (card.textContent || '').toLowerCase();

    const roleOk = activeRole === 'all' || role === activeRole;
    const q = query.trim();
    const queryOk = !q || name.includes(q) || text.includes(q);

    const show = roleOk && queryOk;
    card.style.display = show ? '' : 'none';
    if(show) visible++;
  });
  empty.classList.toggle('hidden', visible !== 0);
}

// Chip click
chips.forEach(ch => {
  ch.addEventListener('click', () => {
    chips.forEach(c => { c.classList.remove('active'); c.setAttribute('aria-pressed','false'); });
    ch.classList.add('active'); ch.setAttribute('aria-pressed','true');
    activeRole = ch.dataset.role;
    applyFilters();
  });
});

// Search input
searchInput.addEventListener('input', (e) => {
  query = e.target.value.toLowerCase();
  applyFilters();
});

// Initial
applyFilters();
