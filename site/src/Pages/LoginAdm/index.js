import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Cabecalho3 from '../../Components/Cabeçalho03';


export default function LoginAdmin(){

    return(
        <main className="cont-main">
            <Cabecalho3 />
            <section className="cont-login">
                <div className='cont-info-login'>
                    <div className='cont-01'>
                        <h1 className='text-cont01'>
                            ADMIN LOGIN 
                        </h1>
                    </div>
                    <div className='cont-02'>
                        <img src='/images/icon-login-adm.png'  width={38} height={38} className='img-login-adm'/>
                        <h2 className='text-02'>
                            User
                        </h2>
                    </div>
                    <input className='input-user' />
                    <div className='cont-03'>
                        <img src='/images/Cadeado-senha-adm.png'  width={30} height={30} className='img-login-adm' />
                        <h2 className='text-03'>
                            Senha
                        </h2>
                    </div>
                    <input className='input-senha' type="password" />
                    <button className='botao-entrar'>
                        <h1 className='txt-botao-entrar'>
                            Entrar
                        </h1>
                    </button>
                </div>
                <div className='cont-logo-final'>
                    <img src='/images/Foguete logo.png' />
                </div>
            </section>

        </main>
    )
}