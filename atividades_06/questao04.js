

// QUESTÃO 4

let prompt = require("prompt-sync")()

let peso =(prompt("Digite o peso dos peixes em kg: "))
let excesso = 0
let multa = 0
if(peso > 50){
    excesso = peso - 50
    multa = excesso * 4.25
}

console.log("Peso dos peixes: "+peso+"kg ")
console.log("Excesso: "+excesso+"kg")
console.log("Multa de R$"+multa)
