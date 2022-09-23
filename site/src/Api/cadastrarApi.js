import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarProduto(nome, preco, fabricante, qtdEstoque, caracteristicas,avaliacao, desconto, departamento,categorias, garantia, infoTecnicas, descricao){
    const rE = await api.post('/adm/produto', {
        nome: nome,
        preco: preco,
        fabricante: fabricante,
        estoque: qtdEstoque,
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