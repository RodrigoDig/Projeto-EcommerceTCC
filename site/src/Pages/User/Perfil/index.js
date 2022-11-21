import {React} from 'react';
import './index.scss';
import  storage  from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Cabecalho from '../../../Components/Cabeçalho06';
import CabecalhoUser from '../../../Components/CabeçalhoUser';
import CardEndereco from '../../components/CardEndereco';

import { listar } from '../../../Api/enderecoApi';
import User from '../../../assets/images/icon-user.svg';
import Email from '../../../assets/images/email-icon-perfil.svg';
import Location from '../../../assets/images/location-icon.svg';
import Atalho from '../../../assets/images/atalho-icon.svg';
import Coracao from '../../../assets/images/heart-icon-laranja.svg';
import  Atend from '../../../assets/images/atendimento-icon-perfil.svg';
import Pedidos from '../../../assets/images/pedidos-perfil-atalho.svg';
import Modal from '../../../Components/ModalEnd';

export default function Perfil(){
    const[infoUser, setInfoUser] = useState({ id: [], nome: [], email: [] });
    const [endereco, setEndereco] = useState([]);
    console.log(endereco);
    const [exibirEndereço, setExibirEndereço] = useState(false);
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


    function verificarEnderecos(){
        let a = endereco.length;
        if(a === 2){
            return <div className='cont-enderecos-cadastrados'>
                        {endereco.map(item =>
                            <CardEndereco item = {item}/>
                        )}
                    </div>
        }else {
            return  <div className='cont-enderecos-cadastrados'>
                        {endereco.map(item =>
                            <CardEndereco item = {item}/>
                        )}
                        <button className='botao-cadastrar-endereco'>
                            <h1 className='titulo-botao' onClick={exibirNovoEnd}>
                                    Cadastrar Endereço
                            </h1>

                        </button>
                    </div>
        }
    }

    async function carregarEnd(){
        const id = storage('user-logado').id;
        const r = await listar(id);
        setEndereco(r);
    }
    function exibirNovoEnd(){
        setExibirEndereço(true);
    }
    function fecharEnd(){
        setExibirEndereço(false);
        carregarEnd();
    }

    function alterar(){
        navigate('/configuracoes')
    }

    function favoritos(){
       navigate('/favoritos') 
    }

    useEffect(() => {
        carregarEnd();
    }, [])

    return(
        <main className='cont-main-perfiluser'>
            <Modal exibir={exibirEndereço} fechar={fecharEnd} />
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

                            <p onClick={alterar}>Alterar Dados</p>
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
                            {verificarEnderecos()}
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
                                <div className='cont-atalho3' onClick={() => favoritos()}>
                                    <img src={Coracao} className='icon-atalho-favoritos' onClick={() => favoritos()}/>
                                    <h1 className='atalho-favoritos' onClick={() => favoritos()}>
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