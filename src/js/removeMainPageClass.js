(() => {
  const location = document.location;
  if (location.pathname.includes('index')) return;

  const homeRefs = document.querySelectorAll('.js-home-page');

  if (!document.location.pathname.includes('index')) {
    homeRefs.forEach(ref => ref.classList.remove('active-page'));
  }
})();
