(function(){
  function apply(bg){
    document.body.classList.remove('bg-pokeballs','bg-center');
    document.body.classList.add(bg === 'center' ? 'bg-center' : 'bg-pokeballs');
    localStorage.setItem('bg', bg);
    document.querySelectorAll('.bg-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.bg === bg));
  }
  function init(){
    const saved = localStorage.getItem('bg') || 'pokeballs';
    apply(saved);
    document.querySelectorAll('.bg-btn').forEach(btn => btn.addEventListener('click', () => apply(btn.dataset.bg)));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();