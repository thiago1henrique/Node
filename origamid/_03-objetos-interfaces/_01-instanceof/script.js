"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new Produto('A Guerra dos Tronos');
console.log(livro instanceof Produto);
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit')
        return new Livro('J. R. R. Tolkien', 'tolkien');
    else if (busca === 'Dark Souls')
        return new Jogo('Dark Souls', 1);
    else
        return null;
}
const produto = buscarProduto('O Hobbit');
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto instanceof Jogo) {
    console.log(produto.jogadores);
}
if (produto instanceof Produto) {
    console.log(produto.nome);
}
