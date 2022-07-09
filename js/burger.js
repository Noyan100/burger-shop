'use strict'
let hamb = document.querySelector('.header__menu-button');
let menu_hamb = document.querySelector('.header__menu');
let menu_overlay = document.querySelector('.header__menu-overlay');
let menu_link = document.querySelectorAll('.header__menu-item > a')

hamb.addEventListener('click', humbMenu)

menu_link.forEach(item => {
    item.addEventListener('click', humbMenu)
})

function humbMenu() {
    if(hamb.classList.contains("header__menu-button--active")){
        hamb.classList.remove("header__menu-button--active")
        menu_hamb.classList.remove("header__menu--active") 
        menu_overlay.setAttribute("style", "display: none");
    } else{
        hamb.classList.add("header__menu-button--active");
        menu_hamb.classList.add("header__menu--active");
        menu_overlay.setAttribute("style", "display: block");
    }
}