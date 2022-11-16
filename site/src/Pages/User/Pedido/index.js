import React from 'react';
import './index.scss';
import  storage  from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Cabecalho from '../../../Components/Cabeçalho06';
import CabecalhoUser from '../../../Components/CabeçalhoUser';
import CardEndereco from '../../components/CardEndereco';

import User from '../../../assets/images/icon-user.svg';
import Email from '../../../assets/images/email-icon-perfil.svg';
import Location from '../../../assets/images/location-icon.svg';
import Atalho from '../../../assets/images/atalho-icon.svg';
import Coracao from '../../../assets/images/heart-icon-laranja.svg';
import  Atend from '../../../assets/images/atendimento-icon-perfil.svg';
import Pedidos from '../../../assets/images/pedidos-perfil-atalho.svg';

export default function Perfil(){
    const[infoUser, setInfoUser] = useState({ id: [], nome: [], email: [] });
    console.log(infoUser);
    const navigate = useNavigate();

    useEffect(() => {
        if(!storage('user-logado')){
            navigate('/login');
        }
        if(!storage('user-logado')){
            setInfoUser('');
        }else{
            const userLogado = storage('user-logado');
            setInfoUser(userLogado)
        }
    }, [])

    return(
        <main className='cont-main-perfiluser'>
            <section className='cont-cabecalho-perfiluser'>
                <Cabecalho />
            </section>
            <section className='cont-info-userMain'>
                <div className='cont-cabecalho-usuario'>
                    <CabecalhoUser />
                </div>
                <div className='cont-info-usuario'>
                    <div className='cont-fundo-branco'>
                        <div className='cont-nome-email'>
                            <div className='cont-icon-perfil'>
                                <img src={User} className='icone-user'/>
                            </div>
                            <div className='nome-email'>
                                <h1 className='titulo-bemvindo'>
                                    Bem-vindo(a) {infoUser.nome}
                                </h1> 
                                <div className='cont-email'>
                                    <img src={Email}  className='icon-email'/>
                                    <h1 className='email-usuario'>
                                        {infoUser.email}
                                    </h1>
                                </div>

                            </div>
                        </div>
                        <div className='cont-endereco-user'>
                            <div className='cont-titulo-endereco'>
                                <div className='cont-icon-location'>
                                    <img src={Location} className='icone-location'/>
                                </div>
                                <h1 className='titulo-endereco'>
                                    Meus Endereços
                                </h1>
                            </div>
                            <div className='cont-enderecos-cadastrados'>
                                <CardEndereco/>
                                <button className='botao-cadastrar-endereco'>
                                    <h1 className='titulo-botao'>
                                            Cadastrar Endereço
                                    </h1>

                                </button>
                            </div>
                        </div>
                        <div className='cont-atalhos'>
                            <div className='cont-atalhos-titulo'>
                                <img src={Atalho} className='icon-atalho'/>
                                <h1 className='titulo-atalhos'>
                                     Atalhos
                                </h1>
                            </div>
                            <div className='cont-cada-atalho'>
                                <div className='cont-atalho1'>
                                    <img src={Pedidos} className='icon-atalho-pedidos'/>
                                    <h1 className='atalho-meuspedidos'>
                                        Meus Pedidos
                                    </h1>
                                </div>
                                <div className='cont-atalho2'>
                                    <img src={Atend} className='icon-atalho-atend'/>
                                    <h1 className='atalho-atendimento'>
                                        Atendimento ao Cliente
                                    </h1>
                                </div>
                                <div className='cont-atalho3'>
                                    <img src={Coracao} className='icon-atalho-favoritos'/>
                                    <h1 className='atalho-favoritos'>
                                        Favoritos
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}