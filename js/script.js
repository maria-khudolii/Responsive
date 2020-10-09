$(document).ready(function () {
	$('.burger-menu').click(function (event) {
		$('.wrapper').toggleClass('menu-open');
	});
});

$('.slick-slider').slick({
	arrows: false,
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 3,
	adaptiveHeight: true,
	easing: 'ease',
	autoplay: true,
	autoplaySpeed: 3500,
	draggble: false,
	touchThreshold: 10,
	waitForAnimate: false,
	responsive: [
		{
			breakpoint: 1352,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 1165,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 876,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]

});