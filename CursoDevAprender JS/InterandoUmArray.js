//Interando Array
const numeros = [1,2,3,4,5];

for (numero of numeros)
console.log (numero);

// ForEach
numeros.forEach(function(numero){
    console.log (numero);
})

// Arrow Function

numeros.forEach((numero,indice)=>console.log (numero,indice))
