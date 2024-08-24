(() => {
  const location = document.location;
  if (location.pathname.includes('index')) return;

  const linkRefs = document.querySelectorAll('.js-link');

  linkRefs.forEach(link =>
    link.addEventListener('click', e => {
      const url = `${document.location.origin}/index.html${link.hash}`;
      document.location.replace(url);
    })
  );
})();
