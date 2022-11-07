import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function cadCupom(nome, codigo, valor, cadastro, vencimento){
    const r = await api.post('/cadastro/cupom', {
        nome,
        codigo,
        valor,
        cadastro,
        vencimento
    })

    return r.data;
}

export async function alterarCupom(id, nome, codigo, valor, cadastro, vencimento){
    const r = await api.put( `/cadastro/cupom/${id}`, {
        nome,
        codigo,
        valor,
        cadastro,
        vencimento
    })

    return r.data;
}

export async function listarCupons(){
    const resposta = await api.get('/cupom');
    return resposta.data;
}

export async function buscarNome(nome){
    const resposta = await api.get(`/busca/cupom?nome=${nome}`);
    return resposta.data;
}


export async function deletarCupom(id) {
    
    const resposta = await api.delete('/cupom/' + id);
    return resposta.data;
}

