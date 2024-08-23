(() => {
  const homeRef = document.querySelector('.js-home-page');
  if (!document.location.pathname.includes('index'))
    homeRef.classList.remove('active-page');
})();
