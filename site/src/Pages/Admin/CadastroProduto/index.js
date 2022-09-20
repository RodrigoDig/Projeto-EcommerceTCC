import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho04 from '../../../Components/Cabeçalho04';
import CadProdLogo from '../../../assets/images/Cad-Prodfase02.svg'


export default function Cadastro(){
    return(
        <main className='cont-main'>
            <section className='cont-cabecalho'>
                <Cabecalho04 />
            </section>
            <section className='cont-section'>
                <div className='cont-titulo-cadastro'>
                    <img src={CadProdLogo} className='img-cad' />
                    <h2 className='txt-cad'>
                        Cadastrar Produto
                    </h2>
                </div>

                <div className='cont-infos-cad'>
                    <div className='cont-infocad-001'>
                        <div className='contfilha1-infocad-001'>
                            <h2>
                                Nome
                            </h2>
                            <input className='input-infocad001' />
                            <h2>
                                Preço
                            </h2>
                            <input className='input2-infocad001'/>
                            <h2>
                                Fabricante
                            </h2>
                            <input className='input3-infocad001'/>
                            <h2>
                                Quantia em Estoque
                            </h2>
                            <input className='input4-infocad001'/>
                        </div>
                        <div className='contfilha2-infocad-001'>

                        </div>
                    </div>    
                    <div className='espaço-cadastro'>
                        <label>Nome</label>
                        <input type='text' name='nome' className=''/>

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
                <div className='btn'>
                    <button>Cadastrar Venda</button>
                </div>
                
            </section>  
            
        </main>
    )
}