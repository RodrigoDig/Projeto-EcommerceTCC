import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';


export default function Home(){
    return(
        <main>
            <section className='teste'>
                <h1>Olá</h1>
                <Link to="/departamentos">Departamento</Link>
            </section>
        </main>
    )
}