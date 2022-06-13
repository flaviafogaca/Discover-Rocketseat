// OPERADORES DE COMPARAÇÃO

// Irá comparar valores e retornar um Boolean como resposta à comparação

// let one = 1
// let two = 2

/* == igual a
console.log(two == 1) // false  
console.log(one == "1") // true
*/

/* != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")
*/

/* === estritamente igual a
console.log(one === "1")
console.log(one === 1)
*/

/* !== estritamente diferente de
console.log(two !== "2")
console.log(two !== 2)
*/

/* > maior que
console.log(one > two)
*/

/* >= maior igual a
console.log(one >= 1)
console.log(two >= 1)
*/

/* < menor que
console.log(one < two)
*/

/* <= menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)
*/

// OPERADORES DE ATRIBUIÇÃO (ASSIGNMENT)

/*

let x

// assignment
x = 1

// addtion assignment
x += 2 // x = x + 2

// subtraction assignment
x -= 1 // x = x - 1

// multipliction assignment
x *= 2 // x = x * 2

// division assignment
x /= 2 // x = x/2

// remainder
x %= 2 // resto da divisão

console.log(x)

// exponetiation
let y = 2
y **= 2
console.log(y)

*/

// OPERADORES LÓGICOS (logical operators)

// - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

/*
let pao = true
let queijo = true

// AND &&
// console.log(pao && queijo)

// OR || 
// console.log(pao || queijo)

// NOT !
console.log(!pao) // Como estamos negando pão, ele passa a ser falso
*/

// OPERADOR CONDICIONAL (TERNÁRIO)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

/*
// Exemplos
// Café da manhã top
let pao = false
let queijo = false

const niceBrakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBrakfast)

// Maior de 18
let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)
*/

// OPERADOR DE STRING (STRING OPERATOR)

// comparison (comparação)
// console.log( 'a' == 'a')

// concatenation (concatenação)
// Retorna a união de duas Strings
// console.log('ba' + 'la')

/*
    Type conversion (typecasting) vs Type coersion
*/

// console.log(Number('9') + 5)

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

// console.log(0 ? 'verdadeiro' : 'falso')

/* 
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

// console.log ({} ? 'verdadeiro' : 'falso')

// OPERATOR PRECEDENCE (PROCEDÊNCIA DE OPERADORES)

/*
    *grouping                       ( )
    *negação e incremento           ! ++ --
    *multiplicação e divisão        * /
    *adição e subtração             + -
    *relacional                     < <= > >=c
    *iguadade                       == != === !==
    *AND                            &&
    *OR                             ||
    *condicional                    ?:
    *assignment                     = += -= *=
*/

