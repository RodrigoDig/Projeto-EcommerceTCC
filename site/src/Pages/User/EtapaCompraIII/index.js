import React from 'react';
import './index.scss';

import Cabecalho from '../../../Components/Cabeçalho02( Resp )';
import Carrinho from '../../../assets/images/Carrinho-fase01.svg';
import Card from '../../../assets/images/icon-addcard.svg';
import User from '../../../assets/images/user-icon.svg';
import Pegada from '../../../assets/images/pegada-icon.svg';
import Correto from '../../../assets/images/correto-icon.svg';
import Info from '../../../assets/images/info-pedido.svg';
import Basket from '../../../assets/images/basket-icon.svg';

export default function EtapaCompraIII(){
    return(
        <main className='cont-main-etapa3'>
            <section className='cont-cabecalho-etp3'>
                <Cabecalho />
            </section>
            <section className='cont-01-etp3'>
                <img src={Carrinho} className='icons'/>
                <div className='linha'></div>
                <img src={Card} className='icons'/>
                <div className='linha'></div>
                <img src={User} className='icons'/>
                <div className='linha'></div>
                <img src={Pegada} className='icons'/>
                <div className='linha'></div>
                <img src={Correto} className='icons'/>
            </section>
            <section className='cont-02-etp3'>
                <div className='cont-filha1-02'>
                    <div className='cont-infoped-filha1'>
                        <div className='cont-titulo-infoped'>
                            <img src={Info} className='icon-infoped'/>
                            <h1 className='titulo-infoped'>
                                Informações do seu pedido
                            </h1>
                        </div>
                        <div className='cont-dados-endereco'>
                            <div className='cont-filha1-dados'>
                                <div className='cont-titulo-dados'>
                                    <h1 className='titulo-dados'>
                                        Dados pessoais
                                    </h1>
                                    <p className='text-dados'>
                                        Informações que serão inseridas na nota fiscal do pedido.
                                    </p>
                                </div>
                                <div className='cont-dados-user'>
                                </div>

                            </div>
                            <div className='cont-filha2-endereco'>
                                <div className='cont-titulo-endereco'>
                                    <h1 className='titulo-endereco'>
                                        Endereço de entrega
                                    </h1>
                                    <p className='text-endereco'>
                                        Informações que serão inseridas na nota fiscal do pedido.
                                    </p>
                                </div>
                                <div className='cont-dados-user'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cont-listaprod-filha1'>
                        <div className='cont-titulo-infoped'>
                            <img src={Basket} className='icon-infoped'/>
                            <h1 className='titulo-infoped'>
                                Lista de produtos
                            </h1>
                        </div>
                        <div className='cont-infoprod-pedido'>
                            <img className='img-produto'/>
                            <p className='nome-produto'>

                            </p>
                            <div className='cont-qtd-produto'>

                            </div>
                            <div className='cont-valor-produto'>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='cont-filha2-02'>
                    <div className='cont-01-filha2'>
                        <h1 className='titulo-resumo'>
                            Resumo
                        </h1>
                        <p className='valor-pagar'>
                            Valor total do(s) produto(s):
                        </p>
                        <div className='linhas'></div>
                        <p className='text-frete'>
                            Frete: 
                        </p>
                        <div className='linhas'></div>
                        <div className='cont-subtotal'>
                            <p className='titulo-subtotal'>
                                Subtotal:
                            </p>
                        </div>

                    </div>
                    <div className='cont-02-filha2'>
                         <button className='botao-finalizar'>
                                Concluir
                         </button>
                         <button className='botao-voltar'>
                                Voltar
                         </button>
                    </div>
                </div>
            </section>
        </main>
    )
}