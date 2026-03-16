function calcularPrecoTotal(preco, quantidade) {
    if(quantidade === 0){
        throw new Error("Quantidade inválida")
    }
    return preco * quantidade
}

module.exports = {calcularPrecoTotal}