function meuEscopo() {
  const form = window.document.querySelector(".form");
  const resultado = window.document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = window.document.querySelector(".nome").value;
    const sobrenome = window.document.querySelector(".sobrenome").value;
    const peso = window.document.querySelector(".peso").value;
    const altura = window.document.querySelector(".altura").value;

    pessoas.push({
      nome, sobrenome, peso, altura
    });

    resultado.innerHTML += `<p> ${nome} ${sobrenome} ${peso} ${altura}</p>`
    console.log(pessoas)
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();


//forma antiga
// form.onsubmit = event => {
//   event.preventDefault();
// }