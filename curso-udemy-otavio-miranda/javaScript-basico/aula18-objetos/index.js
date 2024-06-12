function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa("thiago", "henrique", 24);
console.log(pessoa1);