// Parâmetros da função
function parametro() {
  let total = 0;
  for (let argument of arguments) {
    total += argument;
  }
  console.log(total);
}

parametro(1, 5, 4, 2, 7, 2);
