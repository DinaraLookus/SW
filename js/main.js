$(function () {
	$('.slick').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		responsive: [
    {
      breakpoint: 1024,
      settings: {

      }
    },
    {
      breakpoint: 600,
      settings: {

      }
    },
    {
      breakpoint: 480,
      settings: {

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
});
