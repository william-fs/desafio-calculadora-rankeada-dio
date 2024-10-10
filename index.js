// Calculadora Rankeada - DIO

function calculoRankeada(qtdVitorias, qtdDerrotas) {
    let saldoVitorias = qtdVitorias - qtdDerrotas;
    let classificacao;

    if (saldoVitorias <= 10) {
        classificacao = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        classificacao = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        classificacao = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        classificacao = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        classificacao = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        classificacao = "Lendário";
    } else if (saldoVitorias >= 101) {
        classificacao = "Imortal";
    }

    return `O Herói tem de saldo de vitórias ${saldoVitorias} e está no nível de ${classificacao}`;
}

console.log(calculoRankeada(110, 100));
console.log(calculoRankeada(110, 90));
console.log(calculoRankeada(110, 60));
console.log(calculoRankeada(110, 59));
console.log(calculoRankeada(110, 27));
console.log(calculoRankeada(110, 12));
console.log(calculoRankeada(110, 2));
