const mobileMenuBtn = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu-wrapper");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");
const tabletAndDesktopMenu = document.querySelector(".tablet-and-desktop-menu-navigation-wrapper");
const tabletAndDesktopMenuLink = document.querySelector(".menu-link")

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("is-open");
})

mobileMenuCloseBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
})

tabletAndDesktopMenuLink.addEventListener("click", (event) => {
    event.preventDefault();
    if (getComputedStyle(tabletAndDesktopMenu).display === 'none') {
        tabletAndDesktopMenu.style.display = 'block';
    } else {
        tabletAndDesktopMenu.style.display = 'none';
    }
})