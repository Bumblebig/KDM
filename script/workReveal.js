// Check screen size
const screen = window.innerWidth;

// selecting elements
const head = document.querySelector(".page-top");
head.scrollIntoView({ behavior: "smooth" });

// Reveal on scroll function for reuse
const observe = function (cls, value) {
  // selected sections, cls is placeholder for class name
  const name = document.querySelectorAll(`.${cls}`);

  // rules for revealing image
  const revealImage = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("image--hidden");
    observer.unobserve(entry.target);
  };

  const imageObserver = new IntersectionObserver(revealImage, {
    root: null,
    threshold: value,
  });

  name.forEach((img) => {
    imageObserver.observe(img);
    img.classList.add("image--hidden");
  });
};

// implementing reveal api based on screen sizes
if (screen <= 920) observe("reveal-image", 0.2);
else {
  observe("right-image", 0.15);
  observe("left-image", 0.15);
}
