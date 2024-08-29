document.documentElement.style.setProperty(
  '--swiper-pagination-bullet-horizontal-gap',
  '0px'
);

let gallerySwiper = new Swiper('.gallery-swiper', {
  pagination: {
    el: '.gallery-swiper-pagination',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 16,
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  watchOverflow: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    1440: {
      slidesPerView: 1,
      spaceBetween: 112,
      navigation: {
        nextEl: '.gallery-swiper-button-next',
        prevEl: '.gallery-swiper-button-prev',
      },
    },
  },
});
