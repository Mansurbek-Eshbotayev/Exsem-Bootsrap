$('.spin__list').slick({
  slidesToShow: 3.9,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 798,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    }
  ]
});