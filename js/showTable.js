const folder = document.querySelector(".folder");
const back = document.querySelector(".back");
const box = document.querySelector(".box");

folder.addEventListener("click", () => {
    box.style.animation = "slideIn .3s forwards";
    box.style.display = "inherit";
});

back.addEventListener("click", () => {
    box.style.animation = "slideOut .3s forwards";
    box.style.display = "none";
});