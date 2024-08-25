const swiper = new Swiper(
  '.swiper',
  // If we need pagination
  {
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
    slidesPerView: 1.07,
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
      // Define breakpoints
      1440: {
        // Desktop size
        slidesPerView: 4.18,
        spaceBetween: 36,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
  }
);

function updateSwiperSettings() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1440) {
    swiper.pagination.destroy(); // Remove pagination
    swiper.pagination.el.style.display = 'none'; // Hide pagination elements
  } else {
    swiper.pagination.init(); // Reinitialize pagination
    swiper.pagination.el.style.display = ''; // Show pagination elements
  }
}

// Call the function on page load
updateSwiperSettings();

// Add an event listener to update settings on resize
window.addEventListener('resize', updateSwiperSettings);
