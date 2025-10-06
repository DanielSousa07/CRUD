//Definindo as rotas URLs que os clientes podem acessar para interagir com a aplicação

const express = require('express'); //Importando Express para usar o obejto router
const clientController = require('./controllers/ClientController') //importando o arquivo que contém toda a lógica de como lidar com as requisições de clientes(como criar, ler, atualizar, excluir)


const routes = express.Router(); //instanciando o objeto router a partir do express


routes.post('/insert', clientController.store) //utilizando a rota post que é a mais comum para criar
routes.get('/list', clientController.index) //Método get para obter e visualizar as informação, chamada para listar todos os clientes
routes.put('/update/:id', clientController.update) // Utilizada para atualizar um cliente especifico, atravez do id, que será passado com URL
routes.delete('/delete/:id', clientController.delete) // deletar o usuário especifico atravez do id


module.exports = routes // Exporta o objeto routes ṕara que ele possa ser usado no index.js
