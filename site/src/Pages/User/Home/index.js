import React, { useEffect, useState } from 'react';
import './index.scss';

import Cabecalho01 from '../../../Components/Cabeçalho01';
import Carrinho from '../../../assets/images/Carrinho-Preto.svg';  


import { prodPromoImperdivel, prodMaisVendidos } from '../../../Api/cadProdutoApi';

import SetaCardDesc from '../../../assets/images/Seta-Desconto-Card.svg';
import Controle from '../../../assets/images/Controle-icon.svg';
import TrofeuIcon from '../../../assets/images/Trofeu-icon.svg';
import SeloIcon from '../../../assets/images/Selo-icon.svg';
import RelogioIcon from '../../../assets/images/Relogio-icon.svg';
import FogoIcon from '../../../assets/images/Fogo-icon.svg';
import Fogo2Icon from '../../../assets/images/Fogo-icon02.svg';
import CoracaoIcon from '../../../assets/images/Coracao-icon.svg';
import Coracao2Icon from '../../../assets/images/Coracao-icon02.svg';

export default function Home(){
    const [produtos, setProdutosPromo] = useState([]);
    const [prodmaisVendidos, setMaisVendidos] = useState([]);
    const [favorito, setFavorito] = useState(CoracaoIcon)

    function valorDesconto(valor, desconto){
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl; 

        return valorfinal;
    }

    async function maisVendidos(){
        const resp = await prodMaisVendidos();
        setMaisVendidos(resp);
    }

    async function produtoPromo(){
        const resp = await prodPromoImperdivel();
        setProdutosPromo(resp);
    }

    function lerEstrelas(valor, estrela) {
        if(valor > 5){
            valor = Math.floor(valor / 2);
        }
        if (valor <= estrela)
            return 'star-icon ativo'
        else
            return 'star-icon'
    }

    function favoritado(){
        const resp = setFavorito(Coracao2Icon);
        return resp;
    }

    useEffect(() => {
        produtoPromo();
        maisVendidos();
    }, [])



    return(
        <main className='cont-main-home'>
            <section className='cont-cabecalho-home'>
                <Cabecalho01 />        
            </section>
            <section className='cont-001-home'>
                <div className='cont-filha1-001'>
                    <h3 className='titulo-01-home'>
                        OS MELHORES PRODUTOS PARA O SEU PC GAMER
                    </h3>
                    <img src={Controle} className='controle-icon-home'/>
                </div>
                <div className='cont-filha2-001'>
                    <img src={TrofeuIcon} className='trofeu-icon-home'/>
                    <h3 className='titulo-02-home'>
                        PRIMEIRA COLOCADA EM 
                        VENDAS 
                        DE PEÇAS DE HARDWARE
                    </h3>
                </div>
                <div className='cont-filha3-001'>
                    <h3 className='titulo-03-home'>
                        SELO DE 100% DE 
                        QUALIDADE
                    </h3>
                <img src={SeloIcon} className='selo-icon-home'/>
                </div>
            </section>
            <section className='cont-002-home'>
                <div className='cont-filha1-002home'>   
                    <img src={RelogioIcon} className='relogio-icon-home'/>
                    <h1 className='titulo-promocoes-home'>
                        PROMOÇÕES IMPERDIVEIS
                    </h1>
                </div>
                <div className='cont-filha2-002home'>
                    {produtos.map(item => 
                        <section className='cont-card-main'>
                            <div className='cont-01-card'>
                                <div className='cont-desconto-card'>
                                    <p className='valor-desconto-card'>
                                        {Math.floor(item.valorDesconto)}%
                                    </p>
                                    <img src={SetaCardDesc}  className='seta-card-desc'/>
                                </div>
                                <h1 className='titulo-desc-card'>
                                    DESCONTO!
                                </h1>
                                <ul className='cont-avaliacao-star'>
                                    <li className={lerEstrelas(item.avaliacao, 1)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 2)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 3)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 4)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 5)} ></li>
                                </ul>
                            </div>
                            <div className='img-card'>

                            </div>
                            <div className='cont-nmproduto-card'>
                                <p className='nm-produto-card'>
                                    {item.nomeProduto} 
                                </p>
                            </div>
                            <div className='cont-valorqtd-card'>
                                <div className='cont-valores-card'>
                                    <p className='antigo-valor'>
                                        DE R$ {item.valorProduto} POR
                                    </p>
                                    <h3 className='valor-atual'>
                                        R$ {valorDesconto(item.valorProduto, item.valorDesconto)}
                                    </h3>
                                </div>
                                <div className='qtd-estoque-card'>
                                    <p className='text-restam-card'>
                                        RESTAM
                                    </p>
                                    <p className='qtd-restam-card'>
                                        {item.estoque}
                                    </p>
                                    <p className='unidades-text-card'>
                                        UNIDADES
                                    </p>
                                </div>
                            </div>
                                <button className='botao-comprar-card'>
                                    <img src={Carrinho} className='carrinho-icon-card'/>
                                    <h3 className='titulo-comprar-card'>
                                        COMPRAR 
                                    </h3>

                                </button>
                        </section>    
                    )}
                </div>
                <div className='cont-filha3-002home'>
                    <img src={FogoIcon} className='relogio-icon-home'/>
                    <h1 className='titulo-maisvendido-home'>
                        MAIS VENDIDOS
                    </h1>
                </div>
                <div className='cont-filha2-002home'>
                    {prodmaisVendidos.map(item => 
                        <section className='cont-card-main'>
                            <div className='cont-01-card'>
                                <div className='cont-desconto-card'>
                                    <img src={Fogo2Icon}  className='fogo-card-mvendido'/>
                                </div>
                                <div className='cont-top1-card'>
                                    <h1 className='titulo-desc-card'>
                                        TOP 1 &nbsp;
                                        {item.nomeDepartamento}
                                    </h1>
                                </div>
                                <ul className='cont-avaliacao-star'>
                                    <li className={lerEstrelas(item.avaliacao, 1)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 2)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 3)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 4)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 5)} ></li>
                                </ul>
                            </div>
                            <div className='img-card'>

                            </div>
                            <div className='cont-nmproduto-card'>
                                <p className='nm-produto-card'>
                                    {item.nomeProduto} 
                                </p>
                            </div>
                            <div className='cont-valorqtd-card'>
                                <div className='cont-valores-card'>
                                    <p className='antigo-valor'>
                                        DE R$ {item.valorProduto} POR
                                    </p>
                                    <h3 className='valor-atual'>
                                        R$ {valorDesconto(item.valorProduto, item.valorDesconto)}
                                    </h3>
                                </div>
                                <div className='cont-favorito-card'>
                                    <img src={favorito} className='coracao-icon-card' onClick={favoritado}/>
                                </div>
                            </div>
                                <button className='botao-comprar-card'>
                                    <img src={Carrinho} className='carrinho-icon-card'/>
                                    <h3 className='titulo-comprar-card'>
                                        COMPRAR 
                                    </h3>

                                </button>
                        </section>    
                    )}
                </div>
            </section>
        </main>
    )
}