new Swiper(
  '.swiper',
  // If we need pagination
  {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // dynamicBullets: true,
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
    slidesPerView: 1.08,

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
  }
);
