import React, { useEffect, useState } from 'react';
import './index.scss';

import Cabecalho01 from '../../../Components/Cabeçalho01';
import Rodape from '../../../Components/Rodapé';


import { prodPromoImperdivel, prodMaisVendidos, depSelecionar} from '../../../Api/cadProdutoApi';

import Controle from '../../../assets/images/Controle-icon.svg'; 
import TrofeuIcon from '../../../assets/images/Trofeu-icon.svg';
import SeloIcon from '../../../assets/images/Selo-icon.svg';
import RelogioIcon from '../../../assets/images/Relogio-icon.svg';
import FogoIcon from '../../../assets/images/Fogo-icon.svg';
import DepartamentoIcon from '../../../assets/images/Departamento-icon.svg';
import FogueteRec from '../../../assets/images/foguete-recomandados.svg';
import CardProduto from '../../components/CardPromo';
import CardMaisVendidos from '../../components/CardMaisVendido';

export default function Home() {
    const [produtos, setProdutosPromo] = useState([]);
    const [prodmaisVendidos, setMaisVendidos] = useState([]);
    const [departamento, setDepartamentos] = useState([]);

    
    async function maisVendidos() {
        const resp = await prodMaisVendidos();
        setMaisVendidos(resp);
    }

    async function depSelecionado() {
        const resposta = await depSelecionar();
        setDepartamentos(resposta);
    }

    async function produtoPromo() {
        const resp = await prodPromoImperdivel();
        setProdutosPromo(resp);
    }

        useEffect(() => {
            produtoPromo();
            maisVendidos(); 
            depSelecionado();
        })


    return (
        <main className='cont-main-home'>
            <section className='cont-cabecalho-home'>
                <Cabecalho01 />
            </section>
            <section className='cont-001-home'>
                <div className='cont-filha1-001'>
                    <h3 className='titulo-01-home'>
                        OS MELHORES PRODUTOS PARA O SEU PC GAMER
                    </h3>
                    <img src={Controle} className='controle-icon-home' />
                </div>
                <div className='cont-filha2-001'>
                    <img src={TrofeuIcon} className='trofeu-icon-home' />
                    <h3 className='titulo-02-home'>
                        PRIMEIRA COLOCADA EM
                        VENDAS
                        DE PEÇAS DE HARDWARE
                    </h3>
                </div>
                <div className='cont-filha3-001'>
                    <h3 className='titulo-03-home'>
                        SELO DE 100% DE
                        QUALIDADE
                    </h3>
                    <img src={SeloIcon} className='selo-icon-home' />
                </div>
            </section>
            <section className='cont-002-home'>
                <div className='cont-filha1-002home'>
                    <img src={RelogioIcon} className='relogio-icon-home' />
                    <h1 className='titulo-promocoes-home'>
                        PROMOÇÕES IMPERDIVEIS
                    </h1>
                </div>
                <div className='cont-filha2-002home'>
                    {produtos.map(item =>
                        <CardProduto item={item} />
                    )}
                </div>
                <div className='cont-filha3-002home'>
                    <img src={FogoIcon} className='relogio-icon-home' />
                    <h1 className='titulo-maisvendido-home'>
                        MAIS VENDIDOS
                    </h1>
                </div>
                <div className='cont-filha2-002home'>
                    {prodmaisVendidos.map(item =>
                        <CardMaisVendidos item = {item} />
                    )}
                </div>
                <div className='cont-filha4-002home'>
                    <img src={DepartamentoIcon} className='dep-icon-home' />
                    <h1 className='titulo-departamento-home'>
                        DEPARTAMENTOS
                    </h1>
                </div>
                <div className='cont-map-dep'>
                    {departamento.map(item =>
                        <section className='cont-dep-card'>
                            <div className='dep-card'>
                                <h3 className='titulo-dep-card'>
                                    {item.nomeDepartamento}
                                </h3>
                            </div>
                        </section>
                    )}
                </div>
                <div className='cont-filha5-002home'>
                    <img src={FogueteRec} className='rec-icon-home' />
                    <h1 className='titulo-recomendados-home'>
                        RECOMENDADOS
                    </h1>
                </div>
                <div className='cont-filha6-002home'>
                {prodmaisVendidos.map(item =>
                        <CardMaisVendidos item = {item} />
                    )}
                </div>
            </section>
            <div className='rodape-home'>
                <Rodape />
            </div>
        </main>
    )
}