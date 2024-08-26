(() => {
  const location = document.location;
  if (location.pathname.includes('index')) return;

  const linkRefs = document.querySelectorAll('.js-link');

  const newPathNameArr = location.pathname.split('/');
  const newPathName = [...newPathNameArr.slice(0, -1), 'index.html'].join('/');

  linkRefs.forEach(link =>
    link.addEventListener('click', e => {
      const url = `${location.origin}${newPathName}${link.hash}`;

      document.location.replace(url);
    })
  );
})();
