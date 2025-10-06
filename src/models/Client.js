//Definidno o modelo de dados para a coleção - Usando moongose para criar uma esquema que determina a estrutura dos documentos na coleção



const mongoose =  require('mongoose');


const clientSchema = new mongoose.Schema({ //criando um novo esquema chamado clienteSchema - vai definir as regras das coisas que serão salvas no documento
    email: {
        type: String,
        unique: true, // Garante que seja único na coleção
        required: true,
        lowercase: true,
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


module.exports = mongoose.model('Client', clientSchema) // Essa linha cria e exporta o modelo CLient a partir do clientSchema 