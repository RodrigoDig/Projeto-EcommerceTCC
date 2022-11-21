export default function Componente({item: {id, logadouro, numero, cep, cidade, estado}, selecionar, selecionado}) {
    return (
        <div className='Componente-end' onClick={() => selecionar(id)} style={{color : selecionado ? '#f27400' : '#f20000' } }>

            <div className='end-etp1'>
                <h2>Rua: {logadouro}</h2>
                <h2>Número: {numero}</h2>
                <h2>CEP: {cep}</h2>
                <h2>Cidade: {cidade} - {estado}</h2>
            </div>
        </div>
    )
}