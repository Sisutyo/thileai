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

// ========================================
// 3. ROTATING TEXT - CHARACTER BY CHARACTER STAGGER
// ========================================

const rotatingTextContainer = document.getElementById('rotatingText');

if (rotatingTextContainer) {
    const texts = ['Nhà Hàng', 'Tiệm Nail', 'Salon Tóc', 'Cửa Hàng Sửa Xe'];
    let currentIndex = 0;
    const rotationInterval = 2500;
    const staggerDelay = 0.03;

    function splitIntoChars(text) {
        return [...text];
    }

    function createTextElements(text) {
        const words = text.split(' ');
        const fragment = document.createDocumentFragment();
        
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'text-word';
            
            const chars = splitIntoChars(word);
            let charIndex = 0;
            
            for (let i = 0; i < wordIndex; i++) {
                charIndex += splitIntoChars(words[i]).length;
            }
            
            chars.forEach((char, i) => {
                const charSpan = document.createElement('span');
                charSpan.className = 'text-char';
                charSpan.textContent = char;
                charSpan.style.animationDelay = `${(charIndex + i) * staggerDelay}s`;
                wordSpan.appendChild(charSpan);
            });
            
            fragment.appendChild(wordSpan);
            
            if (wordIndex < words.length - 1) {
                const spaceSpan = document.createElement('span');
                spaceSpan.className = 'text-space';
                spaceSpan.textContent = ' ';
                fragment.appendChild(spaceSpan);
            }
        });
        
        return fragment;
    }

    function animateOut(callback) {
        const chars = rotatingTextContainer.querySelectorAll('.text-char');
        const totalChars = chars.length;
        
        chars.forEach((char, i) => {
            char.classList.add('exit');
            char.style.animationDelay = `${i * staggerDelay}s`;
        });
        
        setTimeout(callback, totalChars * staggerDelay * 1000 + 400);
    }

    function showNextText() {
        animateOut(() => {
            rotatingTextContainer.innerHTML = '';
            currentIndex = (currentIndex + 1) % texts.length;
            rotatingTextContainer.appendChild(createTextElements(texts[currentIndex]));
        });
    }

    rotatingTextContainer.appendChild(createTextElements(texts[currentIndex]));

    setInterval(showNextText, rotationInterval);
}
