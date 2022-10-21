export default function CarrinhoItem(props){
    return(
        <main className="comp-carrinho-item">
            <section>
                <div>{props.item.produto.nome}</div>
                
                <label>Preço</label>
                <div>{props.item.produto.preco}</div>

                <div>
                    <div>
                        <label>Qtd.</label>
                        <select>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                        </select>
                    </div>
                </div>
            </section>
        </main>
    )
}