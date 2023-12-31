const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const observe = function (cls) {
  const name = document.querySelectorAll(`.${cls}`);

  const revealPortions = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("reveal--hidden");
    observer.unobserve(entry.target);
  };

  const portionsObserver = new IntersectionObserver(revealPortions, {
    root: null,
    threshold: 0.15,
  });

  name.forEach((portion) => {
    portionsObserver.observe(portion);
    portion.classList.add("reveal--hidden");
  });
};

if (screenWidth > 920 && screenHeight < 425) observe("reveal");

observe("right");
observe("left");

if (screenWidth <= 920) {
  observe("mobImg");
  if (screenHeight < 580) observe("textReveal");
}
