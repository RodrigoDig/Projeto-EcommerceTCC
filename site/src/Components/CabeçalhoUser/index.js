import './index.scss';
import { useNavigate } from 'react-router-dom';

import Menu from '../../assets/images/conta-perfil.svg';
import Saida from '../../assets/images/exit-perfil.svg';
import Config from '../../assets/images/config.svg';
import Sacola from '../../assets/images/compras-perfil.svg';
import Carrinho from '../../assets/images/carrinho-preto-perfil.svg';
import Heart from '../..//assets/images/heart-icon.svg';
import Perfil from '../../assets/images/user-perfil.svg';
import Pedido from '../../assets/images/pedidos-perfil.svg';
import Seta from '../../assets/images/seta-compras.svg';

export default function Cabecalho() {
    const navigate = useNavigate();
    function carrinho(){
        navigate('/carrinho')
    }
    function favoritos(){
        navigate('/favoritos')
    }
    function pedido(){
        navigate('/status')
    }
    function perfil(){
        navigate('/perfil')
    }
    function configurações(){
        navigate('/configuracoes')
    }
    function Home(){
        navigate('/')
    }
    return (
            <section className='alinhamento-cabecalho'>
                <h1 className='titulo-perfil'>
                    Informações Pessoais
                </h1>
                <div className='posicionamento-cabecalho' onClick={Home} style={{cursor : "pointer"}}>
                    <img src={Menu}/>
                    <h1>Home</h1>
                </div>
                <div className='posicionamento-cabecalho'>
                    <img src={Perfil}/>
                    <h1 onClick={perfil} style={{cursor: 'pointer'}}>Meu Perfil</h1>
                </div>

                <div className='posicionamento-cabecalho-1'>
                    
                    <div className='posicionamento-cabecalho001'>
                        <img src={Sacola}/>
                        <h1>Compras</h1>
                        <img src={Seta} className='seta-compras'/>
                    </div>

                    <div className='subtopico'>
                        <div className='cont-carrinho1'>
                            <img src={Carrinho}/>
                            <h2 onClick={carrinho} style={{cursor: 'pointer'}}>Carrinho</h2>
                        </div>
                        <div className='cont-carrinho2'>
                            <img src={Heart} />
                            <h2 onClick={favoritos} style={{cursor: 'pointer'}}>Favoritos</h2>
                        </div>
                        <div className='cont-carrinho3'>
                            <img src={Pedido} />
                            <h2 onClick={pedido} style={{cursor: 'pointer'}}>Meus Pedidos</h2>
                        </div>
                    </div>
                </div> 


                <div className='posicionamento-cabecalho2'>
                    <img src={Config}/>
                    <h1 onClick={configurações} style={{cursor: 'pointer'}}>Configurações</h1>
                </div>

                <div className='cont-sair'>
                    <img src={Saida}/>
                    <h1>Sair</h1>
                </div>

            </section>
    )
}