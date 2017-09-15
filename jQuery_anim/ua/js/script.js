function showModal(){
    $(".js-show-modal").on("click", function(){
        // event.stopPropagation(e);

        $(".js-modal, #js-overlay").fadeIn(500);
        $("body").addClass(".open-modal");
    });
}

function closeModal() {
    $(".js-icon-close").on("click", function(){
        // event.stopPropagation(e);

        $(".js-modal, #js-overlay").fadeOut(100);
        $("body").removeClass(".open-modal");
    });
}

function triggerClickModal() {
    $("#js-overlay").on("click", function () {
        $(".js-icon-close").trigger("click");
    });
}

$(document).on("ready", function() {

    $(".fa-chevron-down").on("mouseenter", function(){
        // event.stopPropagation(e);
        var $this = $(this);

        $this.parent("a").siblings("a").show(300);
    });

    $(".language-wrap").on("mouseleave", function(){
        // event.stopPropagation();
        var $this = $(this);

        $this.children(".language__nav").not(".language__nav_current").hide(200);
    });

    showModal();
    closeModal();
    triggerClickModal()

    $('.how-do-we__wrap').each(function(){
        var highestBox = 0;
        $('.col-sm-3 ', this).each(function(){
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $('.col-sm-3', this).height(highestBox);
    });


    // SLICK-SLIDER //
    //==============================================//
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        // speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });

    $(".js-slider-prev").on("click", function () {
        $(".slider").slick("slickPrev");
    });

    $(".js-slider-next").on("click", function () {
        $(".slider").slick("slickNext");
    });
    //==============================================//


    // GOOGLE-MAP//
    //==============================================//
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 17,
            zoomControl: true,
            scrollwheel: false,
            streetViewControl: false,
            mapTypeControl: false,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(49.8442235, 24.0241), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: []
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            // position: new google.maps.LatLng(49.850183, 24.0205378),
            position: new google.maps.LatLng(49.8442235, 24.0241),
            map: map,
            title: 'вул. Шпитальна, 1'
        });

        map.addListener('click', function () {
            map.setOptions({
                scrollwheel: true,
                // zoomControl: true
            });
        });

        map.addListener('drag', function () {
            map.setOptions({
                scrollwheel: true,
                // zoomControl: true
            });
        });

        map.addListener('mouseout', function () {
            map.setOptions({
                scrollwheel: false,
                // zoomControl: false
            });
        });

        //resize
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    }


    //AOS (Animate on scroll library) https://michalsnik.github.io/aos/  &&   https://github.com/michalsnik/aos //
    //==============================================//
    AOS.init();

    // Animate for: .why-you-choose-us__article

    if ($(window).width() < 481) {
        $(".why-you-choose-us__article").eq(1).children("img").attr('data-aos-delay', "0");
        $(".why-you-choose-us__article").eq(1).children("div").attr('data-aos-delay', "0");
        $(".why-you-choose-us__article").eq(2).children("img").attr('data-aos-delay', "0");
        $(".why-you-choose-us__article").eq(2).children("div").attr('data-aos-delay', "0");
        $(".why-you-choose-us__article").eq(3).children("img").attr('data-aos-delay', "0");
        $(".why-you-choose-us__article").eq(3).children("div").attr('data-aos-delay', "0");
    }

    $(window).resize(function () {
        if ($(window).width() < 481) {
            $(".why-you-choose-us__article").eq(1).children("img").attr('data-aos-delay', "0");
            $(".why-you-choose-us__article").eq(1).children("div").attr('data-aos-delay', "0");
            $(".why-you-choose-us__article").eq(2).children("img").attr('data-aos-delay', "0");
            $(".why-you-choose-us__article").eq(2).children("div").attr('data-aos-delay', "0");
            $(".why-you-choose-us__article").eq(3).children("img").attr('data-aos-delay', "0");
            $(".why-you-choose-us__article").eq(3).children("div").attr('data-aos-delay', "0");
        } else {
            $(".how-do-we__article").eq(1).children("img").attr('data-aos-delay', "200");
            $(".how-do-we__article").eq(1).children("div").attr('data-aos-delay', "200");
            $(".how-do-we__article").eq(2).children("img").attr('data-aos-delay', "400");
            $(".how-do-we__article").eq(2).children("div").attr('data-aos-delay', "400");
            $(".how-do-we__article").eq(3).children("img").attr('data-aos-delay', "600");
            $(".how-do-we__article").eq(3).children("div").attr('data-aos-delay', "600");
        }
    })

    // Animate for: .how-do-we
    if ($(window).width() < 992) {
        $(".how-do-we__article").eq(2).children("img").attr('data-aos-delay', "0");
        $(".how-do-we__article").eq(2).find("button").attr('data-aos-delay', "0");
        $(".how-do-we__article").eq(3).children("img").attr('data-aos-delay', "200");
        $(".how-do-we__article").eq(3).find("button").attr('data-aos-delay', "200");
    }

    if ($(window).width() < 481) {
        $(".how-do-we__article").eq(1).children("img").attr('data-aos-delay', "0");
        $(".how-do-we__article").eq(1).find("button").attr('data-aos-delay', "0");
        $(".how-do-we__article").eq(2).children("img").attr('data-aos-delay', "0");
        $(".how-do-we__article").eq(2).find("button").attr('data-aos-delay', "0");
        $(".how-do-we__article").eq(3).children("img").attr('data-aos-delay', "0");
        $(".how-do-we__article").eq(3).find("button").attr('data-aos-delay', "0");
    }

    $(window).resize(function () {
        if ( ($(window).width() < 992) && ($(window).width() > 480)) {
            $(".how-do-we__article").eq(2).children("img").attr('data-aos-delay', "0");
            $(".how-do-we__article").eq(2).find("button").attr('data-aos-delay', "0");
            $(".how-do-we__article").eq(3).children("img").attr('data-aos-delay', "200");
            $(".how-do-we__article").eq(3).find("button").attr('data-aos-delay', "200");
        } else if ($(window).width() < 481) {
            $(".how-do-we__article").eq(1).children("img").attr('data-aos-delay', "0");
            $(".how-do-we__article").eq(1).find("button").attr('data-aos-delay', "0");
            $(".how-do-we__article").eq(2).children("img").attr('data-aos-delay', "0");
            $(".how-do-we__article").eq(2).find("button").attr('data-aos-delay', "0");
            $(".how-do-we__article").eq(3).children("img").attr('data-aos-delay', "0");
            $(".how-do-we__article").eq(3).find("button").attr('data-aos-delay', "0");
        } else {
            $(".how-do-we__article").eq(1).children("img").attr('data-aos-delay', "200");
            $(".how-do-we__article").eq(1).find("button").attr('data-aos-delay', "200");
            $(".how-do-we__article").eq(2).children("img").attr('data-aos-delay', "400");
            $(".how-do-we__article").eq(2).find("button").attr('data-aos-delay', "400");
            $(".how-do-we__article").eq(3).children("img").attr('data-aos-delay', "600");
            $(".how-do-we__article").eq(3).find("button").attr('data-aos-delay', "600");
        }
    })
    //==============================================//


    // Animate on counter http://webcareer.ru/animirovannoe-uvelichenie-chisel-na-jquery.html  //
    //==============================================//
    var show = true;
    var countbox = "#js-we-help-your";
    $(window).on("scroll load resize", function(){

        if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $(countbox).outerHeight();

        if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".counter1").spincrement({
                from: 1,
                to: 56,
                thousandSeparator: "",
                duration: 1000
            });

            $(".counter2").spincrement({
                from: 1,
                to: 1700,
                thousandSeparator: "",
                duration: 1500
            });

            $(".counter3").spincrement({
                from: 1,
                to: 29000,
                thousandSeparator: "",
                duration: 2500
            });

            show = false;
        }
    });
    //==============================================//
});




