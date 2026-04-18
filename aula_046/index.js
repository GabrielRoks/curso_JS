// callback
function rand(min = 1000, max = 3000) {
  const number = Math.random() * (max - min) + min;
  return Math.floor(number);
}

function primeira(callback) {
  setTimeout(function () {
    console.log("primeiro");
    if (callback) callback();
  }, rand());
}
function segunda(callback) {
  setTimeout(function () {
    console.log("segundo");
    if (callback) callback();
  }, rand());
}
function terceira(callback) {
  setTimeout(function () {
    console.log("terceiro");
    if (callback) callback();
  }, rand());
}

primeira(primeiraCallback);

function primeiraCallback() {
  segunda(segundaCallback);
}

function segundaCallback() {
  terceira(terceiraCallback);
}

function terceiraCallback() {
  console.log("Ultimo a ser executado");
}
