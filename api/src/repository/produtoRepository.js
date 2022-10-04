import { con } from "./connection.js";


export async function cadastrarProdutos(produto){
    const comando = `
            INSERT INTO TB_PRODUTO(ID_DEPARTAMENTO, NM_PRODUTO, VL_PRECO, VL_DESCONTO, VL_AVALIACAO, DS_FABRICANTE, QTD_ESTOQUE, DS_INFORMACOES, DS_DESCRICAO, DT_GARANTIA)
            VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `

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
        produto.garantia,
        ])
    return resp.insertId; 
}

export async function salvarCategoria(idProduto, idCategoria){
    const comando =`
        insert into tb_produto_categoria(id_categoria, id_produto)
                values(?,?)
    `

    const [resp] = await con.query (comando, [idCategoria, idProduto]);
    return resp.affectedRows;
}

export async function enviarImagem(imagem, id){
    const comando = `   
        UPDATE tb_produto_imagem
            SET img_produto        = ?
        WHERE id_produto           = ? `;

    const [resposta] = await con.query(comando, [imagem, id]); 
    return resposta.affectedRows;
}

export async function listarProdutos() {
    const comando = ` 
    SELECT ID_PRODUTO              idProduto,
           ID_DEPARTAMENTO         idDepartamento,
           NM_PRODUTO              nomeProduto,
           VL_PRECO                valorProduto,
           VL_DESCONTO             valorDesconto, 
           VL_AVALIACAO            avaliacao,
           DS_FABRICANTE           fabricante,
           QTD_ESTOQUE             estoque,
           DS_INFORMACOES          informações,
           DS_DESCRICAO            descricao,
           DT_GARANTIA             garantia
    FROM   TB_PRODUTO	
    `
    const [respos] = await con.query(comando);
    return respos;
}

export async function buscarPorId(id){
    const comando = 
    `
    SELECT ID_PRODUTO              idProduto,
           ID_DEPARTAMENTO         idDepartamento,
           NM_PRODUTO              nomeProduto,
           VL_PRECO                valorProduto,
           VL_DESCONTO             valorDesconto, 
           VL_AVALIACAO            avaliacao,
           DS_FABRICANTE           fabricante,
           QTD_ESTOQUE             estoque,
           DS_INFORMACOES          informações,
           DS_DESCRICAO            descricao,
           DT_GARANTIA             garantia
    FROM   TB_PRODUTO
    WHERE ID_PRODUTO = ?
    `

    const [linhas] = await con.query(comando [id]);
    return linhas[0];
}

export async function buscarPorNome(nome){
    const comando = 
    `
    SELECT ID_PRODUTO              idProduto,
           ID_DEPARTAMENTO         idDepartamento,
           NM_PRODUTO              nomeProduto,
           VL_PRECO                valorProduto,
           VL_DESCONTO             valorDesconto, 
           VL_AVALIACAO            avaliacao,
           DS_FABRICANTE           fabricante,
           QTD_ESTOQUE             estoque,
           DS_INFORMACOES          informações,
           DS_DESCRICAO            descricao,
           DT_GARANTIA             garantia
    FROM   TB_PRODUTO
    WHERE NM_PRODUTO LIKE ?
    `;
    const [linhas] = await con.query(comando, [ `%${nome}%` ]);
    return linhas;
}

export async function buscarTodosProdutos(){
    const comando = 
    `
    SELECT ID_PRODUTO              idProduto,
           ID_DEPARTAMENTO         idDepartamento,
           NM_PRODUTO              nomeProduto,
           VL_PRECO                valorProduto,
           VL_DESCONTO             valorDesconto, 
           VL_AVALIACAO            avaliacao,
           DS_FABRICANTE           fabricante,
           QTD_ESTOQUE             estoque,
           DS_INFORMACOES          informações,
           DS_DESCRICAO            descricao,
           DT_GARANTIA             garantia
    FROM   TB_PRODUTO
    `;
    const [linhas] = await con.query(comando);
    return linhas;

}

export async function prodPromoImperdivel(){
    const comando = 
    `
    SELECT ID_PRODUTO              idProduto,
           ID_DEPARTAMENTO         idDepartamento,
           NM_PRODUTO              nomeProduto,
           VL_PRECO                valorProduto,
           VL_DESCONTO             valorDesconto, 
           VL_AVALIACAO            avaliacao,
           DS_FABRICANTE           fabricante,
           QTD_ESTOQUE             estoque,
           DS_INFORMACOES          informações,
           DS_DESCRICAO            descricao,
           DT_GARANTIA             garantia
    FROM   TB_PRODUTO
    WHERE  VL_DESCONTO > 20
    `
    const [linhas] = await con.query(comando)
    return linhas;
}


//API REMOVER PRODUTO E IMAGENS

export async function remomoverProdutoImagens(idProduto){
    const comando = ` 
            delete tb_produto_imagem
            where id_produto = ?
                             
    `
    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}


export async function remomoverProdutoCategoria(idProduto){
    const comando = ` 
            delete tb_produto_categoria 
            where id_produto = ?
                             
    `
    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}

export async function remomoverProduto(idProduto){
    const comando = ` 
            delete tb_produto
            where id_produto = ?
                             
    `
    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}