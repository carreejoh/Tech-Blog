// For menu

let largeMenu = document.querySelector(".appMenu");

function checkSize() {
    if(window.innerWidth <= 750) {
        largeMenu.className = "ui huge centered fluid stackable wrapping menu appMenu";
    } else if (window.innerWidth > 750 ){
        largeMenu.className = "ui huge menu appMenu"
    }
}

window.addEventListener("resize", checkSize);
window.addEventListener("load", checkSize);








