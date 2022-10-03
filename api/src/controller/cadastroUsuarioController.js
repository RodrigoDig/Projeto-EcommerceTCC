import { cadUser } from "../repository/cadastroUserRepository.js";
import { Router } from 'express';

const server = Router();

server.post('/cadastro/user', async (req, resp)=> {
    try{

        const usuario = req.body;
        const linhas = await cadUser(usuario)
        resp.send(usuario)

    }catch(err){
        return resp.status(400).send({
            erro:"Ops, algo não está funcionando corretamente!!"
        })
    }
})

export default server;