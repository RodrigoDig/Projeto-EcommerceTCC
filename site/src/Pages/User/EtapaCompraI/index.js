import './index.scss';
import  storage  from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Etapas from '../../../Components/etapas';
import cesta from '../../../assets/images/cesta.svg';
import Cabecalho from '../../../Components/CabecalhoCompras';
import Localização from '../../../assets/images/pin-de-localizacao.png';
import caminhao from '../../../assets/images/caminhao-de-entrega 1.svg';
import Pagamento from '../../../assets/images/forma-de-pagamento.png';

export default function EtapaCompra() {
    const[infoUser, setInfoUser] = useState({ id: [], nome: [], email: [] });
    console.log(infoUser);
    const navigate = useNavigate();


    useEffect(() => {
        if(!storage('user-logado')){
            navigate('/login');
        }
        if(!storage('user-logado')){
            setInfoUser('');
        }else{
            const userLogado = storage('user-logado');
            setInfoUser(userLogado);
        }
    }, [])
    return (
        <main>
            <section>
                <Cabecalho />
            </section>

            <section className='Bloco-etapa1'>
                <div>
                    <Etapas />
                </div>

                <div className='divisão-etapa1'>
                    <div className='divisão-informações-produto-etp1'>
                        <div className='bloco-endereco-etp1'>
                            <div className='titulo-end-etp1'>
                                <img src={Localização} />
                                <h1>Selecione o endereço</h1>
                            </div>

                            <div className='informações-end-etp1'>
                                <div className='end-etp1'>
                                    <h2>Rua: </h2>
                                    <h2>Número: </h2>
                                    <h2>CEP: xxxxx-xxx - sao paulo sp</h2>
                                </div>
                                <div className='edit-etp1'>
                                    <span>Editar</span> &nbsp; &nbsp;
                                    <span style={{color : "#f27400"}}>Novo endereço</span>
                                </div>
                            </div>
                        </div>

                        <div className='produto-etp1'>
                            <div className='titulo2-etp1'>
                                <img src={cesta} />
                                <h1>Produto </h1>
                            </div>
                            <hr />

                            <div className='img-desc-produto-etp1'>
                                <img />
                                <p>Descrição do produto</p>
                            </div>

                            <div className='cupom-etp1'>
                                <input type='text' placeholder='Insira seu cupom de desconto' />
                                <button>Aplicar cupom</button>
                            </div>
                        </div>

                        <div className='opção-frete-etp1'>
                            <div className='titulo-frete-etp1'>
                                <div className='frete-etp1'>
                                    <img src={caminhao} />
                                    <h1>Escolha sua opção de frete </h1>
                                </div>

                                <div className='valores-fixos'>
                                    <h1>Valores Fixos</h1>
                                </div>
                            </div>
                            <hr />

                            <div className='parte-final-frete'>
                                <div className='tipos-frete'>
                                    <label>
                                        Frete Comum
                                        <input type='checkbox' />
                                    </label>

                                    <label>
                                        Frete Sedex
                                        <input type='checkbox' />
                                    </label>
                                </div>

                                <div className='valores-frete'>
                                    <span>R$ 15,00</span>
                                    <span>R$ 25,00</span>
                                </div>
                            </div>
                        </div>

                        <div className='produto-etp1-pagamento'>
                            <div className='titulo2-etp1-pagamento'>
                                <img src={Pagamento} />
                                <h1>Pagamento </h1>
                            </div>
                            <hr/>
                        </div>
                    </div>

                    <div className='bloco-final-etp1'>
                        <div className='Resumo-carrinho'>
                            <h1>Resumo</h1>
                            <p>Valor da compra: R$ </p>
                            <button>Finalizar compra</button>

                        </div>

                        <div className='informação-frete-etp1'>
                            <h1>Frete</h1>

                            <p>Valores fixos para todos os fretes.</p>
                            <p>Para produtos vendidos fora do estado de São Paulo possuimos um valor de entrega fixo, custando R$ 50,00.</p>
                            <p>Para produtos vendidos dentro do estado de São Paulo, o cliente possui duas opções, e são elas:
                                *Entrega comum; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                *Entrega via Sedex(mais rápida);
                            </p>

                        </div>

                        <div className='cancelar-pedido'>
                            <button>Cancelar pedido</button>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}