let pesoIdeal = 85
let amigo = {nome:'José',
sexo:'M',
peso:85.4,
engordar(p=0){
    console.log ('Engordou')
    console.log (`O peso antigo de ${amigo.nome} era ${amigo.peso}`)
    this.peso += p

}
}

amigo.engordar(2)
console.log (`Agora ${amigo.nome} pesa ${amigo.peso}Kg`)