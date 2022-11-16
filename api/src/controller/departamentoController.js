import { buscarDepartamentoDiferentes, buscarDepartamentoPorId, listarDepartamentos, prodDepartamento, produtosCatDep, produtosDepartamento } from "../repository/departamentoRepository.js";

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

server.get('/departamentos/:id', async (req, resp) =>{
    try{
        const id = req.params.id;
        let nome = await buscarDepartamentoPorId(id);
        let dif = await buscarDepartamentoDiferentes(id);

        resp.send({
            departamento: nome,
            dep1: dif[0],
            dep2: dif[1],
        });
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
}) 

server.get('/buscarDep/:id', async (req, resp) =>{
    try{
        const id = req.params.nome;
        let resposta = await produtosDepartamento(id);

        resp.send({
            conteudo: resposta
        });
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
}) 


server.get('/departamentos/produtos/:id', async (req, resp) =>{
    try{
        const id = req.params.id;
        let prod = await prodDepartamento(id);
        resp.send(prod);
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
}) 


server.get('/dep/cat/produtos/:idcat/:iddep', async (req, resp) =>{
    try{
        const idcat = req.params.idcat;
        const iddep = req.params.iddep;

        let prod = await produtosCatDep(idcat, iddep);
        resp.send(prod);
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
}) 
export default server;