const express =  require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const App = express(); //Instanciando o App pra receber todas a propriedades do Express
mongoose.connect('mongodb+srv://joseni:a123456@ifma.dkaigsn.mongodb.net/?retryWrites=true&w=majority&appName=IFMA', 
    {useNewUrlParser: true, 
    useUnifiedTopoLogy: true,
    useCreateIndex: true,
}
)
App.use(express.json()); //Agora o programa entende que ta lendo a estrutura de dados express
App.use(routes)


App.listen(3333, () => console.log("Server Running"))