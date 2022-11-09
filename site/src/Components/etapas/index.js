import './index.scss'
import Carrinho from '../../assets/images/Carrinho-fase01.svg';
import Card from '../../assets/images/icon-addcard.svg';
import User from '../../assets/images/user-icon.svg';
import Pegada from '../../assets/images/pegada-icon.svg';
import Correto from '../../assets/images/correto-icon.svg';

export default function AcessoriosEtapas(){
    return(
        <main>
            <section className='dtnr'>
                <div className='contt'>
                    <img className='ax1x' src={Carrinho} />
                    <div className='tc1'></div>
                    <img className='ax2x' src={Card} />
                    <div className='tc1'></div>
                    <img className='ax3x' src={User} />
                    <div className='tc1'></div>
                    <img className='ax4x' src={Pegada}  />
                    <div className='tc1'></div>
                    <img className='ax5x' src={Correto} />

                </div>
            </section>
        </main>
    )
}