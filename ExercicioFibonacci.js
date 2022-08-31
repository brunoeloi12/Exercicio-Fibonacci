var numero1 = 1
var numero2 = 0
var atribuicao = true
for(var i = 0;i <= valor; i++){
    numero1 = numero1 + numero2
    numero2 = numero1 - numero2
    if(valor == numero1||valor == 0){
        atribuicao = false
    }
}
if(atribuicao == false){
    console.log("O numero ", valor ," faz parte da sequência de Fibonacci")
}else{
    console.log("O numero ", valor ," não faz parte da sequência de Fibonacci")
}