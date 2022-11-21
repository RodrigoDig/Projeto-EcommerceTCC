import './index.scss';
import React, { useState } from 'react';
import Logo from '../Logo';

import FaceIcon from '../../assets/images/face-icon.svg';
import TwiterIcon from '../../assets/images/twiterr-logo.svg';
import InstagramIcon from '../../assets/images/instagram-logo.svg';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { listarDepartamentos } from '../../Api/departamentoApi';
//import { Link, animateScroll as scroll } from "react-scroll";

export default function Rodape(){
    const navigate = useNavigate();
    const ref = useRef();
    const [comp, setComp] = useState('Computadores')
    const [gam, setGam] = useState('Games')
    const [har, setHar] = useState('Hardware')
    function carrinho(){
        navigate('/carrinho')
    }
    function atendimento(){
        navigate('/favoritos')
    }
    function pedidos(){
        navigate('/status')
    }

    function home(){
        navigate('/');
    }

    function depart(nome){
        if(nome === 'Hardware'){
            navigate('/departamentos/' + 3)
        }
        else if(nome === 'Computadores'){
            navigate('/departamentos/' + 1)
        }
        else if(nome === 'Games'){
            navigate('/departamentos/' + 2)
        }
    }

    return(
        <main>
            <section className='fundo-rodape'>
                <div className='componentes-1'>
                    <div className='cont-titulo-construa'>
                        <h1 className='titulo-construa'>Construa seu futuro...</h1>
                    </div>
                    <div className='espacamento-coluna'>
                        <div className='coluna01'>
                            <h2 className='titulo-desenv'>Desenvolvedores</h2>
                            <a href='https://github.com/ArthuMSS' className='link-desenv'>Arthur</a>
                            <a href='https://github.com/MenorCp' className='link-desenv'>Cauã</a>
                            <a href='https://github.com/Jgomesc' className='link-desenv'>João Pedro</a>
                            <a href='https://github.com/RodrigoDig' className='link-desenv'>Rodrigo</a>
                        </div>
                        
                        <div className='coluna02'>
                            <h2 className='titulo-empresa'>Empresas</h2>
                            <p className='link-desenv'>Sobre</p>
                            <p className='link-desenv'>Emprego</p>
                            <p className='link-desenv'>Afiliados</p>
                            <p className='link-desenv'>Marca</p>
                        </div>

                        <div className='coluna03'>                            
                            <h2 className='titulo-empresa'>Minha Conta</h2>
                            <a onClick={carrinho} className='link-desenv'>Carrinho</a>
                            <a onClick={atendimento} className='link-desenv'>Favoritos</a>
                            <a onClick={pedidos} className='link-desenv'>Meus pedidos</a>
                        </div> 

                        <div className='coluna04'>
                            <h2 className='titulo-desenv'>Política</h2>
                            <p className='link-desenv'>Termos</p>
                            <p className='link-desenv'>Privacidade</p>
                            <p className='link-desenv'>Licenças</p>
                            <p className='link-desenv'>Garantia</p>
                        </div>

                        <div className='coluna05'>
                            <h2 className='titulo-desenv'>Departamentos</h2>
                            <p onClick={() => depart(har)} className='link-desenv'>Hardware</p>
                            <p onClick={() => depart(comp)} className='link-desenv'>Computadores</p>
                            <p onClick={() => depart(gam)} className='link-desenv'>Games</p>
                        </div>                
                        
                    </div>

                </div>

                <div className='componentes-2'>
                    <div className='espacamento-imgs'>
                        <div className='cont-icons'>
                            <img alt='facebook' className='icons-rodape' src={FaceIcon} />
                            <img alt='twitter' className='icons-rodape' src={TwiterIcon} />
                            <img alt='instagram' className='icons-rodape' src={InstagramIcon} />
                        </div>
                        <div className='cont-icons-pagamento'>

                        </div>
                    </div>
                    <div className='cont-botao-logo'>
                        <div className='cont-logo-final'>
                            <Logo/>
                        </div>
                        <button className='botao-voltar-inicio' onClick={home}>Voltar ao início</button>
                    </div>
                </div>
            </section>
        </main>
    )
}