let listaNumeros = [];
var numero = 0;
do{
    numero = parseInt(prompt("Ingrese un número: "));
    listaNumeros.push(numero)
    stop = parseInt(prompt("Desea continuar? \n1. Si \n0 No"));
}while(!stop == 0)
console.log(listaNumeros);

var pares = 0;
var impares = 1;

for (dato of listaNumeros){
    if(dato%2 == 0){
        pares+=dato;
        // console.log(pares);
    }else{
        impares*=dato;
        // console.log(impares);
    }
}

console.log(
    `La suma de todos los números pares es: ${pares} 
    \ny la multiplicación de todos los números impares es ${impares}`);