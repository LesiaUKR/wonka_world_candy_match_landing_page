(() => {
  const location = document.location;
  if (location.pathname.includes('index')) return;

  const linkRefs = document.querySelectorAll('.js-link');

  const newHref = location.href.replace(/\/[^/]+\.html$/, '/index.html');

  linkRefs.forEach(link =>
    link.addEventListener('click', e => {

      const url = `${location.origin}${newPathName}${link.hash}`;

      document.location.replace(url);
    })
  );
})();
