// Escreva uma função que usa 2 numeros e retorna o maior entre eles.
let valorMaior = max(5,9);
console.log (valorMaior);

function max(numero1,numero2){
    if(numero1 > numero2)
    return numero1;
   return numero2;


}
//Apenas uma linha:
function max(numero1,numero2){
    return numero1 > numero2 ? numero1 : numero2;
}