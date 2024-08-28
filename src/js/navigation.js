import { navigateTo } from './helpers/navigateTo.js';

(() => {
  const linksRef = document.querySelectorAll('.js-nav-link');
  //   console.log(linksRef);

  const handleClick = e => {
    e.preventDefault();
    navigateTo(e.target.hash);
  };

  //   linksRef.forEach(link => link.remove('click', handleClick));

  linksRef.forEach(link => link.addEventListener('click', handleClick));
})();
