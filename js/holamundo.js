let nombre = "tomas";
console.log(nombre);
alert("hola facha");
document.write("<h2>hola bb</h2>");
nombre = "juana"
console.log(nombre);

//pedir datos usuario
//let nombreUsuario = prompt("como es tu nombre hermoso/sa?");
//nombreUsuario2 = prompt("conoces alguien mas feo que vos?")
//document.write("hola preciosura" + nombreUsuario + "y" + nombreUsuario2);

//variables numericas 
//let edad = prompt("cual es tu edad?");
//let edad2 = prompt("cual es la edad de tu hermano?")
//let diferencia = edad + edad2;
//alert("tu abuelo muerto y vos se llevan" + diferencia + "años");


//diferencia de edad con <>
let edad = parceInt(prompt("cual es tu edad?"));
let edad2 = parceInt(prompt("cual es la edad de tu hermano?"));


if (edad > edad2) {
    let diferencia = edad - edad2
    alert("tu hermano y tu se llevan" + diferencia + "años , tu eres mayor");
} else if (edad < edad2) {
    let diferencia = edad - edad2
    alert("tu hermano y tu se llevan" + diferencia + "años , tu hermano es mayor");
}