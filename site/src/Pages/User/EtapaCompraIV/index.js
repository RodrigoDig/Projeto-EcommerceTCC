import React from 'react';
import './index.scss';
import Cabeçalho05 from '../../../Components/Cabeçalho05'
import Carrinho from '../../../assets/images/carrinho etapaIV.svg';
import { useNavigate } from 'react-router-dom';

export default function EtapaCompraIV(){

    const navigate = useNavigate();

    function irHm(){
        navigate('/')
    }

    return(
        <main>
            <section className='dt-1'>

               <div className='cbb-5'>
                    <Cabeçalho05/>
               </div> 

               <div className='ctr'>
                
                    <div className='dci-1'>

                        <div className='cont-mid'>
                            <h1 className='ptt1'> Compra finalizada com sucesso!</h1>
                            <img src={Carrinho} className='carrin' />
                            <p className='at1'> a equipe bytespeed agradece a sua preferência e confiança em nossos serviços. Aproveite sua nova aquisição e volte sempre!</p>
                            <button onClick={irHm} className='bbtt'> Voltar ao inicio</button>
                        </div>

                    </div>

               </div>

            </section>
        </main>
    )
}