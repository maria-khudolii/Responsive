$(document).ready(function () {
	$('.burger-menu').click(function (event) {
		$('.wrapper').toggleClass('menu-open');
		$('.menu-open').toggleClass('lock');
	});
});