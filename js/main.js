/* ============================================================
   PARTICLES BACKGROUND
   ============================================================ */
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.color = Math.random() > 0.7
            ? `rgba(168, 85, 247, ${this.opacity})`
            : `rgba(180, 180, 200, ${this.opacity})`;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width ||
            this.y < 0 || this.y > canvas.height) {
            this.reset();
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    for (let i = 0; i < Math.min(count, 100); i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(168, 85, 247, ${0.06 * (1 - dist / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        });
    });

    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
}

resizeCanvas();
initParticles();
animateParticles();
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });


/* ============================================================
   NAVBAR SCROLL EFFECT
   ============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});


/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});


/* ============================================================
   TYPEWRITER EFFECT
   ============================================================ */
const phrases = [
    'AI Engineer (in progress)',
    'Machine Learning Developer',
    'LLMs & RAG Systems Builder',
    'Computer Vision Enthusiast',
    'Software Engineer → AI',
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter-text');

function typewriter() {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 50 : 100;

    typeEl.textContent = isDeleting
        ? current.substring(0, charIndex--)
        : current.substring(0, charIndex++);

    if (!isDeleting && charIndex === current.length + 1) {
        isDeleting = true;
        setTimeout(typewriter, 1600);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(typewriter, speed);
}

setTimeout(typewriter, 800);


/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target + '+';
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 16);
}

const countersTriggered = new Set();
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersTriggered.has(entry.target)) {
            countersTriggered.add(entry.target);
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => {
    counterObserver.observe(el);
});


/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(
    '.project-card, .stack-category, .info-card, ' +
    '.contact-link, .about-paragraph, .about-tags'
).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});


/* ============================================================
   TIMELINE REVEAL
   ============================================================ */
const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.timeline-item').forEach(el => {
    timelineObserver.observe(el);
});


/* ============================================================
   SKILL BARS ANIMATION
   ============================================================ */
const stackObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stack-fill').forEach(bar => {
                const width = bar.dataset.width;
                setTimeout(() => { bar.style.width = width + '%'; }, 200);
            });
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.stack-category').forEach(el => {
    stackObserver.observe(el);
});


/* ============================================================
   PROJECT FILTERS
   ============================================================ */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            const category = card.dataset.category || '';
            if (filter === 'all' || category.includes(filter)) {
                card.classList.remove('hidden');
                card.style.animation = 'none';
                card.offsetHeight;
                card.style.animation = '';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});


/* ============================================================
   SMOOTH ACTIVE NAV LINK ON SCROLL
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinkEls.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${current}`
            ? '#a855f7'
            : '';
    });
});