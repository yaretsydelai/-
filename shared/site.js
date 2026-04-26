// Scroll reveal
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  function bind() {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
      if (!el.dataset.revealBound) {
        observer.observe(el);
        el.dataset.revealBound = '1';
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
  window.__rebindReveal = bind;
})();

// Live clock in issue bar
(function () {
  function tick() {
    const el = document.querySelector('[data-clock]');
    if (!el) return;
    const d = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    el.textContent = `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} · ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  tick();
  setInterval(tick, 30000);
})();
