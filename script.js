const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});







window.addEventListener("scroll", function () {
  var navLinks = document.querySelector(".nav-links");
  var logo = document.querySelector(".logo");
  var sec2 = document.querySelector("#sec2");
  var sec1 = document.querySelector("#sec1");

  // Haal de positie van sectie 1 en sectie 2 op
  var sec1Position = sec1.getBoundingClientRect().bottom;
  var sec2Position = sec2.getBoundingClientRect().top;

  // Als de onderkant van sectie 1 bovenaan of hoger is dan het scherm, verberg de navigatie en het logo
  if (sec1Position <= 0) {
    navLinks.style.display = "none";
    logo.style.display = "none";
  } else {
    navLinks.style.display = "flex"; // Of de weergave-instelling die je normaal gebruikt
    logo.style.display = "block"; // Of de weergave-instelling die je normaal gebruikt
  }
});
