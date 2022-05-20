const numeros = [1,2,3];

// Inicio do array
numeros.unshift(0);
console.log (numeros);
//Meio do array
numeros.splice(1,0,'a');
console.log (numeros);

// Final do array
numeros.push(5);
console.log (numeros);