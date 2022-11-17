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

export async function alterarUsuario(id, nome, sobrenome, cpf, nascimento, genero, email, celular, senha){
    const r = await api.put(`/cadastro/user/${id}`, {
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

export async function listarUsuarios(id){
    const resposta = await api.get('/usuario/ ' + id);
    return resposta.data;
}

export async function buscarNome(nome){
    const resposta = await api.get(`/busca/usuario?nome=${nome}`);
    return resposta.data;
}

export async function buscarId(id){
    const resposta = await api.get(`/consulta/usuario/${id}`);
    return resposta.data;
}