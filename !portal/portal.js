;(function( $ ) {
	"use strict";

	$( document ).on( 'ready', function() {

		if ( $.fn.responsiveSlides ) {
			$( 'body' ).on( 'pageStart', function() {
				$( '.success-stories-rslides' ).responsiveSlides({
					pager : true,
					nav : true,
					auto: false,
				});
			});
		};

	});				
})( jQuery );