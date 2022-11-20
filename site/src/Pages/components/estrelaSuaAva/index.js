import './index.scss';
import { useState } from 'react';

export function EstrelasAvaliacao2(){
    const [estrelas, setEstrelas] = useState(0);

    function lerEstrelas(estrela) {
        if(estrelas === 0){
            return 'star-icon1'
        }
        if (estrelas <= estrela)
            return 'star-icon ativo'
        else
            return 'star-icon'
    }
    return(
        <ul className='cont-avaliacao-star2'>
            <li className={lerEstrelas(1)} onClick={e => setEstrelas(1)}></li>
            <li className={lerEstrelas(2)} onClick={e => setEstrelas(2)}></li>
            <li className={lerEstrelas(3)} onClick={e => setEstrelas(3)}></li>
            <li className={lerEstrelas(4)} onClick={e => setEstrelas(4)}></li>
            <li className={lerEstrelas(5)} onClick={e => setEstrelas(5)}></li>
        </ul>
    )
}