const readline = require('readline/promises');
const { calcularAreaTriangulo } = require('./formulasAreas');
const { calcularPerimetroTriangulo } = require('./formularPerimetros');
const { calcularEmprestimoJurosSimples } = require('./emprestimos');
const buscarInformacoesCep = require('./buscarCep');

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

async function iniciarExemploPerimetroTriangulo() {
    const ladoA = Number(await input.question("Qual o valor do lado A ?"))
    const ladoB = Number(await input.question("Qual o valor do lado B ?"))
    const ladoC = Number(await input.question("Qual o valor do lado C ?"))
    console.log(calcularPerimetroTriangulo(ladoA, ladoB, ladoC))
    input.close()
}

async function realizarEmprestimo() {
    const dinheiro = Number(await input.question("Quanto você quer de empréstimo ?"))
    const tempo = Number(await input.question("Quanto tempo você irá levar para pagar ?"))
    const taxaAnual = Number(await input.question("Qual o valor da taxa anual ?"))

    const juros = calcularEmprestimoJurosSimples(dinheiro, tempo, taxaAnual)
    console.log("JUROS", juros)
    console.log("Total", dinheiro + juros)
}

async function cep() {
    const cep = await input.question("Qual é o seu cep ?")
    const resultado = buscarInformacoesCep(cep)
    console.log(resultado)
    if(!resultado) { /* ....... */ }
}

cep()



