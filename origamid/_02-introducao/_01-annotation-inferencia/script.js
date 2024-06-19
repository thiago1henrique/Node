"use strict";
let livro = 'Livro';
let preco = 200;
preco = 300;
const carro = {
    marca: 'Audi',
    portas: 5,
};
const barato = preco < 400 ? true : 'produto caro';
function somar(a, b) {
    return a + b;
}
somar(4, 10);
//somar("3", "5"); erro
const nintendo = {
    nome: 'Nintendo',
    preco: '2000',
};
function transformarPreco(produto) {
    produto.preco = `R$ - ${produto.preco}`;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
//exercicio 1
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto('       AAAAA BOM DIA                     '));
//exercicio 2
const input = window.document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = window.document.querySelector('p');
    if (p)
        p.innerText = `Ganho total ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
if (input)
    input.addEventListener('keyup', totalMudou);
