import React from 'react';
import { Link } from 'react-router-dom';

import Cabecalho01 from '../../../Components/Cabeçalho01';
import Rodape from '../../../Components/Rodapé';
import './index.scss';

export default function Departamentos(){
    return(
        <main className='cont-main-departamento'>
            <section className='cont-cabecalho-dep'>
                <Cabecalho01/>   
            </section>
            <section className='cont-carrossel'>

            </section>
            <section className='cont-titulo-dep'>
                <div className='cont-01-titulodep'>

                </div>
            </section>
        </main>
    )
}