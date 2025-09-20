const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const App = express(); //Instanciando o App pra receber todas a propriedades do Express
mongoose
  .connect(
    "mongodb+srv://joseni:So9R6ztY3asLke0O@ifma.dkaigsn.mongodb.net/crudifma?retryWrites=true&w=majority&appName=IFMA",
    
  )
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso!!!");
  })
  .catch((err) => {
    console.error("Erro ao conectar com o MongoDB:", err);
  });
App.use(express.json()); //Agora o programa entende que ta lendo a estrutura de dados express
App.use(routes);

App.listen(3333, () => console.log("Server Running"));
