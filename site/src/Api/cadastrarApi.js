import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarProduto(nome, preco, fabricante, estoque, caracteristicas,avaliacao, desconto, departamento,categorias, garantia, infoTecnicas, descricao){
    const rE = await api.post('/adm/produto', {
        nome: nome,
        preco: preco,
        fabricante: fabricante,
        estoque: estoque,
        caracteristicas:caracteristicas,
        avaliacao:avaliacao,
        desconto:desconto,
        idDepartamento:departamento,
        categorias:categorias,
        garantia:garantia,
        informacoes: infoTecnicas,
        descricao:descricao,
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