let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let resultado = document.getElementById('resultado')

function calcular(){
    let numero1 = Number(n1.value)
    let numero2 = Number(n2.value)

    if(numero1 < 0 || numero1 > 10){
        alert("Insira um número entre 0 e 10")
        n1.style.border = '1px solid red'

    }else if(numero2 < 0 || numero2 > 10){

        alert("Insira um numero entre 0 e 10 no segundo numero")
        n2.style.border = '1px solid red'
    }else{

        n1.style.border = '1px solid black'
        n2;style.border = '1px solid black'

        let soma = numero1 + numero2 
        resultado.value = soma
    }
}

function limparCampos(){
    n1.value = ""
    n2.value = ""
    resultado.value = ""

    n1.focus()

}
