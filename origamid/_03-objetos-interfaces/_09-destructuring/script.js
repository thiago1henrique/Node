"use strict";
const { body } = document;
console.log(body);
function handleData({ nome, preco }) {
    nome.includes('book');
    preco?.toFixed();
}
handleData({ nome: 'notebook', preco: 2000 });
function handleClick({ currentTarget }) {
    console.log(currentTarget);
}
document.documentElement.addEventListener('click', handleClick);
