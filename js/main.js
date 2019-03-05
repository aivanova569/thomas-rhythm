
$(document).ready(function(){

	$(".services__tabs .tabs__wrapper .tab").click(function() {
		$(".services__tabs .tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 		$(".services__tabs .tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



	var mixer = mixitup('.portfolio__items-content');

	$('.slider__inner').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		dots: true,
	});

	$('.map__cover').click(function(){
		$('.map__cover').addClass('active');
	});


	$('.btn-menu').click(function(){
		$('.menu-list').slideToggle();
	});

	var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
});