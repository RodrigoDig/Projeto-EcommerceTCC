import { con } from "./connection.js";

export async function listarDepartamentos(){
    const comando = `
        select id_departamento      id,
               nm_departamento      departamento
        from tb_departamento
    `

    const [linhas] = await con.query(comando);
    return linhas; 
}

export async function buscarDepartamentoPorId(id) {
    const comando = `
        select id_departamento         as id,
               nm_departamento         as nomeDep
          from tb_departamento
         where id_departamento = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function buscarDepartamentoDiferentes(id) {
    const comando = `
    select id_departamento         as id,
    nm_departamento         as departamento
    from tb_departamento
    where id_departamento != ?  
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function produtosDepartamento(id) {
    const comando = `
    SELECT NM_PRODUTO    		nome,
    NM_DEPARTAMENTO             dep
    FROM TB_PRODUTO
    INNER JOIN TB_DEPARTAMENTO
        ON TB_DEPARTAMENTO.ID_DEPARTAMENTO = TB_DEPARTAMENTO.ID_DEPARTAMENTO
    WHERE TB_DEPARTAMENTO.ID_DEPARTAMENTO = ?
    LIMIT 16;
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas;
}