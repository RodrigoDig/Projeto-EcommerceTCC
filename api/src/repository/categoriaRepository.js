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

export async function cat1(){
    const comando = 
    `
        select ID_CATEGORIA     id,
               NM_CATEGORIA     categoria
        from tb_categoria
        where NM_CATEGORIA = 'Alto Desempenho Em Velocidade'
    `

    const [linhas] = await con.query(comando);
    return linhas[0];
}

export async function cat2(){
    const comando = 
    `
        select ID_CATEGORIA     id,
               NM_CATEGORIA     categoria
        from tb_categoria
        where NM_CATEGORIA = 'Mais Memória'
    `

    const [linhas] = await con.query(comando);
    return linhas[0];
}

export async function cat3(){
    const comando = 
    `
        select ID_CATEGORIA     id,
               NM_CATEGORIA     categoria
        from tb_categoria
        where NM_CATEGORIA = 'Os Gamers Adoram'
    `

    const [linhas] = await con.query(comando);
    return linhas[0];
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
