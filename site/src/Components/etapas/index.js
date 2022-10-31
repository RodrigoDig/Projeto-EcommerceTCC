import './index.scss'
import Cart from '../../assets/images/cart.svg';
import Cartao from '../../assets/images/cartao.svg';
import Contato from '../../assets/images/cont.svg';
import Pes from '../../assets/images/foot.svg';
import Checked from '../../assets/images/check.svg';

export default function AcessoriosEtapas(){
    return(
        <main>
            <section className='dtnr'>
                <div className='contt'>
                    <img className='ax1x' src={Cart} />
                    <div className='tc1'></div>
                    <img className='ax2x' src={Cartao} />
                    <div className='tc1'></div>
                    <img className='ax3x' src={Contato} />
                    <div className='tc1'></div>
                    <img className='ax4x' src={Pes}  />
                    <div className='tc1'></div>
                    <img className='ax5x' src={Checked} />

                </div>
            </section>
        </main>
    )
}