import { cadastrarProdutos, enviarImagem, salvarCategoria, buscarPorId, buscarPorNome, buscarTodosProdutos, prodPromoImperdivel, remomoverProdutoCategoria, remomoverProdutoImagens, remomoverProduto, prodMaisVendidos, depSelecionar, alterarProduto} from "../repository/produtoRepository.js";
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
        const id = Number(req.params.id);

        const resposta = await buscarPorId(id);
        if(!resposta)
        resp.status(400).send([])

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

server.get('/maisvendidos', async (req, resp) =>{
    try{
        const resposta = await prodMaisVendidos();
        resp.send(resposta)
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/departamentos', async (req, resp) =>{
    try{
        const resposta = await depSelecionar();
        resp.send(resposta);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/adm/produto/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const altProduto = req.body;

        if (altProduto.nome == undefined || altProduto.nome == '') {
            throw new Error('Nome do produto é obrigatório!');
        }
        else if (isNaN(altProduto.preco) || altProduto.preco <= 0) {
            throw new Error('Preço do produto é obrigatório!');
        }
        else if (altProduto.desconto == undefined) {
            throw new Error('Desconto é obrigatório, se nao houver mantenha em 0!');
        }
        else if (altProduto.desconto == NaN) {
            throw new Error('Desconto Invalido :(');
        }
        else if (altProduto.avaliacao == NaN || altProduto.avaliacao === undefined){
            throw new Error('Avaliação invalida :(')
        }
        else if (altProduto.fabricante == Number){
            throw new Error('Fabricante invalido')
        }
        else if (altProduto.avaliacao == undefined){
            throw new Error('O Fabricante é Obrigatório')
        }
        else if (altProduto.estoque == undefined){
            throw new Error('Informe a Quantia em estoque')
        } 
        else if (altProduto.informacoes == undefined){
            throw new Error('O produto precisa ter suas Informações !!')
        }
        else if (altProduto.descricao == undefined){
            throw new Error('Informe a Descrição do produto !!')
        }
        else if (altProduto.garantia == undefined){
            throw new Error('Informe o tempo de Garantia do Produto')
        }


        const resp = await alterarProduto(produto, id);
        if(resp != 1)
            throw new Error('O produto não pode ser alterado');
        else
            resp.status(204).send();

    }catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
}) 



export default server;