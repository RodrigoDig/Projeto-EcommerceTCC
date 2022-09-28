import React from 'react';
import './index.scss';
import Cabecalho03 from '../../../Components/Cabeçalho02'

export default function CadastroUser(){
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
                        <input type='text' />
                    </label>

                    <label>
                        Sobrenome:
                        <input type='text' />
                    </label>
                </div>
                <hr/>

                <div className='textos-caduser'>
                    <label>
                        Data de nascimento:
                        <input type='date' />
                    </label>

                    <label>
                        Gênero:
                        <input type='text' />    
                    </label>    
                </div>
                <hr/>

                <div className='textos-caduser'>
                    <label>
                        Cpf:
                        <input type='text' />
                    </label>
                </div>
                <hr/>

                <div className='textos-caduser'>
                    <label>
                        Email:
                        <input type='text'/>
                    </label>

                    <label>
                        Celular:
                        <input type='text' />
                    </label>
                </div>
                <hr/>

                <div className='textos-caduser'>
                    <label>
                        Senha:
                        <input type='text' />
                    </label>

                    <label>
                        Confirmar senha:
                        <input type='text' />
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
                        <div>
                            <input type='text' placeholder='Titular do cartão'/>
                            <input type='text' placeholder='Número do cartão' />
                        </div>
                        <div>
                            <input type='text' placeholder='Validade'/>
                            <input type='text' placeholder='Verificação CVV'/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}