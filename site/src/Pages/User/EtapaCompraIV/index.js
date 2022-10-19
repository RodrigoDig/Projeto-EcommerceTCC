import React from 'react';
import './index.scss';
import Cabeçalho05 from '../../../Components/Cabeçalho05'
import Carrinho from '../../../assets/images/carrinho etapaIV.svg';

export default function EtapaCompraIV(){
    return(
        <main>
            <section>

               <div>
                    <Cabeçalho05/>
               </div> 

                    <div className='cont-mid'>
                        <h1 className='ptt1'> Compra finalizada com sucesso!</h1>
                        <img src={Carrinho} className='carrin' />
                        <p className='at1'> a equipe bytespeed agradece a sua preferência e confiança em nossos serviços. Aproveite sua nova aquisição e volte sempre!</p>
                        <button className='bbtt'> Voltar ao inicio</button>
                    </div>

            </section>
        </main>
    )
}