import './index.scss';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_URL } from '../../../Api/config';

import SetaUp from '../../../assets/images/seta-icon.svg';
import Computadores from '../../../assets/images/icon-computadores.svg';
import Games from '../../../assets/images/games-icon.svg';
import Hardware from '../../../assets/images/hard-icon.svg';

import { verificarProdutoFavoritado } from '../../../Api/cadProdutoApi';
import { deletarProdutoFavoritado } from '../../../Api/cadProdutoApi';
import { produtoFavoritado } from '../../../Api/cadProdutoApi';
import storage from 'local-storage';

import { buscarImgProd } from '../../../Api/cadProdutoApi';
import Fogo2Icon from '../../../assets/images/Fogo-icon02.svg';
import CoracaoIcon from '../../../assets/images/Coracao-icon.svg';
import Coracao2Icon from '../../../assets/images/Coracao-icon02.svg';
import Carrinho from '../../../assets/images/Carrinho-Preto.svg';

export default function CardProdDep(props){
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

    async function querFavoritar(){
        if(!storage('user-logado') || storage('user-logado') === null){
            carregarLogins2();
        }else {
            let resposta = await favoritado(idUsuario, props.item.id);
            return resposta;
        }
    }

    async function querFavoritar(){
        if(!storage('user-logado') || storage('user-logado') === null){
            carregarLogins2();
        }else {
            let resposta = await favoritado(idUsuario, props.item.id);
            return resposta;
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

    function valorDesconto(valor, desconto) {
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl;

        return valorfinal;
    }

    function verificartitulo(nome){
        if(nome == 'Computadores'){
            return 'PC'
        }
        else{
            return nome
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
    
    function verificarIcone(nome){
        if(nome == 'Hardware'){
            return Hardware;
        }
        else if(nome == 'Games'){
            return Games;
        }
        else if(nome == 'Computadores'){
            return Computadores;
        }
    }
    
    function selProd(id) {
        navigate('/compra/produto/' + id);
    }

    function lerEstrelas(valor, estrela) {
        if (valor > 5) {
            valor = Math.floor(valor / 2);
        }
        if (valor <= estrela)
            return 'star-icon ativo'
        else
            return 'star-icon'
    }
    return(
        <section className='cont-card-departamento'>
                            <div className='cont-01-card'>
                                <div className='cont-icon-card'>
                                    <div className='cont-desconto-card'>
                                        <img className='icon-dep-card' src={verificarIcone(props.item.departamento)} />
                                    </div>
                                    <div className='cont-dep-up'>
                                        <h1 className='titulo-dep-up'>
                                            {verificartitulo(props.item.departamento)}
                                        </h1>
                                        <img className='icon-up' src={SetaUp}/>
                                    </div>
                                </div>
                                <ul className='cont-avaliacao-star'>
                                    <li className={lerEstrelas(props.item.avaliacao, 1)} ></li>
                                    <li className={lerEstrelas(props.item.avaliacao, 2)} ></li>
                                    <li className={lerEstrelas(props.item.avaliacao, 3)} ></li>
                                    <li className={lerEstrelas(props.item.avaliacao, 4)} ></li>
                                    <li className={lerEstrelas(props.item.avaliacao, 5)} ></li>
                                </ul>
                            </div>
                            <div className='img-card'>
                                <img src={mostrarImg(props.item.imagem)} className='img-capa' alt=''/>
                            </div>
                            <div className='cont-nmproduto-card'>
                                <p className='nm-produto-card'>
                                    {props.item.nomeProduto}
                                </p>
                            </div>
                            <div className='cont-valorqtd-card'>
                                <div className='cont-valores-card'>
                                    <p className='antigo-valor'>
                                        DE R$ {props.item.valorProduto} POR
                                    </p>
                                    <h3 className='valor-atual'>
                                        R$ {valorDesconto(props.item.valorProduto, props.item.valorDesconto)}
                                    </h3>
                                </div>
                                <div className='cont-favorito-card'>
                                    <img src={favorito} className='coracao-icon-card' onClick={querFavoritar} />
                                </div>
                            </div>
                            <button className='botao-comprar-card'>
                                <img src={Carrinho} className='carrinho-icon-card' onClick={() => selProd(props.item.id)}/>
                                <h3 className='titulo-comprar-card'>
                                    COMPRAR
                                </h3>

                            </button>
                        </section>
    )
}