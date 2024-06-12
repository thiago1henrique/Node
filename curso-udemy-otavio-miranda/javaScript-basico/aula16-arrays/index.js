const alunos = ["thiago", "Henrique", "Santos"];
alunos.push("Luiza");
alunos.push("Eduardo");
console.log(alunos.slice(0, -1));
console.log("---------");
console.log(typeof alunos);
console.log("---------");
console.log(alunos instanceof Array);

//removendo sem alterar index
//---------------------------
// delete alunos[1];

//removendo do fim e do começo
//----------------------------
// alunos.pop(); -> remove do fim
// alunos.shift(); -> remove do começo
//valores removidos podem ser salvos em uma váriavel


//adicionar ao inicio
//-------------------
// alunos.unshift("Luiza");
// alunos.unshift("Fabio");

//adicionar ao final
//------------------
// alunos[alunos.length] = "Luiza";
// alunos.push("Laura");