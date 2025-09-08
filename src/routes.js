const express = require('express');
const clientController = require('./controllers/ClientController')


const routes = express.Router();

routes.get('/insert', clientController.store)


module.exports = routes
