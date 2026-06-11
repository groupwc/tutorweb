/* =========================================================
   Tutor P — shared site script
   แก้ข้อมูลติดต่อ / ลิงก์ ได้ที่ SITE ที่เดียว แล้วมีผลทุกหน้า
   ========================================================= */
const SITE = {
  brand: 'Tutor P',
  // ↓↓↓ แก้ข้อมูลจริงตรงนี้ที่เดียว ↓↓↓
  lineId: '@YOUR_LINE_ID',                 // เช่น @tutorp
  phone: '08X-XXX-XXXX',
  email: 'contact@yourdomain.com',
  social: {
    facebook: '#',
    line: '#',
    youtube: '#',
    tiktok: '#',
  },
};
SITE.lineUrl = `https://line.me/R/ti/p/${encodeURIComponent(SITE.lineId)}`;

/* ---------- SVG sprite (รวมทุกไอคอนไว้ที่เดียว ใช้ได้ทุกหน้า) ---------- */
const SPRITE = `
<svg class="svg-sprite" aria-hidden="true" focusable="false"><defs>
<symbol id="ic-check" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></symbol>
<symbol id="ic-lock" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></symbol>
<symbol id="ic-phone" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></symbol>
<symbol id="ic-mail" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></symbol>
<symbol id="ic-chat" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></symbol>
<symbol id="ic-bulb" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></symbol>
<symbol id="ic-heart" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></symbol>
<symbol id="ic-globe" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></symbol>
<symbol id="ic-star" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></symbol>
<symbol id="ic-arrow-up" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></symbol>
<symbol id="ic-chevron-left" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></symbol>
<symbol id="ic-chevron-right" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></symbol>
</defs></svg>`;

const LOGO_PATH = 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z';

/* ---------- Navbar ---------- */
function navbarHTML(page) {
  const links = [
    { href: 'index.html', key: 'home', label: 'หน้าหลัก' },
    { href: 'about.html', key: 'about', label: 'รู้จักผู้สอน' },
    { href: 'courses.html', key: 'courses', label: 'คอร์สและราคา' },
  ];
  const items = links
    .map(l => `<a href="${l.href}"${page === l.key ? ' class="active"' : ''}>${l.label}</a>`)
    .join('');
  const bookingActive = page === 'booking' ? ' active' : '';
  return `
  <nav class="navbar">
    <a href="index.html" class="nav-logo">
      <svg class="svg-icon text-navy logo-icon" viewBox="0 0 24 24"><path d="${LOGO_PATH}"/></svg>
      ${SITE.brand}
    </a>
    <div class="hamburger"><span></span><span></span><span></span></div>
    <div class="nav-links">
      ${items}
      <a href="booking.html" class="btn btn-primary nav-btn${bookingActive}">จองคลาสทดลอง</a>
    </div>
  </nav>`;
}

/* ---------- Footer + floating buttons ---------- */
function socialIcon(href, title, w, path) {
  return `<a href="${href}" class="social-icon" title="${title}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>
    <svg width="${w}" height="${w}" fill="currentColor" viewBox="0 0 24 24"><path d="${path}"/></svg></a>`;
}
function footerHTML() {
  const fb = 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z';
  const line = 'M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988 2.595h-2.392v-4.782h1.078v3.911h1.314v.871zm3.841 0h-1.077v-4.782h1.077v4.782zm6.275 0h-1.315l-1.902-3.04v3.04h-1.078v-4.782h1.315l1.902 3.041v-3.041h1.078v4.782zm4.148 0h-2.392v-4.782h2.392v.871h-1.314v1.081h1.314v.871h-1.314v1.088h1.314v.871z';
  const yt = 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z';
  const tt = 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z';
  return `
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <h3 class="footer-logo">
          <svg class="svg-icon logo-icon" viewBox="0 0 24 24"><path d="${LOGO_PATH}"/></svg>
          ${SITE.brand}
        </h3>
        <p class="footer-desc">ติว IELTS ตัวต่อตัว เจาะเป้า Band 6.0–6.5<br>ย่อยเรื่องยากให้เข้าใจง่าย<br>โดยสัตวแพทย์จุฬาฯ ว่าที่ ป.โท UK</p>
      </div>
      <div class="footer-contact">
        <h4 class="footer-heading">ช่องทางการติดต่อ</h4>
        <p><svg class="svg-icon"><use href="#ic-phone"></use></svg> <a href="tel:${SITE.phone.replace(/[^0-9+]/g, '')}" class="contact-link">${SITE.phone}</a></p>
        <p><svg class="svg-icon"><use href="#ic-mail"></use></svg> <a href="mailto:${SITE.email}" class="contact-link">${SITE.email}</a></p>
        <p><svg class="svg-icon"><use href="#ic-chat"></use></svg> <a href="${SITE.lineUrl}" target="_blank" rel="noopener" class="contact-link">${SITE.lineId}</a></p>
      </div>
      <div class="footer-social">
        <h4 class="footer-heading">ติดตามเรา</h4>
        <div class="social-icons">
          ${socialIcon(SITE.social.facebook, 'Facebook', 20, fb)}
          ${socialIcon(SITE.social.line, 'LINE', 20, line)}
          ${socialIcon(SITE.social.youtube, 'YouTube', 22, yt)}
          ${socialIcon(SITE.social.tiktok, 'TikTok', 20, tt)}
        </div>
      </div>
    </div>
    <div class="footer-bottom"><p>&copy; 2026 ${SITE.brand} Coaching. All rights reserved.</p></div>
  </footer>

  <button class="scroll-top-btn" id="scrollTopBtn" aria-label="กลับขึ้นด้านบน"><svg class="svg-icon"><use href="#ic-arrow-up"></use></svg></button>

  <a href="${SITE.lineUrl}" target="_blank" rel="noopener" class="floating-line-btn" title="Chat on LINE">
    <svg width="28" height="28" fill="white" viewBox="0 0 24 24"><path d="${line}"/></svg>
  </a>`;
}

