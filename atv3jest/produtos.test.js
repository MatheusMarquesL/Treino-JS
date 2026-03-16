const { calcularPrecoTotal,
  verificarEstoque,
  listarProdutos,
  buscarProduto } = require("./produtos")

describe("calcularPrecoTotal", () => {
    test("deve calcular o preço total corretamente", () => {
    expect(calcularPrecoTotal(10, 2)).toBe(20)
})

})

test("deve retornar NaN se o preço ou quantidade não forem números", () => {
    expect(calcularPrecoTotal("10", 2)).toBeNaN()
})

test("deve lançar erro se quantidade for 0", () => {
    expect(() => calcularPrecoTotal(10, 0)).toThrow("Quantidade inválida")
})

test("deve retornar true quando houver estoque", () => {
    expect(verificarEstoque(5)).toBe(true)
})

test("deve retornar false quando estoque for 0", () => {
    expect(verificarEstoque(0)).toBe(false)
})

test("deve retornar a lista de produtos", () => {
    const produtos = listarProdutos()

    expect(produtos).toContain("Notebook")
    expect(produtos).toContain("Mouse")
    expect(produtos).toContain("Teclado")
    expect(produtos.length).toBe(3)
})

test("deve retornar Notebook quando id for 1", () => {
    expect(buscarProduto(1)).toEqual({ nome: "Notebook" })
})

test("deve retornar undefined quando produto não existir", () => {
    expect(buscarProduto(2)).toBeUndefined()
})
