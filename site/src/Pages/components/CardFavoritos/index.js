import './index.scss';
import React, { useEffect, useState } from 'react';

import Excluir from '../../../assets/images/icon-excluir.svg';
import { API_URL } from '../../../Api/config';
import { buscarImgProd } from '../../../Api/cadProdutoApi';
import { deletarProdutoFavoritado } from '../../../Api/cadProdutoApi';
import { verificarProdutoFavoritado2 } from '../../../Api/cadProdutoApi';
import storage, { set } from 'local-storage';
import { confirmAlert } from 'react-confirm-alert';
import {toast} from  'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function CardFav(props){
    const usuarioLog = storage('user-logado');
    const [idusu, setIdUsu] = useState();
    const [filtro, setFiltro] = useState('');

    const navigate = useNavigate();

    useEffect(() =>{
        setIdUsu(usuarioLog.id);
    }, [])

    function comprarItem(idProduto){
        navigate('/compra/produto/' + idProduto)
    }

    function mostrarImg(imagem){
        if(typeof(imagem) == 'object'){
            return URL.createObjectURL(imagem);
        }
        else if(typeof(imagem) == 'string'){
            return `${API_URL}/${imagem}`
        }
        else{
            return buscarImgProd(imagem)
        }
    }

    async function filtrar(){
        const x =  verificarProdutoFavoritado2(idusu, props.item.idP);
        setFiltro(x);
    } 

    async function deletarProd(idusu, idprod){
        try{
            const r = await deletarProdutoFavoritado(idusu, idprod);
            toast.success('Produto deletado de seus Favoritos!')
        }catch(err){
            toast.error(err.message)
        }
    }

    function verificarSeHaDesconto(desconto){
        if(desconto <= 0){
            return  <div className='cont-valor-prod'>
                        <p className='valor-novo'>
                            R$ {valorProd(valorDesconto(props.item.valor, props.item.desconto))}
                        </p>
                    </div>
        }
        else if(desconto > 0){
            return  <div className='cont-valor-prod'>
                        <p className='valor-antigo'>
                           De R$ {props.item.valor}
                        </p>
                        <p className='valor-novo'>
                            Por R$ {valorProd(valorDesconto(props.item.valor, props.item.desconto))}
                        </p>
                    </div>
        }
    }

    function valorDesconto(valor, desconto) {
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl;

        return valorfinal;
    }

    function remover() {
        confirmAlert({
            title: "Remover produto",
            message:"Deseja mesmo remover o produto?",
            buttons:[
                {
                    label:"Sim",
                    onClick: async () =>{

                        deletarProd(idusu, props.item.idP)
                        
                        if(filtro != !filtro)
                            toast.arguments("Não foi possivel remover o produto")
                        else
                            filtrar();
                            toast.success("Produto removido com sucesso!");
                    }
                },
                {
                    label: "Não"
                }
            ] 
        })
    }

    function valorProd(valor){
        const vl = valor.toFixed(2);
        return vl;
    }
    
    return(
        <div className='cont-card-fav'>
            <div className='cont-img-prod'>
                <img src={mostrarImg(props.item.imagem)} className='img-produto'/>
            </div>
            <div className='cont01-card'>
                <div className='cont-excluir'>
                    <img src={Excluir} className='icon-excluir' onClick={remover} />
                </div>
                <div className='cont-nmprod'>
                    <p className='titulo-nm-prod'>
                        {props.item.nome}
                    </p>
                </div>
                {verificarSeHaDesconto(props.item.desconto)}
                <div className='cont-botao-comprar'>
                    <button className='comprar-button' onClick={() => comprarItem(props.item.idP)}>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}