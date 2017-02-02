/*
Theme: Flatfy Theme
Author: Andrea Galanti
Bootstrap Version 
Build: 1.0
http://www.andreagalanti.it
*/

$(window).load(function() { 
	//Preloader 
	$('#status').delay(300).fadeOut(); 
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function() {
		//animated logo
		$(".navbar-brand").hover(function () {
			$(this).toggleClass("animated shake");
		});
		
		$(".navbar-brand").hover(function () {
			$(this).toggleClass("animated shake");
		});

		$("#topnav li").hover(function(){
			$("#topnav li").css("background","orange");	
			var a=$(this).attr("value");
			console.log(a);
			$(this).css({"background-image":a
				,"-webkit-background-size": "cover"
				," -moz-background-size": "cover"
				," -o-background-size": "cover"
				,"background-size": "cover"});
		});

		//animated scroll_arrow
		$(".img_scroll").hover(function () {
			$(this).toggleClass("animated infinite bounce");
		});
		
		//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
		wow = new WOW(
		{
			mobile: false
		});
		wow.init();
		
		//MagnificPopup
		$('.image-link').magnificPopup({type:'image'});

		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
		$('.image-popup-vertical-fit').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true
			}

		});

		$('.popup-gallery2').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

		$('.popup-gallery3').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

		$('.popup-gallery4').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

		$('.popup-gallery-cold').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

		$('.popup-gallery-power').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

		$('.popup-gallery-wet').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});


		$('.popup-gallery-air').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});


		// OwlCarousel N1
		$("#owl-demo").owlCarousel({
			autoPlay: 3000,
			items : 1,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});

		$("#owl-cold").owlCarousel({
			autoPlay: 3000,
			items : 1,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});
		$("#bu-demo").owlCarousel({
			lazyLoad : true,
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  items : 5,
			  nav: true,
			  paginationSpeed : 400,
			  singleItem:false
			})

		$("#wet-demo").owlCarousel({
			lazyLoad : true,
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  items : 5,
			  nav: true,
			  paginationSpeed : 400,
			  singleItem:false
			})
		$("#air-demo").owlCarousel({
			lazyLoad : true,
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  items : 5,
			  nav: true,
			  paginationSpeed : 400,
			  singleItem:false
			})

		$("#cold-demo").owlCarousel({
			lazyLoad : true,
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  items : 5,
			  nav: true,
			  paginationSpeed : 400,
			  singleItem:false
			})

		$("#power-demo").owlCarousel({
			lazyLoad : true,
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  items : 5,
			  nav: true,
			  paginationSpeed : 400,
			  singleItem:false
			})

		
		$("#bu-demo1").owlCarousel({
			lazyLoad : true,
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  items : 3,
			  paginationSpeed : 400,
			  singleItem:false
			})
		
		$("#bu-demo5").owlCarousel({
			lazyLoad : true,
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  items : 5,
			  paginationSpeed : 400,
			  singleItem:false
			})

		// OwlCarousel N2
		$("#owl-demo-1").owlCarousel({
			lazyLoad : true,
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
			});

		//SmothScroll
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
				&& location.hostname == this.hostname) {
				var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 600);
				return false;
			}
		}
	});
		
		//Subscribe
		new UIMorphingButton( document.querySelector( '.morph-button' ) );
		// for demo purposes only
		[].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) { 
			bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );
		} );

	});

