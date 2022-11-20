import React from 'react';
import './index.scss';
import Cabecalho03 from '../../../Components/Cabeçalho02'

import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { alterarUsuario, buscarId, cadUser } from '../../../Api/cadUsuarioApi';
import storage from 'local-storage';
import { useRef } from 'react';

export default function CadastroUser() {
    const navigate = useNavigate();
    const ref = useRef();
    
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState();
    const [genero, setGenero] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [id, setId] = useState(0);

    const { idParam } = useParams();

    useEffect(() => {
        if(idParam){
            carregarUsuarios();
        }
    }, [])

    function Voltar(){
        navigate('/configuracoes')
    }
    
    async function SalvarCLick() {
        try {
            if(id === 0){
                const r = await cadUser(nome, sobrenome, cpf, nascimento, genero, email, celular, senha);
                setId(r.id);
                toast.success('Usuário cadastrado com sucesso!');
                navigate('/login');
            }
            else{
                await alterarUsuario(id, nome, sobrenome, cpf, nascimento, genero, email, celular, senha);
                toast.success('Usuário alterado com sucesso!')
                ref.current.complete();
                storage.remove('user-logado');
                setTimeout(() => {
                    navigate('/login');
                }, 1000)
            }
        }
        catch (err){
            toast.error(err.response.data.erro);
        }
    }


    async function carregarUsuarios(){
        const resposta = await buscarId(idParam);
        setNome(resposta.nome);
        setSobrenome(resposta.sobrenome);
        setCpf(resposta.cpf);
        setNascimento(resposta.nascimento);
        setGenero(resposta.genero);
        setEmail(resposta.email);
        setCelular(resposta.celular);
        setSenha(resposta.senha);
        setId(resposta.id);
    }


    return (
        <main className='container-principal-caduser'>
            <section className='cont-cabecalho-caduser'>
                <Cabecalho03 />
            </section>

            <section className='container-dois-cadtextos'>

                <div className='titulo-caduser'>
                    <h1>Venha fazer parte da nossa equipe</h1>
                </div>
                <hr />

                <div className='textos-caduser'>
                    <label>
                        Nome:
                        <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                    </label>

                    <label>
                        Sobrenome:
                        <input type='text' value={sobrenome} onChange={e => setSobrenome(e.target.value)} />
                    </label>
                </div>
                <hr />

                <div className='textos-caduser'>
                    <label>
                        Data de nascimento:
                        <input type='date' value={nascimento} onChange={e => setNascimento(e.target.value)} />
                    </label>

                    <label>
                        Gênero:
                        <input type='text' value={genero} onChange={e => setGenero(e.target.value)} />
                    </label>
                </div>
                <hr />

                <div className='textos-caduser'>
                    <label>
                        Email:
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    </label>

                    <label>
                        Celular:
                        <input type='text' value={celular} onChange={e => setCelular(e.target.value)} maxLength='15' placeholder='(xx) xxxxx-xxxx' />
                    </label>
                </div>
                <hr />

                <div className='textos-caduser'>
                    <label>
                        CPF:
                        <input type='text' value={cpf} onChange={e => setCpf(e.target.value)} maxLength='14' placeholder='xxx.xxx.xxx-xx' />
                    </label>

                    <label>
                        Senha:
                        <input type='password' value={senha} onChange={e => setSenha(e.target.value)} />
                    </label>
                </div>
                <hr />

                <div className='botao-cad-user'>
                    <button onClick={SalvarCLick}>Cadastrar</button>
                    <button onClick={Voltar}>Voltar</button>
                </div>
            </section>

        </main>
    )
}