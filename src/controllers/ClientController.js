const Client = require('../models/Client')

module.exports = {
    async store(req, res) {
        const {email, nome, rua, numero, bairro, cep, cidade, uf} = req.body
        
        const mailExist = await Client.findOne({email}) 

        if (mailExist) {
            return res.json({erro: "Este E-mail já está em uso."})
        }
        const client = await Client.create({email, nome, rua, numero, bairro, cep, cidade, uf})
        return res.json(client)
    },
    async index(req, res) {
        const clients = await Client.find()
        return res.json(clients)
    },
    async update(req, res) {
        const {id} = req.params 
        const {email, nome, rua, numero, bairro, cep, cidade, uf} = req.body

        const client = await Client.findByIdAndUpdate(id, {email, nome, rua, numero, bairro, cep, cidade, uf}, {new: true})
        return res.json(client)
    },
    async delete(req, res) {
        const {id} = req.params

        await Client.findByIdAndDelete(id)
        return res.json({sucesso: 'Cliente removido com sucesso'})
    }
}