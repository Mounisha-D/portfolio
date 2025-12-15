// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

// PROJECT SLIDER
const projects = document.querySelectorAll(".project-card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let current = 0;

function showProject(index) {
  projects.forEach((proj, i) => {
    proj.classList.remove("active");
    if (i === index) proj.classList.add("active");
  });
}

// Auto-flip every 5 seconds
let sliderInterval = setInterval(() => {
  current = (current + 1) % projects.length;
  showProject(current);
}, 5000);

// Show first project
showProject(current);

// Button navigation
nextBtn.addEventListener("click", () => {
  clearInterval(sliderInterval);
  current = (current + 1) % projects.length;
  showProject(current);
  sliderInterval = setInterval(() => {
    current = (current + 1) % projects.length;
    showProject(current);
  }, 5000);
});

prevBtn.addEventListener("click", () => {
  clearInterval(sliderInterval);
  current = (current - 1 + projects.length) % projects.length;
  showProject(current);
  sliderInterval = setInterval(() => {
    current = (current + 1) % projects.length;
    showProject(current);
  }, 5000);
});
