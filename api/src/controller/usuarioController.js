import { login, verificarSeJaAvaliou } from '../repository/usuarioRepository.js';

import { Router } from 'express';
import { inserirAvaliacao } from '../repository/usuarioRepository.js';
import { validarAvaliacaoDoUsuario } from '../services/usuarioAvaliacao.js';

const server = Router();

server.post('/usuario/login', async (req, resp) => {
    try{
        const {email, senha} = req.body;
        const resposta = await login(email, senha);
        if(!resposta){
            throw new Error("Usuario incorreto!!")
        }

        resp.send(resposta)
    } catch (err){
        resp.status(401).send({
            erro: err
        })
    }
})

server.post('/usuario/avaliacao', async (req, resp) => {
    try {
        const produto = req.body;
        await validarAvaliacaoDoUsuario(produto)
        const resposta = await inserirAvaliacao(produto);
        resp.send({
            id: resposta
        });

    } catch (err) {

        return resp.status(400).send({
            erro: (err.message)
        });
    }
})

server.get('/verificar/usuario/avaliacao/:user/:prod', async (req, resp) => {
    try {
        const usid = req.params;
        const verificar = await verificarSeJaAvaliou(usid.user, usid.prod);
        resp.send({
            id: verificar
        });

    } catch (err) {

        return resp.status(400).send({
            erro: (err.message)
        });
    }
})

export default server;