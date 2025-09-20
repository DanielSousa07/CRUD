const express = require('express');
const clientController = require('./controllers/ClientController')


const routes = express.Router();

routes.post('/insert', clientController.store)
routes.get('/list', clientController.index)
routes.put('/update/:id', clientController.update)
routes.delete('/delete/:id', clientController.delete)


module.exports = routes
