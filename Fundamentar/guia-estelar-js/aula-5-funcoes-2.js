// function expression
// function anonymous

//parâmetros (parameters)
const sum = function(number1, number2) {
    console.log(number1 + number2)
}

sum(2,3) // arguments - argumentos
sum(10, 30)

// function test

const sum2 = function(number3, number4) {
    total = number3 + number4 //Não faça isso! Defina a variável. Ex: let total
    return total
}

let number3 = 10
let number4 = 5

console.log(`O número 3 é ${number3}`)
console.log(`O número 4 é ${number4}`)
console.log(`A soma é ${sum2(number3, number4)}`)