/* ---------- Inject shared chrome ---------- */
(function injectChrome() {
  const page = document.body.dataset.page || '';
  document.body.insertAdjacentHTML('afterbegin', SPRITE + navbarHTML(page));
  document.body.insertAdjacentHTML('beforeend', footerHTML());
})();

/* ---------- Behaviours ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Navbar shadow on scroll
  const navbar = document.querySelector('.navbar');
  const onScrollNav = () => {
    if (!navbar) return;
    const scrolled = window.scrollY > 50;
    navbar.style.boxShadow = scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none';
    navbar.style.background = scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)';
  };
  window.addEventListener('scroll', onScrollNav);
  onScrollNav();

  // Booking form → LINE OA
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = id => document.getElementById(id)?.value || '';
      const message =
        `สวัสดีครับ/ค่ะ สนใจจองคลาสเรียน\n\n` +
        `ชื่อ-นามสกุล: ${v('firstname')} ${v('lastname')}\n` +
        `อีเมล: ${v('email')}\nLINE ID: ${v('lineid')}\n` +
        `เป้าหมาย: ${v('target')}\nคอร์สที่สนใจ: ${v('course')}\n\n` +
        `รบกวนเช็คคิวว่างให้หน่อยครับ/ค่ะ`;
      window.open(`${SITE.lineUrl}?text=${encodeURIComponent(message)}`, '_blank');
    });
  }

  // Scroll reveal
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  // Count-up for stat numbers ([data-count])
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const countEls = document.querySelectorAll('[data-count]');
  if (countEls.length) {
    const countIO = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target, reduceMotion);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    countEls.forEach(el => countIO.observe(el));
  }
  function animateCount(el, instant) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if (instant) { el.textContent = target + suffix; return; }
    const duration = 1400;
    const start = performance.now();
    const step = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // Mobile hamburger
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // Reviews carousel nav
  const reviewScroll = document.getElementById('reviewScroll');
  const prevBtn = document.querySelector('.review-nav--prev');
  const nextBtn = document.querySelector('.review-nav--next');
  if (reviewScroll && prevBtn && nextBtn) {
    const amount = 340;
    prevBtn.addEventListener('click', () => reviewScroll.scrollBy({ left: -amount, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => reviewScroll.scrollBy({ left: amount, behavior: 'smooth' }));
  }

  // Scroll-to-top button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('show', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Lazy YouTube (click-to-load) — keeps page fast, no redirect
  document.querySelectorAll('.video-wrapper[data-yt]').forEach(wrap => {
    const load = () => {
      const id = wrap.dataset.yt;
      const iframe = document.createElement('iframe');
      const params = new URLSearchParams({ autoplay: '1', rel: '0', playsinline: '1' });
      // ส่ง origin เมื่อเปิดผ่าน http/https (จำเป็นต่อ YouTube embed)
      if (location.protocol.startsWith('http')) params.set('origin', location.origin);
      iframe.src = `https://www.youtube-nocookie.com/embed/${id}?${params}`;
      iframe.title = wrap.dataset.title || 'YouTube video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.className = 'video-iframe';
      wrap.innerHTML = '';
      wrap.appendChild(iframe);
    };
    wrap.addEventListener('click', load);
    wrap.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); load(); }
    });
  });
});
