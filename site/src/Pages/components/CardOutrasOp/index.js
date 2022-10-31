import './index.scss';
import React from 'react';

import { useState } from 'react';
import CoracaoIcon from '../../../assets/images/Coracao-icon.svg';
import Coracao2Icon from '../../../assets/images/Coracao-icon02.svg';

export function CardOutrasOp(props){
    const [favorito, setFavorito] = useState(CoracaoIcon);

    function favoritado() {
        const resp = '';
        if (favorito == Coracao2Icon) {
            resp = setFavorito(CoracaoIcon)
        }
        else if (favorito == CoracaoIcon) {
            resp = setFavorito(Coracao2Icon);
        }
        return resp;
    }

    return(
        <div className='cont-main-outrasOp'>
            <div className='cont-img-fav'>
                <img  className='img-produto'/>
                <div className='cont-icon-favorito'>
                    <img className='coracao-icon-card' onClick={favoritado} />
                </div>
            </div>
            <div className='cont-nmprod'>
                <div className='cont-titulo-nmprod'>
                    <p className='paragrafo-nmprod'>
                        Pc Gamer Fácil Intel Core I5 3470S 8Gb DDR3 GeForce GT 730 2Gb 128 bits HD 500Gb
                    </p>
                </div>
            </div>
            <div className='cont-valorprod'>
                <h1 className='valorprod'>
                    R$ 1.860, 00
                </h1>
            </div>

        </div>
    )
}