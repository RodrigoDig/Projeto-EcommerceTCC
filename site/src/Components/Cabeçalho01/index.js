import './index.scss';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

import LupaIcon from '../../assets/images/Lupa-busca.svg';
import Carrinho from '../../assets/images/Carrinho-fase01.svg';
import NumeroIcon from '../../assets/images/Numero Produtos.svg';
import LoginIcon from '../../assets/images/Login-icon-fase01.svg';

export default function Cabecalho1(){
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
                    <Link to='/carrrinho'>
                        <div className='cont-carrinho'>
                            <img src={Carrinho} className='carrinho' />
                            <img src={NumeroIcon} className='numbercar' />
                        </div>
                    </Link>
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