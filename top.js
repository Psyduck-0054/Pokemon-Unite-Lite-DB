(function(){
  const el = document.createElement('div');
  el.className = 'to-top';
  el.innerHTML = `<button aria-label="Back to top">↑ Top</button>`;
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(el);
    const btn = el.querySelector('button');
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    const onScroll = () => { el.style.display = window.scrollY > 300 ? 'block' : 'none'; };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  });
})();