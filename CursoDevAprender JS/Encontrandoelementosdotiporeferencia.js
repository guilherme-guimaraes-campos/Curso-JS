const marcas = [
    {id:1,nome:'a'},
    {id:2,nome:'b'}
    
];

const marca = marcas.find(function(marcas){
    return marcas.nome === 'a';
});
console.log (marca);