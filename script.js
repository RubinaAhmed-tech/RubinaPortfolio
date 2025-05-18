// script.js

// Typing animation for hero title
const text = "Rubina Ahmed Mahar";
let index = 0;
function type() {
  document.getElementById("typing-text").innerText = text.slice(0, ++index);
  if (index < text.length) setTimeout(type, 150);
}
window.onload = () => {
  type();

  // Preloader hide if exists
  const loader = document.getElementById("preloader");
  if (loader) loader.style.display = "none";
};

// Scroll-based effects
window.onscroll = () => {
  const scroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";

  document.querySelectorAll(".content").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });

  const backToTop = document.getElementById("backToTop");
  if (scroll > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

// Keyboard shortcut for "Back to Top"
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "t") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// Time-based greeting in console
const hour = new Date().getHours();
let greeting = "Welcome";
if (hour < 12) greeting = "Good morning, Rubina!";
else if (hour < 18) greeting = "Good afternoon, Rubina!";
else greeting = "Good evening, Rubina!";
console.log(greeting);

// Auto-update year in footer
const year = new Date().getFullYear();
document.querySelectorAll('footer').forEach(footer => {
  footer.innerHTML = footer.innerHTML.replace(/\d{4}/, year);
});
