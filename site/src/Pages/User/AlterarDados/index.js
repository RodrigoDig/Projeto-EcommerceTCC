import React from 'react';
import './index.scss';
import Cabecalho03 from '../../../Components/Cabeçalho01';
import User from '../../../assets/images/User.svg';



export default function AlterarDados(){
    return(
        <main className='fundo'>
            <Cabecalho03/>
            <section className='fundo2'>
                
                <img src={User} className='logo-cad-user'/> 
                <h1>Meus Dados</h1>
                <p>Dados Básicos</p> <button>Alterar Senha</button>
                <div className='infos'> 
                    <input type="text" placeholder='Nome Completo  |'/>
                    <input type="text" placeholder='Email  |'/>  
                    <input type="text" placeholder='CPF |' />
                    <input type="text" placeholder='RG  |'/>
                    <input type="text" placeholder='Telefone  |'/>
                    <br/>

                    <div className='Sexualidade'>
                        <p>SEXO</p>
                        <input type="radio" className='inputR'/> <label>Masculino</label>
                    </div>
                    
                    
                    
                
                </div>
            </section>
        </main>
    )
}