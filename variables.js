console.log("Hola mundo");

var nombre = "Samir";
let apellido = "Londoño";
const pi = 3.14;

console.log(nombre);
console.log(apellido);

nombre = "Jairo"
console.log(nombre)

let apellido1 = prompt("Ingrese un apellido: ");
console.log(apellido1);

let edad = Number(prompt("Ingrese su edad: "));
console.log(edad);
console.log(edad < 0);
var acceso = true;
var personas = ["Samir" , "Joseph" , "Londoño", "Gómez" , "Josue"];
var nums = [1,2,3,4,5,6,7,8,9,10];
var deTodito = [1,2,3,"Samir", [0] , {marca: "BMW"}]
console.log(typeof deTodito);
deTodito[1] = "Adios";
console.log(deTodito[1]);

var carro = {marco: "Polo" , 
fecha: 1992,
color: "Azul"
}

console.log(carro.marco);

function suma(num1, num2){
    return num1+num2
}

console.log(suma(10, 8))
var asdada = "ajkadajkda"