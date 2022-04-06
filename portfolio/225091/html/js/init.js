/*
 * Copyright (c) 2022 CoddyThemes
 * Author: CoddyThemes
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions

	oslo_tm_page_transition();
	oslo_tm_jarallax();
	oslo_tm_progress();
	oslo_tm_partners();
	oslo_tm_kenburn_slider();
	oslo_tm_imgtosvg();
	oslo_tm_popup();
	oslo_tm_data_images();
	oslo_tm_portfolio();
	oslo_tm_isotope();
	oslo_tm_ripple();
	
	jQuery(window).on('resize',function(){
		oslo_tm_isotope();
		oslo_tm_portfolio();
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.oslo_tm_preloader').addClass('loaded');
    }, 1000);
		setTimeout(function(){
        oslo_tm_isotope();
    }, 5000);
	});
	
});

// -------------------------------------------------
// ---------------   FUNCTIONS    ------------------
// -------------------------------------------------

// -----------------------------------------------------
// -------------   PAGE TRANSITION    ------------------
// -----------------------------------------------------

function oslo_tm_page_transition(){
	
	"use strict";
	
	var section 		= jQuery('.oslo_tm_section');
	var allLi 			= jQuery('.transition_link li');
	var button			= jQuery('.transition_link a');
	var wrapper 		= jQuery('.oslo_tm_all_wrap');
	var enter	 		= wrapper.data('enter');
	var exit		 	= wrapper.data('exit');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var href		= element.attr('href');
		if(element.parent().hasClass('oslo_tm_button')){
			jQuery('.oslo_tm_menu .transition_link a[href="'+href+'"]').trigger('click');
			hashtag();
			return false;
		}
		var sectionID 	= jQuery(href);
		var parent	 	= element.closest('li');
			if(!parent.hasClass('active')) {
				allLi.removeClass('active');
				wrapper.find(section).removeClass('animated');
				parent.addClass('active');
				wrapper.addClass('opened');
				wrapper.find(sectionID).removeClass('animated').addClass('animated');
				jQuery(section).addClass('hidden');
				jQuery(sectionID).removeClass('hidden').addClass('active');
			}
		return false;
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function oslo_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -----------------------------------------------------
// ---------------   PROGRESS BAR    -------------------
// -----------------------------------------------------

function oslo_tm_progress(){
	
	"use strict";
	
	var list	= jQuery('.oslo_tm_skills ul li');
	
	list.each(function(){
		var element		= jQuery(this);
		var progressVal	= element.find('.progress').data('value');
		var progressBar	= element.find('.bar');
		progressBar.css({width:progressVal+'%'});
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function oslo_tm_partners(){
	
	"use strict";
	
		var carouse1	= jQuery('.oslo_tm_partners .owl-carousel');
		
		var rtlMode	= false;
	
		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}
		
		carouse1.owlCarousel({
			loop: true,
			items: 5,
			lazyLoad: true,
			margin: 40,
			autoplay: true,
			autoplayTimeout: 4000,
			smartSpeed: 2000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:2},
				768:{items:3},
				1040:{items:3},
				1200:{items:4},
				1600:{items:4},
				1920:{items:5}
			}
		});
	
		var carouse2			= jQuery('.oslo_tm_testimonials .owl-carousel');
	
		var rtlMode	= false;
	
		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}
	
		carouse2.owlCarousel({
			loop: true,
			items: 2,
			lazyLoad: true,
			margin: 40,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:1},
				1040:{items:2},
				1200:{items:2},
				1600:{items:2},
				1920:{items:2}
			}
		});
		oslo_tm_imgtosvg();
	
		var carouse3			= jQuery('.oslo_tm_sertificate .owl-carousel');
	
		var rtlMode	= false;
	
		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}
	
		carouse3.owlCarousel({
			loop: true,
			items: 2,
			lazyLoad: true,
			margin: 40,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:1},
				1040:{items:2},
				1200:{items:2},
				1600:{items:2},
				1920:{items:2}
			}
		});
	}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function oslo_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.oslo_tm_fixed_image .overlay_slider,.oslo_tm_leftside .overlay_slider,.oslo_tm_sidebar_hero .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/portfolio/7.jpg' },
				{ src: 'img/portfolio/8.jpg' },
				{ src: 'img/portfolio/5.jpg' },
			]

		});
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function oslo_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function oslo_tm_popup(){
		"use strict";
	
		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
		jQuery('.popup-youtube').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		});
	}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

wow = new WOW({
    animateClass: 'animated',
    offset: 10
});
wow.init();

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function oslo_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function oslo_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.oslo_tm_works .portfolio_list ul');
		var filter		 = jQuery('.oslo_tm_works .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function oslo_tm_isotope(){
	
	"use strict";
	
	var masonry = $('.masonry');
	if($().isotope){
		masonry.each(function(){
			$(this).isotope({
			  itemSelector: '.masonry_item',
			  masonry: {

			  }
			});
		});
	}
	
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function oslo_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});


// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------

function tdProgress(container){

	"use strict";

	container.find('.edrea_tm_progress').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.edrea_tm_bar_wrap');
		var pBar 			= progress.find('.edrea_tm_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}
jQuery('.edrea_tm_progress_wrap').each(function() {
	"use strict";
	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});