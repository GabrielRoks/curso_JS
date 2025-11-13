const nome = "Gabriel Roks";
const pesoEmKg = 70;
const alturaEmM = 1.78;
const idade = 19;
const imc = pesoEmKg / (alturaEmM * alturaEmM);
console.log("Olá, meu nome é", nome, "tenho", idade, "anos\
 minha altura é", alturaEmM,"peso", pesoEmKg, "Kg, e meu IMC é:", imc);


// template string


console.log(`Olá meu nome é ${nome} tenho ${idade} anos\
minha altura é ${alturaEmM} meu peso é ${pesoEmKg} Kg e meu IMC é ${imc}`);