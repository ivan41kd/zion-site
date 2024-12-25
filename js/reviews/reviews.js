const swiper = new Swiper('.reviews__swiper', {
 loop: true,
 speed: 400,
 spaceBetween: 40,
 slidesPerView: 1,
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },
 breakpoints: {
  1024: {
   slidesPerView: 3,
   spaceBetween: 40,
  },
 },
});
