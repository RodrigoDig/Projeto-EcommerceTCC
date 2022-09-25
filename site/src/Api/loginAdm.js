import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:5000'
})


export default async function loginadm(email, senha){
    const r = await api.post('/admin/loginADM', {
            user: email,
            senha: senha
    });

    return r.data;
}