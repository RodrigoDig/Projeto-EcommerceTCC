import { cadastrarProdutos, enviarImagem, salvarCategoria} from "../repository/produtoRepository.js";

import multer from 'multer';
import {Router} from "express";

const server = Router();

const upload = multer({ dest: 'storage/imagensProduto'})
    
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

server.post( '/prod/:id/capa', upload.single('capa'), async (req, resp) => {
    try{
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await enviarImagem(imagem, id);
        
        if(resposta != 1)
            throw new Error('A imagem não foi salva');

        resp.status(204).send();

    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;