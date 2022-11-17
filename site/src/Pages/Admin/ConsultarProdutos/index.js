import './index.scss';

import {toast} from 'react-toastify';
import {useEffect, useState} from 'react';
import { confirmAlert } from 'react-confirm-alert';

import Cabecalho04 from '../../../Components/Cabeçalho04';
import EstoqueLogo from '../../../assets/images/Caixa-estoquefase01.svg';
import LupaIcon from '../../../assets/images/Lupa-busca.svg';
import Alterar from '../../../assets/images/lapis-de-cor.png';
import Deletar from '../../../assets/images/lixeira-de-reciclagem.png';

import {removerProduto} from '../../../Api/deletarProdutoAPI.js';
import { listarTodosProdutos, buscarProdutoNome, } from '../../../Api/cadProdutoApi';

export default function ConsEstoque() {

    const [produto, setProduto] = useState([]);
    const [filtro, setFiltro] = useState('');

    async function filtrar(){
        const x = await buscarProdutoNome(filtro);
        setProduto(x);
    } 

    async function carregarTodosProdutos() {
        const r = await listarTodosProdutos();
        setProduto(r);
    }

    
    async function deletarProduto(id) {
        
        confirmAlert({
            title: "Remover produto",
            message:"Deseja mesmo remover o produto?",
            buttons:[
                {
                    label:"Sim",
                    onClick: async () =>{

                        const resposta = await removerProduto(id);
                        if(filtro === '')
                            listarTodosProdutos();
                        else
                            filtrar();
                        toast.success("Produto removido com sucesso!");
                    }
                },
                {
                    label: "Não"
                }
            ] 
        })
        
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
                        <img src={EstoqueLogo} className='icon-estoque' />
                        <h1 className='titulo-estoque'>
                            Consultar Produtos
                        </h1>
                    </div>
                    <div className='cont-busca-estoque'>
                        <input className='input-pesquisa-estoque' placeholder='Buscar por nome' value={filtro} onChange={e => setFiltro(e.target.value)}/>
                        <button className='botao-pesquisa-estoque' onClick={filtrar}>
                            <img src={LupaIcon} height={21} width={21} />
                        </button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID Produto</th>
                            <th>ID Departamento</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Desconto</th>
                            <th>Avaliação</th>
                            <th>Fabricante</th>
                            <th>Quantidade</th>
                            <th>Informações</th>
                            <th>Descrição</th>
                            <th>Garantia</th>
                            <th>Opção</th>
                        </tr>
                    </thead>
                    <tbody>

                        {produto.map(item =>
                            <tr>
                                <td>{item.idProduto}</td>
                                <td>{item.idDepartamento}</td>
                                <td>{item.nomeProduto}</td>
                                <td>{item.valorProduto}</td>
                                <td>{item.valorDesconto}</td>
                                <td>{item.avaliacao}</td>
                                <td>{item.fabricante}</td>
                                <td>{item.estoque}</td>
                                <td>{item.informações}</td>
                                <td>{item.descricao}</td>
                                <td>{item.garantia.substr(0, 10)}</td>
                                <td>
                                    <img src={Alterar} />
                                    <img src={Deletar} onClick ={() => deletarProduto(item.idProduto)}/>
                                </td>
                            </tr>

                        )}

                    </tbody>
                </table>
            </section>
        </main>
    )
}