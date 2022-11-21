import { useEffect, useState } from 'react';
import { buscarPorId } from '../../../Api/cadProdutoApi';
import { useNavigate } from 'react-router-dom';

import './index.scss';

import Storag from 'local-storage';
import CarrinhoItem from '../../../Components/carrinho';
import Cabeçalho01 from '../../../Components/Cabeçalho06';
import CarrinhoLogo from '../../../assets/images/carrinho-black.svg';
import CabaçalhoUsuario from '../../../Components/CabeçalhoUser';

export default function Carrinho() {
    const [itens, setItens] = useState([]);
    const navigate = useNavigate();

    function voltar() {
        navigate('/')
    }
    function pedido(){
        navigate('/etapaI')
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
        return total.toFixed(2);
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
                    qtd: produto.qtd,
                    img: produto.imagem
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
            </section>
            <section className='divisão-responsiva'>
                <div className='cabecalho-usuario-main'>
                    <CabaçalhoUsuario/>
                </div>
                <div className='titulo-carrinho'>

                    <div className='carrinho'>
                        <img className='img-carrinho-icon'  src={CarrinhoLogo}/>
                        <h1 className='titulo-do-carrinho'>Seu carrinho</h1>
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
                            <div className='cont-valor-total'>
                                <p>Intens: {qtdItens()} </p>
                            </div>
                            <div className='cont-valor-total'>
                                <p>Total: R$ {calcularTotal()}</p>
                            </div>
                            <button onClick={pedido}>Comprar</button>
                            <button onClick={voltar}>Continuar Comprando</button>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}