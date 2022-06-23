function read(a, b) {
  this.a = a;
  this.b = b;
}

function sum(a, b) {
  return this.a + this.b;
}

function mul(a, b) {
  return this.a * this.b;
}


let calculator = {
  read: read,
  sum: sum,
  mul: mul,
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
