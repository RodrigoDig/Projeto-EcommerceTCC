import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import Cabecalho from '../../../Components/Cabeçalho06';
import Interrogacao from '../../../assets/images/interrogacao.svg';

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
                        <div className='card-1'>a</div>
                        <div className='card-2'>b</div>
                        <div className='card-3'>c</div>
                    </div>

            </section>  


        </main>
    )
}