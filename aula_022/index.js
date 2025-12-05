/*
Estruturas condicionais com if, else if e else
- if pode ser utilizado sozinho
- else if depende do if; e também pode ser criado quantas vezes forem necessárias
- else depende do if; pode ter somente um na condição
*/
const hora = 10;
if (hora >= 0 && hora <= 12){
    console.log("Bom dia!");
}
else if (hora >= 13 && hora <=18){
    console.log("Boa tarde!");
}
else if (hora > 18 && hora <= 23){
    console.log("Boa noite!");
}
else{
    console.log('Horário do dia inexistente no planeta Terra, você é um Alien?');
}