const depoSwiper = new Swiper('.dashboard__create-cards', {
 // Optional parameters
 direction: 'horizontal',

 slidesPerView: 1,
 spaceBetween: 30,
 breakpoints: {
  1024: {
   slidesPerView: 3,
  },
 },

 // If we need pagination
 pagination: {
  el: '.swiper-pagination',
 },
});
