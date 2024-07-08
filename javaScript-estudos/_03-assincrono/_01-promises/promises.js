// const promesa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: 'thiago', idade: 24 });
//     }, 1000);
//   } else reject();
// });

// const retorno = promesa
//   .then((res) => {
//     console.log(res);
//     res.profissao = 'dev';
//     return res;
//   })
//   .then(
//     (res) => console.log(res),
//     (rej) => console.log(res),
//   )
//   .finally(() => console.log('acabou'));

const login = new Promise((res) =>
  setTimeout(() => {
    res('user logged');
  }, 1000),
);

const data = new Promise((res) =>
  setTimeout(() => {
    res('data loaded');
  }, 1500),
);

const carregouTudo = Promise.all([login, data]);
carregouTudo.then((res) => console.log(res[0]));
