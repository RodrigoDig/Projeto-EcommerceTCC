export default function ValidarNome(nome){
    if(nome == 'Alto Desempenho Em Velocidade'){
        nome = nome.substring(19);
        return nome;
    }
}