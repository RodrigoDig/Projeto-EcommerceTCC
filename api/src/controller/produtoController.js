import { cadastrarProdutos, enviarImagem, salvarCategoria, listarProdutos} from "../repository/produtoRepository.js";
import { validarProduto } from "../services/produtoValidacao.js";
import { buscarCategoriaPorId } from "../repository/categoriaRepository.js";

import multer from 'multer';
import {Router} from "express";

const server = Router();

const upload = multer({ dest: 'storage/imagensProduto'})
    
server.post('/adm/produto', async (req, resp) =>{
    try{
        const produto = req.body;
        await validarProduto(produto);
        const idProduto = await cadastrarProdutos(produto);
            
        for (const idCateg of produto.categorias) {
            const cat = await buscarCategoriaPorId(idCateg);
            
            if (cat != undefined)
                await salvarCategoria(idProduto, idCateg);
        }
        
        resp.status(204).send();
        
    }catch(err){

        return resp.status(400).send({
            erro: (err.message)
        });
    }
})

server.put('/produto/:id/imagem', upload.single('capa'), async (req, resp) => {
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
        });
    }
})

server.get('/listarProduto/:id/produto', async (req, resp) => {
    try{
        const { id } = req.params;
        const  produto = await listarProdutos(produto);

        resp.status(204).send();


    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }

})

export default server;