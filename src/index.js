const readline = require('readline/promises');
const { calcularAreaTriangulo } = require('./formulasAreas');
const { calcularPerimetroTriangulo } = require('./formularPerimetros');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function iniciarExemploAreaTriangulo() {
    const altura = Number(await input.question("Qual é a altura do triângulo ?"))
    const base = Number(await input.question("Qual é a base do triângulo ?"))
    console.log(calcularAreaTriangulo(altura, base))
    input.close()
}

async function iniciarExemploPerimetroTriangulo(){
    const ladoA = Number(await input.question("Qual o valor do lado A ?"))
    const ladoB = Number(await input.question("Qual o valor do lado B ?"))
    const ladoC = Number(await input.question("Qual o valor do lado C ?"))

    console.log(calcularPerimetroTriangulo(ladoA, ladoB, ladoC))
    input.close()
}

iniciarExemploPerimetroTriangulo();




