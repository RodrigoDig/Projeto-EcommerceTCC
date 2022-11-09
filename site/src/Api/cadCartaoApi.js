import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export default async function cartaoUsuario(nome, numero, validade, cvv, cpf, nascimento, pagamento){
    const r = await api.post('/usuario/cartao', {
        nome,
        numero,
        validade, 
        cvv,
        cpf,
        nascimento,
        pagamento
    })

    return r.data;
}