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