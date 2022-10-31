import './index.scss';
import { useNavigate } from 'react-router-dom';

import Menu from '../../assets/images/cardapio.png';
import Saida from '../../assets/images/sair (1).png';
import Config from '../../assets/images/opcao 3.png';
import Sacola from '../../assets/images/sacolas-de-compras.png';
import Perfil from '../../assets/images/perfil 3.png';

export default function Cabecalho() {
    const navigate = useNavigate();
    function carrinho(){
        navigate('/carrinho')
    }
    function favoritos(){
        navigate('/favoritos')
    }
    function pedido(){
        navigate('/pedido')
    }
    function perfil(){
        navigate('/perfil')
    }
    function configurações(){
        navigate('/configuracoes')
    }
    return (
        <main>
            <section className='alinhamento-cabecalho'>
                <div className='posicionamento-cabecalho'>
                    <img src={Menu}/>
                    <h1>Minha conta</h1>
                </div>

                <div className='posicionamento-cabecalho-1'>
                    
                    <div className='alinhamento-sacola'>
                        <img src={Sacola}/>
                        <h1>Compras</h1>
                    </div>

                    <div className='subtopico'>
                        <h2 onClick={carrinho} style={{cursor: 'pointer'}}>-Carrinho</h2>
                        <h2 onClick={favoritos} style={{cursor: 'pointer'}}>-Favoritos</h2>
                        <h2 onClick={pedido} style={{cursor: 'pointer'}}>-Meus Pedidos</h2>
                    </div>
                </div> 

                <div className='posicionamento-cabecalho'>
                    <img src={Perfil}/>
                    <h1 onClick={perfil} style={{cursor: 'pointer'}}>Meu Perfil</h1>
                </div>

                <div className='posicionamento-cabecalho'>
                    <img src={Config}/>
                    <h1 onClick={configurações} style={{cursor: 'pointer'}}>Configurações</h1>
                </div>

                <div className='posicionamento-cabecalho'>
                    <img src={Saida}/>
                    <h1>Sair</h1>
                </div>

            </section>
        </main>
    )
}