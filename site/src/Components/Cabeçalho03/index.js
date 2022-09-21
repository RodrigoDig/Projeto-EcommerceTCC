import './index.scss';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

import LoginIcon from '../../assets/images/login.png';

export default function Cabecalho3(){
    return(
        <main>
            <section className='cabecalho2'>
                <div className='cont-logo'>
                    <Logo className='logo-bt'/>
                </div>

                <h1 className='text-bemvindo'>
                    BEM VINDO NOVAMENTE!
                </h1>

                <img src={LoginIcon} className='login-icon'/>
            </section>
        </main>
    )
}