// Questo codice funziona, ma è fragile e contiene "errori"
function mioPrototipo(x, y) {
  this.a = x;
  this.b = y;
  this.op = (x) => r;
}
let X = new mioPrototipo('', 0, (x) => x + 2);
let Y = new mioPrototipo();
Y.a = 'Hello';
Y.b = 0; // Provate a sostituire 2 con "Hallo"
Y.op = (a) => a + 3;
console.log(X);
console.log(Y);
console.log(Y.op(6));
