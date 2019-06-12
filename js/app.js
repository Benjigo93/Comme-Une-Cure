$(document).foundation()

/* Hamburger Menu */

document.querySelector("h4").style.pointerEvents = "none";

function myFunction(x) {
    x.classList.toggle("change");
}

function hamburger_click() {
    const openMenu = document.querySelector("#menu");
    const menuText = document.querySelector("h4");
    const text = menuText.innerHTML;
    const body = document.querySelector("body");
    openMenu.classList.toggle("open");
    body.classList.toggle("stopScrolling");
    function changeText() {
        if (text.length == 5) {
            menuText.innerHTML = "MENU";
        }
        else {
            menuText.innerHTML = "CLOSE"
        }
    }
    changeText();
}