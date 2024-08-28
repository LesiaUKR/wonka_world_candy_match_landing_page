document.documentElement.style.setProperty(
  '--swiper-pagination-bullet-horizontal-gap',
  '0px'
);

let reviewsSwiper = new Swiper('.reviews-swiper', {
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
  slidesPerView: 1,
  watchOverflow: true,
  spaceBetween: 15,
  slidesPerGroup: 1,
  autoheight: true,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 56,
      navigation: {
        nextEl: '.reviews-swiper-button-next',
        prevEl: '.reviews-swiper-button-prev',
      },
    },
  },
});
