//  aula 04 - INPUT ( •̀ ω •́ )✧

let prompt = require("prompt-sync")() 


let nome = prompt("Olá, digite o seu nome: ")
let sobrenome = prompt("Digite o seu sobrenome: ")
let idade = prompt("Digite a sua idade: ")
console.log("Seja bem-vindo(a) "+nome+" " +sobrenome+ " você tem "+idade+" anos XD") 


console.log("\n\n") 

let produto1 = prompt("Digite o nome e um produto: ")
let preco1 = prompt("Digite o preço do "+produto1+": "+"")
let produto2 = prompt("Digite o nome do outro produto: ")
let preco2 = prompt("Digite o preço do "+produto2+" R$")

console.log("---RELATORIO---")  
console.log("Controle remoto - "+preco1 )