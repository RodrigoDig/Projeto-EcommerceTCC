import { con } from "./connection.js";

export async function CadastroEnd(endereco){
    const linhas = `
        INSERT INTO TB_USUARIO_ENDERECO(ID_USUARIO, DS_LOGADOURO, NR_NUMERO, NM_BAIRRO, DS_CEP, NM_CIDADE, NM_ESTADO, DS_COMPLEMENTO, DS_CASA)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [resp] = await con.query(linhas, [
        endereco.logadouro,
        endereco.numero,
        endereco.bairro,
        endereco.cep,
        endereco.cidade,
        endereco.estado,
        endereco.complemento,
        endereco.casa
    ])

    return resp.insertId;
}

export async function buscarEnderecoId(id){
    const comando = `
        select  id_endereco         id,
                ds_logadouro        logadouro,
                nr_numero           numero,
                nm_bairro           bairro,
                ds_cep              cep,
                nm_cidade           cidade,
                nm_estado           estado,
                ds_complemento      complemento,
                ds_casa             casa
        from tb_usuario_endereco
        where id_usuario_endereco = ?`;

    const [linhas] = await con.query(comando, [id])
    return linhas[0];
}

export async function deletarEndereco(id){
    const comando = `
        DELETE FROM tb_usuario_endereco
            WHERE id_usuario_endereco = ?`;
    
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function alterarEndereco(id,endereco){
    const comando = `
        UPDATE tb_usuario_endereco
            SET ds_logadouro    =?,
                nr_numero       =?,
                nm_bairro       =?,
                ds_cep          =?,
                nm_cidade       =?,
                nm_estado       =?,
                ds_complemento  =?,
                ds_casa         =?
        WHERE id_usuario_endereco = ?`;

    const [resposta] = await con.query(comando, [endereco.logadouro, endereco.numero, endereco.bairro, endereco.cep, endereco.cidade, endereco.estado, endereco.complemento, endereco.casa, id]);
    return resposta.affectedRows;
}