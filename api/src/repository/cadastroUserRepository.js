import { con } from "./connection.js";

export async function cadUser(usuario){
    const linhas = `
        INSERT INTO TB_USUARIO(NM_USUARIO, NM_SOBRENOME, DS_CPF, DT_NASCIMENTO, DS_GENERO, DS_EMAIL, DS_CELULAR, DS_SENHA)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [resp] = await con.query(linhas, [
        usuario.nome,
        usuario.sobrenome,
        usuario.cpf,
        usuario.nascimento,
        usuario.genero,
        usuario.email,
        usuario.celular,
        usuario.senha
    ])
    
    return resp.insertId;
}