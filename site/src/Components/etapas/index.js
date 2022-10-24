import './index.scss'
import Cart from '../../assets/images/cart.svg';
import Cartao from '../../assets/images/cartao.svg';
import Contato from '../../assets/images/cont.svg';
import Pes from '../../assets/images/foot.svg';
import Checked from '../../assets/images/check.svg';

export default function AcessoriosEtapas(){
    return(
        <main>
            <section>
                <div className='contt'>
                    <img className='ax1x' src={Cart} />
                    <img className='ax2x' src={Cartao} />
                    <img className='ax3x' src={Contato} />
                    <img className='ax4x' src={Pes}  />
                    <img className='ax5x' src={Checked} />

                </div>
            </section>
        </main>
    )
}