import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import Cabecalho04 from '../../../Components/Cabeçalho04';

export default function Home(){
    return(
        <main>
            <section className='teste'>
                <Cabecalho04/>
            </section>
        </main>
    )
}