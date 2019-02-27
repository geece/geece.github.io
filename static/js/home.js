$(document).ready(function () {
    // BLOG HOVER
    var selectedSwitchBlog = 1;
    var checkSelectedBlog;

    // $(".bannerHide").lazyload();

    $("#firstswitchBlogBox").click(function () {
        selectedSwitchBlog = 1;
        checkSelectedBlog();
    });

    $("#secondswitchBlogBox").click(function () {
        selectedSwitchBlog = 2;
        checkSelectedBlog();
    });

    $("#thirdswitchBlogBox").click(function () {
        selectedSwitchBlog = 3;
        checkSelectedBlog();
    });

    checkSelectedBlog = function () {
        if (selectedSwitchBlog === 1) {
            $(".selectedDotLineBox").removeClass("secondLineBoxY").removeClass("thirdLineBoxY").addClass("firstLineBoxY");
            $("#thirdswitchBlogBox").removeClass("activeSwitchBlogBox");
            $("#secondswitchBlogBox").removeClass("activeSwitchBlogBox");
            $("#firstswitchBlogBox").addClass("activeSwitchBlogBox");

            $(".blogCategory").hide().text("施工相關").fadeIn();
            $(".blogLabel").hide().text("備援發電機供給冷凍冷藏機組").fadeIn();
            $(".blogText").hide().text("台電側停電ATS切換成發電機供電、冷凍冷藏庫停電時避免開門可減緩溫升、控制系統建議裝設UPS不斷電系統電源、除霜時間需做調整確認").fadeIn();
            $(".blogLink").attr("href", "static/blogpages/blog06.html");
            $("#deskBlogImg").hide().css("background-image", "url('/static/img/blog/06Banner.jpg')").fadeIn();

        } else if (selectedSwitchBlog === 2) {
            $(".selectedDotLineBox").removeClass("firstLineBoxY").removeClass("thirdLineBoxY").addClass("secondLineBoxY");
            $("#thirdswitchBlogBox").removeClass("activeSwitchBlogBox");
            $("#firstswitchBlogBox").removeClass("activeSwitchBlogBox");
            $("#secondswitchBlogBox").addClass("activeSwitchBlogBox");

            $(".blogCategory").hide().text("法規相關").fadeIn();
            $(".blogLabel").hide().text("室內空氣品質標準").fadeIn();
            $(".blogText").hide().text("106年1月11日公告訂符合室內空氣品質管理法之第二批公告場所").fadeIn();
            $(".blogLink").attr("href", "static/blogpages/blog02.html");
            $("#deskBlogImg").hide().css("background-image", "url('/static/img/blog/02Banner.jpg')").fadeIn();
        } else {
            $(".selectedDotLineBox").removeClass("firstLineBoxY").removeClass("secondLineBoxY").addClass("thirdLineBoxY");
            $("#secondswitchBlogBox").removeClass("activeSwitchBlogBox");
            $("#firstswitchBlogBox").removeClass("activeSwitchBlogBox");
            $("#thirdswitchBlogBox").addClass("activeSwitchBlogBox");

            $(".blogCategory").hide().text("施工相關").fadeIn();
            $(".blogLabel").hide().text("冷藏庫施工流程").fadeIn();
            $(".blogText").hide().text("施作地坪整平 → 庫板組立 → 地坪雙層鋼筋、RC灌漿 → 冷凍主機及冷卻器定位 → 貨架按裝試車").fadeIn();
            $(".blogLink").attr("href", "static/blogpages/blog03.html");
            $("#deskBlogImg").hide().css("background-image", "url('/static/img/blog/03Banner.jpg')").fadeIn();
        }
    };

    var navbarHeight = $('.topnav').outerHeight();
    var headerHeight = $('header').outerHeight();
    var aboutSecHeight = $('.aboutSec').outerHeight();
    var buttonSecHeight = $('.buttonSec').outerHeight();
    var blogSecHeight = $('.blogSec').outerHeight();
    var cooperatSecHeight = $('.cooperationSec').outerHeight();
    var screenWidth = $(window).width();

    var aboutShown = false;
    var allButtonShown = false;
    var blogsShown = false;
    var marqueeShown = false;

    //BODY MOVING
    window.onload = function () {
        lottie.loadAnimation({
            container: document.getElementById('homeLoadLottie'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'static/js/projectGV.json',
        })
        $(".animate").delay(800).fadeOut(500);
        $(".wrapper").delay(1300).addClass('moveUpAnimate');
        $("html").delay(1300).css({
            'overflow-y': 'scroll',
            'overflow-x': 'hidden'
        });
    }

    lottie.loadAnimation({
        container: document.getElementById('homeLottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'static/js/home-data.json',
    })

    lottie.loadAnimation({
        container: document.getElementById('homeLottie_mobile'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'static/js/home-data.json',
    })

    var selected = 1;
    var rotateNum = 0;

    // Circle Body Moving
    $("#circleDownButton").click(function () {
        event.preventDefault();
        if (selected < 6) {
            selected++;
        } else {
            selected = 1;
        }
        changeHeadContent();
        changeNumClass();

        $("#circleUpButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").fadeOut();
        $(".homeAnimate").fadeIn(500).delay(500).fadeOut(500);
        $("#circleUpButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").delay(1000).fadeIn();
        clearInterval(timer) //清除定时器
        timer = setInterval(animateNumbers, 5000) //重新开始定时器
    });

    $("#circleUpButton").click(function () {
        event.preventDefault();
        clearInterval(interval);
        if (1 < selected) {
            selected--;
        } else {
            selected = 6;
        }
        changeHeadContent();
        changeNumClass();

        $("#circleUpButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").fadeOut();
        $(".homeAnimate").fadeIn(500).delay(500).fadeOut(500);
        $("#circleUpButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").delay(1000).fadeIn();
        clearInterval(timer) //清除定时器
        timer = setInterval(animateNumbers, 5000) //重新开始定时器
    });

    // iPad Button
    $("#circleDownButton_M").click(function () {
        event.preventDefault();
        clearInterval(interval);
        if (selected < 6) {
            selected++;
        } else {
            selected = 1;
        }
        changeHeadContent();
        changeNumClass();

        $("#circleUpButton_M,#circleDownButton_M").fadeOut();
        $(".homeAnimate_mobile").fadeIn(500).delay(300).fadeOut(500);
        $("#circleUpButton_M,#circleDownButton_M").delay(800).fadeIn();
        clearInterval(timer) //清除定时器
        timer = setInterval(animateNumbers, 5000) //重新开始定时器
    });

    $("#circleUpButton_M").click(function () {
        event.preventDefault();
        clearInterval(interval);
        if (1 < selected) {
            selected--;
        } else {
            selected = 6;
        }
        changeHeadContent();
        changeNumClass();

        $("#circleUpButton_M,#circleDownButton_M").fadeOut();
        $(".homeAnimate_mobile").fadeIn(500).delay(300).fadeOut(500);
        $("#circleUpButton_M,#circleDownButton_M").delay(800).fadeIn();
        clearInterval(timer) //清除定时器
        timer = setInterval(animateNumbers, 5000) //重新开始定时器
    });

    $.fn.preload = function () {
        this.each(function () {
            $('<img/>')[0].src = this;
        });
    }

    $(['static/img/banner/home01.jpg', 'static/img/banner/home02.jpg', 'static/img/banner/home03.jpg', 'static/img/banner/home04.jpg', 'static/img/banner/home05.jpg', 'static/img/banner/home06.jpg', 'static/img/banner/ipad/home01_ipad.jpg', 'static/img/banner/ipad/home02_ipad.jpg', 'static/img/banner/ipad/home03_ipad.jpg', 'static/img/banner/ipad/home04_ipad.jpg', 'static/img/banner/ipad/home05_ipad.jpg', 'static/img/banner/ipad/home06_ipad.jpg', 'static/img/banner/mobile/home01_mobile.jpg', 'static/img/banner/mobile/home02_mobile.jpg', 'static/img/banner/mobile/home03_mobile.jpg', 'static/img/banner/mobile/home04_mobile.jpg', 'static/img/banner/mobile/home05_mobile.jpg', 'static/img/banner/mobile/home06_mobile.jpg']).preload();

    function changeHeadContent() {

        if (selected === 1) {

            if (900 < screenWidth) {
                $("#circleCategory").text("醫療物流");
                $("#circleTitle").text("冷凍冷藏庫工程");
                $(".bannerImgBox").css("background-image", "url(static/img/banner/home01.jpg)");
            } else if (650 <= screenWidth && screenWidth <= 900) {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/ipad/home01_ipad.jpg)");
            } else {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/mobile/home01_mobile.jpg)");
            }
        }

        if (selected === 2) {
            if (900 < screenWidth) {
                $("#circleCategory").text("倉儲物流");
                $("#circleTitle").text("空調消防工程");
                $(".bannerImgBox").css("background-image", "url(static/img/banner/home02.jpg)");
            } else if (650 <= screenWidth && screenWidth <= 900) {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/ipad/home02_ipad.jpg)");
            } else {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/mobile/home02_mobile.jpg)");
            }
        }

        if (selected === 3) {
            if (900 < screenWidth) {
                $("#circleCategory").text("廠辦大樓");
                $("#circleTitle").text("消防撒水工程");
                $(".bannerImgBox").css("background-image", "url(static/img/banner/home03.jpg)");
            } else if (650 <= screenWidth && screenWidth <= 900) {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/ipad/home03_ipad.jpg)");
            } else {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/mobile/home03_mobile.jpg)");
            }
        }

        if (selected === 4) {
            if (900 < screenWidth) {
                $("#circleCategory").text("飯店");
                $("#circleTitle").text("空調熱泵工程");
                $(".bannerImgBox").css("background-image", "url(static/img/banner/home04.jpg)");
            } else if (650 <= screenWidth && screenWidth <= 900) {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/ipad/home04_ipad.jpg)");
            } else {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/mobile/home04_mobile.jpg)");
            }
        }

        if (selected === 5) {
            if (900 < screenWidth) {
                $("#circleCategory").text("冷凍庫屋頂");
                $("#circleTitle").text("太陽能工程");
                $(".bannerImgBox").css("background-image", "url(static/img/banner/home05.jpg)");
            } else if (650 <= screenWidth && screenWidth <= 900) {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/ipad/home05_ipad.jpg)");
            } else {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/mobile/home05_mobile.jpg)");
            }
        }

        if (selected === 6) {
            if (900 < screenWidth) {
                $("#circleCategory").text("物流中心");
                $("#circleTitle").text("空調消防工程");
                $(".bannerImgBox").css("background-image", "url(static/img/banner/home06.jpg)");
            } else if (650 <= screenWidth && screenWidth <= 900) {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/ipad/home06_ipad.jpg)");
            } else {
                $(".bannerImgBox").css("background-image", "url(static/img/banner/mobile/home06_mobile.jpg)");
            }
        }
    }

    function changeNumClass() {

        if (selected === 1) {
            $("#aNum,#aNum_M").addClass("mainAnimateNum");
            $("#bNum,#cNum,#dNum,#eNum,#fNum,#bNum_M,#cNum_M,#dNum_M,#eNum_M,#fNum_M").removeClass("mainAnimateNum");

            // DESKTOP
            // DESKTOP
            //1
            $(".oneBox").css({
                "top": "85px",
                "left": "-10px",
                "right": "auto"
            });

            //2
            $(".topOneNumBox").css({
                "top": "0",
                "left": "70px",
                "right": "auto"
            });

            //3
            $(".topTwoNumBox").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //6
            $(".bottomOneNumBox").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //5
            $(".bottomTwoNumBox").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //4
            $(".bottomThreeNumBox").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });

            // PAD
            // PAD
            if (screenWidth <= 650) {
                $(".oneBox_M").css({
                    "top": "60px",
                    "left": "20px",
                    "right": "auto"
                });

                //2
                $(".topOneNumBox_M").css({
                    "top": "20px",
                    "left": "100px",
                    "right": "auto"
                });
            } else {
                $(".oneBox_M").css({
                    "top": "60px",
                    "left": "-10px",
                    "right": "auto"
                });

                //2
                $(".topOneNumBox_M").css({
                    "top": "0",
                    "left": "100px",
                    "right": "auto"
                });
            }

            //3
            $(".topTwoNumBox_M").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //6
            $(".bottomOneNumBox_M").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //5
            $(".bottomTwoNumBox_M").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //4
            $(".bottomThreeNumBox_M").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });

        }

        if (selected === 2) {
            $("#bNum,#bNum_M").addClass("mainAnimateNum");
            $("#aNum,#cNum,#dNum,#eNum,#fNum,#aNum_M,#cNum_M,#dNum_M,#eNum_M,#fNum_M").removeClass("mainAnimateNum");

            //2
            $(".topOneNumBox").css({
                "top": "85px",
                "left": "-10px",
                "right": "auto"
            });

            //3
            $(".topTwoNumBox").css({
                "top": "0",
                "left": "70px",
                "right": "auto"
            });

            //4
            $(".bottomThreeNumBox").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //1
            $(".oneBox").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //6
            $(".bottomOneNumBox").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //5
            $(".bottomTwoNumBox").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });

            //PAD
            //PAD

            if (screenWidth <= 650) {
                //2
                $(".topOneNumBox_M").css({
                    "top": "60px",
                    "left": "20px",
                    "right": "auto"
                });

                //3
                $(".topTwoNumBox_M").css({
                    "top": "20px",
                    "left": "100px",
                    "right": "auto"
                });
            } else {
                //2
                $(".topOneNumBox_M").css({
                    "top": "60px",
                    "left": "-10px",
                    "right": "auto"
                });

                //3
                $(".topTwoNumBox_M").css({
                    "top": "0",
                    "left": "100px",
                    "right": "auto"
                });
            }



            //4
            $(".bottomThreeNumBox_M").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //1
            $(".oneBox_M").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //6
            $(".bottomOneNumBox_M").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //5
            $(".bottomTwoNumBox_M").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });
        }

        if (selected === 3) {
            $("#cNum,#cNum_M").addClass("mainAnimateNum");
            $("#bNum,#aNum,#dNum,#eNum,#fNum,#bNum_M,#aNum_M,#dNum_M,#eNum_M,#fNum_M").removeClass("mainAnimateNum");

            //3
            $(".topTwoNumBox").css({
                "top": "85px",
                "left": "-10px",
                "right": "auto"
            });

            //4
            $(".bottomThreeNumBox").css({
                "top": "0",
                "left": "70px",
                "right": "auto"
            });

            //5
            $(".bottomTwoNumBox").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //2
            $(".topOneNumBox").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //1
            $(".oneBox").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //6
            $(".bottomOneNumBox").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });

            // PAD
            // PAD
            if (screenWidth <= 650) {
                //3
                $(".topTwoNumBox_M").css({
                    "top": "60px",
                    "left": "20px",
                    "right": "auto"
                });

                //4
                $(".bottomThreeNumBox_M").css({
                    "top": "20px",
                    "left": "100px",
                    "right": "auto"
                });

            } else {
                //3
                $(".topTwoNumBox_M").css({
                    "top": "60px",
                    "left": "-10px",
                    "right": "auto"
                });

                //4
                $(".bottomThreeNumBox_M").css({
                    "top": "0",
                    "left": "100px",
                    "right": "auto"
                });
            }

            //5
            $(".bottomTwoNumBox_M").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //2
            $(".topOneNumBox_M").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //1
            $(".oneBox_M").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //6
            $(".bottomOneNumBox_M").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });
        }

        if (selected === 4) {
            $("#fNum,#fNum_M").addClass("mainAnimateNum");
            $("#bNum,#cNum,#aNum,#eNum,#dNum,#bNum_M,#cNum_M,#aNum_M,#eNum_M,#dNum_M").removeClass("mainAnimateNum");

            // DESKTOP
            // DESKTOP

            //4
            $(".bottomThreeNumBox").css({
                "top": "85px",
                "left": "-10px",
                "right": "auto"
            });

            //5
            $(".bottomTwoNumBox").css({
                "top": "0",
                "left": "70px",
                "right": "auto"
            });

            //6
            $(".bottomOneNumBox").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //3
            $(".topTwoNumBox").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //2
            $(".topOneNumBox").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //1
            $(".oneBox").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });

            // PAD
            // PAD

            if (screenWidth <= 650) {
                //4
                $(".bottomThreeNumBox_M").css({
                    "top": "60px",
                    "left": "20px",
                    "right": "auto"
                });

                //5
                $(".bottomTwoNumBox_M").css({
                    "top": "20px",
                    "left": "100px",
                    "right": "auto"
                });
            } else {
                //4
                $(".bottomThreeNumBox_M").css({
                    "top": "60px",
                    "left": "-10px",
                    "right": "auto"
                });

                //5
                $(".bottomTwoNumBox_M").css({
                    "top": "0",
                    "left": "100px",
                    "right": "auto"
                });
            }

            //6
            $(".bottomOneNumBox_M").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //3
            $(".topTwoNumBox_M").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //2
            $(".topOneNumBox_M").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //1
            $(".oneBox_M").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });
        }

        if (selected === 5) {
            $("#eNum,#eNum_M").addClass("mainAnimateNum");
            $("#bNum,#cNum,#dNum,#aNum,#fNum,#bNum_M,#cNum_M,#dNum_M,#aNum_M,#fNum_M").removeClass("mainAnimateNum");

            // DESKTOP
            // DESKTOP

            //5
            $(".bottomTwoNumBox").css({
                "top": "85px",
                "left": "-10px",
                "right": "auto"
            });

            //6
            $(".bottomOneNumBox").css({
                "top": "0",
                "left": "70px",
                "right": "auto"
            });

            //1
            $(".oneBox").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //4
            $(".bottomThreeNumBox").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //3
            $(".topTwoNumBox").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //2
            $(".topOneNumBox").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });

            // PAD
            // PAD

            if (screenWidth <= 650) {
                //5
                $(".bottomTwoNumBox_M").css({
                    "top": "60px",
                    "left": "20px",
                    "right": "auto"
                });

                //6
                $(".bottomOneNumBox_M").css({
                    "top": "20px",
                    "left": "100px",
                    "right": "auto"
                });
            } else {

                //5
                $(".bottomTwoNumBox_M").css({
                    "top": "60px",
                    "left": "-10px",
                    "right": "auto"
                });

                //6
                $(".bottomOneNumBox_M").css({
                    "top": "0",
                    "left": "100px",
                    "right": "auto"
                });
            }


            //1
            $(".oneBox_M").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //4
            $(".bottomThreeNumBox_M").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //3
            $(".topTwoNumBox_M").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //2
            $(".topOneNumBox_M").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });
        }

        if (selected === 6) {
            $("#dNum,#dNum_M").addClass("mainAnimateNum");
            $("#bNum,#cNum,#fNum,#eNum,#aNum,#bNum_M,#cNum_M,#fNum_M,#eNum_M,#aNum_M").removeClass("mainAnimateNum");

            // DESKTOP
            // DESKTOP

            //6
            $(".bottomOneNumBox").css({
                "top": "85px",
                "left": "-10px",
                "right": "auto"
            });

            //1
            $(".oneBox").css({
                "top": "0",
                "left": "70px",
                "right": "auto"
            });

            //2
            $(".topOneNumBox").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //5
            $(".bottomTwoNumBox").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //4
            $(".bottomThreeNumBox").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //3
            $(".topTwoNumBox").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });

            // PAD
            // PAD

            if (screenWidth <= 650) {
                //6
                $(".bottomOneNumBox_M").css({
                    "top": "60px",
                    "left": "20px",
                    "right": "auto"
                });

                //1
                $(".oneBox_M").css({
                    "top": "20px",
                    "left": "100px",
                    "right": "auto"
                });

            } else {
                //6
                $(".bottomOneNumBox_M").css({
                    "top": "60px",
                    "left": "-10px",
                    "right": "auto"
                });

                //1
                $(".oneBox_M").css({
                    "top": "0",
                    "left": "100px",
                    "right": "auto"
                });
            }

            //2
            $(".topOneNumBox_M").css({
                "top": "40px",
                "right": "-40px",
                "left": "auto"
            });

            //5
            $(".bottomTwoNumBox_M").css({
                "top": "180px",
                "left": "40px",
                "right": "auto"
            });

            //4
            $(".bottomThreeNumBox_M").css({
                "top": "150px",
                "left": "100px",
                "right": "auto"
            });

            //3
            $(".topTwoNumBox_M").css({
                "top": "180px",
                "right": "-10px",
                "left": "auto"
            });
        }
    }

    // Infinite Loop
    // 偵測頁面是否被觸發
    var timer = setInterval(animateNumbers, 5000);
    document.onvisibilitychange = function () {
        if (document.visibilityState == "visible") {
            console.log("visible fire timer");
            timer = setInterval(animateNumbers, 5000) //重新开始定时器
        } else {
            console.log("invisible clear timer");
            clearInterval(timer) //清除定时器
        }
    }

    function animateNumbers() {
        if (selected < 6) {
            selected++;
        } else {
            selected = 1;
        }
        changeHeadContent();
        changeNumClass();

        if (900 < screenWidth) {
            $("#circleUpButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").fadeOut();
            $(".homeAnimate").fadeIn(500).delay(500).fadeOut(500);
            $("#circleUpButton,#circleDownButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").delay(1000).fadeIn();
        } else if (screenWidth <= 900) {
            $("#circleUpButton_M,#circleDownButton_M").fadeOut();
            $(".homeAnimate_mobile").fadeIn(500).delay(500).fadeOut(500);
            $("#circleUpButton_M,#circleDownButton_M").delay(1000).fadeIn();
        }
    }

    // Blog Toggle Mobile
    $('#blogMobile_01').click(function () {
        $("#blogMobile_01 .blogImage,#blogMobile_01 .blogContentm,#blogMobile_01 .blogShadowSec").fadeIn();
        $(this).removeClass("noActive_blogMobile");
        $("#blogMobile_01 .blogContent").css({
            'display': 'flex'
        });
        $("#blogMobile_01 .blogContent").addClass('blogContent_flex');
        $("#blogMobile_01 .mainBlogCategory").css('background-color', 'rgba(255, 255, 255, 1)');

        // Hide Other
        $("#blogMobile_02 .blogImage,#blogMobile_02 .blogContent, #blogMobile_02 .blogShadowSec,#blogMobile_03 .blogImage,#blogMobile_03 .blogContent,#blogMobile_03 .blogShadowSec").css('display', 'none');

        $("#blogMobile_02 .mainBlogCategory,#blogMobile_03 .mainBlogCategory").css('background-color', 'rgba(255, 255, 255, 0)');
        $('#blogMobile_02,#blogMobile_03').addClass('noActive_blogMobile');

    });
    $('#blogMobile_02').click(function () {
        $("#blogMobile_02 .blogImage,#blogMobile_02 .blogContent, #blogMobile_02 .blogShadowSec").fadeIn();
        $(this).removeClass("noActive_blogMobile");
        $("#blogMobile_02 .blogContent").css({
            'display': 'flex'
        });
        $("#blogMobile_02 .blogContent").addClass('blogContent_flex');
        $("#blogMobile_02 .mainBlogCategory").css('background-color', 'rgba(255, 255, 255, 1)');
        // Hide Other
        $("#blogMobile_01 .blogImage,#blogMobile_01 .blogContent,#blogMobile_01 .blogShadowSec,#blogMobile_03 .blogImage,#blogMobile_03 .blogContent,#blogMobile_03 .blogShadowSec").css('display', 'none');

        $("#blogMobile_01 .mainBlogCategory,#blogMobile_03 .mainBlogCategory").css('background-color', 'rgba(255, 255, 255, 0)');

        $('#blogMobile_01,#blogMobile_03').addClass('noActive_blogMobile');
    });
    $('#blogMobile_03').click(function () {
        $("#blogMobile_03 .blogImage,#blogMobile_03 .blogContent,#blogMobile_03 .blogShadowSec").fadeIn();
        $(this).removeClass("noActive_blogMobile");
        $("#blogMobile_03 .blogContent").css({
            'display': 'flex'
        });
        $("#blogMobile_03 .blogContent").addClass('blogContent_flex');
        $("#blogMobile_03 .mainBlogCategory").css('background-color', 'rgba(255, 255, 255, 1)');
        // Hide Other
        $("#blogMobile_01 .blogImage,#blogMobile_01 .blogContent,#blogMobile_01 .blogShadowSec,#blogMobile_02 .blogImage,#blogMobile_02 .blogContent,#blogMobile_02 .blogShadowSec").css('display', 'none');

        $("#blogMobile_01 .mainBlogCategory,#blogMobile_02 .mainBlogCategory").css('background-color', 'rgba(255, 255, 255, 0)');

        $('#blogMobile_01,#blogMobile_02').addClass('noActive_blogMobile');
    });

    // Marquee
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

    // Marquee Hover

    function isMobile() {

        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }

    }

    if (isMobile()) {
        $(".slideItem img").css("filter", "none");
        $(".slideItem img").css("-webkit-filter", "grayscale(0%)");
        $(".slideItem img").css("-o-filter", "grayscale(0%)");
        $(".slideItem img").css("-ms-filter", "grayscale(0%)");
        $(".slideItem img").css("-moz-filter", "grayscale(0%)");
        $(".slideItem img").css("opacity", "1");
    } else {
        $(".slideItem img").hover(function () {
            $(this).css("filter", "none");
            $(this).css("-webkit-filter", "grayscale(0%)");
            $(this).css("-o-filter", "grayscale(0%)");
            $(this).css("-ms-filter", "grayscale(0%)");
            $(this).css("-moz-filter", "grayscale(0%)");
            $(this).css("opacity", "1");
        }, function () {
            $(this).css("filter", "gray");
            $(this).css("-webkit-filter", "grayscale(100%)");
            $(this).css("-o-filter", "grayscale(100%)");
            $(this).css("-ms-filter", "grayscale(100%)");
            $(this).css("-moz-filter", "grayscale(100%)");
            $(this).css("opacity", "0.4");
        });
    }
});