import React from 'react';
import './index.scss';
import Cabecalho03 from '../../../Components/Cabeçalho02'

import  storage  from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CadEnd } from '../../../Api/enderecoApi';
import { toast } from 'react-toastify';

export default function CadastroEnd() {
    const[infoUser, setInfoUser] = useState({ id: [], nome: [], email: [] });
    const[idUsuario, setIdUsuario] = useState(0);
    const [logadouro, setLogadouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState();
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [complemento, setComplemento] = useState('');
    const [casa, setCasa] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(!storage('user-logado')){
            navigate('/login');
        }
        if(!storage('user-logado')){
            setInfoUser('');
        }else{
            const userLogado = storage('user-logado');
            setInfoUser(userLogado);
            setIdUsuario(userLogado.id);
            console.log(userLogado.id);
        }
    }, [])

    function voltar() {
        navigate('/')
    }
    
    async function SalvarCLick() {
        try {
            const r = await CadEnd(idUsuario, logadouro, numero, bairro, cep, cidade, estado, complemento, casa);
            toast.success('Endereço cadastrado com sucesso!')
        }
        catch (err) {
            toast.error(err.message);
        }
    }


    return (
        <main className='container-principal-caduser'>
            <section>
                <Cabecalho03 />
            </section>

            <section className='container-dois-cadtextos'>

                <div className='titulo-caduser'>
                    <h1>Cadastre seu endereço de entrega</h1>
                </div>
                <hr />

                <div className='textos-caduser'>
                    <label>
                        Logadouro:
                        <input type='text' value={logadouro} onChange={e => setLogadouro(String(e.target.value))} />
                    </label>

                    <label>
                        Número:
                        <input type='text' value={numero} onChange={e => setNumero(Number(e.target.value))} />
                    </label>
                </div>
                <hr />

                <div className='textos-caduser'>
                    <label>
                        Bairro:
                        <input type='text' value={bairro} onChange={e => setBairro(String(e.target.value))} />
                    </label>

                    <label>
                        CEP:
                        <input type='text' value={cep} onChange={e => setCep(String(e.target.value))} maxLength='9' placeholder='xxxxx-xxx'/>
                    </label>
                </div>
                <hr />

                <div className='textos-caduser'>
                    <label>
                        Cidade:
                        <input type='text' value={cidade} onChange={e => setCidade(String(e.target.value))} />
                    </label>

                    <label>
                        Estado:
                        <input type='text' value={estado} onChange={e => setEstado(String(e.target.value))} />
                    </label>
                </div>
                <hr />

                <div className='textos-caduser'>
                    <label>
                        Casa:
                        <input type='text' value={casa} onChange={e => setCasa(String(e.target.value))} />
                    </label>

                    <label>
                        Complemento:
                        <input type='text' value={complemento} onChange={e => setComplemento(String(e.target.value))} />
                    </label>
                </div>
                <hr />

                <div className='botao-cad-user'>
                    <button onClick={voltar}>Voltar Home</button>
                    <button onClick={SalvarCLick}>Cadastrar</button>
                </div>
            </section>

        </main>
    )
}