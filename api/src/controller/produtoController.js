import { cadastrarProdutos, salvarCategoria } from "../repository/produtoRepository.js";

import {Router} from "express";
const server = Router();

server.post('/adm/produto', async (req, resp) =>{
    try{
        const produto = req.body;
        const idProduto = await cadastrarProdutos(produto);

        for(const idCatego of produto.categorias){
            await salvarCategoria(idProduto, idCatego);
        }

        resp.status(204).send();
    }catch(err){
        return resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;