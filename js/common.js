$(function() {

	/* E-mail Ajax Send */

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	/* Adaptive menu */

    (function($){
      $(function() {
        $('.menu__icon').on('click', function() {
          $(this).closest('.mob-wrap').toggleClass('menu_state_open');
        });
      });
    })(jQuery);

    /* Slider-interier */

	 $('.single-item').slick({
	 	autoplay: true,
	 	infinite: true,
      	dots: true
	 });

	/* Slider-header-bg */

	$('.carousel').carousel();

	/* Animation */

	$('.men-animation, .kids-animation, .map-descr-main')
		.waypoint( function(dir) {
		if ( dir === 'down' )
		$(this)
		.removeClass('fadeOut')
		.addClass('bounceInRight');
		else
		$(this)
		.removeClass('bounceInRight')
		.addClass('fadeOut');
		}, {
		offset: '80%'
		})
		.waypoint( function(dir) {
		if ( dir === 'down' )
		$(this)
		.removeClass('bounceInRight')
		.addClass('fadeOut');
		else
		$(this)
		.removeClass('fadeOut')
		.addClass('bounceInRight');
		}, {
		offset: -360
	})

	$('.women-animation')
		.waypoint( function(dir) {
		if ( dir === 'down' )
		$(this)
		.removeClass('fadeOut')
		.addClass('bounceInLeft');
		else
		$(this)
		.removeClass('bounceInLeft')
		.addClass('fadeOut');
		}, {
		offset: '80%'
		})
		.waypoint( function(dir) {
		if ( dir === 'down' )
		$(this)
		.removeClass('bounceInLeft')
		.addClass('fadeOut');
		else
		$(this)
		.removeClass('fadeOut')
		.addClass('bounceInLeft');
		}, {
		offset: -360
	})	

	$('.enroll .button, .card-img-1, .card-img-2')
		.waypoint( function(dir) {
		if ( dir === 'down' )
		$(this)
		.removeClass('fadeOut')
		.addClass('flipInY');
		else
		$(this)
		.removeClass('flipInY')
		.addClass('fadeOut');
		}, {
		offset: '80%'
		})
		.waypoint( function(dir) {
		if ( dir === 'down' )
		$(this)
		.removeClass('flipInY')
		.addClass('fadeOut');
		else
		$(this)
		.removeClass('fadeOut')
		.addClass('flipInY');
		}, {
		offset: -400
	})

	/* Chrome Smooth Scroll */ 

	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	/********** Pop-up-form **********/

	// $(".order-call, .call").click(function() {
	// 	$("#callback h4").html($(this).text());
	// 	$("#callback input[name=formname]").val($(this).text());
	// }).magnificPopup({
	// 	type:"inline",
	// 	mainClass: 'mfp-forms'
	// });
});


