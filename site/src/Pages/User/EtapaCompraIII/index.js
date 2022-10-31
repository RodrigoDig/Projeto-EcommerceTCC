import React from 'react';
import './index.scss';

import Cabecalho from '../../../Components/Cabeçalho02( Resp )';
import Carrinho from '../../../assets/images/Carrinho-fase01.svg';

export default function EtapaCompraIII(){
    return(
        <main className='cont-main-etapa3'>
            <section className='cont-rodape-etp3'>
                <Cabecalho />
            </section>
            <section className='cont-01-etp3'>
                <img src={Carrinho}/>
            </section>
        </main>
    )
}