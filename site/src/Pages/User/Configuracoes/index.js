import './index.scss';

import User from '../../../assets/images/icon-user.svg';
import Localização from '../../../assets/images/pin-de-localizacao.png';

import { alterarUsuario } from '../../../Api/cadUsuarioApi';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

import Cabeçalho from '../../../Components/CabecalhoCompras';
import { useState } from 'react';

export default function Configuracoes(){
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState();
    const [genero, setGenero] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [id, setId] = useState(0);

    const navigate = useNavigate();
    function perfil(){
        navigate('/perfil')
    }

    async function alterarUser(){
        try{
            if(id != 0){
                const alterar = await alterarUsuario(id);
                setId(alterar.id);
                toast.success('Usuário alterado com sucesso!')
            }
            else{
                return "Usuário não pode ser alterado!"
            }
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    return(
        <main className='fundo-alterar-dados'>
            <section>
                <Cabeçalho/>
            </section>

            <section className='alterar-informações'>
                <div className='informações-user-alt'>
                    <div className='titulo-alterar-dados'>
                        <img src={User}/>
                        <h1>Meus Dados</h1>
                    </div>

                    <h2>Dados do usuário:</h2>

                    <div className='inputs-dados-user' style={{width : "8em"}}>
                        <input type='text' placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)}/>
                        <input type='text' placeholder='Sobrenome' value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
                        <input type='date' placeholder='Nascimento' value={nascimento} onChange={e => setNascimento(e.target.value)}/>
                        <input type='text' placeholder='Gênero' value={genero} onChange={e => setGenero(e.target.value)}/>
                        <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type='text' placeholder='Celular' value={celular} onChange={e => setCelular(e.target.value)}/>
                        <input type='text' placeholder='Cpf' value={cpf} onChange={e => setCpf(e.target.value)}/>
                        <input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>

                        <button>Salvar Alterações</button>
                    </div>
                </div>

                <div className='bloco-endereços-user'>
                    <div className='titulo-endereço-config'>
                        <img src={Localização}/>
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