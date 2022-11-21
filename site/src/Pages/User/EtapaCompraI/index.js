import './index.scss';
import storage from 'local-storage';

import { API_URL } from '../../../Api/config';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listar } from '../../../Api/enderecoApi';
import { buscarPorId } from '../../../Api/cadProdutoApi';
import { buscarImgProd } from '../../../Api/cadProdutoApi';


import Modal from '../../../Components/ModalEnd';
import Componente from '../../../Components/EnderecoComp';
import Etapas from '../../../Components/etapas';
import cesta from '../../../assets/images/cesta.svg';
import Cabecalho from '../../../Components/CabecalhoCompras';
import Localização from '../../../assets/images/pin-de-localizacao.png';
import caminhao from '../../../assets/images/caminhao-de-entrega 1.svg';
import Pagamento from '../../../assets/images/forma-de-pagamento.png';


export default function EtapaCompra() {
    const [endereco, setEndereco] = useState([]);
    const [exibirEndereço, setExibirEndereço] = useState(false);
    const [itens, setItens] = useState([]);
    const navigate = useNavigate();

    console.log(itens);

    useEffect(() => {
        if (!storage('user-logado')) {
            navigate('/login');
        }
    }, [])

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

    async function carregarEnd() {
        const id = storage('user-logado').id;
        const r = await listar(id);
        setEndereco(r);
    }
    function exibirNovoEnd() {
        setExibirEndereço(true);
    }
    function fecharEnd() {
        setExibirEndereço(false);
        carregarEnd();
    }
    
    function valorDesconto(valor, desconto) {
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl;

        return valorfinal;
    }

    async function carregarPordutos() {
        let carrinho = storage('carrinho');
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
    function calcularTotal(){
        let total = 0;
        for(let item of itens){
            total = total + item.qtd * valorDesconto(item.produto.preco, item.produto.desconto)
        }
        return total;
    }

    useEffect(() => {
        carregarEnd();
        carregarPordutos();
    })
    return (
        <main>
            <Modal exibir={exibirEndereço} fechar={fecharEnd} />
            <section>
                <Cabecalho />
            </section>

            <section className='Bloco-etapa1'>
                <div>
                    <Etapas />
                </div>

                <div className='divisão-etapa1'>
                    <div className='divisão-informações-produto-etp1'>
                        <div className='bloco-endereco-etp1'>
                            <div className='titulo-end-etp1'>
                                <img src={Localização} />
                                <h1>Selecione o endereço</h1>
                            </div>

                            <div className='informações-end-etp1'>
                                {endereco.map(item =>
                                    <Componente item={item} />
                                )}
                                <div className='edit-etp1'>
                                    <span onClick={exibirNovoEnd} style={{ color: "#f27400" }}>Novo endereço</span>
                                </div>
                            </div>

                        </div>

                        <div className='produto-etp1'>

                            <div className='titulo2-etp1'>
                                <img src={cesta} />
                                <h1>Produto </h1>
                            </div>
                            <hr />

                            <table>
                                <thead>
                                    <tr>
                                        <th>Produto(s)</th>
                                        <th>Quantidade</th>
                                        <th>Valor Unitário</th>
                                        <th>Total com Desconto</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {itens.map(item =>
                                        <tr>
                                            <td>
                                                <div className='celula-item'>
                                                    <img src={mostrarImg(item.produto.imagem)}/>
                                                    <div>
                                                        <h3>{item.produto.nome}</h3>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                               {item.qtd} 
                                            </td>
                                            <td>
                                                R$ {item.produto.preco}
                                            </td>
                                            <td>
                                                R$ {valorDesconto(item.produto.preco, item.produto.desconto) * item.qtd}
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>

                            <div className='cupom-etp1'>
                                <input type='text' placeholder='Insira seu cupom de desconto' />
                                <button>Aplicar cupom</button>
                            </div>
                        </div>

                        <div className='opção-frete-etp1'>
                            <div className='titulo-frete-etp1'>
                                <div className='frete-etp1'>
                                    <img src={caminhao} />
                                    <h1>Escolha sua opção de frete </h1>
                                </div>

                                <div className='valores-fixos'>
                                    <h1>Valores Fixos</h1>
                                </div>
                            </div>
                            <hr />

                            <div className='parte-final-frete'>
                                <div className='tipos-frete'>
                                    <label>
                                        Frete Comum
                                        <input type='checkbox' />
                                    </label>

                                    <label>
                                        Frete Sedex
                                        <input type='checkbox' />
                                    </label>
                                </div>

                                <div className='valores-frete'>
                                    <span>R$ 15,00</span>
                                    <span>R$ 25,00</span>
                                </div>
                            </div>
                        </div>

                        <div className='produto-etp1-pagamento'>
                            <div className='titulo2-etp1-pagamento'>
                                <img src={Pagamento} />
                                <h1>Pagamento </h1>
                            </div>
                            <hr />

                            <div className='form'>
                                <div className='Locações'>
                                    <label>Nome:</label>
                                    <label>Número:</label>
                                    <label>Validade</label>
                                    <label>CVV:</label>
                                    <label>Pagamento:</label>
                                    <label>Parcelas:</label>
                                </div>

                                <div className='valores'>
                                    <input type='text'/>
                                    <input type='number'/>
                                    <input type='date'/>
                                    <input type='number'/>
                                    <select>
                                        <option selected disabled hidden >Selecione</option>
                                        <option>Crédito</option>
                                        <option>Débito</option>
                                    </select>
                                    <select>
                                        <option selected disabled hidden >Selecione</option>
                                        <option value={1}>1x á vista</option>
                                        <option value={1}>1x sem juros</option>
                                        <option value={2}>2x sem juros</option>
                                        <option value={3}>3x sem juros</option>
                                        <option value={4}>4x sem juros</option>
                                        <option value={5}>5x sem juros</option>
                                        <option value={6}>6x sem juros</option>
                                        <option value={7}>7x sem juros</option>
                                        <option value={8}>8x sem juros</option> 
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='bloco-final-etp1'>
                        <div className='Resumo-carrinho'>
                            <h1>Resumo</h1>
                            <p>Valor da compra: R$ {calcularTotal()} </p>
                            <button>Finalizar compra</button>

                        </div>

                        <div className='informação-frete-etp1'>
                            <h1>Frete</h1>

                            <p>Valores fixos para todos os fretes.</p>
                            <p>Para produtos vendidos fora do estado de São Paulo possuimos um valor de entrega fixo, custando R$ 50,00.</p>
                            <p>Para produtos vendidos dentro do estado de São Paulo, o cliente possui duas opções, e são elas:
                                *Entrega comum; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                *Entrega via Sedex(mais rápida);
                            </p>

                        </div>

                        <div className='cancelar-pedido'>
                            <button>Cancelar pedido</button>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}