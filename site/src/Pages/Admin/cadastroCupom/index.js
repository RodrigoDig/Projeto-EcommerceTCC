import './index.scss';

import Cabecalho04 from '../../../Components/Cabeçalho04';
import CupomLogo from '../../../assets/images/cupom (1).png';

import { } from '../../../Api/cadCupomAPI';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export default function Cupom() {
    const [cupom, setCupom] = useState();
    const [codigo, setCodigo] = useState();
    const [desconto, setDesconto] = useState(0);
    const [inscricao, setInscricao] = useState();
    const [vencimento, setVencimento] = useState();
    const [id, setId] = useState(0);

    const { idParam } = useParams();

    useEffect(() => {
        if(idParam){
            carregarCupom();
        }
    }, [])

    async function carregarCupom(){
        const resposta = await buscarId(idParam);
        //setCupom(resposta.cupom);
        //setCodigo(resposta.codigo);
        //setDesconto(resposta.desconto);
        //setInscricao(resposta.inscricao);
        //setVencimento(resposta.vencimento);
        //setId(resposta.id);
    }

    async function salvarClick() {
        try {

            if(id === 0){
                //const novoCupom = await cCupom(cupom, codigo, desconto, inscricao, vencimento);
                setId(novoCupom.id);
                toast.success('Cupom cadastrado com sucesso!')
            }
            else {
                //await alterarCupom(id, cupom, codigo, desconto, inscricao, vencimento);
                toast.success('Cupom alterado com sucesso!')
            }
        
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    function novoClick(){
        setId(0);
        setCupom('');
        setCodigo('');

    }

    return (
        <main>
            <section>
                <Cabecalho04 />
            </section>
            <section className='componente-inicial'>
                <div className='componente-titulo'>
                    <img src={CupomLogo} />
                    <h1>Adicionar Cupom</h1>
                </div>

                <hr/>
                
                <div className='componente-bloco-informações'>
                    <div className='informações-cupom'>
                        <label>Nome Cupom:</label>
                        <input type='text' value={cupom} onChange={e => setCupom(e.target.value)}/>
                    </div>

                    <div className='informações-cupom'>
                        <label>Código do Cupom:</label>
                        <input type='text' value={codigo} onChange={e => setCodigo(e.target.value)}/>
                    </div>

                    <div className='informações-cupom'>
                        <label>Valor de desconto:</label>
                        <input type='number'value={desconto} onChange={e => setDesconto(e.target.value)} />
                    </div>

                    <div className='informações-cupom'>
                        <label>Data de inscrição:</label>
                        <input type='date' value={inscricao} onChange={e => setInscricao(e.target.value)}/>
                    </div>

                    <div className='informações-cupom'>
                        <label>Vencimento:</label>
                        <input type='date' value={vencimento} onChange={e => setVencimento(e.target.value)}/>
                    </div>

                    <div className='botao-cupom'>
                        <button onClick={salvarClick}>Cadastrar</button> &nbsp; &nbsp;
                        <button onClick={novoClick}>Novo</button>
                    </div>
                </div>
            </section>
        </main>
    )
}