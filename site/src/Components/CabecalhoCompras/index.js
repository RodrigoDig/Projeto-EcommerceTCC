import Logo from '../Logo';
import Galaxia from '../../assets/images/via-lactea.png';

import { useNavigate } from 'react-router-dom';

export default function Cabecalho3(){
    const navigate = useNavigate();
    function Home(){
        navigate('/');
    }

    return(
        <main>
            <section className='cabecalho03'>
                <div className='cont-logo'>
                    <Logo className='logo-bt'/>
                </div>
                <img onClick={Home} src={Galaxia} className='login-icon'/>
            </section>
        </main>
    )
}