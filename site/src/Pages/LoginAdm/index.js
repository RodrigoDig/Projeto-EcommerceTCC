import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Cabecalho2 from '../../Components/Cabeçalho02';
import Cabecalho3 from '../../Components/Cabeçalho03';


export default function LoginAdmin(){
    return(
        <main className="cont-main">
            <Cabecalho3 />
            <section className="cont-login">
                <div className='cont-info-login'>

                </div>
                <img src='/images/Foguete logo.png' />
            </section>

        </main>
    )
}