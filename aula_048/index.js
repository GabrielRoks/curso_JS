// Factory function

function criaPessoa(nome, sobrenome, idade, peso, altura) {
  return {
    nome,
    sobrenome,
    idade,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    peso: peso,
    altura: altura,
    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Gabriel", "Roks", 19, 70, 1.78);
p1.nomeCompleto = "Gabriel Roks Gomes Rodrigues";
console.log(p1.nomeCompleto);
