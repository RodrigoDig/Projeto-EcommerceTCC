import { alterarProduto } from "../repository/produtoRepository.js";
import { Router } from 'express';

const server = Router();

server.put('/produto/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const altProduto = req.body;

        if (altProduto.nome == undefined || altProduto.nome == '') {
            throw new Error('Nome do produto é obrigatório!');
        }
        else if (isNaN(altProduto.preco) || altProduto.preco <= 0) {
            throw new Error('Preço do produto é obrigatório!');
        }
        else if (altProduto.desconto == undefined) {
            throw new Error('Desconto é obrigatório, se nao houver mantenha em 0!');
        }
        else if (altProduto.desconto == NaN) {
            throw new Error('Desconto Invalido :(');
        }
        else if (altProduto.avaliacao == NaN || altProduto.avaliacao === undefined){
            throw new Error('Avaliação invalida :(')
        }
        else if (altProduto.fabricante == Number){
            throw new Error('Fabricante invalido')
        }
        else if (altProduto.avaliacao == undefined){
            throw new Error('O Fabricante é Obrigatório')
        }
        else if (altProduto.estoque == undefined){
            throw new Error('Informe a Quantia em estoque')
        } 
        else if (altProduto.informacoes == undefined){
            throw new Error('O produto precisa ter suas Informações !!')
        }
        else if (altProduto.descricao == undefined){
            throw new Error('Informe a Descrição do produto !!')
        }
        else if (altProduto.garantia == undefined){
            throw new Error('Informe o tempo de Garantia do Produto')
        }


        const resp = await alterarProduto(produto, id);
        if(resp != 1)
            throw new Error('O produto não pode ser alterado');
        else
            resp.status(204).send();
    }catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})