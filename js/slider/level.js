new Splide('.splide', {
 breakpoints: {
  1024: {
   type: 'loop',
   arrows: true,
   perPage: 1,
   gap: '2rem',
   autoWidth: false,
  },
 },
 classes: {
  arrows: 'splide__arrows dashboard__arrows',
  arrow: ' dashboard__arrow',
  prev: 'splide__arrow--prev dashboard__progress-prev',
  next: 'splide__arrow--next dashboard__progress-next',
 },
 gap: '20px',
 arrows: true,
 pagination: false,
 autoWidth: true,
}).mount();
