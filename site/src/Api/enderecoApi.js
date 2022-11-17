import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function CadEnd(idUsuario, logadouro, numero, bairro, cep, cidade, estado, complemento, casa){
    const r = await api.post('/cadastro/endereco', {
        idUsuario,
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