import * as bodyScrollLock from 'body-scroll-lock';
export const navigateTo = hash => {
  const headerRef = document.querySelector('header');
  if (!headerRef) return;

  const id = hash.replace('#', '');
  const elementRef = document.getElementById(id);

  const position =
    elementRef.getBoundingClientRect().top +
    window.scrollY -
    headerRef.offsetHeight;

  bodyScrollLock.enableBodyScroll(document.body);
  // elementRef.scrollIntoView({});
  setTimeout(() => {
    window.scroll({
      // top: elementRef.offsetTop - headerRef.offsetHeight,
      top: position,
      behavior: 'smooth',
    });
  });
};
