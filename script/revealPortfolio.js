const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const observe = function (cls) {
  const name = document.querySelectorAll(`.${cls}`);

  const revealPortions = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("image--hidden");
    observer.unobserve(entry.target);
  };

  const portionsObserver = new IntersectionObserver(revealPortions, {
    root: null,
    threshold: 0.15,
  });

  name.forEach((portion) => {
    portionsObserver.observe(portion);
    portion.classList.add("image--hidden");
  });
};

observe("right");
observe("left");

const texts = document.querySelectorAll(".scroll-text");
const text = document.querySelector(".scroll");

if (texts) observe("scroll-text");
