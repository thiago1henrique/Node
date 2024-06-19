const button = document.querySelector('button');
const config = localStorage.getItem('config');

if (button) button.click();
button?.click();

let total;
console.log(total);

function teste() {}
// console.log(teste());

// if(total) console.log("Total foi definido.");
// else console.log("Total não foi definido.")

interface Product {
  nome?: string;
}

const jogo: Product = {
  nome: "Ragnarok",
}

const livro: Product = {
  
}

livro.nome?.toLowerCase();

jogo.nome?.toLocaleLowerCase();