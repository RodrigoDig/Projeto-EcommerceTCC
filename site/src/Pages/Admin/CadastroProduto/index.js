import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Cadastro(){
    return(
        <main>  
            <section className='fundo-cadastro'>
                <div>    
                    <div className='f2'>
                        <p className='Nome'>Nome</p>
                        <input type='text' name='nome' className='input-nome'></input>
                   
                        <p className='Nome'>Código do Produto</p>
                        <input type='text' name='CDP' className='input-nome'></input>

                        <p className='Nome'>Preço</p>
                        <input type='text' name='preco' className='input-nome'></input>

                        <p className='Nome'>Fabricante</p>
                        <input type='text' name='pabric' className='input-nome'></input>

                        <p className='Nome'>Quantia em Estoque</p>
                        <input type='text' name='QEE' className='input-nome'></input>

                        <p className='Nome'>Características</p>
                        <input type='text' name='carac' className='input-nome'></input>
                    </div>

                    <Link to="/">Voltar</Link> 


                </div>
            </section>  
            
        </main>
    )
}