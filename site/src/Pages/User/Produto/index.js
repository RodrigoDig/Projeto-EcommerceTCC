import React, { useEffect, useState } from 'react';
import './index.scss';


import Cabecalho1 from '../../../Components/Cabeçalho01';
import CoracaoIcon from '../../../assets/images/Coracao-icon.svg';
import { CardOutrasOp } from '../../components/CardOutrasOp';
import { useNavigate } from 'react-router-dom';

import Storag from 'local-storage';
import Carrinho from '../../../assets/images/Carrinho-branco.svg'
import ImgCat1 from '../../../assets/images/img-cat-01.png';
import ImgCat2 from '../../../assets/images/img-cat-02.png';
import ImgCat3 from '../../../assets/images/img-cat-03.png';
import ImgCat4 from '../../../assets/images/img-cat-04.png';
import DescIcon from '../../../assets/images/img-desc.png';
import InfoIcon from '../../../assets/images/img-info.png';
import AvIcon from '../../../assets/images/img-avaliacao.png';
import StarAva from '../../../assets/images/star-icon.svg';
import OutrasOp from '../../../assets/images/icon-outrasop.png';
import Seta from '../../../assets/images/seta-vertodos.svg';
import Rodape from '../../../Components/Rodapé';
import Modal from '../../../Components/Modal';

import { prodSelCompra }from '../../../Api/cadProdutoApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { estrelasAvaliacao } from '../../components/estrelaAva';

