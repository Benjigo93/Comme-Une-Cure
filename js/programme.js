$('.button1').click(function () {
    $('body,html').animate({ scrollTop: $(".formules").offset().top }, 800);
});

$('.button2').click(function () {
    window.location.href = "services.html";
});

$('.buttonUp3').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 3000);
});

/* Menu Bar */

const liste1 = document.querySelector(".liste1");
const liste2 = document.querySelector(".liste2");
const liste3 = document.querySelector(".liste3");
const liste4 = document.querySelector(".liste4");

const detail1 = document.querySelector(".detail1");
const detail2 = document.querySelector(".detail2");
const detail3 = document.querySelector(".detail3");
const detail4 = document.querySelector(".detail4");

liste1.onclick = () => {
    detail1.classList.add("detailOpen");
    detail2.classList.remove("detailOpen");
    detail3.classList.remove("detailOpen");
    detail4.classList.remove("detailOpen");
    liste1.style.opacity = "1";
    liste2.style.opacity = "0.6";
    liste3.style.opacity = "0.6";
    liste4.style.opacity = "0.6";
}

liste2.onclick = () => {
    detail2.classList.add("detailOpen");
    detail1.classList.remove("detailOpen");
    detail3.classList.remove("detailOpen");
    detail4.classList.remove("detailOpen");
    liste2.style.opacity = "1";
    liste1.style.opacity = "0.6";
    liste3.style.opacity = "0.6";
    liste4.style.opacity = "0.6";
}

liste3.onclick = () => {
    detail3.classList.add("detailOpen");
    detail1.classList.remove("detailOpen");
    detail2.classList.remove("detailOpen");
    detail4.classList.remove("detailOpen");
    liste3.style.opacity = "1";
    liste2.style.opacity = "0.6";
    liste1.style.opacity = "0.6";
    liste4.style.opacity = "0.6";
}

liste4.onclick = () => {
    detail4.classList.add("detailOpen");
    detail1.classList.remove("detailOpen");
    detail2.classList.remove("detailOpen");
    detail3.classList.remove("detailOpen");
    liste4.style.opacity = "1";
    liste2.style.opacity = "0.6";
    liste3.style.opacity = "0.6";
    liste1.style.opacity = "0.6";
}

$(function () {
    var positionTop = $('.scrollLand').offset().top;

    $(window).scroll(function () {

        if ($(this).scrollTop() > positionTop) {

            $('.titreListe').addClass("f-nav");
            $('.detailProg').css({'padding-top':'7.5em'})

        } else {

            $('.titreListe').removeClass("f-nav");
            $('.detailProg').css({'padding-top':'0'})
        }
    });
});