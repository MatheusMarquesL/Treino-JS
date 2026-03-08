const calcularMedia = require('./media')

test('média de 10 e 10 deve ser 10', () => {
    expect(calcularMedia(10,10)).toBe(10)
})

test('média de 8 e 6 deve ser 7', () => {
    expect(calcularMedia(8,6)).toBe(7)
})

test('média de 5 e 9 deve ser 7', () => {
    expect(calcularMedia(5, 9)).toBe(7)
})