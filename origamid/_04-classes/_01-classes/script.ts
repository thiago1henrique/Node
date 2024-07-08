class Produto {
  readonly tipo = 'produto';
  nome: string;
  //private preco: number;
  protected preco: number;
  constructor(nome: string, preco: number) {
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
