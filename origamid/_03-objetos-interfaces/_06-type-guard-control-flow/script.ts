const obj = {
  nome: 'thiago',
};

if ('nome' in obj) console.log('sim');

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}

interface Produto {
  nome: string;
  preco: number;
}

function handleProduto(data: Produto) {
  console.log(data);
  if ('preco' in data) document.body.innerHTML += `<p>Nome ${data.nome}</p> <p>${data.preco}</p>`;
}

fetchProduto();
