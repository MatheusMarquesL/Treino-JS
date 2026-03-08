const deMaior = require('./maioridade')

test('deve retornar maior de idade para 18', () => {
    expect(deMaior(18)).toBe("É maior de idade")
}) 

test('deve retornar maior de idade para 20', () => {
    expect(deMaior(20)).toBe("É maior de idade")
}) 

test('deve retornar menor de idade para 6', () => {
    expect(deMaior(6)).toBe("É menor de idade")
}) 

test('deve retornar maior de idade para 17', () => {
    expect(deMaior(17)).toBe("É menor de idade")
}) 