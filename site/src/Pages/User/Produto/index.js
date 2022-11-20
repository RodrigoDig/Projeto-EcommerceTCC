import React, { useEffect, useState } from 'react';
import './index.scss';


import Cabecalho1 from '../../../Components/Cabeçalho01';
import CoracaoIcon from '../../../assets/images/Coracao-icon.svg';
import Coracao2Icon from '../../../assets/images/Coracao-icon02.svg'
import { CardOutrasOp } from '../../components/CardOutrasOp';
import { useNavigate } from 'react-router-dom';

import Storag from 'local-storage';
import Carrinho from '../../../assets/images/Carrinho-branco.svg'
import VerifiIcon from'../../../assets/images/produto-avaliado.svg';
import ImgCat1 from '../../../assets/images/img-cat-01.png';
import ImgCat2 from '../../../assets/images/img-cat-02.png';
import ImgCat3 from '../../../assets/images/img-cat-03.png';
import ImgCat4 from '../../../assets/images/img-cat-04.png';
import DescIcon from '../../../assets/images/img-desc.png';
import InfoIcon from '../../../assets/images/img-info.png';
import AvIcon from '../../../assets/images/img-avaliacao.png';
import SuaAv from '../../../assets/images/icon-sua-ava.svg';
import StarAva from '../../../assets/images/star-icon.svg';
import OutrasOp from '../../../assets/images/icon-outrasop.png';
import Seta from '../../../assets/images/seta-vertodos.svg';
import Rodape from '../../../Components/Rodapé';
import Modal from '../../../Components/Modal';

import { buscarProdutoDepNm, imagensProduto, prodSelCompra }from '../../../Api/cadProdutoApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { estrelasAvaliacao } from '../../components/estrelaAva';
import { EstrelasAvaliacao2 } from '../../components/estrelaSuaAva';
import { API_URL } from '../../../Api/config';
import { buscarImgProd } from '../../../Api/cadProdutoApi';
import { verificarProdutoFavoritado2 } from '../../../Api/cadProdutoApi';
import { inserirAvaliacao } from '../../../Api/usuarioAvaliacao';
import { verificarUsuarioAvaliacao } from '../../../Api/usuarioAvaliacao';
import storage from 'local-storage';

