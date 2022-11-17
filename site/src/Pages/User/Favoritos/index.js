import React from 'react';
import './index.scss';
import Cabecalho01 from '../../../Components/Cabeçalho07';
import Cabecalho02 from '../../../Components/CabeçalhoUser';
import CFavoritos from '../../../Components/Favoritos';

export default function Favoritos(){
    return(
        <main>

            <section className='sct-1'>

                <div className='cont-3'>
                    <Cabecalho01/>

                    <div className='cont-4'>
                        <div className='aln-1'>
                            <Cabecalho02/>
                        </div>
                        <div className='aln-2-2'>
                            <div className='aln-2'>
                                <CFavoritos/>
                            </div>
                        </div>    
                    </div>

                </div>


            </section>

        </main>
    )
}