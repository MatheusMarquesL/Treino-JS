import { devolverEmprestimo } from "../controller/bibliotecaController.js";

function assert(condicao, mensagem) {
    if (!condicao) {
        console.log("X", mensagem)
    } else {
        console.log("V", mensagem)
    }
}

const teste1 = devolverEmprestimo({ livroId: 1, diasAtraso: 0 })
assert(teste1.status === 200, "Devolução válida")

const teste2 = devolverEmprestimo({ livroId: 999, diasAtraso: 0 })
assert(teste2.status === 404, "Livro não encontrado")

const teste3 = devolverEmprestimo({ livroId: 1, diasAtraso: 3 })
assert(teste3.multa === 6, "Multa correta (3 dias = 6)")