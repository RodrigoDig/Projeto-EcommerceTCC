import React from "react";
import { buscarCategoriasDepNome } from "../../../../Api/categoriaApi";
import { buscarCategoriasDep } from "../../../../Api/categoriaApi";
import { depPage } from "../../../../Api/cadProdutoApi";
import { useNavigate } from "react-router-dom";


import { verificarProdutoFavoritado } from '../../../../Api/cadProdutoApi';
import { deletarProdutoFavoritado } from '../../../../Api/cadProdutoApi';
import { produtoFavoritado } from '../../../../Api/cadProdutoApi';
import storage from 'local-storage';
import { API_URL } from '../../../../Api/config';
import CoracaoIcon from '../../../../assets/images/Coracao-icon.svg';
import Coracao2Icon from '../../../../assets/images/Coracao-icon02.svg';

import verificarIconCategoria from "./ValIconeCat";
import CardProdCat from "../../../components/CardProdCat";
import CardProdDep from "../../../components/CardProdDep";
import { buscarProdutosCatDep } from "../../../../Api/departamentoApi";
import { buscarProdutosDep } from "../../../../Api/departamentoApi";
import { useState } from "react";
import { useEffect } from "react";

export default function VerCategorias(nome, uid){
    const userLogado = storage('user-logado');
    const navigate = useNavigate();

    const [favorito, setFavorito] = useState();
    const [idUsuario, setIdUsuario] = useState();
    const [fav1, setFav1] = useState();
    const [dele, setDel] = useState();
    
    const [depart, setDepart] = useState({ departamento: [], dep1: [], dep2: []});
    const [prodSel, setProdSel ] = useState([]);
    const [cats, setCatsDep] = useState({c1: [], c2: [], c3: []});
    console.log(cats);
    const [prodCat1, setProdCat1] = useState([]);
    const [prodCat2, setProdCat2] = useState([]);
    const [prodCat3, setProdCat3] = useState([]);
    const id = uid;

    function carregarLogins2(){
        let min = Math.ceil(1);
        let max = Math.floor(2);
        let retorno = Math.floor(Math.random() * (max - min + 1)) + min;
        if(retorno === 1){
                navigate('/login/style1');
        }
        else if(retorno === 2){
                navigate('/login/style2');
        }
    }

    useEffect(() => {
        if(!userLogado){
            setIdUsuario(null)
        }
        else {
            setIdUsuario(userLogado.id);
        }
        if(userLogado === null  ){
            setIdUsuario(null)
        }
        else{
            verificarSeEstáVerificado(idUsuario, uid);
        }
    }, []);

    useEffect(() =>{
        verificarSeEstáVerificado(idUsuario, uid);
    }, [favorito]);

    async function verificarSeEstáVerificado(idUser, idProd){
        const resposta = await verificarProdutoFavoritado(idUser, idProd);
        
        if(resposta == undefined || resposta === null || !resposta || resposta == ''){
            setFavorito(CoracaoIcon);
        }
        else{
            setFavorito(Coracao2Icon);
        }
    }

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
        return <section className="cont-todos-prod-cat">
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