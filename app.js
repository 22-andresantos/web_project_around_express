const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

// conectando as rotas modulares
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  // Aspas: Deve-se usar sempre 'aspas simples', nunca "duplas", a menos que seja necessário.
  res.status(404).send({ message: 'A solicitação não foi encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});
