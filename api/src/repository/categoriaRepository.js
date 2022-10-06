import { con } from './connection.js';

export async function listarCategorias(){
    const comando = 
    `
        select ID_CATEGORIA     id,
               NM_CATEGORIA     categoria
        from tb_categoria
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarCategoriaPorId(id) {
    const comando = `
        select ID_CATEGORIA         as id,
               NM_CATEGORIA        as categoria
          from TB_CATEGORIA
         where ID_CATEGORIA = ?
    `

    const [linhas] = await con.query(comando, [id]);
    
    return linhas[0];
}
