// Scroll animations for Thile AI

// ========================================
// 1. NAVBAR AUTO HIDE/SHOW ON SCROLL
// ========================================

let lastScrollTop = 0;
const navbar = document.querySelector('.glassmorphism-nav');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll <= scrollThreshold) {
        navbar.classList.remove('nav-hidden');
        navbar.classList.add('nav-visible');
    } else {
        if (currentScroll > lastScrollTop) {
            navbar.classList.add('nav-hidden');
            navbar.classList.remove('nav-visible');
        } else {
            navbar.classList.remove('nav-hidden');
            navbar.classList.add('nav-visible');
        }
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });

// ========================================
// 2. CONTINUOUS SCROLL ANIMATION
// ========================================
// Testimonials now use pure CSS continuous scroll animation
// No JavaScript needed - animation runs automatically via CSS
