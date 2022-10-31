import './index.scss';

import Cabecalho04 from '../../../Components/Cabeçalho04';
import CupomLogo from '../../../assets/images/cupom (1).png';

import { cadCupom } from '../../../Api/cadCupomAPI';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Cupom() {
    const [cupom, setCupom] = useState();
    const [codigo, setCodigo] = useState();
    const [desconto, setDesconto] = useState();
    const [inscricao, setInscricao] = useState();
    const [vencimento, setVencimento] = useState();

    async function salvarClick() {
        try {
            const r = await cadCupom(cupom, codigo, desconto, inscricao, vencimento);
            toast.success('Cupom cadastrado com sucesso!')
        }
        catch (err) {
            toast.error(err.message);
        }
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
                        <button onClick={salvarClick}>Cadastrar</button>
                    </div>
                </div>
            </section>
        </main>
    )
}