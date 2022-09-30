import './index.scss';
import Cabecalho04 from '../../../Components/Cabeçalho04';
import LupaIcon from '../../../assets/images/Lupa-busca.svg';
import Caminhão from '../../../assets/images/Caminhão-fase01.svg'


export default function ConsultarPedido() {
    return (
        <main>
            <div className='cabecalho'> <Cabecalho04/> </div>

                 <div className='Pesquisa'>
                    <input className='input-pesquisa-estoque' placeholder='|    Buscar por ID' />
                    <button className='botao-pesquisa-estoque'>
                        <img src={LupaIcon} height={21} width={21} />
                    </button>
                </div>


            <section className='style'>

                <div className='CSTP'>
                    <img src={Caminhão} className='Caminhao' />
                    <label>Consultar Pedidos</label>
                </div>

                <div className='caracteris'>
                    <label>ID</label>
                    <label>Cliente</label>
                    <label>Produto</label>
                    <label>Status de Entrega</label>
                    <label>Valor</label>
                    <label>Data</label>
                    <label>Forma de Pagamento</label>
                    <label>Ações</label>
                </div>




            </section>
        </main>
    )
}