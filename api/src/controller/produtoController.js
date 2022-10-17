import { cadastrarProdutos, salvarCategoria, buscarPorId, buscarPorNome, buscarTodosProdutos, prodPromoImperdivel, remomoverProdutoCategoria, remomoverProdutoImagens, remomoverProduto, prodMaisVendidos, depSelecionar, alterarProduto, salvarImagemProd, produtoSelCompra } from "../repository/produtoRepository.js";
import { validarProduto } from "../services/produtoValidacao.js";
import { alterarValid } from '../services/alterarValidacao.js';
import { buscarCategoriaPorId } from "../repository/categoriaRepository.js";


import multer from 'multer';
import { Router } from "express";

const server = Router();

const upload = multer({ dest: 'storage/imagensProduto' })

server.post('/adm/produto', async (req, resp) => {
    try {
        const produto = req.body;
        await validarProduto(produto);
        const idProduto = await cadastrarProdutos(produto);

        for (const idCateg of produto.categorias) {
            const cat = await buscarCategoriaPorId(idCateg);

            if (cat != undefined)
                await salvarCategoria(idProduto, idCateg);
        }

        resp.send({
            id: idProduto
        });

    } catch (err) {

        return resp.status(400).send({
            erro: (err.message)
        });
    }
})


server.get('/produto/nome', async (req, resp) => {
    try {
        const { nome } = req.query;

        const resposta = await buscarPorNome(nome);

        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/produto/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await buscarPorId(id);
        if (!resposta)
            resp.status(400).send([])

        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/produtos', async (req, resp) => {
    try {
        const resposta = await buscarTodosProdutos();
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/promocao', async (req, resp) => {
    try {
        const resposta = await prodPromoImperdivel();
        resp.send(resposta)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.delete('/produto/:id', async (req, resp) => {

    try {
        const id = Number(req.params.id);

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

server.get('/maisvendidos', async (req, resp) => {
    try {
        const resposta = await prodMaisVendidos();
        resp.send(resposta)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/departamentos', async (req, resp) => {
    try {
        const resposta = await depSelecionar();
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/produto/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        const produto = req.body;

        await alterarValid(id, produto);        

        const resp = await alterarProduto(id,produto);
        if(resp != 1)

            throw new Error('O produto não pode ser alterado');
        else
            resp.status(204).send(
                resp.send
            );

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.put('/adm/produto/:id', upload.array('imagens'), async (req, resp) => {
    try {
        const imagens = req.files;
        const id = req.params.id;
        console.log(imagens);
        for (const imagem of imagens) {
            await salvarImagemProd(id, imagem.path);
        }

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const resposta = await produtoSelCompra(id);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;