/* Concept Bar */

const etape1 = document.querySelector(".etape1");
const etape2 = document.querySelector(".etape2");
const etape3 = document.querySelector(".etape3");
const etape4 = document.querySelector(".etape4");
const etape5 = document.querySelector(".etape5");

const detail1 = document.querySelector(".sousDetail1");
const detail2 = document.querySelector(".sousDetail2");
const detail3 = document.querySelector(".sousDetail3");
const detail4 = document.querySelector(".sousDetail4");
const detail5 = document.querySelector(".sousDetail5");



etape1.onmouseover = () => {
    detail1.classList.add("detailOpen");
    detail2.classList.remove("detailOpen");
    detail3.classList.remove("detailOpen");
    detail4.classList.remove("detailOpen");
    detail5.classList.remove("detailOpen");
}

etape2.onmouseover = () => {
    detail2.classList.add("detailOpen");
    detail1.classList.remove("detailOpen");
    detail3.classList.remove("detailOpen");
    detail4.classList.remove("detailOpen");
    detail5.classList.remove("detailOpen");
}

etape3.onmouseover = () => {
    detail3.classList.add("detailOpen");
    detail1.classList.remove("detailOpen");
    detail2.classList.remove("detailOpen");
    detail4.classList.remove("detailOpen");
    detail5.classList.remove("detailOpen");
}

etape4.onmouseover = () => {
    detail4.classList.add("detailOpen");
    detail1.classList.remove("detailOpen");
    detail2.classList.remove("detailOpen");
    detail3.classList.remove("detailOpen");
    detail5.classList.remove("detailOpen");
}

etape5.onmouseover = () => {
    detail5.classList.add("detailOpen");
    detail1.classList.remove("detailOpen");
    detail2.classList.remove("detailOpen");
    detail3.classList.remove("detailOpen");
    detail4.classList.remove("detailOpen");
}

$(etape1).one("mouseover", function () {
    $('body,html').animate({ scrollTop: $(".etapes").offset().top }, 800);
});

$(etape2).one("mouseover", function () {
    $('body,html').animate({ scrollTop: $(".etapes").offset().top }, 800);
});

$(etape3).one("mouseover", function () {
    $('body,html').animate({ scrollTop: $(".etapes").offset().top }, 800);
});

$(etape4).one("mouseover", function () {
    $('body,html').animate({ scrollTop: $(".etapes").offset().top }, 800);
});

$(etape5).one("mouseover", function () {
    $('body,html').animate({ scrollTop: $(".etapes").offset().top }, 800);
});

$('.buttonUp').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
});

/* Video */

let isSafari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
let chromeMob = false;

function detectmob() {
    if (window.innerWidth <= 850 && window.innerHeight <= 600) {
        return chromeMob;
    }
}

detectmob()

$('.video').parent().click(function () {
    if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
        $("audio").get(0).play();
        sync();
    } else {
        $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
        $("audio").get(0).pause();
        sync();
    }
});

$('.buttonUp').on('inview', function (event, isInView) {
    if (isInView && !isSafari && !chromeMob) {
        $(".video").get(0).play();
        $(".playpause").fadeOut();
        $("audio").get(0).play();
    }
});

$('.conceptVideo').on('inview', function (event, isInView) {
    if (isInView) {

    } else {
        $(".video").get(0).pause();
        $("audio").get(0).pause();
    }
});

$('.video').dblclick(function goFullscreen() {
    if (this.mozRequestFullScreen) {
        this.mozRequestFullScreen();
    } else if (this.webkitRequestFullScreen) {
        this.webkitRequestFullScreen();
    }
});

function sync() {
    var vid = document.querySelector("video");
    var aud = document.querySelector("audio");
    aud.currentTime = vid.currentTime;
}
