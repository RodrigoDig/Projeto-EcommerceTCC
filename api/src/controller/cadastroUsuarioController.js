import { validacaoUsuario } from "../services/cadastroUsuarioValidacao.js";
import { cadUser } from "../repository/cadastroUserRepository.js";
import { Router } from 'express';

const server = Router();

server.post('/cadastro/user', async (req, resp)=> {
    try{
        const usuario = req.body;
        await validacaoUsuario(usuario);
        const linhas = await cadUser(usuario);
        
        resp.send(usuario)
        
    }catch(err){
        return resp.status(400).send({
            erro: err.message
        });
    }
})

export default server;