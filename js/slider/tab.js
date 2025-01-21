document.querySelectorAll('.splide').forEach((carousel) => {
 if (carousel.classList.contains('dashboard__bottom-tabs')) {
  new Splide(carousel, {
   breakpoints: {
    1024: {
     perPage: 3,
     arrows: false,
     perPage: 1,
     autoWidth: true,
    },
   },

   arrows: false,
   pagination: false,
   autoWidth: true,
  }).mount();
 } else if (carousel.classList.contains('dashboard__tabs')) {
  new Splide(carousel, {
   breakpoints: {
    1024: {
     type: 'loop',
     arrows: true,
     perPage: 1,
     autoWidth: true,
    },
   },
   classes: {
    arrows: 'splide__arrows dashboard__arrows',
    arrow: ' dashboard__arrow',
    prev: 'splide__arrow--prev dashboard__tab-prev',
    next: 'splide__arrow--next dashboard__tab-next',
   },
   arrows: false,
   pagination: false,
   autoWidth: true,
  }).mount();
 }
});
