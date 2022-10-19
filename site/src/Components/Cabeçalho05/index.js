import './index.scss';
import Logo from '../Logo';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '../../assets/images/login.png';

export default function Cabecalho3(){

    const navigate = useNavigate();

    function Home(){
        navigate('/');
    }

    return(
        <main>
            <section className='cabecalho2'>
                <div onClick={Home} className='cont-logo'>
                    <Logo className='logo-bt'/>
                </div>

                <img src={LoginIcon} className='login-icon'/>
            </section>
        </main>
    )
}