$(document).ready(function(){var o,t=1;$("#firstswitchBlogBox").click(function(){t=1,o()}),$("#secondswitchBlogBox").click(function(){t=2,o()}),$("#thirdswitchBlogBox").click(function(){t=3,o()}),o=function(){1===t?($(".selectedDotLineBox").removeClass("secondLineBoxY").removeClass("thirdLineBoxY").addClass("firstLineBoxY"),$("#thirdswitchBlogBox").removeClass("activeSwitchBlogBox"),$("#secondswitchBlogBox").removeClass("activeSwitchBlogBox"),$("#firstswitchBlogBox").addClass("activeSwitchBlogBox"),$(".blogCategory").hide().text("施工相關").fadeIn(),$(".blogLabel").hide().text("備援發電機供給冷凍冷藏機組").fadeIn(),$(".blogText").hide().text("台電側停電ATS切換成發電機供電、冷凍冷藏庫停電時避免開門可減緩溫升、控制系統建議裝設UPS不斷電系統電源、除霜時間需做調整確認").fadeIn(),$(".blogLink").attr("href","static/blogpages/blog06.html"),$("#deskBlogImg").hide().css("background-image","url('/static/img/blog/06Banner.jpg')").fadeIn()):2===t?($(".selectedDotLineBox").removeClass("firstLineBoxY").removeClass("thirdLineBoxY").addClass("secondLineBoxY"),$("#thirdswitchBlogBox").removeClass("activeSwitchBlogBox"),$("#firstswitchBlogBox").removeClass("activeSwitchBlogBox"),$("#secondswitchBlogBox").addClass("activeSwitchBlogBox"),$(".blogCategory").hide().text("法規相關").fadeIn(),$(".blogLabel").hide().text("室內空氣品質標準").fadeIn(),$(".blogText").hide().text("106年1月11日公告訂符合室內空氣品質管理法之第二批公告場所").fadeIn(),$(".blogLink").attr("href","static/blogpages/blog02.html"),$("#deskBlogImg").hide().css("background-image","url('/static/img/blog/02Banner.jpg')").fadeIn()):($(".selectedDotLineBox").removeClass("firstLineBoxY").removeClass("secondLineBoxY").addClass("thirdLineBoxY"),$("#secondswitchBlogBox").removeClass("activeSwitchBlogBox"),$("#firstswitchBlogBox").removeClass("activeSwitchBlogBox"),$("#thirdswitchBlogBox").addClass("activeSwitchBlogBox"),$(".blogCategory").hide().text("施工相關").fadeIn(),$(".blogLabel").hide().text("冷藏庫施工流程").fadeIn(),$(".blogText").hide().text("施作地坪整平 → 庫板組立 → 地坪雙層鋼筋、RC灌漿 → 冷凍主機及冷卻器定位 → 貨架按裝試車").fadeIn(),$(".blogLink").attr("href","static/blogpages/blog03.html"),$("#deskBlogImg").hide().css("background-image","url('/static/img/blog/03Banner.jpg')").fadeIn())};$(".topnav").outerHeight(),$("header").outerHeight(),$(".aboutSec").outerHeight(),$(".buttonSec").outerHeight(),$(".blogSec").outerHeight(),$(".cooperationSec").outerHeight();var e=$(window).width();window.onload=function(){lottie.loadAnimation({container:document.getElementById("homeLoadLottie"),renderer:"svg",loop:!0,autoplay:!0,path:"static/js/projectGV.json"}),$(".animate").delay(800).fadeOut(500),$(".wrapper").delay(1300).addClass("moveUpAnimate"),$("html").delay(1300).css({"overflow-y":"scroll","overflow-x":"hidden"})},lottie.loadAnimation({container:document.getElementById("homeLottie"),renderer:"svg",loop:!0,autoplay:!0,path:"static/js/home-data.json"}),lottie.loadAnimation({container:document.getElementById("homeLottie_mobile"),renderer:"svg",loop:!0,autoplay:!0,path:"static/js/home-data.json"});var i=1;function a(){1===i&&(900<e?($("#circleCategory").text("醫療物流"),$("#circleTitle").text("冷凍冷藏庫工程"),$(".bannerImgBox").css("background-image","url(static/img/banner/home01.jpg)")):650<=e&&e<=900?$(".bannerImgBox").css("background-image","url(static/img/banner/ipad/home01_ipad.jpg)"):$(".bannerImgBox").css("background-image","url(static/img/banner/mobile/home01_mobile.jpg)")),2===i&&(900<e?($("#circleCategory").text("倉儲物流"),$("#circleTitle").text("空調消防工程"),$(".bannerImgBox").css("background-image","url(static/img/banner/home02.jpg)")):650<=e&&e<=900?$(".bannerImgBox").css("background-image","url(static/img/banner/ipad/home02_ipad.jpg)"):$(".bannerImgBox").css("background-image","url(static/img/banner/mobile/home02_mobile.jpg)")),3===i&&(900<e?($("#circleCategory").text("廠辦大樓"),$("#circleTitle").text("消防撒水工程"),$(".bannerImgBox").css("background-image","url(static/img/banner/home03.jpg)")):650<=e&&e<=900?$(".bannerImgBox").css("background-image","url(static/img/banner/ipad/home03_ipad.jpg)"):$(".bannerImgBox").css("background-image","url(static/img/banner/mobile/home03_mobile.jpg)")),4===i&&(900<e?($("#circleCategory").text("飯店"),$("#circleTitle").text("空調熱泵工程"),$(".bannerImgBox").css("background-image","url(static/img/banner/home04.jpg)")):650<=e&&e<=900?$(".bannerImgBox").css("background-image","url(static/img/banner/ipad/home04_ipad.jpg)"):$(".bannerImgBox").css("background-image","url(static/img/banner/mobile/home04_mobile.jpg)")),5===i&&(900<e?($("#circleCategory").text("冷凍庫屋頂"),$("#circleTitle").text("太陽能工程"),$(".bannerImgBox").css("background-image","url(static/img/banner/home05.jpg)")):650<=e&&e<=900?$(".bannerImgBox").css("background-image","url(static/img/banner/ipad/home05_ipad.jpg)"):$(".bannerImgBox").css("background-image","url(static/img/banner/mobile/home05_mobile.jpg)")),6===i&&(900<e?($("#circleCategory").text("物流中心"),$("#circleTitle").text("空調消防工程"),$(".bannerImgBox").css("background-image","url(static/img/banner/home06.jpg)")):650<=e&&e<=900?$(".bannerImgBox").css("background-image","url(static/img/banner/ipad/home06_ipad.jpg)"):$(".bannerImgBox").css("background-image","url(static/img/banner/mobile/home06_mobile.jpg)"))}function l(){1===i&&($("#aNum,#aNum_M").addClass("mainAnimateNum"),$("#bNum,#cNum,#dNum,#eNum,#fNum,#bNum_M,#cNum_M,#dNum_M,#eNum_M,#fNum_M").removeClass("mainAnimateNum"),$(".oneBox").css({top:"85px",left:"-10px",right:"auto"}),$(".topOneNumBox").css({top:"0",left:"70px",right:"auto"}),$(".topTwoNumBox").css({top:"40px",right:"-40px",left:"auto"}),$(".bottomOneNumBox").css({top:"180px",left:"40px",right:"auto"}),$(".bottomTwoNumBox").css({top:"150px",left:"100px",right:"auto"}),$(".bottomThreeNumBox").css({top:"180px",right:"-10px",left:"auto"}),e<=650?($(".oneBox_M").css({top:"60px",left:"20px",right:"auto"}),$(".topOneNumBox_M").css({top:"20px",left:"100px",right:"auto"})):($(".oneBox_M").css({top:"60px",left:"-10px",right:"auto"}),$(".topOneNumBox_M").css({top:"0",left:"100px",right:"auto"})),$(".topTwoNumBox_M").css({top:"40px",right:"-40px",left:"auto"}),$(".bottomOneNumBox_M").css({top:"180px",left:"40px",right:"auto"}),$(".bottomTwoNumBox_M").css({top:"150px",left:"100px",right:"auto"}),$(".bottomThreeNumBox_M").css({top:"180px",right:"-10px",left:"auto"})),2===i&&($("#bNum,#bNum_M").addClass("mainAnimateNum"),$("#aNum,#cNum,#dNum,#eNum,#fNum,#aNum_M,#cNum_M,#dNum_M,#eNum_M,#fNum_M").removeClass("mainAnimateNum"),$(".topOneNumBox").css({top:"85px",left:"-10px",right:"auto"}),$(".topTwoNumBox").css({top:"0",left:"70px",right:"auto"}),$(".bottomThreeNumBox").css({top:"40px",right:"-40px",left:"auto"}),$(".oneBox").css({top:"180px",left:"40px",right:"auto"}),$(".bottomOneNumBox").css({top:"150px",left:"100px",right:"auto"}),$(".bottomTwoNumBox").css({top:"180px",right:"-10px",left:"auto"}),e<=650?($(".topOneNumBox_M").css({top:"60px",left:"20px",right:"auto"}),$(".topTwoNumBox_M").css({top:"20px",left:"100px",right:"auto"})):($(".topOneNumBox_M").css({top:"60px",left:"-10px",right:"auto"}),$(".topTwoNumBox_M").css({top:"0",left:"100px",right:"auto"})),$(".bottomThreeNumBox_M").css({top:"40px",right:"-40px",left:"auto"}),$(".oneBox_M").css({top:"180px",left:"40px",right:"auto"}),$(".bottomOneNumBox_M").css({top:"150px",left:"100px",right:"auto"}),$(".bottomTwoNumBox_M").css({top:"180px",right:"-10px",left:"auto"})),3===i&&($("#cNum,#cNum_M").addClass("mainAnimateNum"),$("#bNum,#aNum,#dNum,#eNum,#fNum,#bNum_M,#aNum_M,#dNum_M,#eNum_M,#fNum_M").removeClass("mainAnimateNum"),$(".topTwoNumBox").css({top:"85px",left:"-10px",right:"auto"}),$(".bottomThreeNumBox").css({top:"0",left:"70px",right:"auto"}),$(".bottomTwoNumBox").css({top:"40px",right:"-40px",left:"auto"}),$(".topOneNumBox").css({top:"180px",left:"40px",right:"auto"}),$(".oneBox").css({top:"150px",left:"100px",right:"auto"}),$(".bottomOneNumBox").css({top:"180px",right:"-10px",left:"auto"}),e<=650?($(".topTwoNumBox_M").css({top:"60px",left:"20px",right:"auto"}),$(".bottomThreeNumBox_M").css({top:"20px",left:"100px",right:"auto"})):($(".topTwoNumBox_M").css({top:"60px",left:"-10px",right:"auto"}),$(".bottomThreeNumBox_M").css({top:"0",left:"100px",right:"auto"})),$(".bottomTwoNumBox_M").css({top:"40px",right:"-40px",left:"auto"}),$(".topOneNumBox_M").css({top:"180px",left:"40px",right:"auto"}),$(".oneBox_M").css({top:"150px",left:"100px",right:"auto"}),$(".bottomOneNumBox_M").css({top:"180px",right:"-10px",left:"auto"})),4===i&&($("#fNum,#fNum_M").addClass("mainAnimateNum"),$("#bNum,#cNum,#aNum,#eNum,#dNum,#bNum_M,#cNum_M,#aNum_M,#eNum_M,#dNum_M").removeClass("mainAnimateNum"),$(".bottomThreeNumBox").css({top:"85px",left:"-10px",right:"auto"}),$(".bottomTwoNumBox").css({top:"0",left:"70px",right:"auto"}),$(".bottomOneNumBox").css({top:"40px",right:"-40px",left:"auto"}),$(".topTwoNumBox").css({top:"180px",left:"40px",right:"auto"}),$(".topOneNumBox").css({top:"150px",left:"100px",right:"auto"}),$(".oneBox").css({top:"180px",right:"-10px",left:"auto"}),e<=650?($(".bottomThreeNumBox_M").css({top:"60px",left:"20px",right:"auto"}),$(".bottomTwoNumBox_M").css({top:"20px",left:"100px",right:"auto"})):($(".bottomThreeNumBox_M").css({top:"60px",left:"-10px",right:"auto"}),$(".bottomTwoNumBox_M").css({top:"0",left:"100px",right:"auto"})),$(".bottomOneNumBox_M").css({top:"40px",right:"-40px",left:"auto"}),$(".topTwoNumBox_M").css({top:"180px",left:"40px",right:"auto"}),$(".topOneNumBox_M").css({top:"150px",left:"100px",right:"auto"}),$(".oneBox_M").css({top:"180px",right:"-10px",left:"auto"})),5===i&&($("#eNum,#eNum_M").addClass("mainAnimateNum"),$("#bNum,#cNum,#dNum,#aNum,#fNum,#bNum_M,#cNum_M,#dNum_M,#aNum_M,#fNum_M").removeClass("mainAnimateNum"),$(".bottomTwoNumBox").css({top:"85px",left:"-10px",right:"auto"}),$(".bottomOneNumBox").css({top:"0",left:"70px",right:"auto"}),$(".oneBox").css({top:"40px",right:"-40px",left:"auto"}),$(".bottomThreeNumBox").css({top:"180px",left:"40px",right:"auto"}),$(".topTwoNumBox").css({top:"150px",left:"100px",right:"auto"}),$(".topOneNumBox").css({top:"180px",right:"-10px",left:"auto"}),e<=650?($(".bottomTwoNumBox_M").css({top:"60px",left:"20px",right:"auto"}),$(".bottomOneNumBox_M").css({top:"20px",left:"100px",right:"auto"})):($(".bottomTwoNumBox_M").css({top:"60px",left:"-10px",right:"auto"}),$(".bottomOneNumBox_M").css({top:"0",left:"100px",right:"auto"})),$(".oneBox_M").css({top:"40px",right:"-40px",left:"auto"}),$(".bottomThreeNumBox_M").css({top:"180px",left:"40px",right:"auto"}),$(".topTwoNumBox_M").css({top:"150px",left:"100px",right:"auto"}),$(".topOneNumBox_M").css({top:"180px",right:"-10px",left:"auto"})),6===i&&($("#dNum,#dNum_M").addClass("mainAnimateNum"),$("#bNum,#cNum,#fNum,#eNum,#aNum,#bNum_M,#cNum_M,#fNum_M,#eNum_M,#aNum_M").removeClass("mainAnimateNum"),$(".bottomOneNumBox").css({top:"85px",left:"-10px",right:"auto"}),$(".oneBox").css({top:"0",left:"70px",right:"auto"}),$(".topOneNumBox").css({top:"40px",right:"-40px",left:"auto"}),$(".bottomTwoNumBox").css({top:"180px",left:"40px",right:"auto"}),$(".bottomThreeNumBox").css({top:"150px",left:"100px",right:"auto"}),$(".topTwoNumBox").css({top:"180px",right:"-10px",left:"auto"}),e<=650?($(".bottomOneNumBox_M").css({top:"60px",left:"20px",right:"auto"}),$(".oneBox_M").css({top:"20px",left:"100px",right:"auto"})):($(".bottomOneNumBox_M").css({top:"60px",left:"-10px",right:"auto"}),$(".oneBox_M").css({top:"0",left:"100px",right:"auto"})),$(".topOneNumBox_M").css({top:"40px",right:"-40px",left:"auto"}),$(".bottomTwoNumBox_M").css({top:"180px",left:"40px",right:"auto"}),$(".bottomThreeNumBox_M").css({top:"150px",left:"100px",right:"auto"}),$(".topTwoNumBox_M").css({top:"180px",right:"-10px",left:"auto"}))}$("#circleDownButton").click(function(){event.preventDefault(),i<6?i++:i=1,a(),l(),$("#circleUpButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").fadeOut(),$(".homeAnimate").fadeIn(500).delay(500).fadeOut(500),$("#circleUpButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").delay(1e3).fadeIn(),clearInterval(n),n=setInterval(s,5e3)}),$("#circleUpButton").click(function(){event.preventDefault(),clearInterval(interval),1<i?i--:i=6,a(),l(),$("#circleUpButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").fadeOut(),$(".homeAnimate").fadeIn(500).delay(500).fadeOut(500),$("#circleUpButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").delay(1e3).fadeIn(),clearInterval(n),n=setInterval(s,5e3)}),$("#circleDownButton_M").click(function(){event.preventDefault(),clearInterval(interval),i<6?i++:i=1,a(),l(),$("#circleUpButton_M,#circleDownButton_M").fadeOut(),$(".homeAnimate_mobile").fadeIn(500).delay(300).fadeOut(500),$("#circleUpButton_M,#circleDownButton_M").delay(800).fadeIn(),clearInterval(n),n=setInterval(s,5e3)}),$("#circleUpButton_M").click(function(){event.preventDefault(),clearInterval(interval),1<i?i--:i=6,a(),l(),$("#circleUpButton_M,#circleDownButton_M").fadeOut(),$(".homeAnimate_mobile").fadeIn(500).delay(300).fadeOut(500),$("#circleUpButton_M,#circleDownButton_M").delay(800).fadeIn(),clearInterval(n),n=setInterval(s,5e3)}),$.fn.preload=function(){this.each(function(){$("<img/>")[0].src=this})},$(["static/img/banner/home01.jpg","static/img/banner/home02.jpg","static/img/banner/home03.jpg","static/img/banner/home04.jpg","static/img/banner/home05.jpg","static/img/banner/home06.jpg","static/img/banner/ipad/home01_ipad.jpg","static/img/banner/ipad/home02_ipad.jpg","static/img/banner/ipad/home03_ipad.jpg","static/img/banner/ipad/home04_ipad.jpg","static/img/banner/ipad/home05_ipad.jpg","static/img/banner/ipad/home06_ipad.jpg","static/img/banner/mobile/home01_mobile.jpg","static/img/banner/mobile/home02_mobile.jpg","static/img/banner/mobile/home03_mobile.jpg","static/img/banner/mobile/home04_mobile.jpg","static/img/banner/mobile/home05_mobile.jpg","static/img/banner/mobile/home06_mobile.jpg"]).preload();var n=setInterval(s,5e3);function s(){i<6?i++:i=1,a(),l(),900<e?($("#circleUpButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").fadeOut(),$(".homeAnimate").fadeIn(500).delay(500).fadeOut(500),$("#circleUpButton,#circleDownButton,#circleDownButton,#circleCategory,#circleTitle,#circleSeeMoreLink").delay(1e3).fadeIn()):e<=900&&($("#circleUpButton_M,#circleDownButton_M").fadeOut(),$(".homeAnimate_mobile").fadeIn(500).delay(500).fadeOut(500),$("#circleUpButton_M,#circleDownButton_M").delay(1e3).fadeIn())}document.onvisibilitychange=function(){"visible"==document.visibilityState?n=setInterval(s,5e3):clearInterval(n)},$("#blogMobile_01").click(function(){$("#blogMobile_01 .blogImage,#blogMobile_01 .blogContentm,#blogMobile_01 .blogShadowSec").fadeIn(),$(this).removeClass("noActive_blogMobile"),$("#blogMobile_01 .blogContent").css({display:"flex"}),$("#blogMobile_01 .blogContent").addClass("blogContent_flex"),$("#blogMobile_01 .mainBlogCategory").css("background-color","rgba(255, 255, 255, 1)"),$("#blogMobile_02 .blogImage,#blogMobile_02 .blogContent, #blogMobile_02 .blogShadowSec,#blogMobile_03 .blogImage,#blogMobile_03 .blogContent,#blogMobile_03 .blogShadowSec").css("display","none"),$("#blogMobile_02 .mainBlogCategory,#blogMobile_03 .mainBlogCategory").css("background-color","rgba(255, 255, 255, 0)"),$("#blogMobile_02,#blogMobile_03").addClass("noActive_blogMobile")}),$("#blogMobile_02").click(function(){$("#blogMobile_02 .blogImage,#blogMobile_02 .blogContent, #blogMobile_02 .blogShadowSec").fadeIn(),$(this).removeClass("noActive_blogMobile"),$("#blogMobile_02 .blogContent").css({display:"flex"}),$("#blogMobile_02 .blogContent").addClass("blogContent_flex"),$("#blogMobile_02 .mainBlogCategory").css("background-color","rgba(255, 255, 255, 1)"),$("#blogMobile_01 .blogImage,#blogMobile_01 .blogContent,#blogMobile_01 .blogShadowSec,#blogMobile_03 .blogImage,#blogMobile_03 .blogContent,#blogMobile_03 .blogShadowSec").css("display","none"),$("#blogMobile_01 .mainBlogCategory,#blogMobile_03 .mainBlogCategory").css("background-color","rgba(255, 255, 255, 0)"),$("#blogMobile_01,#blogMobile_03").addClass("noActive_blogMobile")}),$("#blogMobile_03").click(function(){$("#blogMobile_03 .blogImage,#blogMobile_03 .blogContent,#blogMobile_03 .blogShadowSec").fadeIn(),$(this).removeClass("noActive_blogMobile"),$("#blogMobile_03 .blogContent").css({display:"flex"}),$("#blogMobile_03 .blogContent").addClass("blogContent_flex"),$("#blogMobile_03 .mainBlogCategory").css("background-color","rgba(255, 255, 255, 1)"),$("#blogMobile_01 .blogImage,#blogMobile_01 .blogContent,#blogMobile_01 .blogShadowSec,#blogMobile_02 .blogImage,#blogMobile_02 .blogContent,#blogMobile_02 .blogShadowSec").css("display","none"),$("#blogMobile_01 .mainBlogCategory,#blogMobile_02 .mainBlogCategory").css("background-color","rgba(255, 255, 255, 0)"),$("#blogMobile_01,#blogMobile_02").addClass("noActive_blogMobile")}),window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(o){window.setTimeout(o,1e3/60)};!function o(){var t=$(".slideItem:first-child").outerWidth();$(".slideContainer").animate({marginLeft:-t},5e3,"linear",function(){$(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"))}),requestAnimationFrame(o)}(),!function(){try{return document.createEvent("TouchEvent"),!0}catch(o){return!1}}()?$(".slideItem img").hover(function(){$(this).css("filter","none"),$(this).css("-webkit-filter","grayscale(0%)"),$(this).css("-o-filter","grayscale(0%)"),$(this).css("-ms-filter","grayscale(0%)"),$(this).css("-moz-filter","grayscale(0%)"),$(this).css("opacity","1")},function(){$(this).css("filter","gray"),$(this).css("-webkit-filter","grayscale(100%)"),$(this).css("-o-filter","grayscale(100%)"),$(this).css("-ms-filter","grayscale(100%)"),$(this).css("-moz-filter","grayscale(100%)"),$(this).css("opacity","0.4")}):($(".slideItem img").css("filter","none"),$(".slideItem img").css("-webkit-filter","grayscale(0%)"),$(".slideItem img").css("-o-filter","grayscale(0%)"),$(".slideItem img").css("-ms-filter","grayscale(0%)"),$(".slideItem img").css("-moz-filter","grayscale(0%)"),$(".slideItem img").css("opacity","1"))});