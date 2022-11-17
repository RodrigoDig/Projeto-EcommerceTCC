import { con } from "./connection.js";

export async function cadUser(usuario) {
    const linhas = `
        INSERT INTO TB_USUARIO(
             NM_USUARIO,
             NM_SOBRENOME, 
             DS_CPF,
             DT_NASCIMENTO,
             DS_GENERO,
             DS_EMAIL,
             DS_CELULAR,
             DS_SENHA)
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

export async function alterarUsuario(id, usuario) {
    const comando = `
        UPDATE TB_USUARIO
           SET  NM_USUARIO      =?,     
                NM_SOBRENOME    =?,
                DS_CPF          =?,
                DT_NASCIMENTO   =?,
                DS_GENERO       =?,
                DS_EMAIL        =?,
                DS_CELULAR      =?,
                DS_SENHA        =?
        WHERE ID_USUARIO = ?`;
    const [resposta] = await con.query(comando, [
        usuario.nome,
        usuario.sobrenome,
        usuario.cpf,
        usuario.nascimento,
        usuario.genero,
        usuario.email,
        usuario.celular,
        usuario.senha,
        id]);
    return resposta.affectedRows;
}

export async function listarUsuarios() {
    const comando = `
        SELECT ID_USUARIO   id,
            NM_USUARIO      usuario,     
            NM_SOBRENOME    sobrenome,
            DS_CPF          cpf,
            DT_NASCIMENTO   nascimento,
            DS_GENERO       genero,
            DS_EMAIL        email,
            DS_CELULAR      celular,
            DS_SENHA        senha
        FROM  TB_USUARIO`;

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function buscarId(id) {
    const comando = `
        SELECT  ID_USUARIO      id,
                NM_USUARIO      usuario,     
                NM_SOBRENOME    sobrenome,
                DS_CPF          cpf,
                DT_NASCIMENTO   nascimento,
                DS_GENERO       genero,
                DS_EMAIL        email,
                DS_CELULAR      celular,
                DS_SENHA        senha
            FROM  TB_USUARIO
        WHERE ID_USUARIO = ?`;

    const [linhas] = await con.query(comando, [id])
    return linhas[0];
}


export async function buscarNome(nome) {
    const comando = `
        SELECT  ID_USUARIO      id,
                NM_USUARIO      usuario,     
                NM_SOBRENOME    sobrenome,
                DS_CPF          cpf,
                DT_NASCIMENTO   nascimento,
                DS_GENERO       genero,
                DS_EMAIL        email,
                DS_CELULAR      celular,
                DS_SENHA        senha
          FROM  TB_USUARIO
        WHERE NM_USUARIO LIKE ?`;

    const [linhas] = await con.query(comando, [`%${nome}%`])
    return linhas;
}