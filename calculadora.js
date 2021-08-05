let sumar = require("./suma/sumar");
let restar = require("./resta/restar");
let multiplicar = require("./multiplicacion/multiplicar");
let dividir = require("./division/dividir");

console.log(sumar(50,25));
console.log(restar(30,15));

console.log(multiplicar(8,8));
console.log(multiplicar(5,0));

console.log(dividir(52,2));
console.log(dividir(0,10));
console.log(dividir(10,0));

// Operaciones que agregue

let porcentaje = require("./porcentaje/porcentaje");
let potenciaCuadrado = require("./potenciaAlCuadrado/potenciaCuadrado");
let potenciaCubo = require("./potenciaAlCubo/potenciaCubo");

console.log(porcentaje(25,100));
console.log(porcentaje(65,3200));
console.log(porcentaje(15,200));

console.log(potenciaCuadrado(9));
console.log(potenciaCuadrado(12));

console.log(potenciaCubo(3));
console.log(potenciaCubo(5));
