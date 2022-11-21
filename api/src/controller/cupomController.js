import { Cupom} from '../repository/cupomRepository.js';
import { Router } from 'express';

const server = Router();

server.post('/cadastro/cupom', async (req, resp)=> {
    try{
        const cupom = req.body;
        const comando = await Cupom(cupom)
        resp.send(cupom)
        
    }catch(err){
        console.log(err)
        return resp.status(400).send({
            erro: "Ops, algo não está funcionando corretamente!!"
        })
    }
})

server.put('/cadastro/cupom/:id', async(req, resp) =>{
    try{
        const {id} = req.params;
        const cupom = req.body;

        const resposta = await alterarCupom(id, cupom);
        if(resposta != 1)
            throw new Error('Cupom não pode ser alterado')
        else
            resp.status(204).send();
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        }) 
    }
})

server.get('/cupom', async (req, resp) =>{
    try{
        const cupom = await listarCupons();
        resp.send(cupom);
    }
    catch(err){
        resp.status(400).send({
            erro:"Ops, algo não está funcionando corretamente!!"
        })
    }
})

server.get('/busca/cupom', async (req, resp) =>{
    try{
        const {nome} = req.query;
        const cupom = await buscarNome(nome);

        if(cupom.length == 0)
            resp.status(404).send([])
        else
            resp.send(cupom);
    }
    catch(err){
        resp.status(400).send({
            erro:"Ops, algo não está funcionando corretamente!!"
        })
    }
})

server.get('/consulta/cupom/:id', async (req, resp) =>{
    try{
        const {id} = req.params;
        const cupom = await buscarId(id);

        if(!cupom)
            resp.status(404).send([])
        else
            resp.send(cupom);
    }
    catch(err){
        resp.status(400).send({
            erro:"Ops, algo não está funcionando corretamente!!"
        })
    }
})

server.delete('/cupom/:id', async (req, resp) => {
    try{
        const {id} = req.params;
        const resposta = await deletarCupom(id);
        if(resposta != 1) 
            throw new Error('Cupom não pode ser removido')
        resp.status(204).send(); 
    }   
    catch(err){
        resp.status(400).send({
            erro:"Ops, algo não está funcionando corretamente!!"
        })
    }
})

export default server;