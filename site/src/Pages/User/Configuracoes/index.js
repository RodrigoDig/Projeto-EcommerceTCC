import './index.scss';

import User from '../../../assets/images/icon-user.svg';
import Localização from '../../../assets/images/pin-de-localizacao.png';
import Cabeçalho from '../../../Components/CabecalhoCompras';

import { listarUsuarios } from '../../../Api/cadUsuarioApi';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import storage from 'local-storage';

export default function Configuracoes() {
    const [usuario, setUsuario] = useState([]);
    const [infoUser, setInfoUser] = useState();

    const navigate = useNavigate();
    function perfil() {
        navigate('/perfil')
    }
    useEffect(() => {
        if(!storage('user-logado')){
            navigate('/login');
        }
        
        const userLogado = storage('user-logado').id;
        console.log(userLogado);
        setInfoUser(userLogado.id);
    
        async function carregarUsuarios() {
            const [resp] = await listarUsuarios(userLogado);
            setUsuario(resp);
            console.log(resp)
        }

        carregarUsuarios();
    }, [])
    
    

    function alterarUsuario(id) {
        navigate(`/alteraruser/${id}`)
    }

    return (
        <main className='fundo-alterar-dados'>
            <section>
                <Cabeçalho />
            </section>

            <section className='alterar-informações'>
                <div className='informações-user-alt'>
                    <div className='titulo-alterar-dados'>
                        <img src={User} />
                        <h1>Meus Dados</h1>
                    </div>

                    <h2>Dados do usuário:</h2>

                    <div className='inputs-dados-user'>
                            <div >
                                <p>{usuario.usuario}</p>
                                <p>{usuario.sobrenome}</p>
                                <p>{usuario.nascimento}</p>
                                <p>{usuario.genero}</p>
                                <p>{usuario.email}</p>
                                <p>{usuario.cpf}</p>
                                <p>{usuario.celular}</p>
                                <p>{usuario.senha}</p>

                                <button onClick={ () => alterarUsuario(usuario.id)}>Alterar Dados</button>
                            </div>

                    </div>
                </div>                   

                <div className='bloco-endereços-user'>
                    <div className='titulo-endereço-config'>
                        <img src={Localização} />
                        <h1>Endereço</h1>
                    </div>

                    <div className='info-end-user'>
                        <h2>Endereço principal</h2>
                        <span>Logadouro: xxx</span>
                        <span>Número: xx</span>
                        <span>CEP: xxx</span>
                    </div>

                    <button>Alterar endereço</button>

                    <button onClick={perfil}>Voltar ao perfil</button>
                </div>
            </section>
        </main>
    )
}