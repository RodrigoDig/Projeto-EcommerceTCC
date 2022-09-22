import { loginAdm } from "../repository/admLoginRepository";

export default function ValidacaoLoginAdm(user, senha){
    if(user === undefined)
        throw new Error('O Usuario é Obrigatorio')
    senha(senha === undefined)
        throw new Error('A Senha é Obrigatoria')

}