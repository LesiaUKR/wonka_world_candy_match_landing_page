let swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Включение/отключение
  // перетаскивания на ПК
  simulateTouch: true,
  // Курсор перетаскивания
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

  // Управление колесом мыши
  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
  },
  // Количество слайдов для показа
  slidesPerView: 1,
  // Отключение функционала
  // если слайдов меньше чем нужно
  watchOverflow: true,

  // Отступ между слайдами
  spaceBetween: 16,

  // Количество пролистываемых слайдов
  slidesPerGroup: 1,

  // Активный слайд по центру
  // centeredSlides: true,
  freemode: true,

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

function updateSwiperSettings() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1440) {
    swiper.pagination.destroy();
    swiper.pagination.el.style.display = 'none';
  } else {
    swiper.pagination.init();
    swiper.pagination.el.style.display = '';
  }
}

updateSwiperSettings();

window.addEventListener('resize', updateSwiperSettings);
