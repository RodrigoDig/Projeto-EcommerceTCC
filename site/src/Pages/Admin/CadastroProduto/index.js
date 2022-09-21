import './index.scss';

import Cabecalho04 from '../../../Components/Cabeçalho04';
import CadProdLogo from '../../../assets/images/Cad-Prodfase02.svg'
import SalvarImgIcon from '../../../assets/images/Salvar-Imagem.svg';
import EstrelaIcon from '../../../assets/images/Star-fase1.svg';

import {listarCategorias} from '../../../Api/categoriaApi';
import {listarDepartamentos} from '../../../Api/departamentoApi';
import {useState, useEffect} from 'react';

export default function Cadastro(){
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [fabricante, setFabricante] = useState('');

    const [idCategoria1, setIdCategoria1] = useState();
    const [idCategoria2, setIdCategoria2] = useState();
    const [idCategoria3, setIdCategoria3] = useState();
    const [categorias, setCategorias] = useState([]);

    const [idDepartamento, setIdDepartamento] = useState();
    const [departamentos, setDepartamentos] = useState([]);

    const [catSelecionadas, setCatSelecionadas] = useState([]);


    function salvar() {
        alert('Categoria: ' + idCategoria1 + idCategoria2 + idCategoria3 + ', Departamento: ' + idDepartamento);
    }


    function buscarNomeCategoria(id) {
        const cat = categorias.find(item => item.id == id);
        return cat.categoria;
    }

    function adicionarCategoria() {
        const categorias = [...catSelecionadas, idCategoria1,idCategoria2,idCategoria3];
        setCatSelecionadas(categorias);
    }


    async function carregarDepartamentos() {
        const r = await listarDepartamentos();
        setDepartamentos(r);
    }


    async function carregarCategorias() {
        const r = await listarCategorias();
        setCategorias(r);
    }


    useEffect(() => {
        carregarCategorias();
        carregarDepartamentos();
    }, [])

    return(
        <main className='cont-main-cad'>
            <section className='cont-cabecalho'>
                <Cabecalho04 />
            </section>
            <section className='cont-section'>
                <div className='cont-titulo-cadastro'>
                    <img src={CadProdLogo} className='img-cad' />
                    <h2 className='txt-cad'>
                        Cadastrar Produto
                    </h2>
                </div>

                <div className='cont-infos-cad'>
                    <div className='cont-infocad-001'>
                        <div className='contfilha1-infocad-001'>
                            <h2 className='text1-infocad001'>
                                Nome
                            </h2> 
                            <input className='input1-infocad001' />
                            <h2 className='text2-infocad001'>
                                Preço
                            </h2>
                            <input className='input2-infocad001'/>
                            <h2 className='text2-infocad001'>
                                Fabricante
                            </h2>
                            <input className='input3-infocad001'/>
                            <h2 className='text2-infocad001'>
                                Quantia em Estoque
                            </h2>
                            <input className='input4-infocad001'/>
                        </div>
                        <div className='contfilha2-infocad-001'>
                            <h1 className='titulo-contfilha2-infocad001'>
                                Imagens
                            </h1>
                            <div className='contneta1-infocad001'>
                                <label for='arquivo1' className='selecionar-img1'>
                                    <h1 className='text-contneta1'>
                                        Selecionar Imagem 1
                                    </h1>
                                    <img src={SalvarImgIcon} />
                                    <input name='arquivo1' id='arquivo1' type='file' className='input-img1' />
                                </label>
                                <label for='arquivo2' className='selecionar-img2'>
                                    <h1 className='text-contneta1'>
                                        Selecionar Imagem 2
                                    </h1>

                                    <img src={SalvarImgIcon} />
                                    <input name='arquivo2' id='arquivo2' type='file' className='input-img1' />
                                </label>
                            </div>
                            <label for='arquivo3' className='selecionar-img3'>
                                    <h1 className='text-contneta1'>
                                        Selecionar Imagem 3
                                    </h1>

                                    <img src={SalvarImgIcon} />
                                    <input name='arquivo3' id='arquivo3' type='file' className='input-img1' />
                                </label>
                        </div>
                    </div>
                    <div className='cont-infocad-002'>
                        <div className='contfilha1-infocad-002'>
                            <h2 className='text1-infocad002'>
                             Caracteristicas
                            </h2> 
                            <input className='input1-infocad002' />

                            <label className='text2-infocad002'>Departamento:</label>
                                <select className='select-departamentos' value={idDepartamento} onChange={e => setIdDepartamento(e.target.value)}>
                                    <option selected disabled hidden >Selecione um Departamento</option>
                                    {departamentos.map(item=>
                                        <option value={item.id}> {item.departamento}</option>
                                    
                                    )}
                                    
                                </select>

                                <label className='text3-infocad002'>Categoria 1:</label>
                                <select className='select-categoria1' value={idCategoria1} onChange={e => setIdCategoria1(e.target.value )}>
                                    <option selected disabled hidden>Selecione uma Categoria</option>
                                    {categorias.map(item =>
                                        <option value={item.id}>{item.categoria}</option>
                                    )}
                                </select>        

                                <label className='text3-infocad002'>Categoria 2:</label>
                                <select className='select-categoria2'value={idCategoria2} onChange={e => setIdCategoria2(e.target.value )}>
                                    <option selected disabled hidden>Selecione uma Categoria</option>
                                    {categorias.map(item =>
                                        <option value={item.id}>{item.categoria}</option>
                                    )}
                                </select>

                                <label className='text3-infocad002'>Categoria 3:</label>
                                <select className='select-categoria3' value={idCategoria3} onChange={e => setIdCategoria3(e.target.value )}>
                                    <option selected disabled hidden>Selecione uma Categoria</option>
                                    {categorias.map(item =>
                                        <option value={item.id}>{item.categoria}</option>
                                    )}
                                </select>
                        </div>
                        <div className='contfilha2-infocad-002'>
                            <div className='cont1-contfilha2-infocad002'>
                                <h1 className='text1-filha2-002'>
                                    Avaliação
                                </h1>
                                <p className='number-avaliacao'>
                                    0
                                </p>
                            </div>
                            <div className='cont2-contfilha2-infocad002'>
                                <img src={EstrelaIcon} />
                                <img src={EstrelaIcon} />
                                <img src={EstrelaIcon} />
                                <img src={EstrelaIcon} />
                                <img src={EstrelaIcon} />
                            </div>
                            <div className='cont3-contfilha2-infocad002'>
                                <h1 className='text1-c3-contfilha2-infocad002'>
                                    Desconto
                                </h1>
                            </div>
                            <div className='cont4-contfilha2-infocad002'>
                                <div className='cont1-c4-contfilha2-infocad002'>
                                    <input type='radio' className='input-c2-c4' name='simounao' />
                                    <h2 className='sim-input'>
                                        Sim
                                    </h2>
                                </div>
                                <div className='cont2-c4-contfilha2-infocad002'>
                                    <input type='radio'id='inp' className='input-c2-c4' name='simounao' />
                                    <h2 for='inp' className='sim-input'>
                                        Não
                                    </h2>
                                </div>
                            </div>
                            <div className='cont5-contfilha2-infocad002'>
                                <h2 className='text1-c5-contfilha2-infocad002'>
                                    Valor do Desconto
                                </h2> 
                                <input className='input1-infocad001' />
                            </div>
                            <div className='cont5-contfilha2-infocad002' >
                                <h2 className='text1-c5-contfilha2-infocad002'>
                                    Garantia
                                </h2> 
                                <input className='input1-infocad001' type='date' />
                            </div>
                        </div>
                    </div>
                    <div className='cont-infocad-003'>
                        <h2 className='text1-infocad003'>
                            Informações Tecnicas
                        </h2> 
                        <input className='input1-infocad003' />
                        <h2 className='text1-infocad003'>
                            Descrição
                        </h2> 
                        <input className='input1-infocad003' />
                    </div>
                        <button className='botao-cad' onClick={salvar}>
                            CADASTRAR
                        </button>
                </div>
                
            </section>  
            
        </main>
    )
}