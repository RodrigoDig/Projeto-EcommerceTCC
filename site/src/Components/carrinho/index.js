import './index.scss';
import Storage from "local-storage";

import { useState } from "react";
import { API_URL } from '../../Api/config';

export default function CarrinhoItem(props) {
    const [qtdProduto, setQtdProduto] = useState(1);

    function exibirImagem(){
        if(props.item.produto.imagem > 0){
            console.log("aaa")
            return API_URL + '/' + props.item.produto.imagem[0];
        }
        else{
            return "Imagem não disponivel!"
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
        props.removerItem(props.item.produto.idProduto)
    }


    return (
        <main>
            <section className='posicionamento-carrinho'>

                <div className='imagem-produto-carrinho'>
                    <img src={exibirImagem()}/>
                </div>

                <div className='informações-carrinho-comp'>
                    <div className='descrição-produto'>
                        <span>{props.item.produto.nome}</span>
                    </div>

                    <div className='preço-produto-carrinho'>
                        <label>Preço</label>
                        <span>De R$ {props.item.produto.preco} Por R$ {valorDesconto(props.item.produto.preco, props.item.produto.desconto)}</span>
                    </div>
                </div>

                <div className='subtotal-carrinho'>
                    <div className='select-carrinho'>
                        <label>Qtd.</label>
                        <select onChange={e => alterarQuantidade(e.target.value)} value={qtdProduto}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div>
                        <label>Subtotal</label>
                        <p>R$ {calcularSubTotal(props.item.produto.preco, props.item.produto.desconto)}</p>
                    </div>

                </div>

                <div onClick={remover} className='excluir-produto-carrinho'>
                    <span>Excluir</span> 
                </div>

            </section>
            <hr/>
        </main>
    )
}