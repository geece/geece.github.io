$(document).ready(function () {
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

    $(".showBbox").click(function () {
        event.preventDefault();
        $("#aBox,#cBox,#dBox,#eBox").hide();
        $("#bBox").fadeIn();
    });

    $(".showCbox").click(function () {
        event.preventDefault();
        $("#aBox,#bBox,#dBox,#eBox").hide();
        $("#cBox").fadeIn();
    });
    $(".showDbox").click(function () {
        event.preventDefault();
        $("#aBox,#bBox,#cBox,#eBox").hide();
        $("#dBox").fadeIn();
    });
    $(".showEbox").click(function () {
        event.preventDefault();
        $("#aBox,#bBox,#dBox,#cBox").hide();
        $("#eBox").fadeIn();
    });

    // Show mobile category button
    $(".tabButtonBox_mobile").click(function () {
        event.preventDefault();
        var $subMenu = $(".sliderMenu");
        if ($subMenu.is(":visible")) {
            $subMenu.slideUp(300);
            $(".tabButtonBox_mobile img").addClass("mobileSlideBtnIconRotate");
        } else {
            $subMenu.slideDown(300);
            $(".tabButtonBox_mobile img").removeClass("mobileSlideBtnIconRotate");
        }
    });
    var pageName = localStorage.getItem("pageName");
    console.log(pageName);

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
    if (isMobile()) {
        $(".photoImg a .overLayer").css("opacity", "1");
        $(".photoImg a .overLayer").css("bottom", "0");
        $(".photoImg a .overLayer").css("top", "auto");
        $(".photoImg a .overLayer").css("justify-content", "flex-start");
        $(".photoImg a .overLayer").css(" -webkit-box-pack", "flex-start");
        $(".photoImg a .overLayer").css("-ms-flex-pack", "flex-start");

        if (450 < screenWidth && screenWidth < 1367) {
            console.log("ipad");
            $(".photoImg a .overLayer").css("background-image", "linear-gradient(rgba(55, 160, 255, 0), rgba(55, 160, 255, 0.3))");
            $(".photoImg a .overLayer").css("padding-left", "15px");
            $(".photoImg a .overLayer").css("padding-right", "15px");
            $(".photoImg a .overLayer").css("font-size", "20px");
            $(".photoImg a .overLayer").css("height", "20%");
        } else {
            console.log("ismobile");
            $(".photoImg a .overLayer").css("background-image", "linear-gradient(rgba(55, 160, 255, 0), rgba(55, 160, 255, 0.3))");
            $(".photoImg a .overLayer").css("padding-left", "15px");
            $(".photoImg a .overLayer").css("padding-right", "15px");
            $(".photoImg a .overLayer").css("padding-top", "25px");
            $(".photoImg a .overLayer").css("padding-bottom", "0px");
            $(".photoImg a .overLayer").css("font-size", "20px");
            $(".photoImg a .overLayer").css("height", "16%");
        }
    }

    // Scroll Up Animate

    $(window).scroll(function () {
        $('.photoImg').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 110;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1',
                    'margin-top': '0'
                }, 500);
            }
        });

    });
});