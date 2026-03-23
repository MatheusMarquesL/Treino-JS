import { ajustarEstoqueLivro, calcularMulta } from "../service/bibliotecaService.js"
import { buscarLivro } from "../repository/livroRepository.js"

export function devolverEmprestimo(req) {
    const { livroId, diasAtraso } = req
    
    const livro = buscarLivro(livroId)
    if(!livro) {
        return { status: 404, mensagem: "Livro não encontrado"}
    }

    ajustarEstoqueLivro(livroId)
    const multa = calcularMulta(diasAtraso)

    return { status: 200, mensagem: "Devolução realizada", multa}
}