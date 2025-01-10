const tabSwiper = new Swiper('.dashboard__tabs.mobile', {
 // Optional parameters
 direction: 'horizontal',
 loop: true,
 slidesPerView: 2,
 breakpoints: {
  1024: {
   slidesPerView: 'auto',
  },
 },

 // If we need pagination
 pagination: {
  el: '.swiper-pagination',
 },
});

const dashboardBottomSlider = new Swiper('.dashboard__bottom-tabs', {
 direction: 'horizontal',

 slidesPerView: 2,
 spaceBetween: 15,
 breakpoints: {
  1024: {
   slidesPerView: 'auto',
  },
 },

 pagination: {
  el: '.swiper-pagination',
 },
});
