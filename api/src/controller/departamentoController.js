import { buscarDepartamentoPorNome, listarDepartamentos } from "../repository/departamentoRepository.js";

import { Router } from "express";
const server = Router();

server.get('/api/departamento', async (req, resp) =>{
    try{
        const linhas = await listarDepartamentos();
        resp.send(linhas);
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }

}) 

server.get('/departamento/:nome', async (req, resp) =>{
    try{
        const {nomeDep} = req.params.nome;
        const nome = await buscarDepartamentoPorNome(nomeDep);
        resp.send({
            Departamento: nome
        });
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
}) 

export default server;