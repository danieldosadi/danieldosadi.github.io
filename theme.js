// Executado antes do CSS para aplicar a preferência sem piscar o tema.
(() => {
  let preference = 'system';
  try { preference = localStorage.getItem('daniel-theme') || 'system'; } catch (_) {}
  if (!['system', 'dark', 'light'].includes(preference)) preference = 'system';
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = preference === 'system' ? (dark ? 'dark' : 'light') : preference;
  document.documentElement.dataset.preference = preference;
})();
