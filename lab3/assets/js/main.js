// Interactive Booking Calculator for Homestay Indah
const WA_BASE = 'https://wa.me/60126538249';

document.addEventListener('DOMContentLoaded', () => {
  const checkinInput = document.getElementById('calc-checkin');
  const checkoutInput = document.getElementById('calc-checkout');
  const guestsInput = document.getElementById('calc-guests');
  const priceDisplay = document.getElementById('calc-total');
  const nightsDisplay = document.getElementById('calc-nights');
  const bookNowBtn = document.getElementById('btn-book-now');

  const RATE_PER_NIGHT = 280; // RM 280 per night entire unit (3R3B)
  const CLEANING_FEE = 50;

  function calculateTotal() {
    if (!checkinInput || !checkoutInput || !priceDisplay) return;
    
    const d1 = new Date(checkinInput.value);
    const d2 = new Date(checkoutInput.value);

    if (d1 && d2 && d2 > d1) {
      const diffTime = Math.abs(d2 - d1);
      const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const total = (nights * RATE_PER_NIGHT) + CLEANING_FEE;
      
      nightsDisplay.textContent = `${nights} Malam`;
      priceDisplay.textContent = `RM ${total.toLocaleString()}`;
      
      if (bookNowBtn) {
        const guests = guestsInput ? guestsInput.value : '';
        const msg = `Halo Homestay Indah! Saya ingin membuat tempahan untuk seluruh unit (3 Bilik, 3 Bilik Air) di Astrum Sena, Seksyen 14, Shah Alam.\n\nTarikh Check-in: ${checkinInput.value}\nTarikh Check-out: ${checkoutInput.value}\nTempoh: ${nights} malam\nBilangan Tetamu: ${guests}\nAnggaran Harga: RM ${total}`;
        bookNowBtn.href = `${WA_BASE}?text=${encodeURIComponent(msg)}`;
      }
    }
  }

  if (checkinInput && checkoutInput) {
    // Prevent picking past dates; check-out must be after check-in
    const today = new Date();
    const iso = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    checkinInput.min = iso(today);
    checkoutInput.min = iso(today);
    checkinInput.addEventListener('change', () => {
      if (checkinInput.value) {
        const next = new Date(checkinInput.value);
        next.setDate(next.getDate() + 1);
        checkoutInput.min = iso(next);
        if (checkoutInput.value && checkoutInput.value <= checkinInput.value) checkoutInput.value = '';
      }
      calculateTotal();
    });
    checkoutInput.addEventListener('change', calculateTotal);
    if (guestsInput) guestsInput.addEventListener('change', calculateTotal);
  }

  // Mobile navigation toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    const setOpen = open => {
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
    links.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  }

  // Contact form -> opens WhatsApp with the details pre-filled
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const val = id => (document.getElementById(id)?.value || '').trim();
      const msg = `Halo Homestay Indah! Saya ingin membuat pertanyaan/tempahan.\n\nNama: ${val('name')}\nNo. Telefon: ${val('phone')}\nEmel: ${val('email') || '-'}\n\nMesej: ${val('message')}`;
      window.open(`${WA_BASE}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    });
  }

  // Background music (original cheerful loop). Browsers block sound until the
  // visitor interacts, so it starts on the first tap/click unless they turned it off.
  const audio = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle');
  if (audio && musicBtn) {
    const KEY = 'homestayMusic';
    const store = {
      get() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } },
      set(v) { try { localStorage.setItem(KEY, JSON.stringify(Object.assign(store.get(), v))); } catch (e) { /* storage unavailable */ } }
    };
    audio.volume = 0.35;
    const setUI = on => {
      musicBtn.classList.toggle('playing', on);
      musicBtn.setAttribute('aria-pressed', String(on));
      musicBtn.setAttribute('aria-label', on ? 'Matikan muzik' : 'Mainkan muzik');
    };
    const start = () => audio.play().then(() => { setUI(true); return true; }).catch(() => { setUI(false); return false; });

    const saved = store.get();
    if (saved.time) audio.addEventListener('loadedmetadata', () => {
      if (saved.time < audio.duration) audio.currentTime = saved.time;
    }, { once: true });
    let lastSave = 0;
    audio.addEventListener('timeupdate', () => {
      const now = Date.now();
      if (now - lastSave > 1000) { lastSave = now; store.set({ time: audio.currentTime }); }
    });
    window.addEventListener('pagehide', () => store.set({ time: audio.currentTime }));

    musicBtn.addEventListener('click', e => {
      e.stopPropagation();
      if (audio.paused) { store.set({ on: true }); start(); }
      else { audio.pause(); setUI(false); store.set({ on: false }); }
    });

    if (saved.on !== false) {
      // Try straight away (works if the browser already allows it), else wait for the first gesture
      start().then(ok => {
        if (ok) return;
        const kick = ev => {
          if (musicBtn.contains(ev.target)) return;
          ['pointerdown', 'keydown'].forEach(t => document.removeEventListener(t, kick, true));
          if (store.get().on !== false) start();
        };
        ['pointerdown', 'keydown'].forEach(t => document.addEventListener(t, kick, true));
      });
    }
  }

  // Scroll reveal animation (graceful: content stays visible without JS)
  const items = document.querySelectorAll('.reveal');
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (items.length && 'IntersectionObserver' in window && !reduce) {
    document.documentElement.classList.add('js-ready');
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in-view'); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
  }
});
