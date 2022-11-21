import './index.scss';
import React from 'react';

import { useEffect } from 'react';
import storage from 'local-storage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoracaoIcon from '../../../assets/images/Coracao-icon.svg';
import Coracao2Icon from '../../../assets/images/Coracao-icon02.svg';
import { API_URL } from '../../../Api/config';
import { buscarImgProd } from '../../../Api/cadProdutoApi';

import { verificarProdutoFavoritado } from '../../../Api/cadProdutoApi';
import { deletarProdutoFavoritado } from '../../../Api/cadProdutoApi';
import { produtoFavoritado } from '../../../Api/cadProdutoApi';

export function CardOutrasOp(props){
    const userLogado = storage('user-logado');
    const navigate = useNavigate();

    const [favorito, setFavorito] = useState();
    const [idUsuario, setIdUsuario] = useState();
    const [fav1, setFav1] = useState();
    const [dele, setDel] = useState();
    
    function carregarLogins2(){
        let min = Math.ceil(1);
        let max = Math.floor(2);
        let retorno = Math.floor(Math.random() * (max - min + 1)) + min;
        if(retorno === 1){
                navigate('/login/style1');
        }
        else if(retorno === 2){
                navigate('/login/style2');
        }
    }

    useEffect(() => {
        if(!userLogado){
            setIdUsuario(null)
        }
        else {
            setIdUsuario(userLogado.id);
        }
        if(userLogado === null  ){
            setIdUsuario(null)
        }
        else{
            verificarSeEstáVerificado(idUsuario, props.item.id);
        }
    }, []);

    useEffect(() =>{
        verificarSeEstáVerificado(idUsuario, props.item.id);
    }, [favorito]);


    async function verificarSeEstáVerificado(idUser, idProd){
        const resposta = await verificarProdutoFavoritado(idUser, idProd);
        
        if(resposta == undefined || resposta === null || !resposta || resposta == ''){
            setFavorito(CoracaoIcon);
        }
        else{
            setFavorito(Coracao2Icon);
        }
    }
    async function favoritado(idUser, idProd) {
        const resp = '';
        if (favorito == Coracao2Icon) {
            const del = deletarProdutoFavoritado(idUser, idProd)
            setDel(del);
            resp = setFavorito(CoracaoIcon)
        }
        else if (favorito == CoracaoIcon) {
            const fav1 = await produtoFavoritado(idUser, idProd);  
            setFav1(fav1);
            resp = setFavorito(Coracao2Icon);
        }
        return resp;
    }

    async function querFavoritar(){
        if(!storage('user-logado') || storage('user-logado') === null){
            carregarLogins2();
        }else {
            let resposta = await favoritado(idUsuario, props.item.id);
            return resposta;
        }
    }


    function mostrarImg(imagem){
        if(typeof(imagem) == 'object'){
            return URL.createObjectURL(imagem);
        }
        else if(typeof(imagem) == 'string'){
            return `${API_URL}/${imagem}`
        }
        else{
            return buscarImgProd(imagem)
        }
    }

    return(
        <div className='cont-main-outrasOp'>
            <div className='cont-img-fav'>
                <img src={mostrarImg(props.item.imagem)} className='img-produto'/>
                <div className='cont-icon-favorito'>
                    <img src={favorito} className='coracao-icon-card' onClick={querFavoritar} />
                </div>
            </div>
            <div className='cont-nmprod'>
                <div className='cont-titulo-nmprod'>
                    <p className='paragrafo-nmprod'>
                        {props.item.nome}
                    </p>
                </div>
            </div>
            <div className='cont-valorprod'>
                <h1 className='valorprod'>
                    R$ {props.item.valor}
                </h1>
            </div>

        </div>
    )
}