// select from DOM
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');

//set Initial State of menu
let showMenu = false;
menuBtn.addEventListener('click', toogleMenu);

function toogleMenu(){
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item=> item.classList.add('show'));
        //set menu state.
        showMenu = true;

    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item=> item.classList.remove('show'));
        //set menu state.
        showMenu = false;
    }
}