export default function Produto(){
    const [produtos, setProdutos] = useState({ info: {}, cat: [], maiorAvaliacao: [], menorAvaliacao: [], opGeral: []});
    const [imagens, setImagens] = useState({imagem1: {}, imagem2: {}, imagem3: {}});
    const [idprod, setIdProd] = useState();
    const [idUser, setIdUser] = useState();
    const[geral, setGeral] = useState(0);
    const[desempenho, setDesempenho] = useState(0);
    const[atendimento, setAtendimento] = useState(0);
    const[satisfacao, setSatisfacao] = useState(0);
    const[verAva, setVerAva] = useState();
    const[produtosOp, setProdutosOp] = useState([]);

    const [verifica, setVerifica] = useState({ id: []})
    const { id } = useParams();
    const navigate = useNavigate();
    const userLogado = storage('user-logado'); 
    
    
    useEffect(() => {
        if(userLogado === null || !userLogado){
            setIdUser('Não logado');
        }
        else{
            setIdUser(userLogado.id);
        }
    }, [])
    
    useEffect(() => {
        carregarPag();
    }, [])

    useEffect(() => {
        setIdProd(produtos.info.idProduto);
        carregarOutrasOp(produtos.info.nomeDepartamento);
    }, [produtos])
    
    useEffect(() =>{
        if(userLogado === undefined || userLogado === null || !userLogado){
            verificarSeJaAv(undefined, produtos.info.idProduto);
            verificarItem(undefined, idprod);
        }
        else{
            verificarSeJaAv(userLogado.id, produtos.info.idProduto);
            verificarItem(userLogado.id, idprod);
        }
    }, [idprod])
    
    async function carregarPag(){
        const r = await prodSelCompra(id);
        const im = await imagensProduto(id);
        setImagens(im);
        setProdutos(r);
    }
    
    async function carregarOutrasOp(){
        const outrasOp = await buscarProdutoDepNm(produtos.info.nomeDepartamento);
        setProdutosOp(outrasOp);
    }
    async function verificarItem(idU, idP){
        const a = await verificarProdutoFavoritado2(idU, idP);
        setVerifica(a);
    }
    
    function opiniaoGeral(item, qtd){
        let condicao = item / qtd;
        return Math.floor(condicao);
    }
    
    async function confirmarAvaliacao(idUs, idPro, geral, des, ate, satis, nmUser){
        try{
            const resp = await inserirAvaliacao(idUs, idPro, geral, des, ate, satis);
            toast.success('Obrigado ' + nmUser + ' por sua avaliação :)')
        }catch(err){
            toast.error(err.response.data.erro);
        }

    }

    function querFavoritar(){
        if(!storage('user-logado')){
            carregarLogins2();
        }
    }

    function lerEstrelas(estrela, estrelas) {
        if(estrelas === 0){
            return 'star-icon1'
        }
        if (estrelas <= estrela)
            return 'star-icon ativo'
        else
            return 'star-icon'
    }

    function verificarSeEstáVerificado(idUsuario, idProd){
        if(idUsuario === 'Não logado' || !idUsuario || idUsuario === undefined){
            return CoracaoIcon
        } else{
            const resposta = verifica.id;
            
            if(resposta == undefined || resposta === null || !resposta || resposta == ''){
                return CoracaoIcon
            }
            else{
                return Coracao2Icon
            }
        }
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

    function verificarDesconto(valor){
        if(valor <= 0){
            return ''
        }
        else{
            return 'COM DESCONTO DE ' + valor + '% Á VISTA NO PIX';
        }
    }

    function carregarLogins2(){
        let min = Math.ceil(1);
        let max = Math.floor(2);
        let retorno = Math.floor(Math.random() * (max - min + 1)) + min;
        if(retorno === 1){
                navigate('/login/style1')
        }
        else if(retorno === 2){
                navigate('/login/style2')
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

    async function verificarSeJaAv(idUs, idProd){
        const resposta = await verificarUsuarioAvaliacao(idUs, idProd);
        if(idUs === undefined){
            setVerAva('-');
        }
        else{
            setVerAva(resposta.id);
        }
    }

    function exibirAv(objeto){
        if(objeto === undefined || objeto === null || !objeto || objeto === ''){
            return  <div className='cont-verificacao-bot2'>
                        <button className='botao-avaliar' onClick={() => confirmarAvaliacao(userLogado.id, produtos.info.idProduto, geral, desempenho, atendimento, satisfacao, userLogado.nome)}>
                            Confirmar
                        </button>
                    </div>
        }
        else if(String(objeto) === '-'){
            return <div className='cont-verificacao-bot3'>
                        <h1 className='faca-login'>
                            Faça Login para Avaliar
                        </h1>
                        <button className='login-botao' onClick={() => querFavoritar()}>
                            Login
                        </button>
                    </div>
        }
        else{
            return  <div className='cont-verificacao-bot'>
                        <div className='cont-verifi'>
                            <h1 className='titulo-recebemos'>
                                Recebemos sua Avaliação
                            </h1>
                            <img src={VerifiIcon} className='icone-verifi'/>
                        </div>
                    </div>  
        }
    }
    
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
                    <img src={verificarSeEstáVerificado(idUser, produtos.info.idProduto)} className='favoritar-infoprod' onClick={querFavoritar}/>
                </div>
                <div className='cont-prodvl-infoprod'>
                    <div className='cont-avaimgs-infoprod'>
                        <div className='cont-ava-infoprod'>
                            {estrelasAvaliacao(produtos.info.avaliacao)}
                            <h1 className='text-cont-ava'>
                                20 avaliações
                            </h1>
                        </div>
                        <div className='cont-imagens'>                            
                            <div className='cont-imagem-maior-infoprod'>
                                <img src={mostrarImg(imagens.imagem1.img)} className='imagem1-prod' />
                            </div>
                            <div className='cont-imgs-infoprod'>
                                <img src={mostrarImg(imagens.imagem1.img)} className='imagem2-prod' />
                                <img src={mostrarImg(imagens.imagem2.img)} className='imagem2-prod'/>
                                <img src={mostrarImg(imagens.imagem3.img)} className='imagem3-prod'/>
                            </div>
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
                            <div className='cont-avas-filha2'>
                                {estrelasAvaliacao(produtos.maiorAvaliacao.avGeral)}
                                {estrelasAvaliacao(produtos.maiorAvaliacao.avDesempenho)}
                                {estrelasAvaliacao(produtos.maiorAvaliacao.avAtendimento)}
                                {estrelasAvaliacao(produtos.maiorAvaliacao.avSatsfacao)}
                            </div>
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
                <div className='cont-men-ava'>
                    <div className='cont-text-maiorav'>
                        <p className='text-maior-ava'>
                            Menor Avaliação:
                        </p>
                    </div>
                <div className='cont-maior-menor-ava2'>
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
                    <div className='cont-op-geral2'>
                        <div className='cont-filha3-melhorava2'>
                            <div className='cont-titulo-suaava'>
                                <div className='cont-01-titulo'>
                                    <img src={SuaAv} className='icon-sua-av'/>
                                    <h1 className='titulo-sua-av'>
                                        Faça sua avaliação
                                    </h1>

                                </div>
                            </div>
                            <div className='cont-ava-usu'>

                                <div className='cont-avalialiacoes2'>
                                    <h1 className='titulo-sua-geral'>
                                        Geral:
                                    </h1>
                                    <h1 className='titulo-sua-desemp'>
                                        Desempenho:
                                    </h1>
                                    <h1 className='titulo-sua-atendi'>
                                        Atendimento:
                                    </h1>
                                    <h1 className='titulo-sua-sats'>
                                        Satisfação:
                                    </h1>
                                </div>
                                <div className='cont-filha4-melhorava2'>
                                    <ul className='cont-avaliacao-star2'>
                                        <li className={lerEstrelas(1, geral)} onClick={e => setGeral(1)}></li>
                                        <li className={lerEstrelas(2, geral)} onClick={e => setGeral(2)}></li>
                                        <li className={lerEstrelas(3, geral)} onClick={e => setGeral(3)}></li>
                                        <li className={lerEstrelas(4, geral)} onClick={e => setGeral(4)}></li>
                                        <li className={lerEstrelas(5, geral)} onClick={e => setGeral(5)}></li>
                                    </ul>
                                    <ul className='cont-avaliacao-star2'>
                                        <li className={lerEstrelas(1, desempenho)} onClick={e => setDesempenho(1)}></li>
                                        <li className={lerEstrelas(2, desempenho)} onClick={e => setDesempenho(2)}></li>
                                        <li className={lerEstrelas(3, desempenho)} onClick={e => setDesempenho(3)}></li>
                                        <li className={lerEstrelas(4, desempenho)} onClick={e => setDesempenho(4)}></li>
                                        <li className={lerEstrelas(5, desempenho)} onClick={e => setDesempenho(5)}></li>
                                    </ul>
                                    <ul className='cont-avaliacao-star2'>
                                        <li className={lerEstrelas(1, atendimento)} onClick={e => setAtendimento(1)}></li>
                                        <li className={lerEstrelas(2, atendimento)} onClick={e => setAtendimento(2)}></li>
                                        <li className={lerEstrelas(3, atendimento)} onClick={e => setAtendimento(3)}></li>
                                        <li className={lerEstrelas(4, atendimento)} onClick={e => setAtendimento(4)}></li>
                                        <li className={lerEstrelas(5, atendimento)} onClick={e => setAtendimento(5)}></li>
                                    </ul>
                                    <ul className='cont-avaliacao-star2'>
                                        <li className={lerEstrelas(1, satisfacao)} onClick={e => setSatisfacao(1)}></li>
                                        <li className={lerEstrelas(2, satisfacao)} onClick={e => setSatisfacao(2)}></li>
                                        <li className={lerEstrelas(3, satisfacao)} onClick={e => setSatisfacao(3)}></li>
                                        <li className={lerEstrelas(4, satisfacao)} onClick={e => setSatisfacao(4)}></li>
                                        <li className={lerEstrelas(5, satisfacao)} onClick={e => setSatisfacao(5)}></li>
                                    </ul>
                                </div>
                                {exibirAv(verAva)}
                            </div>
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
                        {produtosOp.map(item =>
                            <CardOutrasOp item = {item}/>
                        )}
                    </div>
                </div>
            </section>
            <section className='cont-rodape-produto'>
                <Rodape />
            </section>
        </main>
    )
}