// EXERCÍCIOS

/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F
*/

/* RESOLUÇÃO
function getScore(score) {

    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score < 90;
    let scoreC = score >= 70 && score < 80;
    let scoreD = score >= 60 && score < 70;
    let scoreF = score < 60 && score >= 0;

    let scoreFinal;

    if(scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida!"
    }

    return scoreFinal
}

console.log(getScore(30))
console.log(getScore(130))
console.log(getScore(-2))
console.log(getScore(75))
console.log(getScore(84))
console.log(getScore(95))
console.log(getScore(65))
*/

/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
*/

/*
let family = {
    incomes: [1000, 1500, 2000, 1350.50],
    expenses: [4000, 800.50, 1200, 300.25, 400]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const positiveBalance = total >= 0

    let balanceText = "negativo"
    
    if (positiveBalance) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)
}

calculateBalance()
*/

/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

RESOLUÇÃO:

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
       throw new Error('Temperatura inválida') 
    }

    // fluxo ideal: F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    // fluxo alternativo: C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSing = 'F'  
    }

    return formula (updatedDegree) + degreeSing
}

try {
   console.log(transformDegree('50F'))
   console.log(transformDegree('10C'))
   console.log(transformDegree('50Z'))
} catch (error) {
    console.log(error.message)
}
*/

/* ### Buscando e contando dados em Arrays

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

    * Contar o número de categorias e o número de livros em cada categoria;
    * Contar o número de autores;
    * Mostrar livros do autor Augusto Cury;
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor. 

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
            title: "Os segredos da mente milionária",
            author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilînia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubistituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria:', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();

/*
function booksOfAugustoCury() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor: ", books)
}

booksOfAugustoCury();
*/

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury');
booksOfAuthor('George S. Clason');

