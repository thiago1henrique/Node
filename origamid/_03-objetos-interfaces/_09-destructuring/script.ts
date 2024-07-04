const { body }: { body: HTMLElement } = document;
console.log(body);

function handleData({ nome, preco }: { nome: string; preco: number }) {
  nome.includes('book');
  preco?.toFixed();
}

handleData({ nome: 'notebook', preco: 2000 });

function handleClick({currentTarget}: {currentTarget: EventTarget | null}) {
  console.log(currentTarget);
}

document.documentElement.addEventListener('click', handleClick);
