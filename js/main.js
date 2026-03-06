/* Orange Dental and Specialists — main.js */

// Scroll Reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Mobile Nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileNav.classList.toggle('open', isOpen);
  mobileNav.setAttribute('aria-hidden', !isOpen);
  mobileNav.querySelectorAll('a').forEach(a => a.setAttribute('tabindex', isOpen ? '0' : '-1'));
});
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileNav.querySelectorAll('a').forEach(a => a.setAttribute('tabindex', '-1'));
  });
});

// Smooth Scroll
const header = document.getElementById('site-header');
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
