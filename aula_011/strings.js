const umaString = "Olá \"Mundo\"";
// A barra invertida (\) é usada para escapar caracteres especiais dentro de uma string.

console.log(umaString[2]);
// Retorna o indice 2 da string, que é a letra "á".
console.log(umaString.charAt(2));
// Podemos também usar o método charAt().

console.log(umaString.indexOf("Mundo"));
// Caso queira saber o índice que começa uma palavra, usamos o indexOf().
console.log(umaString.lastIndexOf("u"));
// Começa a busca pelo final da string.