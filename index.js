const openMobileMenu = document.querySelector(".menu-icon img");
const closeMobileMenu = document.querySelector(".mobile-menu button");
const mobileMenuItems = document.querySelectorAll(".mobile-items a");

openMobileMenu.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.add("show");
});

closeMobileMenu.addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.remove("show");
});

mobileMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".mobile-menu").classList.remove("show");
    });
})





