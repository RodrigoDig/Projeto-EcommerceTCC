import './index.scss';

export default function CardEndereco(props){
    return(
        <div className="cont-main-cardendereco">
            <div className='cont-001'>
                <h1 className="titulo-endereco">
                    Endereço Principal
                </h1>
            </div>
            <h1 className='nome-endereco'>
                {props.item.logadouro}
            </h1>
            <h1 className='numero-endereco'>
                Numero: {props.item.numero}
            </h1>
            <h1 className='cep-cidade-endereco'>
                CEP <p className='numero-cep'>{props.item.cep}</p> - {props.item.cidade} {props.item.estado}
            </h1>
        </div>
    )
}