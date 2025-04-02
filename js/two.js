/*Ejercicio 2, Hoisting
Que devuelve por consola cada uno de los siguientes console.log*/

console.log(a); //undefined. //no inicialiazada, a existe pero hola no
var a = "hola";

//defauld

console.log(b);//Error: Cannot access 'b' before initialization, no inicializada
let b = "hola";



console.log(c); //Error: Cannot access 'c' before initialization, no inicializada
const c = "hola";
sayHi();



function sayHi() {
  console.log("Hola desde sayHi!"); // Hola desde sayHi!
}



function sayBye() {
  console.log("Adios desde sayBye!");//Adios desde sayBye!
}

sayBye();