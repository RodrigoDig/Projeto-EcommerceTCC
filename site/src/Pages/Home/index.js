import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Cabecalho1 from '../../Components/Cabeçalho';

export default function Home(){
    return(
        <main>
            <Cabecalho1 />
            <section className='teste'>
                <h1>Olá</h1>
                <Link to="/departamentos">Departamento</Link>
            </section>
        </main>
    )
}