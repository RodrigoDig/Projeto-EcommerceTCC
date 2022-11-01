import React from 'react';
import './index.scss';

import Cabecalho from '../../../Components/Cabeçalho02( Resp )';
import Carrinho from '../../../assets/images/Carrinho-fase01.svg';
import Card from '../../../assets/images/icon-addcard.svg';
import User from '../../../assets/images/user-icon.svg';
import Pegada from '../../../assets/images/pegada-icon.svg';
import Correto from '../../../assets/images/correto-icon.svg';
import Info from '../../../assets/images/info-pedido.svg';

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

                            </div>
                        </div>
                    </div>
                    <div className='cont-listaprod-filha1'>

                    </div>
                </div>
                <div className='cont-filha2-02'>

                </div>
            </section>
        </main>
    )
}