import React from "react";
import { buscarCategoriasDepNome } from "../../../../Api/categoriaApi";
import { buscarCategoriasDep } from "../../../../Api/categoriaApi";
import { depPage } from "../../../../Api/cadProdutoApi";

import verificarIconCategoria from "./ValIconeCat";
import CardProdCat from "../../../components/CardProdCat";
import CardProdDep from "../../../components/CardProdDep";
import { buscarProdutosCatDep } from "../../../../Api/departamentoApi";
import { buscarProdutosDep } from "../../../../Api/departamentoApi";
import { useState } from "react";
import { useEffect } from "react";

export default function VerCategorias(nome, uid){
    const [depart, setDepart] = useState({ departamento: [], dep1: [], dep2: []});
    const [prodSel, setProdSel ] = useState([]);
    const [cats, setCatsDep] = useState({c1: [], c2: [], c3: []});
    console.log(cats);
    const [prodCat1, setProdCat1] = useState([]);
    const [prodCat2, setProdCat2] = useState([]);
    const [prodCat3, setProdCat3] = useState([]);
    const id = uid;

    async function rodar(nome){
        const cat = await buscarCategoriasDepNome(nome);
        return cat;
    }
    
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

    console.log(rodar(nome));
    

    useEffect(() =>{
        carregarPag();
        rodar(nome);
    }, [])

    if(rodar(nome) === [] || rodar(nome) === undefined || !rodar(nome) || rodar(nome) === null){
        return <div></div>
    }    
    else{
        return <section>
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
                </section>
    }
}