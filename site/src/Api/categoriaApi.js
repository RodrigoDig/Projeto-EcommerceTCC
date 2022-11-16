import { API_URL } from "./config";

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function listarCategorias(){
    const x = await api.get('/api/categoria');
    return x.data;
}

export async function buscarCategoriasDep(){
    const resposta = await api.get('/dep/categorias');
    return resposta.data;
}

export async function buscarCategoriasDepNome(nome){
    const resposta = await api.get('/dep/categorias/' + nome);
    return resposta.data;
}