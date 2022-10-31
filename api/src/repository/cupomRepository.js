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