// ---> MANIPULANDO CONTEÚDO

// getElementById()

/* console.log(document.getElementById('blog-title'))

const element = document.getElementsByTagName('h1')
console.log(element)
*/

// textContent

/*
const element = document. querySelector('h1')

element.textContent += " Olá Devs!"

console.log(element.textContent)
*/

// innerText

/*
const element = document.querySelector('h1')

element.innerText = "Olá Devs"
*/

// innerHTML

/*
const element = document.querySelector('h1')

element.innerHTML = "Olá Devs! <small>!!!</small>"
*/

// Manipulando conteúdo: value

/*
const element = document.querySelector('input')

element.value = "Valor"
*/

// ---> NAVEGANDO PELOS ELEMENTOS

/*
// Pegando o elemento pai
const element = document.querySelector('h1')

console.log(element.parentElement)

// Pegando o elemento filho (NodeList -> Mostra espaços vazios(linhas tbm))
const el1 = document.querySelector('body')

console.log (el1.childNodes)

//Pegando o elemento filho (HTMLCollection -> Não mostra espaços vazios e/ou linhas sem texto)
const el2 = document.querySelector('body')

console.log(el2.children)

// Pegando o primeiro filho (pega espaços vazios)
const el3 = document.querySelector('body')

console.log(el3.firstChild)

// Pegando o primeiro elemento (ignora espaços vazios)
const el4 = document.querySelector('body')

console.log(el4.firstElementChild)

// Pegando o último filho
const el5 = document.querySelector('body')

console.log(el5.lastChild)

// Pegando o último elemento
const el6 = document.querySelector('body')

console.log(el6.lastElementChild)

// Pegando irmãos (leva em consideração espaços vazios)
const el7 = document.querySelector('header')

console.log(el7.nextSibling)

// Pegando irmãos (não leva em consideração espaços vazios)
const el8 = document.querySelector('header')

console.log(el8.nextElementSibling)

// Pegando irmãos (leva em consideração espaços vazios)
const el9 = document.querySelector('body script')

console.log(el9.previousSibling)

// Pegando irmãos (não leva em consideração espaços vazios)

const el10 = document.querySelector('body script')

console.log(el10.previousElementSibling)
*/

// ---> CRIANDO E ADICIONANDO ELEMENTOS NA PÁGINA

/*
// createElement
const div = document.createElement('div');
div.innerText = "Olá devs!"

// append prepend 
const body = document.querySelector('body')

// body.append(div)

//body.prepend(div)

// insertBefore
//const script = body.querySelector('script')
body.insertBefore(div, script)
*/

// Para simular um afherBefore (não existe, ms usamos um truque), podemos fazer: 
/*
const div = document.createElement('div')
div.innerText = "Olá devs!"

const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)
*/

// EVENTOS
/*
function print() {
    console.log('print')
}
*/

/*
const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('rodei')
}
*/

/*
const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print() {
    console.log('print')
}
*/

// argumento evento
const input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}

