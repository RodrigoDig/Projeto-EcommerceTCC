import { useEffect, useState } from 'react';
import { buscarPorId } from '../../../Api/cadProdutoApi';
import { useNavigate } from 'react-router-dom';

import './index.scss';

import Storag from 'local-storage';
import CarrinhoItem from '../../../Components/carrinho';
import Cabeçalho01 from '../../../Components/Cabeçalho01';
import CarrinhoLogo from '../../../assets/images/Group.png';
import CabaçalhoUsuario from '../../../Components/CabeçalhoUser';

export default function Carrinho() {
    const [itens, setItens] = useState([]);
    const navigate = useNavigate();

    function voltar() {
        navigate('/')
    }

    function qtdItens(){
        return itens.length;
    }

    function valorDesconto(valor, desconto) {
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl;

        return valorfinal;
    }

    function calcularTotal(){
        let total = 0;
        for(let item of itens){
            total = total + valorDesconto(item.produto.preco, item.produto.desconto) * item.qtd; 
        }
        return total;
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
        calcularTotal()
    }, [])

    return (
        <main className='pagina-carrinho'>
            <section className='Componentes-carrinho'>
                <Cabeçalho01/>
                <CabaçalhoUsuario/>
            </section>
            <section>
                <div className='titulo-carrinho'>

                    <div className='carrinho'>
                        <img  src={CarrinhoLogo}/>
                        <h1>Seu carrinho</h1>
                    </div>
                                    
                    <div className='Informações-Carrinho'>

                        <div className='itens-carrinho'>
                            {itens.map(item =>
                                <CarrinhoItem 
                                    item={item} 
                                    removerItem={removerItem} 
                                    carregarCarrinho={carregarCarrinho} />
                            )}
                        
                        </div>

                        <div className='Resumo-carrinho'>
                            <h1>Resumo</h1>
                            <p>Total de Intens: {qtdItens()} </p>
                            <p>Valor da compra: R$ {calcularTotal()}</p>
                            <button>Comprar</button>
                            <button onClick={voltar}>Continuar Comprando</button>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}