import './index.scss';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

export default function Cabecalho2(){
    return(
        <main>
            <section className='cabecalho2'>
                <div className='cont-logo'>
                    <Logo className='logo-bt'/>
                </div>
                <img src='/images/login.png' />
            </section>
        </main>
    )
}