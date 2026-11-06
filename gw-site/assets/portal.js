const sections = Array.from(document.querySelectorAll('.view'));
const tabFor = { home: 'home', pay: 'pay', paid: 'pay', repair: 'repair', filed: 'repair' };
const confirmations = new Set();

function showView(moveFocus) {
  const requested = location.hash.slice(1) || 'home';
  let view = Object.hasOwn(tabFor, requested) ? requested : 'home';
  if ((view === 'filed' || view === 'paid') && !confirmations.has(view)) {
    view = tabFor[view];
  }
  if (requested !== view) history.replaceState(null, '', '#' + view);
  for (const section of sections) {
    section.classList.toggle('on', section.id === 'view-' + view);
  }
  for (const tab of document.querySelectorAll('.tabs button')) {
    if (tab.dataset.go === tabFor[view]) tab.setAttribute('aria-current', 'page');
    else tab.removeAttribute('aria-current');
  }
  if (moveFocus) {
    const heading = document.querySelector('.view.on h1');
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
  window.scrollTo(0, 0);
}

function selected(group) {
  return document.querySelector('[data-group="' + group + '"] [aria-pressed="true"]').textContent.trim();
}

document.addEventListener('click', event => {
  if (event.target.closest('.skip-link')) {
    event.preventDefault();
    document.getElementById('main-content').focus();
    return;
  }
  const pick = event.target.closest('.pick');
  if (pick) {
    for (const option of pick.parentElement.querySelectorAll('.pick')) {
      option.setAttribute('aria-pressed', String(option === pick));
    }
    return;
  }
  const target = event.target.closest('[data-go]')?.dataset.go;
  if (!target) return;
  if (target === 'paid') {
    const schedule = document.querySelector('#auto').checked ? 'Monthly autopay on the 1st' : 'One-time payment';
    document.querySelector('#receipt-options').textContent = selected('method') + ' · ' + schedule;
    confirmations.add(target);
  }
  if (target === 'filed') {
    document.querySelector('#filed-cat').textContent = selected('cat');
    const location = document.querySelector('#where').value.trim();
    const description = document.querySelector('#desc').value.trim();
    const photos = document.querySelector('#photo').files.length;
    const access = document.querySelector('#enter').checked ? 'Entry permitted' : '';
    document.querySelector('#repair-summary').textContent = [
      location, description, photos ? photos + (photos === 1 ? ' photo selected' : ' photos selected') : '', access
    ].filter(Boolean).join(' · ');
    confirmations.add(target);
  }
  if (location.hash === '#' + target) showView(true);
  else location.hash = target;
});
window.addEventListener('hashchange', () => showView(true));
showView(false);
