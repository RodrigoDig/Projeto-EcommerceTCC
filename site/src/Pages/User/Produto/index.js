import React, { useEffect, useState } from 'react';
import './index.scss';

import Cabecalho1 from '../../../Components/Cabeçalho01';
import CoracaoIcon from '../../../assets/images/Coracao-icon.svg';
import Storag from 'local-storage';
import Carrinho from '../../../assets/images/Carrinho-branco.svg'

import { prodSelCompra }from '../../../Api/cadProdutoApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { estrelasAvaliacao } from '../../components/estrelaAva';

export default function Produto(){
    
    const [produtos, setProdutos] = useState({ info: {}, cat: []});
    const { id } = useParams();    
    
    async function carregarPag(){
        const r = await prodSelCompra(id);
        console.log(r);
        setProdutos(r);
    }

    function valorDesconto(valor, desconto) {
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl;

        return valorfinal;
    }

    function lerEstrelas(valor, estrela) {
        if (valor > 5) {
            valor = Math.floor(valor / 2);
        }
        if (valor <= estrela)
            return 'star-icon ativo'    
        else
            return 'star-icon'
    }

    function verificarDesconto(valor){
        if(valor <= 0){
            return ''
        }
        else{
            return 'COM DESCONTO DE' + valor + '% Á VISTA NO PIX';
        }
    }

    function adicionarCarrinho(){
        let carrinho = [];
        if(Storag ('carrinho')){
            carrinho = Storag('carinho');
        }

        if(!carrinho.find(item => item.id === id)){
            carrinho.push({
                id: id,
                qtd: 1
            })
            Storag('carrinho', carrinho);
        }
        toast.success('Produto adicionado ao carrinho');
    }

    function valorProd(valor){
        let vl = valor;
        const vlRouded = +(vl.toFixed(2));
        return vlRouded;
    }


    useEffect(() => {
        carregarPag();
    }, [])

    return(
        <main className='cont-main-infoprod'>
            <section className='cont-cabecalho-infoprod'>
                <Cabecalho1/>
            </section>
            <section className='cont-produto-infoprod'>
                <div className='cont-dep-infoprod'>
                    <div className='cont-filhadep001'>
                        <h1 className='departamento-infoprod'>
                            Departamentos /
                        </h1>
                        <h1 className='nmdep-infoprod'>
                            Computadores /
                        </h1>
                        <h1 className='class-infoprod'>
                            Gabinete
                        </h1>
                    </div>
                    <img src={CoracaoIcon} className='favoritar-infoprod' />
                </div>
                <div className='cont-prodvl-infoprod'>
                    <div className='cont-avaimgs-infoprod'>
                        <div className='cont-ava-infoprod'>
                            {estrelasAvaliacao(produtos.info.avaliacao)}
                        </div>
                        <div className='cont-imagem-maior-infoprod'>
                            <h1>
                                img 1 
                            </h1>
                        </div>
                        <div className='cont-imgs-infoprod'>
                            <h1>
                                img 2,3
                            </h1>
                        </div>
                    </div>
                    <div className='cont-vlcompra-infoprod'>
                        <div className='cont-divulgacao-infoprod'>
                            <h1 className='text-adquira'>
                                Adquira seu console com preço acessível
                            </h1>
                        </div>
                        <div className='cont-nmprod-infoprod'>
                            <p className='text-nmprod'>
                                {produtos.info.nomeProduto}
                            </p>
                        </div>
                        <div className='cont-fabricante-infoprod'>
                            <p className='text-fabricante'>
                                Fabricante: {produtos.info.fabricante}
                            </p>
                        </div>
                        <div className='cont-valor-infoprod'>
                            <p className='valor-antigo-infoprod'>
                                DE R$ {valorProd(produtos.info.valorProduto)} POR
                            </p>

                            <p className='text-valor-infoprod'>
                                R$ {valorDesconto(produtos.info.valorProduto, produtos.info.valorDesconto)}
                            </p>
                        </div>
                        <div className='cont-mdesc-infoprod'>
                            <p className='text-mostrando-desconto'>
                                {verificarDesconto(Math.trunc(produtos.info.valorDesconto))} 
                            </p>
                            <div className='cont-botao-comp'>
                                <button className='botao-carrinho' onClick={adicionarCarrinho}>
                                    <img src={Carrinho} className='carrinho-add'/>
                                    <h1 className='text-addcarrinho'>    Adicionar ao Carrinho   </h1>
                                </button>
                                <button className='botao-comprar'>  
                                    <img src={Carrinho} className='carrinho-add'/>
                                    <h1 className='text-comprar'>
                                        Comprar
                                    </h1> 
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}