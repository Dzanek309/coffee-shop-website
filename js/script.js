let mobile_nav_switch = document.querySelector(".nav__link-wrapper-mobile");
function mobileMenu() {
    mobile_nav_switch.classList.toggle('visible--flex');
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mobile_nav_switch.classList.contains('visible--flex')) {
        mobile_nav_switch.classList.toggle('visible--flex');
    }
});