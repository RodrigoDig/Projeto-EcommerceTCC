import { useNavigate } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar';
import  { useState ,useRef, useEffect } from 'react';

import storage from 'local-storage';
import './index.scss';
import Cabecalho3 from '../../../Components/Cabeçalho03';
import FogueteLogo from '../../../assets/images/Foguete-logo-branco.svg';
import CadeadoLogo from '../../../assets/images/Cadeado-senha-adm.png'
import LoginIcon from '../../../assets/images/icon-login-adm.png'
import loginadm from '../../../Api/loginAdm.js';

export default function LoginAdm(){

    document.addEventListener("keypress", function(e) {
        if(e.key === 'Enter') {
        
            var btn = document.querySelector("#botaologar");
          
          btn.click();
        
        }
      });
    
    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if(storage('admin-logado')){
            navigate('/')
        }
    }, [])
    
    async function entrarClick(){
        ref.current.continuousStart();
        setCarregando(true);

        try{
            const r = await loginadm(email, senha);
            storage('admin-logado', r);

            setTimeout(() => {
                navigate('/CadastroProduto');
            }, 2500)
        } 
        catch(err){
            ref.current.complete();
            setCarregando(false)
            if(err.response.status === 401){
                setErro(err.response.data.erro);
            }
        }
    } 

    return(
        <main className="cont-main-prod">
            <LoadingBar color='#f11946' ref={ref} />
            <section className='cabecalho'>
                <Cabecalho3 />
            </section>
            <section className="cont-login">
                <div className='cont-info-login'>
                    <div className='cont-01'>
                        <h1 className='text-cont01'>
                            ADMIN LOGIN 
                        </h1>
                    </div>
                    <div className='cont-02'>
                        <img src={LoginIcon}  width={38} height={38} className='img-login-adm'/>
                        <h2 className='text-02'>
                            User
                        </h2>
                    </div>
                    <input className='input-user' placeholder='Digite seu e-mail' value={email} onChange={e => setEmail(e.target.value)} />
                    <div className='cont-03'>
                        <img src={CadeadoLogo}  width={30} height={30} className='img-login-adm' />
                        <h2 className='text-03'>
                            Senha
                        </h2>
                    </div>
                    <input className='input-senha' type="password" placeholder='****' value={senha} onChange={e => setSenha(e.target.value)}/>
                    <h1 className='erro'>
                        {erro}
                    </h1>
                    <button className='botao-entrar' onClick={entrarClick} disabled={carregando} id='botaologar'>
                            Entrar
                    </button>
                </div>
                <div className='cont-logo-final'>
                    <img src={FogueteLogo} />
                </div>
            </section>
        </main>
    )
}