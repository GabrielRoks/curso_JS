function saudacao(nome){
    return `Bom dia, ${nome}!`;
}

function soma(a, b){
    const resultado = a + b;
    return resultado;
}

// também podemos criar funções arrow function
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(saudacao('Gabriel'));
console.log(soma(2, 7));
