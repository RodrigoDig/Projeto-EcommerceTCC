import { con } from "./connection.js";

export async function listarDepartamentos(){
    const comando = `
        select id_departamento      id,
               nm_departamento      departamento
        from tb_departamento
    `

    const [linhas] = await con.query(comando);
    return linhas; 
}

export async function buscarDepartamentoPorId(id) {
    const comando = `
        select id_departamento         as id,
               nm_departamento         as nomeDep
          from tb_departamento
         where id_departamento = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function buscarDepartamentoDiferentes(id) {
    const comando = `
    select id_departamento         as id,
    nm_departamento         as departamento
    from tb_departamento
    where id_departamento != ?  
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function produtosDepartamento(id) {
    const comando = `
    SELECT NM_PRODUTO    		nome,
    NM_DEPARTAMENTO             dep
    FROM TB_PRODUTO
    INNER JOIN TB_DEPARTAMENTO
        ON TB_DEPARTAMENTO.ID_DEPARTAMENTO = TB_DEPARTAMENTO.ID_DEPARTAMENTO
    WHERE TB_DEPARTAMENTO.ID_DEPARTAMENTO = ?
    LIMIT 16;
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function prodDepartamento(id){
    const comando = 
    `
    SELECT 
        TB_PRODUTO.ID_PRODUTO 				id,
        TB_DEPARTAMENTO.ID_DEPARTAMENTO         idDepartamento,
        NM_PRODUTO              			nomeProduto,
        VL_PRECO                			valorProduto,
        VL_DESCONTO             			valorDesconto, 
        VL_AVALIACAO            			avaliacao,
        DS_FABRICANTE           			fabricante,
        QTD_ESTOQUE             			estoque,
        DS_INFORMACOES          			informações,
        DS_DESCRICAO            			descricao,
        DT_GARANTIA             			garantia,
        IMG_PRODUTO            				imagem,
        NM_DEPARTAMENTO    					departamento
    FROM   TB_PRODUTO
    INNER JOIN TB_PRODUTO_IMAGEM
        ON TB_PRODUTO_IMAGEM.ID_PRODUTO_IMAGEM = TB_PRODUTO_IMAGEM.ID_PRODUTO_IMAGEM
    INNER JOIN TB_DEPARTAMENTO
        ON TB_DEPARTAMENTO.ID_DEPARTAMENTO = TB_DEPARTAMENTO.ID_DEPARTAMENTO
    WHERE  TB_DEPARTAMENTO.ID_DEPARTAMENTO = ?
        AND TB_DEPARTAMENTO.ID_DEPARTAMENTO = TB_PRODUTO.ID_DEPARTAMENTO
        AND   TB_PRODUTO.ID_PRODUTO = TB_PRODUTO_IMAGEM.ID_PRODUTO
    GROUP BY TB_PRODUTO.ID_PRODUTO
    LIMIT  16; 		 
    `
    const [linhas] = await con.query(comando, [id])
    return linhas;
}


export async function produtosCatDep(idCat, idDep){
    const comando = 
    `
    SELECT 
        TB_PRODUTO.ID_PRODUTO 				id,
        NM_PRODUTO              			nomeProduto,
        VL_PRECO                			valorProduto,
        VL_DESCONTO             			valorDesconto, 
        VL_AVALIACAO            			avaliacao,
        DS_FABRICANTE           			fabricante,
        QTD_ESTOQUE             			estoque,
        DS_INFORMACOES          			informações,
        DS_DESCRICAO            			descricao,
        DT_GARANTIA             			garantia,
        IMG_PRODUTO            				imagem,
        NM_CATEGORIA						categoria,
        TB_DEPARTAMENTO.ID_DEPARTAMENTO		departamento
    FROM   TB_PRODUTO_CATEGORIA
    INNER JOIN TB_PRODUTO_IMAGEM
        ON TB_PRODUTO_IMAGEM.ID_PRODUTO_IMAGEM = TB_PRODUTO_IMAGEM.ID_PRODUTO_IMAGEM
    INNER JOIN TB_PRODUTO
        ON TB_PRODUTO.ID_PRODUTO = TB_PRODUTO.ID_PRODUTO
    INNER JOIN TB_CATEGORIA
        ON TB_CATEGORIA.ID_CATEGORIA = TB_CATEGORIA.ID_CATEGORIA
    INNER JOIN TB_DEPARTAMENTO
        ON TB_DEPARTAMENTO.ID_DEPARTAMENTO = TB_DEPARTAMENTO.ID_DEPARTAMENTO
    WHERE  TB_PRODUTO_CATEGORIA.ID_CATEGORIA = ?
        AND   TB_PRODUTO.ID_PRODUTO = TB_PRODUTO_CATEGORIA.ID_PRODUTO
        AND   TB_CATEGORIA.ID_CATEGORIA = TB_PRODUTO_CATEGORIA.ID_CATEGORIA
        AND   TB_PRODUTO.ID_PRODUTO = TB_PRODUTO_IMAGEM.ID_PRODUTO
        AND   TB_DEPARTAMENTO.ID_DEPARTAMENTO = TB_PRODUTO.ID_DEPARTAMENTO
        AND   TB_DEPARTAMENTO.ID_DEPARTAMENTO = ?
    GROUP BY TB_PRODUTO.ID_PRODUTO
    LIMIT  8; 					 
    `
    const [linhas] = await con.query(comando, [idCat, idDep])
    return linhas;
}

