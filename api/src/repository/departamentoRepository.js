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