// for in lê os indices ou chaves do objeto

//                  0         1          2
const carros = ['GTR R-32', 'NSX', 'Silvia S14'];

const carro = {
    marca: "Nissan",
    modelo: "GTR R-32",
    ano: 1989,
    potencia: "280cv"
};

for(let key in carro){
    console.log(key, carro[key]);
}

// estrutura for() comum:
// for (let i = 0; i < carros.length; i++){
//     console.log(carros[i]);
// }

for (let i in carros){
    console.log(carros[i]);
}