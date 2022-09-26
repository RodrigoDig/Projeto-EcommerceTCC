import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarProduto(idDepartamento, nome, preco, desconto, avaliacao, fabricante, estoque, informacoes, descricao, garantia, categorias){
    const rE = await api.post('/adm/produto', {
        idDepartamento: idDepartamento,
        nome: nome,
        preco: preco,
        desconto: desconto,
        avaliacao: avaliacao,
        fabricante: fabricante,
        estoque: estoque,
        garantia:garantia,
        informacoes: informacoes,
        descricao: descricao,
        categorias: categorias
    })

    return rE.data;
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