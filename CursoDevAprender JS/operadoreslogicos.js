// Operador Lógico 'E' (&&)
// Retorna TRUE se os dois operandos forem true

//console.log (true && true);

// Se houver um operando false, ele retornará FALSE
//console.log (true && false);

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho

console.log ('pode aplicar:',podeAplicar);

//console.log (podeAplicar)

//Operador Lógico 'OU' (||)
//Retornar TRUE se um dos operandos forem true

//console.log (podeAplicar);

// Operador NOT (!)
let candidatoRecusado = !podeAplicar;

console.log ('Candidato recusado:', candidatoRecusado);

