import './index.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import SetaCardDesc from '../../../assets/images/Seta-Desconto-Card.svg';
import Carrinho from '../../../assets/images/Carrinho-Preto.svg';

export default function CardProduto(props){
    const navigate = useNavigate();

    function valorDesconto(valor, desconto) {
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl;

        return valorfinal;
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
                <section className='cont-card-main'>
                    <div className='cont-01-card'>
                        <div className='cont-desconto-card'>
                            <p className='valor-desconto-card'>
                                {Math.floor(props.item.valorDesconto)}%
                            </p>
                            <img src={SetaCardDesc} className='seta-card-desc' />
                        </div>
                        <h1 className='titulo-desc-card'>
                            DESCONTO!
                        </h1>
                        <ul className='cont-avaliacao-star'>
                            <li className={lerEstrelas(props.item.avaliacao, 1)} ></li>
                            <li className={lerEstrelas(props.item.avaliacao, 2)} ></li>
                            <li className={lerEstrelas(props.item.avaliacao, 3)} ></li>
                            <li className={lerEstrelas(props.item.avaliacao, 4)} ></li>
                            <li className={lerEstrelas(props.item.avaliacao, 5)} ></li>
                        </ul>
                    </div>
                    <div className='img-card'>
    
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
                        <div className='qtd-estoque-card'>
                            <p className='text-restam-card'>
                                RESTAM
                            </p>
                            <p className='qtd-restam-card'>
                                {props.item.estoque}
                            </p>
                            <p className='unidades-text-card'>
                                UNIDADES
                            </p>
                        </div>
                    </div>
                    <button className='botao-comprar-card' onClick={() => selProd(props.item.id)}>
                        <img src={Carrinho} className='carrinho-icon-card' />
                        <h3 className='titulo-comprar-card'>
                            COMPRAR
                        </h3>
    
                    </button>
                </section>
    )
}