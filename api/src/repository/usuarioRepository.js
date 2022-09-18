import { con } from './connection.js';

export async function login(usuario, senha){
    const comando = 
    `SELECT id_usuario       id,
        nm_usuario     nome,
        ds_email      email,
    FROM   tb_usuario
    WHERE  ds_email      =  ?
    AND    DS_SENHA      =  ?`

    const resposta = await con.query(comando, [usuario, senha])
    const linhas = resposta[0];
    return linhas[0];
}