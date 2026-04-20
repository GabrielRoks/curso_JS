// IIFE -> Immediatelly invoked function expression

(function (idade) {
  const sobrenome = "Roks";
  function criaIdentidade(dados) {
    return `${dados} ${" "} ${sobrenome} `;
  }

  function descIdentidade() {
    console.log(criaIdentidade("Gabriel"));
  }

  descIdentidade();

  console.log(idade);
})(19);
