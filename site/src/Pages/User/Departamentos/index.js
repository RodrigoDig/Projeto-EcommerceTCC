import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Cabecalho01 from '../../../Components/Cabeçalho01';
import Computadores from '../../../assets/images/icon-computadores.svg';
import Games from '../../../assets/images/games-icon.svg';
import Hardware from '../../../assets/images/hard-icon.svg';
import Seta from '../../../assets/images/ordenar-seta.svg'
import Rodape from '../../../Components/Rodapé';
import { depPage } from '../../../Api/cadProdutoApi';
import { useParams } from 'react-router-dom';
import './index.scss';
import { buscarProdutosDep } from '../../../Api/departamentoApi';

export default function Departamentos(){
    const[depart, setDepart] = useState({ departamento: [], dep1: [], dep2: []});
    const[ prodSel, setProdSel ] = useState([]);
    console.log(depart);
    const {id} = useParams();
    
    async function carregarPag(){
        const r = await depPage(id);
        const f = await buscarProdutosDep(id);
        setDepart(r);
        setProdSel(f);
    }
    
    
    function verificarIcone(nome){
        if(nome == 'Hardware'){
            return Hardware;
        }
        else if(nome == 'Games'){
            return Games;
        }
        else if(nome == 'Computadores'){
            return Computadores;
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

            </section>
        </main>
    )
}