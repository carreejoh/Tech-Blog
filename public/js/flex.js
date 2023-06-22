// For menu

let fluidMenu = document.querySelector(".appMenu");


function checkSize() {
    if(window.innerWidth <= 750) {
        fluidMenu.className = "ui huge centered fluid stackable wrapping menu appMenu"
    } else {
        fluidMenu.className = "ui huge menu appMenu"
    }
}






window.addEventListener("resize", checkSize);
window.addEventListener("load", checkSize);