   
        let i, suma = 0;
        let lista = [];

        let n = parseInt(prompt("Introduce un número: "));

        for (i = 1; i < n; i++) {  // i son los divisores. Se divide desde 1 hasta n-1                            
            if (n % i == 0) {
                suma = suma + i;   // si es divisor se suma
                lista.push(suma);
            }
        }
        if (suma == n) {           // si el numero es igual a la suma de sus divisores es perfecto                
            console.log(`Perfecto: `, lista);
        } else {
            console.log(`No es perfecto: `, lista);

        }
    
