// function Carro(marca, preco) {
//   Carro.marca = marca;
//   Carro.preco = preco;
// }

// const honda = new Carro('honda', 25000);
// console.log(honda.marca);

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   };
//   this.ativar = function () {
//     this.element().classList.add('ativou');
//   };
// }

// const li = new Dom('li');
// const ul = new Dom('ul');
// li.ativar();
// ul.ativar();

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(`${nome} andou`);
  };
}

const thiago = new Pessoa('thiago', 24);
const henrique = new Pessoa('henrique', 24);
const andreia = new Pessoa('andreia', 47);
thiago.andar();
henrique.andar();

function elementsDom(seletor) {
  const element = document.querySelectorAll(seletor);
  this.element = element;
  this.addClass = function (classe) {
    element.forEach((element) => element.classList.add(classe));
  };
  this.removeClass = function (classe) {
    element.forEach((element) => element.classList.remove(classe));
  };
}

const listaItems = new elementsDom('li');
listaItems.addClass('teste');
//listaItems.removeClass('teste');
