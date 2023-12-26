function calcularRanking(vitorias, derrotas) {
    // Calcular saldo de ranqueadas
    const saldoRanqueadas = vitorias - derrotas;

    // Determinar o ranking com base no saldo de ranqueadas
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else if (vitorias >=101) {
        return "Imortal";
    }
}

// Exemplo de uso da função
const vitoriasExemplo = 60;
const derrotasExemplo = 20;
const resultado = calcularRanking(vitoriasExemplo, derrotasExemplo);
console.log(resultado);  // Saída: "Ouro"
