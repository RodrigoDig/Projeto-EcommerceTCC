import { con } from "./connection.js";


export async function cadastrarProdutos(produto){
    const comando = `
        insert into tb_produto(id_departamento, nm_produto, vl_preco, vl_desconto, vl_avaliacao, ds_fabricante, qtd_estoque, ds_informacoes, ds_descricao, dt_garantia, id_admin_login)
            values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const data = new Date(); 
    const [resp] = await con.query(comando, [
        produto.nome,
        produto.preco,
        produto.fabricante,
        produto.estoque,
        produto.caracteristicas,
        produto.avaliacao,
        produto.desconto,
        produto.idDepartamento,
        produto.informacoes,
        produto.descricao,
        produto.garantia,
        produto.admin,
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

export async function enviarImagem(imagem, id){
    const comando = 
    `
    INSERT INTO TB_PRODUTO_IMAGEM (IMG_PRODUTO, ID_PRODUTO)
					   VALUES (? , ?)
    `
    const [resposta] = await con.query(comando, [imagem, id]); 
    return resposta.affectedRows;
}