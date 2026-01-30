const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Roks',
    idade: 19,
    endereco: {
        rua: 'Ceará',
        numero: 3423
    }
};
// atribuíção via desestruturação
const {nome} = pessoa;
console.log(nome);