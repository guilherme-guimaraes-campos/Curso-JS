//For...In

const pessoa = {
    nome:'Guilherme',
    idade:20
};
//key-value
for(let chave in pessoa){
    console.log (chave,pessoa.nome);
}

const cores = ['vermelho','azul','verde'];

for(let indice in cores){
    console.log(indice,cores[indice])
}
