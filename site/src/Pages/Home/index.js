import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Cabecalho2 from '../../Components/Cabeçalho02';

export default function Home(){
    return(
        <main>
            <Cabecalho2 />
            <section className='teste'>
                <h1>Olá</h1>
                <Link to="/departamentos">Departamento</Link>
            </section>
        </main>
    )
}