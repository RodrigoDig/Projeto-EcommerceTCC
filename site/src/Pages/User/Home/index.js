import React from 'react';
import './index.scss';

import Cabecalho01 from '../../../Components/Cabeçalho01';
import CardHome from '../../../Components/CardLading';

import Controle from '../../../assets/images/Controle-icon.svg';
import TrofeuIcon from '../../../assets/images/Trofeu-icon.svg';
import SeloIcon from '../../../assets/images/Selo-icon.svg';
import RelogioIcon from '../../../assets/images/Relogio-icon.svg';

export default function Home(){
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
                </div>
            </section>
        </main>
    )
}