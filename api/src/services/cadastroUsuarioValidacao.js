import { cadUser } from "../repository/cadastroUserRepository.js";

export async function validacaoUser(usuario){
    if(usuario.nome == undefined){
        throw new error('É obrigatório cadastrar seu nome!')
    }
    else if(usuario.sobrenome == undefined){
        throw new error('É obrigatorio cadastrar seu sobrenome!')
    }
    else if(isNaN(usuario.cpf) == undefined){
        throw new error('O cadastro do cpf é obrigatório ser apenas números!')
    }
    else if(usuario.nascimento == undefined){
        throw new error('Data de nascimento é obrigatória!')
    }
    else if(!['Masculino', 'Feminino', 'Outro'].includes(usuario.genero)){
        throw new error('Informe seu gênero de acordo com masculino, feminino ou outro!')
    }
    else if(usuario.email == undefined){
        throw new error('Email é obrigatório')
    }
    else if(usuario.celular == undefined){
        throw new error('Informe seu numero de celular')
    }
    else if(isNaN(usuario.senha) == undefined){
        throw new error('Digite sua senha apenas com números')
    }
    else{
        return "Não deixe campos nulos!"
    }

    const cadastro = await cadUser(usuario);
}