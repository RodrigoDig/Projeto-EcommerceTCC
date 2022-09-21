import { API_URL } from "./config";

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function listarCategorias(){
    const x = await api.get('/api/categoria');
    return x.data;
}
