$(document).ready(function () {
    // Body Movin - About Icon
    window.onload = function () {
        lottie.loadAnimation({
            container: document.getElementById('aboutLogoAnimate'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'js/projectGV.json',
        });
    }
});