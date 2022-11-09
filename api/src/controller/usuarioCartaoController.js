import { cartaoUsuario } from "../repository/cartaoUsuarioRepository.js";
import { Router } from "express";

const server = Router();

server.post('/usuario/cartao', async (req, resp) =>{
    try{
        const cartao = req.body;
        const linhas = await cartaoUsuario(cartao);
        resp.status(204).send(linhas);

    }catch(err){
        resp.status(400).send({
            err: err.message
        })
    }

})

export default server; 