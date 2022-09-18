import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import React from 'react';
import './index.scss';
import Cabecalho3 from '../../../Components/Cabeçalho03';
import  { useState } from 'react'

export default function LoginAdmin(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const[erro, setErro] = useState('');

    const navigate = useNavigate();

    async function entrarClick(){
        try{
        const r = await axios.post('http://localhost:5000/admin/loginADM', {
            user: email,
            senha: senha
        })
            navigate('/configuraçoes');

        } catch(err){
            if(err.response.status === 401){
                setErro(err.response.data.erro);
            }
        }
    } 

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
                    <input className='input-user' placeholder='Digite seu e-mail' value={email} onChange={e => setEmail(e.target.value)} />
                    <div className='cont-03'>
                        <img src='/images/Cadeado-senha-adm.png'  width={30} height={30} className='img-login-adm' />
                        <h2 className='text-03'>
                            Senha
                        </h2>
                    </div>
                    <input className='input-senha' type="password" placeholder='****' value={senha} onChange={e => setSenha(e.target.value)}/>
                    <h1 className='erro'>
                        {erro}
                    </h1>
                    <button className='botao-entrar' onClick={entrarClick}>
                            Entrar
                    </button>
                </div>
                <div className='cont-logo-final'>
                    <img src='/images/Foguete logo.png' />
                </div>
            </section>

        </main>
    )
}