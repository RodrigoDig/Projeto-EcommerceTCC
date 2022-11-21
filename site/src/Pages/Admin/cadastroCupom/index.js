import './index.scss';

import Cabecalho04 from '../../../Components/Cabeçalho04';
import CupomLogo from '../../../assets/images/cupom (1).png';

import {Cupom, alterarCupom, buscarId } from '../../../Api/cadCupomAPI';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export default function CupomCad    () {
    const [codigo, setCodigo] = useState();
    const [valor, setValor] = useState(0);
    const [restante, setRestante] = useState(0);
    const [id, setId] = useState(0);

    const { idParam } = useParams();

    useEffect(() => {
        if(idParam){
            carregarCupom();
        }
    }, [])

    async function carregarCupom(){
        const resposta = await buscarId(idParam);
        setCodigo(resposta.codigo);
        setValor(resposta.valor);
        setRestante(resposta.restante);
        setId(resposta.id);
    }

    async function salvarClick() {
        try {

            if(id === 0){
                const novoCupom = await Cupom(codigo, valor, restante);
                setId(novoCupom.id);
                toast.success('Cupom cadastrado com sucesso!')
            }
            else {
                await alterarCupom(id, codigo, valor, restante);
                toast.success('Cupom alterado com sucesso!')
            }
        
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    function novoClick(){
        setId(0);
        setCodigo('');
        setValor(0);
        setRestante('');

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
                        <label>Código do Cupom:</label>
                        <input type='text' value={codigo} onChange={e => setCodigo(e.target.value)}/>
                    </div>

                    <div className='informações-cupom'>
                        <label>Valor:</label>
                        <input type='text' value={valor} onChange={e => setValor(e.target.value)}/>
                    </div>

                    <div className='informações-cupom'>
                        <label>Restante:</label>
                        <input type='number'value={restante} onChange={e => setRestante(e.target.value)} />
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