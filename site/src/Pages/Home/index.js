import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Cabecalho2 from '../../Components/Cabeçalho02';
import Cabecalho3 from '../../Components/Cabeçalho03';

export default function Home(){
    return(
        <main>
            <section className='teste'>
                <h1>Olá</h1>
                <Link to="/departamentos">Departamento</Link>
                <Link to="/Loginadm">LoginADM</Link>
            </section>
        </main>
    )
}