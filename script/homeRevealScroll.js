// select elements
const allSections = document.querySelectorAll(".section");

// Include default hidden class
allSections.forEach(function (section) {
  section.classList.add("section--hidden");
});

// rules for intersection api
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

// observing selected sections
allSections.forEach(function (section) {
  sectionObserver.observe(section);
});
