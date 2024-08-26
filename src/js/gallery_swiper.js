let gallerySwiper = new Swiper('.gallery-swiper', {
  pagination: {
    el: '.gallery-swiper-pagination',
  },

  slidesPerView: 1, // Показувати один слайд
  centeredSlides: true, // Центрувати активний слайд
  spaceBetween: 16,
  simulateTouch: true,
  // Чувствительность свайпа
  touchRatio: 1,
  // Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,
  grabCursor: true,

  // Управление клавиатурой
  keyboard: {
    // Включить\выключить
    enabled: true,
    // Включить\выключить
    // только когда слайдер
    // в пределах вьюпорта
    onlyInViewport: true,
    // Включить\выключить
    // управление клавишами
    // pageUp, pageDown
    pageUpDown: true,
  },

  breakpoints: {
    1440: {
      slidesPerView: 1,
      spaceBetween: 112,

      navigation: {
        nextEl: '.gallery-swiper-button-prev',
        prevEl: '.gallery-swiper-button-next',
      },
    },
  },
});
