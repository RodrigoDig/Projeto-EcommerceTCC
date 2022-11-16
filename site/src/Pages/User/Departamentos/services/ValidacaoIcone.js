// ICONES !!

import Computadores from '../../../../assets/images/icon-computadores.svg';
import Games from '../../../../assets/images/games-icon.svg';
import Hardware from '../../../../assets/images/hard-icon.svg';

// ------------------------ fim --------------------------- \\

export default function verificarIcone(nome){
    if(nome == 'Hardware'){
        return Hardware;
    }
    else if(nome == 'Games'){
        return Games;
    }
    else if(nome == 'Computadores'){
        return Computadores;
    }
}