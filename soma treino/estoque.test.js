const {verificarEstoque} = require("./estoque")

test("deve retornar true quando quantidade for maior que 0", () => {
    expect(verificarEstoque(5)).toBe(true)
})

test("deve retornar false quando quantidade for 0", () => {
    expect(verificarEstoque(0)).toBe(false)
})