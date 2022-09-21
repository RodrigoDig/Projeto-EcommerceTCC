import { con } from './connection.js';

export async function listarCategorias(){
    const comando = 
    `
        select id_categoria     id,
                nm_categoria     categoria
        from tb_categoria
    `

    const [linhas] = await con.query(comando);
    return linhas;
}