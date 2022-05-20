// Velocidade máxima de até 70km 
//A cada 5km acima do limite você ganha 1 ponto na carteira.
//Math.Floor() <- 'Arredondar'
//Caso pontos maior que 12 a carteira é suspendida.



verificarVelocidade(130);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if(velocidade <= velocidadeMaxima)
    console.log ('OK!');
    else {
        const pontos = Math.floor((velocidade-velocidadeMaxima) / KmPorPonto);
        if (pontos >=12)
        console.log ('Carteira suspensa!');
        else 
            console.log ('Pontos:',pontos);
    }



}
