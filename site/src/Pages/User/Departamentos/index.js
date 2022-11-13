import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Cabecalho01 from '../../../Components/Cabeçalho01';
import Computadores from '../../../assets/images/icon-computadores.svg';
import Games from '../../../assets/images/icon-games.svg';
import Rodape from '../../../Components/Rodapé';
import { depPage } from '../../../Api/cadProdutoApi';
import { useParams } from 'react-router-dom';
import './index.scss';

export default function Departamentos(){
    const[depart, setDepart] = useState({ Departamento: {}});
    const {nome} = useParams();
    async function carregarPag(){
        const r = await depPage(nome);
        console.log(r);
        setDepart(r);
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
                            <img className='icon-outrosdep' src={Computadores}/>
                            <h1 className='titulo-outrosdep'> Computadores</h1>
                        </div>
                        <div className='cont-02-outrosdep'>
                            <img className='icon-outrosdep' src={Games}/>
                            <h1 className='titulo-outrosdep'> Games</h1>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}