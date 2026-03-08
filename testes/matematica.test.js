const { parOuImpar, somaAte} = require('./matematica')

test("verifica numero par", () => {
    expect(parOuImpar(4)).toBe("par")
})

test("verifica numero impar", () => {
    expect(parOuImpar(3)).toBe("impar")
})

test("soma até 5", () => {
    expect(somaAte(5)).toBe(15)
})