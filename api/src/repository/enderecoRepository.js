import { con } from "./connection.js";

export async function salvar(idUsuario, endereco){
    const linhas = `
    INSERT INTO TB_USUARIO_ENDERECO(ID_USUARIO, DS_LOGADOURO, NR_NUMERO, NM_BAIRRO, DS_CEP, NM_CIDADE, NM_ESTADO, DS_COMPLEMENTO, DS_CASA)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)

    `
    const [info] = await con.query(linhas, [
        idUsuario,
        endereco.logadouro,
        endereco.numero,
        endereco.bairro,
        endereco.cep,
        endereco.cidade,
        endereco.estado,
        endereco.complemento,
        endereco.casa
    ])

    return info.insertId;
}

export async function listar(idUsuario){
    const comando = `
        select  id_usuario_endereco    id,
                ds_logadouro           logadouro,
                nr_numero              numero,
                nm_bairro              bairro,
                ds_cep                 cep,
                nm_cidade              cidade,
                nm_estado              estado,
                ds_complemento         complemento,
                ds_casa                casa
           from tb_usuario_endereco
        where id_usuario = ?`

    const [linhas] = await con.query(comando, [idUsuario])
    return linhas;
}



