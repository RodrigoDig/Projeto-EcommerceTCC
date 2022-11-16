import { con } from './connection.js';

export async function CadCupom(cupom){
    const comando = `
        INSERT INTO TB_CUPOM(NM_CUPOM, DS_CODIGO, VL_CUPOM, DT_CADASTRO, DT_VENCIMENTO)
                VALUES(?, ?, ?, ?, ?)
    `
    const [resp] = await con.query(comando, [
        cupom.nome,
        cupom.codigo,
        cupom.valor,
        cupom.cadastro,
        cupom.vencimento
    ])
    return resp.insertId;
}

export async function listarCupons(){
    const comando = `
        SELECT ID_CUPOM        id,
                NM_CUPOM       nome,
                DS_CODIGO      codigo,
                VL_CUPOM       valor,
                DT_CADASTRO    cadastro,
                DT_VENCIMENTO  vencimento
          FROM TB_CUPOM`;
    
    const [linhas] = await con.query(comando)
    return linhas;
}

export async function buscarId(id){
    const comando = `
        SELECT ID_CUPOM        id,
                NM_CUPOM       nome,
                DS_CODIGO      codigo,
                VL_CUPOM       valor,   
                DT_CADASTRO    cadastro,
                DT_VENCIMENTO  vencimento
          FROM TB_CUPOM
        WHERE ID_CUPOM = ?`;
    
    const [linhas] = await con.query(comando, [id])
    return linhas[0];
}

export async function buscarNome(nome){
    const comando = `
        SELECT ID_CUPOM        id,
                NM_CUPOM       nome,
                DS_CODIGO      codigo,
                VL_CUPOM       valor,
                DT_CADASTRO    cadastro,
                DT_VENCIMENTO  vencimento
          FROM TB_CUPOM
        WHERE NM_CUPOM LIKE ?`;
    
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
            SET NM_CUPOM        = ?, 
                DS_CODIGO       = ?,
                VL_CUPOM        = ?,
                DT_CADASTRO     = ?,
                DT_VENCIMENTO   = ?
        WHERE ID_CUPOM = ?`;

    const [resposta] = await con.query(comando, [cupom.nome, cupom.codigo, cupom.valor, cupom.cadastro, cupom.vencimento, id]);
    return resposta.affectedRows;
}