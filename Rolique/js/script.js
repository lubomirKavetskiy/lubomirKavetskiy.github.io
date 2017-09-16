"use strict";

function animatingReloader() {
    window.setTimeout(function () {
        $(".preloader__logo-box>span").addClass("move")
    }, 500);

    window.setInterval(function () {
        var r = Math.floor(Math.random() * 255) + 1,
            g = Math.floor(Math.random() * 255) + 1,
            b = Math.floor(Math.random() * 255) + 1;

        $(".preloader__logo-box>span").css({"background-color": "rgba(" + r + "," + g + "," + b + ",1)"})
    }, 500);
}
// ================================ //

function wowStart() {
    new WOW().init();
}

// function handlePreloader(timeIterPreloader, mobile) {
function handlePreloader(timeIterPreloader) {
    if ($('.preloader').length) {
        $('.preloader__logo-box').delay(timeIterPreloader - 500).fadeOut(500
            // , function() {fullpageStart();}
        );
        $('.preloader').delay(timeIterPreloader).fadeOut(700);

        setTimeout(function() {wowStart()}, timeIterPreloader);

        // WOW.js (Animate on scroll library) https://github.com/matthieua/WOW
        // if (!mobile) {
            fullpageStart();

        // }




        //     , function () {
        //     setTimeout(function () {
        //         // if(windowWidth > 480) {
        //             $('.header').addClass('fadeIn');
        //             setTimeout(function () {
        //                 $('.first-page .section__container').addClass('fadeInDown');
        //                 setTimeout(function () {
        //                     $('.first-page .social-icons').addClass('fadeIn');
        //                 }, 1000);
        //             }, 700);
        //         // }
        //
        //     }, 1);
        // }
        // );
    }
}
// ================================ //



// ====== fixed navigation ======= //
function fixedNavigation(valueScroll) {
    if($(".header").length) {
        console.log($(window).width());


        var tempScrollTop,
            currentScrollTop = 0;

        $(window).scroll(function () {

            currentScrollTop = $(this).scrollTop();

            if ((tempScrollTop < currentScrollTop) && (currentScrollTop > valueScroll)) {
                $(".header").slideUp(300, function() {
                    $(".header").stop(true, true);
                });
            }
            else if (tempScrollTop > currentScrollTop) {
                $(".header").slideDown(300);
            }
            tempScrollTop = currentScrollTop;
        });
    }
    else {
        return false
    }
}




// ====== toggle navigation ======= //
function toggleNavigation() {
    $(".navigation__hamburger").click(function () {
        const $this = $(this);

        $this.toggleClass('active');
        $('.navigation__list').toggleClass('fadeIn-Flex');
        $('.header').toggleClass('backgroundHeader-fadeIn');

        $(".navigation__hamburger").hasClass("active") ?
            $('body, html').css({'overflow':'hidden'})
            :
            $('body, html').css({'overflow':'visible'})
    });

    $(".navigation__list a, .logo").click(function () {
        if ($(".navigation__hamburger").hasClass("active")) {
            $(".navigation__hamburger").trigger('click');
        }
    });
}
// ================================ //


// fullPage.js (Full screen pages library) https://github.com/alvarotrigo/fullPage.js
function fullpageStart() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        // scrollOverflow: true,

        //Scrolling
        css3: true,
        scrollingSpeed: 300,
        easingcss3: 'ease-in',
        sectionsColor: ['transparent', '#212121', 'transparent', '#FFF'],
        responsiveWidth: 768,
        scrollBar: true,

        //events
        onLeave: function (index, nextIndex, direction) {
                var leavingSection = $(this);

                if (nextIndex == 2) {
                    $('.second-page__img').toggleClass('fadeInDown');
                    console.log(2);
                }
        }



    });
}
// ================================ //




// ================================ //


// DOCUMENT READY
$(document).ready(function () {
    var mobile;

    ($(window).width() < 768) ? mobile = true : mobile = false;


    $(".preloader__logo-box>img").fadeIn(2000);

    animatingReloader();

    // if(mobile) fixedNavigation(100);
    // fixedNavigation(100);

    toggleNavigation();
});
// ================================ //


