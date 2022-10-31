import React from 'react';
import './index.scss';
import Cabecalho03 from '../../../Components/Cabeçalho03'
import lixeira from '../../../assets/images/lixeira.svg';
import local from '../../../assets/images/local.svg';
import cesta from '../../../assets/images/cesta.svg';
import caminhao from '../../../assets/images/caminhao-de-entrega 1.svg';

export default function EtapaCompra(){
    return(
        <main>
           <Cabecalho03/>
            <section>
                <div className='fundo1'>
                    <div className='f2'>
                        <img src={local} className='local'/> 
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
                       
                    <img src={cesta} className='cesta'/> 
                    <img src={lixeira} className='lixeira'/> 
                       <h1>Produto</h1> 
                        
                       <button className='buttonL1'>Remover Produtos</button>
                       
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

                    <div className='frete'>
                    <img src={caminhao} className='caminhao'/> 

                    <h1>Escolha sua opção de frete</h1>
                    <h2>Valores Fixos</h2>
                    <hr/>

                    <input type='radio' placeholder='Frete Comum'/>
                    <input type='radio' placeholder='Frete Comum'/>

                    <p>Frete Comum</p>       <label>R$ 15.00</label>
                    <p>Frete Sedex</p>       <label>R$ 25.00</label>  

                    </div>
            </section>
        </main>
    )
}