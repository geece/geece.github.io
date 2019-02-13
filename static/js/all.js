$(document).ready(function () {
    //////// NAV //////////
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar').outerHeight();
    var pageST = $("body").scrollTop();
    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    var openMenu = false;
    // Scroll

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    if (lastPathSegment === "blog01.html" || lastPathSegment === "blog02.html" || lastPathSegment === "blog03.html" || lastPathSegment === "blog04.html" || lastPathSegment === "blog05.html" || lastPathSegment === "blog06.html") {
        $('.navbar').removeClass('navBgNone').addClass('navBgWhite');
        $(".headLogo").attr('src', '../img/icon/logo_black.svg');
    }

    function hasScrolled() {
        var st = $(this).scrollTop();
        // Add BG color
        if (lastPathSegment === "blog01.html" || lastPathSegment === "blog02.html" || lastPathSegment === "blog03.html" || lastPathSegment === "blog04.html" || lastPathSegment === "blog05.html" || lastPathSegment === "blog06.html") {
            $('.navbar').removeClass('navBgNone').addClass('navBgWhite');
            $(".headLogo").attr('src', '../img/icon/logo_black.svg');
            if (st > navbarHeight) {
                $(".fixedBtn img").attr("src", "../img/icon/circleArrowblack_full.svg");
                $(".fixedBtn img").css("opacity", "0.3");
                $(".fixedBtn").css("display", "inline-block");
            } else {
                $(".fixedBtn").css("display", "none");
            }

        } else {
            if (st > navbarHeight) {
                $('.navbar').removeClass('navBgNone').addClass('navBgWhite');
                $(".menuBtn").css("color", "#a8a8a8");
                $(".subMainButton").css("color", "#a8a8a8");
                $("#hamburger .burg,.navBgNone .burg:before,.navBgNone .burg:after").css("background", "black");

                if (lastPathSegment === "about.html" || lastPathSegment === "article.html" || lastPathSegment === "performance.html" || lastPathSegment === "service.html") {
                    $(".headLogo").attr('src', 'img/icon/logo_black.svg');
                } else {
                    $(".headLogo").attr('src', 'static/img/icon/logo_black.svg');
                }

                // scrolltotop icon
                if (lastPathSegment === "performance.html" || lastPathSegment === "article.html") {
                    $(".fixedBtn img").attr("src", "img/icon/circleArrowblack_full.svg");
                    $(".fixedBtn img").css("opacity", "0.3");
                }
                $(".fixedBtn").css("display", "inline-block");
            } else {
                $('.navbar').removeClass('navBgWhite').addClass('navBgNone');
                $(".menuBtn").css("color", "white");
                $(".subMainButton").css("color", "white");
                $("#hamburger .burg,.navBgNone .burg:before,.navBgNone .burg:after").css("background", "white");

                if (openMenu === false) {
                    if (lastPathSegment === "about.html" || lastPathSegment === "article.html" || lastPathSegment === "performance.html" || lastPathSegment === "service.html") {
                        $(".headLogo").attr('src', 'img/icon/logo.svg');
                    } else {
                        $(".headLogo").attr('src', 'static/img/icon/logo.svg');
                    }
                }
                $(".fixedBtn").css("display", "none");
            }
        }

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.navbar').removeClass('slideDown').addClass('hideUp');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.navbar').removeClass('hideUp').addClass('slideDown');
            }
        }

        lastScrollTop = st;
    }

    // SubNav Animate

    $('.subnav').hover(function () {
        if (lastPathSegment === "blog01.html" || lastPathSegment === "blog02.html" || lastPathSegment === "blog03.html" || lastPathSegment === "blog04.html" || lastPathSegment === "blog05.html" || lastPathSegment === "blog06.html") {
            $(".headLogo").attr('src', '../img/icon/logo_black.svg');
        }
        $('.navbar').removeClass('navBgNone').addClass('navBgWhite');
    }, function () {
        if (pageST === 0) {
            if (lastPathSegment === "blog01.html" || lastPathSegment === "blog02.html" || lastPathSegment === "blog03.html" || lastPathSegment === "blog04.html" || lastPathSegment === "blog05.html" || lastPathSegment === "blog06.html") {} else {
                $('.navbar').removeClass('navBgWhite').addClass('navBgNone');
            }
        }
    });

    $(".subButton").bind('mouseover', function () {
        $(".menuBtn").css("color", "#a8a8a8");
        $(".subMainButton").css("color", "#a8a8a8");

        if (lastPathSegment === "blog01.html" || lastPathSegment === "blog02.html" || lastPathSegment === "blog03.html" || lastPathSegment === "blog04.html" || lastPathSegment === "blog05.html" || lastPathSegment === "blog06.html") {
            $(".headLogo").attr('src', '../img/icon/logo_black.svg');
        } else if (lastPathSegment === "about.html" || lastPathSegment === "article.html" || lastPathSegment === "performance.html" || lastPathSegment === "service.html") {
            $(".headLogo").attr('src', 'img/icon/logo_black.svg');
        } else {
            $(".headLogo").attr('src', 'static/img/icon/logo_black.svg');
        }

        $(".subNav").css("transform", " translateY(0px)");
    }).bind('mouseout', function () {
        if (lastScrollTop === 0) {

            if (lastPathSegment === "blog01.html" || lastPathSegment === "blog02.html" || lastPathSegment === "blog03.html" || lastPathSegment === "blog04.html" || lastPathSegment === "blog05.html" || lastPathSegment === "blog06.html") {
                // Blog Page
                $(".menuBtn").css("color", "#a8a8a8");
                $(".subMainButton").css("color", "#a8a8a8");
                $(".headLogo").attr('src', '../img/icon/logo_black.svg');
            } else if (lastPathSegment === "about.html" || lastPathSegment === "article.html" || lastPathSegment === "performance.html" || lastPathSegment === "service.htm") {
                $(".menuBtn").css("color", "white");
                $(".subMainButton").css("color", "white");
                $(".headLogo").attr('src', 'img/icon/logo.svg');
            } else {
                $(".menuBtn").css("color", "white");
                $(".subMainButton").css("color", "white");
                $(".headLogo").attr('src', 'static/img/icon/logo.svg');
            }
        } else {
            $(".menuBtn").css("color", "#a8a8a8");
            $(".subMainButton").css("color", "#a8a8a8");

            if (lastPathSegment === "blog01.html" || lastPathSegment === "blog02.html" || lastPathSegment === "blog03.html" || lastPathSegment === "blog04.html" || lastPathSegment === "blog05.html" || lastPathSegment === "blog06.html") {
                // Blog Page
                $(".headLogo").attr('src', '../img/icon/logo_black.svg');
            } else if (lastPathSegment === "about.html" || lastPathSegment === "article.html" || lastPathSegment === "performance.html" || lastPathSegment === "service.htm") {
                $(".headLogo").attr('src', 'img/icon/logo_black.svg');
            } else {
                $(".headLogo").attr('src', 'static/img/icon/logo_black.svg');
            }
        }

        $(".subNav").css("transform", " translateY(-140px)");
    });

    // Body Movin
    if (lastPathSegment === "blog01.html" || lastPathSegment === "blog02.html" || lastPathSegment === "blog03.html" || lastPathSegment === "blog04.html" || lastPathSegment === "blog05.html" || lastPathSegment === "blog06.html") {
        $('.navbar').removeClass('navBgNone').addClass('navBgWhite');

        lottie.loadAnimation({
            container: document.getElementById('lottie'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../js/projectGV.json',
        })
    } else if (lastPathSegment === "about.html" || lastPathSegment === "article.html" || lastPathSegment === "performance.html" || lastPathSegment === "service.htm") {
        lottie.loadAnimation({
            container: document.getElementById('lottie'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'js/projectGV.json',
        })
    }


    $(".animate").delay(1800).fadeOut();
    $('.wrapper').delay(1800).queue(function () {
        $(this).addClass('moveUpAnimate').dequeue();
    });
    $("html").delay(1800).css({
        'overflow-y': 'scroll',
        'overflow-x': 'hidden'
    });

    // MOBILE NAV SWITCH

    var x;
    $("#hamburger").click(function () {
        openMenu = !openMenu;
        console.log(openMenu);
        event.preventDefault();
        $(".navbar").toggleClass("changeNavBg");
        $("#fullNav").slideToggle();
        $('body,html').toggleClass('lockBack');
        $('.burg').toggleClass('activeBurg');

        if (openMenu === true) {
            if (lastPathSegment === "about.html" || lastPathSegment === "article.html" || lastPathSegment === "performance.html" || lastPathSegment === "service.html") {
                console.log("innerpage");
                $('.headLogo').attr('src', 'img/icon/GVlogo(w).svg');
            } else if (lastPathSegment === "blog01.html" || lastPathSegment === "blog02.html" || lastPathSegment === "blog03.html" || lastPathSegment === "blog04.html" || lastPathSegment === "blog05.html" || lastPathSegment === "blog06.html") {
                console.log("blog");
                $('.headLogo').attr('src', '../img/icon/GVlogo(w).svg');
            } else {
                console.log("index");
                $('.headLogo').attr('src', 'static/img/icon/GVlogo(w).svg');
            }
        } else {
            if (lastPathSegment === "about.html" || lastPathSegment === "article.html" || lastPathSegment === "performance.html" || lastPathSegment === "service.html") {
                $('.headLogo').attr('src', 'img/icon/logo.svg');
            } else if (lastPathSegment === "blog01.html" || lastPathSegment === "blog02.html" || lastPathSegment === "blog03.html" || lastPathSegment === "blog04.html" || lastPathSegment === "blog05.html" || lastPathSegment === "blog06.html") {
                $('.headLogo').attr('src', '../img/icon/logo.svg');
            } else {
                $('.headLogo').attr('src', 'static/img/icon/logo.svg');
            }
        }
    });


    //Footer Scroll to top
    $(".scrollToTop").click(function () {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });

    // Storage item
    // To service page
    $('.freeze').click(function (event) {
        toPage = "freeze";
        localStorage.setItem("pageName", toPage);
    });
    $('.aircondition').click(function (event) {
        toPage = "aircondition";
        localStorage.setItem("pageName", toPage);
    });
    $('.firesafe').click(function (event) {
        toPage = "firesafe";
        localStorage.setItem("pageName", toPage);
    });
    $('.temperature').click(function (event) {
        toPage = "temperature";
        localStorage.setItem("pageName", toPage);
    });
    $('.maintain').click(function (event) {
        toPage = "maintain";
        localStorage.setItem("pageName", toPage);
    });
});