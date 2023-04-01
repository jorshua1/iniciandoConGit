console.log("hola mundo");
var nombre = "jorshua";
nombre[0] = "k";
nombre = "korshua";
console.log(nombre);
let apellido = prompt("ingrese un apellido");
let edad = Number(prompt("ingrese su edad"));
console.log(edad);
console.log(edad * 10);
var acceso = true;
var personas = ["paola", "felipe", "jhon", "david", "lewis"];
var numeros = [1, 2, 3, 4, 5];
var detodito = [1, "hola", [0], { marca: "BMW" }];
console.log(typeof detodito);
detodito[1] = "adios";
console.log(detodito[1]);
var carro = { marca: "BWM", fechaFabricacion: 1950, color: "Morado" };
console.log(carro.fechaFabricacion);

function saludar() {
  console.log("Hola mundo");
}

function suma(numeroA, numeroB) {
  return numeroA + numeroB;
}

console.log(suma(18, 12));

var finDelMundo = null;

var nombre2;


