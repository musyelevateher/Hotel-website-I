// Get the hamburger icon and the navigation menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Add an event listener to the hamburger icon to toggle the menu
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});