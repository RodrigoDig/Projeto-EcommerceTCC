export default function ValidarNome(nome){
    if(nome == 'Alto Desempenho Em Velocidade'){
        nome = nome.substring(19);
        return nome;
    }
    else if(nome == 'Mais Memória'){
        nome = nome.substring(5);
        return nome;
    }
    else if(nome == 'Os Gamers Adoram'){
        nome = nome.substring(3, 10);
        return nome;
    }
}