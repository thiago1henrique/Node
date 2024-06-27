"use strict";
// function somar(a: number, b: number, c?: number): number {
//   return a + (c ? c : 0);
// }
function arredondar(valor) {
    if (typeof valor === 'number')
        return Math.ceil(valor);
    else
        return Math.ceil(Number(valor)).toString();
}
console.log(arredondar(200.32));
