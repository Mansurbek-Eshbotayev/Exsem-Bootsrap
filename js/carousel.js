$('.spin__list').slick({
  slidesToShow: 3.7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});