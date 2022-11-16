import { cat1, cat2, cat3, listarCategorias } from "../repository/categoriaRepository.js";

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

        const categoria1 = await cat1();
        const categoria2 = await cat2();
        const categoria3 = await cat3(); 
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

export default server;