const allSections = document.querySelectorAll(".section");
allSections.forEach(function (section) {
  section.classList.add("section--hidden");
});

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.12,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
});
