function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  // this.andar = function () {
  //   return 'andou';
  // };
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou por prototype`;
};

const thiago = new Pessoa('thiago', 24);
console.log(thiago.andar());

const pais = 'brasil';
const cidade = new String('Recife');
console.log(cidade.bold());
