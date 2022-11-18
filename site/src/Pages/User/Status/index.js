import './index.scss';

import Cabecalho from '../../../Components/Cabeçalho06';
import CabecalhoUser from '../../../Components/CabeçalhoUser';
import AcessoriosEtapas from '../../../Components/EtapasStatus';

export default function Status() {

    return (
        <main className='pagina-status-pedido'>
            <section className='cont-cabecalho-perfiluser'>
               <Cabecalho/>
            </section>

            <section className='informações-pedido-user'>
                <div className='cont-cabecalho-usuario'>
                    <CabecalhoUser/>
                </div>

                <div className='informações-pedido-usuario'>
                    <div className='situação-etapas-usertt'>
                        <h1>Verifique a situação da sua compra</h1>
                        <AcessoriosEtapas/>

                    </div>
                    
                    <div className='info-pedido'>
                        <div className='detalhes-compra'>
                            <h1>Detalhe da compra</h1>
                            <img/>
                            <span></span>
                            
                        </div>
                        
                        <hr/>

                        <div className='informações-entrega'>
                            <div className='frete'>
                                <p>O prazo de entrega via Comum tem por padrão o tempo de espera de 2/5 semana a 2/5 mês variando o seu local de residência.</p>
                            </div>

                            <div className='botao-entrega'>
                                <p>Caso seu produto tenha chegado, nos informe confirmando a entrega. </p>
                                <button>Confirmar Entrega</button>
                            </div>

                            <div className='informação-final-status'>
                                <div className='text-status'>
                                    <h1>Por que solicitamos a confirmação da entrega dos produtos?</h1>
                                    <p>Solicitamos a confirmação de entrega de um produto para que alem de conseguirmos ter um controle melhor das entregas que foram feitas, é algo essencial saber se a entrega foi concluida dentro do prazo estabelecido. Isso envolve o cumprimento de nossos valores e caso ocorra algum empecilho durante o transporte, o cliente será rapidamente informado e caso aja necessidade, o prazo de entrega será prorrogado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}