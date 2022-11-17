import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import Cabecalho from '../../../Components/Cabeçalho06';
import Interrogacao from '../../../assets/images/interrogacao.svg';
import Correspondencia from '../../../assets/images/correspondencia-1.svg';
import Reuniao from '../../../assets/images/reuniao-on-line-1.svg';
import Telefone from '../../../assets/images/telefone-2.svg';
import Seta from '../../../assets/images/seta-para-baixo.svg';
import Rodape from '../../../Components/Rodapé';

export default function Atendimento(){

    return(
        <main>

            <section className='sct'>   

                    <div>
                        <Cabecalho/>
                    </div>
        
                    <div className='align-1'>
                        <div className='dv-1'>
                            <div className='align-2'>
                                <h1 className='txt-1'>Qual  é a sua dúvida?</h1>
                                <h1 className='txt-2' >A equipe da ByteSpeed ira ajudar você!</h1>
                            </div>  

                            <div className='align-3'>  
                                <img className='img-1' src={Interrogacao}/>
                            </div>    
                        </div>
                    </div>

                    <div className='align-4'>                   
                        <div className='card-1'>
                            <h1 className='txt-3'>Email de contato</h1>
                            <img className='img-2' src={Correspondencia} />
                            <h1 className='txt-4'>Entre em contato conosco através</h1>
                            <h1 className='txt-5'>do email</h1>
                            <h1 className='txt-6'>bytespeedcontact@gmail.com</h1>
                        </div>

                        <div className='card-2'>
                            <h1 className='txt-7'>Telefone SAC</h1>
                            <img className='img-3' src={Telefone} />
                            <h1 className='txt-9'>Segunda à sábado das 8:00 às</h1>
                            <h1 className='txt-14'>20.</h1>
                            <h1 className='txt-10'>Exceto domingo e feriados</h1>
                            <h1 className='txt-11'>Número: (19) 2114.4444</h1>
                        </div>

                        <div className='card-3'>
                            <h1 className='txt-12'>Chat Online</h1>
                            <img className='img-4' src={Reuniao} />
                            <h1 className='txt-13'>Atendimento ao vivo de Segunda à</h1>
                            <h1 className='txt-15'>sábado das 8:00 às 20:00</h1>
                        </div>
                    </div>

                    <div className='align-5'>
                        <div className='dv-2'>
                            <h1 className='txt-16'>Dúvidas Frequentes</h1>
                            <div className='div-fantasma'></div>
                           <button className='duvidas'>
                            <h1> DÚVIDAS SOBRE PAGAMENTO</h1>
                            <img src={Seta} />
                           </button>

                           <button className='duvidas'>
                            <h1> DÚVIDAS SOBRE CADASTRO</h1>
                            <img src={Seta} />
                           </button>

                           <button className='duvidas'>
                            <h1> GARANTIA BYTESPEED</h1>
                            <img src={Seta} />
                           </button>

                           <button className='duvidas'>
                            <h1> DÚVIDAS SOBRE O PEDIDO</h1>
                            <img src={Seta} />
                           </button>

                           <button className='duvidas'>
                            <h1> DÚVIDAS SOBRE AS FASES DE COMPRA</h1>
                            <img src={Seta} />
                           </button>
                        </div>
                    </div>

                    <footer>
                        <Rodape/>
                    </footer>
                   
            </section>  


        </main>
    )
}