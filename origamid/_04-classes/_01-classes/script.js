"use strict";
class Produto {
    tipo = 'produto';
    nome;
    //private preco: number;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    getPreco() {
        return this.preco;
    }
}
class Livro extends Produto {
}
const livro = new Produto('O senhor dos aneis', 99);
console.log(livro.getPreco());
