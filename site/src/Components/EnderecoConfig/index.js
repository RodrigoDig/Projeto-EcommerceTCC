import './index.scss';

export default function ComponenteConfig({item: {logadouro, numero, cep, cidade, estado}}) {
    return (
        <div className='Componente-end-config'>
            <h2>Rua: {logadouro}</h2>
            <h2>Número: {numero}</h2>
            <h2>CEP: {cep}</h2>
            <h2>Cidade: {cidade} - {estado}</h2>
        </div>
    )
}