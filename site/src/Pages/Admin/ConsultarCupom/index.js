import Cabecalho04 from "../../../Components/Cabeçalho04"
import CupomLogo from '../../../assets/images/cupom (1).png';
import LupaIcon from '../../../assets/images/Lupa-busca.svg';
import Alterar from '../../../assets/images/lapis-de-cor.png';
import Deletar from '../../../assets/images/lixeira-de-reciclagem.png';

import {toast} from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { useEffect, useState } from "react";
import { listarCupons, buscarNome, deletarCupom} from "../../../Api/cadCupomAPI";

export default function ConsultarCupom() {

    const [cupom, setCupom] = useState([]);
    const [filtrin, setFiltrin] = useState('');
    
    async function filtrar(){
        const x = await buscarNome(filtrin);
        setCupom(x);
    }

    async function carregarCupons() {
        const resp = await listarCupons();
        setCupom(resp);
    }

    async function removerCupom(id) {
        confirmAlert({
            title: "Remover cupom",
            message: "Deseja remover o cupom?",
            buttons:[
                {
                    label: "Sim",
                    onClick: async () => {
                        const resposta = await deletarCupom(id);
                        if(filtrin === '')
                            listarCupons(id);
                        else
                            filtrar();
                        toast.success("Cupom removido com sucesso!")
                    }
                },
                {
                    label: "Não"
                }
            ]
        })
    }

    useEffect(() => {
        carregarCupons();
    }, [])

    return (
        <main className='cont-main-estoque'>
            <section className='cont-cabecalho-estoque'>
                <Cabecalho04 />
            </section>
            <section className='cont-001-estoque'>
                <div className='cont-titulo-busca'>
                    <div className='cont-titulo-estoque'>
                        <img src={CupomLogo} className='icon-estoque' />
                        <h1 className='titulo-estoque'>
                            Consultar Cupons
                        </h1>
                    </div>
                    <div className='cont-busca-estoque'>
                        <input className='input-pesquisa-estoque' placeholder='Buscar por nome' value={filtrin} onChange={e => setFiltrin(e.target.value)} />
                        <button className='botao-pesquisa-estoque' onClick={filtrar}>
                            <img src={LupaIcon} height={21} width={21} />
                        </button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID Cupom</th>
                            <th>Nome</th>
                            <th>Código</th>
                            <th>Valor</th>
                            <th>Inscrição</th>
                            <th>Vencimento</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cupom.map(item =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.codigo}</td>
                                <td>{item.valor}</td>
                                <td>{item.cadastro.substr(0, 10)}</td>
                                <td>{item.vencimento.substr(0, 10)}</td>
                                <td>
                                    <img src={Alterar} />
                                    <img src={Deletar} onClick ={() => removerCupom(item.id)}/>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </main>
    )
}