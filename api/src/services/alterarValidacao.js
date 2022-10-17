import { alterarProduto } from "../repository/produtoRepository.js";

export async function alterarValid(produto) {

if (produto.nome == undefined || !produto.nome.trim()) {
    throw new Error('Nome do produto é obrigatório!');
}
else if (isNaN(produto.preco) || produto.preco <= 0) {
    throw new Error('Preço do produto é obrigatório!');
}
else if (produto.desconto == undefined || produto.desconto == NaN) {
    throw new Error('Desconto invalido, se nao houver mantenha em 0!');
}
else if (produto.desconto == NaN) {
    throw new Error('Desconto Invalido :(');
}
else if (produto.avaliacao == NaN || produto.avaliacao === undefined){
    throw new Error('Avaliação invalida :(');
}
else if (produto.fabricante == Number){
    throw new Error('Fabricante invalido');
}
else if (produto.avaliacao == undefined){
    throw new Error('O Fabricante é Obrigatório');
}
else if (produto.estoque == undefined){
    throw new Error('Informe a Quantia em estoque');
} 
else if (produto.informacoes == undefined){
    throw new Error('O produto precisa ter suas Informações !!');
}
else if (produto.descricao == undefined){
    throw new Error('Informe a Descrição do produto !!');
}
else if (produto.garantia == undefined){
    throw new Error('Informe o tempo de Garantia do Produto');
} 

    const alt = await alterarProduto(produto);

}

