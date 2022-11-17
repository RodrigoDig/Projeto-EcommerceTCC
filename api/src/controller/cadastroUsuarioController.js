import { validacaoUsuario } from "../services/cadastroUsuarioValidacao.js";
import { cadUser, alterarUsuario, listarUsuarios, buscarNome, buscarId } from "../repository/cadastroUserRepository.js";
import { Router } from 'express';

const server = Router();

server.post('/cadastro/user', async (req, resp)=> {
    try{
        const usuario = req.body;
        await validacaoUsuario(usuario);
        const linhas = await cadUser(usuario);
        
        resp.send(usuario)
        
    }catch(err){
        return resp.status(400).send({
            erro: err.message
        });
    }
})

server.put('/cadastro/user/:id', async(req, resp) =>{
    try{
        const {id} = req.params;
        const usuario = req.body;
        
        await validacaoUsuario(usuario);
        const resposta = await alterarUsuario(id, usuario);
        if(resposta != 1)
            throw new Error('Usuário não pode ser alterado!')
        else
            resp.status(204).send();
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        }) 
    }
})

server.get('/usuario', async (req, resp) =>{
    try{
        const usuario = await listarUsuarios();
        resp.send(usuario);
    }
    catch(err){
        resp.status(400).send({
            erro:"Ops, algo não está funcionando corretamente!!"
        })
    }
})

server.get('/busca/usuario', async (req, resp) =>{
    try{
        const {nome} = req.query;
        const usuario = await buscarNome(nome);

        if(usuario.length == 0)
            resp.status(404).send([])
        else
            resp.send(usuario);
    }
    catch(err){
        resp.status(400).send({
            erro:"Ops, algo não está funcionando corretamente!!"
        })
    }
})

server.get('/consulta/usuario/:id', async (req, resp) =>{
    try{
        const {id} = req.params;
        const usuario = await buscarId(id);

        if(!usuario)
            resp.status(404).send([])
        else
            resp.send(usuario);
    }
    catch(err){
        resp.status(400).send({
            erro:"Ops, algo não está funcionando corretamente!!"
        })
    }
})

export default server;