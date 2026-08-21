

//QUESTÃO 5

let prompt = require("prompt-sync")()

let time1 = prompt("Digite o time aqui: ")
let gols1 = parseInt(prompt("Digite a quantidade de gols do "+time1+": "))

let time2 = prompt("Digite o time aqui: ")
let gols2 = parseInt(prompt("Digite a quantidade de gols do "+time2+": "))

if(gols1 > gols2){
    console.log("Vencedor "+time1)
} 
if(gols2 > gols1){
    console.log("Vencendor "+time2)
}


if(gols1 == gols2){
    console.log("EMPATE")
} 
    
    