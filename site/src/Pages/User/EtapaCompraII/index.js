import React from 'react';
import './index.scss';
import Cabeçalho05 from '../../../Components/Cabeçalho05'
import { useNavigate } from 'react-router-dom';
import Etapa from '../../../Components/etapas';

export default function EtapaCompraII(){

    const navigate = useNavigate();

    function irHm(){
        navigate('/')
    }

    return(
        <main>
            <section>

                <div className='dtt-2'>

                    <div className='cbb-7'>
                            <Cabeçalho05/>
                    </div> 

                    <div className='cbx-x'>
                        <Etapa/>
                    </div>

                        <div className='cxdo'>

                                        <div className='mlnu'>
                                            <div className='cont-nml'>
                                                <h1 className='nmrx1'> Compra finalizada com sucesso!</h1>
                                                <p className='dzxr1'> a equipe bytespeed agradece a sua preferência e confiança em nossos serviços. Aproveite sua nova aquisição e volte sempre!</p>
                                                <button className='fjh1'> Voltar ao inicio</button>
                                            </div>
                                        </div>

                        </div>
                </div>

            </section>
        </main>
    )
}