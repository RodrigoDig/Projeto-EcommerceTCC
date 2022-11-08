import Cabecalho from '../../../Components/Cabeçalho06';
import Cabecalhouser from '../../../Components/CabeçalhoUser';
import './index.scss';

export default function Atendimento(){

    return(
        <main>
            <Cabecalho/>
            <Cabecalhouser/>
            <section className='fundo'>
               <div className='f2'>
                    <h1>Verifique a Situação da Sua Compra</h1>
               </div>
            </section>
        </main>
    )
}