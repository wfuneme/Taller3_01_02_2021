let num_1 = parseInt(prompt("Ingrese un número entero: "));
let num_2 = parseInt(prompt("Ingrese un otro número entero: "));

while(num_1==num_2){
    alert("Ambos números son iguales. Intentalo de nuevo:");
    num_1 = parseInt(prompt("Ingrese un número entero: "));
    num_2 = parseInt(prompt("Ingrese un otro número entero: "));
}

if(num_1!=num_2){
    if(num_1>num_2){
        console.log(`El número ${num_1} es mayor que ${num_2}`);
    }else if(num_2>num_1){
        console.log(`El número ${num_2} es mayor que ${num_1}`);
    }else{
        console.log(`Ambos números son iguales.`)
    }
}