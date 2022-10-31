import React from 'react';
import './index.scss';
import Cabecalho03 from '../../../Components/Cabeçalho03'
import lixeira from '../../../assets/images/lixeira.svg';

export default function EtapaCompra(){
    return(
        <main>
           <Cabecalho03/>
            <section>
                <div className='fundo1'>
                    <div className='f2'>
                        <h1>Selecione o endereço</h1>
                        <label>Rua:
                            <br/>
                           Número:
                           <br/>
                           CEP:
                        </label>

                        
                    </div>
                    <button className='btn1'>Editar</button>
                    <button className='btn2'>Novo Endereço</button>
                    <div className='produto'>
                       <h1>Produto</h1> 
                        
                       <button className='buttonL1'>Remover Produtos</button>
                       <img src={lixeira} className='lixeira'/> 
                       <hr />
                       
                       <input type='image'></input>
                       

                       <button className='buttonP'>insira o cupom de desconto</button>
                       <button className='buttonL2'>Aplicar cupom</button>
                    </div>

                    <div className='resumo'>
                       <h1>Resumo</h1> 
                        
                       <button className='button1'>Continuar Comprando</button>
                       <button className='button2'>Comprar</button>
                    </div>
                </div>
            </section>
        </main>
    )
}