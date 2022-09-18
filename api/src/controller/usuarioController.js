import { Router } from 'express';
import { login } from '../repository/usuarioRepository';

const server = Router();

server.post('/usuario/login', async (req, resp) => {
    try{
        const {email, senha} = req.body;
        const resposta = await login(email, senha);
        resp.send(resposta)
    } catch (err){
        resp.status.send({
            erro: err
        })
    }
})

export default server;