import { scrollToTop } from './helpers/scrollToTop.js';

(() => {
  const location = document.location;

  const linkRefs = document.querySelectorAll('.js-nav-link');

  const newHref = location.href.replace(/\/[^/]+\.html$/, '/index.html');

  linkRefs.forEach(link =>
    link.addEventListener('click', e => {
      if (location.pathname.includes('index')) {
        scrollToTop(e.target.hash);
        return;
      }
      const url = `${newHref}${link.hash}`;
      document.location.replace(url);
    })
  );
})();
