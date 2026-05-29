//                  0         1      2
const carros = ["GTR R-32", "NSX", "M3"];
const novo = [...carros];
// String, Objetos, Funções, Números...
// const carros = new Array("GTR R-32", "NSX", "M3");

const removido = novo.pop();
carros[2] = "AMG";
delete carros[2];
console.log(carros);
console.log(novo, removido);
