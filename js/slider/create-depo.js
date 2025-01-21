new Splide('.dashboard__create-cards', {
 breakpoints: {
  1024: {
   perPage: 1,
   arrows: true,
   perPage: 1,
   gap: '2rem',
   focus: 'center',
   type: 'loop',
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
