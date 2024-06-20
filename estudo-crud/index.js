const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers/index');

router(app);

app.listen(port, (error) => {
  if (error) return console.log('Deu erro');
  console.log('Aplicação rodando na porta 3000.');
});
