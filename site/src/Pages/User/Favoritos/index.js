import React from 'react';
import './index.scss';
import Cabecalho01 from '../../../Components/Cabeçalho07';
import Cabecalho02 from '../../../Components/CabeçalhoUser';
import CFavoritos from '../../../Components/Favoritos';
import CardFav from '../../components/CardFavoritos';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { verificarProdutosFavoritos } from '../../../Api/usuarioAvaliacao';

export default function Favoritos(){
    const [produtos, setProdutos] = useState([]);
    const userLogado = storage('user-logado');
    const navigate = useNavigate();

    useState(() =>{
        if(!storage('user-logado') || storage('user-logado') === null){
            carregarLogins2();        
        }else{
            carregarPag();
        }
    }, []);

    function carregarLogins2(){
        let min = Math.ceil(1);
        let max = Math.floor(2);
        let retorno = Math.floor(Math.random() * (max - min + 1)) + min;
        if(retorno === 1){
                navigate('/login/style1')
        }
        else if(retorno === 2){
                navigate('/login/style2')
        }
    }


    async function carregarPag(){
        const prods = await verificarProdutosFavoritos(userLogado.id);
        setProdutos(prods);
    }
    return(
        <main className='cont-main-fav'>
            <section className='cont-cabecalho-fav'>
                <Cabecalho01/>
            </section>
            <section className='cont-cabe-fav'>
                <div className='cont-cab2'>
                    <Cabecalho02/>
                </div>
                <div className='cont-fav'>
                    <div className='cont-fav-01'>
                        <div className='cont-titulo-fav'>
                            <h1 className='titulo-fav'>
                                    Favoritos
                            </h1>
                        </div>
                        {produtos.map(item => 
                            <CardFav item = {item}/>
                        )}
                    </div>
                </div>
            </section>
                        <div className='aln-1'>
                        </div>
        </main>
    )
}