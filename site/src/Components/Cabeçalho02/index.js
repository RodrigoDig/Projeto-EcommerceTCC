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
                <div className='cont-login'>
                    <img src='/images/login.png' />
                    <p className='text-user'>
                        Bem vindo user001
                    </p>
                </div>
            </section>
        </main>
    )
}