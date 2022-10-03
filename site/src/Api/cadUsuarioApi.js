import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function cadUser(nome, sobrenome, cpf, nascimento, genero, email, celular, senha){
    const r = await api.post('/cadastro/user', {
        nome,
        sobrenome,
        cpf,
        nascimento,
        genero,
        email,
        celular,
        senha
    })

    return r.data;
}