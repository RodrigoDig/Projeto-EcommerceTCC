import { CadCupom } from '../repository/cupomRepository.js';
import { Router } from 'express';

const server = Router();

server.post('/cadastro/cupom', async (req, resp)=> {
    try{
        const cupom = req.body;
        const comando = await CadCupom(cupom)
        resp.send(cupom)
        
    }catch(err){
        return resp.status(400).send({
            erro: "Ops, algo não está funcionando corretamente!!"
        })
    }
})

export default server;