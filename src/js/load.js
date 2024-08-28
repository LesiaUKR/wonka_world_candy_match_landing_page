import { navigateTo } from './helpers/navigateTo.js';

(() => {
  const locationHash = document.location.hash;
  if (!locationHash) return;

  window.addEventListener('load', e => {
    e.preventDefault();
    navigateTo(locationHash);
  });
})();
