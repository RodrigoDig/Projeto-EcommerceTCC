import React from 'react';
import './index.scss';

import Cabecalho from '../../../Components/Cabeçalho02( Resp )';
import Carrinho from '../../../assets/images/Carrinho-fase01.svg';
import Card from '../../../assets/images/icon-addcard.svg';
import User from '../../../assets/images/user-icon.svg';
import Pegada from '../../../assets/images/pegada-icon.svg';
import Correto from '../../../assets/images/correto-icon.svg';

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

                    </div>
                </div>
                <div className='cont-filha2-02'>

                </div>
            </section>
        </main>
    )
}