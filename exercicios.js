//Exercícios de Fundamentos

//Exercício 1: Criar um script que imprima "Olá, Mundo!" no console

console.log('Olá, Mundo!')

//Exercício 2: Dado o valor de uma string '1234', converta-o em um número e exiba o tipo da variável no console.

let valor = '1234'
let valorNumber = Number(valor)

console.log(typeof valorNumber)

//Exercício 3: Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras ele tem na frase

const minhaString = "JavaScript é incrível"
const quantidadeDeCaracteres = minhaString.length
const numPalavras = minhaString.split(' ').length

console.log(minhaString)
console.log(`O número de caracteres é: ${quantidadeDeCaracteres}`)
console.log(`O número de palavras é: ${numPalavras}`)

//Exercício 4: Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.

const nomes = ['Lucas', 'Fábio', 'Kauã', 'Izael', 'Anderson']

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

//Exercício 5: Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, '14:50'). A função deve retornar uma string que converta o horário para o formato de 12 horas (2:50pm)

function convercaoDeHorario(hora24){
    const [hora, minuto] = hora24.split(':')
    let hora12 = hora % 12 || 12
    const periodo = hora < 12 ? 'AM' : 'PM'
    return `${hora12}:${minuto} ${periodo}`
}

console.log(convercaoDeHorario('16:45'))

//Execício 6: Crie uma função que converta a temperetura em Celsius para Fahrenheit

const convertCtoF =  celsius =>{
    let fahrenheit = celsius * 9/5 + 32
    return fahrenheit
}

console.log(convertCtoF(30))