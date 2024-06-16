const swiper = new Swiper(".second__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },
});

const main__swiper = new Swiper(".main__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 0,
    slideShadows: true,
    // stretch: 10,
    scale: 0.8,
    depth:20,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main__swiper_btn_next",
    prevEl: ".main__swiper_btn_prev",
  },
});
