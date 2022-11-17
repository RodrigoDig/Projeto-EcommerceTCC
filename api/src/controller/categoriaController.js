import { buscaCatNome, buscarCategoriaPorId, cat1, cat2, cat3, listarCategorias } from "../repository/categoriaRepository.js";

import {Router} from "express";
const server = Router();

server.get('/api/categoria', async (req, resp) => {
    try{
        const linhas = await listarCategorias();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/dep/categorias', async (req, resp) => {
    try{

        let categoria1 = await cat1();
        let categoria2 = await cat2();
        let categoria3 = await cat3();

        if(categoria1 == 0 || !categoria1 || categoria1 == undefined){
            categoria1 = await buscarCategoriaPorId(1);
        }
        if(categoria2 == 0 || !categoria2 || categoria2 == undefined){
            categoria2 = await buscarCategoriaPorId(1);
        }
        if(categoria3 == 0 || !categoria3 || categoria3 == undefined){
            categoria3 = await buscarCategoriaPorId(1);
        }

        console.log(categoria1);
        resp.send({
            c1: categoria1,
            c2: categoria2,
            c3: categoria3
        });
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/dep/categorias/:nome', async (req, resp) => {
    try{
        const { nome } =  req.params.nome
        const resposta = await buscaCatNome(nome);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;