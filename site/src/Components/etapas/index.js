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
                    <img src={Cart} />
                    <img src={Cartao} />
                    <img src={Contato} />
                    <img src={Pes}  />
                    <img src={Checked} />

                </div>
            </section>
        </main>
    )
}