let livros = [
    { id: 1, titulo: "JS Básico", estoque: 1},
    { id: 2, titulo: "Node Avançado", estoque: 0 }
]

export function buscarLivro(id) {
    return livros.find(l => l.id === id)
}

export function atualizarEstoque(id, novoEstoque) {
    const livro = buscarLivro(id)
    if (livro) livro.estoque = novoEstoque
}