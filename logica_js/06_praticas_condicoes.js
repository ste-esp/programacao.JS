

// AULA 06 - PRÁTICAS COM CONDIÇÕES


let prompt = require("prompt-sync")()

let preco_saopaulo = 125.00
let preco_araraquara = 68.90
let preco_seguro = 42.50

let total = 0

console.log("Escolha o seu destino: ")
console.log("1 - São Paulo por R$ "+preco_saopaulo)
console.log(" 2 - Araraquara por R$ "+preco_araraquara)
let resposta = prompt("Digite uma opção: ")

if(resposta == "1"){
    total = preco_saopaulo
} else {
    total = preco_araraquara
}

let seguro = prompt("Deseja adicionar um seguro por mais R$ "+preco_seguro+"? ")
if( seguro == "sim" ){
    total = total + preco_seguro
}

let cupom = prompt("Digite seu cupom de desconto: ")

if(cupom == "Conradito10"){
    console.log("Cupom de 10% aplicado!")
    let desconto = total * 0.10
    total = total - desconto
} else {
    console.log("Este cupom não existe")
}

let promocao = prompt("Você gostaria de receber novas promoções no seu e-mail?")

if(promocao == "sim"){
    console.log("Obrigado por se registrar, você receberá novos e-mails em breve.")
} else {
    console.log("Ok. você não receberá e-mails de promoções")
}

console.log("O total da viagem é de R$ "+total)

console.log("Formas de pagamento: ")
console.log("1 - Cartão de crédito (Acréscimo de 5% ")
console.log("2 - PIX (Desconto de 5% ")
resposta = prompt("Escolha uma opção: ") 
if(resposta == "1"){
    //total = total * 1.05
    let desconto = total * 0.5
    total = total + desconto
}else{
    //total = total * 0.95
    let desconto = total * 0.5
    total = total - desconto
}
console.log("Total a se pagar: R$"     )

console.log("\nObrigado volte sempre!")