const menu = document.querySelector(".menu");
const show = document.querySelector(".show");
function toggleMenu(){
    menu.classList.toggle("menu-show");
}

show.addEventListener("click", toggleMenu);