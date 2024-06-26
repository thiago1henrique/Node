"use strict";
// function retorno<variavel>(a: variavel): variavel {
//   return a;
// }
// console.log(retorno<string>('a game').toUpperCase());
// console.log(retorno<number>(200));
// console.log(retorno<boolean>(true));
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const frutas = ['banana', 'pera', 'uva', 'laranja', 'limão', 'maçã'];
// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0, 5);
// }
// console.log(firstFive<Number>(numeros));
// console.log(firstFive(frutas).map(item => console.log(item)));
// function notNull<T>(arg: T) {
//   if (arg != null) return arg;
//   else return null;
// }
// console.log(notNull('thiago')?.toUpperCase());
// console.log(notNull(false));
// function tipoDado<T>(a: T) {
//   const resultado = {
//     dado: a,
//     tipo: typeof a,
//   };
//   return resultado;
// }
// console.log(tipoDado(true));
// function extractText<T extends HTMLElement>(el: T) {
//   return {
//     texto: el.innerText,
//     el,
//   };
// }
// const link = document.querySelector('a');
// link ? console.log(extractText(link)) : null;
const link = document.querySelector('.link');
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook);
}
handleData();
