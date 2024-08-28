export const navigateTo = hash => {
  const headerRef = document.querySelector('header');
  if (!headerRef) return;

  const id = hash.replace('#', '');
  const elementRef = document.getElementById(id);

  const positionToScroll =
    elementRef.getBoundingClientRect().top - headerRef.offsetHeight;

  setTimeout(
    window.scrollBy({
      top: positionToScroll,
      behavior: 'smooth',
    }),
    100
  );
};
