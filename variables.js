const { default: PageLoader } = require("next/dist/client/page-loader");

console.log("hola mundo");
const gravedad = 9.81;
var nombre = "Paola";
nombre[0]="K";
console.log(nombre);
var nombre = "Carlos";
console.log (nombre);
let apellido = prompt("ingrese un apellido");
let edad = Number(prompt("ingrese su edad"));
console.log(edad);
console.log(edad*10);
var acceso= true;
var personas= ["Paola", "Carlos","David","Lucia","Diana"];
var numeros= [1,2,3,4,5];
var detodito=[1,"hola",[3], {marca:"BMW"}]
console.log(typeof detodito);
detodito[1]="adios";
console.log(detodito[1]);
var carro={marca:"BMW",
fechafabricacion:"1950", 
color:"morado"};
console.log(carro.fechafabricacion);
console.log(carro["color"]);

function saludar(){
    console.log("Hola mundo");
}

function suma(numeroA,numeroB){
    return numeroA + numeroA;
}

console.log(suma(18,12));

console.log("algo");