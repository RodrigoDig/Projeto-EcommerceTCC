import './index.scss';
import { Link } from 'react-router-dom';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Cabecalho04 from '../../../Components/Cabeçalho04';

    
export default function ConsultarEstoque(){

    useEffect(() => {
        if(!storage('admin-logado')){
            navigate('/loginadm')
        }
    }, [])

    const navigate = useNavigate();

    function sairClick(){
        storage.remove('admin-logado');
        navigate('/loginadm')
    }

    return(
        <Link to='/loginadm'>
            <button onClick={sairClick}>
                SAIR
            </button>
        </Link>
    )
}