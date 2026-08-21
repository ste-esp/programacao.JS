

// ATIVIDADE LANCHONETE - AULA 05 o(TヘTo)


let prompt = require("prompt-sync")()


console.log("===========================================")
console.log("CADASTRO DE PREÇO - NUM QUIDITO DOGUIZITO ")
console.log("===========================================")

let pao= parseFloat (prompt("Digite o valor do pão: R$ "))
let salsicha = parseFloat (prompt("Digite o valor do salsicha: R$ "))
let pure_de_batata = parseFloat (prompt("Digite o valor do purê de batata: R$ "))
let queijo = parseFloat (prompt("Digite o valor do queijo: R$ "))
let bacon= parseFloat (prompt("Digite o valor do bacon: R$ "))
let porcentagem_de_lucro = parseFloat(prompt("Digite a porcentagem de lucro: "))


let preco_de_tudo = pao + salsicha + pure_de_batata + queijo + bacon

console.log("O lucro aplicado é: "+porcentagem_de_lucro+"%")
porcentagem_de_lucro = porcentagem_de_lucro / 100




console.log("\n===========================================")
console.log("CARDÁPIO NUM QUIDITO DOGUIZITO ")
console.log("===========================================\n")




console.log("CACHORRO-QUENTE COM PURÊ")
console.log("Ingredientes: pão, purê de batata, bacon e salsicha")
let produto1 = pao + salsicha + pure_de_batata + bacon
let custo_dog_pure = ("Preço de custo: R$ "+produto1)
let ingredientes_lucro = produto1 * custo_dog_pure + produto1
let venda_dog_pure = ("Preço de venda: R$ "+ingredientes_lucro)




/*let valor = parseFloat (prompt("Digite o valor: "))
let desconto = parseFloat(prompt("Escolha o desconto "))
desconto = desconto / 100
let total = valor * desconto
let valor_com_desconto =  valor - total
console.log( valor_com_desconto )*/



/*console.log("---------------------------------------------")

console.log("\n CACHORRO-QUENTE CREMOSO\n")
console.log("Ingredientes: pão, 2 salsichas e queijo")
let custo_dog_cremoso = parseFloat (prompt("Preço de custo: R$ "))
let venda_dog_cremoso = parseFloat(prompt("Preço de venda: R$ "))

console.log("\n---------------------------------------------\n")

console.log("\n CACHORRO-QUENTE ESPECIAL\n")
console.log("Ingredientes: pão, 1 salsichas, 1 purê de batata, 1 queijo e 1 bacon")
let custo_dog_especial = parseFloat (prompt("Preço de custo: R$ "))
let venda_dog_especial = parseFloat(prompt("Preço de venda: R$ "))


console.log("\n---------------------------------------------\n")
console.log("COMBO NUM QUIDITO\n")*/
