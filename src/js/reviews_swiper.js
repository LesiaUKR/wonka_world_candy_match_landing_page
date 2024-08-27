let swiper = new Swiper('.swiper', {
  pagination: {
    el: '.reviews-swiper-pagination',
  },
  simulateTouch: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  slidesPerView: 1,
  watchOverflow: true,
  spaceBetween: 16,
  slidesPerGroup: 1,

  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 56,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  },
});
