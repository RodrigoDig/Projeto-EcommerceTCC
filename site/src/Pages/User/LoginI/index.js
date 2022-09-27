import React from 'react';
import './index.scss';
import '../../../assets/images/login-I.png'
import Cabecalho03 from '../../../Components/Cabeçalho03';
import LogoSite from '../../../assets/images/LOGOBS.svg';



export default function Login(APILOGIN) {
    return (
        <main>
            <Cabecalho03 />
            <div className='fundo'>
                <label>Construa seu futuro!
                    Atravéz da Tecnologia, Junte-se a ByteSpeed</label>
            </div>

            <section className='CARD'>

                <label className='UL'>USER LOGIN</label>

                <div className='infos'>

                    <input type='text' name='Login'/>

                    <input type='text' name='Login' />
                    <label className='LABEL'>ESQUECEU SUA SENHA?</label>
                    <input type='text' name='Login' />

                </div>

                <div className='btn'>
                    <button>Login</button>
                </div>

                <label className='LABEL2'> Não possui uma conta? Acesse aqui e cadastre-se</label>

                <div className='logo'>
                <img src={LogoSite} />
                </div>

            </section>
        </main>
    )
}