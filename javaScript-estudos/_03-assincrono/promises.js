const promessa = new Promise((resolve, reject) => {
  let condicao = true 
  if(condicao) resolve('thiago');
  else reject();
});
console.log(promessa);
