//SPREAD
const primeiro = [1,2,3];
const segundo = [4,5,6];


const combinado = [...primeiro,...segundo];        // <- Spread
console.log (combinado);

const clonado = [...combinado];
console.log (clonado);