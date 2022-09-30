import './index.scss';

import { useState } from 'react';

import Cabecalho04 from '../../../Components/Cabeçalho04';
import EstoqueLogo from '../../../assets/images/Caixa-estoquefase01.svg';
import LupaIcon from '../../../assets/images/Lupa-busca.svg';

export default function ConsEstoque(){

    const [produtos, setProdutos] = useState([]);

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
                <div className='cont-info-produtos'>
                    <h2 className='info-id-produto'>
                        Id
                    </h2>
                    <h2 className='info-foto-produto'>
                        Foto
                    </h2>
                    <h2 className='info-produto-estoque'>
                        Produto
                    </h2>
                    <h2 className='info-qtd-produto'>
                        Quantidade
                    </h2>
                    <h2 className='info-avaliacao-produto'>
                        Avaliação
                    </h2>
                    <h2 className='info-preco-produto'>
                        Preço
                    </h2>
                    <h2 className='info-categorias-produto'>
                        Categorias
                    </h2>
                </div>
                <div className='cont-produtos-estoque'>
                    {}
                </div>
            </section>
        </main>
    )
}