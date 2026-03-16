const {calcularPrecoTotal} = require("./preco")

test("deve calcular o preço total", () => {
    expect(calcularPrecoTotal(10, 2)).toBe(20)
})

test("deve lançar o erro quando quantidade for 0", () => {
    expect(() => calcularPrecoTotal(10, 0)).toThrow("Quantidade inválida")
})