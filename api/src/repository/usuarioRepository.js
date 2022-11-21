import { con } from './connection.js';

export async function login(usuario, senha){
    const comando = 
    `SELECT id_usuario     id,
            nm_usuario   nome,
            ds_email     email
    FROM   tb_usuario
    WHERE  ds_email      like  ?
    AND    ds_senha      like  ?`

    const [resposta] = await con.query(comando, [usuario, senha])
    return resposta[0];
}

export async function inserirAvaliacao(produto){
    const comando = `
        INSERT INTO TB_PRODUTO_AVALIACAO(ID_USUARIO, ID_PRODUTO, VL_GERAL, VL_DESEMPENHO, VL_ATENDIMENTO, VL_SATISFACAO)
        VALUES(?, ?, ?, ?, ?, ?)
    `

    const [resp] = await con.query(comando, [
        produto.idUsuario,
        produto.idProduto,
        produto.geral,
        produto.desempenho,
        produto.atendimento,
        produto.satisfacao
        ])
    return resp.insertId; 
}

export async function verificarSeJaAvaliou(idUser, idProduto){
    const comando = 
    `
    select id_usuario  id
		  from tb_produto_avaliacao
          where id_usuario = ?
          and 	id_produto = ?;
    `
    let [linhas] = await con.query(comando,  [idUser, idProduto])
    console.log(linhas);
    if(linhas  == undefined){
        linhas = undefined
    }
    else if(linhas[0] === !linhas ){
        linhas = 1
    }
    return linhas[0];
}

export async function verificarProdutosFav(idUser){
    const comando = 
    `
    select nm_produto  		     	nome,
            tb_produto.id_produto 	idP,
            img_produto				imagem,
            vl_preco			    valor,
            vl_desconto				desconto
        from tb_usuario_favorito
        inner join tb_produto
            on tb_produto.id_produto = tb_produto.id_produto
        inner join tb_usuario
            on tb_usuario.id_usuario = tb_usuario.id_usuario 
        inner join tb_produto_imagem
            on tb_produto_imagem.id_produto_imagem = tb_produto_imagem.id_produto_imagem
        where tb_usuario_favorito.id_usuario = ?
            and tb_usuario.id_usuario = tb_usuario_favorito.id_usuario
            AND   TB_PRODUTO.ID_PRODUTO = tb_usuario_favorito.id_produto
            AND   TB_PRODUTO.ID_PRODUTO = TB_PRODUTO_IMAGEM.ID_PRODUTO
        GROUP BY TB_PRODUTO.ID_PRODUTO;
                     
    `
    let [linhas] = await con.query(comando,  [idUser])
    return linhas;
}