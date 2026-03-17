// DARK MODE TOGGLE
const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// SCROLL REVEAL
const sections = document.querySelectorAll('.section');
function revealOnScroll() {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) sec.classList.add('visible');
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// HERO PARALLAX
const heroText = document.querySelector(".hero-text");
const heroImage = document.querySelector(".hero-image");
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  heroText.style.transform = `translateY(${scrolled * 0.2}px)`;
  heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
});