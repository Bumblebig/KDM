const screen = window.innerWidth;
const head = document.querySelector(".page-top");
head.scrollIntoView({ behavior: "smooth" });

const observe = function (cls, value) {
  const name = document.querySelectorAll(`.${cls}`);

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

if (screen <= 920) observe("reveal-image", 0.2);
else {
  observe("right-image", 0.15);
  observe("left-image", 0.15);
}
