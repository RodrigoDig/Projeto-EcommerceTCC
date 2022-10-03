import React from 'react';
import './index.scss';
import Cabecalho03 from '../../../Components/Cabeçalho02'

import { useState } from 'react';
import { cadUser } from '../../../Api/cadUsuarioApi';
import { cartaoUsuario } from '../../../Api/cadCartaoApi'; 

export default function CadastroUser(){

    async function SalvarCLick(){

        try{
            const r = await cadUser(nome, sobrenome, cpf, nascimento, genero, email, celular, senha);
            const x = await cartaoUsuario(nomecartao, numero, validade, cvv);
            alert('Usuário cadastrado com sucesso!');
        }
        catch(err){
          	
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

    const [nomecartao, setNomecartao] = useState('');
    const [numero, setNumero] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');



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
                        <input type='text' value={celular} onChange={e => setCelular(e.target.value)}/>
                    </label>
                </div>
                <hr/>

                <div className='textos-caduser'>
                    <label>
                        CPF:
                        <input type='text' value={cpf} onChange={e => setCpf(e.target.value)}/>
                    </label>

                    <label>
                        Senha:
                        <input type='text' value={senha} onChange={e => setSenha(e.target.value)}/>
                    </label>
                </div>
                <hr/>

                <div className='divisão-cartão'>
                    <div className='final-cads'>
                        <h2>Deseja cadastrar seu cartão?</h2>
                        <label>
                            Sim
                            <input type='checkbox' />
                        </label>

                        <label>
                            Não
                            <input type='checkbox' />
                        </label>
                    </div>

                    <div className='inputs-finais'>
                        <div className='cartao-user'>
                            <div className='div-cartao-1'>
                                <input type='text' placeholder='Titular do cartão' value={nomecartao} onChange={e => setNomecartao(e.target.value)}/>
                            </div>

                            <div className='div-cartao-1'>
                                <input type='date' placeholder='Validade' value={validade} onChange={e => setValidade(e.target.value)} />
                            </div>
                        </div>

                        <div className='cartao-user'>
                            <div className='div-cartao-1'>
                                <input type='text' placeholder='Número do cartão' value={numero} onChange={e => setNumero(e.target.value)}/>
                            </div>

                            <div className='div-cartao-1'>
                                <input type='text' placeholder='Verificação CVV' value={cvv} onChange={e => setCvv(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='botao-cad-user'>
                    <button onClick={SalvarCLick}>Cadastrar</button>
                </div>
            </section>
        </main>
    )
}