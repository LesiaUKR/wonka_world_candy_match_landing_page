import * as bodyScrollLock from 'body-scroll-lock';
import debounce from 'lodash.debounce';

export const burgerMenu = () => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtns = document.querySelectorAll('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';

    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);

  closeMenuBtns.forEach(closeMenuBtn => {
    closeMenuBtn.addEventListener('click', e => {
      toggleMenu();
    });
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  // Close the mobile menu on wider screens if the resize screen
  window.addEventListener(
    'resize',
    debounce(e => {
      if (window.innerWidth >= 1440) {
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
      }
    }, 100)
  );
};
