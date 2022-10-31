import { con } from './connection.js';

export async function cartaoUsuario(cartao){
    const comando = `
        INSERT INTO TB_USUARIO_CARTAO(ID_USUARIO, NM_CARTAO, NR_CARTAO, DT_VALIDADE, NR_CVV, DS_CPF, DT_NASCIMENTO)
                VALUES(?, ?, ?, ?, ?, ?)
    `
    const [resp] = await con.query(comando, [
        cartao.idUsuario,
        cartao.nome,
        cartao.numero,
        cartao.validade,
        cartao.cvv,
        cartao.cpf,
        cartao.nascimento
    ])

    return resp.insertID;
} 