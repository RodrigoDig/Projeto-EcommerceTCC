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
            <section onClick={Home} className='cabecalho03'>
                <div onClick={Home} className='cont-logo'>
                    <Logo onClick={Home} className='logo-bt'/>
                </div>

                <h1 className='text-bemvindo'>
                    BEM VINDO NOVAMENTE!
                </h1>

                <img src={LoginIcon} className='login-icon'/>
            </section>
        </main>
    )
}