const Client = require('../models/Client')
const jwt = require('jsonwebtoken')

const secretKey = 'sua_chave_secreta_aqui';

function generateToken(params = {}) {
    return jwt.sign(params, secretKey, {
        expiresIn: 86400, // Expira em 1 dia (86400 segundos)
    });
}

module.exports = {
    async register(req, res) {
        const { email, password, nome, rua, numero, bairro, cep, cidade, uf } = req.body;

        try {
            if (await Client.findOne({ email })) {
                return res.status(400).send({ error: 'E-mail já cadastrado.' });
            }

            const client = await Client.create({ email, password, nome, rua, numero, bairro, cep, cidade, uf });

            // Não retorna a senha ao criar o usuário
            client.password = undefined;

            return res.send({
                client,
                token: generateToken({ id: client._id }),
            });
        } catch (err) {
            console.error('Erro ao registrar usuário:', err);
            return res.status(500).send({ error: 'Falha no registro' });
        }
    },

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const client = await Client.findOne({ email }).select('+password');

            if (!client) {
                return res.status(400).send({ error: 'Usuário não encontrado' });
            }

            // Compara a senha enviada com a senha criptografada
            if (!await client.comparePassword(password)) {
                return res.status(400).send({ error: 'Senha incorreta' });
            }

            // Não retorna a senha na resposta de login
            client.password = undefined;

            return res.send({
                client,
                token: generateToken({ id: client._id }),
            });

        } catch (err) {
            console.error('Erro ao fazer login:', err);
            return res.status(500).send({ error: 'Falha no login' });
        }
    }
};