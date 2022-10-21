import React from 'react';
import './index.scss';
import Cabecalho03 from '../../../Components/Cabeçalho02'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CadEnd } from '../../../Api/enderecoApi';
import { toast } from 'react-toastify';

export default function CadastroEnd() {

    const navigate = useNavigate();

    function voltar() {
        navigate('/')
    }
    
    async function SalvarCLick() {
        try {
            const r = await CadEnd(logadouro, numero, bairro, cep, cidade, estado, complemento, casa);
            toast.success('Endereço cadastrado com sucesso!')
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    const [logadouro, setLogadouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState();
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [complemento, setComplemento] = useState('');
    const [casa, setCasa] = useState('');

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
                        <input type='text' value={logadouro} onChange={e => setLogadouro(e.target.value)} />
                    </label>

                    <label>
                        Número:
                        <input type='text' value={numero} onChange={e => setNumero(e.target.value)} />
                    </label>
                </div>
                <hr />

                <div className='textos-caduser'>
                    <label>
                        Bairro:
                        <input type='text' value={bairro} onChange={e => setBairro(e.target.value)} />
                    </label>

                    <label>
                        CEP:
                        <input type='text' value={cep} onChange={e => setCep(e.target.value)} maxLength='9' placeholder='xxxxx-xxx'/>
                    </label>
                </div>
                <hr />

                <div className='textos-caduser'>
                    <label>
                        Cidade:
                        <input type='text' value={cidade} onChange={e => setCidade(e.target.value)} />
                    </label>

                    <label>
                        Estado:
                        <input type='text' value={estado} onChange={e => setEstado(e.target.value)} />
                    </label>
                </div>
                <hr />

                <div className='textos-caduser'>
                    <label>
                        Casa:
                        <input type='text' value={casa} onChange={e => setCasa(e.target.value)} />
                    </label>

                    <label>
                        Complemento:
                        <input type='text' value={complemento} onChange={e => setComplemento(e.target.value)} />
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