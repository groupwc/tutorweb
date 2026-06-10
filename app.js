// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(255, 255, 255, 0.85)';
    }
});

// Handle Booking Form Submission to LINE OA
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const lineid = document.getElementById('lineid').value;
        const target = document.getElementById('target').value;
        const course = document.getElementById('course').value;
        
        // Format message
        const message = `สวัสดีครับ/ค่ะ สนใจจองคลาสเรียน\n\nชื่อ-นามสกุล: ${firstname} ${lastname}\nอีเมล: ${email}\nLINE ID: ${lineid}\nเป้าหมาย: ${target}\nคอร์สที่สนใจ: ${course}\n\nรบกวนเช็คคิวว่างให้หน่อยครับ/ค่ะ`;
        
        // Encode URL
        const encodedMessage = encodeURIComponent(message);
        
        // Redirect to LINE OA (Replace with actual LINE OA URL, e.g., https://line.me/ti/p/@yourid)
        // Using a standard text parameter for line.me
        const lineUrl = `https://line.me/R/ti/p/@YOUR_LINE_ID?text=${encodedMessage}`;
        
        // Open in new tab
        window.open(lineUrl, '_blank');
    });
}

// Scroll Reveal Animation (Intersection Observer)
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Mobile Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // Reviews carousel navigation
    const reviewScroll = document.getElementById('reviewScroll');
    const prevBtn = document.querySelector('.review-nav--prev');
    const nextBtn = document.querySelector('.review-nav--next');
    if (reviewScroll && prevBtn && nextBtn) {
        const scrollAmount = 340; // card width (320) + gap
        prevBtn.addEventListener('click', () => {
            reviewScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            reviewScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    // Scroll-to-top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('show', window.scrollY > 400);
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
