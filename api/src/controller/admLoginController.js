import { Router } from 'express';
import { loginAdm } from '../repository/admLoginRepository.js';

import ValidacaoLoginAdm from '../services/LoginValidacao.js';

const server = Router();

server.post('/admin/loginADM', async (req, resp) => {
    try{
        const {user, senha} = req.body;

        ValidacaoLoginAdm();

        const resposta = await loginAdm(user, senha);
        if(!resposta){
            throw new Error("NENHUM ADM USA ESSAS INFORMAÇÕES")
        }

        resp.send(resposta)
    } catch (err){
        resp.status(401).send({
            erro: 'Credenciais invalidas'
        })
    }
})

export default server;