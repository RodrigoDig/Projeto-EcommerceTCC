import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo';

import LupaIcon from '../../assets/images/Lupa-busca.svg';
import Carrinho from '../../assets/images/Carrinho-fase01.svg';
import NumeroIcon from '../../assets/images/Numero Produtos.svg';
import LoginIcon from '../../assets/images/Login-icon-fase01.svg';
import { Navigate } from 'react-router-dom';

export default function Cabecalho1(){
    const navigate = useNavigate();
    function carrinho(){
        navigate('/carrinho')
    }
    return(
        <main>
            <section className='cabecalho1'>
                <div className='cont-pesquisa'>
                    <input className='input-pesquisa' placeholder='O que você procura?'/>
                    <button className='botao-pesquisa'>
                        <img src={LupaIcon} height={21} width={21} />
                    </button>
                </div>
                <div className='cont-logo'>
                    <hr className='linha-cabeçalho'/>
                    <Logo className='logo'/>
                    <hr className='linha-cabeçalho'/>
                </div>
                <div className='cont-login'>

                    <div className='cont-carrinho'>
                        <img src={Carrinho} className='carrinho' onClick={carrinho} />
                        <img src={NumeroIcon} className='numbercar' />
                    </div>

                    <div className='cont-icon-login'>
                        <img src={LoginIcon} className='icon-login'/>
                        <Link to='/login' className='link'>
                            <h2 className='text-login'>
                                Login
                            </h2>
                        </Link>
                    </div>

                    <Link className='link' to='/cadastrouser'>
                        <button className='botao-cadastro'>
                            Cadastrar
                        </button>
                    </Link>     
                </div>

      

                <div  className='linha-laranja'>

                </div>
            </section>
        </main>
    )
}