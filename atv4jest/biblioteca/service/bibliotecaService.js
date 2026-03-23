import { buscarLivro, atualizarEstoque } from "../repository/livroRepository.js";

export function ajustarEstoqueLivro(id) {
    const livro = buscarLivro(id)
    if(!livro) return null

    atualizarEstoque(id, livro.estoque + 1)
    return livro
}

export function calcularMulta(diasAtraso){ 
    const multaPorDia = 2
    return diasAtraso > 0 ? diasAtraso * multaPorDia : 0
}