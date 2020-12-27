$(document).ready(function () {
    // lazy load
    const observer = lozad();
    observer.observe();

    // Submenu
    var $subMenu = $(".sliderMenu");
    $(this).scrollTop(0);
    $("#bBox,#cBox,#dBox,#eBox").hide();
    $(".photoImg a").hover(function () {
        $(this).find(".overLayer").css("opacity", "1");
    }, function () {
        $(this).find(".overLayer").css("opacity", "0");
    });

    $(".photoImg a").click(function (event) {
        event.preventDefault();
    });

    $(".showAbox").click(function (event) {
        event.preventDefault();
        $("#bBox,#cBox,#dBox,#eBox").hide();
        $("#aBox").fadeIn();
    });

    $(".m_Abox").click(function (event) {
        event.preventDefault();
        $("#bBox,#cBox,#dBox,#eBox").hide();
        $("#aBox").fadeIn();
        checkSlide();
    });

    $(".showBbox").click(function (event) {
        event.preventDefault();
        $("#aBox,#cBox,#dBox,#eBox").hide();
        $("#bBox").fadeIn();
    });

    $(".m_Bbox").click(function (event) {
        event.preventDefault();
        $("#aBox,#cBox,#dBox,#eBox").hide();
        $("#bBox").fadeIn();
        checkSlide();
    });

    $(".showCbox").click(function (event) {
        event.preventDefault();
        $("#aBox,#bBox,#dBox,#eBox").hide();
        $("#cBox").fadeIn();
    });

    $(".m_Cbox").click(function (event) {
        event.preventDefault();
        $("#aBox,#bBox,#dBox,#eBox").hide();
        $("#cBox").fadeIn();
        checkSlide();
    });

    $(".showDbox").click(function (event) {
        event.preventDefault();
        $("#aBox,#bBox,#cBox,#eBox").hide();
        $("#dBox").fadeIn();
    });

    $(".m_Dbox").click(function (event) {
        event.preventDefault();
        $("#aBox,#bBox,#cBox,#eBox").hide();
        $("#dBox").fadeIn();
        checkSlide();
    });

    $(".showEbox").click(function (event) {
        event.preventDefault();
        $("#aBox,#bBox,#dBox,#cBox").hide();
        $("#eBox").fadeIn();
    });

    $(".m_Ebox").click(function (event) {
        event.preventDefault();
        $("#aBox,#bBox,#dBox,#cBox").hide();
        $("#eBox").fadeIn();
        checkSlide();
    });

    // Show mobile category button
    $(".tabButtonBox_mobile").click(function (event) {
        event.preventDefault();
        checkSlide();
    });

    function checkSlide() {
        if ($subMenu.is(":visible")) {
            $subMenu.slideUp(300);
            $(".mobileSubOverLay").fadeOut();
            $("body").removeClass("stop-scrolling");
            $(".tabButtonBox_mobile img").addClass("mobileSlideBtnIconRotate");
            $("nav").css("display", "block");
        } else {
            $('html, body').animate({
                scrollTop: 300
            }, 500);
            $subMenu.slideDown(300);
            $(".mobileSubOverLay").fadeIn();
            $(".tabButtonBox_mobile img").removeClass("mobileSlideBtnIconRotate");
            $("body").delay(500).addClass("stop-scrolling");
            $("nav").css("display", "none");
        }
    }

    var pageName = localStorage.getItem("pageName");
    if (pageName === "freeze") {
        // show freeze
        $("#bBox,#cBox,#dBox,#eBox").hide();
        $("#aBox").fadeIn();
        localStorage.clear();
    }

    if (pageName === "aircondition") {
        $("#aBox,#cBox,#dBox,#eBox").hide();
        $("#bBox").fadeIn();
        localStorage.clear();
    }

    if (pageName === "firesafe") {
        $("#aBox,#bBox,#dBox,#eBox").hide();
        $("#cBox").fadeIn();
        localStorage.clear();
    }

    if (pageName === "temperature") {
        $("#aBox,#bBox,#cBox,#eBox").hide();
        $("#dBox").fadeIn();
        localStorage.clear();
    }

    if (pageName === "maintain") {
        $("#aBox,#bBox,#dBox,#cBox").hide();
        $("#eBox").fadeIn();
        localStorage.clear();
    }

    // 鎖右鍵
    $(document).bind("contextmenu", function (event) {
        return false;
    });

    // Overlay display
    var screenWidth = $(window).width();

    function isMobile() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }

    }

    $(window).resize(function () {
        isMobile();
    });

    // Scroll Up Animate
    $(window).scroll(function () {
        if (isMobile()) {
            $('.photoImg').each(function (i) {
                var top_of_object = $(this).offset().top + $(this).outerHeight() + 240;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if (bottom_of_window > top_of_object) {
                    $(this).find("a .overLayer").css("opacity", "1");
                } else {
                    $(this).find("a .overLayer").css("opacity", "0");
                }
            });
        }
    });
});