import './index.scss';
import LogoMenor from '../LogoMenor';
import CupomLogo from '../../assets/images/cupom.svg';

export default function Cabecalho04(){
    return(
        <main className='cont-main-c4'>
            <div className='cont-logo'>
                <LogoMenor />
            </div>
            <div className='cont-01'>
                <h1 className='txt-cadastro-01'>
                    Cadastro
                </h1>
            </div>
            <div className='cont-02'>
                <img src='/images/Bolsa Compras fase-1.png' className='img-cont-02' />
                <h2 className='txt-cont-02'>
                    Cadastrar Produto
                </h2>
            </div>
            <div className='cont-03'>
            <img src='/images/Icon-alterar-fase1.png' className='img-cont-03' />
                <h2 className='txt-cont-03'>
                    Alterar Produto
                </h2>
            </div>
            <div className='cont-04'>
                <h1 className='txt-cont-04'>
                    Consulta
                </h1>
            </div>
            <div className='cont-05'>
                <img src='/images/icon-caminhao-fase1.png' className='img-cont-05' />
                <h2 className='txt-cont-05'>
                    Consultar Pedidos
                </h2>
            </div>
            <div className='cont-06'>
                <img src='../' className='img-cont-06' />
                <h2 className='txt-cont-06'>
                    Consultar Estoque
                </h2>
            </div>
            <div className='cont-07'>
                <h1 className='txt-cont-07'>
                    Cupons
                </h1>
            </div>
            <div className='cont-08'>
                <img src={CupomLogo} className='img-cont-08'/>
                <h2 className='txt-cont-06'>
                    Consultar Estoque
                </h2>
            </div>
            <div className='cont-09'>

            </div>
            <div className='cont-sair'>

            </div>
        </main>
    )
}