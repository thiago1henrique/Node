const numero = Number(prompt("Digite um número:"));
const numeroTitulo = window.document.querySelector("#numero-titulo");
const textoDiv = window.document.querySelector("#texto");

numeroTitulo.innerHTML = numero;
textoDiv.innerHTML = '';
textoDiv.innerHTML += `<p>Raiz quadrada:${numero ** 0.5}.</p>`;
textoDiv.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
textoDiv.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
textoDiv.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}.</p>`;
textoDiv.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}.</p>`;
textoDiv.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
