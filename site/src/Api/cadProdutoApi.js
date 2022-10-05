import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function cadastrarProduto(idDepartamento, nome, preco, desconto, avaliacao, fabricante, estoque, informacoes, descricao, garantia, categorias){
    const r = await api.post('/adm/produto', {
        idDepartamento,
        nome,
        preco,
        desconto,
        avaliacao,
        fabricante,
        estoque,
        informacoes,
        descricao,
        garantia,
        categorias
    })

    return r.data;
}

export async function enviarImagemProduto(id, imagem){
    const formData = new FormData();
    formData.append('capa', imagem)
    const resposta = await api.post(`/produto/${id}/capa`, formData, {
        headers: {
            "Content-Type" : "multipart/form-data"
        },
    })
    
    return resposta.status;
}

export async function listarTodosProdutos() {
    const resposta = await api.get('/produtos');
    return resposta.data;
}

export async function prodPromoImperdivel(){
    const resposta = await api.get('/promocao');
    return resposta.data
}

export async function prodMaisVendidos(){
    const resposta = await api.get('/maisvendidos');
    return resposta.data
}

export async function depSelecionar(){
    const resposta = await api.get('/departamentos');
    return resposta.data
}

export async function buscarProdutoNome(nome) {
    const resposta = await api.get(`/produto/nome?nome=${nome}`);
    return resposta.data;
}

