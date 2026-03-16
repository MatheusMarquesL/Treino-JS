const {buscarProdutos} = require("./buscarProdutos")

test("deve retornar Notebook quando id for 1", () => {
    expect(buscarProdutos(1)).toEqual({nome: "Notebook"})
})

test("deve retornar undefined quando produto não existir", () => {
    expect(buscarProdutos(2)).toBeUndefined()
})