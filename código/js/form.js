// Validação de formulário de contato (sem mudar o visual)
(function(){
  const form = document.querySelector('form[action*="contato"], #form-contato, form');
  if (!form) return;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setMsg(el, msg){
    let s = el.parentElement && el.parentElement.querySelector('.error');
    if (!s){
      s = document.createElement('small');
      s.className = 'error';
      el.parentElement && el.parentElement.appendChild(s);
    }
    s.textContent = msg || '';
  }

  form.addEventListener('submit', (e)=>{
    const nome = form.querySelector('[name="nome"], #nome');
    const email = form.querySelector('[type="email"], [name="email"], #email');
    const assunto = form.querySelector('[name="assunto"], #assunto');
    const mensagem = form.querySelector('textarea, [name="mensagem"], #mensagem');

    let ok = true;
    if (nome && !nome.value.trim()){ setMsg(nome,'Informe seu nome.'); ok=false; } else if (nome){ setMsg(nome,''); }
    if (email && (!email.value.trim() || !emailRegex.test(email.value.trim()))){ setMsg(email,'E-mail inválido.'); ok=false; } else if (email){ setMsg(email,''); }
    if (assunto && !assunto.value.trim()){ setMsg(assunto,'Informe o assunto.'); ok=false; } else if (assunto){ setMsg(assunto,''); }
    if (mensagem && (!mensagem.value.trim() || mensagem.value.trim().length<10)){ setMsg(mensagem,'Escreva ao menos 10 caracteres.'); ok=false; } else if (mensagem){ setMsg(mensagem,''); }

    if (!ok){ e.preventDefault(); }
  });
})();