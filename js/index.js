$(document).ready(function () {
    var abc = document.querySelector("#premierCom").innerHTML;
    var a = String(abc).replace(/\u200B/g, '');
    document.querySelector("#premierCom").innerHTML = a;
});

/* Scroll reveal parcours */

window.sr = ScrollReveal({
    reset: true,
    origin: 'left',
    distance: '25px',
    duration: 1000,
    delay: 1000,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: true,
    useDelay: 'onload',
    viewFactor: 1,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    beforeReveal: function (domEl) { },
    beforeReset: function (domEl) { },
    afterReveal: function (domEl) { },
    afterReset: function (domEl) { }
});
sr.reveal('.blocGauche');
sr.reveal('.blocDroit', { origin: 'right' });
sr.reveal('#premierCom', { origin: 'bottom', viewFactor: '0.4', duration: '2000', mobile: false });
sr.reveal('.downButton2', { origin: 'top', viewFactor: '1.2', mobile: false });
sr.reveal('.lastCom', { origin: 'left', viewFactor: '0.5' });
sr.reveal('.fa-ellipsis-v', { origin: 'top', distance: '10px', viewFactor: '2', duration: '1000', delay: 300 });


/* Scroll bottom */

$('.downButton i').click(function () {
    $('body,html').animate({ scrollTop: $(".comTitle").offset().top }, 800);
});

$('.downButton2 i').click(function () {
    $('body,html').animate({ scrollTop: $(".clientTitle").offset().top }, 800);
});

/* Slider */

$(document).ready(function () {
    $('.homeSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        fade: true,
        mobileFirst: true,
    });
});