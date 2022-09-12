import './index.scss';
import Logo from '../Logo';

export default function Cabecalho1(){
    return(
        <main>
            <section className='cabecalho1'>
                <div className='cont-pesquisa'>
                    <input className='input-pesquisa' placeholder='O que você procura?'/>
                    <button className='botao-pesquisa'>
                        <img src='/images/Lupa-logo.png' height={21} width={21} />
                    </button>
                </div>
                <div className='cont-logo'>
                    <hr className='linha-cabeçalho'/>
                    <Logo className='logo'/>
                    <hr className='linha-cabeçalho'/>
                </div>
                <div className='cont-login'>

                </div>



                <div  className='linha-laranja'>

                </div>
            </section>
        </main>
    )
}