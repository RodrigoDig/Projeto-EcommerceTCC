import { cartaoUsuario } from "../repository/cartaoUsuarioRepository.js";
import { Router } from "express";

const server = Router();

server.post('/usuario/cartao', async (req, resp) =>{
    try{
        const cartao = req.body;
        const linhas = await cartaoUsuario(cartao)
        resp.send(linhas)

    }catch(err){
        resp.status(400).send({
            err:"Ops, algo está com defeito. Verifique seu código!"
        })
    }

})

export default server; 