function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosCristian = ['Amanda','Sabrina','Rafael','Jonas','Carol','Jhonathan']
    if(ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 
        'Você pode entrar!'
    }else{
        document.getElementById('PermissaoDeEntrada').innerText = 
        'Você não pode Entrar!'
    }
}