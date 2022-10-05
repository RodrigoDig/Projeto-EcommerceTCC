import './index.scss';

import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';

import LogoMenor from '../LogoMenor';
import CupomLogo from '../../assets/images/Cupom-fase01.svg';
import Caminhaologo from '../../assets/images/Caminhão-fase01.svg';
import CaixaLogo from '../../assets/images/Caixa-estoquefase02.svg';
import AlterarCPLogo from '../../assets/images/Alterar-Cupom-fase01.svg';
import SairLogo from '../../assets/images/Sair-fase01.svg';
import CadProdLogo from '../../assets/images/Cad-Prodfase01.svg';
import AltProdLogo from '../../assets/images/Alterar-produtofase01.svg';

export default function Cabecalho04(){

    const navigate = useNavigate();

    function sairClick(){
        storage.remove('admin-logado');
        navigate('/loginadm')
    }

    function cadProd(){
        navigate('/CadastroProduto')
    }

    function consultEsto(){
        navigate('/estoque')
    }

    return(
        <main className='cont-main-c4'>
            <div className='cont-logo'>
                <LogoMenor />
            </div>
            <div className='cont-001'>
                <h1 className='txt-cadastro-01'>
                    Cadastro
                </h1>
            </div>
            <div className='cont-002'>
                <img src={CadProdLogo} className='img-cont-02' />
                <h2 className='txt-cont-02' onClick={cadProd} style={{cursor: 'pointer'}}>
                    Cadastrar Produto
                </h2>
            </div>
            <div className='cont-003'>
            <img src={AltProdLogo} className='img-cont-03' />
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
                <img src={Caminhaologo} className='img-cont-05'/>
                <h2 className='txt-cont-05'>
                    Consultar Pedidos
                </h2>
            </div>
            <div className='cont-06'>
                <img src={CaixaLogo} className='img-cont-06' />
                <h2 className='txt-cont-06' onClick={consultEsto} style={{cursor: 'pointer'}}>
                    Consultar Produtos
                </h2>
            </div>
            <div className='cont-07'>
                <h1 className='txt-cont-07'>
                    Cupons
                </h1>
            </div>
            <div className='cont-08'>
                <img src={CupomLogo} className='img-cont-08'/>
                <h2 className='txt-cont-08'>
                    Adicionar Cupom
                </h2>
            </div>
            <div className='cont-09'>
            <img src={AlterarCPLogo} className='img-cont-09'/>
                <h2 className='txt-cont-08'>
                    Alterar Cupom
                </h2>
            </div>
            <div className='cont-sair'>
            <img src={SairLogo} className='img-cont-sair'/>
                <h2 className='txt-cont-08' onClick={sairClick} style={{cursor: 'pointer'}}>
                    Sair
                </h2>
            </div>
        </main>
    )
}