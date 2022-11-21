
export async function validarAvaliacaoDoUsuario(produto) {
    if (produto.idUsuario === undefined || !produto.idUsuario) {
        throw new Error('Faça login para avaliar os Produtos!');
    }
    else if (produto.idProduto === undefined || !produto.idProduto) {
        throw new Error('Produto não chegou :(');
    }
    else if (produto.geral === undefined || !produto.geral) {
        throw new Error('Avaliação geral é OBRIGATÓRIA!');
    }
    else if (produto.desempenho === undefined || !produto.desempenho) {
        throw new Error('Avaliação de Desempenho é OBRIGATÓRIA!');
    }
    else if (produto.atendimento === undefined || !produto.atendimento) {
        throw new Error('Avaliação de Atendimento é OBRIGATÓRIA!');
    }
    else if (produto.satisfacao === undefined || !produto.satisfacao) {
        throw new Error('Avaliação de Satisfação é OBRIGATÓRIA!');
    }
}

