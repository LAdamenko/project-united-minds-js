const mobileMenuBtn = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu-wrapper");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");


mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("is-open");
})

mobileMenuCloseBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
})