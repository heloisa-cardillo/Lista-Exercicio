//Exercício 1
class Pessoa {
    constructor(nome, alturaCm, peso) {
        this.nome = nome;
        this.alturaCm = alturaCm;
        this.peso = peso;
    }

    calcularIMC() {
        const alturaMetros = this.alturaCm / 100;
        return this.peso / (alturaMetros ** 2);
    }

    classificarIMC(imc) {
        if (imc < 16) {
            return "Baixo peso muito grave";
        } else if (imc >= 16 && imc <= 16.99) {
            return "Baixo peso grave";
        } else if (imc >= 17 && imc <= 18.49) {
            return "Baixo peso";
        } else if (imc >= 18.50 && imc <= 24.99) {
            return "Peso normal";
        } else if (imc >= 25 && imc <= 29.99) {
            return "Sobrepeso";
        } else if (imc >= 30 && imc <= 34.99) {
            return "Obesidade grau I";
        } else if (imc >= 35 && imc <= 39.99) {
            return "Obesidade grau II";
        } else {
            return "Obesidade grau III";
        }
    }
}

function calcularEClassificarIMC() {
    const nome = prompt("Informe o nome da pessoa: ");
    const alturaCm = parseFloat(prompt("Informe a altura em centímetros: "));
    const peso = parseFloat(prompt("Informe o peso em quilos: "));

    const pessoa = new Pessoa(nome, alturaCm, peso);
    const imc = pessoa.calcularIMC();
    const classificacao = pessoa.classificarIMC(imc);

    console.log(`\n${pessoa.nome} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.`);
}

calcularEClassificarIMC();


//Exercício 2
function identificarFaixaEtaria() {
    const idade = parseInt(prompt("Informe a sua idade: "));

    if (idade >= 0 && idade < 15) {
        console.log("Criança");
    } else if (idade >= 15 && idade < 30) {
        console.log("Jovem");
    } else if (idade >= 30 && idade < 60) {
        console.log("Adulto");
    } else if (idade >= 60) {
        console.log("Idoso");
    } else {
        console.log("Idade inválida.");
    }
}

identificarFaixaEtaria();

//Exercício 5 
function calcular(num1, num2, operacao) {
    if (operacao.toLowerCase() === 'soma') {
        return num1 + num2;
    } else if (operacao.toLowerCase() === 'subtracao' || operacao.toLowerCase() === 'subtração') {
        return num1 - num2;
    } else {
        return "Operação inválida.";
    }
}

function executarCalculo() {
    const num1 = parseFloat(prompt("Informe o primeiro número: "));
    const operacao = prompt("Informe a operação (soma ou subtracao): ");
    const num2 = parseFloat(prompt("Informe o segundo número: "));

    const resultado = calcular(num1, num2, operacao);

    if (typeof resultado === 'number') {
        console.log(`\nO resultado é: ${resultado.toFixed(2)}.`);
    } else {
        console.log(`\n${resultado}`);
    }
}

executarCalculo();

//Exercício 6
function converterDataParaExtenso() {
    const dataString = prompt("Informe uma data no formato 'dd/mm/aaaa': ");
    const partesDaData = dataString.split('/');

    const dia = partesDaData[0];
    const mes = parseInt(partesDaData[1]);
    const ano = partesDaData[2];

    const nomesDosMeses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    const nomeDoMes = nomesDosMeses[mes - 1];

    console.log(`\n${dia} de ${nomeDoMes} de ${ano}.`);
}

converterDataParaExtenso();
