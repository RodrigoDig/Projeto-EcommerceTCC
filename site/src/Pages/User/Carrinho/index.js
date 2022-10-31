import { useEffect, useState } from 'react';
import { buscarPorId } from '../../../Api/cadProdutoApi';
import { useNavigate } from 'react-router-dom';

import './index.scss';

import Storag from 'local-storage';
import CarrinhoItem from '../../../Components/carrinho';
import CabaçalhoUsuario from '../../../Components/CabeçalhoUser';

export default function Carrinho() {
    const [itens, setItens] = useState([]);
    const navigate = useNavigate();

    function voltar() {
        navigate('/')
    }

    function removerItem(id) {
        let carrinho = Storag('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storag('carrinho', carrinho);
        carregarCarrinho();
    }

    async function carregarCarrinho() {
        let carrinho = Storag('carrinho');
        if (carrinho) {

            let temp = [];

            for (let produto of carrinho) {
                let p = await buscarPorId(produto.id);

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

    return (
        <main>
            <section>

                <div>
                    <div>
                        <h1>Carrinho</h1>
                    </div>

                    <div className='produto'>
                        <div className='card-informacao-carrinho'>
                            {itens.map(item =>
                                <CarrinhoItem item={item} removerItem={removerItem} />
                            )}
                        </div>

                        <div className='card-resumo'>
                            <h1>Resumo</h1>
                            <button>Comprar</button>
                            <button onClick={voltar}>Continuar Comprando</button>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}