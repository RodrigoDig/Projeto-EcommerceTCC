import './index.scss';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import LupaIcon from '../../assets/images/Lupa-busca.svg';
import Logouser from '../../../src/assets/images/login.png';
import Carrin from '../../assets/images/cart.svg';

export default function Cabecalho2(){
    return(
        <main>
            <section className='cb-02'>
                <div className='cont-lg'>
                    <Logo className='lg-bt'/>
                </div>
                <div className='cb-r'></div>
                <div className='alin'>
                    <p className='p1'> Compre por departamento</p>
                </div>
                <div className='cont-pqs'>
                    <input className='input-pqs' placeholder='Busque aqui'/>
                    <button className='botao-pqs'>
                        <img src={LupaIcon} height={21} width={21} />
                    </button>
                </div>
               
                <div className='cont-lgn'>
                    <img className='ibc' src={Carrin} />
                    <img src={Logouser}  className='icon-login'/>
                </div>
            </section>
        </main>
    )
}