import React from 'react';
import { Link } from 'react-router-dom';
import Rodape from '../../Components/Rodapé';
import './index.scss';

export default function Departamentos(){
    return(
        <main>
            <section>
                <h1>Olá</h1>
                <Link to="/">Voltar</Link>   
            </section>
        </main>
    )
}