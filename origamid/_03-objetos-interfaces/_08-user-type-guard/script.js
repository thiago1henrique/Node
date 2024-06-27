"use strict";
// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const json = await response.json();
//   handleCursos(json);
// }
// fetchCursos();
// function handleCursos(data: unknown) {
//   if (data instanceof Array) console.log('é uma instancia de array');
//   if (Array.isArray(data)) console.log('é array');
// }
// function isString(value: unknown): value is string {
//   return typeof value === 'string';
// }
// function handleData(data: unknown) {
//   if(isString(data)) {
//     data.toLowerCase;
//   }
// }
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}
