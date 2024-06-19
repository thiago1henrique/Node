"use strict";
const link = window.document.getElementById('origamid');
if (link instanceof HTMLAnchorElement)
    link.href = link.href.replace('http://', 'https://');
// class Produto {
//   nome: string;
//   constructor(nome: string) {
//     this.nome = nome;
//   }
// }
// const livro = new Produto('A Guerra dos Tronos');
// console.log(livro instanceof Produto);
// class Livro extends Produto {
//   autor: string;
//   constructor(nome: string, autor: string) {
//     super(nome);
//     this.autor = autor;
//   }
// }
// class Jogo extends Produto {
//   jogadores: number;
//   constructor(nome: string, jogadores: number) {
//     super(nome);
//     this.jogadores = jogadores;
//   }
// }
// function buscarProduto(busca: string) {
//   if (busca === 'O Hobbit') return new Livro('J. R. R. Tolkien', 'tolkien');
//   else if (busca === 'Dark Souls') return new Jogo('Dark Souls', 1);
//   else return null;
// }
// const produto = buscarProduto('O Hobbit');
// if (produto instanceof Livro) {
//   console.log(produto.autor);
// }
// if (produto instanceof Jogo) {
//   console.log(produto.jogadores);
// }
// if(produto instanceof Produto) {
//   console.log(produto.nome);
// }
