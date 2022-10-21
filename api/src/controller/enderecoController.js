import { CadastroEnd } from '../repository/enderecoRepository.js';
import { Router } from 'express';

const server = Router();

server.post('/cadastro/endereco', async (req, resp)=> {
    try{
        const endereco = req.body;
        const linhas = await CadastroEnd(endereco)
        resp.send(endereco)
        
    }catch(err){
        return resp.status(400).send({
            erro: "Ops, algo não está funcionando corretamente!!"
        })
    }
})

export default server;