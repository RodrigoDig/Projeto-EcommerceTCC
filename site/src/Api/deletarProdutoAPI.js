import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function removerProduto(id) {
    
    const resposta = await api.delete('/produto/' + id);
    return resposta.data;
}