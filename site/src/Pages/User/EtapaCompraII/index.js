import React from 'react';
import './index.scss';
import Cabeçalho05 from '../../../Components/Cabeçalho05'
import { useNavigate } from 'react-router-dom';
import Etapa from '../../../Components/etapas';
import Tracos from '../../../assets/images/options.svg';
    

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
                                                <img src={Tracos}/>
                                                <h1 className='nmrx1'>Opções de pagamento</h1>                                                
                                            </div>

                                            <div className='cont-zbx'>
                                                <button className='cdp'>chave pix</button>
                                                <button className='cdc'>
                                                    <img className='idz'/>
                                                    cartão de crédito
                                                </button>
                                                <h1 className='ncx'> Utilizar cartão cadastrado?</h1>
                                            </div>

                                            <div className='const-adl'>
                                                <h1 className='ndx'>Cartão de crédito</h1>

                                                <h1 className='mvb'>À vista com até 10% de desconto* ou tudo em até 10x sem juros!</h1>

                                                <h1 className='pdt'>A bytespeed! aceita as bandeiras de cartão VISA, MasterCard, ELO, HiperCard, American Express e Diners - Todos em até 10x sem juros ou com desconto em até 3x!</h1>

                                                <h1 className='dbz'> *O desconto poderá ser concedido ou não até o limite de 10%, podendo ser menor ou zero, de acordo com o detalhado nas descrições do produto e só será aplicado às vendas diretas e entregues pelo KaBuM!, não se aplicando aos produtos de Marketplace.</h1>                                        
                                            </div>


                                        </div>

                        </div>

                                            <div className='cont-zxd'>
                                                <button className='fjh1'> Voltar ao inicio</button>
                                            </div>
                </div>

            </section>
        </main>
    )
}