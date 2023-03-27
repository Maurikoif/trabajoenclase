// mostrar un mensaje por consola
console.log("Fortnite > mujeres");
///////// mostrar los valores de un array en la consola, (lo hacemos con una función tradicional, y con una función flecha)
function MostrarArr(arr){
    console.log(arr);
}
let MostrarArrays=(arr)=>{
    console.log(arr);
}
///////// agregar un valor a un array y mostrar (el array) por consola (funciones flecha)
var ass = [1, 2, 3, "Fortnite"];
let AgregarAArr=(arr, valor)=>{
    arr.push(valor);
    console.log(arr);
} 
//////devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo
let UltimoIndex=(arr, value)=>arr.lastIndexOf(value);
/*Ejemplo: quiero buscar la última posición del string "hola" del siguiente array
let arr2=["hola", "como va", "hola", "chao", "hola"]*/

//////// mostrar por consola la sumatoria de todos los valores de un array de valores numericos
let sumarArray = (arr) => arr.reduce((sum, point) => sum + point, 0);
//inviertir el orden de los elementos de un array
let InvertirOrdenARR=(arr)=>arr.reverse();
/////////// devolver los valores del array ordenados
let ordenarArr=(arr)=> arr.sort();
