/*
### ----- Atividade 0:

Desenhe no terminal um retângulo usando apenas o comando do console.log
 _____
|     |
|     |
|     |
|_____|
*/

console.log(" ____ ")
console.log("|    |")
console.log("|    |")
console.log("|    |")
console.log("|____|")



/*
### ----- Atividade 1:

Crie uma variável chamada `cidade` e outra chamada `estado`.
Mostre na tela a frase: "Eu moro em X - Y"

Substitua X pelo valor da variável `cidade` e Y pelo valor da variável `estado`.

*/


let cidade = "São Carlos"
let estado = "São Paulo"
let cidade_estado = cidade +" - "+estado
console.log("Eu moro em "+cidade_estado)


/*
### ----- Atividade 2:

Crie duas variáveis chamadas `numero1` e `numero2`.
Atribua valores numéricos a elas.

Crie uma variável chamada `soma` para armazenar o resultado da soma dos dois números.

Mostre o resultado da soma na tela.

*/


let numero1 = 300
let numero2 = 300
let soma = numero1 + numero2
console.log("O resultado da soma é "+soma)


/*
### ----- Atividade 3:

Crie uma variável chamada `idade`.
Mostre na tela a mensagem: "Olá, você tem X anos e daqui a 10 anos terá Y."

Substitua X pelo valor da idade atual e Y pela idade que a pessoa terá daqui a 10 anos.

*/

let idade = 15
let somatoria = 10
let resultado = idade + somatoria

console.log("Olá, você tem "+idade+" e daqui 10 anos você terá "+resultado)


/*
### ----- Atividade 4:

Crie uma variável chamada `numero`.

Calcule o dobro e o triplo desse número.
Armazene os resultados em duas novas variáveis.

Mostre na tela o número original, seu dobro e seu triplo.

*/

let numero = 19
let dobro = numero * 2
let triplo = numero * 3
console.log("O dobro de "+numero+" é "+dobro+" e o triplo é" +triplo)



/*
### ----- Atividade 5:

Crie variáveis para armazenar o nome e o preço de dois produtos diferentes.

Mostre na tela o nome e o preço de cada produto individualmente.
Em seguida, calcule e mostre o valor total dos dois produtos.

*/

let miojo = 3.80
let refrigerante2l = 12.00
let somatotalprodutos = miojo + refrigerante2l
console.log("Miojo por apenas R$"+miojo+" e refrigerante por R$"+refrigerante2l)
console.log("E o total da compra é R$"+somatotalprodutos)

/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/

let salario07 = 500
let descontoinss = 250
let novosalario = salario07 - descontoinss
console.log("O salário anterior era de R$"+salario07+" e com os desconto de R$"+descontoinss+" o novo salário será de R$"+novosalario)


/*
### ----- Atividade 7:

João recebe R$ 100 de mesada e gastou R$ 35.

Crie variáveis para representar o valor da mesada e o valor gasto.
Calcule quanto dinheiro sobrou e armazene o resultado em uma nova variável.

Mostre na tela o valor da mesada, o valor gasto e quanto dinheiro sobrou.

*/

let mesada = 100
let gastos = 50
let subtracao = mesada - gastos
console.log("a mesada de João era de R$"+mesada+", ele gastou R$"+gastos+" e sobrou R$"+subtracao) 

/*
### ----- Atividade 8:

Crie duas variáveis chamadas `base` e `altura`.

Calcule a área de um retângulo utilizando esses dois valores.
Armazene o resultado em uma nova variável.

Mostre na tela o valor da base, da altura e da área calculada.

*/


let base = 8
let altura = 5
let resultado3 = base * altura
console.log("A base do retangulo é de "+base+"cm e a altura é"+altura+"cm, então a área total é de "+resultado3+"cm")

/*
### ----- Atividade 9:

Crie uma variável chamada `celsius` para armazenar uma temperatura em graus Celsius.
Converta essa temperatura para Fahrenheit e para Kelvin e mostre na tela os valores da conversão

*/

let celsius = 20
let fahrenheit = (celsius * 9 / 5) + 32
let kelvin = celsius + 273.15
console.log("Graus celsius de "+celsius+"° convertido em fahrenheit é "+fahrenheit+" e em kelvin é "+kelvin )


/*
### ----- Atividade 10:

Crie uma variável contendo uma quantidade de horas.

Calcule quantos minutos correspondem a essa quantidade de horas.
Calcule também quantos segundos correspondem a essa quantidade de horas.

Mostre na tela a quantidade de horas, de minutos e de segundos.

Exemplo:

3 horas correspondem a 180 minutos ou 10800 segundos.

*/


let horas = 4
let minutos = horas * 60
let segundos = horas * 3600
console.log("As "+horas+" convertidas em minutos são: "+minutos+" e em segundos são "+segundos)



/*
### ----- Atividade 11:

Crie duas variáveis de qualquer tipo.

Em seguida, faça com que o valor da primeira variável seja armazenado na segunda variável,
e que o valor original da segunda variável seja armazenado na primeira variável.

Ao final, mostre o valor das duas variáveis na tela.

*/


let variavelum = "Groselha"
let variaveldois = 99
let auxiliar = variavelum
variavelum = variaveldois
variaveldois = auxiliar
console.log("variavel 1 é: "+variavelum+ " e a variavel 2 é: "+variaveldois)


/*
### ----- Atividade 12:

Crie variáveis para armazenar a distância percorrida por um carro,
a quantidade de litros de combustível utilizada e o preço do litro do combustível.

Calcule quantos quilômetros o carro percorreu para cada litro de combustível.

Calcule também quanto foi gasto com combustível durante a viagem.

Mostre na tela a distância percorrida, a quantidade de litros utilizados,
o consumo do carro e o valor total gasto com combustível.

*/

let distanciacarro = 12 
let combustivel = 4 
let precogasosa = 6.53
let kml = distanciacarro / combustivel
let gastosgasosa = combustivel * distanciacarro 
console.log("A distancia percorrida é "+distanciacarro+"km , os litros de combustivel usado foi de "+combustivel+"L a gasolina saiu no total por "+gastosgasosa+"L")



console.log("   /\\")
console.log("  /  \\")
console.log(" /    \\")
console.log("/______\\")