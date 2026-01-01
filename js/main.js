const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach(fade => observer.observe(fade));

console.log("Portfolio loaded successfully");

// Smooth scroll with header offset (NO JUMP)
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      e.preventDefault();

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      const targetPosition =
        targetEl.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight -
        10;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

