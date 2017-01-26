$(document).ready(function() {

	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$('.top-menu').slideToggle();
	});

	$(".main-footer .toggle-menu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(".arrow").click(function() {
		$("html, body").animate({ scrollTop: $(".main").height()+120 }, "slow");
		return false;
	});

	$(".top-menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
  	$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".section_1 .section-content .info-item").equalHeights();
	$(".section_3 .section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".s2-item").equalHeights();
	$(".s2-item .img-wrap").equalHeights();

	$(".section_4").waypoint(function() {

		$(".section_4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 300*index);
		});

	}, {
		offset : "20%"
	});
	
	var waypointsvg = new Waypoint({

		element: $(".section_5"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".section_5 .tc-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".tc-content").addClass("tc-content-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

	$(".section_6").waypoint(function() {

		$(".section_6 .team").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-off").addClass("team-on");
			}, 200*index);
		});

	}, {
		offset : "35%"
	});


	$(".slider").owlCarousel({
		
		items : 1,
		itemsDesktop : [1380,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		singleItem : false,
		itemsScaleUp : false,
		navigation : true,
		navText : "",
		autoPlay : true,
		stopOnHover : true,
		navigationText : false,
		addClassActive : true,
		slideSpeed : 1000,
		paginationSpeed : 1100,
		rewindSpeed : 1500,
		loop : true



	});

	$(".section-head h2, .section-head p").animated("fadeIn");
	$(".info-item-wrap").animated("zoomIn");
	$(".slider .slide").animated("fadeIn");
	$(".homesect.section_8 .forms").animated("fadeInRight");
	$(".homesect.section_8 .p").animated("fadeIn");

	$(".section_2").waypoint(function() {
		$(".s2-item-wrp").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	$(".section_8").waypoint(function() {
		$(".s8-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".homesect .section-bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});