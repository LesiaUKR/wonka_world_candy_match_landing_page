let gallerySwiper = new Swiper('.gallery-swiper', {
  pagination: {
    el: '.gallery-swiper-pagination',
  },

  slidesPerView: 1, // Показувати один слайд
  centeredSlides: true, // Центрувати активний слайд

  spaceBetween: 16,

  breakpoints: {
    1440: {
      slidesPerView: 1,
      spaceBetween: 110,

      navigation: {
        nextEl: '.gallery-swiper-button-prev',
        prevEl: '.gallery-swiper-button-next',
      },
    },
  },
});
