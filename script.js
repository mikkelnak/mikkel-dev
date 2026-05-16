// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Cookie banner
const cookieBanner = document.getElementById('cookieBanner');
if (cookieBanner) {
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => cookieBanner.classList.add('show'), 1500);
    }
}
function dismissCookies(acceptAll) {
    localStorage.setItem('cookieConsent', acceptAll ? 'all' : 'necessary');
    if (cookieBanner) {
        cookieBanner.classList.remove('show');
        cookieBanner.classList.add('dismissed');
    }
}

// Navbar scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 50 ? 'rgba(63,63,70,0.8)' : 'rgba(63,63,70,0.5)';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    });
});

// FAQ
document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!wasActive) item.classList.add('active');
    });
});

// Form validation & submit
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', async e => {
        let ok = true;
        form.querySelectorAll('[required]').forEach(input => {
            const g = input.closest('.form-group');
            if (!input.value.trim() || (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))) {
                g.classList.add('error'); ok = false;
            } else {
                g.classList.remove('error');
            }
        });
        if (!ok) { e.preventDefault(); return; }
        // Lad form'en submit'e natively — backend redirector til /tak.html ved success
    });

    form.querySelectorAll('[required]').forEach(input => {
        input.addEventListener('input', () => input.closest('.form-group').classList.remove('error'));
    });
}

// Mobile hamburger menu
const mobileToggle = document.getElementById('mobileToggle');
const navRight = document.querySelector('.nav-right');
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        const isOpen = navRight.classList.toggle('open');
        mobileToggle.setAttribute('aria-expanded', isOpen);
        const spans = mobileToggle.querySelectorAll('span');
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
        } else {
            spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        }
    });
    navRight.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        navRight.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }));
}

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.work-card, .process-step, .price-card, .problem-card, .about-card, .faq-item, .speed-card, .sales-card, .included-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
});

const style = document.createElement('style');
style.textContent = '.visible { opacity:1 !important; transform:translateY(0) !important; }';
document.head.appendChild(style);

// ====== HERO MOUSE-FOLLOW GLOW ======
const hero = document.getElementById('hero');
const glow = document.getElementById('heroCursorGlow');
if (hero && glow && window.matchMedia('(hover: hover)').matches) {
    let targetX = 0, targetY = 0, curX = 0, curY = 0;
    let ticking = false;
    hero.addEventListener('mousemove', (e) => {
        const r = hero.getBoundingClientRect();
        targetX = e.clientX - r.left;
        targetY = e.clientY - r.top;
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(animateGlow);
        }
    });
    hero.addEventListener('mouseenter', () => glow.style.opacity = '1');
    hero.addEventListener('mouseleave', () => glow.style.opacity = '0.4');
    function animateGlow() {
        curX += (targetX - curX) * 0.15;
        curY += (targetY - curY) * 0.15;
        glow.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
        if (Math.abs(targetX - curX) > 0.5 || Math.abs(targetY - curY) > 0.5) {
            requestAnimationFrame(animateGlow);
        } else {
            ticking = false;
        }
    }
}

// ====== COUNTER ANIMATIONS ======
const formatNum = (n) => {
    if (n >= 1000) return n.toLocaleString('da-DK');
    return Math.round(n).toString();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count || '0');
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();
        const initial = 0;
        function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = initial + (target - initial) * eased;
            if (target === 0) {
                el.textContent = prefix + '0' + suffix;
            } else {
                el.textContent = prefix + formatNum(val) + suffix;
            }
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
    });
}, { threshold: 0.3 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ====== ROI CALCULATOR ======
const roiCustomers = document.getElementById('roiCustomers');
const roiValue = document.getElementById('roiValue');
const roiValueOut = document.getElementById('roiValueOut');
const roiMonthly = document.getElementById('roiMonthly');
const roiYearly = document.getElementById('roiYearly');
const roiDays = document.getElementById('roiDays');

function fmtKr(n) {
    return Math.round(n).toLocaleString('da-DK') + ' kr';
}

function updateRoi() {
    if (!roiCustomers || !roiValue) return;
    const customers = parseInt(roiCustomers.value, 10);
    const perCustomer = parseInt(roiValue.value, 10);
    const monthly = customers * perCustomer;
    const yearly = monthly * 12;
    const sitePrice = 5000;
    const daysPayback = monthly > 0 ? Math.max(1, Math.round((sitePrice / monthly) * 30)) : 999;

    if (roiValueOut) roiValueOut.textContent = fmtKr(perCustomer);
    if (roiMonthly) roiMonthly.textContent = fmtKr(monthly);
    if (roiYearly) roiYearly.textContent = fmtKr(yearly);
    if (roiDays) {
        if (daysPayback <= 31) {
            roiDays.textContent = daysPayback + (daysPayback === 1 ? ' dag' : ' dage');
        } else {
            const months = Math.round(daysPayback / 30);
            roiDays.textContent = months + (months === 1 ? ' måned' : ' måneder');
        }
    }
}

if (roiCustomers) roiCustomers.addEventListener('change', updateRoi);
if (roiValue) roiValue.addEventListener('input', updateRoi);
updateRoi();

// ====== MAGNETIC BUTTONS ======
if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.btn-magnetic').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const r = btn.getBoundingClientRect();
            const relX = e.clientX - r.left - r.width / 2;
            const relY = e.clientY - r.top - r.height / 2;
            btn.style.transform = `translate(${relX * 0.25}px, ${relY * 0.35}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// ====== WORK FILTER ======
const filterPills = document.querySelectorAll('.filter-pill');
const workCards = document.querySelectorAll('.work-card[data-category]');
if (filterPills.length && workCards.length) {
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const filter = pill.dataset.filter;
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            workCards.forEach((card, i) => {
                const cat = card.dataset.category;
                const match = filter === 'all' || cat === filter;
                if (match) {
                    card.removeAttribute('data-hidden');
                    card.style.opacity = '';
                    card.style.transform = '';
                    card.classList.add('visible');
                    card.style.animation = `filterIn 0.45s ${i * 0.035}s cubic-bezier(0.16,1,0.3,1) both`;
                } else {
                    card.setAttribute('data-hidden', 'true');
                    card.style.animation = '';
                }
            });
        });
    });
}

// ====== 3D TILT ON WORK CARDS ======
if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.work-card').forEach(card => {
        let rafId = null;
        card.addEventListener('mousemove', (e) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const r = card.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;
                card.style.transform = `translateY(-8px) perspective(900px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
                rafId = null;
            });
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ====== PARALLAX ON HERO FLOATS ======
const floats = document.querySelectorAll('.float-mock');
if (floats.length && window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y > 800) return;
        floats.forEach((f, i) => {
            const speed = 0.15 + i * 0.05;
            f.style.setProperty('--py', `${y * speed}px`);
            f.style.marginTop = `${-y * speed}px`;
        });
    }, { passive: true });
}
