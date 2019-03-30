$(window).on('load', function() {
    $('.loader .inner').fadeOut(500, function(){
        $('.loader').fadeOut(750);
    });
});

$(document).ready(function() {

    // Superslides Plugin.
    $('#slides').superslides({
        animation: 'fade',
        play: 0
    });

    //typed plugin
    var options = {
        strings: ["Graduate Student", "Software Engineer", "Web Developer"],
        typeSpeed: 70,
        startDelay: 1000,
        loop: true,
        showCursor: false
      }
      var typed = new Typed(".typed", options);

    // Owl carousel Plugin.
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoPlaySpeed: 3000,
        autoplayTimeout:3000,
        items: 5,
        itemsDesktop : [1000,5]
    });
  
    $('#jq').LineProgressbar({
        percentage: 90 // 90%
      });
        

    var skillTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function(){
        if(window.pageYOffset > skillTopOffset - $(window).height()+200) {
            // Easy-Pie Chart
        $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: "#FFD700",
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        }); 
        }
    });

    $('[data-fancybox]').fancybox();

	$("#navigation li a").click(function(e) {
		e.preventDefault();
		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
	});

    //sticking the navigation bar to top
    const nav = $("#navigation");
	const navTop = nav.offset().top;
	$(window).on("scroll", stickyNavigation);
	function stickyNavigation() {
		var body = $("body");

		if($(window).scrollTop() >= navTop) {
            body.css("padding-top" , nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
            body.css("padding-top" , 0 + "px");
			body.removeClass("fixedNav");
		}
    }

    //experience section tab.
    $('.experienceContent').hide();
    $('.experienceContent:first').show();
    $('.experienceTab li:first').addClass('active');
    $('.experienceTab li').click(function(event) {
        $('.experienceTab li').removeClass('active');
        $(this).addClass('active');
        $('.experienceContent').hide();
        var selectTab = $(this).find('a').attr("href");
        $(selectTab).fadeIn();
        event.preventDefault();
      });
});