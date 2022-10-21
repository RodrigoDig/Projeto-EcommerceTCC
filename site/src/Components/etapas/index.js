import './index.scss'
import Card from '../../assets/images/cart.svg';
import Cartao from '../../assets/images/cartao.svg';
import User from '../../assets/images/cont.svg';
import Pes from '../../assets/images/foot.svg';
import Check from '../../assets/images/check.svg';

export default function AcessoriosEtapas(){
    return(
        <main>
            <section>
                <div className='contt'>
                    <img src={Card} className='ads1' />
                    <img src={Cartao} className='ads2' />
                    <img src={User} className='ads3' />
                    <img src={Pes} className='ads4' />
                    <img src={Check} className='ads5' />

                </div>
            </section>
        </main>
    )
}