$(document).ready(function () {
    // Body Movin - About Icon
    console.log("show about lottie");
    lottie.loadAnimation({
        container: document.getElementById('aboutLogoAnimate'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'js/projectGV.json',
    });
});