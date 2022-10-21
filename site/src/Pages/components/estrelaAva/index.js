import './index.scss';

export function estrelasAvaliacao(props){

    function lerEstrelas(valor, estrela) {
        if (valor > 5) {
            valor = Math.floor(valor / 2);
        }
        if (valor <= estrela)
            return 'star-icon ativo'
        else
            return 'star-icon'
    }
    return(
        <ul className='cont-avaliacao-star'>
            <li className={lerEstrelas(props, 1)} ></li>
            <li className={lerEstrelas(props, 2)} ></li>
            <li className={lerEstrelas(props, 3)} ></li>
            <li className={lerEstrelas(props, 4)} ></li>
            <li className={lerEstrelas(props, 5)} ></li>
        </ul>
    )
}