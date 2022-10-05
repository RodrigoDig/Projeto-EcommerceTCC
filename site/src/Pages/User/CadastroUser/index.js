import React from 'react';
import './index.scss';
import Cabecalho03 from '../../../Components/Cabeçalho02'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cadUser } from '../../../Api/cadUsuarioApi';
import { toast } from 'react-toastify';

export default function CadastroUser(){

    const navigate = useNavigate();

    function voltar(){
        navigate('/')
    }

    async function SalvarCLick(){
        try{
            const r = await cadUser(nome, sobrenome, cpf, nascimento, genero, email, celular, senha);
            alert('Usuário cadastrado com sucesso!')
        }
        catch(err){
            alert(err.message);
        }
    }

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState();
    const [genero, setGenero] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <main className='container-principal-caduser'>
            <section>
                <Cabecalho03 />
            </section>

            <section className='container-dois-cadtextos'>
                
                <div className='titulo-caduser'>
                    <h1>Venha fazer parte da nossa equipe</h1>
                </div>
                <hr/>

                <div className='textos-caduser'>
                    <label>
                        Nome:
                        <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                    </label>

                    <label>
                        Sobrenome:
                        <input type='text' value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
                    </label>
                </div>
                <hr/>

                <div className='textos-caduser'>
                    <label>
                        Data de nascimento:
                        <input type='date' value={nascimento} onChange={e => setNascimento(e.target.value)}/>
                    </label>

                    <label>
                        Gênero:
                        <input type='text' value={genero} onChange={e => setGenero(e.target.value)}/>    
                    </label>    
                </div>
                <hr/>

                <div className='textos-caduser'>
                    <label>
                        Email:
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                    
                    <label>
                        Celular:
                        <input type='text' value={celular} onChange={e => setCelular(e.target.value)} maxLength='15' placeholder='(xx) xxxxx-xxxx'/>
                    </label>
                </div>
                <hr/>

                <div className='textos-caduser'>
                    <label>
                        CPF:
                        <input type='text' value={cpf} onChange={e => setCpf(e.target.value)} maxLength='14' placeholder='xxx.xxx.xxx-xx'/>
                    </label>

                    <label>
                        Senha:
                        <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                    </label>
                </div>
                <hr/>

                <div className='botao-cad-user'>
                    <button onClick={voltar}>Voltar Home</button>
                    <button onClick={SalvarCLick}>Cadastrar</button>
                </div>
            </section>
        </main>
    )
}