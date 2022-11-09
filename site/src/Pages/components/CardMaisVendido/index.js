import './index.scss';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_URL } from '../../../Api/config';

import { buscarImgProd } from '../../../Api/cadProdutoApi';
import Fogo2Icon from '../../../assets/images/Fogo-icon02.svg';
import CoracaoIcon from '../../../assets/images/Coracao-icon.svg';
import Coracao2Icon from '../../../assets/images/Coracao-icon02.svg';
import Carrinho from '../../../assets/images/Carrinho-Preto.svg';

export default function CardProduto(props){
    const [favorito, setFavorito] = useState(CoracaoIcon);
    const navigate = useNavigate(); 
    function valorDesconto(valor, desconto) {
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl;

        return valorfinal;
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
        if (valor <= estrela)
            return 'star-icon ativo'
        else
            return 'star-icon'
    }
    function favoritado() {
        const resp = '';
        if (favorito == Coracao2Icon) {
            resp = setFavorito(CoracaoIcon)
        }
        else if (favorito == CoracaoIcon) {
            resp = setFavorito(Coracao2Icon);
        }
        return resp;
    }
    return(
        <section className='cont-card-mais-vendido'>
                            <div className='cont-01-card'>
                                <div className='cont-desconto-card'>
                                    <img src={Fogo2Icon} className='fogo-card-mvendido' />
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
                                <img src={mostrarImg(props.item.imagem)} alt=''/>
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
                                    <img src={favorito} className='coracao-icon-card' onClick={favoritado} />
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