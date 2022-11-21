import { con } from './connection.js';

export async function Cupom(cupom){
    const comando = `
        insert into tb_cupom( COD_CUPOM, VL_CUPOM, QTD_RESTANTE)
                VALUES(?, ?, ?)
    `
    const [resp] = await con.query(comando, [
        cupom.codigo,
        cupom.valor,
        cupom.restante
    ])
    return resp.insertId;
}

export async function buscarCupom(cod) {
    const comando = `
         SELECT id_cupom         id,
                cod_cupom        cod,
                vl_cupom         valor,
                qtd_restante     restante
           FROM tb_cupom 
          WHERE cod_cupom = ?
    `

    const [linhas] = await con.query(comando, [cod]);
    return linhas[0];
}


export async function atualizarCupom(cod) {
    const comando = `
        UPDATE tb_cupom
           SET qtd_restante = qtd_restante - 1
         WHERE cod_cupom = ?
    `

    const [info] = await con.query(comando, [cod]);
    return info.affectedRows;
}

export async function listarCupons(){
    const comando = `
        SELECT ID_CUPOM        id,
                COD_CUPOM    codigo,
                VL_CUPOM      valor,
                QTD_RESTANTE  restante
        FROM TB_CUPOM`;
    
    const [linhas] = await con.query(comando)
    return linhas;
}

export async function buscarId(id){
    const comando = `
        SELECT ID_CUPOM        id,
                COD_CUPOM    codigo,
                VL_CUPOM      valor,
                QTD_RESTANTE  restante
          FROM TB_CUPOM
        WHERE ID_CUPOM = ?`;
    
    const [linhas] = await con.query(comando, [id])
    return linhas[0];
}

export async function buscarNome(nome){
    const comando = `
        SELECT ID_CUPOM       id,
                COD_CUPOM    codigo,
                VL_CUPOM      valor,
                QTD_RESTANTE  restante
          FROM TB_CUPOM
        WHERE COD_CUPOM LIKE ?`;
    
    const [linhas] = await con.query(comando, [`%${nome}%`])
    return linhas;
}

export async function deletarCupom(id){
    const comando = `
        DELETE FROM TB_CUPOM
            WHERE ID_CUPOM = ?`;
    
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function alterarCupom(id, cupom){
    const comando = `
        UPDATE TB_CUPOM
            SET COD_CUPOM       = ?,
                VL_CUPOM        = ?,
                QTD_RESTANTE   = ?
        WHERE ID_CUPOM = ?`;

    const [resposta] = await con.query(comando, [cupom.codigo, cupom.valor, cupom.restante, id]);
    return resposta.affectedRows;
}