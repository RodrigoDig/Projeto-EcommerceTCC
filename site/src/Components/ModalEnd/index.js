import './index.scss';
import Storage from 'local-storage';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { salvar } from '../../Api/enderecoApi';

export default function ModalEndereco({ exibir, fechar }) {

    const [casa, setCasa] = useState('');
    const [cep, setCEP] = useState('');
    const [logadouro, setLogadouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');


    async function salvarEndereco() {
        try {
            const id = Storage('user-logado').id;
            const r = await salvar(id, logadouro, numero, bairro, cep, cidade, estado, complemento, casa);
            toast.success('Seu endereço foi cadastrado com sucesso!');

            fechar();
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }   


    return (
        <div className='comp-modal-endereco'>
            <div className={`modal-endereco ${exibir ? 'exibir' : ''}`}>
                <div className='conteudo'>
                    <h1> Cadastre seu novo endereço </h1>
                    <hr/>
                    <div className='form'>
                        <div className='Locações'>
                            <label> Logradouro: </label>
                            <label> Número: </label>
                            <label> Complemento: </label>
                            <label> Casa: </label>
                            <label> CEP: </label>
                            <label> Bairro: </label>
                            <label> Cidade: </label>
                            <label> UF: </label>
                            
                        </div>

                        <div className='valores'>
                            <input type='text' value={logadouro}  onChange={e => setLogadouro(e.target.value)}  />
                            <input type='text' value={numero}  onChange={e => setNumero(e.target.value)}  />
                            <input type='text' value={complemento}  onChange={e => setComplemento(e.target.value)}  />
                            <input type='text' value={casa} onChange={e => setCasa(e.target.value)} />
                            <input type='text' value={cep}  onChange={e => setCEP(e.target.value)}  />
                            <input type='text' value={bairro}  onChange={e => setBairro(e.target.value)}  />
                            <input type='text' value={cidade}  onChange={e => setCidade(e.target.value)}  />
                            <input type='text' value={estado}  onChange={e => setEstado(e.target.value)} />

                        </div>
                    </div>
                    <div className='btn'>
                        <button onClick={salvarEndereco}> Salvar endereço </button>
                    </div>
                </div>


            </div>
        </div>
    )
}