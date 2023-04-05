const aroow = document.querySelector(".sub-menu-arrow");
aroow.addEventListener("click", function() {
    const subMenu = document.querySelector(".header__sub-menu"); 
    aroow.classList.toggle("_open");
    subMenu.classList.toggle("_open");
})
const burgerMenu = document.querySelector(".header__burger-menu");
burgerMenu.addEventListener("click", function() {
    const nav = document.querySelector(".header__menu"); 
    burgerMenu.classList.toggle("_active");
    nav.classList.toggle("_active");
    document.body.classList.toggle("_lock");
})
new Swiper(".swiper-container", {
    loop: true,
    spaceBetween:1000,
    navigation: {
        nextEl:".swiper-button2",
        prevEl:".swiper-button1"
    },
    allowTouchMove: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});