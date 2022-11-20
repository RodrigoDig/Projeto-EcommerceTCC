import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function salvar(idUsuario, logadouro, numero, bairro, cep, cidade, estado, complemento, casa){
    const r = await api.post('/user/' + idUsuario +'/endereco', {
        logadouro,
        numero,
        bairro,
        cep,
        cidade,
        estado,
        complemento,
        casa
    })

    return r.data;
}

export async function listar(idUsuario){
    const r = await api.get('/user/' + idUsuario +'/endereco');
    return r.data;
}