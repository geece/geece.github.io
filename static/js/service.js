$(document).ready(function () {
    // Loading Image

    loadImage();

    function loadImage() {
        $('.photoImg a img').each(function () {
            var el = this;
            var image = new Image();
            image.src = el.src;
            image.onload = function () {
                $(el).addClass('loaded');
            }
        })
    }

    // Submenu

    var $subMenu = $(".sliderMenu");
    $(this).scrollTop(0);
    $("#bBox,#cBox,#dBox,#eBox").hide();
    $(".photoImg a").hover(function () {
        console.log("hover in");
        $(this).find(".overLayer").css("opacity", "1");
    }, function () {
        $(this).find(".overLayer").css("opacity", "0");
    });

    $(".photoImg a").click(function () {
        event.preventDefault();
    });

    $(".showAbox").click(function () {
        event.preventDefault();
        $("#bBox,#cBox,#dBox,#eBox").hide();
        $("#aBox").fadeIn();
    });

    $(".m_Abox").click(function () {
        event.preventDefault();
        $("#bBox,#cBox,#dBox,#eBox").hide();
        $("#aBox").fadeIn();
        checkSlide();
    });

    $(".showBbox").click(function () {
        event.preventDefault();
        $("#aBox,#cBox,#dBox,#eBox").hide();
        $("#bBox").fadeIn();
    });

    $(".m_Bbox").click(function () {
        event.preventDefault();
        $("#aBox,#cBox,#dBox,#eBox").hide();
        $("#bBox").fadeIn();
        checkSlide();
    });

    $(".showCbox").click(function () {
        event.preventDefault();
        $("#aBox,#bBox,#dBox,#eBox").hide();
        $("#cBox").fadeIn();
    });

    $(".m_Cbox").click(function () {
        event.preventDefault();
        $("#aBox,#bBox,#dBox,#eBox").hide();
        $("#cBox").fadeIn();
        checkSlide();
    });

    $(".showDbox").click(function () {
        event.preventDefault();
        $("#aBox,#bBox,#cBox,#eBox").hide();
        $("#dBox").fadeIn();
    });

    $(".m_Dbox").click(function () {
        event.preventDefault();
        $("#aBox,#bBox,#cBox,#eBox").hide();
        $("#dBox").fadeIn();
        checkSlide();
    });

    $(".showEbox").click(function () {
        event.preventDefault();
        $("#aBox,#bBox,#dBox,#cBox").hide();
        $("#eBox").fadeIn();
    });

    $(".m_Ebox").click(function () {
        event.preventDefault();
        $("#aBox,#bBox,#dBox,#cBox").hide();
        $("#eBox").fadeIn();
        checkSlide();
    });

    // Show mobile category button
    $(".tabButtonBox_mobile").click(function () {
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

    // if (isMobile()) {
    //     // $(".photoImg a .overLayer").css("opacity", "1");
    //     // $(".photoImg a .overLayer").css("bottom", "0");
    //     // $(".photoImg a .overLayer").css("top", "auto");
    //     // $(".photoImg a .overLayer").css("justify-content", "flex-start");
    //     // $(".photoImg a .overLayer").css(" -webkit-box-pack", "flex-start");
    //     // $(".photoImg a .overLayer").css("-ms-flex-pack", "flex-start");

    //     if (450 < screenWidth && screenWidth < 1367) {
    //         // ipad
    //         // $(".photoImg a .overLayer").css("background-image", "linear-gradient(rgba(55, 160, 255, 0), rgba(55, 160, 255, 0.3))");
    //         // $(".photoImg a .overLayer").css("padding-left", "15px");
    //         // $(".photoImg a .overLayer").css("padding-right", "15px");
    //         // $(".photoImg a .overLayer").css("font-size", "20px");
    //         // $(".photoImg a .overLayer").css("height", "20%");
    //     } else {
    //         // mobile
    //         // $(".photoImg a .overLayer").css("background-image", "linear-gradient(rgba(55, 160, 255, 0), rgba(55, 160, 255, 0.3))");
    //         // $(".photoImg a .overLayer").css("padding-left", "15px");
    //         // $(".photoImg a .overLayer").css("padding-right", "15px");
    //         // $(".photoImg a .overLayer").css("padding-top", "25px");
    //         // $(".photoImg a .overLayer").css("padding-bottom", "0px");
    //         // $(".photoImg a .overLayer").css("font-size", "20px");
    //         // $(".photoImg a .overLayer").css("height", "16%");
    //     }
    // }

    // Scroll Up Animate
    $(window).scroll(function () {
        $('.photoImg').each(function (i) {
            var top_of_object = $(this).offset().top + $(this).outerHeight() + 240;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > top_of_object) {
                $(this).find("a .overLayer").css("opacity", "1");
            } else {
                $(this).find("a .overLayer").css("opacity", "0");
            }
        });
    });
});