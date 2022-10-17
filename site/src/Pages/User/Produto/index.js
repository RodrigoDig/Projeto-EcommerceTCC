import React, { useEffect, useState } from 'react';
import './index.scss';

import Cabecalho1 from '../../../Components/Cabeçalho01';
import CoracaoIcon from '../../../assets/images/Coracao-icon.svg';
import { prodSelCompra }from '../../../Api/cadProdutoApi';

export default function Produto(){

    const [produtos, setProdutos] = useState([])

    function lerEstrelas(valor, estrela) {
        if (valor > 5) {
            valor = Math.floor(valor / 2);
        }
        if (valor <= estrela)
            return 'star-icon ativo'
        else
            return 'star-icon'
    }
    async function tdprodutos() {
        const resposta = await prodSelCompra();
        setProdutos(resposta);
    }

    useEffect(() => {
        tdprodutos();
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
                            {produtos.map(item =>
                                <ul className='cont-avaliacao-star'>
                                    <li className={lerEstrelas(item.avaliacao, 1)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 2)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 3)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 4)} ></li>
                                    <li className={lerEstrelas(item.avaliacao, 5)} ></li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className='cont-vlcompra-infoprod'>

                    </div>
                </div>
            </section>
        </main>
    )
}