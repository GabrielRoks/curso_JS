function fizzBuzz(numero){
    if (typeof numero !== Number) return NaN;
    if (numero >= 1 && numero <= 100){
        if (numero % 3 === 0 && numero % 5 === 0){
            return "FizzBuzz";
        } else if (numero % 3 === 0){
            return "Fizz";
        } else if (numero % 5 === 0){
            return "Buzz";
        } else return numero;
    } else return "Digite um número entre 1 e 100"
}

console.log(fizzBuzz("sad"));