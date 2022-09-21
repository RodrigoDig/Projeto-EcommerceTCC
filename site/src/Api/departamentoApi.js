import { API_URL } from "./config";

import axios from "axios";
const api= axios.create({
    baseURL: API_URL    
})

export async function listarDepartamentos(){
    const x = await api.get('/api/departamento');
    return x.data;
}