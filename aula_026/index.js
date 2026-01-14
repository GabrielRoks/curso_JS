const data = new Date('2006-09-09 09:56:00');
const diaSemana = data.getDay();
let diaSemanaTexto;
if (diaSemana === 0){
    diaSemanaTexto = 'Domingo';
}else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda-Feira';
}else if (diaSemana === 2){
    diaSemanaTexto = 'Terça-Feira';
}else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta-Feira';
}else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta-Feira';
}else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta-Feira';
}else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
}
// Não sei se essa identação está correta
// O professor OM está fazendo assim
console.log(diaSemana, diaSemanaTexto);
// Minha data de nascimento hahaha