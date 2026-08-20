

// 1 - Negativo ou Positivo


let prompt = require("prompt-sync")()



let usuario = prompt("Digite um número: ")
if( usuario >= 0 ){
    console.log("O número é positivo ")
}else {
    console.log("O número é negativo ")
}



let numero1 = prompt("Digite o primeiro número: ")
let numero2 = prompt("Digite um segundo número: ")
if( numero1 > numero2 ){
    console.log("O primeiro número é maior ")
}else {
    console.log("O segundo número é menor ")
} 
