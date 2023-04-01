console.log('hola mundo');
var nombre='Samuel';
let apellido=prompt('Ingrese un apellido ')
console.log(nombre);
console.log(apellido);
var nombre='Juan';
console.log(nombre);

let edad=Number(prompt('Ingrese su edad '))
console.log(edad);
console.log(edad*10);

var acceso=true;
var personas=["Sam","Lau","Cata","Juliana","irma"];
var numeros=[1,2,3,4,5];

var detodito=[1,"hola",[0],{marca:"BMW"}];
console.log(typeof detodito);
detodito[1]='adios'
console.log(detodito[1]);
console.log(detodito)

var carro={marca:"BMW",
fechaFabricacion:1950,
color:"Morado"
};
console.log(carro.fechaFabricacion);
console.log(carro['color'])

function saludar(){
    console.log("Hola mundo");
}
saludar()

function suma(numeroA,numeroB){
    return numeroA+numeroB
}
console.log(suma(18,12));

function suma(numeroA,numeroB){
    return numeroA+numeroB
}
console.log(suma(18,"a"));

