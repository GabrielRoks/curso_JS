function criaPessoa(nome, sobrenome, idade){
    return{nome, sobrenome, idade};
}
const pessoa01 = criaPessoa('Gabriel', 'Roks', 19);
const pessoa02 = criaPessoa('João', 'Rodrigues', 24);
const pessoa03 = criaPessoa('Daniel', 'Vital', 17);
const pessoa04 = criaPessoa('Matheus', 'Macedo', 18);

const pessoa05 = {
    nome: 'Gabriel',
    sobrenome: 'Gomes',
    idade: 19,
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi`)
    }
}
pessoa05.fala();