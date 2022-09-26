import React from 'react';
import './index.scss';
import '../../../assets/images/login-I.png'
import Cabecalho03 from '../../../Components/Cabeçalho03';


export default function Login(){
    return(
        <main>
            <Cabecalho03 />
            <div className='fundo'>Construa seu futuro! 
                                Atravéz da Tecnologia, Junte-se a ByteSpeed</div>

                <section className='CARD'>

                    <label className='UL'>USER LOGIN</label>

                    <div className='infos'>

                             <input type='text' name='Login'/>
                        <label></label>
                            <input type='text' name='Login'/>
                            <label className='LABEL'>ESQUECEU SUA SENHA?</label>
                             <input type='text' name='Login'/>

                    </div>


                    <button className='btn' >Login</button>
                    
                    <label className='LABEL2'> Não possui uma conta? Acesse aqui e cadastre-se</label>
                   


                </section>
        </main>
    )
}