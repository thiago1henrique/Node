// function somar(a: number, b: number, c?: number): number {
//   return a + (c ? c : 0);
// }

// somar(2, 3);

// const subtrair = (a: number, b: number) => a - b;
// subtrair(2, 5);

// type Callback = (event: MouseEvent) => void;

// function pintarTela(cor: string) {
//   document.body.style.background = cor;
// }

// console.log(pintarTela('#000'));

// function isString(value: any) {
//   if (typeof value === 'string') return true;
// }

// console.log(isString(200));

// function abortar(mensagem: string): never {
//   throw new Error(mensagem);
// }

// abortar('um erro ocorreu');
// console.log('tente novamente');

// interface Quadrado {
//   lado: number;
//   perimetro(lado: number): number
// }

// function calcular(forma: Quadrado) {
//   forma.perimetro(3);
// }

// function normalizar(valor: string[]): string[];
// function normalizar(valor: string): string;
// function normalizar(valor: string | string[]): string | string[] {
//   if (typeof valor === 'string') return valor.trim().toLocaleLowerCase();
//   else return valor.map(item => item.trim().toLowerCase());
// }

// console.log(normalizar(' PRODUTO   '));
// console.log(normalizar(['UVA', ' PERA     ']));

// function $(seletor: 'video'): HTMLVideoElement | null;
// function $(seletor: 'a'): HTMLAnchorElement | null;
// function $(seletor: string): Element | null;
// function $(seletor: string): Element | null {
//   return document.querySelector(seletor);
// }

// $('video')?.volume;
// $('a')?.href;
// $('.menu');

function arredondar(valor: number): number;
function arredondar(valor: string): string;
function arredondar(valor: number | string): number | string {
  if (typeof valor === 'number') return Math.ceil(valor);
  else return Math.ceil(Number(valor)).toString();
}

console.log(arredondar(200.32));
