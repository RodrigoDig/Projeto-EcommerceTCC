import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function cadastrarProduto(idDepartamento, nome, preco, desconto, avaliacao, fabricante, estoque, informacoes, descricao, garantia, categorias){
    const r = await api.post('/adm/produto', {
        idDepartamento,
        nome,
        preco,
        desconto,
        avaliacao,
        fabricante,
        estoque,
        informacoes,
        descricao,
        garantia,
        categorias
    })

    return r.data;
}

export async function salvarImagens(id, imagem, imagem2, imagem3){
    let form = new FormData();
    form.append('imagens', imagem);
    form.append('imagens', imagem2);
    form.append('imagens', imagem3);

    const resposta = await api.put('/adm/produto/' + id, form, {
        headers:{       
            'Content-Type': 'multipart/form-data'
        }
    });

    return resposta.data
}


export async function listarTodosProdutos() {
    const resposta = await api.get('/produtos');
    return resposta.data;
}

export async function prodPromoImperdivel(){
    const resposta = await api.get('/promocao');
    return resposta.data
}

export async function prodMaisVendidos(){
    const resposta = await api.get('/maisvendidos');
    return resposta.data
}

export async function prodSelCompra(id){
    const resposta = await api.get('/compra/produto/' + id);
    return resposta.data;
}

export async function depSelecionar(){
    const resposta = await api.get('/departamentos');
    return resposta.data
}

export async function buscarProdutoNome(nome) {
    const resposta = await api.get(`/produto/nome?nome=${nome}`);
    return resposta.data;
}

export async function buscarPorId(id){
    const resposta = await api.get('/produto/' + id);
    return resposta.data;
}


export async function buscarImgProd(imagem){
    return `${api.getUri()}/${imagem}`
}

export async function depPage(id){
    const resposta = await api.get('/departamentos/' + id);
    return resposta.data
}

export async function imagensProduto(id){
    const resposta = await api.get('/imagem/busca/' + id);
    return resposta.data
}

export async function produtoFavoritado(idUsuario, idProduto){
    const resposta = await api.post('/favorito/usuario/avaliacao/', {
        idUsuario,
        idProduto
    });
    return resposta.data
}

export async function verificarProdutoFavoritado(idUsuario, idProduto){
    const resposta = await api.get('/verificar/favoritado/' + idUsuario + '/' + idProduto);
    return resposta.data
}

export async function deletarProdutoFavoritado(idUsuario, idProduto){
    const resposta = await api.delete('/favorito/deletar/' + idUsuario + '/' + idProduto);
    return resposta.data
}