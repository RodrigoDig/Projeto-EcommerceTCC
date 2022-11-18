import './index.scss'

import Casa from '../../assets/images/casinha.svg';
import Caminhao from '../../assets/images/caminhao-de-entrega 1.svg';
import Caminho from '../../assets/images/caminho.png';
import Chegada from '../../assets/images/verificar.png';
import Linha from '../../assets/images/menos-linha-reta-horizontal.png';

export default function AcessoriosEtapas(){
    return(
        <main>
            <section className='status-pedido'>
                <img className='ax1x' src={Casa} />
                <img className='ax2x' src={Linha} />
                <img className='ax1x' src={Caminhao} />
                <img className='ax2x' src={Linha} />
                <img className='ax1x' src={Caminho} />
                <img className='ax2x' src={Linha} />
                <img className='ax1x' src={Chegada}  />

            </section>
        </main>
    )
}