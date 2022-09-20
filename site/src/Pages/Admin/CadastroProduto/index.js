import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho04 from '../../../Components/Cabeçalho04';
import CadProdLogo from '../../../assets/images/Cad-Prodfase02.svg'
import SalvarImgIcon from '../../../assets/images/Salvar-Imagem.svg';

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
                            <h2 className='text1-infocad001'>
                                Nome
                            </h2> 
                            <input className='input1-infocad001' />
                            <h2 className='text2-infocad001'>
                                Preço
                            </h2>
                            <input className='input2-infocad001'/>
                            <h2 className='text2-infocad001'>
                                Fabricante
                            </h2>
                            <input className='input3-infocad001'/>
                            <h2 className='text2-infocad001'>
                                Quantia em Estoque
                            </h2>
                            <input className='input4-infocad001'/>
                        </div>
                        <div className='contfilha2-infocad-001'>
                            <h1 className='titulo-contfilha2-infocad001'>
                                Imagens
                            </h1>
                            <div className='contneta1-infocad001'>
                                <label for='arquivo1' className='selecionar-img1'>
                                    <h1 className='text-contneta1'>
                                        Selecionar Imagem 1
                                    </h1>
                                    <img src={SalvarImgIcon} />
                                    <input name='arquivo1' id='arquivo1' type='file' className='input-img1' />
                                </label>
                                <label for='arquivo2' className='selecionar-img2'>
                                    <h1 className='text-contneta1'>
                                        Selecionar Imagem 2
                                    </h1>

                                    <img src={SalvarImgIcon} />
                                    <input name='arquivo2' id='arquivo2' type='file' className='input-img1' />
                                </label>
                            </div>
                            <label for='arquivo3' className='selecionar-img3'>
                                    <h1 className='text-contneta1'>
                                        Selecionar Imagem 3
                                    </h1>

                                    <img src={SalvarImgIcon} />
                                    <input name='arquivo3' id='arquivo3' type='file' className='input-img1' />
                                </label>
                        </div>
                    </div>    





                    <div className='espaço-cadastro'>
                        <label>Nome</label>
                        <input type='text' name='nome' className=''/>

                        <label>Preço</label>
                        <input type='text' name='preco'/>

                        <label>Fabricante</label>
                        <input type='text' name='pabric'/>

                        <label>Quantia em Estoque</label>
                        <input type='text' name='QEE'/>

                        <label>Características</label>
                        <input type='text' name='carac'/>

                        <div className='select'>
                            
                            <select className='input-nome'>
                                <option selected disabled hidden>Selecione</option>
                                <option>Hardware</option>
                                <option>Games</option>
                                <option>Computadores</option>
                            </select>
                        </div>

                        <div className='select'> 
                            
                            <select className='input-nome'>
                                <option selected disabled hidden>CATEGORIA I</option>
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
                            
                            <select className='input-nome'>
                                <option selected disabled hidden>CATEGORIA II</option>
                                <option>Gamers</option>
                                <option>Casuais</option>
                                <option>Periféricos</option>
                            </select>
                        </div>

                        <div className='select'>
                           
                            <select className='input-nome'>
                                <option selected disabled hidden>CATEGORIA III</option>
                                <option>Consoles</option>
                                <option>Acessórios</option>
                            </select>
                        </div>

                        <label>Informações Técnicas</label>
                        <input type='text' name='carac'/>

                        <label>Descrição</label>
                        <input type='text' name='carac'/>

                        <div className= 'direita'>

                         <label className='avaliacao'>Avaliação 0-5</label>
                         <input type='number' name='carac'/>

                         <label className='desconto'>Desconto</label>
                         <input type='checkbox' name='carac'/>

                         <label className='garantia'>Garantia</label>
                         <input type='date' name='carac' className='input'/>
                        
                        </div>


                    </div>

                </div>

                <div className='btn'>
                    <button>CADASTRAR</button>
                </div>
                
            </section>  
            
        </main>
    )
}