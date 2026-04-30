function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = function () {
    this.btnClick();
    this.pressEnter();
  };

  this.pressEnter = function () {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.calcular();
      }
    });
  };

  this.clearDisplay = function () {
    this.display.value = "";
  };

  this.deleteOne = function () {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.calcular = function () {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("Conta Inválida");
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert("Conta inválida");
    }
  };

  this.btnClick = function () {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.btnForDisplay(el.innerText);
      }
      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }
      if (el.classList.contains("btn-del")) {
        this.deleteOne();
      }
      if (el.classList.contains("btn-eq")) {
        this.calcular();
      }
    });
  };
  this.btnForDisplay = function (valor) {
    this.display.value += valor;
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
