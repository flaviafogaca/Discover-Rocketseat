// Entrutura de repetição
// -----> for <-----

/* EXEMPLO GERAL

for(let i = 0; i < 10; i++){
    console.log(i)
}
*/

/* EXEMPLO COM BREAK (break para a execução do loop)

for(let i = 100; i > 0; i--) {
    if( i === 50) {
        break;
    }

    console.log(i)
}
*/

/* EXEMPLO COM CONTINUE (pula a execução do momento)

for(let i = 10; i > 0; i--) {
    if( i === 5) {
        continue;
    }

    console.log(i)
}
*/

// -----> while <-----

/* EXEMPLO (Normalmente se uma while (e não o for) quando não se sabe quando vai parar)

let i = 0;

while(i < 10) {
    console.log(i)
    i++;
}
*/

/* EXEMPLO (Normalmente se uma while (e não o for) quando não se sabe quando vai parar)

let i = 492382382938
while(i > 10) {
    console.log(i)

    i /= 35
}
*/

// -----> for...of <-----

/* EXEMPLO (Serve para strings e arrays)

let name = 'Flávia'
let names = ['Flávia', 'Maria', 'Danielle']

for(let char of name) {
    console.log(char)
}
*/

// -----> for...in <-----

/*
let person = {
    name: 'jhon',
    age: 30,
    weigth: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}
*/
