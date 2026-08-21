
// QUESTÃO 03

let prompt = require("prompt-sync")()


let peso = prompt("Digite o seu peso: ")
let altura = prompt("Digite a sua altura: ")

let imc = peso / (altura * altura)
console.log("seu IMC é "+imc)

 if (imc > 25.5){
    console.log("Sobrepeso")
}else{
    console.log("Peso ideal")
}
