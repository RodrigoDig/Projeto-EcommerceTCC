import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export default async function userlogin(nome, email, senha) {
    const r = await api.post ('/user/userLogin', {
        user:  nome,
        email: email,
        senha: senha
    })

    return r.data;
}