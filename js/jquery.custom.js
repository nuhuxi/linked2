(function($) {
	"use strict";
	
/* ==============================================
LOADER -->
=============================================== */

	$(window).load(function() {
		$('#status').delay(600).fadeOut('slow');
		$('#preloader').delay(600).fadeOut('slow');
		$('body').delay(600).css({'overflow':'visible'});
	})
	
/* ==============================================
BACK TO TOP -->
=============================================== */

    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({bottom:"25px"});
        } else {
            jQuery('.dmtop').css({bottom:"-100px"});
        }
    });
    jQuery('.dmtop').click(function(){
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });

/* ==============================================
HOVER SERVICES -->
=============================================== */

	if($('#testimonials').length){
		$('.testimonial-nav').each(function(){
		    var container = $(this),
		    	children = container.children('li');
		    children.sort(function(a,b){
		          var temp = parseInt('8', 8);
		          var isOddOrEven = temp%2;
		          var isPosOrNeg = temp>5 ? 1 : -1;
		          return( isOddOrEven*isPosOrNeg );
		    })
		    .appendTo(container);            
		});

		$('#testimonials .testimonial:eq(8),#testimonials .testimonial-nav a:eq(8)').addClass('active');
		$('#testimonials .testimonial-nav a').hover(function(){
			$('#testimonials .testimonial-nav a,#testimonials .testimonial').removeClass('active');
			$(this).addClass('active');
			$($(this).attr('href')).addClass('active');
		});
		$('#testimonials .testimonial-nav a').click(function(){ return false; });
	}
	
/* ==============================================
PARALLAX -->
=============================================== */
	
	$('.section-parallax').imageScroll({
		coverRatio: 0.5
	});
	
/* ==============================================
ANIMATION -->
=============================================== */

	var wow = new WOW({
		mobile: false
	});
	wow.init();	

/* ==============================================
SCROLLING -->
=============================================== */

    smoothScroll.init({
        speed: 900,
        easing: 'easeInOutCubic',
        updateURL: false,
        offset: 0,
        callbackBefore: function ( toggle, anchor ) {},
        callbackAfter: function ( toggle, anchor ) {}
    });
	
/* ==============================================
FLEXSLIDER -->
=============================================== */

	$('#testimonials-slider').flexslider({
		animation: 'fade',
		slideshow: true,
		controlNav: true,
		directionNav: false,
		animationLoop: true
	});
		
	$('.flexslider').flexslider({
		animation: 'fade',
		slideshow: false,
		controlNav: false,
		animationLoop: true
	});
		
/* ==============================================
FUN -->
=============================================== */

    function count($this){
        var current = parseInt($this.html(), 10);
        current = current + 1;
        $this.html(++current);
            if(current > $this.data('count')){
                $this.html($this.data('count'));
            } 
            else {    
                setTimeout(function(){count($this)}, 30);
            }
        }        
        $(".stat-count").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });
	
/* ==============================================
MAP -->
=============================================== */

	var locations = [
		['<div class="infobox"><h3 class="title"><a href="about1.html">OUR USA OFFICE</a></h3><span>NEW YORK CITY 2045 / 65</span><br>+90 555 666 77 88</p></div></div></div>', -37.801578, 145.060508, 2]
		];
	
		var map = new google.maps.Map(document.getElementById('map'), {
		  zoom: 13,
			scrollwheel: false,
			navigationControl: true,
			mapTypeControl: false,
			scaleControl: false,
			draggable: true,
			styles: [ { "stylers": [ { "hue": "#000" },  {saturation: -100},
                {gamma: 1.6} ] } ],
			center: new google.maps.LatLng(-37.801578, 145.060508),
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		});
	
		var infowindow = new google.maps.InfoWindow();
	
		var marker, i;
	
		for (i = 0; i < locations.length; i++) {  
	  
			marker = new google.maps.Marker({ 
			position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
			map: map ,
			icon: 'images/marker.png'
			});
	
	
		  google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
			  infowindow.setContent(locations[i][0]);
			  infowindow.open(map, marker);
			}
		  })(marker, i));
		}
		
	})(jQuery);