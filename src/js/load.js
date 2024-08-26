import { scrollToTop } from './helpers/scrollToTop.js';

(() => {
  const locationHash = document.location.hash;
  if (!locationHash) return;

  window.addEventListener('load', e => scrollToTop(locationHash));
})();
