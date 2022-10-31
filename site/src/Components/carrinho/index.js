import { useState } from "react";
import Storage from "local-storage";

export default function CarrinhoItem(props){
    const [qtdProduto, setQtdProduto] = useState(1);

    function valorDesconto(valor, desconto) {
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl;

        return valorfinal;
    }

    function calcularSubTotal(preco, desconto){
        const subtotal = valorDesconto(preco, desconto) * qtdProduto ;
        return subtotal;
    }

    function alterarQuantidade(novaQtd){
        setQtdProduto(novaQtd);

        let carrinho = Storage('carrinho');
        let itemStorag = carrinho.find(item => item.id == props.item.produto.idProduto);
        itemStorag.qtd = novaQtd;

        Storage('carrinho', carrinho);
    }

    function remover(){
        props.removerItem(props.item.produto.idProduto)
    }

    return(
        <main className="comp-carrinho-item">
            <section>
                <div>{props.item.produto.nome}</div>
                
                <label>Preço</label>
                <div>De {props.item.produto.preco} por</div>
                <div>{valorDesconto(props.item.produto.preco, props.item.produto.desconto)}</div>
                <div>{props.item.produto.desconto}</div>

                <div>
                    <label>Subtotal</label>
                    <div>R$ {calcularSubTotal(props.item.produto.preco, props.item.produto.desconto)}</div>
                </div>
                <div>
                    <div>
                        <label>Qtd.</label>
                        <select onChange={e => alterarQuantidade(e.target.value)} value={qtdProduto}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>

                <div onClick={remover}>
                    excluir
                </div>
            </section>
        </main>
    )
}