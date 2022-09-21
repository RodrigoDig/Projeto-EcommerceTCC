import { con } from "./connection.js";

export async function cadastrarProdutos(produto){
    const comando = `
        insert into tb_produto(id_departamento, nm_produto, vl_preco, vl_desconto, vl_avaliacao, ds_fabricante, qtd_estoque, ds_informacoes, ds_descricao, dt_garantia)
            values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const data = new Date(); 
    const [resp] = await con.query(comando, [
            produto.idDepartamento,
            produto.nome,
            produto.preco,
            produto.desconto,
            produto.avaliacao,
            produto.fabricante,
            produto.estoque,
            produto.informacoes,
            produto.descricao,
            data
        ])
    return resp.insertId; 
}

export async function salvarCategoria(idProduto, idCategoria){
    const comando =`
        insert into tb_produto_categoria(id_categoria, id_produto)
                values(?,?)
    `

    const [resp] = await con.query (comando, [idCategoria, idProduto])
}