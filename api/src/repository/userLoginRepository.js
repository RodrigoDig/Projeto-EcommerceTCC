import { con } from './connection.js';

export async function loginUser(user, email, senha) {
    const comando = `
    SELECT 	ID_USUARIO     id,
            NM_USUARIO   nome,
            ds_email     email
    FROM   tb_usuario
    WHERE  nm_usuario    like ? 
    AND    ds_email      like ?
    AND    ds_senha      like ?`

    const [resp] = await con.query(comando, [user, email, senha]);
    return resp[0];
}