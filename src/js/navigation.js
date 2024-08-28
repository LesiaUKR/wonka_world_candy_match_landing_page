import { navigateTo } from './helpers/navigateTo.js';

(() => {
  const linksRef = document.querySelectorAll('.js-nav-link');

  const handleClick = e => {
    e.preventDefault();
    navigateTo(e.target.hash);
  };

  linksRef.forEach(link => link.addEventListener('click', handleClick));
})();
