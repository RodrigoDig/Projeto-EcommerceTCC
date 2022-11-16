import { API_URL } from "./config";

import axios from "axios";
const api= axios.create({
    baseURL: API_URL    
})

export async function listarDepartamentos(){
    const x = await api.get('/api/departamento');
    return x.data;
}

export async function buscarProdutosDep(id){
    const resposta = await api.get('/departamentos/produtos/' + id);
    return resposta.data;
}

export async function buscarProdutosCatDep(idCat, idDep){
    const resposta = await api.get('/dep/cat/produtos/' + idCat + '/ ' + idDep);
    return resposta.data;
}