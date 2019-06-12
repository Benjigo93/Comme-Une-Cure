/* Partenaire Bar */

const etape1 = document.querySelector(".etape1");
const etape2 = document.querySelector(".etape2");
const etape3 = document.querySelector(".etape3");
const etape4 = document.querySelector(".etape4");

const detail1 = document.querySelector(".detail1");
const detail2 = document.querySelector(".detail2");
const detail3 = document.querySelector(".detail3");
const detail4 = document.querySelector(".detail4");

// etape1.onclick = () => {
//     detail1.classList.add("detailOpen");
//     detail2.classList.remove("detailOpen");
//     detail3.classList.remove("detailOpen");
//     detail4.classList.remove("detailOpen");
//     $('body,html').animate({ scrollTop: $(".listePartenaires").offset().top }, 700);
// }

etape2.onclick = () => {
    detail2.classList.add("detailOpen");
    detail1.classList.remove("detailOpen");
    detail3.classList.remove("detailOpen");
    detail4.classList.remove("detailOpen");
    $('body,html').animate({ scrollTop: $(".listePartenaires").offset().top }, 700);
}

etape3.onclick = () => {
    detail3.classList.add("detailOpen");
    detail1.classList.remove("detailOpen");
    detail2.classList.remove("detailOpen");
    detail4.classList.remove("detailOpen");
    $('body,html').animate({ scrollTop: $(".listePartenaires").offset().top }, 700);
}

etape4.onclick = () => {
    detail4.classList.add("detailOpen");
    detail1.classList.remove("detailOpen");
    detail2.classList.remove("detailOpen");
    detail3.classList.remove("detailOpen");
    $('body,html').animate({ scrollTop: $(".listePartenaires").offset().top }, 700);
}