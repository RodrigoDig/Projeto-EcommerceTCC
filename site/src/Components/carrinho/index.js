import './index.scss';
import Storage from "local-storage";
import { buscarImgProd, prodPromoImperdivel } from '../../Api/cadProdutoApi';
import Excluir from '../../assets/images/icon-excluir.svg';
import storage from 'local-storage';
import { confirmAlert } from 'react-confirm-alert';

import { useEffect, useState } from "react";
import { API_URL } from '../../Api/config';
import { toast } from 'react-toastify';

export default function CarrinhoItem(props) {
    const carr = storage('carrinho');
    const [qtdProduto, setQtdProduto] = useState(1);
    const [filtro, setFiltro] = useState('');
    const [quantia, setQuantia] = useState([]);

    useEffect(() => {
        setQuantia(carr);
    }, [])
    async function filtrar(){
        const x =  storage('carrinho');
        setFiltro(x);
    } 

    function ver(){
        let a = quantia.length;
        let b = 0
        for(let i = 1; i <= a; i++){
            if(props.item.produto.idProduto === i){
                b = (b + i) - 1; 
            }
        }
        console.log(props.item.produto.idProduto)
        console.log(b);
        return b;
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

    function valorDesconto(valor, desconto) {
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl;

        return valorfinal;
    }

    function calcularSubTotal(preco, desconto) {
        const subtotal = valorDesconto(preco, desconto) * qtdProduto;
        return subtotal;
    }

    function alterarQuantidade(novaQtd) {
        setQtdProduto(novaQtd);

        let carrinho = Storage('carrinho');
        let itemStorag = carrinho.find(item => item.id == props.item.produto.idProduto);
        itemStorag.qtd = novaQtd;
        Storage('carrinho', carrinho);
        props.carregarCarrinho();
        
    }
    
    
    function remover() {
        confirmAlert({
            title: "Remover produto",
            message:"Deseja mesmo remover o produto?",
            buttons:[
                {
                    label:"Sim",
                    onClick: async () =>{

                        props.removerItem(props.item.produto.idProduto)
                        
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

    


    return (
        <main className='cont-main-card-carrinho'>
            <section className='posicionamento-carrinho'>

                <div className='imagem-produto-carrinho'>
                    <img className='img-produto' src={mostrarImg(props.item.produto.imagem)}/>
                </div>

                <div className='informações-carrinho-comp'>
                    <div className='descrição-produto'>
                        <h1 className='nome-produto'>{props.item.produto.nome}</h1>
                    </div>

                    <div className='preço-produto-carrinho'>
                        <h1 className='preco-iten'>Preço</h1>
                        <div className='cont-valor-antigo'>
                            <h2 className='txt-valor' >De: </h2> 
                            <h2 className='valor-antigo'>R$ {props.item.produto.preco}</h2> 
                        </div>
                        <div className='cont-valor-novo'>
                            <h2 className='valor-novo'>Por: </h2>
                            <h2 className='valor-verde'>R$ {valorDesconto(props.item.produto.preco, props.item.produto.desconto)}</h2>
                        </div>
                    </div>
                </div>

                <div className='subtotal-carrinho'>
                    <div className='cont-excluir'>
                        <img className='icon-excluir' src={Excluir} onClick={remover}/>
                    </div>
                    <div className='select-carrinho'>
                        <label>Quantia: </label>
                        <select className='select-quantia' onChange={e => alterarQuantidade(e.target.value)} value={carr[ver()].qtd}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className='cont-subtotal'>
                        <label>Subtotal</label>
                        <p>R$ {calcularSubTotal(props.item.produto.preco, props.item.produto.desconto)}</p>
                    </div>

                </div>

            </section>
        </main>
    )
}