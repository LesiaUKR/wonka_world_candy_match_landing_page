(() => {
  const buttonRef = document.querySelector('.js-htp-button');
  const thumbRef = document.querySelector('.js-slide-thumb');
  if (!buttonRef || !thumbRef) return;
  buttonRef.addEventListener('click', () => {
    buttonRef.classList.toggle('js-next');
    thumbRef.classList.toggle('js-slide-open');
  });
})();
