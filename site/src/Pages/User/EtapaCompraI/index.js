import React, { useEffect } from 'react';
import './index.scss';

import  storage  from 'local-storage';
import { useNavigate } from 'react-router-dom';
import Cabecalho03 from '../../../Components/Cabeçalho03'
import lixeira from '../../../assets/images/lixeira.svg';
import local from '../../../assets/images/local.svg';
import cesta from '../../../assets/images/cesta.svg';
import caminhao from '../../../assets/images/caminhao-de-entrega 1.svg';
import Etapas from '../../../Components/etapas'

export default function EtapaCompra() {
    const navigate = useNavigate();

    useEffect(() => {
        if(!storage('user-logado')){
            navigate('/login');
        }
    }, [])

    return (
        <main>
            <Cabecalho03 />

            <section>

                <div className='fundo1'>
                    <Etapas />
                    <div className='f2'>
                        <img src={local} className='local' />
                        <h1>Selecione o endereço</h1>
                        <label>Rua:
                            <br />
                            Número:
                            <br />
                            CEP:
                        </label>


                    </div>
                    <button className='btn1'>Editar</button>
                    <button className='btn2'>Novo Endereço</button>
                    <div className='produto'>

                        <img src={cesta} className='cesta' />
                        <img src={lixeira} className='lixeira' />
                        <h1>Produto</h1>

                        <button className='buttonL1'>Remover Produtos</button>

                        <hr />




                        <button className='buttonP'>insira o cupom de desconto</button>
                        <button className='buttonL2'>Aplicar cupom</button>
                    </div>

                    <div className='resumo'>
                        <h1>Resumo</h1>

                        <label>Valor total do Produto: R$ 4.000.00</label>
                        <hr />

                        <p>Frete: R$ 15.00</p>
                        <input type='text' placeholder='Subtotal:'></input>
                        <button className='button1'>Continuar Comprando</button>
                        <button className='button2'>Comprar</button>
                    </div>

                </div>

                <div className='frete'>
                    <img src={caminhao} className='caminhao' />

                    <h1>Escolha sua opção de frete</h1>
                    <h2>Valores Fixos</h2>
                    <hr />

                    <input type='radio' placeholder='Frete Comum' />
                    <input type='radio' placeholder='Frete Comum' />

                    <p className='pC'>Frete Comum</p>       <label className='labelC'>R$ 15.00</label>
                    <p className='pS'>Frete Sedex</p>       <label className='labelS'>R$ 25.00</label>

                </div>

                <div className='FRETE'>
                    <h1>FRETE</h1>
                    <div className='div'>

                        <p>Valores fixos para todos os fretes.</p>

                        <p>Para produtos vendidos fora do estado de São Paulo possuimos um valor de entrega fixo, custando R$ 50,00.
                        </p>

                        <p>Para produtos vendidos dentro do estado de São Paulo, o cliente possui  duas opções, e são elas:
                            *Entrega comum;
                            *Entrega via Sedex(mais rápida)</p>
                    </div>
                </div>

                <div className='divbtn'>

                    <button>Cancelar Pedido</button>
                </div>
            </section>
        </main>
    )
}