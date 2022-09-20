import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho04 from '../../../Components/Cabeçalho04';

export default function Cadastro(){
    return(
        <main className='cont-main'>
            <section className='cont-cabecalho'>
                <Cabecalho04 />
            </section>
            <section className='cont-section'>
                <div>    
                    <div className='espaço-cadastro'>
                        <label>Nome</label>
                        <input type='text' name='nome'/>

                        <label>Preço</label>
                        <input type='text' name='preco'/>

                        <label className='Nome'>Fabricante</label>
                        <input type='text' name='pabric'/>

                        <label>Quantia em Estoque</label>
                        <input type='text' name='QEE'/>

                        <label>Características</label>
                        <input type='text' name='carac'/>

                        <div className='select'>
                            <label>Departamento</label>
                            <select className='input-nome'>
                                <option selected disabled hidden>Selecione</option>
                                <option>Hardware</option>
                                <option>Games</option>
                                <option>Computadores</option>
                            </select>
                        </div>

                        <div className='select'> 
                            <label>Hardware</label>
                            <select className='input-nome'>
                                <option selected disabled hidden>Selecione</option>
                                <option>Hard disk</option>
                                <option>Memória Ram</option>
                                <option>Gabinetes</option>
                                <option>Processadores</option>
                                <option>Placa de video</option>
                                <option>Placa mãe</option>
                                <option>Coolers</option>
                                <option>Fontes</option>    
                            </select>
                        </div>

                        <div className='select'>
                            <label>Computadores</label>
                            <select className='input-nome'>
                                <option selected disabled hidden>Selecione</option>
                                <option>Gamers</option>
                                <option>Casuais</option>
                                <option>Periféricos</option>
                            </select>
                        </div>

                        <div className='select'>
                            <label>Games</label>
                            <select className='input-nome'>
                                <option selected disabled hidden>Selecione</option>
                                <option>Consoles</option>
                                <option>Acessórios</option>
                            </select>
                        </div>

                        <label>Informações Técnicas</label>
                        <input type='text' name='carac'/>

                        <label>Descrição</label>
                        <input type='text' name='carac'/>

                        <label>Avaliação 0-5</label>
                        <input type='text' name='carac'/>

                        <label>Desconto</label>
                        <input type='text' name='carac'/>

                        <label>Garantia</label>
                        <input type='date' name='carac'/>

                    </div>

                </div>

                <div className='imagens'>
                    <label>Imagem 1</label>
                    <input type='file' />

                    <label>Imagem 2</label>
                    <input type='file' />

                    <label>Imagem 3</label>
                    <input type='file' />
                </div>

                <div className='btn'>
                    <button>Cadastrar Venda</button>
                </div>
                
            </section>  
            
        </main>
    )
}