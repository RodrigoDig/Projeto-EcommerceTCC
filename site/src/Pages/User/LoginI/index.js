import React, { useState, useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

import storage from 'local-storage';
import './index.scss';
import '../../../assets/images/login-I.png'
import Cabecalho03 from '../../../Components/Cabeçalho03';
import { useNavigate } from 'react-router-dom';
import userlogin from '../../../Api/userLogin';

import Gmail from '../../../assets/images/gmail icon.svg';
import LoginIcon from '../../../assets/images/user 15.svg';
import CadeadoIcon from '../../../assets/images/cadeado 10.png';


export default function UserLogin() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

       useEffect(() => {
        if(storage('user-logado')){
            navigate('/login')
        }
    }, [])

    function cadUser() {
        navigate('/cadastrouser');
    }

    async function entrarClick() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const r = await userlogin(nome, email, senha);
            storage('user-logado', r);

            setTimeout(() => {
                navigate('/');
            }, 3000);


        } catch (err) {
            ref.current.complete();
            setCarregando(false);

            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }

    return (
        <main>
            <LoadingBar color='#af1414' ref={ref} />

            <section className='fundo-tela-login'>
                <div className='cont-caecalho-login1'>
                    <Cabecalho03 />
                </div>
                <div className='cont-02-login1'>
                    <div className='bloco-informações'>
                        <h1 className='titulo-user'>User Login</h1>

                        <div className='input-login'>
                            <img src={LoginIcon} className='logo-login-user' />
                            <input className='input01' type='text' placeholder='Insira seu nome' value={nome} onChange={e => setNome(e.target.value)} />
                        </div>

                        <div className='input-login-2'>
                            <img src={CadeadoIcon} className='logo-cad-user' />
                            <input className='input02' type='password' placeholder='Insira sua senha' value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>

                        <div className='input-login-2'>
                            <img src={Gmail} className='gmail-icon'/>
                            <input className='input02' type='text' placeholder='Insira seu email' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className='cont-user-invalido'>
                            <p className='user-invalido'>
                                {erro}
                            </p>
                        </div>
                            <button className='botao-login' onClick={entrarClick} disabled={carregando}>Login</button>

                        <div className='texto-final-login'>
                            <div className='cont-text-final'>
                                <p className='text-final1'>Não possui uma conta? </p>
                            </div>
                            <div className='cont-cad'>
                                <p className='text-final2'>
                                    Acesse aqui e
                                </p>
                                <p className='text-cad' onClick={cadUser}> cadastre-se</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    )
}
