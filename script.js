
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Navbar Glassmorphism Effect on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Logic
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if(mobileBtn){
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
    }

    if(closeBtn){
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // ⭐⭐⭐ FIXED SCROLL ANIMATION ⭐⭐⭐
    const animateElements = document.querySelectorAll('.animate-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => {
        observer.observe(el);

        // ⭐ FIX: already visible hero element show করে দেবে
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight){
            el.classList.add("show");
        }
    });

    // 4. Update Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
