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
const {nome, sobrenome, idade} = pessoa;
const {endereco:{rua, numero}} = pessoa;
// const {nome, ...resto} = pessoa;
// console.log(resto));
console.log(nome, sobrenome, idade, rua, numero);