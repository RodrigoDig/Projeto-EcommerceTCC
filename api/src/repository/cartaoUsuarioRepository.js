import { con } from './connection.js';

export async function cartaoUsuario(cartao){
    const comando = `
        INSERT INTO TB_USUARIO_CARTAO(ID_USUARIO, NM_CARTAO, DS_NUMERO, DT_VALIDADE, DS_CVV)
                VALUES(?, ?, ?, ?, ?)
    `
    const [resp] = await con.query(comando, [
        cartao.idUsuario,
        cartao.nome,
        cartao.numero,
        cartao.validade,
        cartao.cvv
    ])

    return resp.insertID;
} 