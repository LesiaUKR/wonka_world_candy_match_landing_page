import * as bodyScrollLock from 'body-scroll-lock';

export const burgerMenu = () => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const closeMenuIconRef = document.querySelectorAll('.js-icon-cross')[0];
  const openMenuIconRef = document.querySelectorAll('.js-icon-burger')[0];
  const menuBtnRef = document.querySelector('.js-menu-btn');
  const bodyRef = document.querySelector('body');

  const toggleMenu = () => {
    const isMenuOpen =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (isMenuOpen) {
      closeMenuIconRef.classList.add('hidden-icon');
      openMenuIconRef.classList.remove('hidden-icon');
    } else {
      closeMenuIconRef.classList.remove('hidden-icon');
      openMenuIconRef.classList.add('hidden-icon');
    }

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';

    bodyScrollLock[scrollLockMethod](bodyRef);
  };

  menuBtnRef.addEventListener('click', toggleMenu);

  // biome-ignore lint/complexity/noForEach: <explanation>
  //   closeMenuBtns.forEach(closeMenuBtn => {
  //     closeMenuBtn.addEventListener('click', e => {
  //       if (e.target === closeMenuBtn) {
  //         toggleMenu();
  //       }
  //     });
  //   });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    menuBtnRef.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(bodyRef);
  });
};
