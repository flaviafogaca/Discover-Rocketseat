// Manipulando Strings e Números

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

/*
let word = "Laranja"
console.log(word.length)
let number = 123
console.log(String(number).length)
*/

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

/*
let number = 2222223.4431
console.log(number.toFixed(2).replace(".", ",")) //retorna string
*/

// Tanforme letras minúsculas em maiúsculas. Faça o contrário disso também

/*
let word = "Eu amo programar!"
console.log(word.toLocaleUpperCase())
console.log(word.toLowerCase())
*/

// Verificar se o texto contém a palavra Amor

/*
let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor"))

let phrase2 = "Mais amor por favor!"
console.log(phrase2.includes("Amor"))

let phrase3 = "Mais Amor por favor!"
console.log(phrase3.includes("Amor"))
console.log(phrase3.includes("Amor","amor"))
*/

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloquei _

/*
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
*/

// Criar Array com construtor

/*
let myArray = ['a', 'b', 'c']
console.log(myArray)

let myArrayConstrutor = new Array('a', 'b', 'c')
console.log(myArrayConstrutor)

let myArray2 = [3]
console.log(myArray2)
*/

// Contar elementos de um array

/*
console.log(["a", "b", "c"].length)
*/

// Transformar uma cadeia de caracteres em elementos de um array

/*
let word = "manipulação"
console.log(Array.from(word))
*/

// Manipulando Arrays 

let techs = ["html", "css", "js"]

techs.push("nodejs") // Adiciona um item no fim

techs.unshift("sql") // Adiciona item no começo do array

techs.pop() // Remove o último item do array

techs.shift() // Remove o primeiro item do array

console.log(techs.slice(1,3)) // Pegar somente alguns elementos do array

techs.splice(1, 1) // Remover 1 ou mais em qualquer posição do array

// Encontrar a posição de um elemento no array

let index = techs.indexOf('js')
console.log(index)
console.log(techs)
techs.splice("html", 1)
console.log(techs)



