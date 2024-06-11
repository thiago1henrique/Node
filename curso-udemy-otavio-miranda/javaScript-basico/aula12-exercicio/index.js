let varA = 'A';
let varB = 'B';
let varC = 'C';
let auxiliar;

auxiliar = varA;
varA = varB;
varB = varC;
varC = auxiliar;
console.log(varA, varB, varC);