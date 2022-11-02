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

export async function salvarImagemProd(idProduto, imagemPath){
    const comando = `   
        insert into tb_produto_imagem(id_produto, img_produto)
                            values(? , ?);
    `

    const [resposta] = await con.query(comando, [idProduto, imagemPath]);
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
           NM_PRODUTO              nome,
           VL_PRECO                preco,
           VL_DESCONTO             desconto, 
           VL_AVALIACAO            avaliacao,
           DS_FABRICANTE           fabricante,
           QTD_ESTOQUE             estoque,
           DS_INFORMACOES          informacoes,
           DS_DESCRICAO            descricao,
           DT_GARANTIA             garantia
    FROM   TB_PRODUTO
    WHERE  ID_PRODUTO = ?
    `;

    const [linhas] = await con.query(comando, [id]);
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
    SELECT ID_PRODUTO              id,
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
    LIMIT  8
    `
    const [linhas] = await con.query(comando)
    return linhas;
}


//API REMOVER PRODUTO E IMAGENS

export async function remomoverProdutoImagens(idProduto){
    const comando = ` 
            delete from tb_produto_imagem
            where id_produto = ?
                             
    `
    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}


export async function remomoverProdutoCategoria(idProduto){
    const comando = ` 
            delete from tb_produto_categoria 
            where id_produto = ?
                             
    `
    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}

export async function remomoverProduto(idProduto){
    const comando = ` 
            delete from tb_produto
            where id_produto = ?
                             
    `
    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows;
}


export async function prodMaisVendidos(){
    const comando = 
    `
    SELECT ID_PRODUTO              id,
           NM_DEPARTAMENTO         nomeDepartamento,
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
    INNER JOIN TB_DEPARTAMENTO ON TB_PRODUTO.ID_DEPARTAMENTO  = TB_DEPARTAMENTO.ID_DEPARTAMENTO
    WHERE  QTD_ESTOQUE < 7
    LIMIT  4
    `
    const [linhas] = await con.query(comando)
    return linhas;
}

export async function depSelecionar(){
    const comando = 
    `
    SELECT ID_DEPARTAMENTO         idDepartamento,
           NM_DEPARTAMENTO         nomeDepartamento
    FROM   TB_DEPARTAMENTO
    LIMIT  3
    `
    const [linhas] = await con.query(comando)
    return linhas;
}


export async function alterarProduto(id, produto) {
    const comando = 
    `UPDATE TB_PRODUTO
     SET  ID_DEPARTAMENTO    =     ?,
          NM_PRODUTO         =     ?,
          VL_PRECO           =     ?,
          VL_DESCONTO        =     ?,
          VL_AVALIACAO       =     ?,
          DS_FABRICANTE      =     ?,
          QTD_ESTOQUE        =     ?,
          DS_INFORMACOES     =     ?,
          DS_DESCRICAO       =     ?,
          DT_GARANTIA        =     ?
    WHERE ID_PRODUTO = ?`

 const [alt] = await con.query(comando, 
    [produto.idDepartamento,
     produto.nome, 
     produto.preco,
     produto.desconto, 
     produto.avaliacao, 
     produto.fabricante, 
     produto.estoque, 
     produto.informacoes, 
     produto.descricao,
     produto.garantia,
     id]);
     return alt.affectedRows;
}

export async function produtoSelCompra(id){
    const comando =
    `
    SELECT ID_PRODUTO              idProduto,
           NM_DEPARTAMENTO         nomeDepartamento,
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
    INNER JOIN TB_DEPARTAMENTO
    ON TB_DEPARTAMENTO.ID_DEPARTAMENTO = TB_PRODUTO.ID_DEPARTAMENTO
    WHERE ID_PRODUTO = ?
    `
    const [linhas] = await con.query(comando, [id])
    return linhas[0];    
}

export async function categoriaSel(id){
    const comando = 
    `
    SELECT  ID_PRODUTO  idProd,
            NM_CATEGORIA nmCat
    FROM 	TB_CATEGORIA
 INNER JOIN TB_PRODUTO
         ON TB_PRODUTO.ID_PRODUTO = TB_PRODUTO.ID_PRODUTO
     WHERE  ID_PRODUTO = ?;
    `
    const [linhas] = await con.query(comando, [id])
    return linhas;   
}

export async function maiorAva(id){
    const comando = 
    `
    SELECT  ID_PRODUTO  idProd,
    NM_USUARIO  nmUsuario,
    VL_GERAL     avGeral,
    VL_DESEMPENHO avDesempenho,
    VL_ATENDIMENTO avAtendimento,
    VL_SATISFACAO  avSatsfacao
    FROM 	TB_PRODUTO_AVALIACAO
    INNER JOIN   TB_USUARIO
    ON  TB_USUARIO.ID_USUARIO = TB_PRODUTO_AVALIACAO.ID_USUARIO
    WHERE   ID_PRODUTO = ?
    ORDER BY avGeral
    DESC
    LIMIT 1;	
    `
    const [linhas] = await con.query(comando, [id])
    return linhas[0];   
}

export async function menorAva(id){
    const comando = 
    `
    SELECT  ID_PRODUTO  idProd,
    NM_USUARIO  nmUsuario,
    VL_GERAL     avGeral,
    VL_DESEMPENHO avDesempenho,
    VL_ATENDIMENTO avAtendimento,
    VL_SATISFACAO  avSatsfacao
    FROM 	TB_PRODUTO_AVALIACAO
    INNER JOIN   TB_USUARIO
    ON  TB_USUARIO.ID_USUARIO = TB_PRODUTO_AVALIACAO.ID_USUARIO
    WHERE   ID_PRODUTO = ?
    ORDER BY avGeral
    LIMIT   1;
    `
    const [linhas] = await con.query(comando, [id])
    return linhas[0];   
}

export async function opiniaoGeral(id){
    const comando = 
    `
    SELECT  sum(VL_GERAL) as totalGer,
            sum(VL_DESEMPENHO) as totalDes,
            sum(VL_ATENDIMENTO) as totalAte,
            sum(VL_SATISFACAO) as totalSatis,
            count(ID_USUARIO) as qtdUsers
      FROM  tb_produto_avaliacao
     WHERE  ID_PRODUTO = ?;
    `
    const [linhas] = await con.query(comando,  [id])
    return linhas[0];   
}

export async function produtosOutrasOp(categoria){
    const comando = 
    `
    select nm_produto,
    vl_preco,
    nm_categoria
    from tb_produto
    inner join TB_categoria
    on tb_categoria.id_categoria = tb_categoria.id_categoria
    where nm_categoria like ?
    limit 4;
    `
    const [linhas] = await con.query(comando,  [categoria])
    return linhas[0];   
}

export async function imgProd(id){
    const comando = 
    `
    select IMG_PRODUTO     img
		FROM TB_PRODUTO_IMAGEM
		INNER JOIN TB_PRODUTO
        ON TB_PRODUTO.ID_PRODUTO = TB_PRODUTO_IMAGEM.ID_PRODUTO
        WHERE TB_PRODUTO.ID_PRODUTO = ?
        GROUP BY TB_PRODUTO.ID_PRODUTO;
    `
    const [linhas] = await con.query(comando,  [id])
    return linhas[0];   
}