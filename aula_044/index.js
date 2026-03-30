// Declaração de função (function hoisting)
function falaOi(){
    console.log('Oi');
}

// Funções são Fist-Class Object

// Function Expression
const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado();

const arrowFunction = () => {
    console.log('Arrow function')
};
arrowFunction();

const obj = {
    falar() {
        console.log('falando');
    }
};

obj.falar();