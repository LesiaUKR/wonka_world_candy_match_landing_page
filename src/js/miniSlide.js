(() => {
  const buttonRef = document.querySelector('.js-htp-button');
  const thumbRef = document.querySelector('.js-slide-thumb');
  if (!buttonRef || !thumbRef) return;
  buttonRef.addEventListener('click', e => {
    console.log(e.target);
    console.log(e.currentTarget);
    buttonRef.classList.toggle('js-next');
    thumbRef.classList.toggle('js-slide-open');
  });
})();
