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

function calcularClassificarIMC() {
    const nome = prompt("Informe o nome da pessoa: ");
    const alturaCm = parseFloat(prompt("Informe a altura em centímetros: "));
    const peso = parseFloat(prompt("Informe o peso em quilos: "));

    const pessoa = new Pessoa(nome, alturaCm, peso);
    const imc = pessoa.calcularIMC();
    const classificacao = pessoa.classificarIMC(imc);

    console.log(`\n${pessoa.nome} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.`);
}

calcularClassificarIMC();


//Exercício 2
function FaixaEtaria() {
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

FaixaEtaria();


//Exercício x
function Frete() {
    const distancia = parseFloat(prompt("Informe a distância em quilômetros: "));
    const numPecas = parseInt(prompt("Informe a quantidade de peças: "));
    const regiao = parseInt(prompt("Informe a região (1-Sul, 2-Sudeste, 3-Centro-oeste): "));
    const rastreamento = prompt("Deseja rastreamento (S-Sim e N-Não)? ").toUpperCase();

    let taxaRastreamento = 0;
    if (rastreamento === 'S') {
        taxaRastreamento = 200.00;
    }

    let valorFretePecas = 0;
    let valorPeca = 0;
    let desconto = 0;

    switch (regiao) {
        case 1: 
            valorPeca = 1.00;
            desconto = 0.10;
            break;
        case 2: 
            valorPeca = 1.20;
            desconto = 0.12;
            break;
        case 3: 
            valorPeca = 1.30;
            desconto = 0.13;
            break;
        default:
            console.log("Região inválida.");
            return;
    }

    if (numPecas <= 1000) {
        valorFretePecas = numPecas * valorPeca;
    } else {
        const pecasComDesconto = numPecas - 1000;
        const valorComDesconto = valorPeca * (1 - desconto);
        valorFretePecas = (1000 * valorPeca) + (pecasComDesconto * valorComDesconto);
    }
    

    const valorFreteKm = distancia * 0.50;
    const totalFrete = taxaRastreamento + valorFretePecas + valorFreteKm;

    console.log("\n--- Detalhes do Frete ---");
    console.log(`Total do frete: R$ ${totalFrete.toFixed(2)}`);
    console.log("")
    console.log(`Taxa do rastreamento: R$ ${taxaRastreamento.toFixed(2)}`);
    console.log(`Valor do frete pelas peças: R$ ${valorFretePecas.toFixed(2)}`);
    console.log(`Valor do frete por quilômetro: R$ ${valorFreteKm.toFixed(2)}`);
    
}

Frete();


//Exercício 3


//Exercício 4
class Funcionario {
    constructor(codigo, horasTrabalhadas, turno, categoria) {
        this.codigo = codigo;
        this.horasTrabalhadas = horasTrabalhadas;
        this.turno = turno;
        this.categoria = categoria;
    }
}

function FolhaDePagamento() {
    console.log("Sistema de Folha de Pagamento");

    const salarioMinimo = parseFloat(prompt("Informe o salário mínimo estadual: "));
    
    const codigoFuncionario = parseInt(prompt("Código do funcionário: "));
    const horasTrabalhadas = parseInt(prompt("Número de horas trabalhadas no mês: "));
    const turno = prompt("Turno de trabalho (M - matutino, V - vespertino, N - noturno): ").toUpperCase();
    const categoria = prompt("Categoria (F - funcionário, G - gerente): ").toUpperCase();

    const funcionario = new Funcionario(codigoFuncionario, horasTrabalhadas, turno, categoria);
    let valorHoraTrabalhada = 0;

    switch (funcionario.categoria) {
        case 'G':
            if (funcionario.turno === 'M' || funcionario.turno === 'V') {
                valorHoraTrabalhada = salarioMinimo * 0.04;
            }
            break;
        case 'F':
            if (funcionario.turno === 'N') {
                valorHoraTrabalhada = salarioMinimo * 0.02;
            } else if (funcionario.turno === 'M' || funcionario.turno === 'V') {
                valorHoraTrabalhada = salarioMinimo * 0.01;
            }
            break;
        default:
            console.log("Categoria ou turno inválido. Não foi possível calcular o valor da hora.");
            return;
    }

    const salarioInicial = valorHoraTrabalhada * funcionario.horasTrabalhadas;
    let auxilioAlimentacao = 0;

    if (salarioInicial <= 800) {
        auxilioAlimentacao = salarioInicial * 0.25;
    } else if (salarioInicial > 800 && salarioInicial <= 1200) {
        auxilioAlimentacao = salarioInicial * 0.20;
    } else { 
        auxilioAlimentacao = salarioInicial * 0.15;
    }

    const salarioFinal = salarioInicial + auxilioAlimentacao;

    console.log("\n--- Detalhes do Funcionário ---");
    console.log(`Código: ${funcionario.codigo}`);
    console.log(`Horas Trabalhadas: ${funcionario.horasTrabalhadas}`);
    console.log(`Valor da Hora Trabalhada: R$ ${valorHoraTrabalhada.toFixed(2)}`);
    console.log(`Salário Inicial: R$ ${salarioInicial.toFixed(2)}`);
    console.log(`Auxílio Alimentação: R$ ${auxilioAlimentacao.toFixed(2)}`);
    console.log(`Salário Final: R$ ${salarioFinal.toFixed(2)}`);
}

FolhaDePagamento();


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

function Calculo() {
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

Calculo();


//Exercício 6
function converterData() {
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

converterData();
