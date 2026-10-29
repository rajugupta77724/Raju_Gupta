/* ============================================================
   RAJU GUPTA PORTFOLIO — script.js
   Premium Interactions & Animations
   ============================================================ */

'use strict';

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCustomCursor();
  initScrollProgress();
  initNavbar();
  initHeroTypewriter();
  initMouseGlow();
  initParticles();
  initScrollReveal();
  initSkillsFilter();
  initCopyEmail();
  initContactForm();
  initBackToTop();
  initSmoothScroll();
  initThemeToggle();
});

/* ══════════════════════════════════════════
   LOADER
══════════════════════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  }, 1900);
  document.body.style.overflow = 'hidden';
}

/* ══════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════ */
function initCustomCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let rafId;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left  = mouseX + 'px';
    dot.style.top   = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverEls = 'a, button, .btn, .skill-category-card, .project-card, .service-card, .cert-card';
  document.querySelectorAll(hoverEls).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover-active'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover-active'));
  });
}

/* ══════════════════════════════════════════
   SCROLL PROGRESS BAR
══════════════════════════════════════════ */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const prog  = total ? (window.scrollY / total) * 100 : 0;
    bar.style.width = prog + '%';
  }, { passive: true });
}

/* ══════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════ */
function initNavbar() {
  const navbar  = document.getElementById('navbar');
  const ham     = document.getElementById('hamburger');
  const mMenu   = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a[data-section]');
  if (!navbar) return;

  /* Scroll glass effect */
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateBackToTop();
  }, { passive: true });

  /* Hamburger */
  if (ham && mMenu) {
    ham.addEventListener('click', () => {
      const open = ham.classList.toggle('open');
      mMenu.classList.toggle('open', open);
      ham.setAttribute('aria-expanded', open);
    });
    /* Close on link click */
    mMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        mMenu.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Active section highlight via IntersectionObserver */
  const sections = document.querySelectorAll('section[id]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => io.observe(s));
}

/* ══════════════════════════════════════════
   SMOOTH SCROLL
══════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  /* Scroll indicator */
  const scrollInd = document.querySelector('.scroll-indicator');
  if (scrollInd) {
    scrollInd.addEventListener('click', () => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

/* ══════════════════════════════════════════
   HERO TYPEWRITER
══════════════════════════════════════════ */
function initHeroTypewriter() {
  const el    = document.getElementById('typewriter');
  if (!el) return;
  const roles = ['Web Developer', 'Frontend Developer', 'Software Developer', 'AI & ML Enthusiast'];
  let   roleIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = roles[roleIdx];
    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx  = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 50 : 90);
  }
  setTimeout(type, 1200);
}

/* ══════════════════════════════════════════
   MOUSE GLOW
══════════════════════════════════════════ */
function initMouseGlow() {
  const glow = document.getElementById('mouse-glow');
  if (!glow) return;
  let ticking = false;
  window.addEventListener('mousemove', e => {
    if (!ticking) {
      requestAnimationFrame(() => {
        glow.style.left = e.clientX + 'px';
        glow.style.top  = e.clientY + 'px';
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ══════════════════════════════════════════
   PARTICLES
══════════════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = canvas.width  = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const COUNT = Math.min(60, Math.floor(W * 0.04));
  const particles = Array.from({ length: COUNT }, () => createParticle(W, H));

  function createParticle(w, h, resetY = false) {
    return {
      x:  Math.random() * w,
      y:  resetY ? h + 10 : Math.random() * h,
      r:  Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.5 + 0.2),
      alpha: Math.random() * 0.5 + 0.1,
      color: ['#3b82f6','#8b5cf6','#06b6d4'][Math.floor(Math.random()*3)],
    };
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();

      p.x += p.vx; p.y += p.vy;
      p.alpha -= 0.0004;
      if (p.y < -10 || p.alpha <= 0) {
        particles[i] = createParticle(W, H, true);
      }
    });
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
}

/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!els.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
}

/* ══════════════════════════════════════════
   SKILLS FILTER
══════════════════════════════════════════ */
function initSkillsFilter() {
  const btns   = document.querySelectorAll('.filter-btn');
  const cards  = document.querySelectorAll('.skill-category-card');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach((card, i) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
        if (match) {
          card.style.transitionDelay = (i * 0.05) + 's';
          card.classList.remove('visible');
          setTimeout(() => card.classList.add('visible'), 20);
        }
      });
    });
  });
}

/* ══════════════════════════════════════════
   COPY EMAIL
══════════════════════════════════════════ */
function initCopyEmail() {
  const btn = document.getElementById('copy-email');
  if (!btn) return;
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText('rajugupta77724@gmail.com').then(() => {
      btn.textContent = '✓ Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = '⎘ Copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  });
}

/* ══════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════ */
function initContactForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  function validate(field) {
    const g = field.closest('.form-group');
    const v = field.value.trim();
    let ok = true;
    if (field.required && !v) {
      ok = false;
      g.querySelector('.form-error').textContent = 'This field is required.';
    } else if (field.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      ok = false;
      g.querySelector('.form-error').textContent = 'Enter a valid email address.';
    }
    g.classList.toggle('error', !ok);
    g.classList.toggle('success', ok && !!v);
    return ok;
  }

  form.querySelectorAll('input, textarea').forEach(f => {
    f.addEventListener('blur', () => validate(f));
    f.addEventListener('input', () => {
      if (f.closest('.form-group').classList.contains('error')) validate(f);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let allOk = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(f => {
      if (!validate(f)) allOk = false;
    });
    if (!allOk) return;

    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Sending…';
    btn.classList.add('loading');

    /* FormSubmit.co handles the actual delivery */
    const data = new FormData(form);

    fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      .then(res => {
        btn.classList.remove('loading');
        if (res.ok || res.status === 200) {
          form.style.display   = 'none';
          success.classList.add('show');
        } else {
          btn.textContent = 'Send Message ✈';
          alert('Something went wrong. Please email me directly at rajugupta77724@gmail.com');
        }
      })
      .catch(() => {
        btn.classList.remove('loading');
        btn.textContent = 'Send Message ✈';
        alert('Network error. Please email me directly at rajugupta77724@gmail.com');
      });
  });
}

/* ══════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════ */
function updateBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (btn) btn.classList.toggle('visible', window.scrollY > 400);
}
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ══════════════════════════════════════════
   THEME TOGGLE
══════════════════════════════════════════ */
function initThemeToggle() {
  const btn    = document.getElementById('theme-toggle');
  const icon   = document.getElementById('theme-icon');
  if (!btn) return;

  const saved = localStorage.getItem('theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || 'dark';
    const next    = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    if (icon) icon.textContent = t === 'dark' ? '☀️' : '🌙';
  }
}

/* ══════════════════════════════════════════
   CARD TILT EFFECT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const tiltCards = document.querySelectorAll('.project-card, .service-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const x     = (e.clientX - rect.left) / rect.width  - 0.5;
      const y     = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
});
