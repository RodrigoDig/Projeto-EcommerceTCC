import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})


export async function inserirAvaliacao(idUsuario, idProduto, geral, desempenho, atendimento, satisfacao){
    const r = await api.post('/usuario/avaliacao', {
        idUsuario,
        idProduto,
        geral,
        desempenho,
        atendimento,
        satisfacao
    })

    return r.data;
}

export async function verificarUsuarioAvaliacao(idUsuario, idProduto){
    const resposta = await api.get('/verificar/usuario/avaliacao/' + idUsuario + '/' + idProduto);
    return resposta.data
}
