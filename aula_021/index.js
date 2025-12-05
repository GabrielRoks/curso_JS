/*
FALSY VALUES:
- false
- 0
- "" ou '' (string vazia)
- null
- undefined
- NaN
*/
// Avaliação de curto-cicuito:
console.log("Gabriel" && 0 && true); // Retorna o primeiro valor Falsy
function falaOi(){
    return 'Oi';
}
const vaiExecutar = false;
console.log(vaiExecutar && falaOi());

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao); // Retorna o primeiro valor Truthy