// Função construtora -> Objetos

function Carro(marca, modelo) {
  // Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = function () {
    console.log(ID);
  };

  // Atributos ou métodos públicos
  this.marca = marca;
  this.modelo = modelo;

  this.metodo = function () {
    console.log(this.marca + ": Eu sou um método");
  };
}

const carro1 = new Carro("Nissan", "180sx");
const carro2 = new Carro("Honda", "NSX");

console.log(carro1.marca);
carro2.metodo();
