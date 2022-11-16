// ICONES !!

import Vel from '../../../../assets/images/icon-velocidade.svg';
import Memoria from '../../../../assets/images/icon-memoria.svg';
import CatGames from '../../../../assets/images/icon-cat-games.svg';

// ------------------------ fim --------------------------- \\

export default function verificarIconCategoria(nome){
    if(nome == 'Alto Desempenho Em Velocidade'){
        return Vel
    }
    else if(nome == 'Mais Memória'){
        return Memoria
    }
    else if(nome == 'Os Gamers Adoram'){
        return CatGames
    }
}