import React, { useEffect, useState } from 'react';

// VERIFICAÇÕES DE SERVIÇO
import verificarIcone from './services/ValidacaoIcone';
import verificarIconCategoria from './services/ValIconeCat';

import Cabecalho01 from '../../../Components/Cabeçalho01';
import Seta from '../../../assets/images/ordenar-seta.svg';

// CARDS DE PRODUTOS
import CardProdDep from '../../components/CardProdDep';
import CardProdCat from '../../components/CardProdCat';

import Rodape from '../../../Components/Rodapé';
import { depPage } from '../../../Api/cadProdutoApi';
import { useParams } from 'react-router-dom';
import './index.scss';

// BUSCA NA API
import { buscarProdutosCatDep } from '../../../Api/departamentoApi';
import { buscarProdutosDep } from '../../../Api/departamentoApi';
import { buscarCategoriasDep, buscarCategoriasDepNome } from '../../../Api/categoriaApi';
import { set } from 'local-storage';

export default function DepPage(){
    const [depart, setDepart] = useState({ departamento: [], dep1: [], dep2: []});
    const [prodSel, setProdSel ] = useState([]);
    const [cats, setCatsDep] = useState({c1: [], c2: [], c3: []});
    const [prodCat1, setProdCat1] = useState([]);
    const [prodCat2, setProdCat2] = useState([]);
    const [prodCat3, setProdCat3] = useState([]);
    const {id} = useParams();
    
    async function carregarPag(){
        const cats = await buscarCategoriasDep();
        setCatsDep(cats);
        let c1 = cats.c1.id;
        let c2 = cats.c2.id;
        let c3 = cats.c3.id;
        const r = await depPage(id);
        const f = await buscarProdutosDep(id);
        const prod1 = await buscarProdutosCatDep(c1 , id);
        const prod2 = await buscarProdutosCatDep(c2, id);
        const prod3 = await buscarProdutosCatDep(c3, id);
        setProdCat1(prod1);
        setProdCat2(prod2);
        setProdCat3(prod3);
        setDepart(r);
        setProdSel(f);
    }

    

    useEffect(() =>{
        carregarPag();
    }, [])
    return(
        <main className='cont-main-departamento'>
            <section className='cont-cabecalho-dep'>
                <Cabecalho01/>   
            </section>
            <section className='cont-carrossel'>

            </section>
            <section className='cont-titulo-dep'>
                <div className='cont-01-titulodep'>
                    <div className='cont-outros-dep'>
                        <div className='cont-01-outrosdep'>
                            <img className='icon-outrosdep' src={verificarIcone(depart.dep1.departamento)}/>
                            <h1 className='titulo-outrosdep'> {depart.dep1.departamento}</h1>
                        </div>
                        <div className='cont-02-outrosdep'>
                            <img className='icon-outrosdep' src={verificarIcone(depart.dep2.departamento)}/>
                            <h1 className='titulo-outrosdep'> {depart.dep2.departamento}</h1>
                        </div>
                    </div>
                        <div className='cont-nome-departamento'>
                            <img className='icon-departamento' src={verificarIcone(depart.departamento.nomeDep)}/>
                            <h1 className='titulo-nomeDep'>
                                {depart.departamento.nomeDep}
                            </h1>
                        </div>
                        <div className='cont-ordenar'>
                            <h1 className='titulo-ordenar'>
                                ORDENAR POR
                            </h1>
                            <img className='icon-seta' src={Seta}/>
                        </div>
                </div>
            </section>
            <section className='cont-produtos-dep'>
                {prodSel.map(item => 
                    <CardProdDep item={item}/>    
                )}
            </section>
            <section className='cont-cat1-dep'>
                    <img className='icon-cat1' src={verificarIconCategoria(cats.c1.categoria)}/>
                    <h1 className='titulo-cat1'>
                        {cats.c1.categoria}
                    </h1>
            </section>
            <section className='cont-produtos-cat1'>
                {prodCat1.map(item => 
                    <CardProdCat item={item}/>    
                )}
            </section>
            <section className='cont-cat2-dep'>
                    <img className='icon-cat2' src={verificarIconCategoria(cats.c2.categoria)}/>
                    <h1 className='titulo-cat2'>
                        {cats.c2.categoria}
                    </h1>
            </section>
            <section className='cont-produtos-cat1'>
                {prodCat2.map(item => 
                    <CardProdCat item={item}/>    
                )}
            </section>
            <section className='cont-cat3-dep'>
                    <img className='icon-cat3' src={verificarIconCategoria(cats.c3.categoria)}/>
                    <h1 className='titulo-cat3'>
                        {cats.c3.categoria}
                    </h1>
            </section>
            <section className='cont-produtos-cat1'>
                {prodCat3.map(item => 
                    <CardProdCat item={item}/>    
                )}
            </section>
            <section className='cont-rodapé-dep'>
                <Rodape />
            </section>
        </main>
    )
}