"use strict";
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    console.log(data);
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante')
            color = 'blue';
        else
            color = 'red';
        document.body.innerHTML += `
      <div>
        <h2 style="color: ${color}">NOME: ${curso.nome}</h2>
        <p>Aulas: ${curso.horas}</p>
        <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>Tags: ${curso.tags.join(', ')}</p>
        <p>Aulas: ${curso.idAulas.join('| ')}</p>
      </div>
    `;
    });
}
// const numeros = [10, 20, 30, 40, 50, 60];
// const valores = [10, 'Taxas', 30, 'Produto', 50, 60];
// function filtrarValores(data: (string | number)[]) {
//   return data.filter(item => typeof item === 'number');
// }
// function maiorQueDez(data: number[]) {
//   return data.filter(n => n > 10);
// }
// console.log(maiorQueDez(numeros));
// const dados = [
//   ['senhor dos aneis', 80],
//   ['a guerra dos tronos', 120],
// ];
// console.log(dados);