// WINDOW LOAD
$(window).on("load", function () {
    // var windowWidth = $(window).width(),
    //     mobile;
    //
    // (windowWidth < 768) ? mobile = true : mobile = false;

    // handlePreloader(5500, mobile);

    handlePreloader(5500);

    // $(window).resize(function() {
    //     console.log('m', mobile);
    // });

});
// ================================ //

// WINDOW RESIZE
$(window).resize(function() {
     // var curWidth = $(window).width()
    // var a = $(window).width();
    //
    // if($(window).width() < 768) fixedNavigation(100);

    // if(a > 768) {
        var a = $(window).width();
        if(a<767) {
            fixedNavigation(100)
        } else {
            fixedNavigation(10000)
        };
    // }
});
// ================================ //



















// function fullpageStart() {
//
//     $('#fullpage').fullpage({
//         //Navigation
//         menu: '#menu',
//         anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
//         scrollOverflow: true,
//
//         //Scrolling
//         css3: true,
//         scrollingSpeed: 200,
//         easingcss3: 'ease-in',
//         sectionsColor: ['transparent', '#212121', 'transparent', '#FFF'],
//
//         onLeave: function (index, nextIndex, direction) {
//
//                 var leavingSection = $(this);
//                 if (nextIndex == 2) {
//                     $.fn.fullpage.reBuild();
//                     setTimeout(function () {
//                         $('.second-page__img').addClass('fadeIn');
//                         $('.second-page__text').delay(800).slideDown(600, function () {
//                             $('.second-page__text').css({'opacity': '1'});
//                         });
//                     }, 1000);
//                 } else if (nextIndex == 3) {
//                     setTimeout(function () {
//                         $('.third-page .section__container').addClass('fadeInDown');
//                     }, 1000);
//                 } else if (nextIndex == 4) {
//                     if ($('.contact-form').hasClass('fadeIn')) {
//                         $('.logo').css({"background-position": "bottom center"});
//                         $('.navigation__item a').css({'color': '#FFF'});
//                         $('.header').toggleClass('backgroundNone').toggleClass('backgroundHeader');
//                     } else {
//                         $('.logo').css({"background-position": "bottom center"});
//                         $('.navigation__item a').css({'color': '#666'});
//                         $('.header').addClass('backgroundNone');
//                         setTimeout(function () {
//                             $('.fourth-page__container').addClass('fadeIn');
//                             setTimeout(function () {
//                                 if (windowWidth > 767) {
//                                     $('.fourth-page__first-half').addClass('halfFirstWidth');
//                                     $('.fourth-page__second-half').addClass('halfSecondWidth');
//                                     $('.navigation__item a').css({'color': '#FFF'});
//                                     setTimeout(function () {
//                                         $('.contact-form').addClass('fadeIn');
//                                     }, 1200);
//                                 } else {
//                                     $('.fourth-page__first-half').addClass('halfFirstHeight');
//                                     $('.fourth-page__second-half').addClass('halfSecondHeight');
//                                     $('.navigation__item a').css({'color': '#666'});
//                                     setTimeout(function () {
//                                         $('.contact-form').addClass('fadeIn');
//                                     }, 1200);
//                                 }
//                             }, 1000);
//                         }, 1000);
//                     }
//
//                 }
//                 if (index == 4 && direction == 'up') {
//                     $('.logo').css({"background-position": "top center"});
//                     $('.navigation__item a').css({'color': '#FFF'});
//                     $('.header').removeClass('backgroundNone').addClass('backgroundHeader');
//                 } else if (index == 2) {
//                     // $('.second-page').removeClass('moreOpacity');
//                 }
//             // }
//         }
//
//     });
// }

// $(window).resize(function() {
//     var windowWidth = $(window).width();
//     if(windowWidth < 767) {
//         $('.navigation__item a').css({'color': '#666'});
//     }
//     if($('.fourth-page__first-half').hasClass('halfFirstHeight') && windowWidth > 767){
//         $('.fourth-page__first-half, .fourth-page__second-half').toggleClass('height100');
//         // $('.fourth-page__container fadeIn').css('min-height', '100vh');
//
//     }else if($('.fourth-page__first-half').hasClass('halfFirstWidth') && windowWidth < 767){
//         $('.fourth-page__first-half, .fourth-page__second-half').addClass('width100');
//         $('.fourth-page__first-half').addClass('height30');
//         $('.fourth-page__second-half').addClass('height70');
//     }
// });
















