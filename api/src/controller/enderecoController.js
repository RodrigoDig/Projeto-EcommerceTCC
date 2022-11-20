import { salvar, listar} from '../repository/enderecoRepository.js';
import { Router } from 'express';

const server = Router();

server.get('/user/:id/endereco', async (req, resp)=> {
    try{
        const id = req.params.id;
        const r = await listar(id);
        resp.send(r);

    }catch(err){
        return resp.status(400).send({
            erro: "Ops, algo não está funcionando corretamente!!"
        })
    }
})

server.post('/user/:id/endereco', async (req, resp)=> {
    try{
        const id = req.params.id;
        const endereco = req.body;  
        const r = await salvar(id, endereco);
        resp.status(204).send();
        
    }catch(err){
        return resp.status(400).send({
            erro: "Ops, algo não está funcionando corretamente!!"
        })
    }
})

export default server;