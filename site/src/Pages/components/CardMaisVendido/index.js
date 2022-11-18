import './index.scss';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_URL } from '../../../Api/config';
import storage from 'local-storage';

import { buscarImgProd } from '../../../Api/cadProdutoApi';
import Fogo2Icon from '../../../assets/images/Fogo-icon02.svg';
import CoracaoIcon from '../../../assets/images/Coracao-icon.svg';
import Coracao2Icon from '../../../assets/images/Coracao-icon02.svg';
import Carrinho from '../../../assets/images/Carrinho-Preto.svg';
import { produtoFavoritado } from '../../../Api/cadProdutoApi';
import { verificarProdutoFavoritado } from '../../../Api/cadProdutoApi';

export default function CardProduto(props){
    const userLogado = storage('user-logado');
        
    const [idUsuario, setIdUsuario] = useState();
    
    useEffect(() => {
        setIdUsuario(userLogado.id);
        verificarSeEstáVerificado(idUsuario, props.item.id);
    }, []);

    async function verificarSeEstáVerificado(idUser, idProd){
        const resposta = await verificarProdutoFavoritado(idUser, idProd);
        if(resposta == undefined || resposta === null || !resposta || resposta == ''){
            setFavorito(CoracaoIcon);
        }
        else{
            setCarreg(Coracao2Icon);
        }
    }

    const [prodFav, setProdFav] = useState('');
    console.log(prodFav);
    const [carreg, setCarreg] = useState();
    const [favorito, setFavorito] = useState();
    console.log(carregCoracao(carreg))
    const navigate = useNavigate();
    
    function valorDesconto(valor, desconto) {
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl;

        return valorfinal;
    }

    function carregCoracao(valor){
        if(valor === true){
            return CoracaoIcon
        }
        else if(valor === false){
            return Coracao2Icon
        }
    }
    
    async function favoritado(idUser, idProd) {
        const resp = '';
        if (favorito == Coracao2Icon) {
            resp = setFavorito(CoracaoIcon)
        }
        else if (favorito == CoracaoIcon) {
            const fav = await produtoFavoritado(idUser, idProd);    
            resp = setFavorito(Coracao2Icon);
        }
        return resp;
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
    
    function selProd(id) {
        navigate('/compra/produto/' + id);
    }

    function lerEstrelas(valor, estrela) {
        if (valor > 5) {
            valor = Math.floor(valor / 2);
        }
        if (valor <= estrela){
            return 'star-icon ativo'
        }
        
        else
            return 'star-icon'
    }

    console.log('id usuario:' + idUsuario);

    return(
        <section className='cont-card-mais-vendido'>
                            <div className='cont-01-card'>
                                <div className='cont-desconto-card'>
                                    <img src={Fogo2Icon} className='fogo-icon' />
                                </div>
                                <div className='cont-rec-card'>
                                    <h1 className='titulo-rec-card'>
                                        MAIS PROCURADOS &nbsp;
                                        RECENTEMENTE
                                    </h1>
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
                                    <img src={favorito} className='coracao-icon-card' onClick={() => favoritado(idUsuario, props.item.id)} />
                                </div>
                            </div>
                            <button className='botao-comprar-card'>
                                <img src={Carrinho} className='carrinho-icon-card' onClick={() => selProd(idUsuario, props.item.id)}/>
                                <h3 className='titulo-comprar-card'>
                                    COMPRAR
                                </h3>

                            </button>
                        </section>
    )
}