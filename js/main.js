
function updateNavbarColor() {
  const navbar = document.getElementById("navbar-example");
  if (window.scrollY < window.innerHeight) {
    navbar.classList.add("navbar-custom-white");
    navbar.classList.remove("navbar-custom-black");
  } else {
    navbar.classList.add("navbar-custom-black");
    navbar.classList.remove("navbar-custom-white");
  }
}
document.addEventListener("DOMContentLoaded", updateNavbarColor);
window.addEventListener("scroll", updateNavbarColor);

// header section (animate words)
var typed = new Typed(".type", {
  strings: ["Larry Daniels", "Developer","Designer"],
  typeSpeed: 20,
  backSpeed: 35,
  loop: true,
  startDelay: 300,
  backDelay: 1000,
  
});



