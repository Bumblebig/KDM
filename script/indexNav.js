const mobileNav = document.querySelector(".mobile-links");
const hamburger = document.querySelector(".hamburger");
const cancel = document.querySelector(".cross");

hamburger.addEventListener("click", function () {
  mobileNav.style.display = "block";

  setTimeout(() => {
    mobileNav.style.width = "60%";
    cancel.style.display = "block";
  }, 50);
});

cancel.addEventListener("click", function () {
  mobileNav.style.width = "0px";
  cancel.style.display = "none";

  setTimeout(() => {
    mobileNav.style.display = "none";
  }, 300);
});
