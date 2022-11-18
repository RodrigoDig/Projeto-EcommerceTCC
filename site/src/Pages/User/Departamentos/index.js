import React, { useEffect, useState } from 'react';

// VERIFICAÇÕES DE SERVIÇO
import verificarIcone from './services/ValidacaoIcone';
import verificarIconCategoria from './services/ValIconeCat';
import verCategorias from './services/validarCategoria';

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
    const { id } = useParams();

    console.log(depart)
    async function carregarPag(){
        const cats = await buscarCategoriasDep();
        setCatsDep(cats);
        const r = await depPage(id);
        const f = await buscarProdutosDep(id);
        setDepart(r);
        setProdSel(f);
    }

    function validarCats(entrada){
        if(entrada === {}|| entrada === null || !entrada){
            entrada = {categoria: undefined} 
            return entrada;
        }else{
            return entrada
        }
    }
    

    useEffect(() =>{
        carregarPag();
    }, [])
    return(
        <main className='cont-main-departamento'>
            <section className='cont-cabecalho-dep'>
                <Cabecalho01/>   
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
            {verCategorias(validarCats(cats.c1), id)}
            <section className='cont-rodapé-dep'>
                <Rodape />
            </section>
        </main>
    )
}