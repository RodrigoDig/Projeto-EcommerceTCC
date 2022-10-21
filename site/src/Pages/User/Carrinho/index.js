import { useEffect, useState } from 'react';
import './index.scss';
import Storag from 'local-storage';
import { buscarPorId } from '../../../Api/cadProdutoApi';
import CarrinhoItem from '../../../Components/carrinho';

export default function Carrinho(){
    const [itens, setItens] = useState([]);
    async function carregarCarrinho(){
        let carrinho = Storag('carrinho');
        if(carrinho){

            let temp = [];

            for( let produto of carrinho){
                let p =await buscarPorId(produto.id);

                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }

            setItens(temp);
        }
    }

    useEffect(() => {
        carregarCarrinho();
    }, [])

    return(
        <main>
            <section>
                <div>
                    <h1>Carrinho</h1>
                </div>
            </section>
            <section>
                <div className='produto'>
                    <div className='card-informacao-carrinho'>
                        {itens.map( item => 
                            <CarrinhoItem item={item}/>    
                        )}
                    </div>

                    <div className='card-resumo'>
                        <h1>Resumo</h1>
                        <button>Comprar</button>
                        <button>Continuar Comprando</button>
                    </div>
                </div>
            </section>
        </main>
    )
}