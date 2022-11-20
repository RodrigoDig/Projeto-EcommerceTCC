import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import LoadingBar from 'react-top-loading-bar';
import { useRef } from 'react';

import { useState } from 'react';
import { useEffect } from 'react';

import exitIcon from '../../assets/images/exit.svg';
import LupaIcon from '../../assets/images/Lupa-busca.svg';
import Carrinho from '../../assets/images/carrin.svg';
import NumeroIcon from '../../assets/images/Numero Produtos.svg';
import LoginIcon from '../../assets/images/Login-icon-fase01.svg';
import storage from 'local-storage';

export default function Cabecalho1(){
    const [infoUser, setInfoUser] = useState('');
    const [carrinhoInf, setCarrinhoInf] = useState([]);
    const [log, setLog] = useState();

    const navigate = useNavigate();
    const ref = useRef();

    function carrinho(){
        navigate('/carrinho');
    }

    function perfil(){
        navigate('/perfil');
    }

    function carregarLogins(){
        let min = Math.ceil(1);
        let max = Math.floor(2);
        let retorno = Math.floor(Math.random() * (max - min + 1)) + min;
        if(retorno === 1){
                return '/login/style1';
        }
        else if(retorno === 2){
                return '/login/style2';
        }
    }
    function carregarLogins2(){
        let min = Math.ceil(1);
        let max = Math.floor(2);
        let retorno = Math.floor(Math.random() * (max - min + 1)) + min;
        if(retorno === 1){
                navigate('/login/style1')
        }
        else if(retorno === 2){
                navigate('/login/style2')
        }
    }

    function somarItensCarrinho(itens){
        let a = itens.length;
        let b = 0;
        for(let i = 0; i < a; i++){
            b = b + Number(itens[i].qtd);
        }
        return b;
    }

    function verificarQtdCarrinho(valor){
        if(valor < 10 && valor > 0){
            return 'number-carrinho'
        }
        else if(valor > 10 && valor <= 98){
            return 'number-carrinho2'
        }
        else if(valor >= 99){
            return 'number-carrinho3'
        }
    }   

    function sairUser(){
        ref.current.complete();
        storage.remove('user-logado');
        setTimeout(() => {
            navigate('/');
        }, 3000)
    }

    useEffect(() =>{
        const carrin = storage('carrinho');
        setCarrinhoInf(carrin);
    }, [])

    function verificar(){
        if(!storage('user-logado')){
            return      <div className='cont-login'>
                        <div className='cont-carrinho'>
                            <img src={Carrinho} className='carrinho' onClick={() => carregarLogins2()} />
                            <div className='bolinha-carrinho' >
                                <p onClick={() => carregarLogins2()} className={verificarQtdCarrinho(1)}>
                                    0
                                   </p>
                            </div>
                        </div>

                        <div className='cont-icon-login'>
                            <img src={LoginIcon} className='icon-login'/>
                            <Link to={carregarLogins()} className='link'>
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
            
        }
        else{
            return  <div className='cont-login'>
                        <div className='cont-carrinho'>
                            <img src={Carrinho} className='carrinho' onClick={carrinho} />
                            <div className='bolinha-carrinho' onClick={carrinho}>
                                <p onClick={carrinho} className={verificarQtdCarrinho(somarItensCarrinho(carrinhoInf))}>
                                    {somarItensCarrinho(carrinhoInf)}
                                </p>
                            </div>
                            </div>
                        <div className='cont-info-userlogado'>
                            <h1 className='titulo-usuario'>
                                Olá {infoUser}
                            </h1>
                            <div className='cont-inicial' onClick={perfil}>
                                <p className='inicial'>
                                    {infoUser[0]}
                                </p>
                            </div>
                            <img src={exitIcon} className='icon-sair' onClick={sairUser}/>
                        </div>
                    </div>
        }
    }

    useEffect(() => {
        if(!storage('user-logado')){
            setInfoUser('');
        }else{
            const userLogado = storage('user-logado');
            setInfoUser(userLogado.nome)
        }
    })
    return(
        <main>
            <LoadingBar color='#af1414' ref={ref} />
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
                {verificar()}
            </section>
        </main>
    )
}