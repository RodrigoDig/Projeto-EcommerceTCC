import './index.scss';
import { Link } from 'react-router-dom';
import Logo from '../LogoMenor';
import Logouser from '../../../src/assets/images/login.png';

export default function Cabecalho2(){
    return(
        <main>
            <section className='cabecalho2resp'>
                <div className='cont-logo'>
                    <Logo className='logo-bt'/>
                </div>
                <div className='cont-login'>
                    <img src={Logouser}  className='icon-user'/>
                </div>
            </section>
        </main>
    )
}