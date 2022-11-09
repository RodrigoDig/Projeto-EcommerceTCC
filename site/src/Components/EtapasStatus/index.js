import './index.scss'
import Casa from '../../assets/images/casinha.svg';
import Caminhao from '../../assets/images/caminhao-de-entrega 1.svg';
import Local2 from '../../assets/images/Local2.svg';
import Check from '../../assets/images/Checked.svg';


export default function AcessoriosEtapas(){
    return(
        <main>
            <section className='dtnr'>
                <div className='contt'>
                    <img className='ax1x' src={Casa} />
                    <div className='tc1'></div>
                    <img className='ax2x' src={Caminhao} />
                    <div className='tc1'></div>
                    <img className='ax3x' src={Local2} />
                    <div className='tc1'></div>
                    <img className='ax4x' src={Check}  />
                   
                    
                </div>
            </section>
        </main>
    )
}