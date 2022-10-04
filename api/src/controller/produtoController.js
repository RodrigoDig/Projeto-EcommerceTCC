import { cadastrarProdutos, enviarImagem, salvarCategoria, buscarPorId, buscarPorNome, buscarTodosProdutos, prodPromoImperdivel, remomoverProdutoCategoria, remomoverProdutoImagens, remomoverProduto} from "../repository/produtoRepository.js";
import { validarProduto } from "../services/produtoValidacao.js";
import { buscarCategoriaPorId } from "../repository/categoriaRepository.js";

import multer from 'multer';
import {Router} from "express";
import { con } from "../repository/connection.js";

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


server.get('/produto/nome', async (req, resp) => {
    try{
        const { nome } = req.query;

        const resposta = await buscarPorNome(nome);
        
        if(resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/produto/:id', async (req, resp) => {
    try{
        const id = req.params.id;

        const resposta = buscarPorId(id);

        resp.send(resposta);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/produtos', async (req, resp) => {
    try{
        const resposta = await buscarTodosProdutos();
        resp.send(resposta);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/promocao', async (req, resp) =>{
    try{
        const resposta = await prodPromoImperdivel();
        resp.send(resposta)
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.delete('/admin/produto/:id', async(req , resp) => {

    try{
        const id = req.params.id;

        await remomoverProdutoCategoria(id);
     
        await remomoverProdutoImagens(id);
        
        await remomoverProduto(id);
       
        
        resp.status(204).send();

    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



export default server;