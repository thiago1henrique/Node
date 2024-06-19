"use strict";
async function fetchProducts() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    console.log(data);
    showProduct(data);
}
fetchProducts();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>Nome produto: ${data.nome}</h2>
      <p>Preço: ${data.preco}</p>
      <p>Descrição: ${data.descricao}</p>
      <p>Data garantia: ${data.garantia}</p>
      <p>Tem seguro? ${data.seguroAcidentes}</p>
      <p>Fabricante: ${data.empresaFabricante.nome}</p>
      <p>Ano fundação: ${data.empresaFabricante.fundacao}</p>
      <p>País: ${data.empresaFabricante.pais}</p>
    </div>
  `;
}
// type NumberOrString = string | number;
// let idade: NumberOrString = 24;
// idade = 'vinte e quatro';
// type Produto = {
//   nome: string;
//   preco: number;
//   teclado: boolean;
// };
// function preencherDados(dados: InterfaceProduto) {
//   document.body.innerHTML += `
//     <div>
//       <h2>${dados.nome}</h2>
//       <p>R$ ${dados.preco}</p>
//       <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
//     </div>
//   `;
// }
// const computador: Produto = {
//   nome: 'computador',
//   preco: 4000,
//   teclado: false,
// };
// type Categorias = 'design' | 'código' | 'descod';
// function pintarCategoria(categoria: Categorias) {
//   if (categoria === 'design') console.log('Pintar vermelho');
//   else if (categoria === 'código') console.log('Pintar azul');
//   else console.log('Pintar verde');
// }
// pintarCategoria('descod');
// preencherDados({
//   nome: 'computador',
//   preco: 4000,
//   teclado: false,
// });
// preencherDados({
//   nome: 'notebook',
//   preco: 8000,
//   teclado: true,
// });
// interface InterfaceProduto {
//   nome: string;
//   preco: number;
//   teclado: boolean;
// }
