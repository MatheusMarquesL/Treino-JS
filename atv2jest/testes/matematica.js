function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par"
    } else {
        return "impar"
    }
}

function somaAte(n) {
    let soma = 0

    for (
        let i = 1;
        i <= n;
        i++
    ) {
        soma += i
    }
    return soma
}

module.exports = { parOuImpar, somaAte }