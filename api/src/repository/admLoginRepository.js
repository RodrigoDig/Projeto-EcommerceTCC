import { con } from './connection.js';

export async function loginAdm(user, senha){
    const comando = 
    `SELECT ID_ADMIN_LOGIN    id,
            DS_EMAIL     email
    FROM   tb_admin_login
    WHERE  ds_email      like  ?
    AND    ds_senha      like  ?`

    const [resposta] = await con.query(comando, [user, senha])
    return resposta[0];
}