export default function Produto(){
    const [produtos, setProdutos] = useState({ info: {}, cat: [], maiorAvaliacao: [], menorAvaliacao: [], opGeral: []});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    
    function opiniaoGeral(item, qtd){
        let condicao = item / qtd;
        return Math.floor(condicao);
    }

    async function carregarPag(){
        const r = await prodSelCompra(id);
        console.log(r);
        setProdutos(r);
    }

    function comprar(){
        navigate('/etapai');
    }

    function valorDesconto(valor, desconto) {
        const valordesc = desconto / 100;
        const vl = valor * valordesc;
        const valorfinal = valor - vl;

        return valorfinal;
    }
    function verificarDesconto(valor){
        if(valor <= 0){
            return ''
        }
        else{
            return 'COM DESCONTO DE ' + valor + '% Á VISTA NO PIX';
        }
    }

    function adicionarCarrinho(){
        let carrinho = [];
        if(Storag ('carrinho')){
            carrinho = Storag('carrinho');
        }

        if(!carrinho.find(item => item.id == id)){
            carrinho.push({
                id: id,
                qtd: 1
            })
            Storag('carrinho', carrinho);
        }
        toast.success('Produto adicionado ao carrinho');
    }

    function valorProd(valor){
        const vl = valor.toFixed(2);
        return vl;
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
                            <h1 className='text-cont-ava'>
                                20 avaliações
                            </h1>
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
                                DE R$ {produtos.info.valorProduto} POR
                            </p>

                            <p className='text-valor-infoprod'>
                                R$ {valorProd(valorDesconto(produtos.info.valorProduto, produtos.info.valorDesconto))}
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
                                <button className='botao-comprar' onClick={comprar}>  
                                    <img onClick={comprar} src={Carrinho} className='carrinho-add'/>
                                    <h1 onClick={comprar} className='text-comprar'>
                                        Comprar
                                    </h1> 
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='cont-catgerais'>
                <div className='cont-titulo-catgerais'>
                    <h1 className='titulo-catgerais'>
                        Características Gerais
                    </h1>
                </div>
                <div className='cont-text-catgerais'>
                    <h1 className='text-catgerais'>
                        Qual é o diferencial que a ByteSpeed oferece?
                    </h1>
                </div>
                <div className='cont-caracteristicas'>
                    <div className='cont-car01'>
                        <h1 className='caracteristica-01'>
                            Qualidade      
                            das peças
                        </h1>
                        <img src={ImgCat1} className='img-cat-01'/>
                        <p className='text-cat-01'>
                            Hardware de primeira e de marcas renomadas
                        </p>
                    </div>
                    <div className='cont-car01'>
                        <h1 className='caracteristica-01'>
                            Testes e certificação
                        </h1>
                        <img src={ImgCat2} className='img-cat-01'/>
                        <p className='text-cat-01'>
                            Máquinas com certificado de qualidade
                        </p>
                    </div>
                    <div className='cont-car01'>
                        <h1 className='caracteristica-03'>
                            Garantia de segurança
                        </h1>
                        <img src={ImgCat3} className='img-cat-03'/>
                        <p className='text-cat-01'>
                            Garantia fornecida por componente
                        </p>
                    </div>
                    <div className='cont-car01'>
                        <h1 className='caracteristica-03'>
                            Atendimento exclusivo
                        </h1>
                        <img src={ImgCat4} className='img-cat-03'/>
                        <p className='text-cat-01'>
                            Você será atendido pelo melhor time do Brasil
                        </p>
                    </div>
                </div>
            </section>
            <section className='cont-descricao'>
                <div className='cont-titulo-desc'>
                        <img src={DescIcon} className='img-desc'/>
                        <h1 className='titulo-desc'>
                            Descrição do produto
                        </h1>
                </div>
                <div className='cont-text-desc'>
                    <p className='text-desc'>
                        {produtos.info.descricao}
                    </p>
                </div>
            </section>
            <section className='cont-infotec'>
                <div className='cont-titulo-desc'>
                        <img src={InfoIcon} className='img-info'/>
                        <h1 className='titulo-desc'>
                            Informações técnicas
                        </h1>
                </div>
                <div className='cont-informacoes'>
                    <p className='paragrafo-informacoes'>
                        {produtos.info.informações}
                    </p>
                </div>
            </section>
            <section className='cont-avaliacoes'>
                <div className='cont-titulo-ava'>
                        <div className='cont-01-ava'>
                            <img src={AvIcon} className='img-info'/>
                            <h1 className='titulo-av'>
                                Avaliação dos clientes
                            </h1>
                        </div>
                        <button onClick={() => setIsModalVisible(true)} className='botao-cliente-avaliar'>
                            <img onClick={() => setIsModalVisible(true)} src={StarAva} className='img-star-ava' />
                            <p onClick={() => setIsModalVisible(true)} className='text-cliente-avaliar'>
                                Faça sua avaliação!
                            </p>
                        </button>
                <Modal isOpen={isModalVisible} setIsOpen={setIsModalVisible}>
                    <div>
                        <h1>
                            Modal
                        </h1>
                    </div>
                </Modal>
                </div>
                <div className='cont-maior-ava'>
                    <div className='cont-text-maiorav'>
                        <p className='text-maior-ava'>
                            Maior Avaliação:
                        </p>
                    </div>
                <div className='cont-maior-menor-ava'>
                    <div className='cont-melhor-ava'>
                        <div className='cont-filha1-melhorava'>
                            <h1 className='titulo-ava-cliente'>
                                Cliente:
                            </h1>
                            <h1 className='titulo-ava-geral'>
                                Geral:
                            </h1>
                            <h1 className='titulo-ava-desemp'>
                                Desempenho:
                            </h1>
                            <h1 className='titulo-ava-atendi'>
                                Atendimento:
                            </h1>
                            <h1 className='titulo-ava-sats'>
                                Satisfação:
                            </h1>
                        </div>
                        <div className='cont-filha2-melhorava'>
                            <p className='nome-usuario-text'>
                                {produtos.maiorAvaliacao.nmUsuario}
                            </p>
                            {estrelasAvaliacao(produtos.maiorAvaliacao.avGeral)}
                            {estrelasAvaliacao(produtos.maiorAvaliacao.avDesempenho)}
                            {estrelasAvaliacao(produtos.maiorAvaliacao.avAtendimento)}
                            {estrelasAvaliacao(produtos.maiorAvaliacao.avSatsfacao)}
                        </div>
                    </div>
                    <div className='cont-op-geral'>
                        <div className='cont-filha3-melhorava'>
                            <div className='cont-titulo-op-geral'>
                                <h1 className='titulo-op-geral'>
                                    Opinião geral:
                                </h1>
                            </div>
                            <div className='cont-avalialiacoes'>
                                <h1 className='titulo-ava-geral'>
                                    Geral:
                                </h1>
                                <h1 className='titulo-ava-desemp'>
                                    Desempenho:
                                </h1>
                                <h1 className='titulo-ava-atendi'>
                                    Atendimento:
                                </h1>
                                <h1 className='titulo-ava-sats'>
                                    Satisfação:
                                </h1>
                            </div>
                        </div>
                        <div className='cont-filha4-melhorava'>
                            {estrelasAvaliacao(opiniaoGeral(produtos.opGeral.totalGer, produtos.opGeral.qtdUsers))}
                            {estrelasAvaliacao(opiniaoGeral(produtos.opGeral.totalDes, produtos.opGeral.qtdUsers))}
                            {estrelasAvaliacao(opiniaoGeral(produtos.opGeral.totalAte, produtos.opGeral.qtdUsers))}
                            {estrelasAvaliacao(opiniaoGeral(produtos.opGeral.totalSatis, produtos.opGeral.qtdUsers))}
                        </div>
                    </div>
                </div>
                </div>
                <div className='cont-maior-ava'>
                    <div className='cont-text-maiorav'>
                        <p className='text-maior-ava'>
                            Menor Avaliação:
                        </p>
                    </div>
                <div className='cont-maior-menor-ava'>
                    <div className='cont-melhor-ava'>
                        <div className='cont-filha1-melhorava'>
                            <h1 className='titulo-ava-cliente'>
                                Cliente:
                            </h1>
                            <h1 className='titulo-ava-geral'>
                                Geral:
                            </h1>
                            <h1 className='titulo-ava-desemp'>
                                Desempenho:
                            </h1>
                            <h1 className='titulo-ava-atendi'>
                                Atendimento:
                            </h1>
                            <h1 className='titulo-ava-sats'>
                                Satisfação:
                            </h1>
                        </div>
                        <div className='cont-filha2-melhorava'>
                            <p className='nome-usuario-text'>
                                {produtos.menorAvaliacao.nmUsuario}
                            </p>
                            {estrelasAvaliacao(produtos.menorAvaliacao.avGeral)}
                            {estrelasAvaliacao(produtos.menorAvaliacao.avDesempenho)}
                            {estrelasAvaliacao(produtos.menorAvaliacao.avAtendimento)}
                            {estrelasAvaliacao(produtos.menorAvaliacao.avSatsfacao)}
                        </div>
                    </div>
                    <div className='cont-op-geral'>
                        <div className='cont-filha3-melhorava'>
                            <div className='cont-titulo-op-geral'>
                                <h1 className='titulo-op-geral'>
                                    Opinião geral:
                                </h1>
                            </div>
                            <div className='cont-avalialiacoes'>
                                <h1 className='titulo-ava-geral'>
                                    Geral:
                                </h1>
                                <h1 className='titulo-ava-desemp'>
                                    Desempenho:
                                </h1>
                                <h1 className='titulo-ava-atendi'>
                                    Atendimento:
                                </h1>
                                <h1 className='titulo-ava-sats'>
                                    Satisfação:
                                </h1>
                            </div>
                        </div>
                        <div className='cont-filha4-melhorava'>
                            {estrelasAvaliacao(opiniaoGeral(produtos.opGeral.totalGer, produtos.opGeral.qtdUsers))}
                            {estrelasAvaliacao(opiniaoGeral(produtos.opGeral.totalDes, produtos.opGeral.qtdUsers))}
                            {estrelasAvaliacao(opiniaoGeral(produtos.opGeral.totalAte, produtos.opGeral.qtdUsers))}
                            {estrelasAvaliacao(opiniaoGeral(produtos.opGeral.totalSatis, produtos.opGeral.qtdUsers))}
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className='cont-outras-op'>
            <div className='cont-titulo-outrasop'>
                        <div className='cont-01-ava'>
                            <img src={OutrasOp} className='img-info'/>
                            <h1 className='titulo-av'>
                                Outras Opções
                            </h1>
                        </div>
                        <div className='cont-vertodos'>
                            <p className='text-vertodos'>
                                Ver todos
                            </p>
                            <img src={Seta} className='img-seta'/>
                        </div>
                </div>
                <div className='cont-cards-outrasop'>
                    <div className='cont-filha1-cards'>
                        <CardOutrasOp />
                    </div>
                </div>
            </section>
            <section className='cont-rodape-produto'>
                <Rodape />
            </section>
        </main>
    )
}