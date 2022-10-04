import React, { useState } from 'react';
import './index.scss';
import '../../../assets/images/login-I.png'
import Cabecalho03 from '../../../Components/Cabeçalho03';
import { Link, useNavigate } from 'react-router-dom';
import { userlogin } from '../../../Api/userLogin';


export default function UserLogin(){
       const[nome, setNome] = useState('');
       const[email, setEmail] = useState('');
       const[senha, setSenha] = useState('');
       const[erro,setErro] = useState('');

       const navigate = useNavigate();

       function entrarClick() {

       }

    return (
        <main>
            <section className='fundo-tela-login'>
                <div>
                    <Cabecalho03/>
                </div>

                <div className='bloco-informações'>
                    <h1>User Login</h1>

                    <div className='input-login'>
                        <input type='text' placeholder='Insira seu nome' value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>
                    
                    <div className='input-login-2'> 
                        <input type='password' placeholder='Insira sua senha' value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>

                    <div className='input-login-3'>
                        <input type='text' placeholder='Insira seu email' value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className='botao-login'>
                        <button onClick={entrarClick}>Login</button>
                    </div>

                    <div className='texto-final-login'>
                        <p>Não possui uma conta? Acesse aqui e <Link to='/cadastrouser' style={{color: 'blue'}}>cadastre-se</Link></p>    
                    </div>

                    <div>
                       {erro}
                    </div>                    
                </div>

            </section>
        </main>
    )
}
