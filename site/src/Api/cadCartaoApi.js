import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function cartaoUsuario(nome, numero, validade, cvv){
    const r = await api.post('/usuario/cartao', {
        nome,
        numero,
        validade, 
        cvv
    })

    return r.data;
}