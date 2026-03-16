const  {listarProdutos} = require("./produtos")

test("deve conter notebook na lista", () => {
    expect(listarProdutos()).toContain("Notebook")
})

test("deve conter mouse na lista", () => {
    expect(listarProdutos()).toContain("Mouse")
})

test("deve conter Teclado na lista", () => {
    expect(listarProdutos()).toContain("Teclado")
})

test("a lista deve ter 3 produtos", () => {
    expect(listarProdutos().length).toBe(3)
})