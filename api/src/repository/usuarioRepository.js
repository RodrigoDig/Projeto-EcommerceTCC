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