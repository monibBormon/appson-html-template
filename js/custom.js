(function ($){
"use strict";


	$("#mobile-menu").meanmenu({
		meanMenuContainer:'.mobile-menu',
		meanScreenWidth:'767'
	});



	// Screenshot Active
	$('.screenshot-active').owlCarousel({
		loop:true,
        nav:false,
        dots:true,
        margin:50,
		autoplay:true,
		autoplayTimeout:5000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})



	// Review Active
	$('.review-active').owlCarousel({
		loop:true,
        nav:true,
        navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        dots:true,
        dotsData:true,
        margin:50,
		autoplay:false,
		autoplayTimeout:5000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
















	
})(jQuery);