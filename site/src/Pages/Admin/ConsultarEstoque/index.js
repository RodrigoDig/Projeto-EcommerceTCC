import './index.scss';

import { useEffect, useState } from 'react';

import Cabecalho04 from '../../../Components/Cabeçalho04';
import EstoqueLogo from '../../../assets/images/Caixa-estoquefase01.svg';
import LupaIcon from '../../../assets/images/Lupa-busca.svg';
import Alterar from '../../../assets/images/Group.png';
import Deletar from '../../../assets/images/lixeira-de-reciclagem.png';

import { listarTodosProdutos, buscarProdutoNome } from '../../../Api/cadProdutoApi';

export default function ConsEstoque(){

    const [produto, setProduto] = useState([]);

    async function carregarTodosProdutos(){
        const r = await listarTodosProdutos();
        setProduto(r);
    }

    useEffect(() => {
        carregarTodosProdutos();
    }, [])

    return (
        <main className='cont-main-estoque'>
            <section className='cont-cabecalho-estoque'>
                <Cabecalho04 />
            </section>
            <section className='cont-001-estoque'>
                <div className='cont-titulo-busca'>
                    <div className='cont-titulo-estoque'>
                        <img src={EstoqueLogo} className='icon-estoque'/>
                        <h1 className='titulo-estoque'>
                            Consultar Estoque
                        </h1>
                    </div> 
                    <div className='cont-busca-estoque'>
                        <input className='input-pesquisa-estoque' placeholder='Buscar por ID'/>
                        <button className='botao-pesquisa-estoque'>
                            <img src={LupaIcon} height={21} width={21} />
                        </button>
                    </div>
                </div>
                <table>
                    <thead>
                       <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Desconto</th>
                            <th>Avaliação</th>
                            <th>Fabricante</th>
                            <th>Quantidade</th>
                            <th>Informações</th>
                            <th>Descrição</th>
                            <th>Garantia</th>
                        </tr> 
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Cooler brabo</td>
                            <td>520</td>
                            <td>10</td>
                            <td>5</td>
                            <td>ryzen</td>
                            <td>60</td>
                            <td>coler brabo dms, muito tops</td>
                            <td>coler movido a vapor do pc com bateria recarregavel</td>
                            <td>01/01/2024</td>
                            <td>
                                <img src={Alterar}/>
                                <img src={Deletar}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}