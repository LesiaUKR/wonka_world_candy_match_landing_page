import * as bodyScrollLock from 'body-scroll-lock';
export const navigateTo = hash => {
  const headerRef = document.querySelector('header');
  if (!headerRef) return;

  const id = hash.replace('#', '');
  const elementRef = document.getElementById(id);

  bodyScrollLock.enableBodyScroll(document.body);
  setTimeout(() => {
    window.scroll({
      top: elementRef.offsetTop - headerRef.offsetHeight,
      behavior: 'smooth',
    });
  });
};
