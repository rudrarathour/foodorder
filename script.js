var menu = document.querySelector("#menu");
var navbar = document.querySelector("header nav");

menu.onclick = () =>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
window.onscroll = () =>{
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
};