//Definidno o modelo de dados para a coleção - Usando moongose para criar uma esquema que determina a estrutura dos documentos na coleção
import { compare } from '../../node_modules/bcryptjs/index';


const mongoose =  require('mongoose');
const bcrypt = require('bcryptjs');

const clientSchema = new mongoose.Schema({ //criando um novo esquema chamado clienteSchema - vai definir as regras das coisas que serão salvas no documento
    email: {
        type: String,
        unique: true, // Garante que seja único na coleção
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false, //Impede que a senha seja retornada em consultas
    },

    nome: String,
    rua: String,
    numero: String,
    bairro: String,
    cep: String,
    cidade: String,
    uf: String,
}); // O mongose irá testar e validar esse esquema antes de salva-los no Banco de Dados

//Criptografando antes de salvar
clientSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password,10);
    this.password= hash;
    next();
});

clientSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('Client', clientSchema) // Essa linha cria e exporta o modelo CLient a partir do clientSchema 