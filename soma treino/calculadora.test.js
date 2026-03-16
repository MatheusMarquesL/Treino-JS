const {soma} = require("./calculadora")

test("deve somar dois numeros", () => {
    expect(soma(2,3)).toBe(5)
})