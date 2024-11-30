let mobile_nav_switch = document.querySelector(".nav__link-wrapper-mobile");
function mobileMenu() {
    mobile_nav_switch.classList.toggle('visible--flex');
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mobile_nav_switch.classList.contains('visible--flex')) {
        mobile_nav_switch.classList.toggle('visible--flex');
    }

    if (window.innerWidth > 900) {
        swiper.params.slidesPerView = 3;
    } else if (window.innerWidth > 500) {
        swiper.params.slidesPerView = 2;
    } else {
        swiper.params.slidesPerView = 1;
    }
    swiper.update();
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});