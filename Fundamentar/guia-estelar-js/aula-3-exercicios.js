// 1. Declare uma variável de nome weight

let weight

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cara um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Bootean
*/

let name = "Flávia"
let age = 26
let stars = 4.5
let isSubscribed = true

/* 
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem: 

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    name: "Flávia",
    age: 26,
    weight: 128.5,
    isSubscribed: true
};

console.log(typeof student)
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhuma valor, ou seja, somente o Arrya vazio
*/

let students = []
console.log(students)

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]

console.log(students)

// 7. Coloque no console o valor da posição zero do Array acima

console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

let student2 = {
    name: "Maria",
    age: 29,
    weight: 80.5,
    isSubscribed: false
}

/* students = [
    student,
    student2
]
*/

students[1] = student2

console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja de você acertou;

    console.log(a)
    var a = 1
*/

// Vai imprimir no console.log(a) undefined, pois a variável foi informada após o comando do console. 

console.log(a)
    var a = 1
