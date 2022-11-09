import React, { useState } from 'react';
import './index.scss';

import cartaoUsuario from '../../../Api/cadCartaoApi'
import Cabeçalho05 from '../../../Components/Cabeçalho05'
import { useNavigate } from 'react-router-dom';
import Etapa from '../../../Components/etapas';
import Tracos from '../../../assets/images/options.svg';
import { toast } from 'react-toastify';
import Cart from '../../../assets/images/cartaob.svg'
    

export default function EtapaCompraII(){
    const [titular, setTitular] =  useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [pagamento, setPagamento] = useState ('');

   async function salvarCartao() {

    try{
        const r = await  cartaoUsuario (titular, numeroCartao, validade, cvv, cpf, nascimento, pagamento);
        toast.success('Cartão cadastrado com sucesso!');
    } 
    catch(err){
         toast.dark(err.response.data.erro)
        }
    }
    

    const navigate = useNavigate();

    function voltar(){
        navigate('/etapaI')
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
                                                <img className='vzx1' src={Tracos}/>
                                                <h1 className='nmrx1'>Opções de pagamento</h1>                                                
                                            </div>

                                            <div className='cont-zbx'>
                                                <button className='cdp'>chave pix</button>
                                                <button className='cdc'>
                                                    <img className='idz' src={Cart} />
                                                    cartão de crédito
                                                </button>
                                                <h1 className='ncx'> Utilizar cartão cadastrado?</h1>
                                            </div>

                                            <div className='const-adl'>
                                                <h1 className='ndx'>Cartão de crédito <h1 className='afs'> À vista com até 10% de desconto* ou tudo em até 10x sem juros! </h1> </h1>

                                                <h1 className='pdt'>A bytespeed! aceita as bandeiras de cartão VISA, MasterCard, ELO, HiperCard, American Express e Diners - Todos em até 10x sem juros ou com desconto em até 3x!</h1>

                                                <h1 className='dbz'> *O desconto poderá ser concedido ou não até o limite de 10%, podendo ser menor ou zero, de acordo com o detalhado nas descrições do produto e só será aplicado às vendas diretas e entregues pelo KaBuM!, não se aplicando aos produtos de Marketplace.</h1>                                        
                                            </div>

                                            <div className='dga'>
                                                <ul className='akd'>
                                                    <li className='gsd'> Novo Cartão</li>

                                                    <div className='info-1'>
                                                        <input className='asp' type="text" placeholder="Titular do Cartão" value={titular} onChange={e => setTitular(e.target.value)}/>
                                                        <input className='ahs' type="text" placeholder="Numéro do Cartão" value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)} />
                                                    </div>

                                                    <div className='info-2'>
                                                        <input className='fja' type="text" placeholder="Validade" value={validade} onChange={e => setValidade(e.target.value)} />
                                                        <input className='gad' type="text" placeholder="Verificação CVV" value={cvv} onChange={e => setCvv(e.target.value)} />
                                                        <input className='gha' type="text" placeholder="Cpf do Titular" value={cpf} onChange={e => setCpf(e.target.value)} />
                                                    </div>

                                                    <div className='info-3'>
                                                        <input className='hga' type="text" placeholder="Nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)} />
                                                        <select className='lkf' value={pagamento} onChange={e => setPagamento(e.target.value)}>
                                                        <option selected disabled hidden >Forma de pagamento</option>
                                                        <option>Débito</option>
                                                        <option>Crédito</option>
                                                        </select>
                                                    </div>
                                                </ul>
                                                
                                            </div>
                                            
                                        </div>
                                </div>

                                    <div className='cnt-03'>
                                        <div className='cbx-02'>
                                            <div className='cont-zxd'>
                                                    <button onClick={voltar} className='fjh1'> Voltar</button>
                                                </div>
                                                <div className='cont-zxd'>
                                                    <button className='fjh2' onClick={salvarCartao}> Pagar com cartão</button>
                                                </div>
                                        </div>
                                    </div>
                </div>                     

            </section>
        </main>
    )
}