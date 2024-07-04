// const pessoa = {
//   nome: 'thiago',
//   idade: 24,
//   profissao: 'desenvolvedor',
//   possuiFaculdade: false,
// };

// console.log(pessoa);

// const quadrado = {
//   lados: 4,
//   area: function (lado) {
//     return lado * lado;
//   },
//   perimetro: function (lado) {
//     return this.lados * lado;
//   },
// };

// console.log(quadrado.lados);
// console.log(quadrado.area(5));
// console.log(quadrado.perimetro(5));

// console.log('---');

// let width = 1000;
// const menu = {
//   width: 900,
//   height: 400,
//   backgroundColor: '#f00',
//   metadeAltura() {
//     return width / 2;
//   },
// };

// menu.color = 'blue';

// menu.backgroundColor = '#c22';
// console.log(menu);
// console.log(menu.metadeAltura());

const thiago = {
  nome: 'thiago',
  sobrenome: 'henrique',
  exibeNome() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

console.log(thiago.exibeNome());

const carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 30000;
console.log(carro.preco);

const cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') return 'cachorro latiu';
    else return 'balançou rabo';
  },
};

console.log(cachorro.latir('mulher'));
