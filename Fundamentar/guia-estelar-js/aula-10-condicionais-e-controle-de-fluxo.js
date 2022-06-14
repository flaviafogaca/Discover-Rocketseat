// Exemplo if e else

let temperature = 36.5
let highTemperatura = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperatura) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// Exemplo switch

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '%', 8))

// throw (sempre vai precisar do try/catch, senão pode dar erro)

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é necessário'
    }

    console.log('depois do erro')
}

// try...catch

try {
    sayMyName;()

} catch(e) {
    console.log(e)
}

console.log('após a função de erro')
