import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function Cupom(codigo, valor, restante){
    const r = await api.post('/cadastro/cupom', {
        codigo,
        valor,
        restante
    })

    return r.data;
}

export async function alterarCupom(id, codigo, valor, restante){
    const r = await api.put( `/cadastro/cupom/${id}`, {
        codigo,
        valor,
        restante
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

export async function buscarId(id){
    const resposta = await api.get(`/consulta/cupom/${id}`);
    return resposta.data;
}

