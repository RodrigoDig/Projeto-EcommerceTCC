import React from 'react';
import './index.scss';
import '../../../assets/images/login-I.png'
import Cabecalho03 from '../../../Components/Cabeçalho03';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <main>
            <section className='fundo-tela-login'>
                <div>
                    <Cabecalho03/>
                </div>

                <div className='bloco-informações'>
                    <h1>User Login</h1>

                    <div className='input-login'>
                        <input type='text' placeholder='Insira seu nome'/>
                    </div>
                    
                    <div className='input-login-2'> 
                        <input type='text' placeholder='Insira sua senha'/>
                    </div>

                    <div className='input-login-3'>
                        <input type='text' placeholder='Insira seu email'/>
                    </div>

                    <div className='botao-login'>
                        <button>Login</button>
                    </div>

                    <div className='texto-final-login'>
                        <p>Não possui uma conta? Acesse aqui e <Link to='/cadastrouser' style={{color: 'blue'}}>cadastre-se</Link></p>    
                    </div>                    
                </div>

            </section>
        </main>
    )
}