

export async function validacaoUsuario(usuario){
    if(usuario.nome === undefined || usuario.nome === ''){
        throw new Error('É obrigatório informar seu nome!');
    }
    else if(usuario.sobrenome === undefined || usuario.sobrenome === ''){
        throw new Error('É obrigatorio informar seu sobrenome!');
    }
    else if(usuario.cpf === undefined || usuario.cpf === ''){
        throw new Error('O cadastro do cpf é obrigatório!');
    }
    else if(usuario.nascimento === undefined || usuario.nascimento === NaN){
        throw new Error('Data de nascimento é obrigatória!');
    }
    else if(!['Masculino', 'Feminino', 'Outro'].includes(usuario.genero)){
        throw new Error('Informe seu gênero de acordo com masculino, feminino ou outro!');
    }
    else if(usuario.email === undefined || usuario.email === ''){
        throw new Error('Email é obrigatório');
    }
    else if(usuario.celular === undefined || usuario.celular === ''){
        throw new Error('Informe seu numero de celular');
    }
    else if(usuario.senha === undefined || usuario.senha === ''){
        throw new Error('Não é possivel efetuar seu cadastro sem uma senha!');
    }
}