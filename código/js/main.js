// Menu simples acessível (toggle) — não altera visual da Sprint 1
const toggle = document.querySelector('.menu-toggle, .btn-menu, .hamburger, .menu');
const nav = document.querySelector('nav, .nav, #nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Marcador de link ativo (apenas se os hrefs coincidirem)
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('a[href]').forEach(a=>{
  if (a.getAttribute('href') === here) a.classList.add('active');
});


/* Guardar primeiro nome no navegador para dar boas-vindas no futuro */
(function(){
  try{
    const form = document.querySelector('#form-contato, form');
    if (!form) return;
    const nomeEl = form.querySelector('#nome,[name="nome"]');
    form.addEventListener('submit', ()=>{
      if (nomeEl && nomeEl.value.trim()){
        localStorage.setItem('snome', nomeEl.value.trim());
      }
    });
    const saved = localStorage.getItem('snome');
    if (saved){
      const h = document.querySelector('h1, h2');
      if (h && !/bem-vindo/i.test(h.textContent)){
        h.insertAdjacentHTML('afterend', `<p>Bem-vindo de volta, ${saved}!</p>`);
      }
    }
  }catch(e){ /* silencioso */ }
})();
