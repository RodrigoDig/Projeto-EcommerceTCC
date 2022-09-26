import { con } from "./connection.js";


export async function cadastrarProdutos(produto){
    const comando = `
        insert into tb_produto(id_departamento, id_categoria, nm_produto, vl_preco, vl_desconto, vl_avaliacao, ds_fabricante, qtd_estoque, ds_informacoes, ds_descricao, dt_garantia)
            values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    
    const [resp] = await con.query(comando, [
        produto.nome,
        produto.preco,
        produto.fabricante,
        produto.estoque,
        produto.avaliacao,
        produto.desconto,
        produto.idDepartamento,
        produto.id_categoria,
        produto.informacoes,
        produto.descricao,
        produto.garantia,
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

export async function enviarImagem(imagem, id){
    const comando = 
    `
    INSERT INTO TB_PRODUTO_IMAGEM (IMG_PRODUTO, ID_PRODUTO)
			VALUES (? , ?)
    `
    const [resposta] = await con.query(comando, [imagem, id]); 
    return resposta.affectedRows;
}