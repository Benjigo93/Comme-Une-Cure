$('.buttonUp3').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 3000);
});

const liste1 = document.querySelector(".autres1");
const liste2 = document.querySelector(".autres2");


const detail1 = document.querySelector(".gallerie1");
const detail2 = document.querySelector(".gallerie2");


liste1.onclick = () => {
    detail1.classList.add("detailOpen");
    detail2.classList.remove("detailOpen");
    liste2.style.color = "";
    liste1.style.color = "#000000";
}

liste2.onclick = () => {
    detail2.classList.add("detailOpen");
    detail1.classList.remove("detailOpen");
    liste1.style.color = "";
    liste2.style.color = "#000000"
}