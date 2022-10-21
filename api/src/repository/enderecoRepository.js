import { con } from "./connection.js";

export async function CadastroEnd(endereco){
    const linhas = `
        INSERT INTO TB_USUARIO_ENDERECO(DS_LOGADOURO, NR_NUMERO, NM_BAIRRO, DS_CEP, NM_CIDADE, NM_ESTADO, DS_COMPLEMENTO, DS_CASA)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?)
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