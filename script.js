'use strict';
const root = document.documentElement;
const theme = document.querySelector('#theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
theme.value = root.dataset.preference;
function applyTheme() {
  root.dataset.theme = theme.value === 'system' ? (systemTheme.matches ? 'dark' : 'light') : theme.value;
}
theme.addEventListener('change', () => {
  root.dataset.preference = theme.value;
  try { localStorage.setItem('daniel-theme', theme.value); } catch (_) {}
  applyTheme();
});
systemTheme.addEventListener('change', applyTheme);
const filters = document.querySelector('.filters');
filters.hidden = false;
const projects = [...document.querySelectorAll('.project')];
filters.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  projects.forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    if (!project.hidden) count++;
  });
  document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'projeto exibido' : 'projetos exibidos'}. Filtro: ${button.textContent}.`;
});
document.querySelector('#year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobileNavigation = window.matchMedia('(max-width: 900px)');
root.classList.add('navigation-ready');
menuToggle.hidden = false;
function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.querySelector('.menu-label').textContent = open ? 'Fechar' : 'Menu';
  navigation.hidden = mobileNavigation.matches && !open;
}
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || !mobileNavigation.matches) return;
  setMenu(false);
  const section = document.querySelector(link.getAttribute('href'));
  section.setAttribute('tabindex', '-1');
  section.focus({ preventScroll: true });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileNavigation.matches && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});
mobileNavigation.addEventListener('change', () => {
  if (mobileNavigation.matches && navigation.contains(document.activeElement)) menuToggle.focus();
  setMenu(false);
});
setMenu(false);
