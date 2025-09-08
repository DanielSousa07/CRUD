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
    async index(req, res) {},
    async update(req, res) {},
    async delete(req, res) {}
}