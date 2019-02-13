$(document).ready(function () {
    window.requestAnimationFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    var speed = 5000;
    (function currencySlide() {
        var currencyPairWidth = $('.slideItem:first-child').outerWidth();
        $(".slideContainer").animate({
            marginLeft: -currencyPairWidth
        }, speed, 'linear', function () {
            $(this).css({
                marginLeft: 0
            }).find("li:last").after($(this).find("li:first"));
        });
        requestAnimationFrame(currencySlide);
    })();

    function isMobile() {

        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }

    }
    if (isMobile()) {
        console.log("ispad");
        $(".iconWallImg img").css("filter", "none");
        $(".iconWallImg img").css("filter", "grayscale(0%)");
        $(".iconWallImg img").css("-o-filter", "grayscale(0%)");
        $(".iconWallImg img").css("-ms-filter", "grayscale(0%)");
        $(".iconWallImg img").css("-moz-filter", "grayscale(0%)");
        $(".iconWallImg img").css("-webkit-filter", "grayscale(0%)");
        $(".iconWallImg img").css("opacity", "1");
    }
});