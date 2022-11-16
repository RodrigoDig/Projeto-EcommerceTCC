import './index.scss';

export default function CardEndereco(){
    return(
        <div className="cont-main-cardendereco">
            <div className='cont-001'>
                <h1 className="titulo-endereco">
                    Endereço Principal
                </h1>
            </div>
            <h1 className='nome-endereco'>
                Rua Roberto Sampaio Ferreira
            </h1>
            <h1 className='numero-endereco'>
                Numero: 424
            </h1>
            <h1 className='cep-cidade-endereco'>
                CEP <p className='numero-cep'> 05848-150</p> - São Paulo SP
            </h1>
        </div>
    )
}