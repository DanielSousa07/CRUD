//Aqui temos as funções que são chamadas pelas rotas para interagir com o banco de dados e manipulá-los
const Client = require('../models/Client')


module.exports = {
    async store(req, res) {
        const {email, nome, rua, numero, bairro, cep, cidade, uf} = req.body // Destrutura o corpo da requisição para extrair os dados dos cliented
        
        const mailExist = await Client.findOne({email}) // o await espera a resposta do Banco de Dados antes de continuar 

        if (mailExist) {
            return res.json({erro: "Este E-mail já está em uso."}) //Se encontrar algo duplicado, retorna o JSON de erro
        }
        const client = await Client.create({email, nome, rua, numero, bairro, cep, cidade, uf}) //Senao, cria um Client normalmente
        return res.json(client)
    },
    async index(req, res) {
        const clients = await Client.find()
        return res.json(clients)
    },
    async update(req, res) {
        const {id} = req.params //Obtém o ID do cliente da URL
        const {email, nome, rua, numero, bairro, cep, cidade, uf} = req.body //Obtém os novos dados do corpo da requisição 

        const client = await Client.findByIdAndUpdate(id, {email, nome, rua, numero, bairro, cep, cidade, uf}, {new: true}) //Encontra o cliente pelo ID e o atuliza com os novos dados, {new: true, garante que volta o documento atualizado}
        return res.json(client)
    },
    async delete(req, res) {
        const {id} = req.params

        await Client.findByIdAndDelete(id)
        return res.json({sucesso: 'Cliente removido com sucesso'})
    }
}