
burger = document.querySelector('.burger');
navbar = document.querySelector('.nav-bar');
navlist = document.querySelector('.nav-list');
rightnavbar = document.querySelector('.right-navbar');

burger.addEventListener("click", () => {
    navbar.classList.toggle("h-class-resp");
    navlist.classList.toggle("v-class-resp");
    rightnavbar.classList.toggle("v-class-resp");
});