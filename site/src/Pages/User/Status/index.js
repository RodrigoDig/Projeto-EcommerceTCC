import Cabecalho from '../../../Components/Cabeçalho06';
import Cabecalhouser from '../../../Components/CabeçalhoUser';
import Etapa from '../../../Components/EtapasStatus';
import Seta from '../../../assets/images/down.svg';
import './index.scss';


export default function Status() {

    return (
        <main>
            <Cabecalho />
            <Cabecalhouser />
            <section className='fundo'>

                <div className='f2'>
                    <h1>Verifique a Situação da Sua Compra</h1>
                    <Etapa />

                    <hr />

                    <h2>Detalhes da sua Compra</h2>


                    
                        <p>Data Estimada para a Entrega</p>
                        <input type="date"></input>

                    <div className='div1'>
                       
                        <div className='divp'>
                             <p className='p1'>Caso seu produto tenha chegado,
                            nos informe confirmando a entrega. </p>
                        </div>
                        
                        <div className='divb'>
                            <button>Confirmar Entrega</button>
                        </div>
                    
                    </div>

                    <button className='button2'>Por que solicitamos a confirmação da entrega dos produtos? </button>
                    <img className='Seta' src={Seta} />

                </div>


            </section>
        </main>
    )
}