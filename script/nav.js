document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navContainer = document.querySelector(".work-nav");
  const mobileNavContainer = document.querySelector(".mobile");
  const mobileSubNav = document.querySelector(".mobile-sub-nav");
  const navs = document.querySelector(".sub-nav");
  const dropdownArrow = document.querySelector(".drop-down");
  const mobileDropdownArrow = document.querySelector(".mobile-drop-down");
  const header = document.querySelector("header");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileNavContainer.classList.toggle("height");
  });

  navContainer.addEventListener("mouseover", function () {
    navs.style.visibility = "visible";
    dropdownArrow.style.transform = "rotate(180deg)";
  });

  navContainer.addEventListener("mouseout", function () {
    navs.style.visibility = "hidden";
    dropdownArrow.style.transform = "rotate(0deg)";
  });

  mobileDropdownArrow.addEventListener("click", function () {
    mobileSubNav.classList.toggle("mobile-sub-height");
    mobileDropdownArrow.classList.toggle("drop-down-spin");
  });

  const scrollThreshold = 80;

  const handleScroll = function () {
    const scrolled = window.scrollY;

    if (scrolled > scrollThreshold) {
      header.classList.add("box");
    } else {
      header.classList.remove("box");
    }
  };

  window.addEventListener("scroll", handleScroll);
});
