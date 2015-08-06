;(function( $ ) {
	"use strict";

	$( document ).on( 'ready', function() {

		var $window = $( window ),
			$body = $( 'body' ),
			$document = $( document ),
			drew = {
				headerFloatingHeight : 60,
			};

		/**
		 * =======================================
		 * Function: Detect Mobile Device
		 * =======================================
		 */
		// source: http://www.abeautifulsite.net/detecting-mobile-devices-with-javascript/
		var isMobile = {
			Android: function() {
				return navigator.userAgent.match( /Android/i );
			},
			BlackBerry: function() {
				return navigator.userAgent.match( /BlackBerry/i );
			},
			iOS: function() {
				return navigator.userAgent.match( /iPhone|iPad|iPod/i );
			},
			Opera: function() {
				return navigator.userAgent.match( /Opera Mini/i );
			},
			Windows: function() {
				return navigator.userAgent.match( /IEMobile/i );
			},
			any: function() {
				return ( isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() );
			},
		};

		/**
		 * =======================================
		 * Function: Resize Background
		 * =======================================
		 */
		var resizeBackground = function() {

		

		};
		$body.on( 'pageStart', function() {
			resizeBackground();
		});

		/**
		 * =======================================
		 * IE9 Placeholder
		 * =======================================
		 */
		$( 'form' ).on( 'submit', function() {
			$( this ).find( '[placeholder]' ).each(function() {
				var $input = $( this );
				if ( $input.val() == $input.attr( 'placeholder' ) ) {
					$input.val( '' );
				};
			});
		});

		$( '[placeholder]' ).on( 'focus', function() {
			var $input = $( this );
			if ( $input.val() == $input.attr( 'placeholder' ) ) {
				$input.val( '' );
				$input.removeClass( 'placeholder' );
			};
		}).on( 'blur', function() {
			var $input = $( this );
			if ( $input.val() == '' || $input.val() == $input.attr( 'placeholder' ) ) {
				$input.addClass( 'placeholder' );
				$input.val( $input.attr( 'placeholder' ) );
			};
		}).blur();

		/**
		 * =======================================
		 * Detect Mobile Device
		 * =======================================
		 */
		if ( isMobile.any() ) {
			// add identifier class to <body>
			$body.addClass( 'mobile-device' );
			// remove all element with class "remove-on-mobile-device"
			$( '.remove-on-mobile-device' ).remove();
		};

		/* =======================================
		 * Resize Video Background
		 * =======================================
		 */
		$window.on( 'resize', function() {
			resizeBackground();
		});

		/* =======================================
		 * Slideshow Background
		 * =======================================
		 */
		if ( $.fn.responsiveSlides ) {
			$body.on( 'pageStart', function() {
				$( '.section-background-slideshow' ).responsiveSlides({
					speed : $( this ).data( 'speed' ) ? $( this ).data( 'speed' ) : 800,
					timeout : $( this ).data( 'timeout' ) ? $( this ).data( 'timeout' ) : 4000,
				});
			});
		};

		/* =======================================
		 * Testimonial Slider
		 * =======================================
		 */
		if ( $.fn.responsiveSlides ) {
			$body.on( 'pageStart', function() {
				$( '.testimonial-slider' ).responsiveSlides({
					speed : $( this ).data( 'speed' ) ? $( this ).data( 'speed' ) : 800,
					timeout : $( this ).data( 'timeout' ) ? $( this ).data( 'timeout' ) : 4000,
					auto : $( this ).data( 'auto' ) ? $( this ).data( 'auto' ) : false,
					pager : true,
				});
			});
		};

		/* =======================================
		 * Hero Slider
		 * =======================================
		 */
		if ( $.fn.responsiveSlides ) {
			$body.on( 'pageStart', function() {
				$( '.section-slider' ).responsiveSlides({
					speed : $( this ).data( 'speed' ) ? $( this ).data( 'speed' ) : 800,
					timeout : $( this ).data( 'timeout' ) ? $( this ).data( 'timeout' ) : 4000,
					auto : $( this ).data( 'auto' ) ? $( this ).data( 'auto' ) : false,
					nav : true,
				});
			});
		};

		/* =======================================
		 * Video Embed Async Load
		 * =======================================
		 */
		$body.on( 'pageStart', function() {
			$( '.video-async' ).each( function( i, el ) {
				var $el = $( el ),
					source = $el.data( 'source' ),
					video = $el.data( 'video' ),
					color = $el.data( 'color' );

				if ( source == 'vimeo' ) {
					$el.attr( 'src', '//player.vimeo.com/video/' + video + ( color ? '?color=' + color : '' ) );
				} else if ( source == 'youtube' ) {
					$el.attr( 'src', '//www.youtube.com/embed/' + video + '?rel=0' );
				}

			});
		});
		
		/**
		 * =======================================
		 * Initiate Stellar JS
		 * =======================================
		 */
		if ( $.fn.stellar && ! isMobile.any() ) {
			$.stellar({
				responsive: true,
				horizontalScrolling: false,
				hideDistantElements: false,
				verticalOffset: 0,
				horizontalOffset: 0,
			});
		};

		/**
		 * =======================================
		 * Numbers (Counter Up)
		 * =======================================
		 */
		if ( $.fn.counterUp ) {
			$( '.counter-up' ).counterUp({
				time: 1000,
			});
		};

		/**
		 * =======================================
		 * Scroll Spy
		 * =======================================
		 */
		var toggleHeaderFloating = function() {
			// Floating Header
			if ( $window.scrollTop() > 80 ) {
				$( '.header-section' ).addClass( 'floating' );
			} else {
				$( '.header-section' ).removeClass( 'floating' );
			};
		};

		$window.on( 'scroll', toggleHeaderFloating );

		/**
		 * =======================================
		 * One Page Navigation
		 * =======================================
		 */
		if ( $.fn.onePageNav ) {
			$( '#header-nav' ).onePageNav({
				scrollSpeed : 1000,
				filter : ':not(.external)',
				begin : function() {
					if ( $window.width() < 992 ) {
						$( '#navigation' ).collapse( 'toggle' );
					}
				},
			});
		};

		/**
		 * =======================================
		 * Animations
		 * =======================================
		 */
		if ( $body.hasClass( 'enable-animations' ) && ! isMobile.any() ) {
			var $elements = $( '*[data-animation]' );

			$elements.each( function( i, el ) {

				var $el = $( el ),
					animationClass = $el.data( 'animation' );

				$el.addClass( animationClass );
				$el.addClass( 'animated' );
				$el.addClass( 'wait-animation' );

				$el.one( 'inview', function() {
					$el.removeClass( 'wait-animation' );
					$el.addClass( 'done-animation' );
				});
			});
		};

		/**
		 * =======================================
		 * Anchor Link
		 * =======================================
		 */
		$body.on( 'click', 'a.anchor-link', function( e ) {
			e.preventDefault();

			var $a = $( this ),
				$target = $( $a.attr( 'href' ) );

			if ( $target.length < 1 ) return;

			$( 'html, body' ).animate({ scrollTop: Math.max( 0, $target.offset().top - drew.headerFloatingHeight ) }, 1000 );
		});

		/**
		 * =======================================
		 * Google Maps
		 * =======================================
		 */
		if ( typeof Maplace == 'function' && $( '#gmap' ) ) {
			new Maplace( gmap_options ).Load();
		};

		/**
		 * =======================================
		 * Countdown
		 * =======================================
		 */
		if ( $.fn.countdown ) {
			$( '.countdown' ).each( function( i, el ) {
				var $el = $ ( el ),
					date = $el.data( 'countdown' ),
					format = $el.html();

				$el.countdown( date, function( e ) {
					$( el ).html( e.strftime( format ) );
				});
				$el.show();
			});
		};

		/**
		 * =======================================
		 * Form AJAX
		 * =======================================
		 */
		$( 'form' ).each( function( i, el ) {

			var $el = $( this );

			if ( $el.hasClass( 'form-ajax-submit' ) ) {

				$el.on( 'submit', function( e ) {
					e.preventDefault();

					var $alert = $el.find( '.form-validation' ),
						$submit = $el.find( 'button' ),
						action = $el.attr( 'action' );

					// button loading
					$submit.button( 'loading' );

					// reset alert
					$alert.removeClass( 'alert-danger alert-success' );
					$alert.html( '' );

					$.ajax({
						type     : 'POST',
						url      : action,
						data     : $el.serialize() + '&ajax=1',
						dataType : 'JSON',
						success  : function( response ) {

							// custom callback
							$el.trigger( 'form-ajax-response', response );
							
							// error
							if ( response.error ) {
								$alert.html( response.message );
								$alert.addClass( 'alert-danger' ).fadeIn( 500 );
							}
							// success
							else {
								$el.trigger( 'reset' );
								$alert.html( response.message );
								$alert.addClass( 'alert-success' ).fadeIn( 500 );
							}

							// reset button
							$submit.button( 'reset' );
						},
					})
				});
			};
		});

		/* =======================================
		 * Preloader
		 * =======================================
		 */
		if ( $.fn.jpreLoader && $body.hasClass( 'enable-preloader' ) ) {

			$body.on( 'pageStart', function() {
				$body.addClass( 'done-preloader' );
			});

			$body.jpreLoader({
				showSplash : false,
				// autoClose : false,
			}, function() {
				$body.trigger( 'pageStart' );
			});

		} else {
			$body.trigger( 'pageStart' );
		};

		$window.trigger( 'resize' );
		$window.trigger( 'scroll' );

	});

})( jQuery );