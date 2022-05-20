// Natureza dinâmica de Objetos:

const mouse = {
    cor: 'red',
    marca: 'dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log ('Mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log (mouse);