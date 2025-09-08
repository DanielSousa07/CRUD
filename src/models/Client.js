const mongoose =  require('mongoose');

const clientSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    nome: String,
    rua: String,
    numero: String,
    bairro: String,
    cep: String,
    cidade: String,
    uf: String,
})

module.exports = mongoose.model('Client', clientSchema)